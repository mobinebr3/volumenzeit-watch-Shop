import Products from "@/models/Products"
import ConnecttoDB from "@/utils/ConnectToDB"
import { NextResponse } from "next/server"

export async function GET (){
try {
       await ConnecttoDB()
       const products = await Products.find()
       if(products)       return NextResponse.json({data:products },{status:200})
              return NextResponse.json({error:'Sometiong error in connection' },{status:500})
     
} catch (error) {
    
       return NextResponse.json({error :'error in connect to Db'},{status:500})
}
}