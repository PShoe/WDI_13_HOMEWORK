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
console.log(favRecipe.ingredients[0]);
console.log(favRecipe.ingredients[1]);
console.log(favRecipe.ingredients[2]);
console.log(favRecipe.ingredients[3]);


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


var movies =
    {
        title:'Goodwill Hunting',
        duration:126,
        stars: ['Matt Damon','Ben Affleck','Robin Williams']
    };


console.log(movies.title + " lasts for " + movies.duration + " minutes. Stars " + movies.stars[0] + " " + movies.stars[1]+ " " + movies.stars[2] + ".")
