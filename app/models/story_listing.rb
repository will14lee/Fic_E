class StoryListing < ApplicationRecord
    belongs_to :story_list, class_name: "User"
    belongs_to :listed_story, class_name: "Story"
end
