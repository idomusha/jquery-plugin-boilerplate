/*
 *  jquery-plugin-boilerplate - v3.5.1
 *  A jump-start for jQuery plugins development.
 *  http://jqueryboilerplate.com
 *
 *  Made by Zeno Rocha
 *  Under MIT License
 */
/**
 * plugin-boilerplate - v0.0.1
 * A jump-start for jQuery plugins development.
 *
 * based from jquery-boilerplate - v3.4.0 made by Zeno Rocha
 * Under MIT License
 */

/*
 The semi-colon before the function invocation is a safety net against
 concatenated scripts and/or other plugins which may not be closed properly.

 "undefined" is used because the undefined global variable in ECMAScript 3
 is mutable (ie. it can be changed by someone else). Because we don't pass a
 value to undefined when the anonymyous function is invoked, we ensure that
 undefined is truly undefined. Note, in ECMAScript 5 undefined can no
 longer be modified.

 "window" and "document" are passed as local variables rather than global.
 This (slightly) quickens the resolution process.
 */
;
(function($, window, document, undefined) {

  /*
   Store the name of the plugin in the "pluginName" variable. This
   variable is used in the "Plugin" constructor below, as well as the
   plugin wrapper to construct the key for the "$.data" method.

   More: http://api.jquery.com/jquery.data/
   */
  var pluginName = 'defaultPluginName';
  var debug = true;

  /*
   The "Plugin" constructor, builds a new instance of the plugin for the
   DOM node(s) that the plugin is called on. For example,
   "$('h1').pluginName();" creates a new instance of pluginName for
   all h1's.
   */

  // Create the plugin constructor
  function Plugin(element, options) {
    /*
     Provide local access to the DOM node(s) that called the plugin,
     as well local access to the plugin name and default options.
     */
    this.element = element;
    this._name = pluginName;

    /*
     The "$.extend" method merges the contents of two or more objects,
     and stores the result in the first object. The first object is
     empty so that we don't alter the default options for future
     instances of the plugin.

     More: http://api.jquery.com/jquery.extend/
     */
    this._defaults = $.fn[ pluginName ].defaults;
    this.settings = $.extend({}, this._defaults, options);
    this.settings.$item = Private.define(this.settings.item);

    /*
     The "init" method is the starting point for all plugin logic.
     Calling the init method here in the "Plugin" constructor function
     allows us to store all methods (including the init method) in the
     plugin's prototype. Storing methods required by the plugin in its
     prototype lowers the memory footprint, as each instance of the
     plugin does not need to duplicate all of the same methods. Rather,
     each instance can inherit the methods from the constructor
     function's prototype.
     */
    this.init();
  }

  // Avoid Plugin.prototype conflicts
  $.extend(Plugin.prototype, {

    // Initialization logic
    init: function() {
      /*
       Create additional methods below and call them via
       "this.myFunction(arg1, arg2)", ie: "this.buildCache();".

       Note, you can access the DOM node(s), plugin name, default
       plugin options and custom plugin options for a each instance
       of the plugin by using the variables "this.element",
       "this._name", "this._defaults" and "this.options" created in
       the "Plugin" constructor function (as shown in the buildCache
       method below).
       */

      this.buildCache();
      this.bindEvents();
    },

    // Remove plugin instance completely
    destroy: function() {
      /*
       The destroy method unbinds all events for the specific instance
       of the plugin, then removes all plugin data that was stored in
       the plugin instance using jQuery's .removeData method.

       Since we store data for each instance of the plugin in its
       instantiating element using the $.data method (as explained
       in the plugin wrapper below), we can call methods directly on
       the instance outside of the plugin initalization, ie:
       $('selector').data('plugin_defaultPluginName').someOtherFunction();

       Consequently, the destroy method can be called using:
       $('selector').data('plugin_defaultPluginName').destroy();
       */
      this.unbindEvents();
      this.$element.removeData();
    },

    // Cache DOM nodes for performance
    buildCache: function() {
      /*
       Create variable(s) that can be accessed by other plugin
       functions. For example, "this.$element = $(this.element);"
       will cache a jQuery reference to the element that initialized
       the plugin. Cached variables can then be used in other methods.
       */
      this.$element = $(this.element);
    },

    // Bind events that trigger methods
    bindEvents: function() {
      var _this = this;

      /*
       Bind event(s) to handlers that trigger other functions, ie:
       "plugin.$element.on('click', function() {});". Note the use of
       the cached variable we created in the buildCache method.

       All events are namespaced, ie:
       ".on('click'+'.'+this._name', function() {});".
       This allows us to unbind plugin-specific events using the
       unbindEvents method below.
       */
      _this.$element.on('click' + '.' + _this._name, function() {
        /*
         Use the "call" method so that inside of the method being
         called, ie: "someOtherFunction", the "this" keyword refers
         to the plugin instance, not the event handler.

         More: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
         */
        _this.someOtherFunction.call(_this);
      });
    },

    // Unbind events that trigger methods
    unbindEvents: function() {
      /*
       Unbind all events in our plugin's namespace that are attached
       to "this.$element".
       */
      this.$element.off('.' + this._name);
    },

    /*
     "someOtherFunction" is an example of a custom method in your
     plugin. Each method should perform a specific task. For example,
     the buildCache method exists only to create variables for other
     methods to access. The bindEvents method exists only to bind events
     to event handlers that trigger other methods. Creating custom
     plugin methods this way is less confusing (separation of concerns)
     and makes your code easier to test.
     */

    // Create custom methods
    someOtherFunction: function() {
      alert('I promise to do something cool!');
      this.callback();
    },

    callback: function() {
      // Cache onComplete option
      var onComplete = this.settings.onComplete;

      if (typeof onComplete === 'function') {
        /*
         Use the "call" method so that inside of the onComplete
         callback function the "this" keyword refers to the
         specific DOM node that called the plugin.

         More: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
         */
        onComplete.call(this.element);
      }
    },

  });

  // A singleton for private stuff
  var Private = {

    define: function(o) {
      if (debug) {
        console.log('##################### define()');
      }

      var $returnObject = null;

      // Undefined item
      if (typeof o === 'undefined') {
        return;
      }

      // Object item
      else if ((typeof o === 'object') && (o !== null)) {
        $returnObject = o;
      }

      // Id or class item
      else if ((typeof o === 'string') /*&& ((o.charAt(0) == '#') || (o.charAt(0) == '.'))*/) {
        $returnObject = $(o);
      }

      console.log(o);
      console.log($returnObject);
      return $returnObject;
    },

  };

  /*
   Create a lightweight plugin wrapper around the "Plugin" constructor,
   preventing against multiple instantiations.

   More: http://learn.jquery.com/plugins/basic-plugin-creation/
   */

  // Prototype function
  // You don't need to change something below:
  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations and allowing any
  // public function (ie. a function whose name doesn't start
  // with an underscore) to be called via the jQuery plugin,
  // e.g. $(element).defaultPluginName('functionName', arg1, arg2)
  $.fn[pluginName] = function(options) {
    var args = arguments;

    // Is the first parameter an object (options), or was omitted,
    // instantiate a new instance of the plugin.
    if (options === undefined || typeof options === 'object') {
      return this.each(function() {

        // Only allow the plugin to be instantiated once,
        // so we check that the element has no plugin instantiation yet
        if (!$.data(this, 'plugin_' + pluginName)) {

          // if it has no instance, create a new one,
          // pass options to our plugin constructor,
          // and store the plugin instance
          // in the elements jQuery data object.
          $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
        }
      });

      // If the first parameter is a string and it doesn't start
      // with an underscore or "contains" the `init`-function,
      // treat this as a call to a public method.
    } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {

      // Cache the method call
      // to make it possible
      // to return a value
      var returns;

      this.each(function() {
        var instance = $.data(this, 'plugin_' + pluginName);

        // Tests that there's already a plugin-instance
        // and checks that the requested public method exists
        if (instance instanceof Plugin && typeof instance[options] === 'function') {

          // Call the method of our plugin instance,
          // and pass it the supplied arguments.
          returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
        }

        // Allow instances to be destroyed via the 'destroy' method
        if (options === 'destroy') {
          $.data(this, 'plugin_' + pluginName, null);
        }
      });

      // If the earlier cached method
      // gives a value back return the value,
      // otherwise return this to preserve chainability.
      return returns !== undefined ? returns : this;
    }
  };

  /*
   Attach the default plugin options directly to the plugin object. This
   allows users to override default plugin options globally, instead of
   passing the same option(s) every time the plugin is initialized.

   For example, the user could set the "property" value once for all
   instances of the plugin with
   "$.fn.pluginName.defaults.property = 'myValue';". Then, every time
   plugin is initialized, "property" will be set to "myValue".

   More: http://learn.jquery.com/plugins/advanced-plugin-concepts/
   */
  $.fn[ pluginName ].defaults = {
    element: '.item',
    onComplete: null,
    debug: true,
  };

})(jQuery, window, document);
