import { Injectable, signal } from '@angular/core';
import { User } from '../interfaces/user.interface';
import Swal from 'sweetalert2';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLogged = signal(false);

  login(user:User):boolean{

    const userStr = localStorage.getItem(user.email!); 

    if(userStr){

      const userDB:User = JSON.parse(userStr);
      if(user.password==userDB.password){
        return true; 
      }
    }

    Swal.fire({
      text: "Acceso denegado",
      icon: "error"
    });
    return false;
    
  }

  registry(user:User):boolean{
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
  }

   
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
