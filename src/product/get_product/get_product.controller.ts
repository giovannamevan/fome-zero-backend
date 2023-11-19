import { Controller, Get, Param } from "@nestjs/common"
import { GetProductsServices } from "./get_product.service"
import { Product } from "src/schemas/product_schema"

@Controller('/products')
export class GetProductsController {
    constructor(private readonly useGetProducts: GetProductsServices) { }

    @Get('/')
    async GetAllProducts(): Promise<Product[]> {
        const allProductsList = await this.useGetProducts.findAllProducts()
        return allProductsList
    }

    @Get('/:id')
    async GetProductById(@Param("id") param: string): Promise<Product> {
        const selectedProduct = await this.useGetProducts.findProductById(param)
        return selectedProduct
    }

    @Get('/available')
    async GetAvailableProducts(): Promise<Product[]> {
        const availableProducts = await this.useGetProducts.findAvailableProducts()
        return availableProducts
    }


}