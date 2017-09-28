require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require_relative 'db_config'
require_relative 'models/movie'

# results.response
# results.parsed_response


get '/' do
  erb :index
end


get '/show' do
  @movie_title = params['movie_title']
  @result = HTTParty.get("http://omdbapi.com/?t=#{@movie_title}&apikey=2f6435d9").parsed_response
  @poster = @result['Poster']
  @year = @result['Year']
  @genre = @result['Genre']
  erb :show
end
