class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.integer :user_id, null:false, index: true
      t.string :profile_name, null:false
      t.string :maturity_setting, null: false, default: "NC-17"
      t.boolean :autoplay_next_episode, null: false, default: true
      t.boolean :autoplay_preview, null: false, default: true
      t.timestamps
    end
  end
end
