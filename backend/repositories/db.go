package repositories

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/lib/pq"
)

func GetDB() (*sql.DB, error) {

	user := os.Getenv("POSTGRES_USER")
	dbname := os.Getenv("POSTGRES_DB")
	password := os.Getenv("POSTGRES_PASSWORD")

	dbDriver := "postgres"
	dsn := fmt.Sprintf(
		"host=localhost port=5432 user=%s password=%s dbname=%s sslmode=disable",
		user, password, dbname,
	)

	db, err := sql.Open(dbDriver, dsn)

	if err != nil {
		return nil, err
	}
	return db, err
}
