import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiErrorHandlerService } from 'src/app/core/utils/api-error-handler.service';
import { LocalStoreService } from 'src/app/core/utils/local-store.service';

@Component({
  selector: 'app-sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls: ['./sample-component.component.css']
})
export class SampleComponentComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private router: Router,
    private localStoreService: LocalStoreService,
    private errorHandler: ApiErrorHandlerService
  ) { }

  ngOnInit(): void {
  }

  signOut(){
    this.authService.signout()
    .subscribe((res) => { 
      console.log('Logout') 
    },(error) => {
      this.errorHandler.handleServerErrors(error);
    });
  }
}
