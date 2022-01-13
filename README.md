# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## About Project

Se trata de una tienda ecommerce para el proyecto del curso de REACT de CODER HOUSE.
En este caso, es la tienda virtual de CURIOUS RABBIT, marca que vende cuadernos, vinilos, posters, y otros productos de diseño de series, películos y dibujos animados.

It is a ecommerse site that i realized for React Course`s Project in Coder House.
In this case, it`s the store from Curious rabbit, a brand of notebooks, vinils, posters, and other products with originals designs about tv shows, movies, and cartoons.

## About me

Soy Ma. Eugenia Couto, Diseñadora Gráfica Multimedial Sr recibida en la Universidad de Morón ("han pasado 84 años"), lugar donde vivo. Actualmente soy Digital Designer en Balanz Capital, dentro del equipo de producto, y desempeño tareas de UX UI.
Pueden conocer más sobre mis trabajos acá: https://www.behance.net/MECdesign
Perfil profesional: https://www.linkedin.com/in/mar%C3%ADa-eugenia-couto/

My name is Ma. Eugenia, I am Multimedial Graphic Designer and I got my degree in the University of Morón in 2014 and I live in Moron. Now a days, I am Digital Designer in Balanz Chapital into team`s product, and I make task of UX UI design.

You can know more about my jobs here:https://www.behance.net/MECdesign
Follow me in my profesional network here: https://www.linkedin.com/in/mar%C3%ADa-eugenia-couto/


## Vamos al código del proyecto! (More about the code of my project)
1) Es importante instalar react desde la consola para poder visualizar el proyecto. Yo uso Git bash en mi terminal (también lo descargué e instale) por un tema de orden a la hora de trabajar, y porque me resultan mejores los comandos que posee para subir mis avances al repo.

Mi repo de git hub lo encuentran branch por branch acá:
link

2) Para poder navegar directamente y emplear el useNavigator, es necesario instalar:
npm install history@5 react-router-dom@6 .  Por lo tanto para poder ver este routeo debe instalarse dicha versión también.

3) Ingresando el comando "NPM START" desde la consola del proyecto, podés cargar la APP al navegador, la misma se visualizará en esté link: http://localhost:3000 y todos los cambios que se suban se actualizarán en el mismo.

4) Es importante tener en cuenta que existe un archivo que linkea de forma segura toda la información cargada en FIREBASE, llamado ".env" , el cual no encontrarán por temas de seguridad.

## Archivo env
Contiene toda la informaciòn del js firebase de tal manera que no puedan emplear mi base de datos.

REACT_APP_apiKey=AIzaSyBQvinc5fvs2dXjUEvDKNed9P86R03YWxs
REACT_APP_authDomain=authDomain:cursoreact-tiendacr.firebaseapp.com
REACT_APP_projectId= cursoreact-tiendacr
REACT_APP_storageBucket=cursoreact-tiendacr.appspot.com
REACT_APP_messagingSenderId=639947275206
REACT_APP_appId=1:639947275206:web:a672903311d19c8d7290c7

## Navegación del Proyecto (Navegation into de project)

En la pantalla principal de mi tienda vamos a encontrar toda la lista de productos disponibles con una breve descripción de los mismos. Desde el NAV se visualizan todos los productos y el carrito, y por un tema de UX se decidió que el filtro de categorías figurará en un sub menú para podes discriminar rápidamente entre VINILOS o CUADERNOS. 

Al clickear en VER MÁS, pueden acceder al detalle del producto y agregarlo al carrito. Además una vez agregado podes confirmar la compra para ser redirigido/a al carrito donde se termina de finalizar la misma, o podés eliminar items o cancelarla.

Una vez finalizada se genera una orden de compra y queda pendiente ultimar detalles de pago y envío a través del mail con el/la comprador/a.

Ingresá acá para ver la navegación en un breve video:
LINK


