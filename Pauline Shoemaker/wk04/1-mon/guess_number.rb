require 'pry'
require 'fileutils'

# Title: Guess The Number

# Activity:
#
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:
#
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:
#
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"


computer_number = Random.rand(1..10)
puts "Hint, computer is thinking of #{computer_number}"

puts "Guess a number from one to ten"
guess = gets.to_i

if guess == computer_number
  puts "congrats!"
else
  until guess == computer_number
    puts "please gets again"
    guess = gets.to_i
  end
  puts "you got it!"
end

binding.pry

# guesses = []
# guesses.each do |guess|
# end
