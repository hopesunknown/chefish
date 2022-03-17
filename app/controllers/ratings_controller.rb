class RatingsController < ApplicationController
    skip_before_action :authorize

    def index 
        ratings = Rating.all
        render json: ratings, status: :ok
    end

    def show 
        rating = find_rating
        render json: rating, status: :ok
    end

    def update 
        rating = find_rating
        rating.update!(rating_params)
        render json: rating, status: :ok
    end

    def create 
        rating = Rating.create!(rating_params)
        render json: rating, status: :created
    end

    def destroy 
        rating = find_rating
        rating.destroy
        head :no_content
    end

    private 

    def find_rating
        Rating.find(params[:id])
    end

    def rating_params 
        params.permit(:dishrating, :review, :user_id, :dish_id)
    end
end
