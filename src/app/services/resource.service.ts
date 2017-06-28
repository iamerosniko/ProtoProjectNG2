import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Resource } from '../entities/resource';
@Injectable()
export class ResourceService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = 'api/Resources';

    constructor(private http: Http){}
    //pass the question id
    getResourcePath(resourceCategory: string): Promise<Resource> {
        const url = `${this.apiUrl}/GetResourcePath/?resourceCategory=${resourceCategory}`;
        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    //this get values related to PW_TEMPORARYUSERS (NOT YET DONE)
    getResourcePath2(resourceCategory: string): Promise<Resource> {
        const url = `${this.apiUrl}/GetResourcePath/?resourceCategory=${resourceCategory}`;
        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
