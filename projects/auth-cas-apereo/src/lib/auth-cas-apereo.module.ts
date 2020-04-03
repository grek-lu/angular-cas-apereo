import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthCasApereoComponent } from './auth-cas-apereo.component';
import { AuthCasApereoService } from './auth-cas-apereo.service';
import { AuthStorageService } from './auth-storage.service';
import { LoadComponent } from './component/load/load.component';
import { HttpService } from './http.service';
import { XmlConvertService } from './xml-convert.service';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  declarations: [AuthCasApereoComponent, LoadComponent],
  exports: [AuthCasApereoComponent, LoadComponent],
  providers: [
    XmlConvertService,
    AuthStorageService,
    HttpService
  ]
})
export class AuthCasApereoModule {

  public static forRoot(environment: any): ModuleWithProviders {
    return {
      ngModule: AuthCasApereoModule,
      providers: [
        AuthCasApereoService,
        {
          provide: 'env', // you can also use InjectionToken
          useValue: environment
        }
      ]
    };
  }
}
