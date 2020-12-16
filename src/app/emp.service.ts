import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private https:HttpClient) { }
  empList(pageNo){
    return this.https.get('https://reqres.in/api/users' + '?page=' + pageNo)
  }
  empDetails(id){
    return this.https.get('https://reqres.in/api/users/' + id)
  }
}
