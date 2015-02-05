JavascriptTask2
===============

Single page app Task

Instructions
------------

- Clone the repo
- Write the solution according to the requirements
- Create a pull request

Requirements
------------

Create a single page application that would that would satisfy the following requirements:

- Reads the given ```api/answers.json``` file;
- Creates a page for each answers set;
- The pages should be styled according to the PNG file stored in the expected folder;
- As shown in the PNG file, every answer is a button where the _label_ is the array ```key``` and the _description_ is the ```value```. See the example below:

```
[
  {
    "You Guys Rock!":"Today I felt one with my team, they are such great guys and I'm glad to work with them.",
    ...
  },
  ...
]
```

- Every time I click on an answer button, the choice is stored and the next page (i.e. the next set of answers) is displayed;
- When I click on the last answer, the URL changes to ```/result``` and a JSON containing the answers is shown as well as a __Retake test__ link that would clear the answers and start the test from scratch;
- The resulting JSON, given that:
	- 1 == positive answer;
	- 0 == average answer;
	- -1 == negative answer.

should look for example like this:

```
[
  "1",
  "0",
  "-1",
  "1"
]
```

- Unless I'm in the __result__ page, I can go back to the previous page and overwrite the answer. Otherwise, if you already reached the __result__ page, trying to go back will result in displaying the same result page.
- If I reload the page I should be able to resume the test or alternatively, if I already finished, the result page.

Bonus
-----

- Use either __AngularJS__ or __EmberJS__;
- Use Preprocessors (__Coffeescript__ / __Sass__);
- Use a Task Runner (__Grunt__ / __Gulp.js__) for compiling / minifying / uglifying and running a test server.


Note
----

For semplicity's sake, the app should be compatible modern and fully HTML5 compliant browser (No IE and old browser compatibility required).
