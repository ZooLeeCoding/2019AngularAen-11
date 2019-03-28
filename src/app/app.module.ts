import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';
import { ErrorComponent } from './error/error.component';
import { SmallerWorldComponent } from './smaller-world/smaller-world.component';
import { CompositContentComponent } from './composit-content/composit-content.component';

import { ObservableExampleService } from './observable-example.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    WorldComponent,
    ErrorComponent,
    SmallerWorldComponent,
    CompositContentComponent
  ],
  imports: [
    BrowserModule,
    //
    AppRoutingModule
  ],
  providers: [ObservableExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
