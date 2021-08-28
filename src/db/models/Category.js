import s from "sequelize"
import sequelize from "../dbConnection.js"
const {DataTypes}=s

const Category=sequelize.define("category",{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
})
export default Category