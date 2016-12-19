import re

#
# Skeleton file for the Python "Bob" exercise.
#


def hey(what):
    what = re.sub('[\s+\t]', '', what)
    if what == '':
        return 'Fine. Be that way!'
    elif what[-1] == '?' and what[:-1].isalpha() == False:
        return 'Sure.'
    elif what == what.upper() and (what[-1] == '!' or what[-1] == '?'):
        return 'Whoa, chill out!'
    elif what == what.upper() and what[:-1].isalpha():
        return 'Whoa, chill out!'
    elif what[-1] == '?':
        return 'Sure.'
    else:
        return 'Whatever.'
