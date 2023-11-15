import { Body, Controller, Post } from "@nestjs/common"
import { LoginDonatorService } from "./login_donator.service"
import { LoginDonatorDTO } from "src/DTO´s/login_donator.dto"

@Controller('/donator')
export class LoginDonatorController{ 
    constructor(private readonly useLoginDonator:LoginDonatorService) { }

    @Post('/login')
    async GetAllUsers(
        @Body("senha")senha_,
        @Body("email")email_,
        donatorToLogin:LoginDonatorDTO = {email:email_,senha:senha_}
    ) {
    const loggedDonator = await this.useLoginDonator.loginDonator(donatorToLogin)
    return loggedDonator 
    }
    
}

