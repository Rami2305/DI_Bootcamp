from anagram_checker import AnagramChecker


def get_user_menu():
    # Here the function will show the menu to the user
    # will get his choice and print it

    while True:
        print("\nMenu:")
        print("1. Input a word")
        print("2. Exit")
        
        choice = input("Please choose an option (1 or 2): ")
        if choice in ['1', '2']:
            return choice
        print("Invalid choice, please try again.")

def get_user_input():
    # this function will allow to check if the input of the user is a valid word
    # with the while loop i can iterate until the valid word
    # with the .strip() the function can check that user type just one word
    # with split check for space in the input and if ther is throw an error
    # with isalpha check for letters in the input and not some others characteres
    # if the word goes to all the validations goes out of the loop and return the word
    while True:
        word = input("Enter a word: ").strip()
        if len(word.split()) > 1:
           print("Error: Please enter just one word")
        elif not word.isalpha():
           print("Error: Word must contain only letters")
        else:
           return word
        
def main():
#     here the main()function will creat an instance of the AnagramChecker('backend')
#     will execute a loop that shows the menu define on get user menu and will run the program
#     and the option defined previously
    anagram_checker = AnagramChecker()
   
    while True:
       choice = get_user_menu()
       
       if choice == '2':
           print("Goodbye!")
           break
           
       if choice == '1':
           word = get_user_input()
           
           if anagram_checker.is_valid_word(word):
               anagrams = anagram_checker.get_anagrams(word)
               print(f"\nYOUR WORD: {word}")
               print("This is a valid English word!")
               print("Anagrams for your word:", ", ".join(anagrams))
           else:
               print("This is not a valid English word.")

if __name__ == "__main__":
   main()