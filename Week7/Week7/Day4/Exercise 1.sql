-- Get a list of all the languages, from the language table.
select * from language
-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.
select title, description, language.name from film inner join language on film.language_id=language.language_id
-- Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
select language.name, film.title, film.description from film right join language on film.language_id=language.language_id
-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
create table new_film(
	id serial primary key,
	name varchar(100)
)

insert into new_film (name) values 
	('Rapido y Furioso'),
	('Harry Potter')
select * from new_film

-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.
create table customer_review(
	review_id serial primary key not null,
	film_id int not null,
	language_id int not null,
	title varchar(100) not null,
	score int not null,
	review_text text, 
	last_update timestamp default current_timestamp,
	
	constraint fk_language_id foreign key (language_id) references language(language_id),
	constraint fk_film_id foreign key (film_id) references new_film(id) on delete cascade,
	constraint score_value check (score > 0 and score <= 10)
)
-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
insert into customer_review(film_id, language_id, title, score, review_text) Values
('1', '2', 'Rapido y Furioso','9', 'fun and full of action' ), 
('2','1','Harry Potter','10', 'amazing movie') returning *

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
delete from new_film where (name = 'Rapido y Furioso')

select * from new_film
select * from customer_review
-- Its also delete the column