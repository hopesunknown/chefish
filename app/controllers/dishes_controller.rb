class DishesController < ApplicationController

    def index
        dishes = Dish.all
        render json: dishes, status: :ok
    end

    def show
        dish = find_dish
        render json: dish, status: :ok
    end

    def update 
        dish = find_dish
        dish.update!(dish_params)
        render json: dish, status: :ok
    end

    def create 
        dish = Dish.create!(dish_params)
        render json: dish, status: :created
    end

    def destroy 
        dish = find_dish
        dish.destroy
        head :no_content
    end

    private

    def find_dish
        Dish.find(params[:id])
    end

    def dish_params
        params.permit(:dishname, :price, :cuisine, :location_id, :user_id)
    end
end
