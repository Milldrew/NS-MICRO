import { Test, TestingModule } from '@nestjs/testing';
import { NewsfeedGateway } from './newsfeed.gateway';

describe('NewsfeedGateway', () => {
  let gateway: NewsfeedGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsfeedGateway],
    }).compile();

    gateway = module.get<NewsfeedGateway>(NewsfeedGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
