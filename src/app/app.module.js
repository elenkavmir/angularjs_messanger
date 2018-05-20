import angular from 'angular';

class MainController{
    constructor($scope, $http/*, $state*/){
        //this.$state= $state;
        this.scope=$scope;
        this.http=$http;
        this.scope.Caption = "Hello, man!";
        this.init();
    }
    init(){
        this.http.get("app/assets/json/accounts.json").then(data => alert(data), error => alert(error));
    }
}

MainController.$inject=['$scope'/*,  '$state'*/];

// export {MainController}

angular.module('messangerApp', []).
controller('MainController', MainController).run(function($http){
    $http.get("app/assets/json/accounts.json").then(data => alert(data), error => alert(error));
});

