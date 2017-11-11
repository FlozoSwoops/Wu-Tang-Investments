class CreatePortfolios < ActiveRecord::Migration[5.1]
  def change
    create_table :portfolios do |t|
      t.string :type
      t.integer :value
      t.string :risk
      t.references :investor, foreign_key: true
      

      t.timestamps
    end
  end
end
