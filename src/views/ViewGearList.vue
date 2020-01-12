<template>
  <div>
    <mu-container>
      <mu-row gutter>
        <mu-col span="12">
          <h1>{{ list.title }}</h1>
        </mu-col>
      </mu-row>
      <mu-row gutter>
        <mu-col span="12">
          <div v-if="Object.keys(this.list.items).length > 0">
            <mu-flex :key="item._id" v-for="item in list.items">
              <mu-checkbox
                :value="item._id"
                v-model="item.completed"
                :label="item.title"
                @change="updateCompleteStatus(item)"
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
      list: {}
    };
  },
  created() {
    this.updatePrimaryNav();
    this.getGearListAndItems(this.$route.params.id);
  },
  methods: {
    updatePrimaryNav() {
      this.$emit("updateNav");
    },
    getGearListAndItems(listId) {
      GearListService.getListAndItems(listId)
        .then(listAndItems => {
          this.list = listAndItems.data;
        })
        .catch(err => {
          console.log("Something's gone wrong: ", err);
        });
    },
    updateCompleteStatus(item) {
      console.log(item);
      GearItemService.changeCompleteStatus(item._id, item.completed)
        .then(() => {
          // refresh gear items
          this.getGearListAndItems(this.$route.params.id);
        })
        .catch(err => {
          console.log("Marking complete failed: ", err);
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
