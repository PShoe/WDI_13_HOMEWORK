require 'pry'
require_relative 'monkeys'

sidhra = Monkey.new('Sidhra','Gorilla')
puts sidhra
puts sidhra.eat('bananas')
puts sidhra.eat('pineapples')
puts sidhra.introduce

binding.pry
