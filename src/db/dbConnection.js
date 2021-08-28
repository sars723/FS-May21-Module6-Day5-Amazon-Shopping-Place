import { Sequelize } from "sequelize";

const { PGDATABASE, PGUSERNAME, PGPASSWORD, PGHOST, PGPORT } = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSERNAME, PGPASSWORD, {
    host: PGHOST,
    port: PGPORT,
    dialect: "postgres",
  });

export const syncSequelize=async()=>{
    try {
        await sequelize.authenticate()
        await sequelize.sync({alter:true})
        console.log("connection has been established successfully")
    } catch (error) {
       console.log("Server is crashed due to",error) 
    }
}
export default sequelize