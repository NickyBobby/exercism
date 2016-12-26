import re

def abbreviate(input):
    result = ''
    input = re.sub('[,]', '', input)
    input = re.sub('[-]', ' ', input)
    input = input.split(':')[0]
    for word in input.split(' '):
        first_letter = word[0].upper()
        result += first_letter
        word = word[1:]
        for letter in word:
            if letter == letter.upper():
                result += letter
    return result
