import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        error(jqxhr){
            if (jqxhr.status === 404) {
                this.intermediateTransitionTo('org.notfound');
            }
            else {
                return true;
            }
        }
    },
    model(params) {
        return $.get(`https://api.github.com/orgs/${params.id}`).then(rawOrg => {
            rawOrg.oldId = rawOrg.id;
            rawOrg.id = rawOrg.name;
            return rawOrg;
        })
    }
});
