import { execa } from "execa";
(async () => {
  try {
    console.log("Compiling SCSS...");
    await execa("sass", [
      "src/assets/scss/index.scss:public/style.css",
      "--style=compressed",
      "--no-source-map",
    ]);
    console.log("Starting serve...");
    execa("vue-cli-service", ["serve"]);
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();
