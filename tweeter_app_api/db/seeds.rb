require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

2.times do
    Tweet.create({
        author: Faker::Twitter.screen_name,
        title: Faker::Twitter.status[:text],
        content: Faker::Twitter.status[:text]
    })
end


# Tweet.create({
#     title: "Just found this",
#     content: "the square of the hypotenuse is equal to the sum of the squares of the other two sides",
#     author: "Pythagoras570"
#   })
  
#   Tweet.create({
#     title: "I'm walkin' here",
#     content: "Hey, I'm walkin' here!",
#     author: "Nicky62"
#   })


# Reply.create([
#     {content: "Wow, you're super good at math @Pythagoras570!", author: "RainbowUnicorn781", tweet_id: 1},
#     {content: "Walkin' where @Nicky62?", author: "GleefulDolphin123", tweet_id: 2}
# ])