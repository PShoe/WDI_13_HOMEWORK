
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

  already_in_db = Movie.find_by imdb_id: @imdb_id

  if already_in_db == nil
  @movie_title = params['movie_title']
  @movie_result = HTTParty.get("http://omdbapi.com/?t=#{@movie_title}.&apikey=2f6435d9").parsed_response
  movie = Movie.new
  movie.year =  @movie_result['Year']
  movie.title = @movie_result['Title']
  movie.poster = @movie_result['Poster']
  movie.imdb_id = @movie_result['imdbID']
  movie.save
  else
  movie = Movie.find_by imdb_id: @imdb_id
  movie.year =  movie['year']
  movie.title = movie['title']
  movie.poster = movie['poster']
  end
  erb :show
end

get '/search_results' do
  @movie_title = params['movie_title']
  @movie_result = HTTParty.get("http://omdbapi.com/?s=#{@movie_title}.&apikey=2f6435d9").parsed_response
  if @movie_result['Response'] == "False"
    @no_results = true
    erb :index
  else
    @search_array = @movie_result['Search']
    @imdb_id = @movie_result['imdbID']
    erb :search_results
  end
end
