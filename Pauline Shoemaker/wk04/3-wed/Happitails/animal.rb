require 'pry'

class Animal
  def initialize (animal_name,age,gender,species)
    @animal_name = animal_name
    @age = age
    @gender = gender
    @species = species
  end
  def name
    @animal_name
  end
  def add_toy()
  end
end

# binding.pry
