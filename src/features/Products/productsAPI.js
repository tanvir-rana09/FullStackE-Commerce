export function fetchAllProducts() {
    return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        resolve({ data });
    });
}
export function fetchProductsByFilter(filter) {
    console.log(filter);
    let newFilter = "";
    for (let key in filter) {
        newFilter += `${key}=${filter[key]}&`;
    }

    return new Promise(async (resolve) => {
        const response = await fetch(
            `http://localhost:3000/products?${newFilter}`
            // "https://dummyjson.com/products/" + newFilter
        );
        const data = await response.json();
        resolve({ data });
    });
}
