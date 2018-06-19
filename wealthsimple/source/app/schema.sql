DROP TABLE if exists users;
DROP TABLE if exists teams;
DROP TABLE if exists transactions;

CREATE TABLE users (
  username TEXT,
  password TEXT,
  display_name TEXT
);

CREATE TABLE teams (
  team_name TEXT,
  username TEXT,
  password TEXT,
  admin TEXT,
  members TEXT
);

CREATE TABLE transactions (
  from_user TEXT,
  from_user_display_name TEXT,
  to_user TEXT,
  to_user_display_name TEXT,
  amount REAL,
  description TEXT,
  team TEXT
);

-- testing data 

INSERT INTO users (
  username,
  password,
  display_name
)
VALUES
  ("hackthesix+user+1@wealthsimple.com", "hackthesix!","Tony Stark"),
  ("hackthesix+user+2@wealthsimple.com", "hackthesix!","Hanchen Wang"),
  ("hackthesix+user+3@wealthsimple.com", "hackthesix!","Arash Nourimand"),
  ("hackthesix+user+4@wealthsimple.com", "hackthesix!","Light Yagami"),
  ("hackthesix+user+5@wealthsimple.com", "hackthesix!","Obi-Wan Kenobi"),
  ("hackthesix+user+6@wealthsimple.com", "hackthesix!","Big-Daddy Charlie");


INSERT INTO teams (
  team_name,
  username,
  password,
  admin,
  members
)
VALUES
  ("Team Jacob", "hackthesix+user+7@wealthsimple.com", "hackthesix!", "Hanchen Wang", '["Hanchen Wang", "Tony Stark", "Light Yagami"]'), 
  ("Team Edward", "hackthesix+user+8@wealthsimple.com", "hackthesix!", "Arash Nourimand", '["Arash Nourimand", "Obi-Wan Kenobi", "Big-Daddy Charlie"]');


INSERT INTO transactions (
  from_user,
  from_user_display_name,
  to_user,
  to_user_display_name,
  amount,
  description,
  team
)
VALUES
  ("hackthesix+user+3@wealthsimple.com", "Arash Nourimand", "hackthesix+user+2@wealthsimple.com", "Hanchen Wang", "5.00", "Transferring money for the coca-cola","Team Edward"), 
  ("hackthesix+user+6@wealthsimple.com", "Big-Daddy Charlie", "hackthesix+user+4@wealthsimple.com", "Light Yagami", "500.00", "Writing my ex wife's name in the notebook","Team Edward");