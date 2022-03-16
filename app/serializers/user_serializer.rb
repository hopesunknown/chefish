class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :chef, :customer
end
