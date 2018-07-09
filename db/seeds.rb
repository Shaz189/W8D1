require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# 10.times do
#   User.create(username: Faker::Name.name, password: 'password')
# end

# 5.times do
#   Bench.create(description: Faker::HitchhikersGuideToTheGalaxy.location, lat: rand(0.000000..180.000000), lng: rand(0.000000..180.000000) )
# end

Bench.create(description: "test bench", lat: 37.790319, lng: 122.404441)
