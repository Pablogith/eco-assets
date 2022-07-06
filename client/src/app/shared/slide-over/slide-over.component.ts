import { Component, OnInit, ViewChild } from '@angular/core';
import {
  backgroundOverlaySlideOver,
  slideOverPanel,
} from '@shared/slide-over/animations';
import { select, Store } from '@ngrx/store';
import { UiState, UiStateComponents } from '@store/models/uiState';
import { delay, map, Observable } from 'rxjs';
import { uiFeatureKey } from '@store/reducers/ui.reducers';
import { closeOverlay } from '@store/actions/ui.action';
import { DynamicDirective } from '@shared/dynamic/dynamic.directive';
import {
  BatteryCreateFormComponent,
  BatteryEditFormComponent,
} from '@features/battery/components';

@Component({
  selector: 'eac-slide-over',
  templateUrl: './slide-over.component.html',
  styleUrls: ['./slide-over.component.scss'],
  animations: [backgroundOverlaySlideOver, slideOverPanel],
})
export class SlideOverComponent implements OnInit {
  @ViewChild(DynamicDirective, { static: true })
  dynamicHost!: DynamicDirective;

  public isOpen$!: Observable<boolean>;
  public title$!: Observable<string>;

  constructor(private store: Store<UiState>) {
    this.isOpen$ = this.store.pipe(
      // @ts-ignore
      select(uiFeatureKey),
      map((state: UiState) => state.overlay.isOpen),
      delay(200)
    );
    this.title$ = this.store.pipe(
      // @ts-ignore
      select(uiFeatureKey),
      map((state: UiState) => state.overlay.title)
    );
  }

  public ngOnInit(): void {
    // @ts-ignore
    this.store.pipe(select(uiFeatureKey)).subscribe((state: UiState) => {
      if (
        state.overlay.component === UiStateComponents.BatteryEditFormComponent
      ) {
        this.loadBatteryEditFormComponent();
      } else if (
        state.overlay.component === UiStateComponents.BatteryCreateFormComponent
      ) {
        this.loadBatteryCreateFormComponent();
      }
    });
  }

  public close(): void {
    this.store.dispatch(closeOverlay());
  }

  private loadBatteryEditFormComponent(): void {
    const viewContainerRef = this.dynamicHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef =
      viewContainerRef.createComponent<BatteryEditFormComponent>(
        BatteryEditFormComponent
      );
  }

  private loadBatteryCreateFormComponent(): void {
    const viewContainerRef = this.dynamicHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef =
      viewContainerRef.createComponent<BatteryCreateFormComponent>(
        BatteryCreateFormComponent
      );
  }
}
