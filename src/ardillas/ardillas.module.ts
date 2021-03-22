import { Module } from '@nestjs/common';
import { ArdillasService } from './ardillas.service';
import { ArdillasController } from './ardillas.controller';

@Module({
  controllers: [ArdillasController],
  providers: [ArdillasService]
})
export class ArdillasModule {}
