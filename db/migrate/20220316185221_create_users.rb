class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.boolean :chef
      t.boolean :customer

      t.timestamps
    end
  end
end
