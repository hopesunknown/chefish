class DishnameSerializer < ActiveModel::Serializer
  attributes :id, :price, :cuisine
  has_one :location
  has_one :user
end
