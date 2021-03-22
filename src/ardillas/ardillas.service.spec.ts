import { Test, TestingModule } from '@nestjs/testing';
import { ArdillasService } from './ardillas.service';

describe('ArdillasService', () => {
  let service: ArdillasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArdillasService],
    }).compile();

    service = module.get<ArdillasService>(ArdillasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
