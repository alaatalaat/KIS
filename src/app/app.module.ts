import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgForm,NgModel,FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxStarRatingModule } from 'ngx-star-rating';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChangeTextColorDirective } from './Directives/change-text-color.directive';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SetCardStyleInMenuComDirective } from './Directives/set-card-style-in-menu-com.directive';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewProductComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    ChangeTextColorDirective,
    HomeComponent,
    FooterComponent,
    SetCardStyleInMenuComDirective,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    TranslateModule.forRoot({
      defaultLanguage:'ar',
      loader:{
        provide : TranslateLoader ,
        useFactory : createTranslateLoader ,
        deps : [HttpClient]
      }
    }),
    NgxStarRatingModule,
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}
