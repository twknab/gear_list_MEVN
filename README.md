# Gear List

This is a gear list application, designed to help you in outdoor adventures to better prepare and not forget those important (sometimes live-saving) items at home.

In regards to technology, this is a MEVN application and uses:

1. (M)ongoDB for the database.
2. (E)xpress.js and (N)ode.js for back-end server functionality.
3. (V)ue.js for the front-end framework and client-side routing.

[Vue Router](https://github.com/vuejs/vue-router) is used to handle SPA routing, and [Axios](https://github.com/axios/axios) is used for AJAX requests to the backend. [Muse-UI](https://muse-ui.org/#/en-US) is used for the CSS framwork, using [Material.io](https://material.io/)'s design principles.

This project generated using [Vue CLI](https://github.com/vuejs/vue-cli).

## Setup & Install

- `npm install` from project root directory to get front-end packages.
- `npm install` from `~/server` to get server-side packages.
- Update `~/src/services/UserService` baseURL to reflect your localhost or local network IP.
- (1) Make sure `mongod` is running. (2) from `~/` run `npm run serve` and (3) from `~/server` run `npm start`.
- Load https://localhost:8080 to see the application running locally.

## To Do

- Per your late night divergence, try trimming down your button components to just the buttons, and inserting them into your responsive columns that way. It may work better with less craze..
- Setup Session (express-session)?
- Get data via session-id to display user info on dashboard.

## Features

- User Login and Registration (Password Hashing/Decryption)
- Gear List Creation
- Gear Item Creation
- Add a Gear Item to a Gear List
- Remove a Gear Item from a Gear List
- Edit Gear Item (Name, Description, Weight)
- Edit Gear List (Name, Attributes)
- Delete a Gear Item
- Delete a Gear List (but not any Items within)
- Front & Backend Validation on All Forms

## Technologies

- Node.js & Express.js (Backend Framework)
- MongoDB & Mongoose.js (Database)
- Muse.ui w/ Material.io (CSS Framework)
- Vue.js (JS Frontend Framework)
- Vue Router & Axios (Client-Side Routing)

## Models

- User
- Gear List
- Gear Item

### Wishlist Features (may require addt'l creation of models)

- Add a friend
- Sharing of Gear List (Add a Friend)
- Passport.js
- Password Reset
