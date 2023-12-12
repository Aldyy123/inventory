const {Order, Cart, Product, Location, User} = require('../models')
const response = require('../helpers/response')
class Controller {
    static async createCart(req, res, next) {
        try {
            const order = await Cart.create({
                UserId: req.params.id,
                ProductId: req.body.ProductId,
                quantity: req.body.quantity,
                uom: req.body.uom
            })
            return response.successResponse(res, order, 'Order created successfully')
        } catch (e) {
            next(e)
        }
    }

    static async getCardByUserId(req, res, next) {
        try {
            const carts = await Cart.findAll({
                where: {
                    UserId: req.params.id
                },
                include: [
                    {
                        model: Product,
                        as: 'product'
                    },
                    {
                        model: Location,
                        as: 'location'
                    },
                    {
                        model: User,
                        as: 'user'
                    }
                ]
            })
            return response.successResponse(res, carts, 'Cart fetched successfully')
        } catch (e) {
            next(e)
        }
    }

    static async updateCart(req, res, next) {
        try {
            const order = await Order.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            return response.successResponse(res, order, 'Order updated successfully')
        } catch (e) {
            next(e)
        }
    }
}

module.exports = Controller