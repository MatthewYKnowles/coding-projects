import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
<<<<<<< HEAD
  this.route('orgs');
  this.route('org', {path: 'org/:id'}, function() {
    this.route('repos');
    this.route('repo', {path: ':repoId'}, function() {
      this.route('contributors');
      this.route('issues');
    });
  });
  this.route('notfound', {path: '*path'});
=======
  this.route('home');
>>>>>>> 3b102763fa5e22697c8b1216bc85185cdf417f83
});

export default Router;
