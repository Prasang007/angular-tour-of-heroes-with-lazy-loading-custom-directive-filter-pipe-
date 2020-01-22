import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('HeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers : [
      HttpClient,
      HttpHandler
    ]
  }));

  it('should be created', () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });
});
