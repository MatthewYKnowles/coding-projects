import Ember from 'ember';

export default Ember.Service.extend({
    items: [],
    favoriteItem(item) {
        this.get('items').addObject(item);
    },
    unfavoriteItem(item) {
        this.get('items').removeObject(item);
    }
});
