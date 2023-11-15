import { Controller, Get, Param } from "@nestjs/common"
import { Product } from "src/schemas/product_schema"
import { GetONGInterestsService } from "./get_ong_interests.service"

@Controller('/ONG')
export class GetONGInterestsController{
    constructor(private readonly useGetONGInterests:GetONGInterestsService) { }


    @Get('/interests/:id')
    async GetInterestsFromONG(@Param("id") param:string):Promise<Product[]> {
        const productsFromDonator = await this.useGetONGInterests.findONGInterests(param)
        return productsFromDonator
    }

    
}