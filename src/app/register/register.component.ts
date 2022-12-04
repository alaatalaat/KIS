import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // registerForm = new FormGroup({
  //   fname : new FormControl(''),
  //   lname : new FormControl(''),
  //   email : new FormControl(''),
  //   password : new FormControl(''),
  //   phone : new FormControl(''),
  // });

  error = 'border-danger'
  registerForm = this.fb.group({
    fname : ['',Validators.required],
    lname : ['',Validators.required],
    email : ['',[Validators.required,Validators.email]],
    password : ['',Validators.required],
    genderControl :[false,Validators.required],
    phone : ['',[Validators.required,Validators.maxLength(11)]],
    antherPhone : this.fb.array([])
  });
  get firstName(){ return this.registerForm.get('fname'); }
  get lastName(){  return this.registerForm.get('lname'); }
  get email(){ return this.registerForm.get('email'); }
  get password(){ return this.registerForm.get('password');}
  get gender(){ return this.registerForm.get('genderControl'); }
  get phone(){return this.registerForm.get('phone'); }
  get antherPhone(){ return this.registerForm.get('antherPhone') as FormArray;}

  addAntherPhone(ele:HTMLElement){
    this.antherPhone.push(this.fb.control(''));
    ele.style.display = 'none';
  }

   enrollData(){
    console.log(this.registerForm.value);
   }
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
