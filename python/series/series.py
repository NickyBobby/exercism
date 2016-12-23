

def slices(num_str, length):
    if length > len(num_str) or length < 1:
        raise ValueError
    result = list()
    index = 0
    for num in num_str:

        if index + length <= len(num_str) - 1:
            piece = num_str[index:index+length]
            array = []
            for n in piece:
                if n.isnumeric():
                    array.append(int(n))
        else:
            piece = num_str[(-1 * length):]
            array = []
            for n in piece:
                if n.isnumeric():
                    array.append(int(n))
            result.append(array)
            return result
        if len(array) == length:
            result.append(array)
        index += 1
    return result
