import string


def is_pangram(sentence):
    alphabet = list(string.ascii_lowercase)
    for letter in alphabet:
        if sentence.lower().find(letter) == -1:
            return False
    return True
