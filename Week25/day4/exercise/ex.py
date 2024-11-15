# # Exercise 1 : Favorite Numbers
# # Instructions
# # Create a set called my_fav_numbers with all your favorites numbers.
# # Add two new numbers to the set.
# # Remove the last number.
# # Create a set called friend_fav_numbers with your friend’s favorites numbers.
# # Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

# my_fav_numbers = set()
# my_fav_numbers = set([23, 10])
# print(my_fav_numbers)

# my_fav_numbers.remove(10)
# print(my_fav_numbers)

# my_fav_numbers.update([1, 2])
# print(my_fav_numbers)

# friend_fav_numbers = set()
# friend_fav_numbers = set([3, 4])
# print(friend_fav_numbers)

# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# print(our_fav_numbers)

# #  Exercise 2: Tuple
# # Instructions
# # Given a tuple which value is integers, is it possible to add more integers to the tuple?

# # No, tuples are unmutables

# # Exercise 3: List
# # Instructions
# # Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# # Remove “Banana” from the list.
# # Remove “Blueberries” from the list.
# # Add “Kiwi” to the end of the list.
# # Add “Apples” to the beginning of the list.
# # Count how many apples are in the basket.
# # Empty the basket.
# # Print(basket)

# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.pop(0)
# basket.pop(2)
# basket.append('Kiwi')
# basket.insert(0, 'Apples')
# apple_count = basket.count("Apples")
# print(f"Number of apples: {apple_count}")
# basket.clear()

# print(basket)


# # Exercise 4: Floats
# # Instructions
# # Recap – What is a float? What is the difference between an integer and a float? 
# # FLOAT ITS a NUMBER THAT CONTAINS DECIMALS NUMBERS, INTEGER CANT CONTAINS DECIMALS ONLY WHOLE NUMBER

# # Create a list containing the following sequence of floats and integers 
# # (it should be a list with mixed types): 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
# # Can you think of another way to generate a sequence of floats?

# first_num = 1.5  
# last_num = 5.0   
# jump = 0.5 

# numbers = []

# for i in range(8):
#    value = first_num + (i * jump)
#    numbers.append(value)

# print(numbers)


# # Exercise 5: For Loop
# # Instructions
# # Use a for loop to print all numbers from 1 to 20, inclusive.
# # Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

# for num in range(1, 21):
#     print(num)

# for num in range(1,21):
#     if num / 2 == int(num / 2):
#         print(num)

# # Exercise 6 : While Loop
# # Instructions
# # Write a while loop that will continuously ask the user for their name, 
# # unless the input is equal to your name.

# user_name = str(input('give me your name: '))
# my_name = 'Rami'

# while user_name != my_name:
#     user_name = input('try again: ')
# print('we have the same name') 

# Exercise 7: Favorite fruits
# Instructions
# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# Now that we have a list of fruits, ask the user to input a name of any fruit.
# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

# favorite_fruits = input("Enter your favorite fruits (separated by space): ").split()


# user_fruit = input("Enter a fruit name: ")


# if user_fruit in favorite_fruits:
#    print("You chose one of your favorite fruits! Enjoy!")
# else:
#    print("You chose a new fruit. I hope you enjoy")


# Exercise 8: Who ordered a pizza ?
# Instructions
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).


# while True:
#     toppings_pizza = input('enter a pizza toppings (enter quit when you are done): ')
#     if toppings_pizza == 'quit':
#         break
#     else:
#         print('Tasty')
# print('Have a yummy pizza')


# Exercise 9: Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.
# Ask a family the age of each person who wants a ticket.
# Store the total cost of all the family’s tickets and print it out.

family_total = 0

while True:
   age = input("Enter age (or 'done' to finish): ")
   if age == 'done':
       break
       
   age = int(age)
   if age < 3:
       price = 0
   elif age <= 12:
       price = 10
   else:
       price = 15
       
   family_total += price

print(f"Total cost for your family: ${family_total}")

# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.

teenagers = ["Rami", "Dana", "Mauro", "Tati"] 
final_list = []

for teen in teenagers:
   try:
       age = int(input(f"How old is {teen}? "))
       if 16 <= age <= 21:
           final_list.append(teen)
   except ValueError:
       print("Please enter a valid age")
       continue

print("Final list of permitted teenagers:", final_list)