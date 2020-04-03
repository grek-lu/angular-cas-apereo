# AuthCasApereoModule

This project it is a simple library from authenticate to CAS Apereo SSO from Angular.

## Installation

```bash
$ npm install --save auth-cas-apereo
```

### PeerDependencies
Dependencies needed:

```json
"peerDependencies": {
    "@angular/common": "^6.0.0-rc.0 || ^6.0.0",
    "@angular/core": "^6.0.0-rc.0 || ^6.0.0",
    "timers": "^0.1.1",
    "events": "^3.0.0",
    "stream": "^0.0.2"
  }
```

## Configuration

Add the following attributes to the environment files: (src/environments/environment.json):

```json
    appUrl: '<APP_URL>', //Example: https://myapp.com
    casUrl: '<CAS_URL>', //Example: https://mycas.com/cas
    casValidateUrl: '<CAS_VALIDATE_TICKET>' //Example: https://mycas.com/cas/p3/serviceValidate
```

Add the CAS module to the `app.module.ts`:

```json
import { AuthCasApereoModule } from 'auth-cas-apereo';
import { environment } from '../environments/environment';
```

Add imports:

```json
AuthCasApereoModule.forRoot(environment)
```

Add the `auth-cas-apereo` component where you want the CAS to handle authentication, in our case we put it in the `app.component.html`:

```html
<auth-cas-apereo></auth-cas-apereo>
<router-outlet></router-outlet>
<!--The content below is only a placeholder and can be replaced.-->
<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
  <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
</div>
<h2>Here are some links to help you start: </h2>
<ul>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
  </li>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://github.com/angular/angular-cli/wiki">CLI Documentation</a></h2>
  </li>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
  </li>
</ul>
```

### Get User Logged in

To get logged in user use the SessionStorage:
```json
    window.sessionStorage.getItem('loginUser')
    window.sessionStorage.getItem('ticketUser')
    window.sessionStorage.getItem('attrsUser')
```
