class CreateTweets < ActiveRecord::Migration[6.1]
  def change
    create_table :tweets do |t|
      t.string :title
      t.text :content
      t.string :author

      t.timestamps
    end
  end
end
