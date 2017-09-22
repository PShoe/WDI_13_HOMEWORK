require 'pry'
require_relative 'animal.rb'
require_relative 'client.rb'
require 'sinatra'
require 'sinatra/reloader'

puts "____ MENU ____ \n
1. Display all animals \n
2. Display all clients \n
3. Create an animal \n
4. Create an client \n
5. Facilitate client adopts an animal \n
6. Facilitate client puts an animal up for adoption \n
PLEASE CHOSE AN OPTION (1-6)"
menu_answer = gets.chomp


if menu_answer == 3
animals = {}
shelter = []

puts "Enter the name of your animal: "
animal_name = gets.chomp
puts "Species: "
species = gets.chomp
puts "Gender: (m/f)"
gender = gets.chomp
puts "Age: "
animal_age = gets.chomp

animals[animal_name] = {}
animals[animal_name][:species] = species
animals[animal_name][:gender] = gender
animals[animal_name][:age] = age

# shelter.push(animals[animal_name])

puts shelter
binding.pry
end
