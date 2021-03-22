import { Test, TestingModule } from '@nestjs/testing';
import { CalculoController } from './calculo.controller';

describe('CalculoController', () => {
  let controller: CalculoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalculoController],
    }).compile();

    controller = module.get<CalculoController>(CalculoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
