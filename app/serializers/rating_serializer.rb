class RatingSerializer < ActiveModel::Serializer
  attributes :id, :dishrating, :review
  has_one :user
  has_one :dish
end
