import { Injectable } from '@angular/core';
import { INTERNET_CONNECTION_ERROR } from '../constants/app.constant';
import { StatusCode } from '../enum';

@Injectable({
  providedIn: 'root'
})
export class ApiErrorHandlerService {

  constructor() { }


  handleServerErrors(errorResponse){
    let messageError;
    if (errorResponse.status == StatusCode.UnAuthorized) {
      messageError =  errorResponse.message
    } else if (errorResponse.status == StatusCode.NotFound) {
      messageError = errorResponse.message
    }
    else if (errorResponse.status == StatusCode.BadRequest) {
      const message = errorResponse.message
      messageError = message;
    }else if (errorResponse.status == StatusCode.InternalServerError) {
      const message = INTERNET_CONNECTION_ERROR.servererror;
      messageError = message;
    }
    else if (errorResponse.status == StatusCode.Unknown) {
      // this.toastr.error('please check your Internet Connection')
      const message = INTERNET_CONNECTION_ERROR.internetcheck;
      messageError = message;
    }else{
      const message = INTERNET_CONNECTION_ERROR.someerror;
      messageError = message;
    }
    return messageError;
  }
}
