CREATE EXTENSION if not exists pgcrypto;

CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- User table
CREATE TABLE "user" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    firebase_id VARCHAR NOT NULL,
    name VARCHAR NOT NULL,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TRIGGER update_user_timestamp
BEFORE UPDATE ON "user"
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();

-- Agency table
CREATE TABLE agency (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TRIGGER update_agency_timestamp
BEFORE UPDATE ON agency
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();

-- Entertainer table
CREATE TABLE actor (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR NOT NULL,
    name_kana VARCHAR NOT NULL,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR,
    first_name_kana VARCHAR NOT NULL,
    last_name_kana VARCHAR,
    gender VARCHAR(10) NOT NULL CHECK (gender IN ('MALE', 'FEMALE', 'OTHER')),
    agency_id UUID NOT NULL,
    note TEXT,
    sns_twitter_url VARCHAR,
    sns_instagram_url VARCHAR,
    sns_youtube_url VARCHAR,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (agency_id) REFERENCES agency(id) 
);
CREATE TRIGGER update_actor_timestamp
BEFORE UPDATE ON actor
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();

-- Appearing Content table
CREATE TABLE appearing_content (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    actor_id UUID NOT NULL,
    title VARCHAR NOT NULL,
    category VARCHAR(10) NOT NULL CHECK (category IN ('ANIME', 'RADIO', 'LIVE', 'EVENT', 'PROGRAM', 'ANNIVERSARY', 'OTHER')),
    place VARCHAR,
    description TEXT,
    schedule_type VARCHAR(10) NOT NULL CHECK (schedule_type IN ('SPECIFIC', 'WEEKLY', 'MONTHLY', 'BIWEEKLY', 'YEARLY', 'RANGE', 'IRREGULAR')),
    start_date TIMESTAMP,
    end_date TIMESTAMP,
    "year" INTEGER,
    season VARCHAR(10) CHECK (season IN ('SPRING', 'SUMMER', 'AUTUMN', 'WINTER')),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (actor_id) REFERENCES actor(id)
);
CREATE TRIGGER update_appearing_content_timestamp
BEFORE UPDATE ON appearing_content
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();
-- Index
CREATE INDEX appearing_content_actor_id_index ON appearing_content(actor_id);

-- Content Date table
CREATE TABLE content_date (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    appearing_content_id UUID NOT NULL,
    content_date TIMESTAMP NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (appearing_content_id) REFERENCES appearing_content(id)
);
CREATE TRIGGER update_content_date_timestamp
BEFORE UPDATE ON content_date
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();
-- Index
CREATE INDEX content_date_appearing_content_id_index ON content_date(appearing_content_id);

-- Update Appearing Content table
CREATE TABLE content_action_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    content_id UUID NOT NULL,
    action_type VARCHAR(10) NOT NULL CHECK (action_type IN ('CREATE', 'UPDATE', 'DELETE')),
    content_title VARCHAR NOT NULL,
    content_category VARCHAR(10) NOT NULL CHECK (content_category IN ('ANIME', 'RADIO', 'LIVE', 'EVENT', 'PROGRAM', 'ANNIVERSARY', 'OTHER')),
    content_place VARCHAR,
    content_description TEXT,
    content_schedule_type VARCHAR(10) NOT NULL CHECK (content_schedule_type IN ('SPECIFIC', 'WEEKLY', 'MONTHLY', 'BIWEEKLY', 'YEARLY', 'RANGE', 'IRREGULAR')),
    content_start_date TIMESTAMP,
    content_end_date TIMESTAMP,
    content_year INTEGER,
    content_season VARCHAR(10) CHECK (content_season IN ('SPRING', 'SUMMER', 'AUTUMN', 'WINTER')),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES "user"(id),
    FOREIGN KEY (content_id) REFERENCES appearing_content(id) 
);
CREATE TRIGGER update_content_action_log_timestamp
BEFORE UPDATE ON content_action_log
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();

-- Update Content Date
CREATE TABLE content_date_action_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    content_date_id UUID NOT NULL,
    
    action_type VARCHAR(10) NOT NULL CHECK (action_type IN ('CREATE', 'UPDATE', 'DELETE')),
    content_id UUID NOT NULL,
    content_date TIMESTAMP NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES "user"(id)
);

-- Update Entertainer table
CREATE TABLE update_actor (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    actor_id UUID NOT NULL,
    actor_note TEXT,  
    actor_sns_twitter_url VARCHAR,
    actor_sns_instagram_url VARCHAR,
    actor_sns_youtube_url VARCHAR,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES "user"(id),
    FOREIGN KEY (actor_id) REFERENCES actor(id)
);
CREATE TRIGGER update_update_actor_timestamp
BEFORE UPDATE ON update_actor
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();
