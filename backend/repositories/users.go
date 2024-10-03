package repositories

import "backend/openapi"

var getUserQueryByFirebaseUid string = `
SELECT id, name
FROM "user"
WHERE firebase_uid = $1
`

func GetUserByFirebaseUid(firebaseUid string) (*openapi.User, error) {
	db, err := GetDB()
	if err != nil {
		return nil, err
	}
	row := db.QueryRow(getUserQueryByFirebaseUid, firebaseUid)

	var user openapi.User
	err = row.Scan(&user.Id, &user.Name)
	if err != nil {
		return nil, err
	}

	return &user, nil
}

var createUserQuery string = `
INSERT INTO "user" (firebase_uid, name)
VALUES ($1, $2)
RETURNING id, name
`

func CreateUser(firebaseUid string, name string) (*openapi.User, error) {
	db, err := GetDB()
	if err != nil {
		return nil, err
	}

	var user openapi.User
	row := db.QueryRow(createUserQuery, firebaseUid, name)
	err = row.Scan(&user.Id, &user.Name)
	if err != nil {
		return nil, err
	}

	return &user, nil
}
