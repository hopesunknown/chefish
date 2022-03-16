class Dish < ApplicationRecord
  belongs_to :location
  belongs_to :user
  has_many :users, through: :ratings
end
