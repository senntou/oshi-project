package repositories

import (
	"backend/openapi"
)

var getActorContentsQuery string = `
SELECT
	content.id,
	content.title,
	content.description,
	content.year,
	content.season,
	content.schedule_type,
	content.start_date,
	content.end_date,
	csd.content_date
FROM
	content as content
	JOIN
		actor as actor
	ON
		content.actor_id = actor.id
	LEFT JOIN
		content_specific_date as csd
	ON
		content.id = csd.appearing_content_id
WHERE
	content.actor_id = $1
`

func GetActorContents(actorId string) (openapi.ContentList, error) {
	db, err := GetDB()
	if err != nil {
		return openapi.ContentList{}, err
	}

	rows, err := db.Query(getActorContentsQuery, actorId)
	if err != nil {
		return openapi.ContentList{}, err
	}
	defer rows.Close()

	var contents openapi.ContentList
	for rows.Next() {
		// TODO: Implement
	}

	return contents, nil

}
