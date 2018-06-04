import {Mood} from './mood';
import {WordCloudService} from './wordCloud.service';
import {Component, OnInit} from '@angular/core';

@Component({
    selector:    'app-mood-cloud',
    templateUrl: 'wordCloud.component.html',
    providers:  [ WordCloudService ],
    styleUrls: ['./wordCloud.component.css']
})
export class WordCloudComponent implements OnInit {
    moods: Mood[];


    constructor(private service: WordCloudService) {

    }
    getMoods(): void {
        this.service.getList((list) => {
            this.moods = list;
        });
    }
    ngOnInit() {
        this.getMoods();
    }

}
