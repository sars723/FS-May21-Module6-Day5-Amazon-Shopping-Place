import sequelize from "../dbConnection.js";
import s from "sequelize"

const {DataTypes}=s

const Cart=sequelize.define("Cart",{
id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
}
})

export default Cart