<template>
  <div class="about">
    <mu-container class="margin-top dashboard-wrapper">
      <mu-row gutter>
        <mu-col span="12" sm="12" md="12" lg="6" xl="6">
          <h1>About GearList</h1>
        </mu-col>
      </mu-row>
      <mu-row gutter class="margin-bottom">
        <mu-col span="12" sm="12" md="12" lg="6" xl="6">
          <p>
            <b><em>"Necessity is the Mother of Invention"</em></b> is a phrase
            as old as modern society. GearList is a tool to help us be less
            forgetful -- it's too easy to forget important gear, even if we've
            done it a million times.
          </p>

          <p>
            GearList aims to solve this problem by keeping you organized. Create
            lists and items. You can see how heavy your total gear list will be,
            and even see the total weight of what you've packed so far by
            checking off each item as it's placed into your pack, vehicle or
            tote. No guessing or weighing involved!
          </p>
          <p>
            <b>Note</b>: When adding items, it's suggested to use the
            manufacturer's specifications, or a postal scale, to get the right
            weight)
          </p> </mu-col
        ><mu-col span="12" sm="12" md="12" lg="6" xl="6">
          <mu-list color="white" class="reason-list inquiry-form">
            <mu-list-item :ripple="false">
              <mu-list-item-action>
                <mu-icon value="list" color="#A926FB"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title
                >Create Gear Lists for different needs</mu-list-item-title
              >
            </mu-list-item>
            <mu-list-item :ripple="false">
              <mu-list-item-action>
                <mu-icon value="thumb_up" color="#A926FB"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title
                >Create Gear Items with their weight</mu-list-item-title
              >
            </mu-list-item>
            <mu-list-item :ripple="false">
              <mu-list-item-action>
                <mu-icon value="link" color="#A926FB"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title
                >Quickly link Gear Items & Gear Lists</mu-list-item-title
              >
            </mu-list-item>
            <mu-list-item :ripple="false">
              <mu-list-item-action>
                <mu-icon value="favorite" color="#A926FB"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title
                >Know the total weight of your Gear List
              </mu-list-item-title>
            </mu-list-item>
            <mu-list-item :ripple="false">
              <mu-list-item-action>
                <mu-icon value="work" color="#A926FB"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title
                >Know your total pack weight real-time
              </mu-list-item-title>
            </mu-list-item>
          </mu-list>
        </mu-col>
      </mu-row>
      <mu-divider class="margin-top-xl"></mu-divider>
      <mu-row>
        <mu-col span="12" sm="12" md="12" lg="12" xl="12" class="margin-top-xl">
          <mu-flex justify-content="center">
            <img src="../assets/gear-list-purple.png" />
          </mu-flex>
        </mu-col>
      </mu-row>
      <mu-divider class="margin-top-xl"></mu-divider>
      <mu-row>
        <mu-col span="12" sm="12" md="12" lg="12" xl="12" class="margin-top-xl">
          <h1>About Me</h1>
          <p>
            My name is Tim. I like to come up with ideas around something I
            might need, and try to make it using different technologies. You can
            learn more about me at my personal website if you'd like.
          </p>
          <mu-flex justify-content="center" class="margin-top-xl">
            <mu-button href="http://sasquat.ch" target="_blank"
              ><mu-icon value="open_in_new" class="margin-right-sm"></mu-icon>
              Visit My Website</mu-button
            >
          </mu-flex>
        </mu-col>
      </mu-row>
      <mu-divider class="margin-top-xl"></mu-divider>
      <!-- <mu-divider class="margin-top-xl"></mu-divider> -->
      <mu-row gutter class="margin-bottom margin-top">
        <mu-col span="12" sm="12" md="12" lg="12" xl="12">
          <h1>Inquiries, Bug Reports & Feature Requests</h1>

          <!-- Contact Form -->
          <mu-form
            ref="contact"
            :model="contactForm"
            class="margin-top contact-form"
          >
            <!-- Backend Errors Display -->
            <div v-if="Object.keys(errors).length >= 1" class="server-errors">
              <h2>Whoops, there's a few issues...</h2>
              <ul>
                <li v-for="(error, key, index) in errors" :key="index">
                  {{ error.message }}
                </li>
              </ul>
            </div>
            <mu-row gutter class="margin-bottom">
              <mu-col span="12" sm="12" md="6" lg="6" xl="6">
                <!-- First Name -->
                <mu-form-item
                  label="First Name"
                  prop="firstName"
                  color="primary"
                  :rules="firstNameRules"
                >
                  <mu-text-field
                    v-model="contactForm.firstName"
                    prop="firstName"
                    color="primary"
                  ></mu-text-field>
                </mu-form-item>
              </mu-col>
              <mu-col span="12" sm="12" md="6" lg="6" xl="6">
                <!-- Last Name -->
                <mu-form-item
                  label="Last Name"
                  prop="lastName"
                  color="primary"
                  :rules="lastNameRules"
                >
                  <mu-text-field
                    v-model="contactForm.lastName"
                    prop="lastName"
                    color="primary"
                  ></mu-text-field>
                </mu-form-item>
              </mu-col>
            </mu-row>
            <mu-row gutter class="margin-bottom">
              <mu-col span="12" sm="12" md="6" lg="6" xl="6">
                <!-- Email -->
                <mu-form-item
                  label="Email"
                  prop="email"
                  color="primary"
                  :rules="emailRules"
                  type="email"
                >
                  <mu-text-field
                    v-model="contactForm.email"
                    prop="email"
                    color="primary"
                  ></mu-text-field>
                </mu-form-item>
              </mu-col>
              <mu-col span="12" sm="12" md="6" lg="6" xl="6">
                <!-- Reason for Contacting -->
                <mu-form-item
                  label="Reason for Contacting"
                  prop="reason"
                  color="primary"
                >
                  <mu-select v-model="contactForm.reason" full-width>
                    <mu-option
                      v-for="(option, index) in reasonOptions"
                      :key="index"
                      :label="option"
                      :value="option"
                      class="inquiry-form"
                    ></mu-option>
                  </mu-select>
                </mu-form-item>
              </mu-col>
            </mu-row>
            <!-- Message -->
            <mu-form-item prop="message" label="Message">
              <mu-text-field
                multi-line
                :rows="3"
                :rows-max="6"
                v-model="contactForm.message"
                :rules="messageRules"
              ></mu-text-field>
            </mu-form-item>
            <!-- reCaptcha around Submit Button / Cancel-->
            <vue-recaptcha
              ref="recaptcha"
              :sitekey="siteKey"
              size="invisible"
              :loadRecaptchaScript="true"
              @verify="onVerify"
              @expired="onExpired"
            >
              <mu-button
                round
                full-width
                color="purpleA700"
                @click="submit"
                large
              >
                <mu-icon value="check"></mu-icon>
                <span class="button-icon">Send</span>
              </mu-button>
            </vue-recaptcha>
            <mu-button
              large
              flat
              color="purple50"
              @click="goHome"
              class="flat-full-width margin-top-md"
            >
              <mu-icon value="close"></mu-icon>
              <span class="button-icon">Nevermind</span>
            </mu-button>
          </mu-form>
        </mu-col>
        <mu-col span="12" class="margin-bottom-lg">
          <p>
            You can also find me on
            <a href="https://github.com/twknab" target="_blank"> 🔗GitHub</a>
            or <a href="https://t.me/twknab"> 🔗Telegram</a>.
          </p>
        </mu-col>
      </mu-row>
    </mu-container>
  </div>
