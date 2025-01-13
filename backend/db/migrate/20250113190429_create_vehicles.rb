class CreateVehicles < ActiveRecord::Migration[7.2]
  def change
    create_table :vehicles do |t|
      t.string :name
      t.decimal :price
      t.string :image
      t.string :video
      t.string :legal_text
      t.string :consumption
      t.string :engine
      t.string :power
      t.string :speed

      t.timestamps
    end
  end
end
