class CreateReplies < ActiveRecord::Migration[6.1]
  def change
    create_table :replies do |t|
      t.text :content
      t.string :author

      t.timestamps
    end
  end
end
