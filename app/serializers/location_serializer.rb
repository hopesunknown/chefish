class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :town, :cuisine
end
