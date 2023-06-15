fun main(){
    val products = listOf(
        Product("Pens", 10, 40),
        Product("books", 60, 50),
        Product("Pencils", 20, 30)
    )

    println(calculateTotalValueOfProducts(products))

    val lion = Predator("Lion", "Carnivore", 12, "Stalking")
    lion.hunt()
    lion.migrate()

    val gazelle = Prey("Gazelle", "Herbivore", 10, "Browsing")
    gazelle.graze()
    gazelle.migrate()
    val recipe1 = MoroccanRecipe(
        "Chicken Tagine",
        listOf("chicken", "onion", "garlic", "ginger", "red pepper", "cassava leaves"),
        "1 hour",
        "Stew",
        "400 calories per serving"
    )
    recipe1.displayRecipe()



}


//**Ancestral Stories:** In many African cultures, the art of storytelling is passed
//// down from generation to generation. Imagine you're creating an application that
//// records these oral stories and translates them into different languages. The
//// stories vary by length, moral lessons, and the age group they are intended for.
//// Think about how you would model `Story`, `StoryTeller`, and `Translator`
//// objects, and how inheritance might come into play if there are different types of
//// stories or storytellers.




//Question2
//// **African Cuisine:** You're creating a recipe app specifically for African cuisine.
//// The app needs to handle recipes from different African countries, each with its
//// unique ingredients, preparation time, cooking method, and nutritional
//// information. Consider creating a `Recipe` class, and think about how you might
//// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
//// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
//// methods.

open class Recipe(
    var name: String,
    var country: String,
    var ingredients: List<String>,
    var preparationTime: String,
    var cookingMethod: String,
    var nutrition: String
) {
    open fun displayRecipe() {
        println("$name - $country")
        println("Ingredients: ${ingredients.joinToString(", ")}")
        println("Preparation Time: $preparationTime")
        println("Cooking Method: $cookingMethod")
        println("Nutrition: $nutrition")
    }
}

class MoroccanRecipe(
    name: String,
    ingredients: List<String>,
    preparationTime: String,
    cookingMethod: String,
    nutrition: String
) : Recipe(name, "Morocco", ingredients, preparationTime, cookingMethod, nutrition) {

    var spices: List<String> = listOf("cumin", "coriander", "cinnamon")

    override fun displayRecipe() {
        super.displayRecipe()
        println("Spices: ${spices.joinToString(", ")}")
    }
}

class EthiopianRecipe(
    name: String,
    ingredients: List<String>,
    preparationTime: String,
    cookingMethod: String,
    nutrition: String
) : Recipe(name, "Ethiopia", ingredients, preparationTime, cookingMethod, nutrition) {

    var spices: List<String> = listOf("capsicum", "cardamom", "ginger")

    override fun displayRecipe() {
        super.displayRecipe()
        println("Spices: ${spices.joinToString(", ")}")
    }
}

class NigerianRecipe(
    name: String,
    ingredients: List<String>,
    preparationTime: String,
    cookingMethod: String,
    nutrition: String
) : Recipe(name, "Nigeria", ingredients, preparationTime, cookingMethod, nutrition) {

    var spices: List<String> = listOf("tumeric", "ginger", "black pepper")

    override fun displayRecipe() {
        super.displayRecipe()
        println("Spices: ${spices.joinToString(", ")}")
    }
}




//Question3
// **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to
// create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
// these classes might relate to each other through inheritance.
open class Species(val name: String, val diet: String, val lifespan: Int) {

    fun migrate() {
        println("$name is migrating.")
    }
}

class Predator(name: String, diet: String, lifespan: Int, val huntingMethod: String) : Species(name, diet, lifespan) {

    fun hunt() {
        println("$name is hunting using $huntingMethod.")
    }
}

class Prey(name: String, diet: String, lifespan: Int, val grazingHabit: String) : Species(name, diet, lifespan) {

    fun graze() {
        println("$name is grazing using $grazingHabit.")
    }
}

//Question5
 // Create a class called Product with attributes for name, price, and quantity.
 // Implement a method to calculate the total value of the product (price * quantity).
 // Create multiple objects of the Product class and calculate their total values.

class Product(val name: String, val price: Int, val quantity: Int) {
    fun calculateTotalValue() : Int {
        return price * quantity
    }
}

fun calculateTotalValueOfProducts(products: List<Product>) : Int {
    var totalValue = 0

    for (product in products) {
        totalValue += product.calculateTotalValue()
    }

    return totalValue
}





