import { inject, Injectable, signal } from '@angular/core';
import { User } from '../interfaces/user.interface';
import Swal from 'sweetalert2';
import { Post } from '../interfaces/post.interface';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../interfaces/login-respose.interface';
import { catchError, map, Observable, tap } from 'rxjs';
import { TOKEN_KEY } from '../util/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLogged = signal(false);

  http = inject(HttpClient);
  
  private urlBase = 'http://localhost:3000/api/v1';

  login(email: string, password: string): Observable<boolean> {

    return this.http.post<LoginResponse>(`${this.urlBase}/auth/login`, { email, password }).pipe(
      tap({
        next: (response) => {
          sessionStorage.setItem(TOKEN_KEY, response.token);
          this.isLogged.update(() => true);
        },
      }),
      map((response) => {
        return response.success;
      }),
      catchError((error) => {
        console.error('From service', error);
        throw new Error('Credenciales no válidas');
      })
    );
  }

  /*login(email:string, password:string):boolean{

    this.http.post<LoginResponse>("http://localhost:3000/api/v1/auth/login", {email, password}).subscribe(
      res=>{
        if(res.success){
          this.isLogged.update(()=>true);  
          return true
        }
        Swal.fire({
          text: "Acceso denegado",
          icon: "error"
        });
        return false;
      }
    ); 
    return true; */

    /*const userStr = localStorage.getItem(email!); 

    if(userStr){

      const userDB:User = JSON.parse(userStr);
      if(password==userDB.password){
        this.isLogged.update(()=>true); 
        return true; 
      }
    }

    Swal.fire({
      text: "Acceso denegado",
      icon: "error"
    });
    return false;*/


  registry(user: User): Observable<boolean> {
    return this.http.post<LoginResponse>(`${this.urlBase}/auth/sigun-up`, user).pipe(
      tap({
        next: (response) => {
          sessionStorage.setItem(TOKEN_KEY, response.token);
          this.isLogged.update(() => true);
        },
      }),
      map((response) => {
        return response.success;
      }),
      catchError((error) => {
        console.error('From service', error);
        throw error;
      })
    );
  }

  /*registry(user:User):boolean{
    const userSrt = localStorage.getItem(user.username!);

    console.log(userSrt)
    if(userSrt){
      Swal.fire({
        text:`Usuario ${user.email} ya existe`,
        icon:'error'
      });
      return false;
    }
    localStorage.setItem(user.email!, JSON.stringify(user));
    this.isLogged.update(()=>true);
    return true;
  }*/
   
  post(post: Post): boolean {
    try {
      localStorage.setItem(post.itemname!, JSON.stringify(post));
      return true;
    }catch (error) {
      console.error('Error al guardar el post:', error);
      return false;
      }
    }

}
