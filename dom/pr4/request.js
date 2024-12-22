export async function getProducts() {
    const url = "https://dummyjson.com/products"

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const json = await response.json()
        return json
    } catch (error) {
        console.log(error.message)
    }
}

export async function getProductBySearch(search) {
    const url = `https://dummyjson.com/products/search?q=${search}`

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const json = await response.json()
        return json
    } catch (error) {
        console.log(error.message)
    }
}

export async function getCategories() {
    const url = "https://dummyjson.com/products/categories"

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const json = await response.json()
        return json 
    } catch (error) {
        console.log(error.message);
    }
}

export async function getCategory(category) {
    const url = `https://dummyjson.com/products/category/${category}`

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const json = await response.json()
        return json
    } catch (error) {
        console.log(error.message)
    }
}