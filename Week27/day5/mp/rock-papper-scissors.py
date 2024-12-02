#  this will contain functions to show the main menu, handle user’s input, 
# and show the game summary before exiting.
from game import Game

def get_user_menu_choice():

    print("\nMenu:")
    print("1. Play a new game")
    print("2. Show scores") 
    print("3. Quit")
    return input("Enter your choice (1/2/3): ")

def print_results(results):

    print(f"\nGame Results:")
    print(f"You won {results['win']} times")
    print(f"You loss {results['loss']} times")
    print(f"You drew {results['draw']} times")
    print("\nThanks for playing!")


def main():

    results = {'win': 0, 'loss': 0, 'draw': 0}
    
    while True:
       choice = get_user_menu_choice()
       
       if choice == '1':  # Play game
           game = Game()
           result = game.play()
           results[result] += 1
           
       elif choice == '2':  # Show scores
           print_results(results)
           
       elif choice == '3':  # Quit
           print_results(results)
           break

if __name__ == "__main__":
    main()