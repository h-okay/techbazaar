class AddDiscountsTable < ActiveRecord::Migration[7.1]
  def change
    create_table :discounts, id: :uuid do |t|
      t.references :product, type: :uuid, index: true, foreign_key: true
      t.integer :amount, null:false, default: 0
      t.boolean :active?, null:false, default: false
    
      # created_at & updated_at
      t.timestamps
    end
  end
end
