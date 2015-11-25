import {Component, Input, NgModel} from 'angular2/angular2';

@Component({
    selector: 'user',
    template: `
    <input [(ng-model)]="userData.firstName"/>
    <div>{{userData.lastName}}</div>
	`,
  directives: [NgModel]
})
export class User {
	constructor() {}

  @Input() public userData: any;
}
