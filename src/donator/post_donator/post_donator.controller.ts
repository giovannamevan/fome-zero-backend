import { Controller, Body, Post,  } from "@nestjs/common";
import { PostDonatorService } from "./post_donator.service";
import { NewDonatorDto } from "../../DTO´s/new_donator.dto";

@Controller('/donator')
export class PostDonatorController {
    constructor(private readonly usePostDonator:PostDonatorService ) { }

    @Post('/')
    async PostUser(@Body()newDonatorDto:NewDonatorDto
)
    {
    const newDonatorCreated = await this.usePostDonator.createDonator(newDonatorDto)
    return newDonatorCreated
    }
}