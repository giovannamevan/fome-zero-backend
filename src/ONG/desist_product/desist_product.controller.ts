import { Controller, Delete, Get, Param } from "@nestjs/common"
import { ONG } from "src/schemas/ong_schema"
import { GiveUpOnProductService } from "./desist_product.service"

@Controller('/ONG')
export class GiveUpProductController{
    constructor(private readonly useGiveUp:GiveUpOnProductService) { }

    @Delete('/:ong_id;/:product_id')
    async GetDonatorById(@Param("ong_id") ongId:string, @Param("product_id") productId:string):Promise<ONG> {
        const deletedProduct = await this.useGiveUp.GiveUpOnProduct(productId,ongId)
        return
    }

    
}

