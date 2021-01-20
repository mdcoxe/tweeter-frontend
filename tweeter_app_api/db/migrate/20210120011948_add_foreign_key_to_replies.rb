class AddForeignKeyToReplies < ActiveRecord::Migration[6.1]
  def change
    add_column :replies, :tweet_id, :integer
  end
end
