# math-q-factory
## install into a project with npm
> npm i math-q-factory
javaScript package that generates a variety of maths questions. Any difficulty level considered.

## version 3
This includes only a small breaking change from version 2:
```
// totalQs used to just give a list of chapters, with how many questions that chapter has
{
  algebra01: 12,   data: 7,  decimal: 1,  examQs: 4,  formulas: 3,  fraction: 17,
  number: 25,  numberTheory: 2,  percent: 4,  ratio: 8,  sequences: 6,
  shape: 6,  wordy: 10,  vocab: 14,  powers: 3
}
// Now each chapter has an object as value, giving
{
  algebra01: { qCount: 12, min: 160, max: 350 },
  data: { qCount: 7, min: 110, max: 180 },
  decimal: { qCount: 1, min: 120, max: 120 },
  examQs: { qCount: 4, min: 149, max: 210 },
  formulas: { qCount: 3, min: 200, max: 250 },
  // ...
  vocab: { qCount: 14, min: 30, max: 220 },
  powers: { qCount: 3, min: 205, max: 215 }
}
```
This enables a user to put grading onto a chapter. My suggestion would be:
```
Functional Skills E3: less than 100
Functional Skills L1: less than 200
GCSE grade 3: less than 300
GCSE grade 4-5: less than 500
GCSE higher: less than 950
A-level: less than 1500
Graduate: less than 5000
Masters: less than 7000
```
(Not many question types in the higher categories, yet!)
But these boundaries are really hard to maintain. I use some FS level 1 questions in GCSE classes and find that there are a few that challenge students who came in with a grade 3 (Try out the bakery Q, finding the mean after completing the table of given data). Similarly: a lot of my FS students can do some algebra and finding angles in triangles, but those aren't part of their course. I decided to strike a balance, though this makes things like diagnostics a little harder to arrange. But a good initial assessment should spot the students who need to be on a different course.

## breaking changes for version 2
I felt these were needed to reorganise how topicsToTest get listed. See below.

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
