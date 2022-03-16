class DishSerializer < ActiveModel::Serializer
  attributes :id, :dishname, :price, :cuisine
  has_one :location
  has_one :user
end
