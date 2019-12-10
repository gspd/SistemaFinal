import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router, ActivatedRoute} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    data: any;
    public flask: any;

    constructor(
        private http: HttpClient,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    getLocalData() {
        return this.http.get('assets/data.json');
    }

    getRecommendation(userid, randOn) {
        this.flask = 'http://127.0.0.1:5000/predictions/' + randOn + '/' + userid;
        return this.http.get(this.flask);
    }
}
