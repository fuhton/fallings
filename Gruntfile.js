module.exports = function(grunt) {

    grunt.initConfig({

        // Import package manifest
        pkg: grunt.file.readJSON("fallings.jquery.json"),

        // Banner definitions
        meta: {
            banner: "/*\n" +
                " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
                " *  <%= pkg.description %>\n" +
                " *  <%= pkg.homepage %>\n" +
                " *\n" +
                " *  Made by <%= pkg.author.name %>\n" +
                " *  Under <%= pkg.licenses[0].type %> License\n" +
                " */\n"
        },

        // Concat definitions
        concat: {
            dist: {
                src: ["src/jquery.fallings.js"],
                dest: "dist/jquery.fallings.js"
            },
            options: {
                banner: "<%= meta.banner %>"
            }
        },

        // Lint definitions
        jshint: {
            files: ["src/jquery.fallings.js"],
            options: {
                jshintrc: ".jshintrc"
            }
        },

        // Minify definitions
        uglify: {
            my_target: {
                src: ["dist/jquery.fallings.js"],
                dest: "dist/jquery.fallings.min.js"
            },
            options: {
                banner: "<%= meta.banner %>"
            }
        },

        // CoffeeScript compilation
        coffee: {
            compile: {
                files: {
                    "dist/jquery.fallings.js": "src/jquery.fallings.coffee"
                }
            }
        },

        less: {
            development: {
                options: {
                    paths: ["demo/styles"],
                    yuicompress: true
                },
                files: {
                    "demo/styles/style.css": "demo/styles/style.less"
                }
            }
        },
        watch: {
            files: "demo/styles/*.less",
            tasks: ["less"]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-coffee");
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("default", ["jshint", "concat", "uglify"]);
    grunt.registerTask("travis", ["jshint"]);

};
