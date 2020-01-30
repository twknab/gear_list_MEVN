<template>
  <div>
    <mu-container class="padding-all-md">
      <mu-flex justify-content="center" class="margin-top margin-left-sm">
        <mu-icon
          color="purpleA700"
          value="terrain"
          size="73"
          justify-content="before"
          class="margin-right-md margin-top-sm"
        ></mu-icon>
        <h1>{{ listTitle }}</h1>
      </mu-flex>
      <mu-divider></mu-divider>
      <mu-row gutter class="margin-top-md padding-top-lg padding-bottom-lg">
        <mu-col span="12">
          <div v-if="Object.keys(this.itemCompletionData).length > 0">
            <mu-flex :key="itemData._id" v-for="itemData in itemCompletionData">
              <mu-checkbox
                :value="itemData.gearItem.title"
                v-model="itemData.completed"
                :label="itemData.gearItem.title"
                @change="
                  updateCompleteStatus(
                    itemData.gearItem,
                    listId,
                    itemData.completed
                  )
                "
              ></mu-checkbox>
            </mu-flex>
          </div>
          <div v-else>
            <mu-flex justify-content="center" class="margin-top">
              <h3>Add some Gear Items, this list is empty!</h3>
              <mu-icon
                color="purpleA700"
                value="offline_bolt"
                size="36"
                justify-content="end"
                class="margin-left-sm empty-list"
              ></mu-icon>
            </mu-flex>
          </div>
        </mu-col>
      </mu-row>
      <mu-divider></mu-divider>
      <mu-flex justify-content="center" class="margin-top margin-left-sm">
        <mu-button
          large
          flat
          color="primary"
          @click="$router.push({ name: 'dashboard' })"
          class="margin-left-sm"
        >
          <mu-icon left value="arrow_back"></mu-icon>
          Back to Dashboard
        </mu-button>
      </mu-flex>
    </mu-container>
  </div>
</template>

<script>
import GearListService from "@/services/GearListService.js";
import GearItemService from "@/services/GearItemService.js";
export default {
  name: "ViewGearList",
  data() {
    return {
      errors: {},
      listTitle: "",
      listId: null,
      itemCompletionData: [{ completed: false, gearItem: {} }]
    };
  },
  created() {
    this.updatePrimaryNav();
    this.getGearListAndItemCompletions(this.$route.params.id);
  },
  methods: {
    updatePrimaryNav() {
      this.$emit("updateNav");
    },
    getGearListAndItemCompletions(listId) {
      GearListService.getListAndItemCompletions({ gearListId: listId })
        .then(listAndItems => {
          this.itemCompletionData = listAndItems.data.itemCompletions;
          this.listTitle = listAndItems.data.listName;
          this.listId = listAndItems.data.listId;
        })
        .catch(err => {
          console.log("Fetching item completion data failed: ", err);
        });
    },
    updateCompleteStatus(item, listId, complete) {
      GearItemService.changeCompleteStatus(item._id, listId, complete)
        .then(() => {
          // refresh gear items
          this.getGearListAndItemCompletions(this.$route.params.id);
        })
        .catch(err => {
          console.log("Marking complete failed...", err);
        });
    }
  }
};
</script>

<style>
.mu-checkbox-label {
  color: #fff;
  /* font-weight: bolder; */
  font-size: 20px;
}
.empty-list {
  position: relative;
  top: 10px;
}
.mu-checkbox-checked .mu-checkbox-label {
  text-decoration: line-through;
  font-style: italic;
  color: lightgray;
  font-weight: lighter;
}
/* input[type="checkbox"] {
  transform: scale(2, 2);
} */
.mu-checkbox {
  margin-left: 20px;
  margin-bottom: 15px;
}

.mu-checkbox-checked .mu-checkbox-icon-checked,
.mu-checkbox-icon-uncheck {
  opacity: 1;
  /* -webkit-transform: scale(1.3); */
  transform: scale(1.2);
  color: rgb(170, 0, 255);
}
/* .mu-checkbox-icon-uncheck {
    position: absolute;
    left: 0;
    top: 0;
    transform: scale(1.3);
    opacity: 1;
    -webkit-transition: opacity 1s cubic-bezier(.23,1,.32,1) .2s;
    transition: opacity 1s cubic-bezier(.23,1,.32,1) .2s;
} */
</style>
