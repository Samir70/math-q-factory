# math-q-factory
javaScript package that generates a variety of maths questions. Any difficulty level considered.

## install into a project with npm
> npm i math-q-factory

The package is now at version 2, I felt the breaking changes were needed to reorganise how topicsToTest get listed. See below.

Also: The previous hint and giveAway properties have been replaced with an array called hints. Any number of hints can now be given. I will eventually include a special hint that references easier questions and add that property -- as an enhancement, not a breaking change.

Some questions (well, the number theory ones!) have a link property with the URL of a webpage that explains the topic. This property is not being tested for, so questions can be generated without being flagged as missing something.

## using the package
Using node, I import the package with
> const {getMathsQs} = require('math-q-factory');

Then I can get a question by using getMathQs. (One at a time for now!)

> console.log(getMathsQs("ratio", "share", "givenDiff"))

gives:
```
{
  qType: 'shortAnswer',
  q: 'Evette, Steven and Nandini share some money in the ratio \n' +
    '4:7:5 \n' +
    'Steven gets £10 more than Nandini \n' +
    'How much does Evette get?',
  a: 20,
  hints: [
    'If Evette, Steven and Nandini got £4, £7 and £5, then Steven would get £2 more than Nandini',
    'Every time you share £16 in the given ratio Steven gets £2 more than Nandini',
    'How many times should you do this so Steven gets £10 more than Nandini?'
  ],
  qFeedback: 'Evette gets £20',
  qPath: 'ratio-share-givenDiff'
}
```
The package looks for a question generator based on one, two, or three arguments.
``` 
getMathQs(chapter, section, qName)  
// previously: these were topic, subtopic and subSubTopic but the above better fits the file names in the project
```

More and more paths are being enabled. You can see which in the qPathList.js file. Or import this list into your project so you can select one of the valid paths to pass arguments into getMathQs();

Most questions are GCSE level, but I have started some number theory (continued fractions) which I first studied at degree level. I am open to suggestions. You can open an issue on this github repo to make a request.

```
const { getMathsQs, topicsToTest } = require('math-q-factory');

let [chapter, section, qName] = topicsToTest[1].path
// .path is needed from version 2 onwards, since topicsToTest is no longer an array full of arrays.
q = getMathsQs(chapter, section, qName);
console.log(q)
```
Gives output similar to above question.

The topicsToTest array is a list of objects like:
```
{
    qType: 'shortAnswer',
    path: [ 'sequences', 'linear', 'findFormula' ],
    rating: '250'
 },
```
The older version of topicsToTest just listed the paths. This then needed exporting seperate objects to enable finding different qTypes. Now topicsToTest can be filtered how you like: by qType, path details or rating. More options can be added in the future.

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

## Supporting production
I develop this in my spare time. If you like it, and find it useful, please support. 

![Buy me a coffee](https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg)
[Buy me a coffee](https://www.buymeacoffee.com/Samir70)
