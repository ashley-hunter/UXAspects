import { ChangeDetectionStrategy, Component, Directive } from '@angular/core';

@Component({
    selector: 'ux-ebox',
    templateUrl: './ebox.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EboxComponent { }

@Directive({
    selector: 'ux-ebox-header'
})
export class EboxHeaderDirective { }

@Directive({
    selector: 'ux-ebox-content'
})
export class EboxContentDirective { }
