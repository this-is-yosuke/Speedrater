import Category from './category'
import Product from './product'
import User from './user'

export default class Review {
    constructor(
        public id = 0,
        public category = Category,
        public product = Product,
        public rating = 0,
        public critique = '',
        public reviewer = User,
        public reviewDate = ''
    ) {}
}