package repositories

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/lib/pq"
)

var db *sql.DB

func GetDB() (*sql.DB, error) {
	env := os.Getenv("ENV")

	if db != nil {
		return db, nil
	}

	if env == "development" {
		dbPool, err := getDBPoolForDevelopment()
		if err != nil {
			return nil, err
		}
		db = dbPool
	} else {
		dbPool, err := getDBPoolForProduction()
		if err != nil {
			return nil, err
		}
		db = dbPool
	}

	return db, nil
}

// connectUnixSocket initializes a Unix socket connection pool for
// a Cloud SQL instance of Postgres.
func getDBPoolForProduction() (*sql.DB, error) {
	mustGetenv := func(k string) string {
		v := os.Getenv(k)
		if v == "" {
			log.Fatalf("Fatal Error in connect_unix.go: %s environment variable not set.\n", k)
		}
		return v
	}
	// Note: Saving credentials in environment variables is convenient, but not
	// secure - consider a more secure solution such as
	// Cloud Secret Manager (https://cloud.google.com/secret-manager) to help
	// keep secrets safe.
	var (
		dbUser         = mustGetenv("DB_USER")              // e.g. 'my-db-user'
		dbPwd          = mustGetenv("DB_PASS")              // e.g. 'my-db-password'
		unixSocketPath = mustGetenv("INSTANCE_UNIX_SOCKET") // e.g. '/cloudsql/project:region:instance'
		dbName         = mustGetenv("DB_NAME")              // e.g. 'my-database'
	)

	dbURI := fmt.Sprintf("user=%s password=%s database=%s host=%s",
		dbUser, dbPwd, dbName, unixSocketPath)

	// dbPool is the pool of database connections.
	dbPool, err := sql.Open("postgres", dbURI)
	if err != nil {
		return nil, fmt.Errorf("sql.Open: %w", err)
	}

	return dbPool, nil
}

func getDBPoolForDevelopment() (*sql.DB, error) {

	user := os.Getenv("POSTGRES_USER")
	dbname := os.Getenv("POSTGRES_DB")
	password := os.Getenv("POSTGRES_PASSWORD")

	dbDriver := "postgres"
	dsn := fmt.Sprintf(
		"host=postgres port=5432 user=%s password=%s dbname=%s sslmode=disable",
		user, password, dbname,
	)

	dbPool, err := sql.Open(dbDriver, dsn)

	if err != nil {
		return nil, err
	}
	return dbPool, err
}
