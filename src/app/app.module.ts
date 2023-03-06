import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { ParentComponent } from './parent/parent.component';
import { ChildrenComponent } from './children/children.component';

@NgModule({
  declarations: [AppComponent, NewComponentComponent, ParentComponent, ChildrenComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
