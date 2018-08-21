

CREATE TABLE users(
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255),
  email VARCHAR(50) PRIMARY KEY,
  city VARCHAR(50),
  state VARCHAR(50),
  cardsLiked  VARCHAR(50)[]
);

CREATE TABLE cards(
  id VARCHAR(50) PRIMARY KEY,
  imageLink VARCHAR(255) NOT NULL,
  owner VARCHAR(50) NOT NULL,
  title VARCHAR(50) NOT NULL,
  description VARCHAR(512),
  likes INTEGER,
  isPublic BOOLEAN NOT NULL
);