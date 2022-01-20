## About Project 🚀

Se trata de una tienda ecommerce para el proyecto del curso de REACT de CODER HOUSE.
En este caso, es la tienda virtual de CURIOUS RABBIT, marca que vende cuadernos, vinilos, posters, y otros productos de diseño de series, películos y dibujos animados.

La interfaz fue realizada con REACTJS-CREATE REACT APP, permitiendo realizar compra de productos, cuya orden se alamacena en firebase.

🇺🇸 It is a ecommerce site that i realized for React Course's Project in Coder House.
In this case, it's the store from Curious rabbit, a brand of notebooks, vinils, posters, and other products with originals designs about tv shows, movies, and cartoons.

The interfaz had been made with REACT JS CREATE REACT APP, and it allow to do a buy, and their buy order is saved at firebase.

## About me 🙋‍♀️

Soy María Eugenia Couto, Diseñadora Gráfica Multimedial Sr. recibida en la Universidad de Morón en el 2014, lugar donde vivo. Actualmente soy Digital Designer en Balanz Capital, dentro del equipo de producto, y desempeño tareas de UX UI.

🔸Pueden conocer más sobre mis trabajos acá:[Behance](https://www.behance.net/MECdesign).

🔸Perfil profesional: [LinkedIN](https://www.linkedin.com/in/mar%C3%ADa-eugenia-couto/).

🇺🇸 My name is María Eugenia Couto. I am Multimedial Graphic Designer and I got my degree in the University of Morón in 2014 and I live in Moron. Now a days, I am Digital Designer in Balanz Chapital into team`s product, and I make task of UX UI design.

🔸You can know more about my jobs here:[Behance](https://www.behance.net/MECdesign).

🔸Follow me in my profesional network here: [LinkedIN](https://www.linkedin.com/in/mar%C3%ADa-eugenia-couto/).


## Before to start you need... 🔧

Una vez clonado o descargado el proyecto, es necesario realizar primero algunas instalaciones.

1) Debemos instalar en nuestro equipo:
   
   📌Node js:[Instalar última versión de Node](https://nodejs.org/en/).

2) Luego debemos instalar react desde la consola de VISUAL STUDIO CODE para poder visualizar el proyecto. Pero primero, debemos ejecutar las siguientes instrucciones o comandos:

✅node --version.- Verificamos la instalación

✅npm --version.- Verificamos que se haya instalado correctamente el gestor de dependencias de Javascript

✅ Una vez chequeado, para instalar dependencias ejecutamos: npm install.

✅npm start.- Finalmente iniciamos la compilación del proyecto para visualizarlo en un navegador web.


⚠IMPORTANTE⚠ Si es la primera vez que incursionas REACT y no sabés qué es un REPO, GIT, etc...Te recomiento que instales GIT y uses en tu terminal de VISUAL STUDIO la extesnión GIT BASH, para poder implementar los mismos comandos y trabajar más prolijo.

Lo pueden descargar e instalar [siguiendo estos pasos acá](https://www.stanleyulili.com/git/how-to-install-git-bash-on-windows/).

🔗 Pueden clonar y descargar mi repo [acá](https://github.com/mec2110/tiendacr_COUTO/tree/TrabajoFInal-MaEugeniaCouto).


3) Otras tecnologías y librerías que debés instalar y considerar son:

  a. REACT ROUTER DOM desde consola a través del comando:
  npm install history@5 react-router-dom@6 .
  Es indispensable está versión para ver el routeo realizado y que funcione UseNavigate.

  b. Font Awesome para REACT como indica [acá](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react).
  
  c. Backend con FIREBASE.

  d. Estilos con Bootstrap.

🇺🇸 You need to install..
1) We need to install in our computer the last version of [NODE JS](https://nodejs.org/en/).

2) You have to installa react at the terminal.
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

⚠IMPORTANT⚠ Is it your firts time with react and git? Well, so you need to install [GIT](https://www.stanleyulili.com/git/how-to-install-git-bash-on-windows/).

🔗 You could clone and download my repositry [here](https://github.com/mec2110/tiendacr_COUTO/tree/TrabajoFInal-MaEugeniaCouto).

3) Other things to install are:

  a.REACT ROUTER DOM from the terminal:
  npm install history@5 react-router-dom@6 . 
  It is very importamt to see and use commands from this version of routs.


  b.Font Awesome for REACT [here](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react).
  c.Firebase (you need an account).
  d.Bootstrap for css style.


## More about my project🖥

📌 Ingresando el comando "NPM START" desde la consola del proyecto, podés cargar la APP al navegador, la misma se visualizará en esté link: http://localhost:3000 y todos los cambios que se realicen se actualizarán en el mismo.

📌 Es importante tener en cuenta que existe un archivo que linkea de forma segura toda la información cargada en FIREBASE, llamado ".env" , el cual no encontrarán por temas de seguridad.

Contiene toda la información del js firebase de tal manera que no puedan emplear mi base de datos.
⚠ Para esté proyecto generé un archivo: .env.example

🇺🇸 You can see the project in the browser with NPM START

📌Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

📌There are a file who conected the information in firebase with the project called ".env" but for security reasons you cant see them into the repository.

⚠ Only for this project, this information is in ".env.example"

## Navegación del Proyecto (Navegation into de project)📦

En la pantalla principal de mi tienda vamos a encontrar toda la lista de productos disponibles con una breve descripción de los mismos. Desde el NAV se visualizan todos los productos y el carrito, y por un tema de UX se decidió que el filtro de categorías pudiera discriminar rápidamente entre VINILOS o CUADERNOS. 

Al clickear en VER MÁS, pueden acceder al detalle del producto y agregarlo al carrito. Además una vez agregado podes confirmar la compra para ser redirigido/a al carrito donde se termina de finalizar la misma, o podés eliminar items o cancelarla.

Una vez finalizada se genera una orden de compra y en Firebase se almacena la orden de compra de productos que compró la persona usuario, quedando pendiente ultimar detalles de pago y envío a través del mail con el/la comprador/a.

Ingresá acá para ver la navegación en un breve video:
[LINK](https://drive.google.com/drive/folders/1uL8HhQrcROP5fDtYNPyn_QsCwS_D_lPq?usp=sharing)

🇺🇸 In the index you can find all the products availables with a short description. You can use de menu in the nav to filter between notebooks or vinils.

When you choose a product, you can click in "see more" and enter in the product'detail where you can get a long description about it and the stock available now. Here you can "add to cart" and "confirm" to buy. After that, you will navigate to the cart where you can see yours products, the quantity and the total price. In the cart section you can end the buy but before, you have to fill a short form with information to contact you for more details. The order will be generate in Firebase.

You can see the navigation here:
[LINK](https://drive.google.com/drive/folders/1uL8HhQrcROP5fDtYNPyn_QsCwS_D_lPq?usp=sharing)

![Navigation][navegacion]

[navegacion]: /public/gif/presentacion.gif "Navegación"

## Contact 📪

En caso de dudas o sugerencias sobre el proyecto pueden escribirme a:

 mecdesign.dg@gmail.com

🇺🇸 In case of doubts or advices yo can write me to:

mecdesign.dg@gmail.com
