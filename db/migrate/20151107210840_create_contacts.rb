class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :phone_number
      t.references :user, index: true

      t.timestamps null: false
    end
  end
end
