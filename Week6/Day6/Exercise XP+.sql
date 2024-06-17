create table Students(
 id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 birth_date DATE NOT NULL
)

select * from students

insert into students (id, first_name, last_name, birth_date)
values 
	(1, 'Marc', 'Benichou', '1998-11-02'),
    (2, 'Yoan', 'Cohen', '2010-12-03'),
    (3, 'Lea', 'Benichou', '1987-07-27'),
    (4, 'Amelia', 'Dux', '1996-04-07'),
    (5, 'David', 'Grez', '2003-06-14'),
    (6, 'Omer', 'Simpson', '1980-10-03'),
    (7, 'Ramiro', 'Nieva', '1990-05-23');

select first_name, last_name from students

select first_name, last_name from students where id = 2;

select last_name, first_name from students where last_name = 'Benichou' and first_name = 'Marc';

select last_name, first_name from students where last_name = 'Benichou' or first_name = 'Marc';

select first_name from students where first_name like '%a%';

select first_name from students where first_name ilike 'a%'; 
-- here i had a situation with the A and a, 
-- so i found this function that allow me to solve the insensitive

select first_name from students where first_name like '%a'; 

select first_name, last_name from students where (right(first_name, 1) like 'a%');
-- -- here i couldnt set a function that allow me to found from the second to the last word, 
-- in this function is taking the last word, its not looking through the second to the last word

select * from students where id in (1,3);

select * from students where birth_date >= '1/01/2000';