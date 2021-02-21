# About GearList

GearList is a JavaScript-based application designed to help you better prepare for outdoor adventures and not forget those important (sometimes life-saving) items at home.

Technology stack (MEVN):

1. (M)ongoDB for the database (and Mongoose.js to help).
2. (E)xpress.js framework for speedy backend functionality.
3. (V)ue.js for the front-end framework and client-side routing.
4. (N)ode.js to power back-end.

## More Details

[Vue Router](https://github.com/vuejs/vue-router) is used to handle SPA routing, and [Axios](https://github.com/axios/axios) is used for AJAX requests to the backend. [Muse-UI](https://muse-ui.org/#/en-US) is used for the CSS framwork, using [Material.io](https://material.io/)'s design principles.

This project generated using [Vue CLI](https://github.com/vuejs/vue-cli).

### Models

- User
- Gear List
- Gear Item
- Gear Item Completion Data

## Deployment

You can view GearList live here:

- [https://gearlist.rocks](https://gearlist.rocks)

## Screenshots

_1. Register a New User_
![register](https://user-images.githubusercontent.com/20636750/108611783-d756a300-7396-11eb-9c84-37c72f10bfc6.png)

_2. Login Exisiting User_
![login](https://user-images.githubusercontent.com/20636750/108611786-e63d5580-7396-11eb-987d-2cbf83a43aa7.png)

_3. Home Navigation_
![homenav](https://user-images.githubusercontent.com/20636750/108611789-ee959080-7396-11eb-8cfe-a7a8a9988ff2.png)

_4. About Page_
![about](https://user-images.githubusercontent.com/20636750/108611798-04a35100-7397-11eb-9a4e-36f3cee25233.png)

_5. Dashboard - View All Lists & Items_
![dash](https://user-images.githubusercontent.com/20636750/108611800-0f5de600-7397-11eb-8178-51d3a9ca40a8.png)

_6. Dashboard Navigation_
![dashnav](https://user-images.githubusercontent.com/20636750/108611802-1684f400-7397-11eb-91d7-cc7db627de80.png)

_7. Add New List_
![newlist](https://user-images.githubusercontent.com/20636750/108611804-1b49a800-7397-11eb-9fc8-edcab02d571d.png)

_8. Add New Item_
![newitem](https://user-images.githubusercontent.com/20636750/108611805-1edd2f00-7397-11eb-8077-c3ad0dfe495e.png)

_9. Attach Item to Many Lists_
![attachitem](https://user-images.githubusercontent.com/20636750/108611807-21d81f80-7397-11eb-919a-d09450ae882d.png)

_10. Attach List to Many Items_
![attachlist](https://user-images.githubusercontent.com/20636750/108611809-24d31000-7397-11eb-8bbb-2ed230821e5a.png)

_11. View List_
![viewlist](https://user-images.githubusercontent.com/20636750/108611810-27ce0080-7397-11eb-8676-673c9cea39ab.png)

_12. Confirm Delete_
![confirmdelete](https://user-images.githubusercontent.com/20636750/108611812-2ac8f100-7397-11eb-9213-a586ea9f3671.png)

_13. Edit Gear Item_
![edititem](https://user-images.githubusercontent.com/20636750/108611813-2d2b4b00-7397-11eb-910d-9a925fbb8fa0.png)

_14. Edit Gear List_
![editlist](https://user-images.githubusercontent.com/20636750/108611814-30263b80-7397-11eb-80b3-5f5943b7d18a.png)

## Dev Setup & Install

- `npm install` from project root directory to get front-end packages.
- `npm install` from `~/server` to get server-side packages.
- Update `~/src/services/UserService` baseURL to reflect your localhost or local network IP.
- (1) Make sure `mongod` is running. (2) from `~/` run `npm run serve` and (3) from `~/server` run `npm start`.

  - If you're having trouble running mongod do this:
  - 1. Download the Community Edition of MongoDB from here: [Community edition download page](https://www.mongodb.com/download-center/community). _NOTE_: Do not use Enterprise as license isn't for personal prod deployments.
  - 2. `cd ~/Downloads`
  - 3. `tar -zxvf {{tar-name}}`
  - 4. `cd /usr/local/mongodb`
  - 5. Make data folder (this is where all your local system dev db stuff will be stored), no longer an use `/data/db` in Catalina and above. Instead do: `sudo mkdir -p /System/Volumes/Data/data/db` && `` sudo chown -R `id -un` /System/Volumes/Data/data/dbsudo chown -R `id -un` /System/Volumes/Data/data/db ``.
  - 6. Then added to `cd ~` && `open .bash_profile`: `alias mongod="sudo mongod --dbpath /System/Volumes/Data/data/db"`
  - 7. Also add to bash profile

    ```bash
    export MONGO_PATH=/usr/local/mongodb
    export PATH=$PATH:$MONGO_PATH/bin
    ```

  - 8. Check mongo version: `mongo --version`
  - 9. Run mongo as background process: `mongod --config /usr/local/etc/mongod.conf --fork` (or run `sudo mongod --dbpath /System/Volumes/Data/data/db` manually). **NOTE**: If you run as a process you can later `kill {{ID}}` after listing them via: `launchctl list | grep mongo`.

- Once server & mongo is running, and VueJS dev sever is running. Load app in next step.
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

### Other features that are good for users

- ✅ User Confirmation when deleting a Gear Item (no accidental deletions)
- ✅ User Confirmation when deleting a Gear List (no accidental deletions)
- ✅ About Page with Contact form for Feature Requests/Bug Reports/Etc

> NOTE: All data is hard deleted, no soft deletions, no saving of data. It's gone when user says so.

- ✅ "Load More" button Dashboard beneath Lists and Items push more into user's view.
- ✅ Front & Backend strong validation on all forms.
- ✅ API locked down (must valid session to hit any any API endpoint)
- ✅ TOS modal on registration?

### Bugs Backlog

- [HIGH] Add logging on basic CRUD actions (how many items being created, how many lists, how many completions and how many incomplete items) -- may need to update TOS.

### TODO

- [HIGH] Replace other success dialog and failure dialogs with new components (DialogSuccess and DialogFailure)
- Add a "Congratulations message" when all items are completed and visually change a bit to look more "done"
- Add quick reset button to easily reset a list -- maybe add a confirmation modal as a "blocker" to confirm and prevent accidental reset

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
