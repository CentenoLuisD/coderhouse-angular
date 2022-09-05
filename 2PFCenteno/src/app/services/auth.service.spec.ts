// import { TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing'

// import { AuthService } from './auth.service';
// import { FormsModule } from '@angular/forms';
// import { RouterTestingModule } from '@angular/router/testing';
// import { from } from 'rxjs';
// import { Usuario } from '../models/usuario';


// describe('AuthService', () => {
//   let service: AuthService;
//   let router: RouterTestingModule;
//   let httpClientSpy: {get: jasmine.Spy}

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//         imports: [
//             HttpClientTestingModule, 
//             FormsModule, 
//             RouterTestingModule,
//         ]
//     });
//     // let router: RouterTestingModule;
//     httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
//     service = new AuthService(httpClientSpy as any, router as any);
//   });

// //   it('should be created', () => {
// //     expect(service).toBeTruthy();
// //   });

//   it('should return 1 user', (done: DoneFn) => {
//    const mockUsuario: any = {
//     "usuario": "Hartmann",
//     "contrasena": "xVwUHB3NTKUrL01",
//     "admin": false,
//     "id": "1"
//    };

//    httpClientSpy.get.and.returnValue(from(mockUsuario));

//    service.iniciarSesion(mockUsuario).subscribe((usuario: any) => {
//     expect(usuario).toEqual(mockUsuario);
//     done();
//    })

//   });



// });
