
//Listado de items


 const Items = [
            { id:"1",name:"Vinilo Hp", description: "Vinilo Harry Potter 1m x 1m color rojo",price: 500,img:"https://d22fxaf9t8d39k.cloudfront.net/9917bde946b82f5d94cd4593a3864e6a2d383e032bd13203fc09db0c3ad8a7f243531.jpeg"},
            { id:"2",name:"Vinilo St", description: "Vinilo Stranger Things 1m x 1m color negro",price: 500,img:"https://d22fxaf9t8d39k.cloudfront.net/78c87ea9bc6f832808e2cf04a0b302abdf09b22138b16a10ea3914c19ad6de5743531.jpeg"},
            { id:"3",name:"Vinilo Dbz", description: "Vinilo Dragon Ball Z 1m x 1m color negro",price: 500,img:"https://d22fxaf9t8d39k.cloudfront.net/49313c7a44e88d6b43dcbefcdb55b65b6d839a87fedcfb6d146f83270de81b0943531.jpeg"},
        ]
        export const getItems =() =>{
            return new Promise((resolve,reject) => {
                setTimeout (() => {
                    resolve (items)
                },2000)
            })
}
 export default Items;