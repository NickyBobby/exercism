def sieve(limit):
    result = []
    num = 0
    while num < limit:
        num += 1
        if is_prime(num):
            result.append(num)
    return result

def is_prime(num):
    if num <= 1:
        return False
    if num == 2:
        return True
    for n in range(3, num):
        if num % 2 == 0 or num % n == 0:
            return False
    return True
