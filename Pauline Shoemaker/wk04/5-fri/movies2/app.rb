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
  @movie_result = HTTParty.get("http://omdbapi.com/?t=#{@movie_title}.&apikey=2f6435d9").parsed_response
  @year = @movie_result['Year']
  @poster = @movie_result['Poster']
  erb :about
end

get '/search_results' do
  @movie_title = params['movie_title']
  @movie_result = HTTParty.get("http://omdbapi.com/?s=#{@movie_title}.&apikey=2f6435d9").parsed_response
  @search_array = @movie_result['Search']
  erb :search_results
end
