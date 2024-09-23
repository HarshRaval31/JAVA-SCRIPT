class Accountclass {

        constructor( accountNumber,accountHolder,balance){
            this.accountNumber = accountNumber;
            this.accountHolder = accountHolder;
            this.balance = balance
        }

        checkBalance (){
            return this.balance
        }
        deposit(amount) {
            return this.balance += amount
        }
        withdraw(amount) {
            if(this.balance > amount){
                return this.balance -= amount 
            }
            else{
                return "Insufficient balance"
            }
        }
}


let h = new Accountclass(31093109, "Harsh", 500)
console.log(h);

console.log(h.checkBalance())
console.log(h.deposit(500))
console.log(h.withdraw(500))



    class ATM extends Accountclass{
        constructor(accountNumber,accountHolder,balance){
            super(accountNumber,accountHolder,balance)
        }
        displayOptions(){
            console.log("Press 1 Check Balance")
            console.log("Press 2 Deposit")
            console.log("Press 3 Check Withdraw")
        }
        performOperation(operation, amount){
            if(operation == 1){
                console.log(this.balance)
            }
            if(operation == 2){
                console.log(h.deposit(amount))
            }
            if(operation == 3){
                console.log(h.withdraw(amount))
            }
        }
    }

    let H = new ATM (31093109, "Piyushbhai Raval", 500)

    console.log(H)

    H.displayOptions()
    H.performOperation(3, 500)