
function bankAccount(name, balance){
    _bankName = "Franklin International bank";

    this.name=name
    this.balance=balance

    if(typeof(name)!="string")
    this.name = "Unknown"

    if(!this.balance >0)
    this.balance = 0
}

bankAccount.prototype.bankName = function(){return _bankName}

bankAccount.prototype.withdraw = function(amount){
    if (amount<=0 | typeof(amount)!="number")
        return "invalid input"
    if(this.balance - amount >= 0)
        return this.balance-=amount;
            else  return "Insuffcient funds"
}

bankAccount.prototype.deposit = function(amount){
    if (amount<=0 | typeof(amount)!="number")
        return "invalid input"
    return this.balance +=amount;
}

bankAccount.prototype.checkBalance = function(){
    return ("Available balance:  " + this.balance)
}

bankAccount.prototype.getLoan = function(amount){
    return "This account type does not have facility for Loan request \t Loan DENIED!!"
}

savingsAccount.prototype = new bankAccount();
savingsAccount.prototype.constructor = savingsAccount;

function savingsAccount(name, balance){
bankAccount.call(this, name, balance);
}

currentAccount.prototype = new bankAccount();
currentAccount.prototype.constructor = currentAccount;
function currentAccount(name, balance){
    bankAccount.call(this, name, balance)
    this.outstandingLoan = 0;
}

currentAccount.prototype.getLoan = function(amount){
    var _loanLimit = 1000000 //1 million
    if (amount<=0 | typeof(amount)!="number")
        return "invalid input"

    if((this.balance >= (amount/2)+this.outstandingLoan) & amount<_loanLimit){
        this.balance -= amount
        this.outstandingLoan +=amount
        return {"Available balance = " :this.balance, "Outstanding loan = " : this.outstandingLoan}
    }
        else
            return "Loan of " + amount + "  denied!!  You did not meet the minimum requirement"
}

currentAccount.prototype.checkBalance = function(){
    return {"Available balance = " :this.balance, "Outstanding loan = " : this.outstandingLoan}
}

module.exports = {
    bankAccount : bankAccount,
    currentAccount : currentAccount,
    savingsAccount : savingsAccount
}

