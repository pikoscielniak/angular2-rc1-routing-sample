import {Component, OnInit} from '@angular/core';
import {DashboardComponent} from './+dashboard';
import {Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {MainPageComponent} from './+main-page';

@Component({
  moduleId: module.id,
  selector: 'sample-app-app',
  templateUrl: 'sample-app.component.html',
  styleUrls: ['sample-app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/dashboard', component: DashboardComponent},
  {path: '/main-page', component: MainPageComponent}
])
export class SampleAppAppComponent implements OnInit {
  title = 'sample-app works!';

  constructor(private router:Router) {
  }

  ngOnInit() {
    this.router.navigate(['/main-page']);
  }
}
