import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  private emailUrl = 'https://voltdrop.co.za/email'

  constructor(private http: HttpClient) {
  }

  sendEmail(body: any) {
    body.to = 'martin@voltdrop.co.za'
    return this.http.post<any>(this.emailUrl, body)
  }

}