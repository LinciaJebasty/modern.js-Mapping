//Javascript Map object
const foods = [
    {id: 1, title: 'chicken briyani', dietary: 'non-veg'},
    {id: 2, title: 'sambar', dietary: 'veg'},
    {id: 3, title: 'curd Rice', dietary: 'veg'},
]

//map
const maggiIngredients = new Map()
maggiIngredients.set("water","1.5 Glass Cup")
maggiIngredients.set("Masala",1)
maggiIngredients.set("salt","0.5 Spoon")
//maggiIngredients.set((),'empty obj')
//maggiIngredients.set(function()(),'empty function')
//maggiIngredients.set(NaN,'NaN')

//const myMap = new Map([
//  [1,'One'],
//  [2,'Two']
//])

//console.log(myMap.get(2));

//how to access the map data
//console.log(maggiIngredients.get("salt"));
//how to access map size
//console.log(maggiIngredients.size);

//console.log("Is sugar added?",maggiIngredients .has("sugar"));
//maggiIngredients.clear()

//console.log(maggiIngredients.entries());
//console.log(maggiIngredients.keys());
//console.log(maggiIngredients.values());

//console.log(maggiIngredients);

//maggiIngredients.delete('masala',1)

//displaying map size
//for(let ingredients of maggiIngredients.entries()){
//  console.log(ingredients);
//}
//for(let [KeyName ,valueData] of maggiIngredients.entries()){
//  console.log(KeyName,valueData);
//}

//foreach
//maggiIngredients.forEach(ingredient => {
//  console.log('forEach',ingredient);
//})

//const myEmptyObj ={}
//const exampleMap = new Map();
//exampleMap.set(myEmptyObj,'empty Object')
//exampleMap.set('key','value')

//console.log(exampleMap.get(myEmptyObj));

const myAnotherObj = {}
const myWeakMap = new WeakMap()
myWeakMap.set(myAnotherObj,'Lincia')
console.log(myWeakMap.get(myAnotherObj));











