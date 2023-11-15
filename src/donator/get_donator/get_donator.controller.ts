import { Controller, Get, Param } from "@nestjs/common"
import { Donator } from "src/schemas/donator_schema"
import { GetDonatorService } from "./get_donator.service"

@Controller('/donator')
export class GetDonatorController {
    constructor(private readonly useGetDonators:GetDonatorService) { }

    @Get('/')
    async GetAllDonators() {
    const allDonatorsList = await this.useGetDonators.findAllDonators()
    return allDonatorsList
    }

    @Get('/:id')
    async GetDonatorById(@Param("id") param:string):Promise<Donator> {
        const selectedDonator = await this.useGetDonators.findDonatorById(param)
        return selectedDonator 
    }

    
}

