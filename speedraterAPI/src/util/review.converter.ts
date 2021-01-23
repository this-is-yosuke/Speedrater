import Review from '../models/review'
import { Category } from '../models/category'
import { Product } from '../models/product'
import User from '../models/user'

export function reviewConverter(row) {
    return new Review(row.reviewid,
        new Category(row.categoryid, row.categoryname),
        row.categoryid && new Product(row.productid, row.productname, row.company),
        row.rating, row.critique,
        row.userid && new User(row.userid, row.firstname, row.lastname, row.email, row.pass, row.roles),
        row.reviewdate)
}