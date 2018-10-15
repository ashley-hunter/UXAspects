import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabFocusDirective } from './tab/tab-focus.directive';
import { TabHeadingDirective } from './tab/tab-heading.directive';
import { TabComponent } from './tab/tab.component';
import { TabsetComponent } from './tabset.component';

@NgModule({
    imports: [
        CommonModule,
        A11yModule
    ],
    exports: [TabsetComponent, TabComponent, TabHeadingDirective],
    declarations: [TabsetComponent, TabComponent, TabHeadingDirective, TabFocusDirective],
})
export class TabsetModule { }