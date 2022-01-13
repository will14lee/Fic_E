class CreatePages < ActiveRecord::Migration[7.0]
  def change
    create_table :pages do |t|
      t.text :text
      t.text :notes
      t.string :chapter_id

      t.timestamps
    end
  end
end
