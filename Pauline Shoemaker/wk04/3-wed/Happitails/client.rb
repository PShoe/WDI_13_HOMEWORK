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
  def add_pet (message)
    puts message
    # (client, selected_pet)
    # shelter.each do |animal|
    #   if animal_selected == shelter['animal_name']
    #     puts "found it"
    #   end
    # end



    # add to pets array for client
    # clients[0]['Anne'].add_pet
    # remove from shelter array
  end
end



# binding.pry
