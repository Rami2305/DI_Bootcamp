# Retrieve the data into the python file, inside a variable called family
# Print nicely the details about Jane's children
# Inside the family variable, add to each children, a key favorite_color with a value
# Then, save back all the new data into the json file
# Use the indent argument inside the dump function. Check out the documentation and the video in the Useful Resources
# Run the python file
import json

data = {
   "firstName": "Jane",
   "lastName": "Doe", 
   "hobbies": ["running", "sky diving", "singing"],
   "age": 35,
   "children": [
       {
           "firstName": "Alice",
           "age": 6
       },
       {
           "firstName": "Bob",
           "age": 8
       }
   ]
}

# Crear/actualizar archivo JSON
with open('file.json', 'w') as f:
   json.dump(data, f, indent=4)

with open('file.json', 'r') as f:
   family = json.load(f)
   print(family)

favorite_colors = {
    "Alice": "Red",
    "Bob": "Black",
}

with open('file.json', 'r+') as f:
    family = json.load(f)
    for child in family['children']:
        print(f"name: {child['firstName']}, age: {child['age']}")
        child['favoriteColor'] = favorite_colors[child['firstName']]

    f.seek(0)
    json.dump(family, f, indent=2)