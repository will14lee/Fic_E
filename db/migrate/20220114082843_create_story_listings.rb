class CreateStoryListings < ActiveRecord::Migration[7.0]
  def change
    create_table :story_listings do |t|
      t.integer :listed_story_id
      t.integer :story_list_id
  
      t.timestamps
    end
  end
end
