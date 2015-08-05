module.exports = function(grunt) {

	/**
	 * Dynamically load npm tasks
	 */
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

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
				" *  Made by <%= pkg.author.name %>\n" +
				" *  Under <%= pkg.license %> License\n" +
				" */\n"
		},

		/**
		 * less
		 * LESS/CSS compilation
		 * https://github.com/sindresorhus/grunt-contrib-less
		 */
		less: {
			my_target: {
				options: {
					compress: false,
					cleancss: false,
					ieCompact: true,
					sourceMap: true,
					strictMath: true,
				},
				src: ["src/less/plugin.less"],
				dest: "dist/plugin.css"
			}
		},

		/**
		 * Autoprefixer
		 * Adds vendor prefixes if need automatcily
		 * https://github.com/nDmitry/grunt-autoprefixer
		 */
		autoprefixer: {
			my_target: {
				options: {
					browsers: ['last 2 version', 'Firefox >= 24', 'safari 6', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
				},
				src: "dist/plugin.css",
				dest: "dist/plugin.css",
			}
		},

		// Concat definitions
		concat: {
			options: {
				banner: "<%= meta.banner %>"
			},
			dist: {
				files: {
					'dist/plugin-prototype.js': ['src/js/plugin-prototype.js'],
					'dist/plugin-simple.js': ['src/js/plugin-simple.js']
				}
			}
		},

		// Minify definitions
		uglify: {
			options: {
				banner: "<%= meta.banner %>"
			},
			my_target: {
				files: {
					'dist/plugin-prototype.min.js': ['dist/plugin-prototype.js'],
					'dist/plugin-simple.min.js': ['dist/plugin-simple.js']
				}
			}
		},

		// watch for changes to source
		// Better than calling grunt a million times
		// (call 'grunt watch')
		watch: {
		    files: ['src/**/*'],
		    tasks: ['default']
		}

	});

	grunt.registerTask("build", ["less", "autoprefixer", "concat", "uglify"]);
	grunt.registerTask("default", ["build"]);

};
