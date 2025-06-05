enum Currency {
    INR = "INR",
    USD = "USD",
    EURO = "EURO",
    DNR = "DNR"
}

enum Category {
    Book = "book",
    Electronics = "electronics",
    Clothing = "clothing"
}

interface IProduct {
    id?: string
    name: string
    description: string
    quantity: string
    category: Category
    isAvailable: boolean
    price: number
    currency: Currency
    createdAt?: Date
    updatedAt?: Date
}

export { Currency, Category, IProduct }