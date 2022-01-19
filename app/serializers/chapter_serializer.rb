class ChapterSerializer < ActiveModel::Serializer
  attributes :id, :title, :summary, :characters, :author
  has_many :pages
end
