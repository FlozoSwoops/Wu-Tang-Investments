class CreatePortfolios < ActiveRecord::Migration[5.1]
  def change
    create_table :portfolios do |t|
      t.string :name
      t.integer :value
      t.string :risk

      t.timestamps
    end
  end
end
