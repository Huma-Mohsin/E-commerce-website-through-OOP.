// Creating an E-commerce website using OOP concepts.
// This project involves designing classes that represent different functionalities in their own domain.
// Example:
// Consider Naheed website that sells various products in different categories. We can make classes for these categories.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(id, name, description, price, stock) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }
    Product.prototype.updateStock = function (quantity) {
        // Method names should be in camelCase.
        this.stock -= quantity;
        console.log("Stock remains= ".concat(this.stock));
    };
    Product.prototype.displayProduct = function () {
        console.log("Name: ".concat(this.name, "\nDescription: ").concat(this.description));
    };
    return Product;
}());
var Groceries = /** @class */ (function (_super) {
    __extends(Groceries, _super);
    function Groceries(id, name, description, price, stock, weight, expiryDate) {
        var _this = _super.call(this, id, name, description, price, stock) || this;
        _this.weight = weight;
        _this.expiryDate = expiryDate;
        return _this;
    }
    Groceries.prototype.displayGroceries = function () {
        _super.prototype.displayProduct.call(this);
        console.log("Weight: ".concat(this.weight, "g"));
        console.log("Expiry Date of ".concat(this.name, " is ").concat(this.expiryDate));
    };
    return Groceries;
}(Product));
var HealthAndBeauty = /** @class */ (function (_super) {
    __extends(HealthAndBeauty, _super);
    function HealthAndBeauty(id, name, description, price, stock, origin, company, availability, size) {
        var _this = _super.call(this, id, name, description, price, stock) || this;
        _this.origin = origin;
        _this.company = company;
        _this.availability = availability;
        _this.size = size;
        return _this;
    }
    HealthAndBeauty.prototype.displayHealthAndBeauty = function () {
        _super.prototype.displayProduct.call(this);
        console.log("Origin: ".concat(this.origin));
        console.log("Company: ".concat(this.company));
        console.log("Availability: ".concat(this.availability));
        console.log("Size: ".concat(this.size));
    };
    return HealthAndBeauty;
}(Product));
var ElectronicsAppliances = /** @class */ (function (_super) {
    __extends(ElectronicsAppliances, _super);
    function ElectronicsAppliances(id, name, description, price, stock, origin, company, availability, size, warranty) {
        var _this = _super.call(this, id, name, description, price, stock, origin, company, availability, size) || this;
        _this.warranty = warranty;
        return _this;
    }
    ElectronicsAppliances.prototype.displayElectronicsAppliances = function () {
        _super.prototype.displayHealthAndBeauty.call(this);
        console.log("Warranty: ".concat(this.warranty, " years"));
    };
    return ElectronicsAppliances;
}(HealthAndBeauty));
var Books = /** @class */ (function (_super) {
    __extends(Books, _super);
    function Books(id, name, description, price, stock, publishedYear, author) {
        var _this = _super.call(this, id, name, description, price, stock) || this;
        _this.author = author;
        _this.publishedYear = publishedYear;
        return _this;
    }
    Books.prototype.displayBooks = function () {
        _super.prototype.displayProduct.call(this);
        console.log("Published Year: ".concat(this.publishedYear, "\nAuthor: ").concat(this.author));
    };
    return Books;
}(Product));
var MedicalAndNutrition = /** @class */ (function (_super) {
    __extends(MedicalAndNutrition, _super);
    // Additional properties can be added here if necessary
    function MedicalAndNutrition(id, name, description, price, stock, origin, company, availability, size) {
        return _super.call(this, id, name, description, price, stock, origin, company, availability, size) || this;
    }
    MedicalAndNutrition.prototype.displayMedicalAndNutrition = function () {
        _super.prototype.displayHealthAndBeauty.call(this);
    };
    return MedicalAndNutrition;
}(HealthAndBeauty));
// Creating instances of each class.
// 1-
var laptop = new Product(123, "Dell", "Core i5", 165000, 30);
console.log(laptop);
laptop.updateStock(1);
// 2-
var mobile = new Product(897, "Samsung", "Galaxy A55 5G", 165000, 8);
console.log(mobile);
mobile.updateStock(3);
//---------------------------------------------------------------------------------
// 1-
var milk = new Groceries(101, "Milk", "Fresh cow milk", 50, 100, 1000, "2024-06-30");
console.log(milk);
milk.displayProduct();
milk.updateStock(10);
milk.displayGroceries();
// 2- 
var frozen = new Groceries(108, "Vaula", "Vaula With Chicken Fillings", 785, 30, 98, "2024-08-30");
console.log(frozen);
frozen.displayProduct();
frozen.updateStock(2);
frozen.displayGroceries();
//----------------------------------------------------------------------------------------
// 1-
var shampoo = new HealthAndBeauty(201, "Shampoo", "Hair care product", 2000, 50, "USA", "Loreal", true, "500ml");
console.log(shampoo);
shampoo.displayProduct();
shampoo.updateStock(5);
shampoo.displayHealthAndBeauty();
// 2-
var menPerfume = new HealthAndBeauty(280, "Perfume", "Fragrance By J.", 6500, 15, "UAE", "Janan-Gold Edition", true, "100ml");
console.log(menPerfume);
menPerfume.displayProduct();
menPerfume.updateStock(10);
menPerfume.displayHealthAndBeauty();
//-----------------------------------------------------------------------------------------------
// 1-
var fridge = new ElectronicsAppliances(301, "Fridge", "Double door fridge UE90-A", 150000, 20, "Germany", "Bosch", true, "300L", 2);
console.log(fridge);
fridge.displayProduct();
fridge.updateStock(2);
fridge.displayElectronicsAppliances();
// 2-
var coffeeMachine = new ElectronicsAppliances(450, "Mini Coffee Machine", "Pod Coffee Maker EN85-B", 65000, 10, "United Kingdom", "Nespresso Essenza Mini Coffee Machine", true, "300L", 2);
console.log(coffeeMachine);
coffeeMachine.displayProduct();
coffeeMachine.updateStock(4);
coffeeMachine.displayElectronicsAppliances();
//----------------------------------------------------------------------------------------------------
// 1-
var pgbook = new Books(401, "JavaScript Basics", "A beginner's guide", 1000, 100, "2023", " Brendan Eich");
console.log(pgbook);
pgbook.updateStock(3);
pgbook.displayBooks();
// 2- 
var islamicbook = new Books(485, "5 Stories Of The Prophets", "Kids Stories", 985, 50, "2024", "Paramount Books (Pvt.) Ltd.");
console.log(islamicbook);
islamicbook.updateStock(5);
islamicbook.displayBooks();
//---------------------------------------------------------------------------------------------------
// 1-
var vitamins = new MedicalAndNutrition(501, "Vitamins", "Essential daily vitamins", 4500, 75, "USA", "Nutrilife", true, "100 tablets");
console.log(vitamins);
vitamins.updateStock(5);
vitamins.displayMedicalAndNutrition();
// 2-
var supplements = new MedicalAndNutrition(1001, "Ensure", "Chocolate flavoured Nutritional Supplement", 5000, 25, "Netherlands", "Abbot", true, "850g");
console.log(supplements);
supplements.updateStock(4);
supplements.displayMedicalAndNutrition();
//Author-Huma MOhsin
