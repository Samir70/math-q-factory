# math-q-factory
javaScript package that generates a variety of maths questions

## install into a project with npm
> npm i math-q-factory

## using the package
Using node, I import the package with
> const {getMathsQs} = require('math-q-factory');

Then I can get a question by using getMathQs. (One at a time for now!)

> console.log(getMathsQs("data", "mode"))

gives:

>{
>  qType: 'shortAnswer',
>  q: 'Find the mode of 17, 6, 14, 1, 1, 23, 8, 38, 37, 38',
>  a: '1 and 38',
>  qFeedback: '1 and 38 listed 2 times, that is more often than other numbers',
>  qPath: 'data-mode-'
>}

The package looks for a question generator based on one, two, or three arguments.
> getMathQs(topic, subTopic, subSubTopic) // the last is called qName in the tests

Only a few are enabled for now. You can see which in the tests/getQ.test.js file.

I have a lot of questions in another project: https://github.com/Samir70/maths-elo-api which I made as an all in one project. But now I want to use the question generators in different contexts so I am splitting out the question generator into this project. So that should allow me to update this on a pretty regular basis!
