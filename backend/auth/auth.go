package auth

import (
	"context"
	"log"
	"net/http"
	"strings"

	"github.com/labstack/echo/v4"

	firebase "firebase.google.com/go"
	"google.golang.org/api/option"
)

var firebaseApp *firebase.App

func InitFirebase() error {
	// firebaseの初期化
	log.Print("Initializing Firebase")

	opt := option.WithCredentialsFile("firebase-key.json")
	app, err := firebase.NewApp(context.Background(), nil, opt)
	if err != nil {
		return err
	}
	firebaseApp = app
	return nil
}

func AuthMiddleware(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		// tokenの取得
		authHeader := c.Request().Header.Get("Authorization")
		if authHeader == "" {
			return echo.NewHTTPError(http.StatusUnauthorized, "missing or invalid token")
		}
		token := strings.TrimPrefix(authHeader, "Bearer ")

		// tokenの検証
		ctx := context.Background()
		client, err := firebaseApp.Auth(ctx)
		if err != nil {
			return echo.NewHTTPError(http.StatusInternalServerError, "failed to initialize firebase auth")
		}
		decodedToken, err := client.VerifyIDToken(ctx, token)
		if err != nil {
			return echo.NewHTTPError(http.StatusUnauthorized, "invalid token")
		}

		// tokenからuidを取得
		uid := decodedToken.UID
		if uid == "" {
			return echo.NewHTTPError(http.StatusUnauthorized, "invalid token")
		}

		// uidをcontextにセット
		c.Set("uid", uid)
		return next(c)
	}
}
