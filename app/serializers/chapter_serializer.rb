class ChapterSerializer < ActiveModel::Serializer
  attributes :id, :title, :summary, :characters
end
