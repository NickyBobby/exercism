


class HelloWorld
  attr_reader :name, :hello


  def initialize(name)
    @name = name

  end

  def self.hello(name="World")
    "Hello, #{name}!"
  end



end

# hey = HelloWorld.new
#
# p hey.hello('Dude')
