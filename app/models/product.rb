class Product < ApplicationRecord
    enum category: {
        console: 0,
        game: 1
    }
    has_one :discount
end
