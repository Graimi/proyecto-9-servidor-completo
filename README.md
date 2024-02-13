# Servidor completo

## PROYECTO 9: Servidor completo - EN PROCESO

Crear una API completa resiliente

### ENDPOINTS:

https://localhost:4001/api

Endpoints para los artefactos de ciencia ficción<br>

| HTTP Request | Endpoint            | Descripción                                    |
| ------------ | ------------------- | ---------------------------------------------- |
| GET          | /scifiartifacts     | Muestra todos los artefactos                   |
| GET          | /scifiartifacts/:id | Identifica un artefacto por su id y lo muestra |
| POST         | /scifiartifacts     | Crea un nuevo artefacto                        |
| PUT          | /scifiartifacts/:id | Edita un artefacto                             |
| DELETE       | /scifiartifacts/:id | Borra un artefacto                             |

Endpoints para las franquicias<br>

| HTTP Request | Endpoint        | Descripción                                      |
| ------------ | --------------- | ------------------------------------------------ |
| GET          | /franchises     | Muestra todas las franquicias                    |
| GET          | /franchises/:id | Identifica una franquicia por su id y la muestra |
| POST         | /franchises     | Crea una nueva franquicia                        |
| PUT          | /franchises/:id | Edita una franquicia                             |
| DELETE       | /franchises/:id | Borra una franquicia                             |

Endpoints para las relaciones<br>

| HTTP Request | Endpoint                     | Descripción                                                                                                                        |
| ------------ | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| GET          | /populated/scifiartifact/:id | Identifica un artefacto por su id y muestra las franquicias en las que aparece                                                     |
| GET          | /populated/franchise/:id     | Identifica una franquicia por su id y muestra los artefactos que aparecen en ella                                                  |
| PUT          | /populated/franchise/:id     | A partir del id de la franquicia se declaran en el body los artefactos con la que esta guarda relación mostrando el conjunto final |
| PUT          | /populated/scifiartifact/:id | A partir del id de un artefacto se editan los datos de su franquicia, mostrándolos posteriormente por pantalla                     |

Endpoints para los usuarios<br>

| HTTP Request | Endpoint               | Descripción                                                                       |
| ------------ | ---------------------- | --------------------------------------------------------------------------------- |
| POST         | /users/auth/register   | Registra y muestra un nuevo usuario                                               |
| POST         | /users/auth/login      | Comprueba si la contraseña es correcta, logea al usuario y genera un token válido |
| POST         | /users/auth/avatar/:id | Sube una imagen en la base de datos del usuario                                   |

### MODELOS:

Modelo para los artefactos de ciencia ficción

```jsx
const SciFiArtifacts = {
  _id: 'id del artefacto',
  name: 'Nombre del artefacto',
  description: 'Descripción del artefacto y sus características',
  type: 'Tipo de artefacto',
  powers: 'Poderes o funcionalidades especiales del artefacto',
  image: 'Imagen del artefacto',
  franchiseId: 'ID de la franquicia a la que pertenece',
};
```

Modelo para las franquicias

```jsx
const Franchises = {
  _id: 'id de la franquicia',
  name: 'Nombre de la franquicia',
  genre: 'Género de la franquicia',
  establishedYear: 'Año de establecimiento de la franquicia',
  artifacts: ['Array de ID de artefactos pertenecientes a la franquicia'],
};
```

Modelo para los usuarios

```jsx
const Franchises = {
  _id: 'id del usuario',
  user: 'Nombre del usuario',
  password: 'Contraseña del usuario',
  email: 'Email único del usuario',
  genre: 'Género del usuario',
  age: 'Edad del usuario',
  avatar: 'Imagen del usuario',
};
```

## Criterios de aceptación

<ul>

[✅] **El servidor y la base de datos deben estar desplegados**, no necesitamos que corran en ningún puerto en específico ya que debes proveernos de una URL para probar el servidor.<br>
[✅] Tendremos acceso al código en Github, asegúrate de no subir variables de entorno a la plataforma.<br>
[✅] Debes tener un modelo `User` que cuente con endpoints para: <br>

<ul>

- [✅] Un enpoint `/auth/register` que permita registrar un nuevo usuario.<br>
- [✅] El email no puede estar repetido.<br>
- [✅] La contraseña debe tener al menos 6 caracteres, una minúscula y una mayúscula.<br>
- [✅] Un endpoint `/auth/login` que permita logearse con un usuario ya registrado y devuelva un JWT. <br>
- [✅] El **JWT** debe tener una caducidad de una hora.<br>

</ul>

[✅] Deben existir dos modelos relacionados entre si, que cumplan por completo con los requerimientos del proyecto 8:<br>

<ul>

