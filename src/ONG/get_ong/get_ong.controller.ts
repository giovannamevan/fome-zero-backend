import { Controller, Get, Param } from "@nestjs/common"
import { GetONGService } from "./get_ong.service"
import { ONG } from "src/schemas/ong_schema"

@Controller('/ONG')
export class GetOngController{
    constructor(private readonly useGetONGS:GetONGService) { }

    @Get('/')
    async GetAllDonators() {
    const allONGSList = await this.useGetONGS.findAllONGS()
    return allONGSList
    }

    @Get('/:id')
    async GetDonatorById(@Param("id") param:string):Promise<ONG> {
        const selectedONG = await this.useGetONGS.findONGById(param)
        return selectedONG
    }

    
}

