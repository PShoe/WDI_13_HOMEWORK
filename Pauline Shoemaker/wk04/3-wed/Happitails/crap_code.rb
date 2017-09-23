shelter = [
  ginger: Animal.new('ginger, 2, cat')
]
shelter[:ginger]

animal = [
    ginger: Animal.new('ginger, 2, female, ')
]

# fake data
clients = {
  "john" =>
  {
    :num_children = 2,
    :age = 45,
    :list_pets = ['dog', 'cat']
  }
  "mike" =>
  {
    :num_children = 2,
    :age = 45,
    :list_pets = ['lizard', 'cat']
  }
  "fluffy" =>
  {
    :num_children = 2,
    :age = 45,
    :list_pets = ['dog']
  }
  "pooch" =>
  {
    :num_children = 2,
    :age = 45,
    :list_pets = ['cat']
  }
}

puts "Enter the name of your animal: "
name = gets.chomp
animals[name] = {}
puts "Species: "
species = gets.chomp
animals[name][:species] = species
puts "Gender: (m/f)"
gender = gets.chomp
animals[name][:gender] = gender
puts "Age: "
age = gets.chomp
animals[name][:age] = age
# make this a loop

puts "Name of client: "
name = gets.chomp
client[name] = {}
puts "Num of children: "
num_children = gets.chomp
client[name][:num_children] = num_children
puts "Age: "
age = gets.chomp
client[name][:age] = age

Client.new()


binding.pry
