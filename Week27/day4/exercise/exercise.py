# 🌟 Exercise 1 : Pets

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
# Create another cat breed named Siamese which inherits from the Cat class.
# Create a list called all_cats, which holds three cat instances: 
# one Bengal, one Chartreux and one Siamese.
# Those three cats are Sara’s pets. 
# Create a variable called sara_pets which value is an instance of the Pet class, 
# and pass the variable all_cats to the new instance.
# Take all the cats for a walk, use the walk method.
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
bengal_cat = Bengal('Tomer', 4)
chartreux_cat = Chartreux('Lion', 5)
siamese_cat = Siamese('King', 7)

all_cats = [bengal_cat, chartreux_cat, siamese_cat]

sara_pets = Pets(all_cats)

sara_pets.walk()

# 🌟 Exercise 2 : Dogs
# Instructions
# Create a class called Dog with the following attributes name, age, weight.
# Implement the following methods in the Dog class:
# bark: returns a string which states: “<dog_name> is barking”.
# run_speed: returns the dogs running speed (weight/age*10).
# fight : takes a parameter which value is another Dog instance, called other_dog. 
# This method returns a string stating which dog won the fight. 
# The winner should be the dog with the higher run_speed x weight.
# Create 3 dogs and run them through your class.

class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f'{self.name} is barking'
    
    def run_speed(self):
        speed = (self.weight/self.age)*10 
        return f'{speed}'
    
    def fight(self, other_dog):
        my_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if my_power > other_power:
            return f'{self.name} won the fight'
    
        elif other_power > my_power:
            return f'{other_dog.name} won the fight'
        
        else:
            return 'Its a tie'
        
dog1 = Dog('Titan', 7, 15)
dog2 = Dog('Baron', 5, 10)
dog3 = Dog('Bilbo', 3, 5)

print(dog1.bark())
print(dog2.bark())
print(dog3.bark())

print(f"{dog1.name}'s running speed: {dog1.run_speed()}")
print(f"{dog2.name}'s running speed: {dog2.run_speed()}")
print(f"{dog3.name}'s running speed: {dog3.run_speed()}")

print(dog1.fight(dog2))  
print(dog2.fight(dog3))  
print(dog3.fight(dog1))  


