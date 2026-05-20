# backend_chai_code
backend with express following tutorial
  /* There's two type of importing in nodejs, one is commonjs and other is es6 modules. By default nodejs uses commonjs but we can change it to es6 modules by adding "type": "module" in package.json file. In commonjs we use require() to import modules and in es6 modules we use import statement to import modules. In this project we are using commonjs so we don't need to add "type": "module" in package.json file.  Either we import using require() or import statement, it will work fine. But if we want to use import statement, we need to add "type": "module" in package.json file. If we don't add "type": "module" in package.json file and try to use import statement, it will throw an error. So it's better to stick with one type of importing in the project. In this project we are using commonjs so we will stick with require() to import modules. */

Whenever we try to talk with database, there's huge chance that we'll face trouble that's why we must ensure to use try and catch or use promises to avoid any issue. 
Second thing, database is always in another continent it means whenever you wanna talk with database it'll take time so must use asyn await.
So two points keeps in mind.
Always use try and catch or promises while interacting with DB.
Always use aync await.

Your explanation is correct conceptually, but here’s a more professional and technically accurate version you can use in notes, documentation, or teaching:

---

# Database Interaction Best Practices in Node.js

Whenever we interact with a database, there is always a possibility of errors such as:

* connection failures
* network issues
* invalid queries
* timeout errors
* server downtime

That’s why database operations should always be handled properly using:

* `try...catch`
* or Promise error handling (`.catch()`)

---

## Why Use `async/await`?

A database usually runs on a separate server, often in another region or data center. Communication with the database takes time because it happens over a network.

Database operations are asynchronous, so we should always use:

* `async/await`
* or Promises

to handle them correctly without blocking the application.

---

# Two Important Rules

## 1. Always Handle Errors

Use:

```js
try {
  // database operation
} catch (error) {
  console.log(error);
}
```

or:

```js
User.find()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

---

## 2. Always Use `async/await` for Database Operations

Example:

```js
const users = await User.find();
```

because database calls are asynchronous and take time to complete.

---

# Example

```js
const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
```

---

# Key Takeaway

Database operations are asynchronous and error-prone, so:

* always use `async/await`
* always handle errors using `try...catch` or `.catch()`
