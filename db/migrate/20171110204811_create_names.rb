class CreateInvestors < ActiveRecord::Migration[5.1]
  def change
    create_table :investors do |t|
      t.string :name
      t.string :username
      t.string :occupation
      t.integer :income
      

      t.timestamps
    end
  end
end
