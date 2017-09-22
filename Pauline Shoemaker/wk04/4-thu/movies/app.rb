require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

# results.response
# results.parsed_response


get '/' do
  erb :index
end


get '/about' do
  @movie_title = params['movie_title']
  @result = HTTParty.get("http://omdbapi.com/?t=#{@movie_title}&apikey=2f6435d9").parsed_response
  # binding.pry
  @poster = @result['Poster']
  @year = @result['Year']
  @genre = @result['Genre']
  erb :about
  # binding.pry
end
