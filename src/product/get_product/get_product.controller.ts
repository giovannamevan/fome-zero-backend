import { Controller, Get, Param } from "@nestjs/common"
import { GetProductsServices } from "./get_product.service"
import { Product } from "src/schemas/product_schema"

@Controller('/products')
export class GetProductsController{
    constructor(private readonly useGetProducts:GetProductsServices) { }

    @Get('/')
    async GetAllDonators(): Promise<Product[]> {
    const allProductsList = await this.useGetProducts.findAllProducts()
    return allProductsList
    }

    @Get('/:id')
    async GetDonatorById(@Param("id") param:string):Promise<Product> {
        const selectedProduct = await this.useGetProducts.findProductById(param)
        return selectedProduct
    }

    
}