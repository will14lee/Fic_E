# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

will= User.create(username: "Will", password_digest: "Will")
will_story= will.authored_stories.create(title: "LOTR")
will_chapter= will_story.chapters(title: "Chapter 1")
will_page= will_chapter.pages(text: "Page 1")

