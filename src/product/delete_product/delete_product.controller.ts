import { Controller, Body, Post, Delete, Param, } from "@nestjs/common";
import { DeleteProductService } from "./delete_product.service";

@Controller('/ONG')
export class DeleteProductController {
    constructor(private readonly useDeleteProduct: DeleteProductService) { }

    @Delete('/:id')
    async PostUser(@Param("id") productToDelete: string) {
        const productDeleted = await this.useDeleteProduct.deleteProduct(productToDelete)
        return productDeleted
    }
}