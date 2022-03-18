class LocationWithDishesSerializer < ActiveModel::Serializer
    attributes :id, :name, :town, :cuisine
    has_many :dishes
  end