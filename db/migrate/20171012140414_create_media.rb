class CreateMedia < ActiveRecord::Migration[5.1]
  def change
    create_table :media do |t|
      t.string :name, null: false
      t.integer :year
      t.integer :category, default: 0, null: false

      t.timestamps
    end
    add_index :media, :name, unique: true
  end
end
