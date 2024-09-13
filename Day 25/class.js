class car {
    constructor(brand, model, year, color){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    getCarinfo (){
        console.log(`${this.brand} ${this.model} ${this.year} - ${this.color}`);
    }

    getCarage(currentYear){
        console.log(`${currentYear - this.year}  Years Old`);
    }
}

let car1 = new car("Toyota", "camry", 2015, "Black");
let car2 = new car("Honda", "civic", 2018, "White");
let car3 = new car("Tesla", "Model S", 2020, "Red");


car1.getCarinfo()
car1.getCarage(2024)

car2.getCarinfo()
car2.getCarage(2024)

car3.getCarinfo()
car3.getCarage(2024)