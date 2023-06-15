// **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.
// Define the Story object
function Story(title, content, moral, ageGroup) {
    this.title = title;
    this.content = content;
    this.moral = moral;
    this.ageGroup = ageGroup;
  }
  function StoryTeller(name, language) {
    this.name = name;
    this.language = language;
  }
  
  function Translator(name, sourceLanguage, targetLanguage) {
    this.name = name;
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
  }
  
  StoryTeller.tellStory = function(story) {
    console.log(`The story "${story.title}" goes like this:`);
    console.log(story.content);
    console.log(`The moral of the story is: ${story.moral}`);
  }
  
  
  Translator.translateStory = function(story) {
    console.log(`The story "${story.title}" has been translated from ${this.sourceLanguage} to ${this.targetLanguage}`);
  }
  
  
  const africanStory = new Story("The Hare and the Hyena", "Once upon a time...", "Slow and steady wins the race", "Children");
  const story = new StoryTeller("Caren", "Carry");
  const frenchTranslator = new Translator("Jean", "Carry", "French");
  
  story.tellStory(africanStory); 
  frenchTranslator.translateStory(africanStory); 

// Question2
// **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.

class Recipe {
    constructor(name, country, ingredients, preparationTime, cookingMethod, nutrition) {
      this.name = name;
      this.country = country;
      this.ingredients = ingredients;
      this.preparationTime = preparationTime;
      this.cookingMethod = cookingMethod;
      this.nutrition = nutrition;
    }
  
    displayRecipe() {
      console.log(`${this.name} - ${this.country}`);
      console.log(`Ingredients: ${this.ingredients}`);
      console.log(`Preparation Time: ${this.preparationTime}`);
      console.log(`Cooking Method: ${this.cookingMethod}`);
      console.log(`Nutrition: ${this.nutrition}`);
    }
  }
  
  class MoroccanRecipe extends Recipe {
    constructor(name, ingredients, preparationTime, cookingMethod, nutrition) {
      super(name, 'Morocco', ingredients, preparationTime, cookingMethod, nutrition);
      this.spices = ['cumin', 'coriander', 'cinnamon'];
    }
    
    displayRecipe() {
      super.displayRecipe();
      console.log(`Spices: ${this.spices}`);
    }
  }
  
  class EthiopianRecipe extends Recipe {
    constructor(name, ingredients, preparationTime, cookingMethod, nutrition) {
      super(name, 'Ethiopia', ingredients, preparationTime, cookingMethod, nutrition);
      this.spices = ['capsicum', 'cardamom', 'ginger'];
    }
    
    displayRecipe() {
      super.displayRecipe();
      console.log(`Spices: ${this.spices}`);
    }
  }
  
  class NigerianRecipe extends Recipe {
    constructor(name, ingredients, preparationTime, cookingMethod, nutrition) {
      super(name, 'Nigeria', ingredients, preparationTime, cookingMethod, nutrition);
      this.spices = ['tumeric', 'ginger', 'black pepper'];
    }
    
    displayRecipe() {
      super.displayRecipe();
      console.log(`Spices: ${this.spices}`);
    }
  }
  
  const recipe1 = new MoroccanRecipe(
    'Chicken Tagine',
    ['chicken', 'onion', 'garlic', 'ginger', 'red pepper', 'cassava leaves'],
    '1 hour',
    'Stew',
    '400 calories per serving'
  );
  recipe1.displayRecipe();
  
  const recipe2 = new EthiopianRecipe(
    'Injera Bread',
    ['wheat flour', 'water', 'yeast'],)
   
  
//Question3
// **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to
// create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
// these classes might relate to each other through inheritance.

class Species {
    constructor(name, diet, lifespan) {
      this.name = name;
      this.diet = diet;
      this.lifespan = lifespan;
    }
  
    migrate() {
      console.log(`${this.name} is migrating.`);
    }
  }
  
  class Predator extends Species {
    constructor(name, diet, lifespan, huntingMethod) {
      super(name, diet, lifespan);
      this.huntingMethod = huntingMethod;
    }
  
    hunt() {
      console.log(`${this.name} is hunting using ${this.huntingMethod}.`);
    }
  }
  
  class Prey extends Species {
    constructor(name, diet, lifespan, grazingHabit) {
      super(name, diet, lifespan);
      this.grazingHabit = grazingHabit;
    }
  
    graze() {
      console.log(`${this.name} is grazing using ${this.grazingHabit}.`);
    }
  }
  
  
  const lion = new Predator("Lion", "Carnivore", 12, "Stalking");
  lion.hunt(); 
  lion.migrate(); 
  
  const gazelle = new Prey("Gazelle", "Herbivore", 10, "Browsing");
  gazelle.graze(); 
  gazelle.migrate(); 
  





//Question4
// **African Music Festival:** You're in charge of organizing a Pan-African music
// festival. Many artists from different countries, each with their own musical style
// and instruments, are scheduled to perform. You need to write a program to
// manage the festival lineup, schedule, and stage arrangements. Think about how
// you might model the `Artist`, `Performance`, and `Stage` classes, and consider
// how you might use inheritance if there are different types of performances or
// stages.
// Artist class represents a musician or band


  








//Question5
// Create a class called Product with attributes for name, price, and quantity.
// Implement a method to calculate the total value of the product (price * quantity).
// Create multiple objects of the Product class and calculate their total values.

