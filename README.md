### A jump-start for jQuery plugins development

So, you've tried your hand at writing jQuery plugins and you're comfortable putting together something that probably works. Awesome! Thing is, you think there might be better ways you could be writing them - you've seen them done a number of different ways in the wild, but aren't really sure what the differences between these patterns are or how to get started with them.

This project won't seek to provide a perfect solution to every possible pattern, but will attempt to cover a simple template for beginners and above. By using a basic defaults object, simple constructor for assigning the element to work with and extending options with defaults and a lightweight wrapper around the constructor to avoid issues with multiple instantiations.

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/plugin.min.js"></script>
	```

3. Call the plugin:

	```javascript
	$("#element").defaultPluginName({
		propertyName: "a custom value"
	});
	```

## Structure

The basic structure of the project is given in the following way:

```
├── demo/
│   └── index.html
├── dist/
│   ├── plugin.js
│   └── plugin.min.js
├── src/
│   └── plugin.js
├── .editorconfig
├── .gitignore
├── Gruntfile.js
└── package.json
```

#### [demo/](https://github.com/idomusha/jquery-plugin-boilerplate/tree/master/demo)

Contains a simple HTML file to demonstrate your plugin.

#### [dist/](https://github.com/idomusha/jquery-plugin-boilerplate/tree/master/dist)

This is where the generated files are stored once Grunt runs.

#### [src/](https://github.com/idomusha/jquery-plugin-boilerplate/tree/master/src)

Contains the files responsible for your plugin, you can choose between JavaScript or CoffeeScript.

#### [.editorconfig](https://github.com/idomusha/jquery-plugin-boilerplate/tree/master/.editorconfig)

This file is for unifying the coding style for different editors and IDEs.

> Check [editorconfig.org](http://editorconfig.org) if you haven't heard about this project yet.

#### [.gitignore](https://github.com/idomusha/jquery-plugin-boilerplate/tree/master/.gitignore)

List of files that we don't want Git to track.

> Check this [Git Ignoring Files Guide](https://help.github.com/articles/ignoring-files) for more details.

#### [Gruntfile.js](https://github.com/idomusha/jquery-plugin-boilerplate/tree/master/Gruntfile.js)

Contains all automated tasks using Grunt.

> Check [gruntjs.com](http://gruntjs.com) if you haven't heard about this project yet.

#### [package.json](https://github.com/idomusha/jquery-plugin-boilerplate/tree/master/package.json)

Specify all dependencies loaded via Node.JS.

> Check [NPM](https://npmjs.org/doc/json.html) for more details.

## Guides

#### How did we get here?

Have you got in this repo and still not sure about using this boilerplate?

Well, extending jQuery with plugins and methods is very powerful and can save you and your peers a lot of development time by abstracting your most clever functions into plugins.

[This awesome guide](https://github.com/jquery-boilerplate/boilerplate/wiki/How-did-we-get-here%3F), adapted from [jQuery Plugins/Authoring](http://docs.jquery.com/Plugins/Authoring), will outline the basics, best practices, and common pitfalls to watch out for as you begin writing your plugin.

#### How to publish plugins?

Also, check our guide on [How to publish a plugin in jQuery Plugin Registry](https://github.com/jquery-boilerplate/boilerplate/wiki/How-to-publish-a-plugin-in-jQuery-Plugin-Registry
)!

**Note:** The jQuery Plugin Registry is in read-only mode. New plugin releases will not be processed.
jQuery recommends moving to [npm](https://www.npmjs.com/), using ["jquery-plugin"](https://www.npmjs.com/browse/keyword/jquery-plugin) as the keyword in your package.json. See [how to publish into npm registry](https://gist.github.com/coolaj86/1318304).

## Team

jQuery Plugin Boilerplate is based on (https://github.com/johndugan/jquery-plugin-boilerplate) and adapted to my personal taste.

[![idomusha](https://fr.gravatar.com/userimage/43584317/49cfb592a2054e9c39c5dc195e5ea419.png?size=70)](https://github.com/idomusha) |
--- |
[idomusha](https://github.com/idomusha) |

jQuery Boilerplate was made with love by these guys and a bunch of awesome [contributors](https://github.com/jquery-boilerplate/boilerplate/graphs/contributors).

[![John Dugan](https://avatars2.githubusercontent.com/u/1389303?v=3&s=70)](http://john-dugan.com) | [![Zeno Rocha](http://gravatar.com/avatar/e190023b66e2b8aa73a842b106920c93?s=70)](http://zenorocha.com) | [![Addy Osmani](http://gravatar.com/avatar/96270e4c3e5e9806cf7245475c00b275?s=70)](http://addyosmani.com) | [![Helder Santana](http://gravatar.com/avatar/63fb620ee7d14fc91030d4349d189b3e?s=70)](http://heldr.com)
--- | --- | --- | --- | --- | --- | --- | --- | ---
[John Dugan](http://john-dugan.com) | [Zeno Rocha](http://zenorocha.com) | [Addy Osmani](http://addyosmani.com) | [Helder Santana](http://heldr.com)

## Contributing

Check [CONTRIBUTING.md](https://github.com/jquery-boilerplate/boilerplate/blob/master/CONTRIBUTING.md) for more information.

## History

Check [Releases](https://github.com/jquery-boilerplate/jquery-boilerplate/releases) for detailed changelog.

## License

[MIT License](http://zenorocha.mit-license.org/) © Zeno Rocha
