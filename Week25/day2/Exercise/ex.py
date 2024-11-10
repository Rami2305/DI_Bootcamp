#Exercise 1 : Hello World
#Instructions
#Print the following output in one line of code:
#Hello world
#Hello world
#Hello world
#Hello world

print('Hello world\n' *4)

#Exercise 2 : Some Math
#Instructions
#Write code that calculates the result of: (99^3)*8 
#(meaning 99 to the power of 3, times 8).

print((99**3)*8)

#Exercise 3 : What is the output ?
#Instructions
#Predict the output of the following code snippets:
#>>> 5 < 3
#>>> 3 == 3
#>>> 3 == "3"
#>>> "3" > 3
#>>> "Hello" == "hello"
False, # 5 is bigger than 3
True, 
False, #a number its not equal to a string, despiute same value 
#Error #cant compare strings with numbers
False #(H not equal to h)

#Exercise 4 : Your computer brand
#Instructions
#Create a variable called computer_brand which value is the brand name of your computer.
#Using the computer_brand variable print a sentence that states the following: 
# "I have a <computer_brand> computer".

computer_brand = ('asus')
# print(computer_brand)
print(f'I have an {computer_brand} computer')

#Exercise 5 : Your information
#Instructions
#Create a variable called name, and set it’s value to your name.
#Create a variable called age, and set it’s value to your age.
#Create a variable called shoe_size, and set it’s value to your shoe size.
#Create a variable called info and set it’s value to an interesting sentence about yourself. 
# #The sentence must contain all the variables created in parts 1, 2 and 3.
#Have your code print the info message.
#Run your code

name = 'Rami'
my_age = 34
shoe_size = 44
info = f'My name is {name} and im {my_age} years old, my shoe size is {shoe_size}'
print(info)
print('My name is {} and im {} years old, my shoe size is {}'.format(name, my_age, shoe_size))

#Exercise 6 : A & B
#Instructions
#Create two variables, a and b.
#Each variable value should be a number.
#If a is bigger then b, have your code print Hello World.

a = 23
b = 5

if a > b:
    print('Hello World')

#Exercise 7 : Odd or Even
#Instructions
#Write code that asks the user for a number and determines whether this number is odd or even.

# my_number = int(input('Gimme a number: '))

# if my_number % 2 == 0:
#     print(f"{my_number} is even")
# else:
#     print(f"{my_number} is odd")

#Exercise 8 : What’s your name ?
#Instructions
#Write code that asks the user for their name and determines whether or #
# not you have the same name, print out a funny message based on the outcome.

my_name = (input('Whats its your name: ')).lower().strip()

if my_name == 'Rami':
    print('Jaja tocayo tenemos el mismo nombre')
else:
    print('Eize baza, we dont have the same name')

#Exercise 9 : Tall enough to ride a roller coaster
#Instructions
#Write code that will ask the user for their height in centimeters.
#If they are over 145cm print a message that states they are tall enough to ride.
#If they are not tall enough print a message that says they need to grow some more to ride.
