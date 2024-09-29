.PHONY: all docker frontend backend

SEED_DIR := project/seed
MIGRATE_DIR := project/migrations

compose/up:
	docker compose up -d

compose/down:
	docker compose down	

migrate:
	docker compose run --rm migrate
	
psql:
	docker compose exec postgres psql mydb

exec:
	docker compose exec postgres sh

save-seed:
	sh ./saveseed.sh

gen:
	oapi-codegen -config ./project/api/cfg.yaml ./project/api/openapi.yaml

seed:
	@echo "Running seed files..."
	@for file in $(SEED_DIR)/*.sql; do \
		echo "Running $$file"; \
		docker-compose exec -T postgres psql -U root -d mydb -f $$file; \
	done

run/frontend:
	cd frontend && npm run dev

run/backend:
	cd backend && go run main.go

run/admin:
	cd admin && npm run dev
