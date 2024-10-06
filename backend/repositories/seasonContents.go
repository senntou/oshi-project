package repositories

import "backend/openapi"

var InsertSeasonContentQuery string = `
INSERT INTO content (	
	actor_id,
	title,
	description,
	year,
	season,

	schedule_type,
	category
) VALUES (
	$1,
	$2,
	$3,
	$4,
	$5,

	'SEASON',
	'ANIME'
)
RETURNING id, actor_id, title
`

var InsertContentActionLogQuery string = `
INSERT INTO content_action_log (
	actor_id,
	content_title,
	content_description,
	content_year,
	content_season,

	user_id,
	content_id,
	
	action_type,
	content_category,
	content_schedule_type
	) VALUES (
	$1,
	$2,
	$3,
	$4,
	$5,

	$6,
	$7,

	'CREATE',
	'ANIME',
	'SEASON'
)
`

func InsertSeasonContent(seasonContent openapi.SeasonContentRequestBody, actorId string, userId string) (*openapi.ContentResponse, error) {
	db, err := GetDB()
	if err != nil {
		return nil, err
	}

	// Transaction
	tx, err := db.Begin()
	if err != nil {
		return nil, err
	}
	defer tx.Rollback()

	// Insert content
	row := tx.QueryRow(
		InsertSeasonContentQuery,
		actorId,
		seasonContent.Title,
		seasonContent.Description,
		seasonContent.Year,
		seasonContent.Season,
	)

	var content openapi.ContentResponse
	err = row.Scan(
		&content.Id,
		&content.ActorId,
		&content.Title,
	)
	if err != nil {
		return nil, err
	}

	// Insert content action log
	_, err = tx.Exec(
		InsertContentActionLogQuery,
		actorId,
		seasonContent.Title,
		seasonContent.Description,
		seasonContent.Year,
		seasonContent.Season,

		content.Id,
		userId,
	)
	if err != nil {
		return nil, err
	}

	// Commit
	err = tx.Commit()
	if err != nil {
		return nil, err
	}

	return &content, err
}
