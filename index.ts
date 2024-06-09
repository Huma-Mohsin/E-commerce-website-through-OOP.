// Creating an E-commerce website using OOP concepts.
// This project involves designing classes that represent different functionalities in their own domain.
// Example:
// Consider Naheed website that sells various products in different categories. We can make classes for these categories.

class Product {//classes name should be Pascal's case, consider it a parent class.
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;

    constructor(id: number, name: string, description: string, price: number, stock: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }

    updateStock(quantity: number) { // Functions inside a class are called methods and they describe the behavior of the class.
        // Method names should be in camelCase.
        this.stock -= quantity;
        console.log(`Stock remains= ${this.stock}`);
    }

    displayProduct() {
        console.log(`Name: ${this.name}\nDescription: ${this.description}`);
    }
}

class Groceries extends Product {
    weight: number;
    expiryDate: string;

    constructor(id: number, name: string, description: string, price: number, stock: number, weight: number, expiryDate: string) {
        super(id, name, description, price, stock);
        this.weight = weight;
        this.expiryDate = expiryDate;
    }

    displayGroceries() {
        super.displayProduct();
        console.log(`Weight: ${this.weight}g`);
        console.log(`Expiry Date of ${this.name} is ${this.expiryDate}`);
    }
}

class HealthAndBeauty extends Product {
    origin: string;
    company: string;
    availability: boolean;
    size: string;

    constructor(id: number, name: string, description: string, price: number, stock: number, origin: string, company: string, availability: boolean, size: string) {
        super(id, name, description, price, stock);
        this.origin = origin;
        this.company = company;
        this.availability = availability;
        this.size = size;
    }

    displayHealthAndBeauty() {
        super.displayProduct();
        console.log(`Origin: ${this.origin}`);
        console.log(`Company: ${this.company}`);
        console.log(`Availability: ${this.availability}`);
        console.log(`Size: ${this.size}`);
    }
}

class ElectronicsAppliances extends HealthAndBeauty {
    // The Product class is not directly inherited by the ElectronicsAppliances class. 
    // The ElectronicsAppliances class only inherits from the HealthAndBeauty class. 
    // However, since HealthAndBeauty itself extends the Product class, indirectly, the ElectronicsAppliances class 
    // also inherits the properties and methods of the Product class through the HealthAndBeauty class.
    // So, in a way, the Product class is indirectly inherited by the ElectronicsAppliances class through the inheritance chain.
    warranty: number;

    constructor(id: number, name: string, description: string, price: number, stock: number, origin: string, company: string, availability: boolean, size: string, warranty: number) {
        super(id, name, description, price, stock, origin, company, availability, size);
        this.warranty = warranty;
    }

    displayElectronicsAppliances() {
        super.displayHealthAndBeauty();
        console.log(`Warranty: ${this.warranty} years`);
    }
}

class Books extends Product {
    author: string;
    publishedYear: string;

    constructor(id: number, name: string, description: string, price: number, stock: number, publishedYear: string, author: string) {
        super(id, name, description, price, stock);
        this.author = author;
        this.publishedYear = publishedYear;
    }

    displayBooks() {
        super.displayProduct();
        console.log(`Published Year: ${this.publishedYear}\nAuthor: ${this.author}`);
    }
}

class MedicalAndNutrition extends HealthAndBeauty {
    // Additional properties can be added here if necessary

    constructor(id: number, name: string, description: string, price: number, stock: number, origin: string, company: string, availability: boolean, size: string) {
        super(id, name, description, price, stock, origin, company, availability, size);
    }

    displayMedicalAndNutrition() {
        super.displayHealthAndBeauty();
    }
}

// Creating instances of each class.
// 1-
let laptop = new Product(123, "Dell", "Core i5", 165000, 30);
console.log(laptop);
laptop.updateStock(1);

// 2-
let mobile = new Product(897, "Samsung", "Galaxy A55 5G", 165000, 8);
console.log(mobile);
mobile.updateStock(3);

//---------------------------------------------------------------------------------
// 1-
let milk = new Groceries(101, "Milk", "Fresh cow milk", 50, 100, 1000, "2024-06-30");
console.log(milk);
milk.displayProduct();
milk.updateStock(10);
milk.displayGroceries();

// 2- 
let frozen = new Groceries(108, "Vaula", "Vaula With Chicken Fillings", 785, 30, 98, "2024-08-30");
console.log(frozen);
frozen.displayProduct();
frozen.updateStock(2);
frozen.displayGroceries();

//----------------------------------------------------------------------------------------
// 1-
let shampoo = new HealthAndBeauty(201, "Shampoo", "Hair care product", 2000, 50, "USA", "Loreal", true, "500ml");
console.log(shampoo);
shampoo.displayProduct();
shampoo.updateStock(5);
shampoo.displayHealthAndBeauty();

// 2-
let menPerfume = new HealthAndBeauty(280, "Perfume", "Fragrance By J.", 6500, 15, "UAE", "Janan-Gold Edition", true, "100ml");
console.log(menPerfume);
menPerfume.displayProduct();
menPerfume.updateStock(10);
menPerfume.displayHealthAndBeauty();

//-----------------------------------------------------------------------------------------------
// 1-
let fridge = new ElectronicsAppliances(301, "Fridge", "Double door fridge UE90-A", 150000, 20, "Germany", "Bosch", true, "300L", 2);
console.log(fridge);
fridge.displayProduct();
fridge.updateStock(2);
fridge.displayElectronicsAppliances();

// 2-
let coffeeMachine = new ElectronicsAppliances(450, "Mini Coffee Machine", "Pod Coffee Maker EN85-B", 65000, 10, "United Kingdom", "Nespresso Essenza Mini Coffee Machine", true, "300L", 2);
console.log(coffeeMachine);
coffeeMachine.displayProduct();
coffeeMachine.updateStock(4);
coffeeMachine.displayElectronicsAppliances();

//----------------------------------------------------------------------------------------------------
// 1-
let pgbook = new Books(401, "JavaScript Basics", "A beginner's guide", 1000, 100, "2023", " Brendan Eich");
console.log(pgbook);
pgbook.updateStock(3);
pgbook.displayBooks();

// 2- 
let islamicbook = new Books(485, "5 Stories Of The Prophets", "Kids Stories", 985, 50, "2024", "Paramount Books (Pvt.) Ltd.");
console.log(islamicbook);
islamicbook.updateStock(5);
islamicbook.displayBooks();

//---------------------------------------------------------------------------------------------------
// 1-
let vitamins = new MedicalAndNutrition(501, "Vitamins", "Essential daily vitamins", 4500, 75, "USA", "Nutrilife", true, "100 tablets");
console.log(vitamins);
vitamins.updateStock(5);
vitamins.displayMedicalAndNutrition();

// 2-
let supplements = new MedicalAndNutrition(1001, "Ensure", "Chocolate flavoured Nutritional Supplement", 5000, 25, "Netherlands", "Abbot", true, "850g");
console.log(supplements);
supplements.updateStock(4);
supplements.displayMedicalAndNutrition();
//Author-Huma MOhsin
