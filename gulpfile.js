// const gulp = require("gulp");
// const suite = require("@cloudcannon/suite");

// suite.dev(gulp);
// suite.dist(gulp, {
//     "dist": {
//         "baseurl": "staging"
//     }
// });
// suite.screenshots(gulp);
// suite.i18n(gulp, {
//     "i18n": {
//         "source_version": 2
//     }
// });
// suite.state(gulp, {});
// suite.help(gulp);
// suite.proofer(gulp, { 
//     internal_domains: ['localhost:4000'], 
//     check_external_hash: true, 
//     cache: { 
//         timeframe: 60000,
//         storage_dir: '_cache.json'
//     }
// });
// suite.state(gulp);

// gulp.task("default", gulp.series("help"));

const gulp = require("gulp");
const suite = require("@cloudcannon/suite");

suite.dev(gulp);