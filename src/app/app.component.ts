import { Component, OnInit} from '@angular/core';
import {WordCloudService} from './wordCloud.service';
import {Mood} from './mood';
import {Font} from './font';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:  [ WordCloudService ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fonts: Font[];
  moods: Mood[];
  title = 'Generate your Mood Cloud!';

  constructor(private service: WordCloudService) {
  }

  getFonts(): void {
    this.service.getFontList((list) => {
      this.fonts = list.items;
    });
  }

  getMoods(): void {
    this.service.getMoodList((list) => {
      console.log('getMoods', list);
      this.moods = list;
    });
  }

  setFontFamily(fontFamily): void {
   console.log(fontFamily);
  }

  ngOnInit() {
    this.getFonts();
    this.getMoods();
  }
}

