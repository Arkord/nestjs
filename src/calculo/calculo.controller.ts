import { Controller, Get, Post } from '@nestjs/common';

@Controller('calculo')
export class CalculoController {

    @Post()
    sumar() {
        let numero1: number = 10;
        let numero2: number = 20;

        return numero1 + numero2;
    }

}
