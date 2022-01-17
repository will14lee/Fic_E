class PageSerializer < ActiveModel::Serializer
  attributes :id, :text, :notes
  belongs_to :chapter
end
