import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CursosService } from './cursos.service';
import { of } from 'rxjs';


describe('CursosService', () => {
  let service: CursosService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
          ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    // service = TestBed.inject(CursosService);
    service = new CursosService(httpClientSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return all the Courses', () => {
    const mockDatos = [
        {
            "name": "Angular 16",
            "profesor": "Abner Garcia",
            "id": "1"
           },
           {
            "name": "Angular 16",
            "profesor": "Lautaro Guerrero",
            "id": "2"
           },
           {
            "name": "MEMORY",
            "profesor": "Millie",
            "id": "3"
           },
           {
            "name": "MEMORY",
            "profesor": "Jacky",
            "id": "4"
           },
           {
            "name": "BLACKHOLE",
            "profesor": "Mable",
            "id": "5"
           },
           {
            "name": "CSV",
            "profesor": "Elta",
            "id": "6"
           },
           {
            "name": "BLACKHOLE",
            "profesor": "Ursula",
            "id": "7"
           }
    ];

    httpClientSpy.get.and.returnValue(of(mockDatos));

    service.obtenerCursos().subscribe((cursos) => {
        expect(cursos).toEqual(mockDatos);
    })

  });


});
