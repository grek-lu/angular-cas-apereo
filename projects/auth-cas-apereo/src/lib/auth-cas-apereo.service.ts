import { Inject, Injectable } from '@angular/core';
import { AuthStorageService } from './auth-storage.service';
import { HttpService } from './http.service';
import { XmlConvertService } from './xml-convert.service';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthCasApereoService {

  constructor(
    private xmlConvert: XmlConvertService,
    private authStorage: AuthStorageService,
    private http: HttpService,
    @Inject('env') private environment) { }

  verifyLogin(): Promise<any> {
    if (!this.isAuthenticated()) {
      this.openLogin();
    }
    return this.validateLogin();
  }

  validateLogin(): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.http
          .doGetUrlXML(this.getUrlValidate())
          .subscribe(res => this.validation(resolve, reject, res), reject)
      }, 3000)
    });
    return promise;
  }

  openLogin() {
    window.open(this.getUrlLogin(), '_self');
  }

  validation(resolve, reject, res) {
    let data = this.xmlConvert.convertToJson(res);
    let success = data['cas:serviceResponse']['cas:authenticationSuccess'];
    if (success) {
      let login = success['cas:user'];
      this.authStorage.saveLogin(login);
      
      if (success["cas:attributes"]){
        let attrs = {};
        let keys = Object.keys(success["cas:attributes"]);
        for (let i = 0; i < keys.length; ++i){
          let key = keys[i];
          var pty = key.replace("cas:", "");
          attrs[pty] = success["cas:attributes"][key];          
        }
        this.authStorage.saveAttrs(attrs);
      }      
    } else {
      this.authStorage.remove();
      this.openLogin();
    }
    resolve();
  }

  logout() {
    this.authStorage.remove();
    window.open(this.environment.casUrl + '/logout?service=' + this.environment.appUrl, '_self');
  }

  getUrlValidate(): string {
    return this.environment.casValidateUrl + '?ticket=' + this.authStorage.getTicket() + '&service=' + this.environment.appUrl;
  }

  getUrlLogin(): string {
    return this.environment.casUrl + '/login?service=' + this.environment.appUrl;
  }

  isAuthenticated(): boolean {
    return this.isNotEmpty(this.authStorage.getTicket());
  }

  isEmpty(obj): boolean {
    return obj == undefined || obj == null || obj == '' || obj == ' ';
  }

  isNotEmpty(obj): boolean {
    return !this.isEmpty(obj);
  }
}
