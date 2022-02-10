import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppService } from './app.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [AppService],
})
export class AppModule {}
