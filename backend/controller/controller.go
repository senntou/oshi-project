package controller

import (
	"backend/openapi"
	"backend/repositories"
	"net/http"

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
