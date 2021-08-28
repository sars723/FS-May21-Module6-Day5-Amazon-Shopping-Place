import sequelize from "../dbConnection.js";
import s from 'sequelize'

const DataTypes=s

const Product=sequelize.define("product",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    image:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    price:{
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false,
    }

})

export default Product