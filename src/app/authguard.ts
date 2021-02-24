import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageConstants } from './constants/storage';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private httpClient: HttpClient
    ) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const role  = localStorage.getItem(StorageConstants.ROLE) || null ;

    if(role && role == 'admin') {
        return true;
    }
    
    alert("User don't have Admin rights to access this page.");
    this.router.navigate(['dashboard/home']);
    
    return false;
    }

    
    } 