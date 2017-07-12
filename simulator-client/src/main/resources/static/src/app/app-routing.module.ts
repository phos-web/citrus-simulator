import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {WelcomeComponent} from "./components/welcome/welcome";
import {StatusComponent} from "./components/status/status";
import {ActivityComponent} from "./components/activity/activity";
import {ScenarioExecutionDetailComponent} from "./components/scenarios/execution/scenario-execution-detail";
import {ScenarioComponent} from "./components/scenarios/scenario";
import {ScenarioDetailComponent} from "./components/scenarios/detail/scenario-detail";
import {ScenarioLaunchComponent} from "./components/scenarios/launch/scenario-launch";
import {MessagesComponent} from "./components/messages/messages";
import {MessageDetailComponent} from "./components/messages/detail/message-detail";
import {AboutComponent} from "./components/about/about";
import {HelpComponent} from "./components/help/help";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {environment} from "../environments/environment";

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/welcome'},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'status', component: StatusComponent},
    {
        path: 'activity',
        children: [
            {path: '', component: ActivityComponent},
            {path: ':id', component: ScenarioExecutionDetailComponent},
        ],
    },
    {
        path: 'scenario',
        children: [
            {path: '', component: ScenarioComponent},
            {path: 'detail/:name', component: ScenarioDetailComponent},
            {path: 'launch/:name', component: ScenarioLaunchComponent},
        ],
    },
    {
        path: 'message',
        children: [
            {path: '', component: MessagesComponent},
            {path: ':id', component: MessageDetailComponent},
        ],
    },
    {path: 'help', component: HelpComponent},
    {path: 'about', component: AboutComponent}

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes,  { enableTracing: environment.traceRouting })
    ],
    exports: [RouterModule],
    providers:    [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
})
export class AppRoutingModule {
}

export const routedComponents = [
    WelcomeComponent,
    StatusComponent,
    ActivityComponent,
    ScenarioExecutionDetailComponent,
    ScenarioComponent,
    ScenarioDetailComponent,
    ScenarioLaunchComponent,
    MessagesComponent,
    MessageDetailComponent
];
