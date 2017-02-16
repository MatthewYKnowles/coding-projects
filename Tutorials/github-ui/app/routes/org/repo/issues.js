import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        let orgId = Ember.get(this.modelFor('org'), 'login');
        let repoId = Ember.get(this.modelFor('org.repo'), 'name');
        return $.get(`https://api.github.com/orgs/${orgId}/${repoId}/issues`).then(rawRepos => {
            return rawRepos.map(rawRepo => {
                rawRepo.oldId = rawRepo.id;
                rawRepo.id = rawRepo.name;
                return rawRepo;
            })
        });
    }
});
