class CreateCompanies < ActiveRecord::Migration[7.2]
  def change
    create_table :companies do |t|
      t.string :company_name
      t.string :cnpj
      t.string :address
      t.string :phone
      t.string :whatsapp

      t.timestamps
    end
  end
end
