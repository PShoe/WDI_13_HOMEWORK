
require 'sinatra'
require 'sinatra/reloader'

comments = ['lol','looks great']

get '/' do
  @comments = comments
  erb :index
end

post '/leave_comment' do
  @comments = comments
  comments.push(params[:body])
  redirect '/'
end
