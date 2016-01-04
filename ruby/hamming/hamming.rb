require 'pry'

class Hamming
  VERSION = 1

  def self.compute(strand_a, strand_b, counter=0)
    if strand_a.length != strand_b.length
      raise ArgumentError
    else
      if strand_a == strand_b
        counter
      else
      computate(strand_a, strand_b, counter)
      end
    end
  end

  def self.computate(strand_a, strand_b, counter)
    if strand_a[0] == strand_b[0]
      a = strand_a.slice!(0)
      b = strand_b.slice!(0)
        if strand_a.empty? && strand_b.empty?
          return counter
        else
        computate(strand_a, strand_b, counter)
        end
    elsif strand_a[0] != strand_b[0]
      counter += 1
      a = strand_a.slice!(0)
      b = strand_b.slice!(0)
        if strand_a.empty? && strand_b.empty?
          return counter
        else
        computate(strand_a, strand_b, counter)
        end
    else
      counter
    end

  end



end
