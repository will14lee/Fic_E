class CreateStories < ActiveRecord::Migration[7.0]
  def change
    create_table :stories do |t|
      t.string :title
      t.text :premise
      t.string :genre
      t.integer :page_length
      t.string :status
      t.string :author_id

      t.timestamps
    end
  end
end
