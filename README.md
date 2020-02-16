# Gear List

This is a gear list application, designed to help you in outdoor adventures to better prepare and not forget those important (sometimes life-saving) items at home.

In regards to technology, this is a MEVN application and uses:

1. (M)ongoDB for the database (and Mongoose.js to help).
2. (E)xpress.js framework for speedy backend functionality.
3. (V)ue.js for the front-end framework and client-side routing.
4. (N)ode.js to power back-end.

[Vue Router](https://github.com/vuejs/vue-router) is used to handle SPA routing, and [Axios](https://github.com/axios/axios) is used for AJAX requests to the backend. [Muse-UI](https://muse-ui.org/#/en-US) is used for the CSS framwork, using [Material.io](https://material.io/)'s design principles.

This project generated using [Vue CLI](https://github.com/vuejs/vue-cli).

## Dev Setup & Install

- `npm install` from project root directory to get front-end packages.
- `npm install` from `~/server` to get server-side packages.
- Update `~/src/services/UserService` baseURL to reflect your localhost or local network IP.
- (1) Make sure `mongod` is running. (2) from `~/` run `npm run serve` and (3) from `~/server` run `npm start`.
- Load [localhost:8080](https://localhost:8080) to see the application running locally.

## Features

- ✅ User Login and Registration (Password Hashing/Decryption)
- ✅ Gear Item Creation
- ✅ Gear List Creation
- ✅ Attach or Detach (+/-) Gear Lists to An Item (Paperclip Icon)
- ✅ Attach or Detach (+/-) Gear Items to a Gear List (Quick Attach)
  - TODO: Can you refactor or clean up your logic at all?
- ✅ Edit a Gear Item
- ✅ Edit a Gear List
- ✅ View a Gear List and All Items
- ✅ View Gear List and Packed vs Total Gear Item Weight
- ⭕️ View Gear List and Add/Remove Items
- ✅ Mark Gear Items as completed/incomplete
- ✅ Delete a Gear Item
- ✅ Delete a Gear List
- ✅ Confirmation on Gear Item Deletion
- ✅ Confirmation on Gear List Deletion
- ✅ View All Gear Items (load more feature)
- ✅ View All Gear Lists (load more feature)
- ✅ Front & Backend Validation on All Forms
- ✅ API not publically accessible (must have valid logged in session to CRUD)
- ⭕️ Contact Page (bug report?)
- ⭕️ About Page (how about just combined with Contact page above?)
- ⭕️ TOS modal on registration?
- ⭕️ Deploy [LARGE]

## Most Important TODO Before Deployment

- !!! About
- !!  Contact Page
- !   TOS modal popup

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
- Gear Item Completion

### Wishlist Features (may require addt'l creation of models)

- Remove a Gear Item from a Gear List Via Gear List View
- Public Share Link
- Sharing of Gear Lists (Add a Friend)
  - > NOTE: If we add a friends feature, it's important that Friends cannot delete one another's gear items or gear lists if being shared. A friend should be able to delete a gear item, or delete a shared list from their view. But this should not delete the owner's (creator's) list or gear item.
- Password Reset
- User Profile & Edit Profile
- Unit conversion options for Gear Item and Gear List Weight (currently Oz but could support g/Kg)
- Mark List Complete, when All Items are Completed for that List
- Import REI items (do they have an open API? Get item name & weight)