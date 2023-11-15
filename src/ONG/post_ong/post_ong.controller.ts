import { Controller, Body, Post,  } from "@nestjs/common";
import { NewONGDto } from "src/DTO´s/new_ong.dto";
import { PostONGService } from "./post_ong.service";

@Controller('/ONG')
export class PostONGController{
    constructor(private readonly usePostONG:PostONGService) { }

    @Post('/')
    async PostUser(@Body()newONGDto:NewONGDto )
    {
    const newDonatorCreated = await this.usePostONG.createOng(newONGDto)
    return newDonatorCreated
    }
}