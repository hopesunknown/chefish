class CreateDishes < ActiveRecord::Migration[6.1]
  def change
    create_table :dishes do |t|
      t.string :dishname
      t.integer :price
      t.string :cuisine
      t.integer :location_id
      t.integer :user_id

      t.timestamps
    end
  end
end
