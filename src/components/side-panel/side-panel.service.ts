import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SidePanelState } from './side-panel-state';

@Injectable()
export class SidePanelService {

    state$ = new BehaviorSubject<SidePanelState>(SidePanelState.Closed);

    open() {
        this.state$.next(SidePanelState.Open);
    }

    close() {
        this.state$.next(SidePanelState.Closed);
    }

    minimize() {
        this.state$.next(SidePanelState.Minimized);
    }
}
