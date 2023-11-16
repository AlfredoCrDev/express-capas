# Backend / Servidor Por Capas

### ☑️ Dependencias:

- Node.js    
- Express.js  
  - express-flash  
  - express-handlebars  
  - express-session  
- Session-file-store  
- Mongoose  
  - mongoose-paginate-v2  
  - connect-mongo  
- Cookie-parser  
- Bcrypt  
- Passport  
  - passport-local  
  - passport-github2  


### 💻 Instalación:  

1. Clonar el repositorio: 
```shell
git clone https://github.com/AlfredoCrDev/express-capas
```
2. Posicionarte en el directorio del proyecto.

```shell
cd /express-capas
```
3. Instalación de todas las dependencias con:
```shell
npm install
```

### ▶️ Uso
Para ejecutar la aplicación utiliza:
```shell
npm start 
```


### 🌐 Servidor:

✅    Se levanta el servidor con *Express js*.

Aplicacion debe abrirse en el puerto: 

#### `http://localhost:8080`

### 🔀 Rutas:

📍   **Consulta Productos:** 

- ⚠️ GET `/products`: Obtiene la lista de productos (requiere iniciar sesión).
- ⚠️ GET `/api/products`: Obtiene la lista de productos.
  - ⚠️ GET PRODUCT BY ID: `/api/product/:idProduct`: Obtiene un producto por su ID.
- 📥 POST `/api/products`: Agrega un nuevo producto.
- 🔃 PUT `/api/product/:idProduct` Actualiza un producto existente por su ID.
- ❌ DELETE `/api/product/:idProduct`: Elimina un producto indicandole su ID.

📍   **Consulta Carritos:** 

- ⚠️ GET `/api/carts`: Obtiene la lista de carritos creados.
  - ⚠️ GET CART BY ID`/api/carts/:idCart`: Obtiene un carrito por su ID.
- 📥 POST `/api/cart`: Agrega un nuevo carrito.
  - 📥 POST PRODUCT IN CART `/api/cart/:idCart/product/:idProduct`: Agrega un nuevo producto a determinado carrito.
- 🔃 PUT `/api/cart/:idCart` Actualiza un carrito existente por su ID (hay que enviarle un prodcuto por body).
  - 🔃 PUT QUANTITY PRODUCT `/api/cart/:idCart/product/:idProduct` Actualiza la cantidad de un producto contenido en un carrito determinado
- ❌ DELETE `/api/cart/:idCart`: Elimina un carrito indicandole su ID.
  - ❌ DELETE PRODUCT IN CART `/api/cart/:idCart/products/:idProduct`: Elimina un producto de un carrito, indicandole su ID.

📖   **Lista de productos con HBS** 

- 📦 LISTADO DE PRODUCTOS ESTATICO `http://localhost:8080/listadoproductoshb`
- 📦🔁 LISTADO DE PRODUCTOS DINÁMICOS, PERMITE AGREGAR Y ELIMINAR PRODUCTOS MEDIANTE FORMULARIO `http://localhost:8080/realtimeproducts`

🔎   **Login de la aplicacion** 

- 🔒 INICIO DE SESION `http://localhost:8080`
- 👤 REGISTRO DE USUARIO `http://localhost:8080/register`
- :octocat: SE AGREGA FUNCIONALIDAD DE INICIAR SESION (REGISTRO) MEDIANTE CUENTA DE GITHUB `http://localhost:8080` mediante estrategias de passport


### ⚙️ Funciones & Características:

✅    **ProductMaganerMDB:**  La instancia  cuenta con un las 4 operaciones básicas CRUD que se pueden realizar en el sistema de gestion de datos.

- ➕ **addProduct:** Agregar un producto en el método POST, asignando un id de forma de que no se repita. Los productos tienen la siguiente estructura: 

```
{
    "title": "Producto 1",
    "description": "Descripción del Producto 1",
    "code": "P001",
    "price": 19.99,
    "status": true,
    "stock": 50,
    "category": "Electrónica",
    "thumbnails": [
      "imagen1.jpg",
      "imagen2.jpg"
    ]
  }
```
- **getProducts:** Permite visualizar con el método GET de http, los productos agregados previamente.
También se cuenta con un método para visualizar un producto con su respectivo id: **getProductById**

- 🔁 **updateProduct:** Actualiza un producto que ya este agregado previamente, recibe como parametro el id del mismo. 

- ❌ **deleteProduct:** También, recibiendo un id como parametro, se elimina un producto. 

✅    **CartMaganerMDB:**  De igual forma que el ProductManager, maneja la misma interacción con los datos.

-  ➕ 🛒 **addNewCart:** Crear un carrito con un id generado automaticamente y no repetible; y con un arreglo donde se agregaran los productos existentes en la base de datos. 

-  ▶️ 🛒  **getCarts:** Se consultan los carritos creados. 

-  📦 ➕ 🛒 **addProductCartById:** Teniendo en cuenta el id del carrito seleccionado, se adiciona un producto por su ID, de los ya existente. 
-  🔃 📈 🛒 **updateCartItemQuantity** Actualiza la cantidad de un producto en un carrito determinado por su ID.
-  🛒 ❌ 📦 **deleteAllProductsFromCart** Elimina rodos los productos que estan dentro del carrito


## 🔐 Licencia

Este proyecto está licenciado bajo la Licencia MIT. 


## 📱 Tegnologías

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)]()

[![Node.JS](https://img.shields.io/badge/Node.JS-339933?style=for-the-badge&logo=node.js&logoColor=white&labelColor=101010)]()

[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white&labelColor=101010)]()
