require 'pry'

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

binding.pry
# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
users["Jonathan"][:twitter]
# How would you add the number 7 to Erik's favorite numbers?
users["Erik"][:favorite_numbers].push(7)
# How would you add yourself to the users hash?
 users["Pauline"] = {}
 users["Pauline"][:favorite_numbers] = [12]
# How would you return the array of Erik's favorite numbers?
users["Erik"].keys
# How would you return the smallest of Erik's favorite numbers?
users["Erik"][:favorite_numbers].min
# How would you return an array of Anil's favorite numbers that are also even?
users["Erik"][:favorite_numbers].select {|number|  number.even? }
# How would you return an array of the favorite numbers common to all users?
# users.each do |user| puts user.[:favorite_numbers]  end

all_favorite_nums = users["Jonathan"][:favorite_numbers] + users["Erik"][:favorite_numbers] + users["Anil"][:favorite_numbers]

all_favorite_nums_amp = users["Jonathan"][:favorite_numbers] & users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers]
# ampersand & = returns common elements

# users.map do |user|
#   user.select do |key, value|
#     [:favorite_numbers].include? key
#   end
# end

# users["Jonathan"][:favorite_numbers].inject(users["Erik"][:favorite_numbers])

all_favorite_nums.detect{ |num| all_favorite_nums.count(num) == users.size}

# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
all_favorite_nums.uniq.sort
