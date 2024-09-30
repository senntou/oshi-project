package repositories

import (
	"backend/openapi"
)

func GetActors() ([]openapi.Actor, error) {

	getActorsQuery := `
	SELECT id, name
	FROM actor
	`

	db, err := GetDB()
	if err != nil {
		return nil, err
	}
	rows, err := db.Query(getActorsQuery)
	if err != nil {
		return nil, err
	}

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
