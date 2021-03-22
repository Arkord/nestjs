import { Test, TestingModule } from '@nestjs/testing';
import { ArdillasController } from './ardillas.controller';
import { ArdillasService } from './ardillas.service';

describe('ArdillasController', () => {
  let controller: ArdillasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArdillasController],
      providers: [ArdillasService],
    }).compile();

    controller = module.get<ArdillasController>(ArdillasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
