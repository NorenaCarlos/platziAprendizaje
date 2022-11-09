import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlAPI){
    const response = await fetch(urlAPI);
    const data = await response.json();
    return data;
}

const anotherFn = async (urlAPI) => {
    try{
        const products = await fetchData(`${urlAPI}/products`);
        const product = await fetchData(`${urlAPI}/products/${products[0].id}`);
        const category = await fetchData(`${urlAPI}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch {
        console.error(error);
    }

}
anotherFn(API);

import fetch from "node-fetch";
async function runcode(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
const fetchData = async (url) => {
    try {
        const products = await runcode(url);
        console.log(products);
    } catch (error) {
        console.error('error');
        if (error.code == 'ERR_INVALID_URL') {
            console.error('Url invalida');
        }
    }
}
fetchData('-----');


export async function runCode(url) {
    try {
     new URL(url);
     const response = await fetch(url);
     return response.json();
    } catch(error) {
      if (error.message === "Failed to construct 'URL': Invalid URL"){
        throw new Error('Invalid URL');
      } else {
        throw new Error('Something was wrong');
      }
    }
  }