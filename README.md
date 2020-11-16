# CPNT262 - Assignment 5: JSON Server with Heroku and MongoDB Atlas

By Emil Joseph

## Attributions

Instructor's starter code (import.js) and in-class examples.

## Links

[Github repo](https://github.com/ejoseph89/cpnt262-a5).  
[Heroku link]().

## Project overview

- Returning JSON objects
  - Objects returned are links to individual pictures (10) from my personal instagram page
  - Each image has `id, location, description, and location` attributes
- Data imported to MongoDB Atlas using the provided `import.js` script
- objects are named `photos`
- `/api/v0/photos` returns an array of objects
- `/api/v0/photos/:id` fails to return anything at the moment
  - EDIT: Works, after using code from instructor's `sample-code/backend/mongoose/definitions/server.js`

## Comments
