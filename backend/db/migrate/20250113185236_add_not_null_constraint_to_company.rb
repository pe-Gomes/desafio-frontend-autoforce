class AddNotNullConstraintToCompany < ActiveRecord::Migration[7.2]
  def change
    change_table :companies do |t|
      t.change :company_name, :string, null: false
      t.change :cnpj, :string, null: false
      t.change :address, :string, null: false
      t.change :phone, :string, null: false
      t.change :whatsapp, :string, null: false
    end
  end
end
