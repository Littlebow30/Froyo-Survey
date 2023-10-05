// You notice that Jake made some mistakes when filling out the survey. You talk to Jake and gather the correct information. Modify the following properties in the customer object using bracket notation: 
// email to "Jak3Smith1992@email.com"
// phone to 3195551234
// zipCode to "63132"
// favoriteFlavors to "coffee", "strawberry", and "matcha"

const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
}

customer.email = "Jak3Smith1992@email.com"
customer.phone = 3195551234
customer.zipCode = "63132"
customer.favoriteFlavors = "coffee, strawberry, matcha"

delete customer.zipCode
delete customer.favoriteStore

customer.toppings = "chocolate sprinkles, wafer straws, gummy bears"
customer.futureFlavors = "mango"
customer.todaysPurchaseCost = 5.32

let keys = Object.keys(customer)


console.log(customer)
console.log(keys)