class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    calculateTotalValue() {
      return this.price * this.quantity;
    }
  }
  
  function calculateTotalValueOfProducts(products) {
    let totalValue = 0;
  
    for (const product of products) {
      totalValue += product.calculateTotalValue();
    }
  
    return totalValue;
  }
  
  // Example usage
  const products = [
    new Product('Pens', 10, 40),
    new Product('books', 60, 50),
    new Product('Pencils', 20, 30)
  ];
  
  console.log(calculateTotalValueOfProducts(products)); 
  





//Question6
// Implement a class called Student with attributes for name, age, and grades (a
// list of integers). Include methods to calculate the average grade, display the
// student information, and determine if the student has passed (average grade >=
// 60). Create objects for the Student class and demonstrate the usage of these
// methods.

class Student {
    constructor(name, age, grades) {
      this.name = name;
      this.age = age;
      this.grades = grades;
    }
  
    calculateAverageGrade() {
      const sum = this.grades.reduce((total, grade) => total + grade, 0);
      return sum / this.grades.length;
    }
  
    displayInfo() {
      console.log(`Name: ${this.name}\nAge: ${this.age}\nGrades: ${this.grades.join(', ')}`);
    }
  
    hasPassed() {
      return this.calculateAverageGrade() >= 60;
    }
  }
  
  const student1 = new Student("Cathy", 20, [80, 85, 90]);
  student1.displayInfo();
  console.log(`Average grade: ${student1.calculateAverageGrade()}`);
  console.log(`Pass status: ${student1.hasPassed() ? "pass" : "fail"}`);

 





//Question7
// Create a FlightBooking class that represents a flight booking system. Implement
// methods to search for available flights based on destination and date, reserve
// seats for customers, manage passenger information, and generate booking
// confirmations.
class FlightBooking {
    constructor() {
      this.flights = [];
      this.bookings = [];
    }
  
    addFlight(flight) {
      this.flights.push(flight);
    }
  
    searchFlights(destination, date) {
      return this.flights.filter((flight) => {
        return flight.destination === destination && flight.date === date && !flight.isFull();
      });
    }
  
    reserveSeat(flight, passengerInfo) {
      if (flight.isFull()) {
        return false;
      }
      let booking = { flight: flight, passengerInfo: passengerInfo };
      this.bookings.push(booking);
      flight.addPassenger(passengerInfo);
      return true;
    }
  
    getBookingConfirmation(booking) {
      let flight = booking.flight;
      let passenger = booking.passengerInfo;
      return `Booking confirmation for ${passenger.name} on flight ${flight.number} to ${flight.destination} on ${flight.date}`;
    }
  
    updatePassengerInfo(booking, passengerInfo) {
      booking.passengerInfo = passengerInfo;
      booking.flight.updatePassengerInfo(passengerInfo);
    }
  }
  
  class Flight {
    constructor(number, destination, date, capacity) {
      this.number = number;
      this.destination = destination;
      this.date = date;
      this.capacity = capacity;
      this.passengers = [];
    }
  
    isFull() {
      return this.passengers.length === this.capacity;
    }
  
    addPassenger(passengerInfo) {
      this.passengers.push(passengerInfo);
    }
  
    updatePassengerInfo(passengerInfo) {
      let index = this.passengers.findIndex(p => p.name === passengerInfo.name);
      if (index !== -1) {
        this.passengers[index] = passengerInfo;
        return true;
      }
      return false;
    }
  }
  



//Question8
// Create a LibraryCatalog class that handles the cataloging and management of
// books in a library. Implement methods to add new books, search for books by
// title or author, keep track of available copies, and display book details.
class Book {
    constructor(title, author, numCopies) {
      this.title = title;
      this.author = author;
      this.numCopies = numCopies;
    }
  
    getTitle() {
      return this.title;
    }
  
    getAuthor() {
      return this.author;
    }
  
    getNumCopies() {
      return this.numCopies;
    }
  
    setNumCopies(newNum) {
      this.numCopies = newNum;
    }
  }
  
  class LibraryCatalog {
    constructor(books) {
      this.books = books;
    }
  
    addBook(title, author, numCopies) {
      const newBook = new Book(title, author, numCopies);
      this.books.push(newBook);
    }
  
    findBook(title) {
      for (let book of this.books) {
        if (book.getTitle() === title) {
          return book;
        }
      }
      return null;
    }
  
    findBooksByAuthor(author) {
      const matchingBooks = [];
      for (let book of this.books) {
        if (book.getAuthor() === author) {
          matchingBooks.push(book);
        }
      }
      return matchingBooks;
    }
  
    checkout(title) {
      const book = this.findBook(title);
      if (book.getNumCopies() === 0) {
        console.log("Sorry, all copies of this book are checked out.");
        return;
      }
      book.setNumCopies(book.getNumCopies() - 1);
      console.log("Book checked out successfully.");
    }
  
    returnBook(title) {
      const book = this.findBook(title);
      book.setNumCopies(book.getNumCopies() + 1);
      console.log("Book returned successfully.");
    }
  
    displayAllBooks() {
      for (let book of this.books) {
        console.log(`Title: ${book.getTitle()}, Author: ${book.getAuthor()}, Copies Available: ${book.getNumCopies()}`);
      }
    }
  }
  
  
  const book1 = new Book("A Doll's House", "F. Scott Fitzgerald", 5);
  const book2 = new Book("Blossoms of the Savannah", "Ole Kulet", 3);
  const book3 = new Book("1984", "George Orwell", 2);
  
  const library = new LibraryCatalog([book1, book2, book3]);
  
  