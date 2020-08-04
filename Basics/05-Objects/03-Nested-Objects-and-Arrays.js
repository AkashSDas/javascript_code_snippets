// ###### Nested Objects and Arrays ######

// =================================
// ### Basic Example ###

var someObject = {
    friends: [
        {name: "Malfoy"},
        {name: "Crabbe"},
        {name: "Goyle"},
      ],
    color: "baby blue",
    isEvil: true
};

console.log(someObject.friends[0].name); // Malfoy
// =================================
// ### Movie Database ###

var movies = [
    AvengersEndgame = {
        title: "Avengers Endgame",
        rating: 5,
        hasWatched: "watched"
    },
    WolfOfWallStreet = {
        title: "Wolf of wall street",
        rating: 5,
        hasWatched: "watched"
    },
    Frozen = {
        title: "Frozen",
        rating: 4.5,
        hasWatched: "not seen"
    },
    InBurgues = {
        title: "In Burgues",
        rating: 5,
        hasWatched: "not seen"
    },
    LesMiserable = {
        title: "Les Miserable",
        rating: 3.5,
        hasWatched: "not seen"
    }
];

console.log(movies[0].rating);
console.log(movies[1].hasWatched);
console.log(movies[4].title);

movies.forEach(function(watch, index){
    console.log("You have " + movies[index].hasWatched +" \"" + movies[index].title + "\"" + ' - ' + movies[index].rating);
});
