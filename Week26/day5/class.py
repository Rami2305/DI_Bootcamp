# from functools import reduce


# def sum_numbers(first, second):
#     return first + second


# my_list = [1, 3, 5, 7]
# reduced_list = reduce(sum_numbers, my_list)

# print(reduced_list)

# # 0 iteration:               [1, 3, 5, 7]
# # 1 iteration: 1, 3 => 4     [4, 5, 7]
# # 2 iteration: 4, 5 => 9     [9, 7]
# # 3 iteration: 9, 7 => 16     [16]
# # 4 iteration: 16             []

people = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]
# Using map and filter, try to say hello to everyone 
# who's name is less than or equal to 4 letters

def length_less(people):
    return len(people) < 5

def say_hello(people):
    return (f'Hello {people}')


filtered_names = filter(length_less, people)
greetings = map(say_hello, filtered_names)
print(list(greetings))