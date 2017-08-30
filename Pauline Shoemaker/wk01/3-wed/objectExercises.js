// console.log('working?');


var favRecipe = {
    title: 'Guacamole',
    servings: 3,
    ingredients: ['avacado','lemon','salt','onion']
};

//cmd-shift-L multiline shortcut

console.log(favRecipe.title);
console.log("Serves: "+ favRecipe.servings);
console.log("Ingredients: ");
for (var i = 0; i < favRecipe.ingredients.length; i++){
    console.log((i+ 1) + "- " + favRecipe.ingredients[i]);
}

var books = [
    {
        title:'The Sun also Rises',
        author:'Ernest Hemingway',
        alreadyRead: true,
    },
    {
        title:'Homegoing',
        author:'Yaa Gyasi',
        alreadyRead: true,
    },
    {
        title:'Americanah',
        author:'Chimamanda Ngozi Adichie',
        alreadyRead: true,
    },
    {
        title:'A Gentleman in Moscow',
        author:'Amor Towles',
        alreadyRead: false,
    }
]

for (var i = 0; i < books.length; i++){
    console.log(books[i].title + ' by ' + books[i].author);
}


for (var i = 0; i < books.length; i ++){
if (books[i].alreadyRead === true){
    console.log ("You have already read " + books[i].title + ".");
} else {
    console.log("You still need to read " + books[i].title + ".");
}
}

var movies =
    {
        title:'Goodwill Hunting',
        duration:126,
        stars: ['Matt Damon','Ben Affleck','Robin Williams']
    };


console.log(movies.title + " lasts for " + movies.duration + " minutes. Stars " + movies.stars[0] + ", " + movies.stars[1]+ " and " + movies.stars[2] + ".")
