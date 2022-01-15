class Story < ApplicationRecord
    has_many :story_listings, foreign_key: :listed_story_id
    has_many :lists, through: :story_listings, source: :story_list
    belongs_to :author, class_name: "User"

    has_many :chapters
    has_many :pages, through: :chapters
end
