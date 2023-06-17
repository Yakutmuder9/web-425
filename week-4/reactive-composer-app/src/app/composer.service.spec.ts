/**
 * Title: composer-list.service.ts
 * Author: Professor Krasso
 * ModifiedBy: Yakut Ahmedin
 * Date: 17 Jun 2023
 * Description: composer service
*/

import { TestBed } from '@angular/core/testing';

import { ComposerService } from './composer.service';

describe('ComposerService', () => {
  let service: ComposerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
