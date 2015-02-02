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
- Every answer is a button with an associated description;
- Every time I click on an answer button, the choice is stored and the next page (i.e. the next set of answers) is displayed;
- When I click on the last answer, the URL changes to ```/result``` and a JSON containing the answers is shown as well as a "Retake test" link that would clear the answers and start the test from scratch;
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

- Unless I'm in the result page, I can go back to the previous page and overwrite the answer;
- If I reload the page I should be able to resume the test or alternatively, if I already finished, the result page;
- The pages should be styled according to the PNG file stored in the expected folder;
- The app should be compatible to the Chrome Browser (No IE and old browser compatibility required).
