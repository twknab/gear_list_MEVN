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
- Load [localhost:8080](https://localhost:8080) to see the application running locally.

## To Do

- Add Gear List model

## Features

- ✅ User Login and Registration (Password Hashing/Decryption)
- ✅ Gear Item Creation
- ✅ Gear List Creation
- ✅ Add/Remove a Gear Item to a Gear List via Attach
- 👹 Remove a Gear Item from a Gear List
  - ✅ Via Gear Item Attach Icon
  - 👹 Via Gear List View
- ✅ View a Gear List and All Items
  ✅ Mark items as completed/incomplete
  - _IN PROGRESS_
  - TODO: server/src/controllers/gear-item-controller.js SEE TODO
- Edit Gear Item (Name, Description, Weight)
- Edit Gear List (Name, Attributes)
- 👹 Delete a Gear Item
  - _TODO_: FIX BUG WHERE DELETING ITEM DOES NOT DLETE FROM LIST
    // TODO: Make sure that deletion cascades!!
- ✅ Confirmation on Gear Item Deletion
- Delete a Gear List (but not any Items within)
- Confirmation on Gear List Deletion
- View All Gear Items
- View All Gear Lists
- Front & Backend Validation on All Forms
- Deploy

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

### Note About Gear Items/Gear List Deletion

If we add a friends feature, it's important that Friends cannot delete one another's gear items or gear lists if being shared. A friend should be able to delete a gear item, or delete a shared list from their view. But this should not delete the owner's (creator's) list or gear item.

### Wishlist Features (may require addt'l creation of models)

- Public Share Link
- Add a friend
- Sharing of Gear List (Add a Friend)
- Password Reset

### Known Bugs

- User session seems to time out. What's going on?
  - If no valid session, can re-direct to dashboard?

#### TODO:

- Make dialog stylings match
- Navigation flakes out at times -- does this need to be fetched again every time?
- Make clicking header logo redirect to dashboard if logged in, otherwise goto login page
