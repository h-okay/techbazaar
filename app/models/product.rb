class Product < ApplicationRecord
    enum category: {
        console: 0,
        game: 1
    }
end
