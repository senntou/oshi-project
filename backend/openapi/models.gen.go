// Package openapi provides primitives to interact with the openapi HTTP API.
//
// Code generated by github.com/oapi-codegen/oapi-codegen/v2 version v2.4.0 DO NOT EDIT.
package openapi

import (
	"bytes"
	"compress/gzip"
	"encoding/base64"
	"fmt"
	"net/url"
	"path"
	"strings"

	"github.com/getkin/kin-openapi/openapi3"
)

const (
	BearerScopes = "bearer.Scopes"
)

// Defines values for Category.
const (
	ANIME       Category = "ANIME"
	ANNIVERSARY Category = "ANNIVERSARY"
	EVENT       Category = "EVENT"
	LIVE        Category = "LIVE"
	OTHER       Category = "OTHER"
	PROGRAM     Category = "PROGRAM"
	RADIO       Category = "RADIO"
)

// Defines values for Season.
const (
	AUTUMN Season = "AUTUMN"
	SPRING Season = "SPRING"
	SUMMER Season = "SUMMER"
	WINTER Season = "WINTER"
)

// Actor defines model for Actor.
type Actor struct {
	Id   string `json:"id"`
	Name string `json:"name"`
}

// ActorContentsResponse defines model for ActorContentsResponse.
type ActorContentsResponse struct {
	Actor    Actor       `json:"Actor"`
	Contents ContentList `json:"contents"`
}

// ActorsResponse defines model for ActorsResponse.
type ActorsResponse struct {
	Actors []Actor `json:"actors"`
}

// AnimeContent defines model for AnimeContent.
type AnimeContent struct {
	ContentId   string `json:"contentId"`
	Description string `json:"description"`
	Season      Season `json:"season"`
	Title       string `json:"title"`
	Year        int    `json:"year"`
}

// Category defines model for Category.
type Category string

// ContentList defines model for ContentList.
type ContentList struct {
	Anime []AnimeContent `json:"anime"`
	Live  []LiveContent  `json:"live"`
	Radio []RadioContent `json:"radio"`
}

// ContentResponse defines model for ContentResponse.
type ContentResponse struct {
	ActorId      string   `json:"actorId"`
	Category     Category `json:"category"`
	CreatedAt    string   `json:"createdAt"`
	Description  *string  `json:"description,omitempty"`
	EndDate      *string  `json:"endDate,omitempty"`
	Id           string   `json:"id"`
	ScheduleType string   `json:"scheduleType"`
	Season       *Season  `json:"season,omitempty"`
	StartDate    *string  `json:"startDate,omitempty"`
	Title        string   `json:"title"`
	UpdatedAt    string   `json:"updatedAt"`
	Year         *int     `json:"year,omitempty"`
}

// HealthCheckResponse defines model for HealthCheckResponse.
type HealthCheckResponse struct {
	Status string `json:"status"`
}

// LiveContent defines model for LiveContent.
type LiveContent struct {
	ContentId         string              `json:"contentId"`
	Description       string              `json:"description"`
	SpecificDateEvent []SpecificDateEvent `json:"specificDateEvent"`
	Title             string              `json:"title"`
}

// RadioContent defines model for RadioContent.
type RadioContent struct {
	ContentId    string `json:"contentId"`
	Description  string `json:"description"`
	EndDate      string `json:"endDate"`
	ScheduleType string `json:"scheduleType"`
	StartDate    string `json:"startDate"`
	Title        string `json:"title"`
}

// Season defines model for Season.
type Season string

// SeasonContentRequestBody defines model for SeasonContentRequestBody.
type SeasonContentRequestBody struct {
	Description string `json:"description"`
	Season      Season `json:"season"`
	Title       string `json:"title"`
	UserId      string `json:"userId"`
	Year        int    `json:"year"`
}

// SpecificDateEvent defines model for SpecificDateEvent.
type SpecificDateEvent struct {
	CustomTitle string `json:"customTitle"`
	Date        string `json:"date"`
}

// User defines model for User.
type User struct {
	Id   string `json:"id"`
	Name string `json:"name"`
}

// UsersMeResponse defines model for UsersMeResponse.
type UsersMeResponse struct {
	User User `json:"user"`
}

// PostV1ActorsActorIdContentsSeasonJSONRequestBody defines body for PostV1ActorsActorIdContentsSeason for application/json ContentType.
type PostV1ActorsActorIdContentsSeasonJSONRequestBody = SeasonContentRequestBody

