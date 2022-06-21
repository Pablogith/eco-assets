import { Component, inject, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter, map } from "rxjs";

@Component({
  selector: 'eac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isAuthRoute: boolean = false;

  private router = inject(Router);

  public ngOnInit(): void {
    this.listenRouterEventsForAuthPath();
  }

  private listenRouterEventsForAuthPath(): void {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map((event: NavigationEnd) => event.url)
      )
      .subscribe((e: string) => {
        this.isAuthRoute = e.includes('auth');
      });
  }
}
