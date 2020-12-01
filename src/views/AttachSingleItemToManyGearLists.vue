<template>
  <div>
    <mu-container>
      <mu-row gutter>
        <mu-col span="12">
          <h1>Attach {{ gearItemTitle }} to Lists</h1>
        </mu-col>
      </mu-row>
      <mu-row span="12">
        <!-- FUTURE TODO: Paginate this list -->
        <mu-list textline="three-line" class="dashboard-list">
          <mu-list-item
            button
            v-for="gearList in this.allUserLists"
            :key="gearList._id"
            @click="updateGearListSelections(gearList._id)"
          >
            <mu-list-item-action>
              <mu-icon
                size="42"
                class="margin-right-md"
                :value="
                  gearListSelections.values.includes(gearList._id)
                    ? 'check_box'
                    : 'check_box_outline_blank'
                "
                :color="'purpleA700'"
              ></mu-icon>
            </mu-list-item-action>
            <mu-list-item-content>
              <!-- List Title -->
              <mu-list-item-title>
                {{ gearList.title }}
              </mu-list-item-title>
              <!-- List Weight -->
              <mu-list-item-sub-title v-if="gearList.totalWeightInLbs > 0">
                Total Weight: {{ gearList.totalWeightInLbs }} lbs.
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
          @click="attachItemToGearLists"
          large
        >
          <mu-icon value="attach_file"></mu-icon>
          <span class="button-icon">Update Lists</span>
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
      :message="this.successMessage"
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
import UnitConversionUtils from "@/helpers/UnitConversionUtils.js";
export default {
  name: "AttachSingleItemToManyLists",
  components: {
    DialogSuccess,
    DialogFailure
  },
  created() {
    this.gearItemId = this.$route.params.id;
    this.getItemBelongingToUser(this.gearItemId);
    this.getAllListsBelongingToUser();
    this.getListsContainingItem(this.gearItemId);
  },
  data() {
    return {
      gearListSelections: {
        values: []
      },
      gearItemId: null,
      gearItemTitle: null,
      existingLists: null,
      allUserLists: null,
      successMessage: "Successfuly updated lists with item! 😎",
      showSuccessDialog: false,
      showFailureDialog: false,
      errors: {}
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    updateGearListSelections(listId) {
      if (this.gearListSelections.values.includes(listId)) {
        this.gearListSelections.values.splice(
          this.gearListSelections.values.indexOf(listId),
          1
        );
      } else {
        this.gearListSelections.values.push(listId);
      }
    },
    getItemBelongingToUser(itemId) {
      GearItemService.getItem(itemId)
        .then(gearItem => {
          this.gearItemTitle = gearItem.data.title;
        })
        .catch(err => {
          console.log("Something's gone wrong getting item: ", err);
        });
    },
    getAllListsBelongingToUser() {
      GearListService.getAllGearListsForUser()
        .then(response => {
          this.allUserLists = Object.values(response.data.gearLists);
          this.allUserLists.forEach(list => {
            const itemWeights = list.items.map(item => item.weight);
            list.totalWeightInLbs = UnitConversionUtils.totalGrossLbs(
              itemWeights
            );
          });
        })
        .catch(err => {
          console.log("Something's gone wrong getting user lists.: ", err);
        });
    },
    getListsContainingItem() {
      GearListService.findListsWithItem(this.gearItemId)
        .then(result => {
          this.gearListSelections.values = result.data.map(list => list._id);
          this.existingLists = result.data.map(list => list._id);
        })
        .catch(err => {
          console.log(err);
        });
    },
    attachItemToGearLists() {
      if (
        JSON.stringify(this.existingLists) ===
        JSON.stringify(this.gearListSelections.values)
      ) {
        this.successMessage = "No list changes detected! 🤙";
        this.showSuccessDialog = true;
      } else {
        GearListService.findListsWithItem(this.gearItemId)
          .then(itemSavedLists => {
            GearListService.attachOneItemToManyLists({
              gearItemId: this.gearItemId,
              itemSavedListsIds: itemSavedLists.data.map(list => list._id),
              itemSelectedListIds: this.gearListSelections.values
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
                console.log(err);
              });
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    successDialogClose() {
      this.showSuccessDialog = false;
      this.goBack();
    },
    failureDialogClose() {
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

.mu-chip {
  color: #000;
  background-color: #aa00ff;
}
.mu-chip:hover {
  background-color: #d500f9 !important;
}

.mu-chip:active {
  background-color: #aa00ff;
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
</style>
