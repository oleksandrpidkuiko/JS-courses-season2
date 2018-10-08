'use strict';

let user = {
    name: 'Alex',
    age: '21',
    employment: 'programmer',
    number: '0931011010'
};
Object.defineProperty(user, 'info', {
    get: function() {
        return {
            'name': this.name,
            'age': this.age,
            'employment': this.employment
        }
    }
});
Object.defineProperty(user, 'businessCard', {
    get: function() {
        return new BusinessCard();
    }
});
function BusinessCard(name, employment) {
    this.name = user.name;
    this.employment = user.employment;
}
user.showNumber = function () {
    return this.number;
};
