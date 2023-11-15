import { Body, Controller, Post } from "@nestjs/common"
import { LoginDonatorDTO } from "src/DTO´s/login_donator.dto"
import { LoginONGService } from "./login_ong.service"

@Controller('/ONG')
export class LoginONGController{ 
    constructor(private readonly useLoginONG:LoginONGService) { }

    @Post('/login')
    async GetAllUsers(
        @Body() ongToLogin:LoginDonatorDTO  
    ) {
    const loggedDonator = await this.useLoginONG.loginONG(ongToLogin)
    return loggedDonator 
    }
    
}

