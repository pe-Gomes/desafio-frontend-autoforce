class AddNotNullConstraintToVehicle < ActiveRecord::Migration[7.2]
  def change
    change_table :vehicles do |t|
      t.change :name, :string, null: false
      t.change :price, :decimal, null: false
      t.change :image, :string, null: false
      t.change :video, :string, null: false
      t.change :legal_text, :string, null: false
      t.change :consumption, :string, null: false
      t.change :engine, :string, null: false
      t.change :power, :string, null: false
      t.change :speed, :string, null: false
    end
  end
end
