import {Component, OnInit} from '@angular/core';
import {DataProviderService} from '../services/data-provider.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    login = '';
    password = '';
    isAdmin = this.dataProvideService.isAmin;

    constructor(private dataProvideService: DataProviderService) {
    }

    ngOnInit() {
    }

    logIn() {
        if (this.login !== '' || this.password !== '') {
            if (this.login === 'admin' && this.password === '123') {
                this.dataProvideService.isAmin = true;
                this.isAdmin = true;
                $('#LogInModal').modal('hide');
                this.dataProvideService.isLogin.emit(true);
                console.log('ok');
                // to do toster
            }
            // else {
            //     // to do toster
            // }
        }
    }

    logOut() {
        this.dataProvideService.isAmin = false;
        this.isAdmin = false;
        this.dataProvideService.isLogin.emit(false);
    }
}
