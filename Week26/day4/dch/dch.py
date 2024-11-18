# Instructions
# Write a function to compute 5/0 and use try/except to catch the exceptions.
# Bonus : use some Buit-in exceptions of Python : Look here



def compute():
    try: 
        num1 = int(input('Enter first number: '))
        num2 = int(input('Enter second number: '))
        res = num1/num2

        print(res)
    except ZeroDivisionError:
       print("you cant divide by zero")
    except TypeError:
       print("typeerror - use numbers")
    except ValueError:
       print("valueerror - invalid entry")


compute()