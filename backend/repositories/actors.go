package repositories

import (
	"backend/openapi"
)

var getActorQuery string = `
SELECT name
FROM actor
WHERE id = $1
`

func GetActorName(actorId string) (string, error) {
	db, err := GetDB()
	if err != nil {
		return "", err
	}
	row := db.QueryRow(getActorQuery, actorId)

	var actorName string
	err = row.Scan(&actorName)
	if err != nil {
		return "", err
	}

	return actorName, nil
}

var getActorsQuery string = `
SELECT id, name
FROM actor
`

func GetAllActors() ([]openapi.Actor, error) {
	db, err := GetDB()
	if err != nil {
		return nil, err
	}
	rows, err := db.Query(getActorsQuery)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var actors = []openapi.Actor{}

	for rows.Next() {
		var actor openapi.Actor
		err = rows.Scan(&actor.Id, &actor.Name)
		if err != nil {
			return nil, err
		}
		actors = append(actors, actor)
	}
	err = rows.Err()
	if err != nil {
		return nil, err
	}

	return actors, nil
}
