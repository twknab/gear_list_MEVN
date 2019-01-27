# Customize this Folder

- Create new file `credentials.js` in a JSON format.
- For example:

```javascript
modules.exports = {
  sessionSecret = "sessionSecretStringOrHashGoesHere"
};

```

- Import this file into your `app.js` (e.g, `import credentials from "~/server/src/config/credentials/credentials.js";`)
- Use `credentials.sessionSecret` or whatever credential you need in your app settings
- Add `~/server/src/config/credentials` to your .gitignore file.

This way your secret key won't be published on GitHub and will remain private to your development environment.
