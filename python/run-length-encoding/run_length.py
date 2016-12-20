def encode(input):
    output = ''
    prev_let = ''
    while len(input) > 0:
        letter = input[:1]
        input = input[1:]
        if len(input) == 0:
            if letter == prev_let[-1]:
                prev_let = prev_let + letter
                output = output + str(len(prev_let)) + letter
            else:
                output = output + str(len(prev_let)) + prev_let[-1] + letter
        else:
            if prev_let != '' and letter == prev_let[-1]:
                prev_let = prev_let + letter
            else:
                if len(prev_let) > 1:
                    output = output + str(len(prev_let)) + prev_let[-1]
                    prev_let = letter
                elif len(prev_let) == 1:
                    output = output + prev_let
                    prev_let = letter
                else:
                    prev_let = letter
    return output

def decode(input):
    output = ''
    number = ''
    for letter in input:
        if letter.isnumeric():
            number = number + letter
        else:
            if number == '':
                times = 1
            else:
                times = int(number)
            addition = times * letter
            output = output + addition
            number = ''
    return output
