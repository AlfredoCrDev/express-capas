const express = require("express");
const app = express();
const config = require("./config/config.js");

const { default: mongoose } = require("mongoose");

// Flash para utilizar la funcion req.flash en las rutas (tiene middleware)
const flash = require("express-flash");

// Rutas
const productsRouter = require("./routes/products.router");
const cartsRouter = require("./routes/carts.router");
const handlebars = require("express-handlebars");
const usersRouter = require("./routes/users.router")

// Websockect
const path = require("path");

// ManagerFile
const ProductManager = require("./Dao/productManagerMDB");
const productManager = new ProductManager();

// Session - File Storage - Cookie parser
const cookieParser = require("cookie-parser");
const session = require("express-session");
const FileStorage = require("session-file-store");
const MongoStore = require("connect-mongo");

// Passport
const passport = require("passport")
const initializaPassport = require("./config/passport.config");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Configuracion handlebars
app.engine("handlebars", handlebars.engine());
//Carpeta de la vista
app.set("views", __dirname + "/views");
//Establecer handlebars como motor de plantilla
app.set("view engine", "handlebars");
//Archivos dentro de la carpeta public
app.use(express.static(path.join(__dirname, "public")));

//Endpoint hbs
app.get("/realtimeproducts", async (req, res) => {
  try {
    const productos = await productManager.getProducts();
    res.render("realTimeProducts", { 
      productos,
      title: "Productos Tiempo Real"
    });
  } catch (error) {
    console.error(
      "Error al cargar la vista de productos en tiempo real",
      error
    );
    res
      .status(500)
      .send("Error al cargar la vista de productos en tiempo real");
  }
});

//Configurando session con MongoDB y MongoAtlas
app.use(cookieParser())
app.use(session({
  store:MongoStore.create({
    mongoUrl: config.mongoUrl,
    mongoOptions:{useNewUrlParser: true, useUnifiedTopology: true},
    ttl: 150
  }),
  secret: config.sessionSecret,
  resave: true,
  saveUninitialized: true
}))

// Middleware para usar Flash y enviar mensajes con la funcion req.flash
app.use(flash());

// Inicializamos passport
initializaPassport()
app.use(passport.initialize())
app.use(passport.session())

app.use("/", productsRouter);
app.use("/", cartsRouter);
app.use("/", usersRouter)

app.listen(config.port, () => {
  console.log(`Servidor corriendo en el Puerto ${config.port}`);
});

mongoose
  .connect(config.mongoUrl)
  .then(() => {
    console.log("Conectado a la Base de Datos");
  })
  .catch((error) => {
    console.log(
      "Hubo un Error al tratar de conectarse a la Base de Datos",
      error
    );
  });