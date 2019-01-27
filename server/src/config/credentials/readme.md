# Customize this Folder

- Create new file `credentials.js` as a JS module.
- For example:

```javascript
modules.exports = {
  sessionSecret: "sessionSecretStringOrHashGoesHere"
};
```

- Add `~/server/src/config/credentials` to your .gitignore file.

This way your secret key won't be published on GitHub and will remain private to your development environment.
