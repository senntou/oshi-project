.PHONY: all docker frontend backend

DOCKER_DIR := project/docker
SEED_DIR := project/seed
MIGRATE_DIR := project/migrations

compose/up:
	cd $(DOCKER_DIR) && docker compose up -d

compose/down:
	cd $(DOCKER_DIR) && docker compose down	

migrate:
	cd $(DOCKER_DIR) && docker compose run --rm migrate
	
psql:
	cd $(DOCKER_DIR) && docker compose exec postgres psql mydb

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
