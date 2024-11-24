def decrypt_matrix(matrix):
    #create a lsit 2d with rows of matrix
    matrix_lines = [
        "7ii",
        "Tsx",
        "h%?",
        "i #",
        "sM ",
        "$a ",
        "#t%",
        "^r!"
    ]
    
    # find out how many rows and cols are.
    rows = len(matrix_lines)
    cols = len(matrix_lines[0])
    
    # read trough the columns and filter the alphabet characters 
    # 
    message = ''
    current_word = ''
    
    for col in range(cols):
        for row in range(rows):
            char = matrix_lines[row][col]
            
            # if its a word, add to the message
            if char.isalpha():
                if current_word:
                    message += current_word + ''
                    current_word = ''
                message += char
            # check for empty spaces between the characters
            elif message and not current_word:
                current_word = ' '
    
    if current_word:
        message += current_word
    
    return message.strip()

message = decrypt_matrix("")
print(f"message: {message}")