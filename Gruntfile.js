module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON("package.json"),

		// Banner definitions
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  Made by <%= pkg.author %>\n" +
				" *  Under <%= pkg.license %> License\n" +
				" */\n"
		},
		// Lint definitions
		jshint: {
			dist: ["src/jquery.fallings.js"],
			options: {
				jshintrc: ".jshintrc"
			}
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

		// Minify definitions
		uglify: {
			dist: {
				src: ["dist/jquery.fallings.js"],
				dest: "dist/jquery.fallings.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
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
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask("default", ["jshint", "concat", "uglify"]);
};
