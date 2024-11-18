# Create a TicTacToe game in python, where two users can play together.
# The game is played on a grid that’s 3 squares by 3 squares.
# Players take turns putting their marks (O or X) in empty squares.
# The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
# When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.

size = 3 #size ofo the board
board = [''] * (size * size) # create a list with the size of = size *suze

def display_board(board):
    for row in range(size): # iterate 3 times for each row
        start = row * size # check for the initial index of every row
        print(f' {board[start]} | {board[start+1]} | {board[start+2]} ') 
        # print the boarders of the board
        if row < size - 1:
            print('---+---+---')


def player_input(player):
    while True:
        place_play = int(input('enter the position you want to play: '))
        if 1 <= place_play <=9:
            # check that the input is on range
            # convert to index the list
            index = place_play - 1

            if board[index] == '': 
                # check for an empty spot
                board[index] = player #put the player s mark
                break
            else:
                print('that position is already taken. try again')
        else:
            print('please enter a number between 1 and 9')


def check_winner():
    # set the posible combinations aup, down, across, or diagonally)
    win_combo = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  
        [0, 4, 8], [2, 4, 6]
    ]
    for combo in win_combo:
    #    check for every combination
       if (board[combo[0]] == board[combo[1]] == board[combo[2]] != ''):
           return True
    return False


def play():
    current_player = 'X' # 

    while True:  # logic game
        display_board(board)  # show the board
        player_input(current_player)  # the currnt player makes his move

        if check_winner():  # check if won
            display_board(board)
            print(f'{current_player} wins')
            break

         # check for tie if board is full of moves
        if '' not in board:  # if there is not empty spots on board
            display_board(board)
            print('tie')
            break

         # the player changes
        current_player = 'O' if current_player == 'X' else 'X'

play()