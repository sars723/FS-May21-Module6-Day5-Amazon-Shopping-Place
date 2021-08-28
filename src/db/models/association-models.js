import Category from "./Category.js";
import Review from "./Review.js";
import Product from "./Product.js";
import Cart from "./Cart.js"
import User from "./User.js";



Product.belongsTo(Category,{
    onDelete:"cascade",
    foreignKey:{allowNull:false}
})
Category.hasMany(Product,{
    onDelete:"cascade",
    foreignKey:{allowNull:false}
})

Review.belongsTo(Product,{
    onDelete:"cascade",
    foreignKey:{allowNull:false}
})
Product.hasMany(Review,{
    onDelete:"cascade",
    foreignKey:{allowNull:false}
})



User.hasMany(Review,{
    onDelete:"cascade",
    foreignKey:{allowNull:false}
})
Review.belongsTo(User,{
    onDelete:"cascade",
    foreignKey:{allowNull:false}
})

Product.hasMany(Cart)
Cart.belongsTo(Product)

User.hasMany(Cart)
Cart.belongsTo(User)


export default {Category,Review,Product,Cart,User}