export class User {
    /*getUsers = () => {
        return [{
            userId: '101',
            name: 'Hardik Kaji',
            city: 'Surat'
        }, {
            userId: '102',
            name: 'Dhaval Patel',
            city: 'Ahmedabad'
        }];
    }*/

    getUsers() {
        $http.get("app/assets/json/accounts.json").then(data => alert(data), error => alert(error));
    }
};