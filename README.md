# math-q-factory
javaScript package that generates a variety of maths questions

## install into a project with npm
> npm i math-q-factory

## using the package
Using node, I import the package with
> const {getMathsQs} = require('math-q-factory');

Then I can get a question by using getMathQs. (One at a time for now!)

> console.log(getMathsQs("ratio", "share", "givenDiff"))

gives:
```
{ qType: 'shortAnswer',
  q: 'Nandini, Zanet and Katie share some money in the ratio \n' +
  '5:3:2 \n' +
  'Katie gets £21 less than Nandini \n' +
  'How much does Zanet get?',
  a: 21,
  hint: 'If Nandini, Zanet and Katie got £5, £3 and £2, then Katie would get £3 less than Nandini',
  giveAway: 'Keep sharing £10 until Katie gets £21 less than Nandini',
  qFeedback: 'Zanet gets £21',
  qPath: 'ratio-share-givenDiff'
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
Each generator of a question needs to be registered in a couple of places. There are template files to help you do this. Follow the instructions in the comments of these template files. When the tests pass, you can delete these comments from your file (but, obviously, leave them in the template). 

I would start by setting up the new chapter with a default question. When that gets displayed, set up a section with a default question and make sure getMathQs(chapter, section) can follow your path. I've removed the default questions from my final section files, but they are still there in the chapter files. When pushing to main, there should never be a path that returns a default question. See later about the best way to test paths.

### more detail

Remembering that we use
> getMathQs(chapter, section, qName) 

Chapters get their own folder in the chapters folder. If you look: there are currently chapters on data, number and (mostly empty) algebra01.

The data chapter has sections like mean, median, mode. These are in the data folder as dataMean.js etc. So the filename follows the path to the question (except it is missing qName, which is handled entirely within the section file). Section files like dataMean.js are based on the newSectionFile.js template.

Each chapter folder needs a main file that exports information to getMathQs. For example: the data folder has dataQs.js, which follows the newChapterFile.js template. Follow the instructions in that template to link everything together. 

You will also need an equivalent to dataSectionList.js which doesn't have a template. It is just a list of sections. Look at dataSectionList.js to see its simple construction. Also: remember to import the sectionList into the chapSecStructure.test.js file so that the structure can be checked. Again: look in chapSecStructure.test.js to see how the dataSections are handled.

### using pure functions
Obviously, it's nice to have a question generator that makes questions with different numbers. But I have decided to split each qenerator into two parts. First a setup, that does all the picking of random numbers etc. Then a pure function which always makes the same output with a given input. There would be potential to re-use these. Eg: one random list of numbers can be used to ask for mean, median and mode of that single list. But that question isn't set up at the moment.

## tests
Tests can be run with either 
> npm test

or 
> node tests

These will make sure that chapters and sections have all the properties that they need, and check full question paths for essential and desirable properties. If a path fails one of the tests, it will be displayed below the failure. 

If you want to test some paths then you can supply as much of chapter, section and qName as you like. eg:
> node tests data

will provide an example of every question that has a path beginning with "data". The full path is chosen from the qPathList.js file. If you provide a path that isn't in that list, the test will say that there is no question found on that path. But you should get a default question. I am leaving the default questions as obviously default. The alternative is to have getMathQs pick a random path. I will consider that in the future.
