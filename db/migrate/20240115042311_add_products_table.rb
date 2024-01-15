class AddProductsTable < ActiveRecord::Migration[7.1]
  def change
    create_table :products, id: :uuid do |t|
      t.string :name, null: false
      t.integer :quantity, null:false
      t.float :price, null:false
      t.integer :category, null:false, default: 0
      
      # created_at & updated_at
      t.timestamps
    end
  end
end
