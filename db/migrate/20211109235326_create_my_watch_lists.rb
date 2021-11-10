class CreateMyWatchLists < ActiveRecord::Migration[5.2]
  def change
    create_table :my_watch_lists do |t|
      t.integer :profile_id, null: false, index: true
      t.integer :documentary_id, null: false, index: true
      t.timestamps
    end
  end
end
