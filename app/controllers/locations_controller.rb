class LocationsController < ApplicationController
    skip_before_action :authorize

    def index 
        locations = Location.all
        render json: locations, status: :ok
    end

    def show 
        location = find_location
        render json: location, status: :ok
    end

    def update 
        location = find_location
        location.update!(location_params)
        render json: location, status: :ok
    end

    def create 
        location = Location.create!(location_params)
        render json: location, status: :created
    end

    def destroy 
        location = find_location
        location.destroy
        head :no_content
    end

    private 

    def find_location
        Location.find(params[:id])
    end

    def location_params 
        params.permit(:name, :town, :cuisine)
    end
end
