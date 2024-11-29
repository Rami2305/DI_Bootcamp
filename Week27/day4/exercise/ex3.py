# 🌟 Exercise 3 : Dogs Domesticated
# Instructions
# Create a new python file and import your Dog class from the previous exercise.
# In the new python file, create a class named PetDog that inherits from Dog.
# Add an attribute called trained to the __init__ method, 
# this attribute is a boolean and the value should be False by default.
# Add the following methods:
# train: prints the output of bark and switches the trained boolean to True
from exercise import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)  
        self.trained = trained

    def train(self):
        self.trained = True
        return self.bark()
    
# play: takes a parameter which value is a few names of other Dog instances (use *args). 
# The method should print the following string: “dog_names all play together”.
    def play(self,*args):
        dogs_names = f'{self.name}, ' + ', '.join(args)
        return f'{dogs_names} all play together'
    
    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            return random.choice(tricks)
        else:
            return f"{self.name} is not trained yet"
        
# do_a_trick: 
# If the dog is trained the method should print one of the following sentences at random:
# “dog_name does a barrel roll”.
# “dog_name stands on his back legs”.
# “dog_name shakes your hand”.
# “dog_name plays dead”.

pet1 = PetDog("Toro", 4, 30)
pet2 = PetDog("Bocha", 2, 20)

print(pet1.train())

print(pet1.play("Toro", "Bocha", "Luna"))
print(pet2.do_a_trick())
pet2.train()
print(pet2.do_a_trick())



# Exercise 4 : Family
# Instructions
# Create a class called Family and implement the following attributes:

# members: list of dictionaries
# last_name : (string)
class Family():
    members = []
    last_name = ''

    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name

# Implement the following methods:      
# born: adds a child to the members list (use **kwargs), 
# don’t forget to print a message congratulating the family.
    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family! A new child {kwargs['name']} was born!")

# is_18: takes the name of a family member as a parameter and returns True if they are over 18 
# and False if not.
    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False
    
# family_presentation: a method that prints the family’s last name and all the members’ details.
    def family_presentation(self):
        print(f"\nFamily name: {self.last_name}")
        print("Family members:")
        for member in self.members:
            print(f"- Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}")

# Create an instance of the Family class, with the last name of your choice, and the below members. 
# Then call all the methods you created in Point 2.

initial_members = [
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
]

rami_family = Family(initial_members, 'Test')
rami_family.family_presentation()
rami_family.born(name='Dana', age=0, gender= 'Female', is_child=True)
rami_family.family_presentation()

print(f'\nIs Michael over 18? {rami_family.is_18('Michael')}')
print(f'is Dana over 18? {rami_family.is_18('Dana')}')

