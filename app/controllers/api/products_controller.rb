module Api
    class ProductsController < ApplicationController
        def index
            products = Product.all.map do |product|
                {
                    name: product.name,
                    quantity: product.quantity,
                    price: product.price,
                    category: product.category,
                    discount: get_discount_amount(product)

                }
            end
            render(json: { products: products })
        end

        def has_active_discount?(product)
            actives = product.discount.select { |discount| discount.active? }
            actives.length > 0
        end 

        def get_discount_amount(product)
            if has_active_discount?(product)
                product.discount.order("created_at").last.amount
            end
        end

    end
end
