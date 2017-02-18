import Ember from 'ember';

export default Ember.Component.extend({
    isExpanded: true,
    actions: {
        toggleLinkSelection() {
            this.toggleProperty('isExpanded');
            this.sendAction('on-links-toggle');
        }
    }
});
