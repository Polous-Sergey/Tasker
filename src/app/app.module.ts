import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {ImageToDataUrlModule} from 'ngx-image2dataurl';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RequestService} from './services/request.service';
import {FormsModule} from '@angular/forms';
import {DataProviderService} from './services/data-provider.service';
import {HeaderComponent} from './header/header.component';
import {TasksComponent} from './tasks/tasks.component';
import {CardComponent} from './tasks/card/card.component';
import {PaginatorComponent} from './tasks/paginator/paginator.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    CardComponent,
    PaginatorComponent,
    CreateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ImageToDataUrlModule,
  ],
  providers: [HttpClientModule,
    HttpClient,
    RequestService,
    DataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
