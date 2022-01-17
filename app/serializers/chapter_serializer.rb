class ChapterSerializer < ActiveModel::Serializer
  attributes :id, :title, :summary, :characters
  has_many :pages
end
