import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderModule } from 'ngx-script-loader';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CloudpicviewerComponent } from './cloudpicviewer/cloudpicviewer.component';
import { ViewmodelversionComponent } from './viewmodelversion/viewmodelversion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CloudpicviewerComponent,
    ViewmodelversionComponent
  ],
  imports: [
    BrowserModule,
    ScriptLoaderModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
