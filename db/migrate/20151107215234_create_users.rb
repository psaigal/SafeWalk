class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :email, uniqueness: true
      t.string :password_digest
      t.string :longitude
      t.string :latitude

      t.timestamps null: false
    end
  end
end
