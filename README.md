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
```
{
  qType: 'shortAnswer',
  q: 'Find the mode of 17, 6, 14, 1, 1, 23, 8, 38, 37, 38',
  a: '1 and 38',
  qFeedback: '1 and 38 listed 2 times, that is more often than other numbers',
  qPath: 'data-mode-'
}
```
The package looks for a question generator based on one, two, or three arguments.
``` 
getMathQs(chapter, section, qName)  
// previously: these were topic, subtopic and subSubTopic but the above better fits the file names in the project
```

Only a few are enabled for now. You can see which in the qPathList.js file. Or import this list into your project so you can select one of the valid paths to pass arguments into getMathQs();

```
const { getMathsQs, topicsToTest } = require('math-q-factory');

let [chapter, section, qName] = topicsToTest[1] 
q = getMathsQs(chapter, section, qName);
console.log(q)
```
Gives output similar to above question.

I have a lot of questions in another project: https://github.com/Samir70/maths-elo-api which I made as an all in one project. But now I want to use the question generators in different contexts so I am splitting out the question generator into this project. So that should allow me to update this on a pretty regular basis!

## adding a new question generator (first thoughts)
Each generator of a question needs to be registered in a couple of places.

First the topic needs to listed in the chapters/chapterList.js file
But that file doesn't contain much info on the topic. It imports everything from another file. For example, the data topic is imported from dataQs 
> const data = require('./data/dataQs');

dataQs exports an object with chapterName and qGetter properties. The first is used to match the qGetter with the request. This can be seen in the index.js file

But then dataQs needs to know how to handle subtopics like mode, range, mean, median. It imports those from the dataSectionList.js file which itself doesn't have much info. It imports from seperate files that have the actual question generators. There is a similar matching logic to that used with chapters to find a qGetter with the right sectionName.

This setup allows the program to search through the generators with a for loop looking for a match. First for chapter, then section and (if needed) a more precise question name. eg: algebra, linearEqs, twoStep

### using pure functions
Obviously, it's nice to have a question generator that makes questions with different numbers. But I have decided to split each qenerator into two parts. First a setup, that does all the picking of random numbers etc. Then a pure function which always makes the same output with a given input. There would be potential to re-use these. Eg: one random list of numbers can be used to ask for mean, median and mode of that single list. But that question isn't set up at the moment.
