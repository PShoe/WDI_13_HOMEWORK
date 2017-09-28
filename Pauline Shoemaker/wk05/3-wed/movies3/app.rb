require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require 'pg'
require_relative 'db_config'
require_relative 'models/movie'

# results.response
# results.parsed_response

# @results = HTTParty.get("http://omdbapi.com/?s=#{@movie_title}.&apikey=#{ENV['OMDB_API_KEY']}")
# @movie = Movie.new (
#   title: @results['Title']
# )



get '/' do
  erb :index
end

get '/show' do
  @movie_title = params['movie_title']
  @movie_result = HTTParty.get("http://omdbapi.com/?t=#{@movie_title}.&apikey=2f6435d9").parsed_response
  @year = @movie_result['Year']
  @poster = @movie_result['Poster']
  erb :show
end

get '/search_results' do
  @movie_title = params['movie_title']
  @movie_result = HTTParty.get("http://omdbapi.com/?s=#{@movie_title}.&apikey=2f6435d9").parsed_response
  @search_array = @movie_result['Search']
  erb :search_results
end
