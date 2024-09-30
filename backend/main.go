package main

import (
	"backend/controller"
	"log"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func loadenv() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}

func main() {
	loadenv()

	e := echo.New()

	// CORS middleware
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:8080"},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
	}))

	e.GET("/healthcheck", controller.GetHealthCheck)

	e.GET("v1/actors", controller.GetAllActors)
	e.GET("v1/actors/:actorId/contents", controller.GetActorContents)

	e.Logger.Fatal(e.Start(":5000"))
}
