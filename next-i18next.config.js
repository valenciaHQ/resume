const path = require("path");
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    localePath: path.resolve("./public/locales"),
  },
  react: { useSuspense: false },
};
