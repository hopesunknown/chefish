class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :town
      t.string :cuisine

      t.timestamps
    end
  end
end
