<template>
  <div>
    <mu-dialog
      title="Privacy Policy"
      width="100%"
      :scrollable="true"
      :open.sync="isOpen"
    >
      <i>Effective June 27, 2020</i>
      <p>
        GearList is operated by Sasquat.ch (“us”, “we”, or “our”) also known as,
        <a href="http://sasquat.ch" target="_blank">http://sasquat.ch</a>
        (Site). This page informs you of our policies regarding the collection,
        use and disclosure of Personal Information we receive from users of the
        Site.
      </p>
      <p>
        Your privacy is very important to us. We use your Personal Information
        only for providing and improving the Site. By using the Site, you agree
        to the collection and use of information in accordance with this policy.
      </p>
      <h3>What We Collect</h3>
      <h4>Personal Information</h4>
      <p>
        While using our Site, we may ask you to provide us with certain
        personally identifiable information that can be used to contact or
        identify you. Personally identifiable information may include, but is
        not limited to, your name and your email address (“Personal
        Information”).
      </p>
      <h4>Log Data</h4>
      <p>
        We collect information that your browser sends whenever you visit our
        Site (“Log Data”). This Log Data may include information such as your
        computer’s Internet Protocol (“IP”) address, browser type, browser
        version, the pages of our Site that you visit, the time and date of your
        visit, the time spent on those pages and other statistics.
      </p>
      <h4>Cookies</h4>
      <p>
        Cookies are files with small amount of data, which may include an
        anonymous unique identifier. Cookies are sent to your browser from a web
        site and stored on your computer’s hard drive. Like many sites, we use
        “cookies” to collect information. You can instruct your browser to
        refuse all cookies or to indicate when a cookie is being sent. However,
        if you do not accept cookies, you may not be able to use some portions
        of our Site.
      </p>
      <h3>What We do with Your Data</h3>
      <p>
        We may use your Personal Information to contact you with newsletters,
        marketing or promotional materials and other information that be
        relevant. We may also utilize your Personal Information to contact you
        in the event of privacy policy updates, terms of service updates, or
        important or critical updates. Analytics data may be used to understand
        website usage patterns.
      </p>
      <h3>Third Party Services</h3>
      <p>
        At this time there are no third party services, beyond CDNs which
        provide scripts for fonts or stylings. No third party services are
        monitoring or collecting any of your information.
      </p>

      <h3>Request Data Deletion</h3>
      <p>
        You may request data deletion by emailing us at support@sasqut.ch.
        Please contact us from the same email that you created your account
        with, so we may verify your user account and identity.
      </p>

      <!-- 
      
      Communications We may use your Personal Information to contact
      you with newsletters, marketing or promotional materials and other
      information that be relevant. We may also utilize your Personal
      Information to contact you in the event of privacy policy updates, terms
      of service updates, or important or critical updates. 
      
       Security
      The security of your Personal Information is important to us, but remember
      that no method of transmission over the Internet, or method of electronic
      storage, is 100% secure. While we strive to use commercially acceptable
      means to protect your Personal Information, we cannot guarantee its
      absolute security. Changes To This Privacy Policy This Privacy Policy is
      effective as of November 8th, 2017 and will remain in effect except with
      respect to any changes in its provisions in the future, which will be in
      effect immediately after being posted on this page. We reserve the right
      to update or change our Privacy Policy at any time and you should check
      this Privacy Policy periodically. Your continued use of the Service after
      we post any modifications to the Privacy Policy on this page will
      constitute your acknowledgment of the modifications and your consent to
      abide and be bound by the modified Privacy Policy. If we make any material
      changes to this Privacy Policy, we will notify you either through the
      email address you have provided us, or by placing a notice on our primary
      website and applications. For this additional reason, you should keep your
      contact and profile information current. Contact Us If you have any
      questions about this Privacy Policy, please contact us at
      support@sasquat.ch. -->
      <mu-button slot="actions" flat color="primary" @click="closePP"
        >Close</mu-button
      >
    </mu-dialog>
  </div>
</template>

<script>
export default {
  name: "DialogPrivacyPolicy",
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closePP() {
      this.$emit("closePPDialog");
    }
  }
};
</script>

<style></style>
