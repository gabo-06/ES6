const frutas = [
    'manzana', 'pepino', 'naranja', 'zandia', 'piña', 'arandano', 'mango'
];

const search = frutas.find(fruta => fruta.length > 7);

console.log(search);