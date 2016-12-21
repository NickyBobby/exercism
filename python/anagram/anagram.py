resultDict = dict()

def detect_anagrams(m_word, collection):
    for word in collection:
        add_to_dictionary(word, resultDict)
    return check_dictionary(m_word, collection)

def add_to_dictionary(word, dictionary):
    dictionary[word] = dict()
    for letter in word:
        if letter in dictionary[word]:
            dictionary[word][letter.lower()] += 1
        else:
            dictionary[word][letter.lower()] = 1
    return dictionary


def check_dictionary(m_word, collection):
    result = list()
    match_word_dict = add_to_dictionary(m_word, dict())
    for word in collection:
        check_val = True
        if len(m_word) != len(word) or m_word.lower() == word.lower():
            check_val = False
        for letter in resultDict[word]:
            if letter.lower() not in match_word_dict[m_word] or match_word_dict[m_word][letter.lower()] != resultDict[word][letter.lower()]:
                check_val = False
        if check_val:
            result.append(word)
    return result
