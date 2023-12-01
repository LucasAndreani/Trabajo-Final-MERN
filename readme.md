Este proyecto es un sistema CRUD (Crear, Leer, Actualizar, Borrar) desarrollado para MERN (MongoDB, Express, React, Node.js) stack. La aplicación permite gestionar una lista de productos, en este caso, pokemones. Los usuarios pueden agregar nuevos pokemones, actualizar información existente y eliminar productos. Además, se implemento un sistema de autenticación de usuarios con la posibilidad de crear tanto usuarios normales como administradores.

Tecnologías Utilizadas
MongoDB
Express
React
Node.js

Librerías Utilizadas

Frontend
react-router-dom

Backend
mongoose
express
node
bcrypt
multer

Funcionalidades Principales
Listado de Pokemones: Visualización de una lista de pokemones existentes.

Agregar Pokemon: Capacidad para añadir nuevos pokemones a la lista, con upload de imagenes incluido.

Actualizar Información: Posibilidad de modificar los datos de un pokemon existente.

Eliminar Pokemon: Función para eliminar un pokemon de la lista.

Registro de Usuarios: Sección para la creación de usuarios con la opción de elegir entre un usuario normal o un administrador.

Aclaraciones

La productcard esta diseñada para recibir thumbnails en formato .png. Los archivos .jpg o imagenes con fondo pueden interferir con el diseño de interfaz.

La creación de usuarios está pensada para que en un futuro se pueda acceder a distintas funcionalidades dependiento del rol del usuario. La contraseña de Admin esta establecida en el .env como ¨1234¨.