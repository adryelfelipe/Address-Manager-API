CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    street VARCHAR(255) NOT NULL,
    number VARCHAR(20),
    complement VARCHAR(255),
    neighborhood VARCHAR(255),
    city VARCHAR(255) NOT NULL,
    state VARCHAR(2) NOT NULL,
    zip_code VARCHAR(10) NOT NULL,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE address_logs (
    id SERIAL PRIMARY KEY,
    address_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL REFERENCES users(id),
    operation VARCHAR(10) NOT NULL,
    changed_data JSONB NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_addresses_user_id ON addresses(user_id);
CREATE INDEX idx_address_logs_address_id ON address_logs(address_id);