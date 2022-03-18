# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "seeding users..."

user1 = User.create(username: 'Jen', password: 'apple', chef: "true", customer: "false")
user2 = User.create(username: 'Shani', password: 'apple', chef: "true", customer: "false")
user3 = User.create(username: 'Gehrig', password: 'apple', chef: "true", customer: "false")
user4 = User.create(username: 'Ethan', password: 'apple', chef: "true", customer: "false")
user5 = User.create(username: 'Hain', password: 'apple', chef: "true", customer: "false")
user6 = User.create(username: 'Ilolo', password: 'apple', chef: "true", customer: "false")
user7 = User.create(username: 'Vivian', password: 'apple', chef: "true", customer: "false")
user8 = User.create(username: 'Rodney', password: 'apple', chef: "true", customer: "false")
user9 = User.create(username: 'Jay', password: 'apple', chef: "true", customer: "false")
user10 = User.create(username: 'Freddy', password: 'apple', chef: "true", customer: "false")

puts "seeding locations..."

location1 = Location.create(name: "Thai Tanic", town: "Adams Morgan", cuisine: "Thai")
location2 = Location.create(name: "La Bella Vita", town: "Dupont Circle", cuisine: "Italian")
location3 = Location.create(name: "Kiwano", town: "Tenleytown", cuisine: "Japanese")
location4 = Location.create(name: "Tio Julio's", town: "Columbia Heights", cuisine: "Mexican")
location5 = Location.create(name: "En Garde", town: "Brookland", cuisine: "French")
location6 = Location.create(name: "Little Japanese House", town: "Georgetown", cuisine: "Japanese")
location7 = Location.create(name: "Bangkok Gardens", town: "Shaw", cuisine: "Thai")
location8 = Location.create(name: "Noodle Queen", town: "U Street", cuisine: "Chinese")
location9 = Location.create(name: "Chimichanga Hut", town: "Friendship Heights", cuisine: "Mexican")
location10 = Location.create(name: "L'amour", town: "Capitol Hill", cuisine: "French")

puts "seeding dishes..."

dish1 = Dish.create(dishname: "Pad Thai", price: 10, cuisine: "Thai", location_id: 1, user_id: 10)
dish2 = Dish.create(dishname: "Spaghetti Carbonara", price: 12, cuisine: "Italian", location_id: 2, user_id: 9)
dish3 = Dish.create(dishname: "Chirashi Sushi Bowl", price: 18, cuisine: "Japanese", location_id: 3, user_id: 8)
dish4 = Dish.create(dishname: "Carne Asada Tacos (3 tacos)", price: 8, cuisine: "Mexican", location_id: 4, user_id: 7)
dish5 = Dish.create(dishname: "Escargot", price: 22, cuisine: "French", location_id: 5, user_id: 6)
dish6 = Dish.create(dishname: "Udon noodle bowl", price: 9, cuisine: "Japanese", location_id: 6, user_id: 5)
dish7 = Dish.create(dishname: "Drunken Noodles", price: 10, cuisine: "Thai", location_id: 7, user_id: 4)
dish8 = Dish.create(dishname: "Beef Lo Mein", price: 7, cuisine: "Chinese", location_id: 8, user_id: 3)
dish9 = Dish.create(dishname: "Chicken Chimichanga", price: 6, cuisine: "Mexican", location_id: 9, user_id: 2)
dish10 = Dish.create(dishname: "Coq Au Vin", price: 18, cuisine: "French", location_id: 10, user_id: 1)

puts "seeding ratings..."

rating1 = Rating.create(dishrating: 9, review: "This was amazing", user_id: 10, dish_id: dish1.id)
rating2 = Rating.create(dishrating: 8, review: "Yummmmm", user_id: 9, dish_id: dish2.id)
rating3 = Rating.create(dishrating: 10, review: "SOLID 10. Sooo good!", user_id: 8, dish_id: dish3.id)
rating4 = Rating.create(dishrating: 7, review: "Missing a few ingredients that I was looking forward to", user_id: 7, dish_id: dish4.id)
rating5 = Rating.create(dishrating: 1, review: "Disgusting...sorry", user_id: 6, dish_id: dish5.id)
rating6 = Rating.create(dishrating: 3, review: "This was really bad", user_id: 5, dish_id: dish6.id)
rating7 = Rating.create(dishrating: 5, review: "This was alright", user_id: 4, dish_id: dish7.id)
rating8 = Rating.create(dishrating: 6, review: "Can be better", user_id: 3, dish_id: dish8.id)
rating9 = Rating.create(dishrating: 9, review: "Delicious", user_id: 2, dish_id: dish9.id)
rating10 = Rating.create(dishrating: 9, review: "Incredible!!!", user_id: 1, dish_id: dish10.id)

puts "✅ Done seeding!"