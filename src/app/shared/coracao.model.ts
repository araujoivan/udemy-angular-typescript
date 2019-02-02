export default class Coracao {
    
    constructor(
        public cheio: boolean, 
        public urlCoracaoVazio: string = '/assets/coracao_vazio.png',
        public urlCoracaoCheio: string = '/assets/coracao_cheio.png') {}

    public exibeCoracao() : string {
        if(this.cheio) {
            return this.urlCoracaoCheio
        }

        return this.urlCoracaoVazio
    }
    
}
/*
var app = angular.module("paymentApp", ["ngRoute"]);

app.controller('FormController', [
  '$scope',
    function ($scope) {
      
    $scope.paymentForm = {};
    $scope.cardDetails = {
      cardNumber: '',
      nameOnCard: '',
      cvc: '',
      expiryMonth: '',
      expiryYear: ''
    };

    $scope.buttonClicked = false; // state of button click

    $scope.buttonClick = function () {
        
        $scope.buttonClicked = validateAllFieldsBeforeSubmit();
        
        $scope.paymentValidationMessage = $scope.buttonClicked ? 'Payment Successful!' : 'Payment Failed!';
    }
    
    const isNumeric = function(value) {
        return !!value.match(/^[0-9]+(\.?[0-9]+)?$/);
    }
    
    const isLetter = function(value) {
        return !!value.match(/^[a-zA-Z ]+$/);
    }
    
    const validateAllFieldsBeforeSubmit = function() {
        return $scope.validateCVV() &&
               $scope.validateExpYear() &&
               $scope.validateExpMonth() &&
               $scope.validateName() &&
               $scope.validateNumber() &&
               (!!$scope.cardDetails.cvc && $scope.cardDetails.cvc.length == 3) &&
               (!!$scope.cardDetails.expiryYear && $scope.cardDetails.expiryYear.length == 4) &&
               (!!$scope.cardDetails.expiryMonth && $scope.cardDetails.expiryMonth.length == 2) &&
               (!!$scope.cardDetails.cardNumber && $scope.cardDetails.cardNumber.length == 16) &&
               (!!$scope.cardDetails.nameOnCard);
        
    }
    
    $scope.validateCVV = function () {
        if(!!$scope.cardDetails.cvc) {
            return $scope.cardDetails.cvc.length < 4 && isNumeric($scope.cardDetails.cvc);
        }
        return true;
    }

    $scope.validateExpYear = function () {
        if(!!$scope.cardDetails.expiryYear) {
            return $scope.cardDetails.expiryYear.length < 5 && isNumeric($scope.cardDetails.expiryYear);
        }
        return true;
    }
    
    $scope.validateExpMonth = function () {
        if(!!$scope.cardDetails.expiryMonth) {
            return $scope.cardDetails.expiryMonth.length < 3 && isNumeric($scope.cardDetails.expiryMonth);
        }
        return true;
    }
    
    $scope.validateName = function () {
        if(!!$scope.cardDetails.nameOnCard) {
            return isLetter($scope.cardDetails.nameOnCard);
        }
        return true;
    }
    
    $scope.validateNumber = function () {
        if(!!$scope.cardDetails.cardNumber) {
           return $scope.cardDetails.cardNumber.length < 17 && isNumeric($scope.cardDetails.cardNumber);
        }
        return true;
    } 
  }
]);


<!DOCTYPE html>
<html ng-app="paymentApp">
  <head>
    <meta charset="utf-8">
    <base href="/">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="app.css">
    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/angular-route/angular-route.js"></script>

    <title>Payment Validation</title>
  </head>
  <body>
    <div ng-class="{ 'successfully-submitted': buttonClicked }" ng-controller="FormController as frmCtrl">
      <h1 style="text-align:center;">Payment Validation</h1>
      <br />
      <!-- Use angular.js directives in the form below to obtain the necessary functioning -->
      <form novalidate name="paymentForm">
        <div class="form-group" >
          <label for="cardNum">Card Number</label>
          <input type="text" ng-model="cardDetails.cardNumber" name="cardNum" class="form-control" id="card-num" required placeholder="Enter the Card Number">
          <p class="error-message" ng-if="!validateNumber()">Invalid Card Number.</p>
        </div>
        <div class="form-group">
          <label for="cardName">Name on Card</label>
          <input type="text" ng-model="cardDetails.nameOnCard"name="cardName" class="form-control" id="full-name" required placeholder="Enter the name on the card in all caps">
          <p class="error-message" ng-if="!validateName()">Invalid Name.</p>
        </div>
        <div class="row" >
          <div class="form-group expiry col-md-6">
            <label for="cardExp">Expiration</label>
            <br />
            <input type="text" ng-model="cardDetails.expiryMonth" name="cardExpMonth" class="form-control" id="expiry-date-month" required placeholder="mm">
            <input type="text" ng-model="cardDetails.expiryYear" name="cardExpYear" class="form-control" id="expiry-date-year" required placeholder="yy">
            <p class="error-message" ng-if="!validateExpMonth() || !validateExpYear()">Invalid Expiration Date.</p>
          </div>
          <div class="form-group cvc col-md-6">
            <label for="cardCVV">CVV/CVC</label>
            <input type="text" ng-model="cardDetails.cvc" name="cardCVV" class="form-control" id="cvc" placeholder="CVV/CVC Number">
            <p class="error-message" ng-if="!validateCVV()">Invalid CVV Number.</p>
          </div>
        </div>
        <div class="form-group">
            <button type="button" class="btn btn-info" ng-click="buttonClick()">Verify</button>
            <h3 style="text-align:center; font-size:24px; font-weight:bold;">{{paymentValidationMessage}}</h3>
        </div>
      </form>
    </div>
      <script src="app.js"></script>
  </body>
</html>


form {
  width: 60%;
  margin-left: 20%;
  margin-top: 5%;
}

.expiry{
  width: 30%;
  display: inline-block;
}

.cvc {
  width: 30%;
}

.info p {
  text-align: center;
  font-size: 2em;
  margin-top: 20px;
}

input[name="cardExpMonth"], input[name="cardExpYear"] {
  width: 47%;
}

input[name="cardExpMonth"]{
  display: inline;
}

input[name="cardExpYear"]{
  display: inline-block;
}

.message {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}

.error-message {
    color:#bd4040;
    background-color:#efdbdb;
    margin: 0 0 10px;
    display: block;
    height: 40px;
    line-height: 36px;
    padding-left: 10px;
}

.successfully-submitted input {
    border:1px solid green;
}


*/