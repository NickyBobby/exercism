def square_of_sum(num):
    sum = 1
    count = 1
    while count < num:
        count += 1
        sum = sum + count
    return sum**2

def difference(num):
    return square_of_sum(num) - sum_of_squares(num)

def sum_of_squares(num):
    sum = 1
    count = 1
    while count < num:
        count += 1
        sum = sum + count**2
    return sum
