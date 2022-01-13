class StorySerializer < ActiveModel::Serializer
  attributes :id, :title, :premise, :genre, :page_length, :status
  has_many :chapters
  # has_many :pages, through: :chapters
  has_many :readers
end
