DROP TABLE if exists users;
DROP TABLE if exists teams;
DROP TABLE if exists transactions;

CREATE TABLE users (
  UserName TEXT,
  Password TEXT,
  DisplayName TEXT
);

CREATE TABLE teams (
  TeamName TEXT,
  UserName TEXT,
  Password TEXT,
  Admin TEXT,
  Members TEXT
);

CREATE TABLE transactions (
  FromUser TEXT,
  FromUserDisplayName TEXT,
  ToUser TEXT,
  ToUserDisplay TEXT,
  Amount REAL
);