

class AnagramChecker():

    def __init__(self):
        # i will initialize the class by loading a list of valid english word into a set
        # use a set for lookup time when checking if the words are valid or not 

        self.library = set()
        with open('namelist.txt', 'r', encoding='utf-8') as f:
            for line in f:
                self.library.add(line.strip().lower())

    def is_valid_word(self, word):
        # i have to check if the word is valid in english
        return word.strip().lower() in self.library
    
    def is_anagram(self, word1, word2):
        # two things to do in this method:
        # 1) convert both words to lowercase and remove spaces
        word1 = word1.strip().lower()
        word2 = word2.strip().lower()
        
        # 2) sort letters of both words and compare them
        return sorted(word1) == sorted(word2)
    
    def get_anagrams(self, word):
        # in this mehtod i need to do 3 thigs:
        # 1) check in the library and find all possible anagrams of the given word
        # 2)return a list of valid words that are anagrams of the input word
        # 3) exclude the original word from the result
        anagrams = []
        word = word.strip().lower()
        for almost_anagrams in self.library:
            if self.is_anagram(word, almost_anagrams) and almost_anagrams != word:
                anagrams.append(almost_anagrams)
        return anagrams
