import { Controller, Get, Param } from "@nestjs/common"
import { Product } from "src/schemas/product_schema"
import { GetDonatorProductsService } from "./get_donator_products.service"

@Controller('/donator')
export class GetDonatorProductsController {
    constructor(private readonly useGetDonatorsProducts: GetDonatorProductsService) { }


    @Get('/products/:id')
    async GetProductsFromDonator(@Param("id") param: string): Promise<Product[]> {
        const productsFromDonator = await this.useGetDonatorsProducts.findDonatorProducts(param)
        return productsFromDonator
    }


}
