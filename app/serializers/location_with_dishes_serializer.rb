class LocationWithDishesSerializer < ActiveModel::Serializer
    attributes :id, :name, :town
    has_many :dishes
  end