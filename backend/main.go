package main

import (
	"backend/auth"
	"backend/controller"
	"log"
	"os"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()

	// Logger middleware
	// e.Use(middleware.Logger())
	e.Use(middleware.LoggerWithConfig(middleware.LoggerConfig{
		Format: "method=${method}, uri=${uri}, status=${status}, time=${time_rfc3339_nano}\n",
	}))

	// Firebaseの初期化
	err := auth.InitFirebase()
	if err != nil {
		log.Fatalf("failed to initialize firebase: %v", err)
	}

	// CORS middleware
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:8080"},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept, echo.HeaderAuthorization},
	}))

	// Recover middleware
	e.Use(middleware.Recover())

	e.GET("/healthcheck", controller.GetHealthCheck)

	e.GET("v1/actors", controller.GetAllActors)
	e.GET("v1/actors/:actorId/contents", controller.GetActorContents)
	e.POST("v1/actors/:actorId/contents/season", controller.PostSeasonContent, auth.AuthMiddleware)

	e.GET("v1/users/me", controller.GetMe, auth.AuthMiddleware)

	port := "5000"
	if envPort := os.Getenv("PORT"); envPort != "" {
		port = envPort
	}
	e.Logger.Fatal(e.Start(":" + port))
}
