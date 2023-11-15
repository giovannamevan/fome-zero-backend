import { Controller, Body, Patch,  } from "@nestjs/common";
import { PatchProductService } from "./patch_product.service";
import { EditProductDto } from "src/DTO´s/edit_product.dto";

@Controller('/products')
export class PatchProductController {
    constructor(private readonly usePatchProduct:PatchProductService) { }

    @Patch('/')
    async PostUser(@Body()newProductDto:EditProductDto )

    {
    const patchedProduct = await this.usePatchProduct.patchProduct(newProductDto)
    return patchedProduct 
    }
}