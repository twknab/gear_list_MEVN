<template>
  <div>
    <mu-container>
      <mu-row gutter>
        <mu-col span="12">
          <h1>New Gear Item Category</h1>
        </mu-col>
      </mu-row>
      <mu-row span="12">
        <!-- Login Form -->
        <mu-form ref="addNewGearItem" :model="newGearItemCategory">
          <!-- Backend Errors Display -->
          <div v-if="Object.keys(errors).length >= 1" class="server-errors">
            <h2>Whoops, there's a few issues...</h2>
            <ul>
              <li v-for="(error, key, index) in errors" :key="index">
                {{ error.message }}
              </li>
            </ul>
          </div>
          <!-- Gear Item Category Title -->
          <mu-form-item
            label="Title"
            prop="title"
            type="text"
            :rules="titleRules"
          >
            <mu-text-field
              v-model="newGearItemCategory.title"
              prop="title"
              color="primary"
            ></mu-text-field>
          </mu-form-item>
          <!-- Submit Button -->
          <mu-button full-width round color="purpleA700" @click="submit" large>
            <mu-icon value="add"></mu-icon>
            <span class="button-icon">Add New Item Category</span>
          </mu-button>
          <div class="margin-top-md">
            <mu-button
              class="flat-full-width"
              flat
              color="white"
              @click="$router.push({ name: 'dashboard' })"
              large
            >
              <mu-icon value="close"></mu-icon>
              <span class="button-icon">Nevermind</span>
            </mu-button>
          </div>
        </mu-form>
      </mu-row>
    </mu-container>
  </div>
</template>

<script>
import GearItemCategoryService from "@/services/GearItemCategoryService.js";
export default {
  name: "AddGearItemCategory",
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      errors: {},
      // these are front-end validations:
      titleRules: [
        { validate: val => !!val, message: "Title is required" },
        {
          validate: val => val.length >= 2 && val.length <= 50,
          message: "Title must be 2-50 characters"
        }
      ],
      newGearItemCategory: {
        title: "",
        gearItemCategoryOwner: this.user._id
      }
    };
  },
  methods: {
    submit() {
      this.$refs.addNewGearItem.validate().then(result => {
        if (result) {
          // Attempt to create new gear item category:
          GearItemCategoryService.createNewGearItemCategory(
            this.newGearItemCategory
          )
            .then(() => {
              // Redirect to dashboard view
              this.$router.push({ name: "dashboard" });
            })
            .catch(error => {
              this.errors = error.response.data;
            });
        }
      });
    },
    getLoggedInUser() {
      this.$emit("getGlobalUser");
    }
  },
  created: function() {
    this.getLoggedInUser();
  }
};
</script>

<style></style>
