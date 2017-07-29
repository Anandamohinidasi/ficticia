const gulp = require("gulp")
const sass = require("gulp-sass")

gulp.task("sass", () => gulp.src([
  "./app/**/**/*.scss"
])
  .pipe(sass())
  .pipe(gulp.dest("./public")));
 
gulp.task("sass:watch", () => {
  gulp.watch([
   "./app/**/**/*.scss"
  ], ["sass"]);
});