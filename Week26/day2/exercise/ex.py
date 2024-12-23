# Exercise 1 : What are you learning ?
# Instructions
# Write a function called display_message() 
# that prints one sentence telling everyone what you are learning in this course.
# Call the function, and make sure the message displays correctly.

# def display_message():
#     print('I have been studying Python programming')

# display_message()

# 🌟 Exercise 2: What’s your favorite book ?
# Instructions
# Write a function called favorite_book() that accepts one parameter called title.
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function.

# def favorite_book(title):
#     print('One of my favorite books is ' + title)

# favorite_book('Harry Potter')

# 🌟 Exercise 3 : Some Geography
# Instructions
# Write a function called describe_city() that accepts the name of a city and its 
# country as parameters.
# The function should print a simple sentence, such as "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# Give the country parameter a default value.
# Call your function.

# def describe_city(city, country = 'Argentina'):
    
#     sentence = f'{city} is in {country}'
#     print(sentence)

# describe_city('Tel Aviv', 'Israel')
# describe_city('Buenos Aires')

# Exercise 4 : Random
# Instructions
# Create a function that accepts a number between 1 and 100 and generates 
# another number randomly between 1 and 100.
# Compare the two numbers, if it’s the same number, display a success message, 
# otherwise show a fail message and display both numbers.

# import random

# def calculate(number):
#     random_number = random.randint(1,100)  

#     if  random_number == number:
#         return f"Success! Both numbers are {number}"
#     else:
#         return f"Fail! Your number was {number} and the random number was {random_number}"

# print(calculate(23))

# 🌟 Exercise 5 : Let’s create some personalized shirts !
# Instructions
# Write a function called make_shirt() that accepts a size and the text of a message 
# that should be printed on the shirt.
# def make_shirt(size= 'XXL', text = 'I love Python'):
#     sentence = f'The size of the shirt is {size} and the text is {text}'
#     return sentence
# make_shirt('XL', 'We were on a break')
# # The function should print a sentence summarizing the size of the shirt and 
# # the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# # Call the function make_shirt().
# # Modify the make_shirt() function so that shirts are large by default 
# # with a message that reads “I love Python” by default.
# # Make a large shirt with the default message
# make_shirt(size= 'L')
# # Make medium shirt with the default message
# make_shirt(size='M ')
# # Make a shirt of any size with a different message.
# make_shirt(size='S', text='Trying Python')
# # Bonus: Call the function make_shirt() using keyword arguments.


# 🌟 Exercise 6 : Magicians …
# Instructions
# Using this list of magician’s names. 
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
# Pass the list to a function called show_magicians(), 
# which prints the name of each magician in the list.
# Write a function called make_great() that modifies the list of magicians 
# by adding the phrase "the Great" to each magician’s name.
# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.

def show_magicians(magicians):
    for magician in magicians:
        print(magician)
show_magicians(magician_names)

def make_great (magicians):
     for i in range(len(magicians)):
        magicians[i] = f"The Great {magicians[i]}"
make_great(magician_names)
show_magicians(magician_names)