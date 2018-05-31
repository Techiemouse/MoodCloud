import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WordCloudService {

    constructor(private http: HttpClient) {}

    getList(done): void {
        this.http.get('/api/words').subscribe(done);
    }
}
