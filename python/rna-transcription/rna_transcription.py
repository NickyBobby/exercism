
complement_dict = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U' }

def to_rna(strand):
    rna_strand = ''
    for dna in list(strand):
        if dna in complement_dict.keys():
            rna_strand += complement_dict[dna]
        else:
            rna_strand = ''
            return rna_strand
    return rna_strand