</template>

<script>
import HomepageService from "@/services/HomepageService.js";
import VueRecaptcha from "vue-recaptcha";
// import envVariables from "@/variables";
export default {
  name: "About",
  components: { VueRecaptcha },
  data() {
    return {
      errors: {},
      siteKey: "6LfMFv0UAAAAAKFUUFf6s1hR76B6rBtvJamjHtBw",
      reasonOptions: ["Bug Report", "Feature Request", "General Message"],
      firstNameRules: [
        { validate: val => !!val, message: "First name is required" },
        {
          validate: val => val.length >= 2 && val.length <= 30,
          message: "First name must be 2-30 characters"
        }
      ],
      lastNameRules: [
        { validate: val => !!val, message: "Last name is required" },
        {
          validate: val => val.length >= 2 && val.length <= 30,
          message: "Last name must be 2-30 characters"
        }
      ],
      emailRules: [
        { validate: val => !!val, message: "Email is required" },
        {
          validate: val => val.length >= 5 && val.length <= 50,
          message: "Email must be 5-50 characters"
        }
      ],
      messageRules: [
        { validate: val => !!val, message: "Message is required" },
        {
          validate: val => val.length >= 12,
          message: "Message must be at least 12 characters"
        }
      ],
      contactForm: {
        firstName: "",
        lastName: "",
        email: "",
        reason: "General Message",
        message: "",
        reCaptchaToken: ""
      }
    };
  },
  methods: {
    submit() {
      this.$refs.contact.validate().then(result => {
        if (result) {
          // Begin recaptcha validation
          this.$refs.recaptcha.execute();
        }
      });
    },
    onVerify: function(reCaptchaToken) {
      console.log("Verified!");
      this.$refs.recaptcha.reset();
      this.contactForm.reCaptchaToken = reCaptchaToken;
      // console.log(this.contactForm);
      // Send form:
      HomepageService.sendContactForm(this.contactForm)
        .then(() => {
          // Redirect to home view
          this.goHome();
        })
        .catch(error => {
          this.errors = error.response.data;
        });
    },
    onExpired: function() {
      console.log("Expired");
      this.$refs.recaptcha.reset();
    },
    goHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style>
.mu-checkbox-label {
  color: rgba(255, 255, 255, 0.678) !important;
}

.mu-checkbox {
  color: rgba(255, 255, 255, 0.678) !important;
}
.contact-form {
  background-color: #37303c;
  padding: 20px;
  border-radius: 15px;
  border: 5px solid #8500ff;
}
.inquiry-form .mu-item-title {
  color: white;
  font-style: italic;
}
.inquiry-form .mu-item-title {
  color: white;
  font-weight: bolder;
  font-style: unset;
}
.mu-popover {
  background-color: #282828;
}
.mu-select-input {
  color: #fff !important;
  font-size: 28px !important;
  margin: 15px 15px 15px 0px !important;
  line-height: 1em;
}
.mu-select-icon {
  fill: white;
}
ul.mu-list.reason-list {
  margin-left: auto;
  margin-right: auto;
  width: 370px;
}
</style>