- [✅] Estos documentos deben poder leerse (endpoints de tipo GET) sin estar autenticado, debe ser pública la información. <br>
- [✅] Estos documentos solo podrán trabajarse (POST, PUT, DELETE) si el **usuario está autenticado.** En caso contrario, devolverán un status 401 y un mensaje adecuado.<br>

</ul>

[✅] La API debe estar limitada a 50 peticiones cada 3 minutos.<br>
[✅] Existirá un endpoint `/auth/avatar` de tipo POST que permita añadir un avatar a un usuario que obtendrás por medio de un JWT válido. De forma que el usuario que hace la petición pueda subir una imagen a través de Thunder Client y subirla a Cloudinary, editando su documento correspondiente en MongoDB.<br>
[✅] Existirá un endpoint para uno de los modelos relacionados entre si que permita, dada su id, subir una imagen para dicho documento en Cloudinary y edite el documento con un nuevo campo `image: 'url_de_la_imagen'`.<br>

</ul>

## Organización

<ul>
<li> [✅] General </li>
[✅] Desplegar el servidor<br>
[✅] Desplegar la base de datos<br>
[✅] Proteger las variables de entorno<br>

<li> [] README </li>
[✅] Añadir la correción de endpoitns del otro proyecto y actualizar el de la image<br>
[✅] Añadir los modelos correctos<br>
[] Revisar que es correcto<br>

<li> [✅] index → Almacenar archivos que actúan como puntos de entrada o partes del sistema</li>
[✅] Middleware declarado<br>
[✅] Middleware para errores declarado<br>
[✅] Puerto establecido <br>
[✅] Enlaces realizados<br>
[✅] API limitada a 50 peticiones cada 3 minutos<br>
[✅] Resto de protecciones a nuestro servidor<br>

<li> [] config → Archivos con configuraciones</li>
[✅] Configuración establecida con mongo atlas<br>
[✅] Si no funciona recuerda probar la otra ruta<br>
[✅] JWT caducidad 1 hora<br>
[✅] Código JWT aplicado<br>
[] password doc eliminar si no lo usamos<br>
[] password resolve<br>

<li> [✅] models → Modelos para representar la estructura de los datos</li>
[✅] Modelo artefactos<br>
[✅] Modelo franquicias<br>
[✅] Modelo users<br>
[✅] Patrón contraseña<br>

<li> [] repositories → Conjunto de funciones con las querys para traer la información</li>
[✅] GET all artifacts<br>
[✅] GET one artifacts<br>
[✅] POST artifacts<br>
[✅] PUT artifacts<br>
[✅] DELETE artifacts<br>
[✅] GET all franchises<br>
[✅] GET one franchises<br>
[✅] POST franchises<br>
[✅] PUT franchises<br>
[✅] DELETE franchises<br>
[✅] GET sciFiartifact and franchise related<br>
[✅] GET franchise and sciFiartifacts related<br>
[✅] PUT to change the franchise's sciFiartifact<br>
[✅] PUT to update SciFiArtifact's Franchise<br>
[] User repositories<br>
[] Enlaces realizados<br>

<li> [] controllers → Conjunto de funcionalidades</li>
[✅] GET all artifacts<br>
[✅] GET one artifacts<br>
[✅] POST artifacts<br>
[✅] PUT artifacts<br>
[✅] DELETE artifacts<br>
[✅] GET all franchises<br>
[✅] GET one franchises<br>
[✅] POST franchises<br>
[✅] PUT franchises<br>
[✅] DELETE franchises<br>
[✅] GET sciFiartifact and franchise related<br>
[✅] GET franchise and sciFiartifacts related<br>
[✅] PUT to change the franchise's sciFiartifact<br>
[✅] PUT to update SciFiArtifact's Franchise<br>
[] User controllers<br>
[] Quitar código comentado<br>
[] Enlaces realizados<br>

<li> [] middlewares </li>
[] authenticated middlewares<br>
[] Servidor 401 para el usuario no identificado<br>
[] uploadFile middlewares<br>
[] Enlaces realizados<br>

<li> [] routes → Enrutado de la aplicación</li>
[✅] index con el router scifiartifacts establecido<br>
[✅] index con el router franchises establecido<br>
[✅] index con el router populated establecido<br>
[✅] scifiartifacts endpoints declarados<br>
[✅] franchises endpoints declarados<br>
[✅] populated endpoints declarados<br>
[✅] /auth/register enpoint<br>
[✅] El email no puede estar repetido y la contraseña debe tener al menos 6 caracteres, una minúscula y una mayúscula<br>
[✅] /auth/login endpoint<br>
[] /auth/avatar endpoint<br>
[] endpoint para subir imagen<br>
[✅] Tipo GET públicos, resto solo con usuario logeado (entiendo que añadiendo antes login o auth)<br>
[] Enlaces realizados<br>
</ul>
