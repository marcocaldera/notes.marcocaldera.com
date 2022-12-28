---
title: Understanding the JS thread
date: "2022-12-28"
tags: "engineering, javascript"
---

## The issue

The fact that Javascript is **single thread** is something that we are all aware off.

What we miss, at least at the beginning of our engineering experience is:

How the heck is then possible to call some async function directly in JS without interrupting the execution of our code (which result is freezing the UI of our app, etc..)?

This is important. What kind of language is it if we cannot run async task.

## Example

Let take a simple async task represented by a timer:

```typescript
const printHappiness = () => {
	console.log("Yay, the timeout is ended");
};

setTimeout(printHappiness, 0);

const bigList = new Array(100_000);

for (index in bigList) {
	console.log(index);
}

console.log("End of execution");
```

### Explanation

Javascript thread of execution proceed in the following way:

1. Create the `printHappiness` function in memory
2. Call the function `setTimeout`
3. Create the array `bigList` in memory
4. Loop through the `bigList` (which, for the sake of the example, require 300ms to execute)
5. Print "End of execution"
6. Call the function `printHappiness` and print "Yay, the timeout is ended"

Effectively the JS thread is proceeding line by line but something apparently strange happens.

We set a timeout for 0ms but we have to wait more than 300ms before printing "Yay, the timeout is ended"

### Web browser

"setTimeout" is a JavaScript function (called: _facade function_) that don't do much in JS. It just tells the web browser to spin up a feature, surprisingly called "timer" (😂) and _do something_ after a defined amount of time has passed (0ms in this example).

When the timer ends, the WB put "printHappiness" in a special place called the **callback queue** and then it's the job of the famous **event loop** to check when it's the right time to put the function back in the [callstack](https://www.javascripttutorial.net/javascript-call-stack/) to be run.

But when is the right time? Simple, the JS thread should no longer be busy executing our synchronous code. Therefore in this case we need to wait for the end fo the loop and the last console.log before executing our `printHappiness`.

### Execution flow example

![Execution Flow Example](/assets/posts/2022-12-28-understanding-the-js-thread/execution_flow.gif)
