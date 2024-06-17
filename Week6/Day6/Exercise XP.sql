CREATE TABLE items(
 id SERIAL PRIMARY KEY,
 name VARCHAR (50) NOT NULL,
 price INTEGER NOT NULL
)
CREATE TABLE customers(
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(100) NOT NULL,
	last_name VARCHAR(100) NOT NULL
)

INSERT INTO items(name, price) 
VALUES 
	('Small Desk', 100),
	('Large Desk', 300),
	('Fan', 80)

insert into customers (first_name, last_name)
values 
	('Greg', 'Jones'),
	('Sandra', 'Jones'),
	('Scott', 'Scott'),
	('Trevor', 'Green'),
	('Melanie', 'Johnson')

select * from customers;
select * from items

SELECT * FROM items where price > 80;
	
select * from items where price <= 300;

select last_name from customers where last_name = 'Smith';

"the outcome is the column empty because we dont have smith on our column"

select * from customers where last_name = 'Jones';

select * from customers where first_name != 'Scott';

