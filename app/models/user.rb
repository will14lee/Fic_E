class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    has_secure_password

    has_many :story_listings, foreign_key: :story_list_id, dependent: :destroy
    has_many :listed_stories, through: :story_listings, dependent: :destroy
    has_many :authored_stories, foreign_key: :author_id, class_name: "Story", dependent: :destroy
    has_many :chapters, through: :authored_stories
end
