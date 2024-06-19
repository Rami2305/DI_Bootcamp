
-- EX 2
select * from customer

select concat_ws(' ',first_name, last_name) as full_name from customer

select distinct create_date from customer 

select * from customer order by first_name desc

select film_id, title, description, release_year, rental_rate from film order by rental_rate asc

select address, phone from customer inner join address on customer.address_id=address.address_id where (district='Texas')

select * from film where (film_id='15' or film_id='150')

select film_id, title, description, length, rental_rate  from film where (title='Forrest Sons')

select film_id, title, description, length, rental_rate  from film where (title like 'Fo%')

select * from film order by rental_rate asc limit 10

select * from film order by rental_rate asc fetch first 10 rows only offset 10

select payment.customer_id, first_name, last_name, amount, payment_date from customer inner join payment on payment.customer_id = customer.customer_id order by payment.customer_id

select * from film left join inventory on film.film_id = inventory.film_id where inventory_id is NULL
