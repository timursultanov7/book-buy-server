CREATE TABLE users 
(	
	user_id SERIAL PRIMARY KEY,
	user_firstname VARCHAR(255),
	user_lastname VARCHAR(255),
	user_email VARCHAR(255)NOT NULL UNIQUE ,
	user_password VARCHAR(255) NOT NULL
)



DROP TABLE users;

SELECT * FROM users;