import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "./../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private url = `${environment.apiHost}/auth`;

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const body = {
      username,
      password,
    };

    return this.http.post(this.url, body, { observe: "response" });
  }
}
