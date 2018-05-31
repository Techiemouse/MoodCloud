import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WordCloudComponent } from './wordCloud.component';
import { WordCloudService} from './wordCloud.service';
// Make sure you use exactly this import, to use the new version of the module
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    WordCloudComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WordCloudService],
  bootstrap: [AppComponent, WordCloudComponent]
})
export class AppModule { }
