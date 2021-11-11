class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.integer :profile_id, null: false, index: true
      t.integer :documentary_id, null: false, index: true
      t.boolean :rating_value, null:false
      t.timestamps
    end
  end
end
