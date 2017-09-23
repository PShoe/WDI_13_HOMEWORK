require 'pry'
require_relative 'animal.rb'
require_relative 'client.rb'
require 'sinatra'
require 'sinatra/reloader'


return_to_menu = true
# filler data
shelter = [
  # {"Ginger" => {
  #   species: 'cat',
  #   gender: 'f',
  #   age: '10'
  # }},
  # {"Fluffy" => {
  #   name:'dog',
  #   gender: 'm',
  #   age: '2'
  # }}
]
clients = [
  # {"Anne" => {
  #   num_children: '2',
  #   age: '40',
  #   pets: []
  # }},
  # {"Charlie" => {
  #   num_children: '0',
  #   age: '30',
  #   pets: []
  # }}
]

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

  if menu_answer == 1
    puts shelter
  end
  if menu_answer == 2
    puts clients
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

    shelter.push(animal_name;
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
    binding.pry
  end

  if menu_answer == 5
    # 5. Facilitate client adopts an animal \n
    puts shelter
    puts "which animal would you like to adopt?"
    animal_selected = gets.chomp
    # Client.add_pet(animal_selected)
  end

  if menu_answer == 6
    # 6. Facilitate client puts an animal up for adoption \n
  end

end
