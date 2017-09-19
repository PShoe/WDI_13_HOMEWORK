require 'pry'

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

planeteers[1]
planeteers.push("Heart")
planeteers.delete_at(2)
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heroes = rangers + planeteers
heroes.sort
heroes.shuffle
heroes.sample
# heroes.select {|hero|  hero =~ /b./i }
heroes.select {|hero|  hero[0] =~ /b/i }
heroes.select {|hero|  hero.start_with?("B") || hero.start_with?("b")}
ninja_turtle = {
    name: "Michelangelo",
    weapon: "Nunchuks",
    radical: true
  }
ninja_turtle[:age]= 45
ninja_turtle.delete(:radical)
ninja_turtle[:pizza_toppings] = ["cheese", "pepperoni", "peppers"]
ninja_turtle[:pizza_toppings].first
ninja_turtle.keys
ninja_turtle.each {|key, value| puts "#{key} is equal to #{value}" }


binding.pry
