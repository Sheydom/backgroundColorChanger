import gulp from "gulp";
import shell from "gulp-shell";

// gulp task to build the project using Parcel
gulp.task("build", shell.task("parcel build index.html"));
//gulp task to serve the project using Parcel
gulp.task("serve", shell.task("parcel index.html"));
//gulp task to set default when run gulp command
gulp.task("default", gulp.series("build", "serve"));
