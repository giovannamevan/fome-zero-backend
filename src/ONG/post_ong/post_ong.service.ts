import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ONG } from 'src/schemas/ong_schema';
import { NewONGDto } from 'src/DTO´s/new_ong.dto';

Injectable()
export class PostONGService{
    constructor(
        @InjectModel(ONG.name)
        private readonly postONGRepository:Model<ONG>,
    ) {}
    
    async createOng(postData:NewONGDto): Promise<ONG> {
        const newONG = await this.postONGRepository.create(postData) 
        return newONG
    }
}