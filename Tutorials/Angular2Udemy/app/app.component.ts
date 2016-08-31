import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";
import {AuthorComponent} from "./author.component";
import {FavoriteComponent} from "./favorite.component"

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular</h1>
               <courses></courses>
               <authors></authors>
               <favorite></favorite>`,
    directives: [CoursesComponent, AuthorComponent, FavoriteComponent]
})
export class AppComponent { }