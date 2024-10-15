.PHONY: docker frontend backend

include .env
SEED_DIR := project/seed
MIGRATE_DIR := project/migrations

compose/up:
	docker compose up -d postgres swagger-ui

compose/down:
	docker compose down	

migrate:
	docker compose run --rm migrate

refresh: compose/down compose/up migrate 
	
psql:
	docker compose exec postgres psql ${POSTGRES_DB}

exec:
	docker compose exec postgres sh

save-seed:
	sh ./saveseed.sh

gen:
	oapi-codegen -config ./project/api/cfg.yaml ./project/api/openapi.yaml
	cd frontend && npm run gen

seed:
	@echo "Running seed files..."
	@for file in $(SEED_DIR)/*.sql; do \
		echo "Running $$file"; \
		docker-compose exec -T postgres psql -U ${POSTGRES_USER} -d ${POSTGRES_DB} -f home/seed/$$(basename $$file); \
	done

run/frontend:
	cd frontend && npm run dev

run/backend:
	docker compose up go

run/admin:
	cd admin && npm run dev

run:
	@trap 'kill 0' SIGINT; \
	(cd frontend && npm run dev) & \
	(cd backend && go run main.go) & \
	(cd admin && npm run dev) & \
	wait
