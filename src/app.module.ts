import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculoController } from './calculo/calculo.controller';
import { ArdillasModule } from './ardillas/ardillas.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ 
    ArdillasModule, 
    UsuariosModule,
    UsuariosModule,
    TypeOrmModule.forRoot()
  ],
  controllers: [AppController, CalculoController],
  providers: [AppService],
})
export class AppModule {}
