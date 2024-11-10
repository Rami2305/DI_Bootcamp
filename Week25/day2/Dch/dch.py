
# EXERCISE 1
#Using the input function, ask the user for a string. The string must be 10 characters long.
#If it’s less than 10 characters, print a message which states “string not long enough”.
#If it’s more than 10 characters, print a message which states “string too long”.
#If it’s 10 characters, print a message which states “perfect string” and continue the exercise.


user = input('Gimme a string: ')

# if len(user) < 10:
#     print('string not long enough')
# elif len(user) > 10:
#     print('string too long')
# else:
#     print('its a perfect string')


# EXERCISE 2
#Then, print the first and last characters of the given text.
#The user enters "HelloWorld"
#Then you have to print 
#H
#d

if user == 'HelloWorld':
    print(user[0])
    print(user[-1])


# EXERCISE 3
#Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:

#The user enters "HelloWorld"
#Then, you have to construct the string character by character
#H
#He
#Hel
#... etc
#HelloWorld

for i in range(len(user)):
    print(user[0:i+1])

