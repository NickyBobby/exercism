def sum_of_multiples(limit, num_list):
    result = 0
    counter = 0
    while counter < limit-1:
        counter += 1
        added = False
        for num in num_list:
            if num != 0 and counter % num == 0 and added != True:
                result += counter
                added = True
    return result
