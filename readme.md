- Use of backticks

Error =>

![](https://github.com/D2-24/p1-learning-/blob/cd02d5d137e3575c10fd8e3ddd1559770021f6ce/images/1.png)

Fix =>

![](https://github.com/D2-24/p1-learning-/blob/cd02d5d137e3575c10fd8e3ddd1559770021f6ce/images/2.png)

- Use of FormData()

The **FormData** class in JavaScript is a **built-in browser API** for working with HTML form data.

Think of it as a _special container object_ that automatically collects form inputs for you so you don’t have to manually read .value from each input one by one.

![](https://github.com/D2-24/p1-learning-/blob/cd02d5d137e3575c10fd8e3ddd1559770021f6ce/images/3.png)

Without FormData() =>

![](https://github.com/D2-24/p1-learning-/blob/cd02d5d137e3575c10fd8e3ddd1559770021f6ce/images/4.png)

Using FormData() =>

![](https://github.com/D2-24/p1-learning-/blob/cd02d5d137e3575c10fd8e3ddd1559770021f6ce/images/5.png)
Important point to remainder => we have to give name attribute to each

input html tag while using FormData().

![](https://github.com/D2-24/p1-learning-/blob/cd02d5d137e3575c10fd8e3ddd1559770021f6ce/images/6.png)
- event . preventDefault()

![](https://github.com/D2-24/p1-learning-/blob/cd02d5d137e3575c10fd8e3ddd1559770021f6ce/images/7.png)

- When you click a button inside a &lt;form&gt; with type="submit", the **default** action is to **send the form data to the action URL** and **reload the page**.
- e.preventDefault() **cancels that reload**, so your JavaScript can handle the form data instead.

**Without event . preventDefault():**

1. You click **Add Data**.
2. Browser sends the form (to the empty action="" in your HTML).
3. Page reloads → your JavaScript’s added row disappears.
