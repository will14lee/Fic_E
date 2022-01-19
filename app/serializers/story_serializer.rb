class StorySerializer < ActiveModel::Serializer
  attributes :id, :title, :premise, :genre, :page_length, :status, :author

  has_many :story_listings, foreign_key: :listed_story_id
  has_many :lists, through: :story_listings, source: :story_list
  belongs_to :author, class_name: "User"
end
