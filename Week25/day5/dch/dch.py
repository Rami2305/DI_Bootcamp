# Ask a user for a word
# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

# Make sure the letters are the keys.
# Make sure the letters are strings.
# Make sure the indexes are stored in a list and those lists are values.

# Examples
# "dodo" ➞ { "d": [0, 2], "o": [1, 3] }
# "froggy" ➞ { "f":  [0], "r": [1], "o": [2], "g": [3, 4], "y": [5] }
# "grapes" ➞ { "g": [0], "r": [1], "a": [2], "p": [3]}


user_word = input('Give me a word')

place_word = {}

for index, letter in enumerate(user_word):
    if letter in place_word:
        place_word[letter].append(index)
    else:
        place_word[letter] = [index]

print(place_word)
#enumerate give to values: the position(i) and te value(letter)
#if letter in the dictionary will be addedin a new position if not,
#will create a new position

#if the letter exist, will be added to te existin list
#if not, wil create a new position.

# Challenge 2
# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything from the store.
# Hint : make sure to convert the amount from dollars to numbers. Create a program that deletes the $ sign, and the comma (for thousands)

