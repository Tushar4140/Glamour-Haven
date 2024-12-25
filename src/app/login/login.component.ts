import { Component } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (private obj:LoginServiceService){}
  onSubmit(ClientRecord:any){
    console.log(ClientRecord.value);
}
}
