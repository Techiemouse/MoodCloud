import {Mood} from './mood';
import {Component, OnChanges, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector:    'app-mood-cloud',
    templateUrl: 'wordCloud.component.html',
    styleUrls: ['./wordCloud.component.css']
})
export class WordCloudComponent implements OnChanges {
    @Input() moodList: Mood[];

    ngOnChanges() {
      console.log('+++++++', this.moodList);
    }
}
