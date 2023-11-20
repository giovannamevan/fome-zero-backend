import { Controller, Body, Post,  } from "@nestjs/common";
import { NewProductDto } from "src/DTO´s/new_product.dto";
import { PostDonatorProductService } from "./post_donator_products.service";

@Controller('/donator')
export class PostDonatorProductController {
    constructor(private readonly usePostDonatorProduct:PostDonatorProductService) { }

    @Post('/postProduct')
    async PostUser(@Body()newProductDto:NewProductDto )
    {
    console.log("tentou me chamar AAAAAAAAAAAAAA")
    const newDonatorCreated = await this.usePostDonatorProduct.postDonatorProduct(newProductDto)
    return newDonatorCreated
    }
}