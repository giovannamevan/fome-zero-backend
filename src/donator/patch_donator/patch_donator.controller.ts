import { Controller, Body, Patch,  } from "@nestjs/common";
import { EditDonatorDto } from "src/DTO´s/edit_donator.dto";
import { EditDonatorService } from "./patch_donator.service";

@Controller('/donator')
export class EditDonatorController {
    constructor(private readonly usePostDonator:EditDonatorService) { }

    @Patch('/')
    async PostUser(@Body()editDonatorDto:EditDonatorDto )
    {
    const newDonatorCreated = await this.usePostDonator.editDonator(editDonatorDto)
    return newDonatorCreated
    }
}