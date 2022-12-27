/* For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction. */

//1-What is the output of each of the expressions below?

typeof (15)
// Prediction: number parceque 15 est un nombre
// Actual: number

typeof (5.5)
// Prediction: number parceque 5.5 est un nombre
// Actual: number

typeof (NaN)
// Prediction: Aucune idée
// Actual: number

typeof ("hello")
// Prediction: string car "hello" est une chaine de caractère
// Actual: string

typeof (true)
// Prediction: boolean car true est un booléen
// Actual: boolean

typeof (1 != 2)
// Prediction: boolean car il s'agit d'une condition
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers car nous sommes en présence de 2 chaines de caractères il y'a donc concaténation
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: NaN car en présence de 2 chaines de caractères non convertible en nombre l'opperateur n'a aucun sens
// Actual: NaN

"1" + "3"
// Prediction: 13 car car nous sommes en présence de 2 chaines de caractères il y'a donc concaténation, meme s'ils 
// sont convertibles en nombre, la classe string prend le dessus
// Actual:13

"1" - "3"
// Prediction: -2 car nous sommes en presence certes de 2 chaines de caratères, mais l'operateur (-) 
// essaie de convertir les données si possible et dans notre cas cela est possible 
// Actual:-2

"johnny" + 5
// Prediction: johnny5 car nous sommes en présence d'au moins une chaine de caractères et l'operateur (+) il y'a donc concaténation
// Actual: johnny5

"johnny" - 5
// Prediction:NaN car operation impossible pour l'operateur (-) essayant de soustraire une chaine et un nombre
// Actual: NaN

99 * "hello"
// Prediction:NaN car operation impossible pour l'operateur (-) essayant de multiplier une chaine et un nombre
// Actual:NaN

1 != 1
// Prediction: false car les 2 valeurs comparées sont de meme type et de meme valeur
// Actual:false

1 == "1"
// Prediction: false car les 2 valeurs comparées ne sont pas du meme type
// Actual: true

1 === "1"
// Prediction: false car les 2 valeurs comparées ne sont pas du meme type
// Actual: false