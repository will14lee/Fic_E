class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    has_secure_password
    has_many :story_authorings, foreign_key: :story_author_id
    has_many :authored_stories, through: :story_authorings
    has_many :readered_stories, foreign_key: "reader_id", class_name: "Story"
end
