<template>
  <div>
    <mu-container>
      <mu-row gutter>
        <mu-col span="12">
          <h1>Attach Items to {{ gearListTitle }}</h1>
        </mu-col>
      </mu-row>
      <mu-row span="12">
        <!-- FUTURE TODO: Paginate this list -->
        <mu-list textline="three-line" class="dashboard-list">
          <mu-list-item
            button
            v-for="gearItem in this.allUserItems"
            :key="gearItem._id"
            @click="updateGearItemSelections(gearItem._id)"
          >
            <mu-list-item-action>
              <mu-icon
                size="42"
                class="margin-right-md"
                :value="
                  gearItemSelections.values.includes(gearItem._id)
                    ? 'check_box'
                    : 'check_box_outline_blank'
                "
                :color="'purpleA700'"
              ></mu-icon>
            </mu-list-item-action>
            <mu-list-item-content>
              <!-- Item Title -->
              <mu-list-item-title>
                {{ gearItem.title }}
              </mu-list-item-title>
              <!-- Item Weight -->
              <mu-list-item-sub-title>
                {{ gearItem.weight }} oz.
              </mu-list-item-sub-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </mu-row>
      <mu-row span="12">
        <mu-button
          full-width
          round
          color="purpleA700"
          @click="attachItemsToGearList"
          large
        >
          <mu-icon value="attach_file"></mu-icon>
          <span class="button-icon">Attach Items</span>
        </mu-button>
        <mu-button
          large
          flat
          color="purple50"
          @click="goBack"
          class="flat-full-width margin-top-md margin-bottom-xl"
        >
          <mu-icon value="close"></mu-icon>
          <span class="button-icon">Nevermind</span>
        </mu-button>
      </mu-row>
    </mu-container>
    <DialogSuccess
      :isOpen="this.showSuccessDialog"
      :message="'Updated list items!'"
      @closeSuccessDialog="successDialogClose"
    />
    <DialogFailure
      :isOpen="this.showFailureDialog"
      :message="'Error updating items!'"
      :failureDetails="this.errors"
      @closeFailureDialog="failureDialogClose"
    />
  </div>
</template>

<script>
import GearListService from "@/services/GearListService.js";
import GearItemService from "@/services/GearItemService.js";
import DialogSuccess from "@/components/notifications/DialogSuccess.vue";
import DialogFailure from "@/components/notifications/DialogFailure.vue";
export default {
  name: "AttachManyItemsToSingleGearList",
  components: {
    DialogSuccess,
    DialogFailure
  },
  created() {
    this.gearListId = this.$route.params.id;
    this.getAllItemsBelongingToUser(this.gearListId);
  },
  data() {
    return {
      gearItemSelections: {
        values: []
      },
      gearListId: "",
      gearListTitle: "",
      allUserItems: {},
      showSuccessDialog: false,
      showFailureDialog: false,
      errors: {}
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    updateGearItemSelections(itemId) {
      if (this.gearItemSelections.values.includes(itemId)) {
        this.gearItemSelections.values.splice(
          this.gearItemSelections.values.indexOf(itemId),
          1
        );
      } else {
        this.gearItemSelections.values.push(itemId);
      }
      console.log(this.gearItemSelections.values);
    },
    getAllItemsBelongingToUser(listId) {
      // get all items for user
      GearItemService.getAllGearItemsForUser()
        .then(userItems => {
          this.allUserItems = Object.values(userItems.data.gearItems);
          // mark items already on list as complete
          GearListService.getListAndItems(listId)
            .then(userListAndListItems => {
              this.gearListTitle = userListAndListItems.data.title; // if this takes too long to load, consider breaking into unique query that runs on created or even before create using a new service method...
              let existingListItems = userListAndListItems.data.items.map(
                item => item._id
              );
              this.gearItemSelections.values = existingListItems;
            })
            .catch(err => {
              console.log(
                "Something's gone wrong with server side routing.: ",
                err
              );
            });
        })
        .catch(err => {
          console.log(
            "Something's gone wrong with server side routing.: ",
            err
          );
        });
    },
    attachItemsToGearList() {
      GearListService.attachManyItemsToOneList({
        gearListId: this.gearListId,
        selectedListIds: this.gearItemSelections.values
      })
        .then(response => {
          if (response.data.success) {
            this.showSuccessDialog = true;
          } else {
            this.errors = response.data.errors;
            this.showFailureDialog = true;
          }
        })
        .catch(err => {
          this.errors = err;
          this.showFailureDialog = true;
        });
    },
    successDialogClose() {
      this.showSuccessDialog = false;
      this.goBack();
    },
    failureDialogClose() {
      console.log("Closed@!@@");
      this.showFailureDialog = false;
      this.goBack();
    }
  }
};
</script>

<style>
.mu-checkbox-icon {
  color: #d500f9;
}
.mu-item {
  color: #aa00ff;
}
.mu-option.is-selected .mu-item {
  color: #fff;
}

.mu-popover {
  background: #2b2b2b;
}

.mu-dialog {
  background-color: #212121;
}

.mu-dialog-title {
  color: #fff;
}

.mu-dialog-body {
  color: #fff;
  padding-bottom: 10px;
}

.mu-input__focus {
  color: #aa00ff;
}

.mu-select-input.is-enable {
  color: white;
  font-size: 24px;
}

.mu-select-icon {
  fill: #9e9e9e;
}

.mu-dialog-actions {
  margin-bottom: 10px;
}

.server-errors {
  width: 100% !important;
}
.mu-alert {
  margin-bottom: 10px !important;
  color: rgb(189, 159, 48) !important;
}
</style>
