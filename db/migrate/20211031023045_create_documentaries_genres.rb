class CreateDocumentariesGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :documentaries_genres do |t|
      t.integer :documentary_id, null: false
      t.integer :genre_id, null:false
      t.timestamps
    end
    add_index :documentaries_genres, :documentary_id 
    add_index :documentaries_genres, :genre_id 
  end
end
