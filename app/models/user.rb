class User < ApplicationRecord
    has_many :ratings
    has_many :dishes
    has_many :locations, through: :dishes
    has_many :dishes, through: :ratings

    has_secure_password

    validates :username, presence: true, uniqueness: true
    
end
