# CPNT262 - Assignment 5: JSON Server with Heroku and MongoDB Atlas

By Emil Joseph

## Attributions

Instructor's starter code (import.js) and in-class examples (server.js).

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

- I have picked 10 pictures from my instagram accound, and used their url in `photos.js` in the `seeds` folder.
- If you add `/api/v0/photos` after the [Heroku]() url (no spaces), the page will return an array of JSON objects with details (set in `photo.js` in `models` folder) of these 10 pictures.
- If you add `/api/v0/photos` followed by a `/` and any number betwee 1 - 10, it'll return a JSOM object that represents an individual photo.
  - For example, to get the 5th photo, you'd type `/api/v0/photos/5` after the [Heroku]() url.
