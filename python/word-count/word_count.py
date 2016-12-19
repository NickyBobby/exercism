import re

def word_count(input):
    input = re.sub('[!&@$^:%.]', '', input)
    input = re.sub('\s+', ' ', input)
    input = re.sub('[,_]', ' ', input)
    input = re.sub('🖖', ' ', input).lower()
    arr = input.split(' ')
    result = dict()
    for word in arr:
        if word in result:
            result[word] += 1
        else:
            result[word] = 1

    return result
