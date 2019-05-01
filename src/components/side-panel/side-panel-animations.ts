import { trigger, state, style, transition, animate } from '@angular/animations';

export enum SidePanelAnimationState {
    Closed = 'closed',
    Open = 'open',
    OpenImmediate = 'openImmediate',
    Minimized = 'minimized',
    MinimizedImmediate = 'minimizedImmediate'
}

export const sidePanelStateAnimation = trigger('panelState', [
    state(
        SidePanelAnimationState.Closed,
        style({
            visibility: 'hidden'
        })
    ),
    state(
        `${SidePanelAnimationState.Minimized}, ${SidePanelAnimationState.MinimizedImmediate}`,
        style({
            visibility: 'visible',
            transform: '*'
        })
    ),
    state(
        `${SidePanelAnimationState.Open}, ${SidePanelAnimationState.OpenImmediate}`,
        style({
            visibility: 'visible',
            transform: 'none'
        })
    ),
    transition(
        `${SidePanelAnimationState.Closed} <=> ${SidePanelAnimationState.Open}, ${SidePanelAnimationState.Closed} <=> ${SidePanelAnimationState.Minimized}`,
        animate('0.2s cubic-bezier(0.49, 1, 0.38, 0.98)')
    ),
    transition(
        `${SidePanelAnimationState.Closed} <=> ${SidePanelAnimationState.OpenImmediate}, ${SidePanelAnimationState.Closed} <=> ${SidePanelAnimationState.MinimizedImmediate}`,
        animate('0s')
    )
]);
