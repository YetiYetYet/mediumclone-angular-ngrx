import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {PersistanceService} from "./persistance.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private persitanceService: PersistanceService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = this.persitanceService.get('accessToken');

      const tokenizedRequest = request.clone({
        setHeaders: {
          Authorization: token ? `Token ${token}` : ''
        }
      });

      return next.handle(tokenizedRequest);
    }
}
