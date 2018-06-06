import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WordCloudService {

    constructor(private http: HttpClient) {}

    getMoodList(done): void {
        this.http.get('/api/words').subscribe(done);
    }

    getFontList(done): void {
      this.http.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyApWNoYkMEJ1BRbeUByIhiiXaNIWwld_a0').subscribe(done);
    }
}
