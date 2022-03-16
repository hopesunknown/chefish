class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :chef, :customer
end
