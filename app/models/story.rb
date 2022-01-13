class Story < ApplicationRecord
    belongs_to :author, class_name: "User"

    has_many :story_authorings, foreign_key: :authored_story_id
    has_many :authors, through: :story_authorings, source: :story_author
    belongs_to :reader, class_name: "User"
    
    
    has_many :chapters
    has_many :pages, through: :chapters
end
