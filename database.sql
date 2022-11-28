CREATE DATABASE info_sports_db;


CREATE TABLE profiles (
    profile_id, SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
),

CREATE TABLE users (
   user_id SERIAL PRIMARY KEY,
   user_name VARCHAR(255) NOT NULL,
   profile_id bigint,
   email VARCHAR (255) NOT NULL,
   password VARCHAR(255) NOT NULL,
   UNIQUE(email)

    CONSTRAINT fk_profile_id
      FOREIGN KEY(profile_id) 
	    REFERENCES profiles(profile_id) 

);


CREATE TABLE ocupacions (
    ocupacion_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,

),

CREATE TABLE staff (
    staff_id SERIAL PRIMARY KEY,
    ocupacion_id bigint,
    name VARCHAR(255) NOT NULL,
    birth_date DATE NOT NULL DEFAULT,

    CONSTRAINT fk_ocupation
      FOREIGN KEY(ocupacion_id) 
	    REFERENCES ocupacions(ocupacion_id)

),


CREATE TABLE positions (
     position_id SERIAL PRIMARY KEY,
     name VARCHAR(255) NOT NULL
),

CREATE TABLE players (
    player_id SERIAL PRIMARY KEY,
    position_id bigint,
    name VARCHAR(255) NOT NULL,
    date DATE NOT NULL DEFAULT,

    CONSTRAINT fk_position
      FOREIGN KEY(position_id) 
	  REFERENCES positions(position_id)
),


CREATE TABLE zones (
     zone_id SERIAL PRIMARY KEY,
     name VARCHAR(255) NOT NULL
)


CREATE TABLE teams (
    team_id SERIAL PRIMARY KEY,
    zone_id bigint,
    name VARCHAR(255) NOT NULL,
    founded_in DATE NOT NULL DEFAULT,

    CONSTRAINT fk_zone
      FOREIGN KEY(zone_id) 
	    REFERENCES zones(zone_id)
),


CREATE TABLE squads (
     squad_id SERIAL PRIMARY KEY,
     team_id bigint,
     date DATE NOT NULL DEFAULT,

     CONSTRAINT team
      FOREIGN KEY(team_id) 
	  REFERENCES teams(team_id)
),



CREATE TABLE squad_player (
    squad_player_id SERIAL PRIMARY KEY,
    squad_id bigint,
    player_id bigint,
    
    CONSTRAINT fk_squad
      FOREIGN KEY(squad_id) 
	    REFERENCES squads(squad_id)

    CONSTRAINT fk_player
      FOREIGN KEY(player_id) 
	    REFERENCES players(player_id)
),



CREATE TABLE squad_staff (
    squad_staff_id SERIAL PRIMARY KEY,
    squad_id bigint,
    staff_id bigint,

    CONSTRAINT fk_squad
      FOREIGN KEY(squad_id) 
	    REFERENCES squads(squad_id)

    CONSTRAINT fk_staff
      FOREIGN KEY(staff_id) 
	    REFERENCES staff(staff_id)
),
