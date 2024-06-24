-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
update film set language_id=3 where (title='Airport Pollock')
select * from language
select * from film inner join language on film.language_id=language.language_id where (title='Airport Pollock')
-- Which foreign keys (references) are defined for the customer table? 
	the foreing keys are, first and last name, store_id and address_id
-- How does this affect the way in which we INSERT into the customer table?
	If we dont give values for the FK mentioned, we will not be available to add data to customer or anything, we need to 
	check the data exist en the FK in order to insert to the table.

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
drop table customer_review. 
I didnt need an extra checking

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
select * from rental where (return_date is null) 
select count(*) from rental where (return_date is null) 

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
select * from rental 
inner join inventory on rental.inventory_id=inventory.inventory_id
left join film on inventory.film_id=film.film_id
where rental.return_date is null
order by replacement_cost desc
limit 30
-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. 
-- Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
select film.film_id, film.title, film.fulltext from film_actor
inner join film on film.film_id=film_actor.film_id
where (actor_id=(
	select actor_id from actor where (first_name='Penelope' and last_name='Monroe') 
	and film.fulltext @@ to_tsquery('english','sumo')
	)) 

until the select of where, i could understand, the film.fulltext condition it was hard to get.

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
select * from film 
inner join film_category on film.film_id=film_category.film_id
inner join category on category.category_id=film_category.category_id
where length<60 and rating='R' and category.name='Documentary'

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, 
-- and he returned it between the 28th of July and the 1st of August, 2005.
select * from rental
select * from customer	
	
select * from inventory
inner join film on film.film_id=inventory.film_id
inner join rental on rental.inventory_id=inventory.inventory_id
inner join customer on customer.customer_id=rental.customer_id
where customer.first_name='Matthew'
	and customer.last_name='Mahan'
	and film.rental_rate>4
	and rental.return_date > '2005-07-28' 
	and rental.return_date < '2005-08-01'


-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, 
-- and it looked like it was a very expensive DVD to replace.

select * from inventory
inner join film on film.film_id=inventory.film_id
inner join rental on rental.inventory_id=inventory.inventory_id
inner join customer on customer.customer_id=rental.customer_id
where customer.first_name='Matthew'
and customer.last_name='Mahan'
and (film.title ilike '%boat%' or film.description ilike '%boat%')
order by film.replacement_cost desc