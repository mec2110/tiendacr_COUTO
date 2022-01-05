
const products = [
    { id:"1", name:"Vinilo Harry Potter", category:"vinilo",  price: 500,img:"https://d22fxaf9t8d39k.cloudfront.net/9917bde946b82f5d94cd4593a3864e6a2d383e032bd13203fc09db0c3ad8a7f243531.jpeg", description: "Vinilo Harry Potter 1m. Disponible en negro, rojo y azul. Listo para colocar.",stock:"10",},
    { id:"2", name:"Vinilo Stranger Things", category:"vinilo",price: 500,img:"https://d22fxaf9t8d39k.cloudfront.net/78c87ea9bc6f832808e2cf04a0b302abdf09b22138b16a10ea3914c19ad6de5743531.jpeg",description: "Vinilo Stranger Things 1m.  Disponible en negro, rojo y azul. Listo para colocar.",stock:"2",},
    { id:"3", name:"Vinilo Dragon Ball Z",category:"vinilo", price: 500,img:"https://d22fxaf9t8d39k.cloudfront.net/49313c7a44e88d6b43dcbefcdb55b65b6d839a87fedcfb6d146f83270de81b0943531.jpeg", description:"Vinilo Dragon ball Z 1m.  Disponible en negro, rojo y azul. Listo para colocar.",stock:"5",},
    { id:"4", name:"Vinilo Spiderman", category:"vinilo",  price: 500,img:"https://d22fxaf9t8d39k.cloudfront.net/37378f32d210b1e51cb9133c654d42c9dcc9ce6f5f365250f9798b795e10bb6e43531.jpeg",description:"Vinilo Spiderman 1m.  Disponible en negro, rojo y azul. Listo para colocar.",stock:"10",},
    { id:"5", name:"Vinilo Shinjeki No Kuojin", category:"vinilo",price: 500,img:"https://d22fxaf9t8d39k.cloudfront.net/59e75e19b4aacc5980972b5d542a3a77c77629401a8963ba1e0da36c26ca03c043531.jpeg", description:"Vinilo Dragon ball Z 1m.  Disponible en negro, rojo y azul. Listo para colocar.",stock:"8",},
  
    { id:"6", name:"Vinilo Alicia",category:"vinilo", price: 500,img:"https://d22fxaf9t8d39k.cloudfront.net/d4b1dba3fbe8a8b4d7c777a3bed6b6a33b4d8ff5d2553fce4867a995ec9d277843531.jpeg",description:"Vinilo Dragon ball Z 1m.  Disponible en negro, rojo y azul. Listo para colocar.",stock:"10",},
    { id:"7", name:"Cuaderno HP Niffler",category:"cuaderno", price: 350,img:"https://d22fxaf9t8d39k.cloudfront.net/c9e216db5979d48c61b5afd5b39777a1d83389c86ab4a4dd476092178d10763c43531.jpeg", description:"Cuaderno de tapa blanda en cartulina embase, 60 hojas lisas, rayadas o cuadriculadas. Tamaño a5 y anillado.",stock:"10",},
    { id:"8", name:"Cuaderno Dexter",category:"cuaderno", price: 350,img:"https://d22fxaf9t8d39k.cloudfront.net/eaca490ff43439675a8c81995dc0bd488c4593e4c75af8f4aa7837e6ac9a218c43531.jpeg", description:"Cuaderno de tapa blanda en cartulina embase, 60 hojas lisas, rayadas o cuadriculadas. Tamaño a5 y anillado.",stock:"10",},
    { id:"9", name:"Cuaderno Chewie",category:"cuaderno", price: 350,img:"https://d22fxaf9t8d39k.cloudfront.net/c7be945e816bfc934cb696712a87a5d318d633f8c7027e6a476404a1a8fcbacb43531.jpeg", description:"Cuaderno de tapa blanda en cartulina embase, 60 hojas lisas, rayadas o cuadriculadas. Tamaño a5 y anillado.",stock:"12",},
    { id:"10", name:"Cuaderno Mario Bross",category:"cuaderno", price: 350,img:"https://d22fxaf9t8d39k.cloudfront.net/2c10197552e31de93c8e50505e16b553604df8db96d9c308433b88078b305f6343531.jpeg", description:"Cuaderno de tapa blanda en cartulina embase, 60 hojas lisas, rayadas o cuadriculadas. Tamaño a5 y anillado.",stock:"3",},
    { id:"11", name:"Cuaderno Stitch",category:"cuaderno", price: 350,img:"https://d22fxaf9t8d39k.cloudfront.net/c0fdd45458eb167e4d7ec242f68c817bc025cc65e00420494cb2ee08483218b343531.jpeg", description:"Cuaderno de tapa blanda en cartulina embase, 60 hojas lisas, rayadas o cuadriculadas. Tamaño a5 y anillado.",stock:"6",},
    { id:"12", name:"Cuaderno Spiderman OMG",category:"cuadernos", price: 350,img:"https://d22fxaf9t8d39k.cloudfront.net/f524862b2d29ba9040b40e75c4d81ae4ab866786f3bb25f6c7f48d049da8908843531.jpeg" , description:"Cuaderno de tapa blanda en cartulina embase, 60 hojas lisas, rayadas o cuadriculadas. Tamaño a5 y anillado.",stock:"5",},
  ]
 
  
const categories = [
    {id:"vinilo", description: "Vinilo"},
    {id:"cuaderno", description: "Cuaderno"},
   
]

export const getCategories =() =>{
   return new Promise((resolve,reject) => {
        setTimeout (() => {
            resolve (categories)
       },1000)
   })
 }//me devuelve una categoria

 /*export const getCategoryById =(id) =>{
    return new Promise((resolve,reject) => {
        const category = categories.find(cat => parseInt(cat.id) === parseInt (id))
        setTimeout (() => {
            resolve (category)},1000)
    })
 } *///me devuelve el producto con el Id indicado

export const getProducts =(category) =>{
    return new Promise((resolve,reject) => {
        setTimeout (() => {
            category?resolve(products.filter(product => product.category === category)):resolve(products)
        },1000)
    })
 } //me devuelve el listado de productos filtrados por categorias

 export const getProductById =(id) =>{
    return new Promise((resolve,reject) => {
        const product = products.find(prod => parseInt(prod.id) === parseInt (id))
        setTimeout (() => {
            resolve (product)},1000)
    })
 } //me devuelve el producto con el Id indicado

 export const getItem =() =>{
    return new Promise((resolve,reject) => {
        setTimeout (() => {
            resolve (products[0])
        },2000)
    })
 } //me devuelve un solo item destacado
