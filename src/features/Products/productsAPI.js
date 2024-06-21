export function fetchAllProducts() {
    return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        resolve({ data });
    });
}
export function fetchProductsByFilter(filter,sort,pagination) {
    let newFilter = "";
    for (let key in filter) {
        const categoryValue = filter[key]
        if (categoryValue.length) {
            const lastCategoryValue = categoryValue[categoryValue.length-1]
            newFilter += `${key}=${lastCategoryValue}&`;
        }
    }

    for (const key in sort) {
        newFilter += `${key}=${sort[key]}&`;
    }
    for (const key in pagination) {
        newFilter += `${key}=${pagination[key]}&`;
    }
    

    return new Promise(async (resolve) => {
        const response = await fetch(
            `http://localhost:3000/products?${newFilter}`
        );
        const data = await response.json();
        resolve({ data });
    });
}
