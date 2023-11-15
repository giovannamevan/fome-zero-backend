import { Injectable } from '@nestjs/common';
import { Donator } from 'src/schemas/donator_schema';
import { NewDonatorDto } from '../../DTO´s/new_donator.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';



Injectable()
export class PostDonatorService{
    constructor(
        @InjectModel(Donator.name)
        private readonly postDonatorRepository:Model<Donator>,
    ) {}
    
    async createDonator(postData:NewDonatorDto): Promise<Donator> {
        const newDonator = await this.postDonatorRepository.create(postData)
        return newDonator 
    }
}