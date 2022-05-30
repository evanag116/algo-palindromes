def palindrome(word): 
    word = "".join(i for i in str(word).lower() if i.isalnum()) 
    return word[::-1] == word