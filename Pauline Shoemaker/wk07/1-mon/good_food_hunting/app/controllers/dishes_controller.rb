class DishesController < ApplicationController
  def index
    @dishes = Dish.all
  end
  def new
  end
  def create
    dish = Dish.new
    dish.name = params[:name]
    dish.image_url = params[:image_url]
    dish.save
    redirect_to '/dishes'
  end
  def destroy
    @dish = Dish.find(params[:id]).destroy
    redirect '/dishes'
  end
  def show
    @dish = Dish.find(params[:id])
  end
end
