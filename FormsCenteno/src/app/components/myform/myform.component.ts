import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.registerForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      address: new FormControl('', [Validators.required]),
      address2: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  sendForm () {
    console.log(this.registerForm);
  }

  
  public get email() {
    return this.registerForm.get('email')
  }

  public get password() {
    return this.registerForm.get('password')
  }

  public get address() {
    return this.registerForm.get('address')
  }

  public get address2() {
    return this.registerForm.get('address2')
  }

  public get city() {
    return this.registerForm.get('city')
  }

  public get state() {
    return this.registerForm.get('state')
  }

  public get zip() {
    return this.registerForm.get('zip')
  }

  public get checkme() {
    return this.registerForm.get('checkme')
  }
  

}
