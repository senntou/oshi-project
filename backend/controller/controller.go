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

func GetActors(c echo.Context) error {
	response := openapi.ActorsResponse{Actors: []openapi.Actor{}}

	results, err := repositories.GetActors()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	response.Actors = results

	return c.JSON(http.StatusOK, response)
}
