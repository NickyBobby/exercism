def is_leap_year(year):
    if (year % 4 == 0 and year % 100 != 0 and year % 400 == 0) or (year % 4 == 0 and year % 400 == 0) or (year % 4 == 0 and year % 100 != 0 and year < 3999):
        return True
    else:
        return False
