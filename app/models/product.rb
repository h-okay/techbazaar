class Product < ApplicationRecord
    enum category: {
        console: 0,
        game: 1
    }
    has_many :discount # Int he future we can implement region based discounts
end
