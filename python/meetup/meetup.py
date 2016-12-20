from datetime import date
import datetime
from IPython import embed

def meetup_day(year, month, day_of_week, type):
    if type == 'teenth':
        result = date(year, month, 13)
        while result.strftime('%d') < '20':
            if result.strftime('%A') == day_of_week:
                return result
            result = result + datetime.timedelta(days=1)
    elif type == 'last':
        if month + 1 == 13:
            month = 1
            year = year + 1
        else:
            month = month + 1
        result = date(year, month, 1) - datetime.timedelta(days=1)
        while result.strftime('%d') > '01':
            if result.strftime('%A') == day_of_week:
                return result
            result = result - datetime.timedelta(days=1)
    elif type[0].isnumeric():
        freq = int(type[0])
        result = date(year, month, 1)
        counter = 0
        while result.strftime('%d') < '32':
            if result.strftime('%A') == day_of_week:
                counter += 1
                if counter == freq:
                    return result
            result = result + datetime.timedelta(days=1)
        raise MeetupDayException
