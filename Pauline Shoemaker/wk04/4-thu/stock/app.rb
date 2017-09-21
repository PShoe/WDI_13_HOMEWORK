require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'


get '/' do
  # result = YahooFinance::get_quotes(YahooFinance::StandardQuote, 'MSFT')
  erb :index
end

# ///type MSMT use params hash to see what user provided. pass into funtion to get exact info for that stock

# its a hash containing an object

get '/stock_info' do
  @stock_ticker = params['stock_ticker']
  @result = YahooFinance::get_quotes(YahooFinance::StandardQuote, @stock_ticker)
  @name = @result[@stock_ticker].name
  # binding.pry
  erb :stock_info
end
