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

INSERT INTO users (
  UserName,
  Password,
  DisplayName
)
VALUES
("hackthesix+user17@wealthsimple.com", "hackthesix!","Big-Daddy Charlie"),
("hackthesix+user+1@wealthsimple.com", "hackthesix!","Tony Stark"),
("hackthesix+user+2@wealthsimple.com", "hackthesix!","Hanchen Wang"),
("hackthesix+user+3@wealthsimple.com", "hackthesix!","Arash Nourimand"),
("hackthesix+user+5@wealthsimple.com", "hackthesix!","Light Yagami"),
("hackthesix+user+4@wealthsimple.com", "hackthesix!","Obi-Wan Kenobi"));

-- INSERT INTO teams (
--   TeamName,
--   UserName,
--   Password,
--   Admin,
--   Members
-- )
-- VALUES
-- (
--     "Team Jacob",
--     "Team Edward"),
-- (   "hackthesix+user17@wealthsimple.com",
--     "hackthesix+user+1@wealthsimple.com",
--     "hackthesix+user+10@wealthsimple.com"),
-- (   "hackthesix!",
--     "hackthesix!",
--     "hackthesix!"),
-- (   "Admin1",
--     "Admin2"),
-- (   "Big-Daddy Charlie",
--     "Tony Stark",
--     "Obi-Wan Kenobi");
