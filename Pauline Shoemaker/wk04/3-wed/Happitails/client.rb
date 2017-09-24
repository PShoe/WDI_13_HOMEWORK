require 'pry'

class Client
  def initialize(client_name,num_children,age)
    @client_name = client_name
    @num_children = num_children
    @age = age
    @pets = []
  end
  def name
    @client_name
  end
  def add_pet selected_pet
    @pets.push(selected_pet)
    puts @pets
  end
end



# binding.pry
