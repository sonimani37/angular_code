import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, } from '@angular/common/http';
import { Router } from '@angular/router';
import { baseUrl } from 'src/environments/environment';
import { map } from "rxjs/operators";
import { pipe, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	constructor(private http: HttpClient, private router: Router,) { }

	sendRequest(method: string, endPoint: string, data: any) {
		return this.actualSendRequest(method, endPoint, data);
	}

	actualSendRequest(method: any, endPoint: any, data: any) {
		let myHeaders: any;
		// var token = 'Bearer ' + localStorage.getItem('token');
		// console.log(token);

		// if (localStorage.getItem('token') == null) {
		// 	// myHeaders = new HttpHeaders({
		// 	//   'authorization': 'VGlub25Ob2RlQDIwMjE=',
		// 	//   'platform': 'web',
		// 	//   'accept': 'application/json'
		// 	// });
		// } else {
		// 	var token: string = 'Bearer ' + localStorage.getItem('token');
		// 	console.log(token);

		// 	let baseEncoded = token
		// 	myHeaders = new HttpHeaders({
		// 		'authorization': token,
		// 		// 'platform': 'web',
		// 		// 'accept': 'application/json'
		// 	});
		// }

		let endPointUrl: any;
		endPointUrl = `${baseUrl}` + endPoint + ``;
		if (method == 'post') {
			return this.http.post(endPointUrl, data,)
				.pipe(
					map(data => {
						return data
					}),
					// catchError(error => {
					//   return this.handleError(error);
					// })
				);
		} else if (method == 'put') {
			return this.http.put(endPointUrl,
				data, { headers: myHeaders }).pipe(
					map(data => {
						return data
					}),
					// catchError(error => {
					//   return this.handleError(error);
					// })
				);
		} else if (method == 'delete') {
			return this.http.delete(endPointUrl, { headers: myHeaders }).pipe(
				map(data => {
					return data
				}),
				// catchError(error => {
				//   return this.handleError(error);
				// })
			);
		} else {
			return this.http.get(endPointUrl, { headers: myHeaders }).pipe(
				map(data => {
				return data
				}),
				// catchError(error => {
				//   return this.handleError(error);
				// })
			);
		}
	}

	
    IsLoggedIn() {
        //it returns a boolean value, if the token exsist then true else vice versa
        return !!localStorage.getItem('token');

    }

}
