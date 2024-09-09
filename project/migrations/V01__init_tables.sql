CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- User table
CREATE TABLE "user" (
    id UUID PRIMARY KEY,
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
    id UUID PRIMARY KEY,
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
    id UUID PRIMARY KEY,
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
    id UUID PRIMARY KEY,
    entertainer_id UUID NOT NULL,
    name VARCHAR NOT NULL,
    category VARCHAR(10) CHECK (category IN ('ANIME', 'RADIO', 'LIVE', 'EVENT')),
    note TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (entertainer_id) REFERENCES entertainer(id) 
);
CREATE TRIGGER update_appearing_content_timestamp
BEFORE UPDATE ON appearing_content
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();

-- Create Appearing Content table
CREATE TABLE create_appearing_content (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL,
    content_id UUID NOT NULL,
    content_name VARCHAR NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES "user"(id),
    FOREIGN KEY (content_id) REFERENCES appearing_content(id) 
);
CREATE TRIGGER update_create_appearing_content_timestamp
BEFORE UPDATE ON create_appearing_content
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();


-- Update Appearing Content table
CREATE TABLE update_appearing_content (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL,
    content_id UUID NOT NULL,
    content_category VARCHAR(10) CHECK (content_category IN ('ANIME', 'RADIO', 'LIVE', 'EVENT')),
    content_name VARCHAR NOT NULL,
    content_note TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES "user"(id),
    FOREIGN KEY (content_id) REFERENCES appearing_content(id) 
);
CREATE TRIGGER update_update_appearing_content_timestamp
BEFORE UPDATE ON update_appearing_content
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();

-- Update Entertainer table
CREATE TABLE update_entertainer (
    id UUID PRIMARY KEY,
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