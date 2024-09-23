package controller

import (
	"backend/openapi"
	"net/http"

	"github.com/labstack/echo/v4"
)

func GetHealthCheck(c echo.Context) error {
	response := openapi.HealthCheckResponse{Status: "ok"}
	return c.JSON(http.StatusOK, response)
}
