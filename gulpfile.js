import gulp from "gulp";
import shell from "gulp-shell";
import { rimraf } from "rimraf";

// gulp task to clean the dist folder before building
gulp.task("clean", async () => {
  await rimraf("dist");
});

// gulp task to build the project using Parcel
gulp.task("build", gulp.series("clean", shell.task("parcel build index.html")));

//gulp task to serve the project using Parcel
gulp.task("serve", shell.task("parcel index.html"));

// task for mocha to test shuffle function
gulp.task("test", shell.task("mocha"));

//gulp task to set default when run gulp command
gulp.task("default", gulp.series("build", "serve"));
