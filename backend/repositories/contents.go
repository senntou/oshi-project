package repositories

import (
	"backend/openapi"
)

var getActorContentsQuery string = `
SELECT
	ac.id,
	ac.title,
	ac.description,
	ac.year,
	ac.season,
	ac.schedule_type,
	ac.start_date,
	ac.end_date,
	csd.content_date
FROM
	appearing_content as ac
	JOIN
		actor as actor
	ON
		ac.actor_id = actor.id
	LEFT JOIN
		content_specific_date as csd
	ON
		ac.id = csd.appearing_content_id
WHERE
	ac.actor_id = $1
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
