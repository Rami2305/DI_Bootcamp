# Write a function calculation() such that it can accept two variables and calculate the addition and subtraction of it. 
# And also it must return both addition and subtraction 
# in a single return call

# For example:

# def calculation(a, b):
#     # Your Code

# res = calculation(40, 10)
# print(res)


# def calculation(a,b):
#     add = a + b
#     sub = a - b
#     return add, sub

# res = calculation(2, 3)
# print(res)


#EXCEPTIONS
# Given a list of numbers, write a function that returns the sum of every number. 
# BUT you can have a malicious string inside the list.


def sum_num(numbers):
    total = 0
    for num in numbers:
        try:
            total += num
        except :

            continue
    return total


my_list = [2, 3, 1, 2, "four", 42, 1, 5, 3, "imanumber"]
result = sum_num(my_list)
print(result)