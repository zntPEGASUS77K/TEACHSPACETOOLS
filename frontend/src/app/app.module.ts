import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LayoutComponent,
        children: [
          { path: 'profs', component: AppComponent },
          { path: 'salles', component: AppComponent },
          { path: 'occuper', component: AppComponent },
          { path: '', redirectTo: '/profs', pathMatch: 'full' }
        ]
      }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
