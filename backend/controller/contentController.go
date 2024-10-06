package controller

import (
	"backend/openapi"
	"backend/repositories"
	"net/http"

	"github.com/labstack/echo/v4"
)

func validateSeason(season openapi.Season) bool {
	switch season {
	case openapi.AUTUMN, openapi.SPRING, openapi.SUMMER, openapi.WINTER:
		return true
	}
	return false
}
func validateUserId(userId string) bool {
	return false
}

func validateSeasonContentRequest(seasonContent openapi.SeasonContentRequestBody) error {
	if seasonContent.Title == "" {
		return echo.NewHTTPError(http.StatusBadRequest, "Title is required")
	}
	if !validateSeason(seasonContent.Season) {
		return echo.NewHTTPError(http.StatusBadRequest, "Season is invalid")
	}
	if seasonContent.Year <= 0 {
		return echo.NewHTTPError(http.StatusBadRequest, "Year is null or invalid")
	}
	return nil
}

func PostSeasonContent(c echo.Context) error {
	actorId := c.Param("actorId")
	var seasonContent openapi.SeasonContentRequestBody
	if err := c.Bind(&seasonContent); err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}

	err := validateSeasonContentRequest(seasonContent)
	if err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}

	uid := c.Get("uid").(string)
	user, err := repositories.GetUserByFirebaseUid(uid)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	res, err := repositories.InsertSeasonContent(seasonContent, actorId, user.Id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	return c.JSON(http.StatusOK, res)
}
