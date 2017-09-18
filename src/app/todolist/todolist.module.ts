import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { TodolistComponent } from './todolist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodolistService} from './todolist.service';
import {UtilsModule} from '../utils/utils.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    HttpClientModule
  ],
  declarations: [
    TodolistComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ListComponent,
    ItemComponent
  ],
  providers: [TodolistService],
  exports: [TodolistComponent]
})
export class TodolistModule { }
