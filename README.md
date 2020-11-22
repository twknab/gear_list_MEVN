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

### Things you can create

- ✅ Gear Items
- ✅ Gear Lists

### Things you can do

- ✅ View all of your Gear Items.
- ✅ View all of your Gear Lists.
- ✅ Quick Attach or Detach (+/-) a Gear Item to many of your Gear Lists.
- ✅ Quick Attach or Detach (+/-) many Gear Items from a single Gear List.
  - If this sounds confusing, give it a try and you'll see why it's handy :)
- ✅ Edit your Gear Item
- ✅ Edit your Gear List
- ✅ View your Gear List and All Items and Item Completions (packed)
- ✅ View your Gear List's "Packed" weight vs "Total" weight
- ✅ Remove or attach items from Dashboard or Gear List view.
- ✅ Toggle Gear Items as Packed / Unpacked
- ✅ Delete a Gear Item including all List association and completion data.
- ✅ Delete a Gear List including Item association data and ompletion data.

### Other features that are cool and good for users

- ✅ User Confirmation when deleting a Gear Item (no accidental deletions)
- ✅ User Confirmation when deleting a Gear List (no accidental deletions)
- ✅ About Page with Contact form for Feature Requests/Bug Reports/Etc

> NOTE: All data is hard deleted, no soft deletions, no saving of data. It's gone when user says so.

- ✅ "Load More" button Dashboard beneath Lists and Items push more into user's view.
- ✅ Front & Backend strong validation on all forms.
- ✅ API locked down (must valid session to hit any any API endpoint)
- ✅ TOS modal on registration?


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
- Gear Item Completion Data

### Bugs Backlog

- [HIGH] Validation errors not properly displaying registration page (try signing up with duplicate email, will see validation message print in server log but not displaying in UI. Might be improperly reading objects.)
- [LOW PRI] When attaching one item to many lists, selecing "Update" without any list selections pops up a "Done" message. Instead, should say no changes detected or not show a success message at all.

### TODO

- Add a "Congratulations message" when all itmes are completed and visually change a bit to look more "done"
- Add reset button to easily reset a list -- maybe add a confirmation modal as a "blocker" to confirm and prevent accidental reset

### Wishlist / Next Features (may require addt'l creation of models)

- Add confirmation when removing item from a list (user may accidentally remove an item and not know what it was -- either having a history (bigger eng task) or a confirmation (smaller) may be helpful to prevent accidentally removing items.
- Clicking Gear Item on dashboard displays dialog showing all Lists to which it is associated -- and a "delete" or "X" button to remove item from said list
- "Reset All Items" button list view that will reset completion data for all items on that list and then refresh the list to show all unchecked items
- Public Share Link
- Sharing of Gear Lists (Add a Friend)
  - > NOTE: If we add a friends feature, it's important that Friends cannot delete one another's gear items or gear lists if being shared. A friend should be able to delete a gear item, or delete a shared list from their view. But this should not delete the owner's (creator's) list or gear item.
- Password Reset
- User Profile & Edit Profile
- Unit conversion options for Gear Item and Gear List Weight (currently Oz but could support g/Kg)
- Mark List Complete, when All Items are Completed for that List
- Import REI items (do they have an open API? Get item name & weight)

Things to add to TOS:
"You agree to explicitly inform visitors to your site that you have implemented reCAPTCHA v3 on your site and that their use of reCAPTCHA v3 is subject to the [Google Privacy Policy](https://policies.google.com/privacy) and [Terms of Use](https://policies.google.com/terms)."