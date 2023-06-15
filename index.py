


# // Question2
# // **African Cuisine:** You're creating a recipe app specifically for African cuisine.
# // The app needs to handle recipes from different African countries, each with its
# // unique ingredients, preparation time, cooking method, and nutritional
# // information. Consider creating a `Recipe` class, and think about how you might
# // create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
# // `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
# // methods.

class Recipe:
    def __init__(self, name, country, ingredients, preparationTime, cookingMethod, nutrition):
        self.name = name
        self.country = country
        self.ingredients = ingredients
        self.preparationTime = preparationTime
        self.cookingMethod = cookingMethod
        self.nutrition = nutrition

    def displayRecipe(self):
        print(f"{self.name} - {self.country}")
        print(f"Ingredients: {self.ingredients}")
        print(f"Preparation Time: {self.preparationTime}")
        print(f"Cooking Method: {self.cookingMethod}")
        print(f"Nutrition: {self.nutrition}")
        
class MoroccanRecipe(Recipe):
    def __init__(self, name, ingredients, preparationTime, cookingMethod, nutrition):
        super().__init__(name, 'Morocco', ingredients, preparationTime, cookingMethod, nutrition)
        self.spices = ['cumin', 'coriander', 'cinnamon']
    
    def displayRecipe(self):
        super().displayRecipe()
        print(f"Spices: {self.spices}")
        
class EthiopianRecipe(Recipe):
    def __init__(self, name, ingredients, preparationTime, cookingMethod, nutrition):
        super().__init__(name, 'Ethiopia', ingredients, preparationTime, cookingMethod, nutrition)
        self.spices = ['capsicum', 'cardamom', 'ginger']
    
    def displayRecipe(self):
        super().displayRecipe()
        print(f"Spices: {self.spices}")
        
class NigerianRecipe(Recipe):
    def __init__(self, name, ingredients, preparationTime, cookingMethod, nutrition):
        super().__init__(name, 'Nigeria', ingredients, preparationTime, cookingMethod, nutrition)
        self.spices = ['tumeric', 'ginger', 'black pepper']
    
    def displayRecipe(self):
        super().displayRecipe()
        print(f"Spices: {self.spices}")

recipe1 = MoroccanRecipe(
    'Chicken Tagine',
    ['chicken', 'onion', 'garlic', 'ginger', 'red pepper', 'cassava leaves'],
    '1 hour',
    'Stew',
    '400 calories per serving'
)
recipe1.displayRecipe()

recipe2 = EthiopianRecipe(
    'Injera Bread',
    'wheat flour', 'water')





# Question3
# // **Wildlife Preservation:** You're a wildlife conservationist working on a
# // program to track different species in a national park. Each species has its own
# // characteristics and behaviors, such as its diet, typical lifespan, migration
# // patterns, etc. Some species might be predators, others prey. You'll need to
# // create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
# // these classes might relate to each other through inheritance.

# class Species: 
#     def init(self, name, diet, lifespan): 
#         self.name = name 
#         self.diet = diet 
#         self.lifespan = lifespan

# def migrate(self):
#     print(f"{self.name} is migrating.")
# class Predator(Species): 
#     def init(self, name, diet, lifespan, huntingMethod): 
#         super().init(name, diet, lifespan) 
#         self.huntingMethod = huntingMethod

# def hunt(self):
#     print(f"{self.name} is hunting using {self.huntingMethod}.")
# class Prey(Species): 
#     def init(self, name, diet, lifespan, grazingHabit): 
#         super().init(name, diet, lifespan) 
#         self.grazingHabit = grazingHabit

# def graze(self):
#     print(f"{self.name} is grazing using {self.grazingHabit}.")
# lion = Predator("Lion", "Carnivore", 12, "Stalking")
# lion.hunt()
# lion.migrate()

# gazelle = Prey("Gazelle", "Herbivore", 10, "Browsing") 
# gazelle.graze()
# gazelle.migrate()

# //Question5
# // Create a class called Product with attributes for name, price, and quantity.
# // Implement a method to calculate the total value of the product (price * quantity).
# // Create multiple objects of the Product class and calculate their total values.


class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def calculate_total_value(self):
        return self.price * self.quantity


def calculate_total_value_of_products(products):
    total_value = 0

    for product in products:
        total_value += product.calculate_total_value()

    return total_value



products = [
    Product('Pens', 10, 40),
    Product('books', 60, 50),
    Product('Pencils', 20, 30)
]

print(calculate_total_value_of_products(products))






