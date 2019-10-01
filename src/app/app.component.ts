import { Component } from '@angular/core';
import { Router, Event, NavigationStart, RoutesRecognized,
  RouteConfigLoadStart, RouteConfigLoadEnd, 
 NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'horoscope';
  constructor(private router: Router) { 
      router.events.subscribe( (event: Event) => {
            if(event instanceof NavigationStart) {
                // Navigation started.
               //console.log(event.url);
               //$(".transition_wall_window").toggleClass("anim-trans");
            }
            else if (event instanceof RoutesRecognized) { 
                  // Router parses the URL and the routes are recognized.
              }
              else if (event instanceof RouteConfigLoadStart) {
                // Before the Router lazyloads a route configuration.
              }
              else if (event instanceof RouteConfigLoadEnd) { 
                // Route has been lazy loaded.
              }
              else if (event instanceof NavigationEnd) {
                  // Navigation Ended Successfully.
                  console.log("navigation finished");
                  
              }
              else if (event instanceof NavigationCancel) { 
                  // Navigation is canceled as the Route-Guard returned false during navigation.
            
              }
              else if (event instanceof NavigationError) {
                  // Navigation fails due to an unexpected error.
                    console.log(event.error);
              }
        });
      

    }
}
