import sequelize from "../dbConnection.js";
import s from "sequelize"

const {DataTypes}=s

const Review=sequelize.define("review",{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER,
    },
    comment:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    rate:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
})

export default Review