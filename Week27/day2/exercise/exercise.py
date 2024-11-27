# 🌟 Exercise 1: Cats
# Instructions
# Using this class
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age    
# Instantiate three Cat objects using the code provided above.
cat1 = Cat('Rami4', 2)
cat2 = Cat('Rami3', 3)
cat3 = Cat('Rami2', 4)
# Outside of the class, create a function that finds the oldest cat and returns the cat.
def find_oldest_cat(cat1, cat2, cat3):
    cats = [cat1, cat2, cat3]
    oldest_cat = cats[0]

    for cat in cats:
        if cat.age > oldest_cat.age:
            oldest_cat = cat
    return oldest_cat

oldest = find_oldest_cat(cat1, cat2, cat3)
print(f'The oldest cat is {oldest.name}, and is {oldest.age} years old')
# Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. 
# Use the function previously created.

# 🌟 Exercise 2 : Dogs
# Instructions
# Create a class called Dog.
# In this class, create an __init__ method that takes two parameters : name and height.
#  This function instantiates two attributes, which values are the parameters.
# Create a method called bark that prints the following string “<dog_name> goes woof!”.
# Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. 
# x is the height*2.
# Outside of the class, create an object called davids_dog. 
# His dog’s name is “Rex” and his height is 50cm.
# Print the details of his dog (ie. name and height) and call the methods bark and jump.
# Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# Print the details of her dog (ie. name and height) and call the methods bark and jump.
# Create an if statement outside of the class to check which dog is bigger. 
# Print the name of the bigger dog.

class Dog():
    def __init__(self, dog_name, dog_height):
        self.name = dog_name
        self.height = dog_height

    def bark(self):
        print(f'{self.name} goes woof!')

    def jump(self):
        x = self.height * 2
        print(f'{self.name} jumps {x}cm high!')

davids_dog = Dog('Rex', 50)
print(f"Dog's name: {davids_dog.name} and is {davids_dog.height}cm height ")
davids_dog.bark() 
davids_dog.jump()

sarahs_dog = Dog('Teacup', 20)
print(f"Dog's name: {davids_dog.name} and is {davids_dog.height}cm height ")
sarahs_dog.bark() 
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"The bigger dog is {davids_dog.name}")
elif sarahs_dog.height > davids_dog.height:
    print(f"The bigger dog is {sarahs_dog.name}")
else:
    print("Both dogs are the same height")

#     🌟 Exercise 3 : Who’s the song producer?
# Instructions
# Define a class called Song, it will show the lyrics of a song.
# Its __init__() method should have two arguments: self and lyrics (a list).
# Inside your class create a method called sing_me_a_song that prints each element 
# of lyrics on its own line.
class Song():
    def __init__(self, lyrics):
        self.lyrics = lyrics
    
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)
        
# Create an object, for example:
stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
# Then, call the sing_me_a_song method. The output should be:
stairway.sing_me_a_song()
# There’s a lady who's sure
# all that glitters is gold
# and she’s buying a stairway to heaven


# Exercise 4 : Afternoon at the Zoo
# Instructions
# Create a class called Zoo.
# In this class create a method __init__ that takes one parameter: zoo_name.
# It instantiates two attributes: animals (an empty list) and name (name of the zoo).
# Create a method called add_animal that takes one parameter new_animal. 
# This method adds the new_animal to the animals list as long as it isn’t already in the list.
# Create a method called get_animals that prints all the animals of the zoo.
# Create a method called sell_animal that takes one parameter animal_sold. 
# This method removes the animal from the list and of course the animal needs to exist in the list.
# Create a method called sort_animals that sorts the animals alphabetically 
# and groups them together based on their first letter.

class Zoo:
   def __init__(self, zoo_name):
       self.animals = []
       self.name = zoo_name
   
   def add_animal(self, new_animal):
       if new_animal not in self.animals:
           self.animals.append(new_animal)
           print(f"{new_animal} has been added to the zoo")
   
   def get_animals(self):
       for animal in self.animals:
           print(animal)
   
   def sell_animal(self, animal_sold):
       if animal_sold in self.animals:
           self.animals.remove(animal_sold)
           print(f"{animal_sold} has been sold")
       else:
           print(f"{animal_sold} is not in the zoo")