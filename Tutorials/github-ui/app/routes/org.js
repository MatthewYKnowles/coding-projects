import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return $.get(`https://api.github.com/orgs/${params.id}`).then(rawOrg => {
            rawOrg.oldId = rawOrg.id;
            rawOrg.id = rawOrg.name;
            return rawOrg;
        })
    }
});
