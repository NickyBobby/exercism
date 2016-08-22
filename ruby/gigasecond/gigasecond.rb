

class Gigasecond


  def self.from(start_date)

    end_date = start_date + (10^9)
    end_date = URI.escape(offset_utc_timestamp(10^9))

  end

  def self.offset_utc_timestamp(offset, format = "%Y-%m-%dT%H:%M:%S.%3NZ")

    time = Time.now.utc + offset
    time.strftime(format)

  end

end
