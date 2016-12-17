

# class Hamming:
#
#     def __int__(self, strand_1, strand_2):
#         self.distance = find_distance(strand_1, strand_2)

def distance(strand_1, strand_2):
    if len(strand_1) != len(strand_2):
        raise ValueError
    distance = 0
    index = 0
    for s in strand_1:
        if s != strand_2[index]:
            distance += 1
        index += 1

    return distance
