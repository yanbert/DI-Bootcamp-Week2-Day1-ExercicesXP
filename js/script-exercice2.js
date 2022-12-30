const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

/* PART 1 */
//1 - Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
let myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength);

//2-Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched

/***************************************************
Correcteur: Yannick GOUGUIA

Merci de bien relire la question et de bien choisir la methode adequate,
Vous avez obtenu le bon resultat mais la methode n'est pas bonne
**************************************************/
let myWatchedSeriesSentence = myWatchedSeries[0] + ", " + myWatchedSeries[1] + " and " + myWatchedSeries[2];

//3-Console.log a sentence using both of the variables created above

/********************************************************************************************
Vous avez obtenu le bon resultat mais la methode n'est pas bonne.
Merci de bien choisir la bonne methode
*********************************************************************************************/
console.log("I watched " + myWatchedSeriesLength + " series : " + myWatchedSeriesSentence);

/* PART 2 */
//1-Change the series “the big bang theory” to “friends”
myWatchedSeries[2] = "friends";

//2-Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push("Doctor Strange");

//3-Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift("Terminator");

//4-Delete the series “black mirror”.
myWatchedSeries.splice(1, 1);

//5-Console.log the third letter of the series “money heist”.
console.log(myWatchedSeries[1].charAt(2));

//6-Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log(myWatchedSeries.toString())
