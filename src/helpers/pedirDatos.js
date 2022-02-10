import { stock } from '../data/stock.js'

export const pedirDatos = () =>{
    return new Promise ( (resolve, reject) =>{
        setTimeout (() => {
            resolve (stock)
        //reject ("promesa resuelta")
        }, 1000 )
      })
   }