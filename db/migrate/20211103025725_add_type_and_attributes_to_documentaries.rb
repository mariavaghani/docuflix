class AddTypeAndAttributesToDocumentaries < ActiveRecord::Migration[5.2]
  def change
    add_column :documentaries, :type_media, :string
    add_column :documentaries, :runtime_size, :string
    add_index :documentaries, :type_media
  end
end
