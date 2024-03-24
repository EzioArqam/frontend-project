// Create a new file named "grid-generator.service.spec.ts" in your Angular project.

import { TestBed } from '@angular/core/testing';
import { GridGeneratorService } from './grid-generator.service';
import { NotifierService } from '../notifier/notifier.service';

describe('GridGeneratorService', () => {
  let service: GridGeneratorService;
  let notifierServiceSpy: jasmine.SpyObj<NotifierService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('NotifierService', ['showErrorSnackbar']);

    TestBed.configureTestingModule({
      providers: [
        GridGeneratorService,
        { provide: NotifierService, useValue: spy }
      ]
    });

    service = TestBed.inject(GridGeneratorService);
    notifierServiceSpy = TestBed.inject(NotifierService) as jasmine.SpyObj<NotifierService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a valid matrix with 4 numbers', () => {
    const mockNumbers = [1, 2, 3, 4];
    const matrix = service.createMatrix(mockNumbers);
    expect(matrix.length).toBe(4);
    expect(matrix[0].length).toBe(4);
  });

  it('should show error snackbar if generated numbers exceed the limit', () => {
    spyOn(service, 'createMatrix').and.returnValue([]);
    service.createMatrix([1, 2, 3, 4, 5]);
    expect(notifierServiceSpy.showErrorSnackbar).toHaveBeenCalled();
  });

  it('should generate random numbers with correct sum', () => {
    const targetSum = 10;
    const numbers = service.generateRandomNumbers(targetSum);
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    expect(sum).toBe(targetSum);
  });

  it('should show error snackbar if target sum is greater than 20', () => {
    spyOn(service, 'generateRandomNumbers').and.returnValue([]);
    service.generateRandomNumbers(25);
    expect(notifierServiceSpy.showErrorSnackbar).toHaveBeenCalled();
  });

  it('should flatten a 2D array', () => {
    const arr = [[1, 2], [3, 4]];
    const flattened = service.flattenArray(arr);
    expect(flattened).toEqual([1, 2, 3, 4]);
  });
});
