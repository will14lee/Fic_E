class CreateChapters < ActiveRecord::Migration[7.0]
  def change
    create_table :chapters do |t|
      t.string :title
      t.text :summary
      t.string :characters
      t.string :story_id
      t.string :author_id
      
      t.timestamps
    end
  end
end
