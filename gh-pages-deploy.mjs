//build and deploy /dist/ to github pages branch
import { execa } from "execa";
(async () => {
  try {
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    console.log("Building started...");
    await execa("npm", ["run", "build"]);
    await execa("git", ["--work-tree", "dist", "add", "--all"]);
    await execa("git", ["--work-tree", "dist", "commit", "-m", "gh-pages"]);
    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    await execa("rm", ["-r", "dist"]);
    await execa("git", ["checkout", "-f", "master"]);
    await execa("git", ["branch", "-D", "gh-pages"]);
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();
