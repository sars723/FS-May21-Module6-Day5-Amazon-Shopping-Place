import s from "sequelize"
import sequelize from "../dbConnection.js"
const {DataTypes}=s

const Category=sequelize.define("category",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    }
})
export default Category