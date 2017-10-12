class Medium < ApplicationRecord
  enum category: { film: 0, television: 1, book: 2, game: 3 }

  validates_presence_of :name
  validates_uniqueness_of :name
end
