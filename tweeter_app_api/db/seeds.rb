require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Note: The Faker::Twitter gem is giving Latin dummy text. We're sticking with the Latin-Tweetr theme for our tweets and replies.
# This default seed-data creates 10 default Tweets and 3 Replies for each Tweet which will render on the ViewTweet page.
# 10.times do |i|
#     Tweet.create({
#         author: Faker::Twitter.screen_name,
#         title: Faker::Twitter.status[:text],
#         content: Faker::Twitter.status[:text]
#     })
#     Reply.create({
#         content: Faker::Twitter.status[:text],
#         author: Faker::Twitter.screen_name,
#         tweet_id: i+1
#     })
#     Reply.create({
#         content: Faker::Twitter.status[:text],
#         author: Faker::Twitter.screen_name,
#         tweet_id: i+1
#     })
#     Reply.create({
#         content: Faker::Twitter.status[:text],
#         author: Faker::Twitter.screen_name,
#         tweet_id: i+1
#     })
# end
