class Product < ApplicationRecord
    enum category: {
        Console: 0,
        Game: 1
    }
    has_many :discount # Int he future we can implement region based discounts
end
