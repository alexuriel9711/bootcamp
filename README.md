# bootcamp
 
ProductWeb

Proyecto final del bootcamp de Desarrollador Web Full Stack. Es el backend de una aplicación de productos, dividido en dos APIs REST independientes: una para gestionar usuarios y otra para gestionar productos.

Tecnologías
Área	Herramientas
Servidor	Node.js, Express
Base de datos	MongoDB con Mongoose
Autenticación	JSON Web Token (jsonwebtoken)
Documentación	OpenAPI 3.0 (Swagger)
Otros	CORS, Morgan (logs), cookie-parser
Estructura
productWeb/
├── backend/            API de usuarios
│   ├── api/            Documentación OpenAPI
│   ├── config/         Conexión a MongoDB
│   ├── middlewares/    Validación del token JWT
│   ├── models/         Modelo de usuario
│   ├── routes/         Rutas (endpoints)
│   └── services/       Lógica de negocio
├── backendProducts/    API de productos (misma estructura)
└── data/               Datos de prueba en JSON (usuarios y productos)

Cada API separa las responsabilidades en capas: las rutas reciben la petición, los servicios aplican la lógica y los modelos definen la estructura de los datos.

Funcionalidades
CRUD completo de usuarios y de productos.
Inicio de sesión que genera un token JWT con vigencia de 120 minutos.
Middleware que valida el token antes de acceder a las rutas protegidas.
Borrado lógico (soft delete): al eliminar, el registro no se borra, sino que su campo status pasa a false.
Validación de duplicados: no permite crear dos usuarios con el mismo correo ni dos productos con el mismo nombre.
Rutas versionadas bajo /api/v1.
Endpoints
API de usuarios (/api/v1/users)
Método	Ruta	Descripción	Requiere token
POST	/create	Crear usuario	No
POST	/authenticate	Iniciar sesión y obtener token	No
GET	/	Listar usuarios	Sí
GET	/:email/detail	Consultar usuario por correo	Sí
PUT	/:email/update	Actualizar usuario	Sí
DELETE	/:email/delete	Eliminar usuario (borrado lógico)	Sí
API de productos (/api/v1/products)
Método	Ruta	Descripción
GET	/	Listar productos
POST	/create	Crear producto
GET	/:name	Consultar producto por nombre
PUT	/:name/update	Actualizar producto
DELETE	/:name/delete	Eliminar producto (borrado lógico)
Códigos de respuesta

200 éxito · 201 creado · 204 eliminado · 400 credenciales incorrectas · 401 token inválido · 404 no encontrado · 409 registro duplicado

Cómo ejecutarlo

Requisitos: Node.js y MongoDB instalado localmente (puerto 27017).

Clonar el repositorio:
bash
   git clone https://github.com/alexuriel9711/bootcamp.git
   cd bootcamp/productWeb
Instalar dependencias e iniciar la API de usuarios:
bash
   cd backend
   npm install
   npm start
En otra terminal, hacer lo mismo con la API de productos:
bash
   cd backendProducts
   npm install
   npm start
(Opcional) Cargar los datos de prueba en la base de datos mongobootcamp:
bash
   mongoimport --db mongobootcamp --collection users --file data/users.json --jsonArray
   mongoimport --db mongobootcamp --collection products --file data/products.json --jsonArray

Según la documentación OpenAPI, la API de usuarios corre en http://localhost:3001/api/v1 y la de productos en http://localhost:3002/api/v1.

Para ver la documentación, se puede abrir el archivo api/openAPI-1.1.6.yaml de cada API en Swagger Editor.

Mejoras planeadas
Cifrar las contraseñas con bcrypt.
Mover la clave secreta del token a variables de entorno (.env).
Proteger con token las rutas de creación, edición y eliminación de productos.
Cambiar price y quantity a tipo numérico.
Conectar el formulario de registro del frontend con la API de usuarios.
Autor

Harry Alexander Gómez Zamudio
