class CreateRatings < ActiveRecord::Migration[6.1]
  def change
    create_table :ratings do |t|
      t.integer :dishrating
      t.string :review
      t.integer :user_id
      t.integer :dish_id

      t.timestamps
    end
  end
end
