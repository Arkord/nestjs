import { Controller } from '@nestjs/common';
import { ArdillasService } from './ardillas.service';

@Controller('ardillas')
export class ArdillasController {
  constructor(private readonly ardillasService: ArdillasService) {}
}
