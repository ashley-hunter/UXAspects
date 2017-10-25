webpackJsonp([57],{1638:function(e,n,t){"use strict";var i=this&&this.__decorate||function(e,n,t,i){var o,a=arguments.length,c=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,n,t,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(c=(a<3?o(c):a>3?o(n,t,c):o(n,t))||c);return a>3&&c&&Object.defineProperty(n,t,c),c};Object.defineProperty(n,"__esModule",{value:!0});var o=t(1),a=t(218),c=function(){function e(){this.htmlCode=t(2491),this.jsCode=t(2492),this.codepen={html:this.htmlCode,htmlAttributes:{"ng-controller":"TimelineCtrl as vm"},js:[this.jsCode]}}return e}();c=i([o.Component({selector:"uxd-components-timline-ng1",template:t(1959),changeDetection:o.ChangeDetectionStrategy.OnPush}),a.DocumentationSectionComponent("ComponentsTimelineNg1Component")],c),n.ComponentsTimelineNg1Component=c},1639:function(e,n,t){"use strict";var i=this&&this.__decorate||function(e,n,t,i){var o,a=arguments.length,c=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,n,t,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(c=(a<3?o(c):a>3?o(n,t,c):o(n,t))||c);return a>3&&c&&Object.defineProperty(n,t,c),c},o=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)};Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),c=t(19),s=t(219),d=t(119),r=t(220),l=t(1638),p=t(221),m=t(222),h=[l.ComponentsTimelineNg1Component],g=[{path:"**",component:r.DocumentationCategoryComponent,data:{category:d.ResolverService.resolveCategoryData(d.DocumentationPage.Components,"Timeline")}}],u=function(){function e(e,n){n.registerResolver(e)}return e}();u=i([a.NgModule({imports:[p.WrappersModule,m.TabsModule,s.DocumentationComponentsModule,c.RouterModule.forChild(g)],exports:h,declarations:h,entryComponents:h}),o("design:paramtypes",[a.ComponentFactoryResolver,d.ResolverService])],u),n.ComponentsTimelineModule=u},1959:function(e,n){e.exports='<uxd-timeline-wrapper></uxd-timeline-wrapper>\n\n<hr>\n\n<p>Timeline is a responsive, data-driven vertical component to tell a story, show history or describe a sequence of events. It is defined within the <code>timeline</code> tags. The tag <code>timeline-event</code> represents each event in a timeline. The circular badge indicating each event is defined using the <code>timeline-badge</code> element.</p>\n\n<p>The <code>timeline-badge</code> can have the <code>class</code> set as any of the following colors:</p>\n\n<p><code>.primary</code> or\n<code>.accent</code> or\n<code>.alternate1</code> or\n<code>.alternate2</code> or\n<code>.alternate3</code> or\n<code>.vibrant1</code> or\n<code>.vibrant2</code> or\n<code>.grey1</code> or\n<code>.grey2</code> or\n<code>.grey3</code> or\n<code>.grey4</code> or\n<code>.grey5</code></p>\n\n<p>The <code>timeline-badge</code> can have the <code>class</code> set as one of the following status colors:</p>\n\n<p><code>.success</code> or\n<code>.warning</code> or\n<code>.critical</code></p>\n\n<p>The contents of the timeline event are defined within the <code>timeline-panel</code> element. The <code>timeline-panel</code> can have an optional element <code>timeline-heading</code> to display a heading for the contents of the timeline panel.</p>\n\n<p>Sample HTML code for the timeline is shown as follows:</p>\n\n<tabset>\n    <tab heading="HTML">\n        <uxd-snippet [code]="htmlCode"></uxd-snippet>\n    </tab>\n    <tab heading="JavaScript">\n        <uxd-snippet language="javascript" [code]="jsCode"></uxd-snippet>\n    </tab>\n</tabset>'},2491:function(e,n){e.exports='<button class="btn button-primary" ng-click="vm.addEvent()">Add New Event</button>\n<br/><br/><br/>\n<timeline>\n    <timeline-event ng-repeat="event in vm.events">\n        <timeline-badge ng-class="event.badgeClass">\n            <span ng-bind="event.badgeTitle"></span>\n        </timeline-badge>\n        <timeline-panel>\n            <timeline-heading>\n                <h4 ng-bind="event.title"></h4>\n                <p ng-if="event.when">\n                    <small class="text-muted"><i class="hpe-icon hpe-document-time"></i> <span ng-bind="event.when"></span></small>\n                </p>\n            </timeline-heading>\n            <p ng-bind="event.content"></p>\n            <span ng-bind-html="event.contentHtml" class="ng-binding ng-scope"></span>\n        </timeline-panel>\n    </timeline-event>\n</timeline>'},2492:function(e,n){e.exports="angular.module(\"app\").controller(\"TimelineCtrl\", TimelineCtrl);\n\nfunction TimelineCtrl() {\n    var vm = this;\n    vm.events = [{\n        badgeClass: 'accent',\n        title: 'First heading',\n        badgeTitle: 'Jan 31',\n        when: 'Jan 31st via Twitter',\n        content: 'This is an accent class.',\n        contentHtml: '<a class=\"hyperlink\" href=\"#/\">Load page</a>',\n    }, {\n        badgeClass: 'success',\n        title: 'Second heading',\n        badgeTitle: 'Jan 30',\n        when: 'Jan 30th via Twitter',\n        content: 'This is a success class.'\n    }, {\n        badgeClass: 'warning',\n        title: 'Third heading',\n        badgeTitle: 'Jan 29',\n        when: 'Jan 29th via Twitter',\n        content: 'This is a warning class.'\n    }, {\n        badgeClass: 'critical',\n        title: 'Fourth heading',\n        badgeTitle: 'Jan 28',\n        when: 'Jan 28th via Twitter',\n        content: 'This is a critical class.'\n    }];\n    vm.index = 0;\n    vm.addEvent = function () {\n        vm.index++;\n        var badgeClass = 'primary';\n        var day = 28;\n        if (vm.index < 28) day = vm.index;\n        var suffix = 'th';\n        if (day === 1 || day === 21) suffix = 'st';\n        if (day === 2 || day === 22) suffix = 'nd';\n        if (day === 3 || day === 23) suffix = 'rd';\n        vm.events.unshift({\n            badgeClass: badgeClass,\n            badgeTitle: 'Feb ' + day,\n            title: 'New Event - ' + vm.index,\n            when: 'Feb ' + day + suffix + ' via Twitter',\n            content: 'Lorem ipsum dolor sit amet, charetra varius quam sit amet vulputate.'\n        });\n    };\n}"}});