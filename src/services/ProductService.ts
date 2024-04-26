import {safeParse} from 'valibot'
import axios from 'axios'
import { DraftProductSchema } from "../types"
type PorductData = {
    [k: string] : FormDataEntryValue
}
export async function addProduct(data : PorductData ) {
    try {
        const result = safeParse(DraftProductSchema,{
            name: data.name,
            price: +data.price
        })
        if(result.success){
           const url = `${import.meta.env.VITE_API_URL}/api/products` 
           await axios.post(url, {
                name: result.output.name,
                price: result.output.price
           })
        }else {
            throw new Error('Datos no validos')
        }
    } catch (error) {
        console.log(error)   
    }
}