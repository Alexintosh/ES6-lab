module.exports = function (grunt) {
   grunt.initConfig({
      browserify: {
         dist: {
            options: {
               transform: [
                  ["babelify", {
                     loose: "all"
                  }]
               ]
            },
            files: {
               // if the source file has an extension of es6 then
               // we change the name of the source file accordingly.
               // The result file's extension is always .js
               "./dist/module.js": ["./modules/*.js"]
            }
         }
      },
      watch: {
         scripts: {
            files: ["./modules/*.*"],
            tasks: ["browserify"]
         }
      },
      connect: {
        server: {
          options: {
            port: 9000,
            base: '.'
          }
        }
      }
   });

   grunt.loadNpmTasks("grunt-browserify");
   grunt.loadNpmTasks("grunt-contrib-watch");
   grunt.loadNpmTasks('grunt-contrib-connect');

   grunt.registerTask("build", ["browserify"]);
   grunt.registerTask("default", ["connect", "watch"]);
};
