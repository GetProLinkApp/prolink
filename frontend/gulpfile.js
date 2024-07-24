const gulp = require('gulp');
const requireDir = require('require-dir');
const fs = require('fs');
const path = require('path');
const pug = require('gulp-pug');


requireDir('./gulp');

// Chemin vers votre fichier routes.json
const routesPath = path.join(__dirname, 'config', 'routes.json');

gulp.task('pug', function() {
  // Lire le fichier routes.json
  let routes = {};
  if (fs.existsSync(routesPath)) {
    routes = JSON.parse(fs.readFileSync(routesPath, 'utf8'));
  }

  return gulp.src('src/pug/**/*.pug')
    .pipe(pug({
      locals: {
        routes: routes,  // Passer les variables ici
        csrfToken: 'your_csrf_token'  // Exemple de token CSRF si nécessaire
      },
      pretty: true
    }))
    .pipe(gulp.dest('public'));
});

gulp.task('default', gulp.series('pug'));

// const buildPlugin = require('./gulp/script.gulp');

/*= -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
|  Compile
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
gulp.task('compile', gulp.parallel('style', 'script', 'vendor'));
gulp.task('compile:all', gulp.parallel('compile', 'pug'));

/*= -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
|  Deploy
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
gulp.task('build', gulp.series('clean:build', 'build:static', 'compile:all'));
gulp.task('build:test', gulp.series('build', 'watch'));
gulp.task('live', gulp.series('clean:live', 'build', 'build:push'));

/*= -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
|  Run development environment
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
gulp.task('default', gulp.series('clean', 'compile', 'watch'));

/*= -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
|  Product
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
gulp.task('product:make', gulp.series('compile:all', 'product'));

gulp.task('live:make', gulp.series('pre:live', 'post:live'));

