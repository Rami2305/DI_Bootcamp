# this will contain a Game class which will have functions to play a single game of rock-paper-scissors 
# against the computer, determine the game’s result, and return the result.

import random

class Game():
    items =  ['rock', 'paper', 'scissors', 'r', 'p', 's']

    

    def __init__(self):
        pass

    def get_user_item(self):
        while True:
            choice = input("Choose (r)ock, (p)aper or (s)cissors: ").lower()
            if choice == 'r':
                return 'rock'
            elif choice == 'p':
                return 'paper'
            elif choice == 's':
                return 'scissors'
            else:
                print("Invalid choice! Please choose r, p or s")
                
    def get_computer_item(self):
        return random.choice(self.items)

    def get_game_result(self, user_item, computer_item):
        winning_moves = {
            'rock': 'scissors',      
            'paper': 'rock',         
            'scissors': 'paper'      
        }
    
        if user_item == computer_item:
            return 'draw'
        elif winning_moves[user_item] == computer_item:
            return 'win'
        else:
            return 'loss'
    
    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)
        
        print(f"You selected {user_item}. The computer selected {computer_item}. You {result}!")
        
        return result
    
