import re
plain  = 'abcdefghijklmnopqrstuvwxyz1234567890'
cipher = 'zyxwvutsrqponmlkjihgfedcba1234567890'


def encode(word):
    result = ''
    word = re.sub('[ .,]', '', word.lower())
    for letter in word:
        index = plain.find(letter)
        result += cipher[index]
    result = ' '.join([result[i:i+5] for i in range(0, len(result), 5)])
    return result

def decode(word):
    result = ''
    word = word.replace(' ', '')
    for letter in word:
        index = cipher.find(letter)
        result += plain[index]
    return result
