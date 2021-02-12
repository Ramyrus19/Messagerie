import { TestBed } from '@angular/core/testing';

import { ManagerCommentairesService } from './manager-commentaires.service';

describe('ManagerCommentairesService', () => {
  let service: ManagerCommentairesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerCommentairesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
