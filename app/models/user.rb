class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    has_secure_password

    has_many :story_listings, foreign_key: :story_list_id
    has_many :listed_stories, through: :story_listings
    has_many :authored_stories, foreign_key: :author_id, class_name: "Story"

end
