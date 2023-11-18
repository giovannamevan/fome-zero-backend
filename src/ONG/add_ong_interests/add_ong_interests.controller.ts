import { Body, Controller, Post } from "@nestjs/common"
import { PostONGInterestService } from "./add_ong_interests.service"

@Controller('/ONG')
export class AddONGInterestsController {
    constructor(private readonly usePostONGInterests: PostONGInterestService) { }


    @Post('/interests')
    async AddInterestsFromONG(
        @Body('product_id') product_id: string,
        @Body('ong_id') ong_id: string
    ): Promise<void> {
        await this.usePostONGInterests.postOngInterest(product_id, ong_id)
        return
    }


}