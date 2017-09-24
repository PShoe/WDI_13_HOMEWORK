require 'pry'
require_relative 'animal.rb'
require_relative 'client.rb'
require 'sinatra'
require 'sinatra/reloader'


return_to_menu = true
shelter = []
clients = []

while return_to_menu == true do
puts "____ MENU ____ \n
1. Display all animals \n
2. Display all clients \n
3. Create an animal \n
4. Create a client \n
5. Facilitate client adopts an animal \n
6. Facilitate client puts an animal up for adoption \n
PLEASE CHOSE AN OPTION (1-6)"
menu_answer = gets.chomp.to_i


if shelter == []
test_animal1 = Animal.new('Rex','2','m','cat')
test_animal2 = Animal.new('Spike','4','m','cat')
shelter.push(test_animal1)
shelter.push(test_animal2)
end
if clients == []
test_client1 = Client.new('John','2','40')
test_client2 = Client.new('Jane','1','30')
clients.push(test_client1)
clients.push(test_client2)
end

  if menu_answer == 1
    shelter.each do |animal|
      puts animal.name
    end

  end
  if menu_answer == 2
    clients.each do |client|
      puts client.name
    end
  end

  if menu_answer == 3

    puts "Enter the name of your animal: "
    animal_name = gets.chomp
    puts "Species: "
    species = gets.chomp
    puts "Gender: (m/f)"
    gender = gets.chomp
    puts "Age: "
    age = gets.chomp

    animal_name = Animal.new(animal_name,age,gender,species)
    shelter.push(animal_name);
    puts "Animal has been successfully added to shelter, you will now return to main menu"
  end

  if menu_answer == 4

    puts "Enter the name of the client: "
    client_name = gets.chomp
    puts "Number of children: "
    num_children = gets.chomp
    puts "Age: "
    age = gets.chomp


    new_client = Client.new(client_name,num_children,age)

    clients.push(new_client);
    puts "This client has been successfully added to our records, you will now return to main menu"
  end

  if menu_answer == 5

    clients.each do |client|
      puts client.name
    end

    puts "Which client would like to adopt?"
    client_will_adopt = gets.chomp
    # find object this is with
    client_will_adopt = clients.select {|client| client.name == client_will_adopt }

    shelter.each do |animal|
      puts animal.name
    end

    puts "Which animal would you like to adopt?"
    animal_selected = gets.chomp
    animal_selected = shelter.select {|animal| animal.name == animal_selected}
    animal_selected = animal_selected.first

    client_will_adopt.first.add_pet animal_selected
    shelter.delete(animal_selected)

binding.pry
  end

  if menu_answer == 6
    # 6. Facilitate client puts an animal up for adoption \n
  end

end
