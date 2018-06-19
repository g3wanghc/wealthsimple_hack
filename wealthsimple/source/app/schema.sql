DROP TABLE if exists users;
DROP TABLE if exists teams;
DROP TABLE if exists transactions;

CREATE TABLE users (
  id TEXT,
  username TEXT,
  password TEXT,
  display_name TEXT
);

CREATE TABLE teams (
  id TEXT,
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
  id,
  username,
  password,
  display_name
)
VALUES
  ("user-g4v1qpkp0gu", "hackthesix+user+1@wealthsimple.com", "hackthesix!","Tony Stark"),
  ("user-mx0g9u59_dg", "hackthesix+user+2@wealthsimple.com", "hackthesix!","Hanchen Wang"),
  ("user-r6aigkhwgmy", "hackthesix+user+3@wealthsimple.com", "hackthesix!","Arash Nourimand"),
  ("user-rhv9gkzmulk", "hackthesix+user+4@wealthsimple.com", "hackthesix!","Light Yagami"),
  ("user-rifbipqd7vi", "hackthesix+user+5@wealthsimple.com", "hackthesix!","Obi-Wan Kenobi"),
  ("user-ly0rov2pr1u", "hackthesix+user+6@wealthsimple.com", "hackthesix!","Big-Daddy Charlie");


INSERT INTO teams (
  id,
  team_name,
  username,
  password,
  admin,
  members
)
VALUES
  ("user-cin71bhzcye", "Team Jacob", "hackthesix+user+7@wealthsimple.com", "hackthesix!", "Hanchen Wang", '["Hanchen Wang", "Tony Stark", "Light Yagami"]'), 
  ("user-llfhajuzjwa", "Team Edward", "hackthesix+user+8@wealthsimple.com", "hackthesix!", "Arash Nourimand", '["Arash Nourimand", "Obi-Wan Kenobi", "Big-Daddy Charlie"]');


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