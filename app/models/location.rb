class Location < ApplicationRecord
    has_many :dishes
    has_many :users, through: :dishes
end
