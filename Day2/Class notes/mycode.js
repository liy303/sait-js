// **While Loop Activity 
var num=1
while(num<=12){
    console.log(num*9);
    num=num+1;
}

// var num=1;
// num = num+1;
// while(num<13){
//     var counter=1;
//     while(counter<13)
//     console.log(counter*num);
//     counter++;  
// }
 

var number=1;
while(number<13){
    console.log(9*number);
    number=number+1
}

// // **For Loop Activity
for (var num=1;num<=12;num++){
    for(var counter=1;counter<=12;counter++){
        console.log(num,'*',counter,'=',counter*num)
    }
}

for (var num=1; num<= 2;num++){
    console.log(num*9);
}
// // **Loops and Logic Activity
for(var num=0;num<=20;num++){
    if(num%2===0){
        console.log(num,'is even!');
    } else {
        console.log(num,'is odd!');
    }
}   

// **Break Activity
for(var num=0;num<=12;num++){
    console.log(num,"*",9,"=",num*9);
    if(num===6){
        console.log('I really hate number 6!');
        break;
    }
}

// **Array Activity
var myFavoriteFoods=['hotpot','chocolate','fries','milkshake','friedchicken','curry'];
console.log(myFavoriteFoods.length);

// **Using Array Activity
var myFavoriteFoods=['hotpot','chocolate','fries','milkshake','friedchicken','curry'];
var firstFood = myFavoriteFoods[0];
console.log(firstFood);
var thirdFood = myFavoriteFoods[2];
console.log(thirdFood);

// **Changing Array Activity
var myFavoriteFoods=['hotpot','chocolate','fries','milkshake','friedchicken','curry'];
myFavoriteFoods[2]='icecream';
console.log(myFavoriteFoods);

// **Expanding Array Activity
var myFavoriteFoods=['hotpot','chocolate','fries','milkshake','friedchicken','curry'];
myFavoriteFoods.push('sushi');
console.log(myFavoriteFoods);

// **Iterating Through Arrays
var myFavoriteFoods=['hotpot','chocolate','fries','milkshake','friedchicken','curry'];
for(var num=0;num<myFavoriteFoods.length;num++){
    console.log(myFavoriteFoods[num]);
}

// **Objects Activity
var user = {
    hometown: 'Atlanta, GA',
    hair: 'Brown',
    likes: ['gaming', 'code'],
    birthday: {month: 06, day: 18}
   };
console.log(user);

var FavoriteRecipe ={
    recipeTitle:'Kongpao Chicken',
    recipeDescription:'Providing a spicy flavor with smooth chicken breast, green pepper, peanuts and carrots',
    ingredients:['chicken','green pepper','carrot','spicy sauce','peanuts'],
    directions:'Heating oil in pans, stir fry chicken first, then add into green pepeer, carrots and peanut. Stir into spicy sauce lastly then it is done',
    rating:'4.5',
    cooktime:'15'
};

// ** Acceesing Objects Activity
    var ingredients = FavoriteRecipe['ingredients'];
    console.log(ingredients);
    var rating = FavoriteRecipe.rating;
    console.log(rating);

// ** Changing Objects Activity - change, add and delete
    FavoriteRecipe.rating='5';
    FavoriteRecipe.servings='4';
    delete FavoriteRecipe.cooktime;
    console.log(FavoriteRecipe);

// ** Arrays of Objects Activity
var movies=[
    {name:'Titanic', rating:5},
    {name:'Avengers',rating:3.5},
];
for(var num=0; num<movies.length; num++){
    var movie=movies[num];
    // **the new var name should be different from the original var.
    console.log('I give',movie.name,movie.rating,'stars.');
}

// ** Objects in Functions Activity
var FavoriteRecipe ={
    recipeTitle:'Kongpao Chicken',
    recipeDescription:'Providing a spicy flavor with smooth chicken breast, green pepper, peanuts and carrots',
    ingredients:['chicken','green pepper','carrot','spicy sauce','peanuts'],
    directions:'Heating oil in pans, stir fry chicken first, then add into green pepeer, carrots and peanut. Stir into spicy sauce lastly then it is done',
    rating:'4.5',
    cooktime:'15'
};
function introRecipe(Recipe){
    console.log('The recipe is',Recipe.recipeTitle,'with',Recipe.rating,'stars.');
}
introRecipe(FavoriteRecipe);

// **Object Methods
var FavoriteRecipe ={
    recipeTitle:'Kongpao Chicken',
    recipeDescription:'Providing a spicy flavor with smooth chicken breast, green pepper, peanuts and carrots',
    ingredients:['chicken','green pepper','carrot','spicy sauce','peanuts'],
    directions:'Heating oil in pans, stir fry chicken first, then add into green pepeer, carrots and peanut. Stir into spicy sauce lastly then it is done',
    rating:'4.5',
    cooktime:'15',
    letsCook: function(){
        console.log("I'm hungry! Let's cook",FavoriteRecipe.recipeTitle);
    },
};
FavoriteRecipe.letsCook();


