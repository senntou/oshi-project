package controller

import (
	"backend/openapi"
	"backend/repositories"
	"log"
	"net/http"
	"strings"

	"github.com/labstack/echo/v4"
)

func GetHealthCheck(c echo.Context) error {
	response := openapi.HealthCheckResponse{Status: "ok"}
	return c.JSON(http.StatusOK, response)
}

func GetAllActors(c echo.Context) error {
	response := openapi.ActorsResponse{Actors: []openapi.Actor{}}

	results, err := repositories.GetAllActors()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	response.Actors = results

	return c.JSON(http.StatusOK, response)
}

func GetActorContents(c echo.Context) error {
	actorId := c.Param("actorId")

	actorName, err := repositories.GetActorName(actorId)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	contents, err := repositories.GetActorContents(actorId)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	response := openapi.ActorContentsResponse{
		Actor:    openapi.Actor{Id: actorId, Name: actorName},
		Contents: contents,
	}

	return c.JSON(http.StatusOK, response)
}

func GetMe(c echo.Context) error {
	log.Print("GetMe")
	authHeader := c.Request().Header.Get("Authorization")
	if authHeader == "" {
		return echo.NewHTTPError(http.StatusUnauthorized, "missing or invalid token")
	}
	token := strings.TrimPrefix(authHeader, "Bearer ")

	user := openapi.User{
		Id:   "id",
		Name: token,
	}

	return c.JSON(http.StatusOK, openapi.UsersMeResponse{User: user})
}
