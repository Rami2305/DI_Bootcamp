#Challenge 1
#Ask the user for a number and a length.
#Create a program that prints a list of multiples of the number until the list length reaches length.
#Examples

#number: 7 - length 5 ➞ [7, 14, 21, 28, 35]
#number: 12 - length 10 ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
#number: 17 - length 6 ➞ [17, 34, 51, 68, 85, 102]

number = int(input('Gimme a number: '))
length = int(input('gimme a length: '))

for i in range(1, length + 1):
    print(f'{number} * {i}= {number*i}')


#Challenge 2
# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
# Examples
# user's word : "ppoeemm" ➞ "poem"
# user's word : "wiiiinnnnd" ➞ "wind"
#user's word : "ttiiitllleeee" ➞ "title"
#user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"

user = str(input('Give me a string: '))

word = ''

# el for recorre hasta el punultimo caracter del string que el user ingreso
#para compararlo con el siguiente
for i in range(len(user)-1):
    #si la letra actual es diferente, se guarda
    if user[i] !=user[i+1]:
        word += user[i]
#agrega siempre el ultimo caracter porque no hay como comparar.
word += user[-1]
print(word)


# hint:
# input: ppoeemm    - input_runner = 1,2,3,4,5,6,7
# output: poem         - output_runner = 0,1,2,3

# output_list = ['p', 'o', 'e', 'm']

# output_list[-1]

# print(''.join(output_list))