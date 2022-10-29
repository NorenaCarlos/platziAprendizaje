const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, banana, kiwi, orange, tomato, onion, Apple';
for(const match of fruit.matchAll(regex)){
    console.log(match);
}