// Base64 encoded, gzipped, json marshaled Swagger object
var swaggerSpec = []string{

	"H4sIAAAAAAAC/8xXXWsbRxf+K2Le93Lxym1zozvZEbbAko0kuxTji8nusTSptLuZmRWoRhBrm+I2Fw0h",
	"9AP6dVGSQCGlBEoLbv/MxG5+RpkPSSvtrKQY2/RGSJqZc55znuecM3OCvLAXhQEEnKHSCWJeB3pYfS17",
	"PKTyS0TDCCgnoP4mvvzkgwhQCTFOSdBGQwcFuAeWhaGDKDyICQUflQ7lYbP1yBlvDe/dB49LG8rjZhhw",
	"iaYBLAoDBlkEE2D/p3CMSuh/7jQG1wTg6k1DB3nG3rIDxu8OYTwDWxtL2cpFvwA2VusqhRx6bOUAjCNM",
	"KR5kkBmjVjwB6YGJKovGhFK1s+kD8yiJOAkD6zoDzPTSohCaepeMgfAuWC0NANPUAgk4tIFm4pzCHRub",
	"BWkMTZDZErKJObRDOpDuIIh7itl6tVZBDmqU71Z3kYN2qgfyZ+WgUm8hB+01drca5RpyULlerx5UGs1y",
	"4yPkoN3WdqWRcjKNJy2jrAQkJasrIE1gRggO6pL+6sZ2SH+RLYp9Eq5srCF351qbl6gKeuzCwLbyow0u",
	"qaAcxXopcheW+XifPEMBc/DL/Eo1AIF/F3O7qnOapAThx11oqYVrqCvGMeW5KPKrLo78BZGvWJOqmY85",
	"mZblhIm5eNP5TiOwSWEbcJd3NjvgfZwvB8Yxj9nyoWP22fykq+K6W2QEHjkmnmSn0jcOVqquZuakpWDz",
	"uH3nvpnFaUvUTMVfc6YWFdLyirlSBbx7lmaVPPU6hW9LW3NSz+OB09xrVOtbyEHN/Vqt0pCTZb+1X6sj",
	"B31Yrbdypoq2M2mQD2JgfCP0B1kqbm9yxwzymvGKDcRYuPpEb9pqbE6aMeNhr5UbhW+XzhxSX1OdNmbD",
	"s8/gdm/M0iGrQX6PjA2iRWQr1DZuLC6VgryYEj5oyuPayz3AVPuZkR8qx7wTUvIJlr8LHcA+0ELMSNAu",
	"8A4UNtSxgsIBa6bKZFLGBifuO5xHaCi9k+A4zDrqhh7uFtphAUdkoqcS2goL5b0qclAfKNM719eKa0WZ",
	"ujCCQO4uoffVXw6KMO+ocNyOGj+eHD/ydxuUsGReVSRS9WgL+HZqm8yeJkGZeK9YTDVGdXmJoi7x1Hn3",
	"vilBzcAyfmzDUOViNgeXyaOLn34Tp68uvvzq4u+vL8+eXHzxo2Ys7vWwvBohkXwjkl/E6E+RnIrRC5Ek",
	"YvTrP89eitFLkbwWyeci+V6Mflbfz9RZt7/uTl8ueZk4WNevn5tMw9z7ypKBZux5wJhk9wPteHZ9A/sF",
	"0zzlnju2PdWAAw1wt9AE2gdaqFAqn2HD2Vy4J+beM3TT78tl6SnrQ+MnrtIcxT3gINN7eIKIhCB1OC76",
	"UuqCNS1PTmNwUmmbbyFHN01D5pF+y2ykNX15/uztw0fi9JUYvVbC/Ux9fvrmj4dvn78Qo6e6HsTpt2L0",
	"eBWhW8h1p2MzCpmF5L2Q5bFsZumNcj1zIbgWmnNvHLoUbkxe84/A2xeWGW+Ko/FgOzySeZ5qTmfn4ofH",
	"WdmJ0dM3f313efZkFcHJKctcfQ/Ibx5myt9kc52/SPw30y6S5yI5F6PfRXI+N+4WDDFlXbrTdRfTrrlR",
	"lFxXXRw6IeOlO8ViEQ2Phv8GAAD//7o3KpASFQAA",
}

// GetSwagger returns the content of the embedded swagger specification file
// or error if failed to decode
func decodeSpec() ([]byte, error) {
	zipped, err := base64.StdEncoding.DecodeString(strings.Join(swaggerSpec, ""))
	if err != nil {
		return nil, fmt.Errorf("error base64 decoding spec: %w", err)
	}
	zr, err := gzip.NewReader(bytes.NewReader(zipped))
	if err != nil {
		return nil, fmt.Errorf("error decompressing spec: %w", err)
	}
	var buf bytes.Buffer
	_, err = buf.ReadFrom(zr)
	if err != nil {
		return nil, fmt.Errorf("error decompressing spec: %w", err)
	}

	return buf.Bytes(), nil
}

var rawSpec = decodeSpecCached()

// a naive cached of a decoded swagger spec
func decodeSpecCached() func() ([]byte, error) {
	data, err := decodeSpec()
	return func() ([]byte, error) {
		return data, err
	}
}

// Constructs a synthetic filesystem for resolving external references when loading openapi specifications.
func PathToRawSpec(pathToFile string) map[string]func() ([]byte, error) {
	res := make(map[string]func() ([]byte, error))
	if len(pathToFile) > 0 {
		res[pathToFile] = rawSpec
	}

	return res
}

// GetSwagger returns the Swagger specification corresponding to the generated code
// in this file. The external references of Swagger specification are resolved.
// The logic of resolving external references is tightly connected to "import-mapping" feature.
// Externally referenced files must be embedded in the corresponding golang packages.
// Urls can be supported but this task was out of the scope.
func GetSwagger() (swagger *openapi3.T, err error) {
	resolvePath := PathToRawSpec("")

	loader := openapi3.NewLoader()
	loader.IsExternalRefsAllowed = true
	loader.ReadFromURIFunc = func(loader *openapi3.Loader, url *url.URL) ([]byte, error) {
		pathToFile := url.String()
		pathToFile = path.Clean(pathToFile)
		getSpec, ok := resolvePath[pathToFile]
		if !ok {
			err1 := fmt.Errorf("path not found: %s", pathToFile)
			return nil, err1
		}
		return getSpec()
	}
	var specData []byte
	specData, err = rawSpec()
	if err != nil {
		return
	}
	swagger, err = loader.LoadFromData(specData)
	if err != nil {
		return
	}
	return
}
