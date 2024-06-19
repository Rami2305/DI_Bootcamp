CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)


SELECT * FROM SecondTab

-- Q1. What will be the OUTPUT of the following statement?
-- It will be 0 because Null its not a value to the fx count
    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )


-- Q2. What will be the OUTPUT of the following statement?
-- The output will compare the ids that are not 5 so  because we have in the tables two ids=null
-- and null isnt a value for count, will get count=2
    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )


-- Q3. What will be the OUTPUT of the following statement?
-- The output will be 0, because we can use count when we have a Null in our values
    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )


-- Q4. What will be the OUTPUT of the following statement?
-- The output it will work because we are not counting the id=null, so the answer is 2.
-- the ids 6 and 7 
    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )


