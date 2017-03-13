(function(){

    var myApp = require('../App/library.js');

  'use strict';
describe("BankAccount Class: Create a Bank Account with a given name and an opening balance", function() {

    it("The BankAccount should be a type of `object`, and an instance of the `BankAccount` class", function() {      
      var myAcct = new myApp.bankAccount("Ajaps Franklin" , 1000);
      expect(typeof myAcct).toEqual(typeof {});
      expect(myAcct instanceof myApp.bankAccount).toBeTruthy();
    });

    it("The Bank Account should be called 'Unknown' and balance 0. if no parameters are passed", function() {
      var yourAcct = new myApp.bankAccount();
      expect(yourAcct.name).toEqual('Unknown');
      expect(yourAcct.balance).toEqual(0);
    });

    it("The Bank Account opening balance should be 0, if only 1 parameter is passed", function() {
      var yourAcct = new myApp.bankAccount("Tunde");
      expect(yourAcct.name).toEqual('Tunde');
      expect(yourAcct.balance).toEqual(0);
    });

    it("The BankAccount name and balance should be a property of the BankAccount", function() {
      var myBankAcct  = new myApp.bankAccount('Tunde Abiola', 1000);
      expect(myBankAcct.name).toBe('Tunde Abiola');
      expect(myBankAcct.balance).toEqual(1000);
    });

  });


  describe("SavingAccount Class: Inherit a BankAccount Class with a given name and an opening balance", function() {
/*
        it("should return 'This account type does not have facility for Loan request \t Loan DENIED!!' if the getLoan method is called", function() {      
        var mySAcct = new myApp.savingsAccount("Ajaps Franklin" , 1000);
        expect(mySAcct.getLoan(100)).toBe("This account type does not have facility for Loan request \t Loan DENIED!!");
        });
*/
        it("The Bank Account opening balance should be 0, if only 1 parameter is passed", function() {
        var yourAcct = new myApp.savingsAccount("Tunde");
        expect(yourAcct.name).toEqual('Tunde');
        expect(yourAcct.balance).toEqual(0);
        });

        it("The Balance to be 100 and 3000 after making a withdrawal of 900 and a deposit of 2900 ", function() {
        var yourAcct = new myApp.savingsAccount("Tunde", 1000);
        expect(yourAcct.withdraw(900)).toEqual(100);
        expect(yourAcct.deposit(2900)).toEqual(3000);
        });

        it("The return 'Insuffcient funds' if requested amount is more than available balance ", function() {
        var yourAcct = new myApp.savingsAccount("Tunde", 1000);
        expect(yourAcct.withdraw(1001)).toEqual("Insuffcient funds");
        });
    });

     describe("CurrentAccount Class: Inherit a BankAccount Class with a given name and an opening balance", function() {

        it("The Balance to be 100 and 3000 after making a withdrawal of 900 and a deposit of 2900 ", function() {
        var yourCAcct = new myApp.currentAccount("Tunde", 1000);
        expect(yourCAcct.withdraw(900)).toEqual(100);
        expect(yourCAcct.deposit(2900)).toEqual(3000);
        });

        it("The return 'Insuffcient funds' if requested amount is more than available balance ", function() {
        var yourCAcct = new myApp.currentAccount("Tunde", 1000);
        expect(yourCAcct.withdraw(1001)).toEqual("Insuffcient funds");
        });
    });
})();