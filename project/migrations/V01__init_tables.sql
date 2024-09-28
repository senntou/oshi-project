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
    image_url VARCHAR,
    
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
CREATE TABLE entertainer (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR NOT NULL,
    gender VARCHAR(10) CHECK (gender IN ('MALE', 'FEMALE')),
    agency_id UUID,
    note TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (agency_id) REFERENCES agency(id) 
);
CREATE TRIGGER update_entertainer_timestamp
BEFORE UPDATE ON entertainer
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();

-- Appearing Content table
CREATE TABLE appearing_content (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entertainer_id UUID NOT NULL,
    title VARCHAR NOT NULL,
    category VARCHAR(10) CHECK (category IN ('ANIME', 'RADIO', 'LIVE', 'EVENT', 'PROGRAM', 'ANNIVERSARY', 'OTHER')),
    description TEXT,
    schedule_type VARCHAR(10) CHECK (schedule_type IN ('SPECIFIC', 'WEEKLY', 'MONTHLY', 'HALF_MONTHLY', 'YEARLY', 'RANGE', 'IRREGULAR')),
    schedule_start_date TIMESTAMP,
    schedule_end_date TIMESTAMP,
    deleted_at TIMESTAMP,
    deleted_by UUID,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (entertainer_id) REFERENCES entertainer(id) ,
    FOREIGN KEY (deleted_by) REFERENCES "user"(id)
);
CREATE TRIGGER update_appearing_content_timestamp
BEFORE UPDATE ON appearing_content
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();
-- Index
CREATE INDEX appearing_content_entertainer_id_index ON appearing_content(entertainer_id);
-- View
CREATE VIEW active_appearing_content AS
SELECT * FROM appearing_content
WHERE deleted_at IS NULL;

-- Content Date table
CREATE TABLE content_date (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    appearing_content_id UUID NOT NULL,
    content_date TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP,
    deleted_by UUID,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (appearing_content_id) REFERENCES appearing_content(id),
    FOREIGN KEY (deleted_by) REFERENCES "user"(id)
);
CREATE TRIGGER update_content_date_timestamp
BEFORE UPDATE ON content_date
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();
-- Index
CREATE INDEX content_date_appearing_content_id_index ON content_date(appearing_content_id);
-- View
CREATE VIEW active_content_date AS
SELECT * FROM content_date
WHERE deleted_at IS NULL;

-- Update Appearing Content table
CREATE TABLE update_appearing_content (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    content_id UUID NOT NULL,
    content_title VARCHAR NOT NULL,
    content_category VARCHAR(10) CHECK (content_category IN ('ANIME', 'RADIO', 'LIVE', 'EVENT', 'PROGRAM', 'ANNIVERSARY', 'OTHER')),
    content_description TEXT,
    content_schedule_type VARCHAR(10) CHECK (content_schedule_type IN ('SPECIFIC', 'WEEKLY', 'MONTHLY', 'HALF_MONTHLY', 'YEARLY', 'RANGE', 'IRREGULAR')),
    content_schedule_start_date TIMESTAMP,
    content_schedule_end_date TIMESTAMP,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES "user"(id),
    FOREIGN KEY (content_id) REFERENCES appearing_content(id) 
);
CREATE TRIGGER update_update_appearing_content_timestamp
BEFORE UPDATE ON update_appearing_content
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();

-- Create Content Date table
CREATE TABLE create_content_date (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    content_id UUID NOT NULL,
    content_date TIMESTAMP NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES "user"(id),
    FOREIGN KEY (content_id) REFERENCES appearing_content(id) 
);
CREATE TRIGGER update_create_content_date_timestamp
BEFORE UPDATE ON create_content_date
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();

-- Update Entertainer table
CREATE TABLE update_entertainer (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    entertainer_id UUID NOT NULL,
    entertainer_name VARCHAR NOT NULL,
    entertainer_gender VARCHAR(10) CHECK (entertainer_gender IN ('MALE', 'FEMALE')),
    entertainer_note TEXT,  

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES "user"(id),
    FOREIGN KEY (entertainer_id) REFERENCES entertainer(id)
);
CREATE TRIGGER update_update_entertainer_timestamp
BEFORE UPDATE ON update_entertainer
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();
