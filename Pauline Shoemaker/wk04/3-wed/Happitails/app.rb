require 'pry'
require_relative 'animal.rb'
require_relative 'client.rb'
require 'sinatra'
require 'sinatra/reloader'


@return_to_menu = true

while @return_to_menu == true do
puts "____ MENU ____ \n
1. Display all animals \n
2. Display all clients \n
3. Create an animal \n
4. Create an client \n
5. Facilitate client adopts an animal \n
6. Facilitate client puts an animal up for adoption \n
PLEASE CHOSE AN OPTION (1-6)"
menu_answer = gets.chomp.to_i
shelter = [
]

  if menu_answer == 3
    # filler data
    animals = {
      "Ginger" => {
        species: 'cat',
        gender: 'f',
        age: '10'
      },
      "Fluffy" => {
        species:'dog',
        gender: 'm',
        age: '2'
      }
    }

    puts "Enter the name of your animal: "
    name = gets.chomp
    puts "Species: "
    species = gets.chomp
    puts "Gender: (m/f)"
    gender = gets.chomp
    puts "Age: "
    age = gets.chomp

    animals[name] = {}
    animals[name][:species] = species
    animals[name][:gender] = gender
    animals[name][:age] = age

    animal_name = Animal.new(animal_name,age,gender,species)

    shelter.push(animals);

    puts "Animal has been successfully added to shelter, will return to main menu"
  end
end
