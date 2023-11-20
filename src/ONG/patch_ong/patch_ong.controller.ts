import { Controller, Body, Post, Patch  } from "@nestjs/common";
import { NewONGDto } from "src/DTO´s/new_ong.dto";
import { EditONGService } from "./patch_ong.service";
import { EditONGDto } from "src/DTO´s/edit_ong.dto";

@Controller('/ONG')
export class EditONGController{
    constructor(private readonly useEditONG:EditONGService) { }

    @Patch('/')
    async PostUser(@Body()newONGDto:EditONGDto )
    {
    const newDonatorCreated = await this.useEditONG.editONG(newONGDto)
    return newDonatorCreated
    }
}
