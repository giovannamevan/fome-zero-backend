import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DonatorModule } from './donator/donator.module';
import { DatabaseModule } from './database';
import { OngModule } from './ONG/ong.module';
import { ProductModule } from './product/products.module';

@Module({
  imports: [DatabaseModule, DonatorModule, OngModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }