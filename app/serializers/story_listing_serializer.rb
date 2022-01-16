class StoryListingSerializer < ActiveModel::Serializer
  attributes :id, :listed_story_id, :story_list_id
  belongs_to :story_list, class_name: "User"
  belongs_to :listed_story, class_name: "Story"
end
