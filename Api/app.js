const express = require("express")
const cors = require("cors")

//IMPORTAR DATABASE
const {sequelize} = require("./Utils/database")

//ROUTERS
const { todosRouter }= require("./Routes/todos.routes")

//INICIALIZAR APP EN EXPRESS
const app = express();
app.use(express.json());

app.use(cors());
//ENDPOINTS
// http://localhost:4002/api/v1/todos
app.use('/api/v1/todos', todosRouter);

//Sequilize autenticador
sequelize
   .authenticate()
   .then(() => console.log("Database authenticated"))
   .catch(error => console.log(error))

//sequilize para sincronizar nuestros model(tablas)
sequelize
   .sync()
   .then(() => console.log("Database synced"))
   .catch(error => console.log(error))
   
   //app.use(cors());
//LISTEN 
app.listen(4002, () => {
	console.log('Express app running');
});