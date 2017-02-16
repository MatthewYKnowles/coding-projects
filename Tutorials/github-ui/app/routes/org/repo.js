import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        let org = this.modelFor('org');
        return $.get(`http://api.github.com/repos/${org.id}/${params.repoId}/contributors`).then(rawOrg => {
            rawOrg.oldId = rawOrg.id;
            rawOrg.id = rawOrg.name;
            return rawOrg;
        })
    }
});
