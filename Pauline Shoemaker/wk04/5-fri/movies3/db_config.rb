require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'blockbuster'
}

ActiveRecord::Base.establish_connection(options)
