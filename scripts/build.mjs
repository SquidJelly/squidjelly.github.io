import { execa } from "execa";
(async () => {
  try {
    console.log("Compiling SCSS...");
    await execa("sass", [
      "src/assets/scss/index.scss:public/style.css",
      "--style=compressed",
      "--no-source-map"
    ]);
    console.log("Building started...");
    execa("vue-cli-service", ["build"]);
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();
