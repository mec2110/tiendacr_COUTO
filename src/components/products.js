
//Listado de items


const products = [
    { id:"1", name:"Vinilo Hp", category:"vinilo",  price: 500,img:"https://d22fxaf9t8d39k.cloudfront.net/9917bde946b82f5d94cd4593a3864e6a2d383e032bd13203fc09db0c3ad8a7f243531.jpeg", description: "Vinilo Harry Potter 1m. Disponible en negro, rojo y azul. Listo para colocar.",},
    { id:"2", name:"Vinilo St", category:"vinilo",price: 500,img:"https://d22fxaf9t8d39k.cloudfront.net/78c87ea9bc6f832808e2cf04a0b302abdf09b22138b16a10ea3914c19ad6de5743531.jpeg"},
    { id:"3", name:"Vinilo Dbz",category:"vinilo", price: 500,img:"https://d22fxaf9t8d39k.cloudfront.net/49313c7a44e88d6b43dcbefcdb55b65b6d839a87fedcfb6d146f83270de81b0943531.jpeg"},
  ]
  
const categories = [
    {id:"vinilo1", description: "Vinilo Harry Potter 1m. Disponible en negro, rojo y azul. Listo para colocar."},
    {id:"vinilo2", description: "Vinilo Stranger Things 1m.  Disponible en negro, rojo y azul. Listo para colocar."},
    {id:"vinilo3", description: "Vinilo Dragon ball Z 1m.  Disponible en negro, rojo y azul. Listo para colocar."}
]

export const getCategories =() =>{
   return new Promise((resolve,reject) => {
        setTimeout (() => {
            resolve (categories)
       },1000)
   })
 }

export const getProducts =() =>{
    return new Promise((resolve,reject) => {
        setTimeout (() => {
            resolve (products)
        },2000)
    })
 }

 export const getItem =() =>{
    return new Promise((resolve,reject) => {
        setTimeout (() => {
            resolve (products[0])
        },2000)
    })
 }
