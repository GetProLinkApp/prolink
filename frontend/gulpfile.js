const gulp = require('gulp');
const requireDir = require('require-dir');
const fs = require('fs');
const path = require('path');

// Supprimer les lignes liées à Pug
// const pug = require('gulp-pug');

requireDir('./gulp');

// Chemin vers votre fichier routes.json
const routesPath = path.join(__dirname, 'config', 'routes.json');

// Supprimer la tâche Pug
// gulp.task('pug', function() {
//   let routes = {};
//   if (fs.existsSync(routesPath)) {
//     routes = JSON.parse(fs.readFileSync(routesPath, 'utf8'));
//   }

//   return gulp.src('src/pug/**/*.pug')
//     .pipe(pug({
//       locals: {
//         routes: routes,
//         csrfToken: 'your_csrf_token'
//       },
//       pretty: true
//     }))
//     .pipe(gulp.dest('public'));
// });

// Ajouter des tâches pour traiter les fichiers HTML, CSS, et JS dans le dossier public
gulp.task('html', function() {
  return gulp.src('public/**/*.html')
    .pipe(gulp.dest('public'));
});

gulp.task('css', function() {
  return gulp.src('public/**/*.css')
    .pipe(gulp.dest('public'));
});

gulp.task('js', function() {
  return gulp.src('public/**/*.js')
    .pipe(gulp.dest('public'));
});

gulp.task('default', gulp.series('html', 'css', 'js'));

// const buildPlugin = require('./gulp/script.gulp');

gulp.task('compile', gulp.parallel('style', 'script', 'vendor'));
gulp.task('compile:all', gulp.parallel('compile', 'html', 'css', 'js'));

gulp.task('build', gulp.series('clean:build', 'build:static', 'compile:all'));
gulp.task('build:test', gulp.series('build', 'watch'));
gulp.task('live', gulp.series('clean:live', 'build', 'build:push'));

gulp.task('default', gulp.series('clean', 'compile', 'watch'));

gulp.task('product:make', gulp.series('compile:all', 'product'));

gulp.task('live:make', gulp.series('pre:live', 'post:live'));
