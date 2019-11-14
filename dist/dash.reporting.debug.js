(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.dashjs || (g.dashjs = {})).MetricsReporting = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
/**
 * @module FactoryMaker
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var FactoryMaker = (function () {

    var instance = undefined;
    var singletonContexts = [];
    var singletonFactories = {};
    var classFactories = {};

    function extend(name, childInstance, override, context) {
        if (!context[name] && childInstance) {
            context[name] = {
                instance: childInstance,
                override: override
            };
        }
    }

    /**
     * Use this method from your extended object.  this.factory is injected into your object.
     * this.factory.getSingletonInstance(this.context, 'VideoModel')
     * will return the video model for use in the extended object.
     *
     * @param {Object} context - injected into extended object as this.context
     * @param {string} className - string name found in all dash.js objects
     * with name __dashjs_factory_name Will be at the bottom. Will be the same as the object's name.
     * @returns {*} Context aware instance of specified singleton name.
     * @memberof module:FactoryMaker
     * @instance
     */
    function getSingletonInstance(context, className) {
        for (var i in singletonContexts) {
            var obj = singletonContexts[i];
            if (obj.context === context && obj.name === className) {
                return obj.instance;
            }
        }
        return null;
    }

    /**
     * Use this method to add an singleton instance to the system.  Useful for unit testing to mock objects etc.
     *
     * @param {Object} context
     * @param {string} className
     * @param {Object} instance
     * @memberof module:FactoryMaker
     * @instance
     */
    function setSingletonInstance(context, className, instance) {
        for (var i in singletonContexts) {
            var obj = singletonContexts[i];
            if (obj.context === context && obj.name === className) {
                singletonContexts[i].instance = instance;
                return;
            }
        }
        singletonContexts.push({
            name: className,
            context: context,
            instance: instance
        });
    }

    /*------------------------------------------------------------------------------------------*/

    // Factories storage Management

    /*------------------------------------------------------------------------------------------*/

    function getFactoryByName(name, factoriesArray) {
        return factoriesArray[name];
    }

    function updateFactory(name, factory, factoriesArray) {
        if (name in factoriesArray) {
            factoriesArray[name] = factory;
        }
    }

    /*------------------------------------------------------------------------------------------*/

    // Class Factories Management

    /*------------------------------------------------------------------------------------------*/

    function updateClassFactory(name, factory) {
        updateFactory(name, factory, classFactories);
    }

    function getClassFactoryByName(name) {
        return getFactoryByName(name, classFactories);
    }

    function getClassFactory(classConstructor) {
        var factory = getFactoryByName(classConstructor.__dashjs_factory_name, classFactories);

        if (!factory) {
            factory = function (context) {
                if (context === undefined) {
                    context = {};
                }
                return {
                    create: function create() {
                        return merge(classConstructor, context, arguments);
                    }
                };
            };

            classFactories[classConstructor.__dashjs_factory_name] = factory; // store factory
        }
        return factory;
    }

    /*------------------------------------------------------------------------------------------*/

    // Singleton Factory MAangement

    /*------------------------------------------------------------------------------------------*/

    function updateSingletonFactory(name, factory) {
        updateFactory(name, factory, singletonFactories);
    }

    function getSingletonFactoryByName(name) {
        return getFactoryByName(name, singletonFactories);
    }

    function getSingletonFactory(classConstructor) {
        var factory = getFactoryByName(classConstructor.__dashjs_factory_name, singletonFactories);
        if (!factory) {
            factory = function (context) {
                var instance = undefined;
                if (context === undefined) {
                    context = {};
                }
                return {
                    getInstance: function getInstance() {
                        // If we don't have an instance yet check for one on the context
                        if (!instance) {
                            instance = getSingletonInstance(context, classConstructor.__dashjs_factory_name);
                        }
                        // If there's no instance on the context then create one
                        if (!instance) {
                            instance = merge(classConstructor, context, arguments);
                            singletonContexts.push({
                                name: classConstructor.__dashjs_factory_name,
                                context: context,
                                instance: instance
                            });
                        }
                        return instance;
                    }
                };
            };
            singletonFactories[classConstructor.__dashjs_factory_name] = factory; // store factory
        }

        return factory;
    }

    function merge(classConstructor, context, args) {

        var classInstance = undefined;
        var className = classConstructor.__dashjs_factory_name;
        var extensionObject = context[className];

        if (extensionObject) {

            var extension = extensionObject.instance;

            if (extensionObject.override) {
                //Override public methods in parent but keep parent.

                classInstance = classConstructor.apply({ context: context }, args);
                extension = extension.apply({
                    context: context,
                    factory: instance,
                    parent: classInstance
                }, args);

                for (var prop in extension) {
                    if (classInstance.hasOwnProperty(prop)) {
                        classInstance[prop] = extension[prop];
                    }
                }
            } else {
                //replace parent object completely with new object. Same as dijon.

                return extension.apply({
                    context: context,
                    factory: instance
                }, args);
            }
        } else {
            // Create new instance of the class
            classInstance = classConstructor.apply({ context: context }, args);
        }

        // Add getClassName function to class instance prototype (used by Debug)
        classInstance.getClassName = function () {
            return className;
        };

        return classInstance;
    }

    instance = {
        extend: extend,
        getSingletonInstance: getSingletonInstance,
        setSingletonInstance: setSingletonInstance,
        getSingletonFactory: getSingletonFactory,
        getSingletonFactoryByName: getSingletonFactoryByName,
        updateSingletonFactory: updateSingletonFactory,
        getClassFactory: getClassFactory,
        getClassFactoryByName: getClassFactoryByName,
        updateClassFactory: updateClassFactory
    };

    return instance;
})();

exports["default"] = FactoryMaker;
module.exports = exports["default"];

},{}],2:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
/**
 * @class
 * @ignore
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EventsBase = (function () {
    function EventsBase() {
        _classCallCheck(this, EventsBase);
    }

    _createClass(EventsBase, [{
        key: 'extend',
        value: function extend(events, config) {
            if (!events) return;

            var override = config ? config.override : false;
            var publicOnly = config ? config.publicOnly : false;

            for (var evt in events) {
                if (!events.hasOwnProperty(evt) || this[evt] && !override) continue;
                if (publicOnly && events[evt].indexOf('public_') === -1) continue;
                this[evt] = events[evt];
            }
        }
    }]);

    return EventsBase;
})();

exports['default'] = EventsBase;
module.exports = exports['default'];

},{}],3:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Constants declaration
 * @class
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Constants = (function () {
  _createClass(Constants, [{
    key: 'init',
    value: function init() {
      this.STREAM = 'stream';
      this.VIDEO = 'video';
      this.AUDIO = 'audio';
      this.TEXT = 'text';
      this.FRAGMENTED_TEXT = 'fragmentedText';
      this.EMBEDDED_TEXT = 'embeddedText';
      this.MUXED = 'muxed';
      this.IMAGE = 'image';
      this.LOCATION = 'Location';
      this.INITIALIZE = 'initialize';
      this.TEXT_SHOWING = 'showing';
      this.TEXT_HIDDEN = 'hidden';
      this.CC1 = 'CC1';
      this.CC3 = 'CC3';
      this.STPP = 'stpp';
      this.TTML = 'ttml';
      this.VTT = 'vtt';
      this.WVTT = 'wvtt';
      this.UTF8 = 'utf-8';
      this.SUGGESTED_PRESENTATION_DELAY = 'suggestedPresentationDelay';
      this.SCHEME_ID_URI = 'schemeIdUri';
      this.START_TIME = 'starttime';
      this.ABR_STRATEGY_DYNAMIC = 'abrDynamic';
      this.ABR_STRATEGY_BOLA = 'abrBola';
      this.ABR_STRATEGY_THROUGHPUT = 'abrThroughput';
      this.MOVING_AVERAGE_SLIDING_WINDOW = 'slidingWindow';
      this.MOVING_AVERAGE_EWMA = 'ewma';
      /**
       *  @constant {string} BAD_ARGUMENT_ERROR 'Invalid Arguments' error
       *  @memberof Constants#
       *  @static
       */
      this.BAD_ARGUMENT_ERROR = 'Invalid Arguments';
      this.MISSING_CONFIG_ERROR = 'Missing config parameter(s)';
    }

    /**
     * @constructs
     */
  }]);

  function Constants() {
    _classCallCheck(this, Constants);

    this.init();
  }

  return Constants;
})();

var constants = new Constants();
exports['default'] = constants;
module.exports = exports['default'];

},{}],4:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilsDVBErrorsTranslator = _dereq_(18);

var _utilsDVBErrorsTranslator2 = _interopRequireDefault(_utilsDVBErrorsTranslator);

var _MetricsReportingEvents = _dereq_(5);

var _MetricsReportingEvents2 = _interopRequireDefault(_MetricsReportingEvents);

var _controllersMetricsCollectionController = _dereq_(6);

var _controllersMetricsCollectionController2 = _interopRequireDefault(_controllersMetricsCollectionController);

var _metricsMetricsHandlerFactory = _dereq_(11);

var _metricsMetricsHandlerFactory2 = _interopRequireDefault(_metricsMetricsHandlerFactory);

var _reportingReportingFactory = _dereq_(16);

var _reportingReportingFactory2 = _interopRequireDefault(_reportingReportingFactory);

function MetricsReporting() {

    var context = this.context;
    var instance = undefined,
        dvbErrorsTranslator = undefined;

    /**
     * Create a MetricsCollectionController, and a DVBErrorsTranslator
     * @param {Object} config - dependancies from owner
     * @return {MetricsCollectionController} Metrics Collection Controller
     */
    function createMetricsReporting(config) {
        dvbErrorsTranslator = (0, _utilsDVBErrorsTranslator2['default'])(context).getInstance({
            eventBus: config.eventBus,
            metricsModel: config.metricsModel,
            metricsConstants: config.metricsConstants,
            events: config.events
        });

        return (0, _controllersMetricsCollectionController2['default'])(context).create(config);
    }

    /**
     * Get the ReportingFactory to allow new reporters to be registered
     * @return {ReportingFactory} Reporting Factory
     */
    function getReportingFactory() {
        return (0, _reportingReportingFactory2['default'])(context).getInstance();
    }

    /**
     * Get the MetricsHandlerFactory to allow new handlers to be registered
     * @return {MetricsHandlerFactory} Metrics Handler Factory
     */
    function getMetricsHandlerFactory() {
        return (0, _metricsMetricsHandlerFactory2['default'])(context).getInstance();
    }

    instance = {
        createMetricsReporting: createMetricsReporting,
        getReportingFactory: getReportingFactory,
        getMetricsHandlerFactory: getMetricsHandlerFactory
    };

    return instance;
}

MetricsReporting.__dashjs_factory_name = 'MetricsReporting';
var factory = dashjs.FactoryMaker.getClassFactory(MetricsReporting); /* jshint ignore:line */
factory.events = _MetricsReportingEvents2['default'];
dashjs.FactoryMaker.updateClassFactory(MetricsReporting.__dashjs_factory_name, factory); /* jshint ignore:line */
exports['default'] = factory;
module.exports = exports['default'];

},{"11":11,"16":16,"18":18,"5":5,"6":6}],5:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _coreEventsEventsBase = _dereq_(2);

var _coreEventsEventsBase2 = _interopRequireDefault(_coreEventsEventsBase);

var MetricsReportingEvents = (function (_EventsBase) {
    _inherits(MetricsReportingEvents, _EventsBase);

    function MetricsReportingEvents() {
        _classCallCheck(this, MetricsReportingEvents);

        _get(Object.getPrototypeOf(MetricsReportingEvents.prototype), 'constructor', this).call(this);

        this.METRICS_INITIALISATION_COMPLETE = 'internal_metricsReportingInitialized';
        this.BECAME_REPORTING_PLAYER = 'internal_becameReportingPlayer';
    }

    return MetricsReportingEvents;
})(_coreEventsEventsBase2['default']);

var metricsReportingEvents = new MetricsReportingEvents();
exports['default'] = metricsReportingEvents;
module.exports = exports['default'];

},{"2":2}],6:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _MetricsController = _dereq_(7);

var _MetricsController2 = _interopRequireDefault(_MetricsController);

var _utilsManifestParsing = _dereq_(20);

var _utilsManifestParsing2 = _interopRequireDefault(_utilsManifestParsing);

var _MetricsReportingEvents = _dereq_(5);

var _MetricsReportingEvents2 = _interopRequireDefault(_MetricsReportingEvents);

function MetricsCollectionController(config) {

    config = config || {};
    var metricsControllers = {};

    var context = this.context;
    var eventBus = config.eventBus;
    var events = config.events;

    function update(e) {
        if (e.error) {
            return;
        }

        // start by assuming all existing controllers need removing
        var controllersToRemove = Object.keys(metricsControllers);

        var metrics = (0, _utilsManifestParsing2['default'])(context).getInstance({
            dashManifestModel: config.dashManifestModel,
            constants: config.constants
        }).getMetrics(e.manifest);

        metrics.forEach(function (m) {
            var key = JSON.stringify(m);

            if (!metricsControllers.hasOwnProperty(key)) {
                try {
                    var controller = (0, _MetricsController2['default'])(context).create(config);
                    controller.initialize(m);
                    metricsControllers[key] = controller;
                } catch (e) {
                    // fail quietly
                }
            } else {
                    // we still need this controller - delete from removal list
                    controllersToRemove.splice(key, 1);
                }
        });

        // now remove the unwanted controllers
        controllersToRemove.forEach(function (c) {
            metricsControllers[c].reset();
            delete metricsControllers[c];
        });

        eventBus.trigger(_MetricsReportingEvents2['default'].METRICS_INITIALISATION_COMPLETE);
    }

    function resetMetricsControllers() {
        Object.keys(metricsControllers).forEach(function (key) {
            metricsControllers[key].reset();
        });

        metricsControllers = {};
    }

    function setup() {
        eventBus.on(events.MANIFEST_UPDATED, update);
        eventBus.on(events.STREAM_TEARDOWN_COMPLETE, resetMetricsControllers);
    }

    function reset() {
        eventBus.off(events.MANIFEST_UPDATED, update);
        eventBus.off(events.STREAM_TEARDOWN_COMPLETE, resetMetricsControllers);
    }

    setup();

    return {
        reset: reset
    };
}

MetricsCollectionController.__dashjs_factory_name = 'MetricsCollectionController';
exports['default'] = dashjs.FactoryMaker.getClassFactory(MetricsCollectionController);
/* jshint ignore:line */
module.exports = exports['default'];

},{"20":20,"5":5,"7":7}],7:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _RangeController = _dereq_(9);

var _RangeController2 = _interopRequireDefault(_RangeController);

var _ReportingController = _dereq_(10);

var _ReportingController2 = _interopRequireDefault(_ReportingController);

var _MetricsHandlersController = _dereq_(8);

var _MetricsHandlersController2 = _interopRequireDefault(_MetricsHandlersController);

function MetricsController(config) {

    config = config || {};
    var metricsHandlersController = undefined,
        reportingController = undefined,
        rangeController = undefined,
        instance = undefined;

    var context = this.context;

    function initialize(metricsEntry) {
        try {
            rangeController = (0, _RangeController2['default'])(context).create({
                mediaElement: config.mediaElement
            });

            rangeController.initialize(metricsEntry.Range);

            reportingController = (0, _ReportingController2['default'])(context).create({
                debug: config.debug,
                metricsConstants: config.metricsConstants
            });

            reportingController.initialize(metricsEntry.Reporting, rangeController);

            metricsHandlersController = (0, _MetricsHandlersController2['default'])(context).create({
                debug: config.debug,
                eventBus: config.eventBus,
                metricsConstants: config.metricsConstants,
                events: config.events
            });

            metricsHandlersController.initialize(metricsEntry.metrics, reportingController);
        } catch (e) {
            reset();
            throw e;
        }
    }

    function reset() {
        if (metricsHandlersController) {
            metricsHandlersController.reset();
        }

        if (reportingController) {
            reportingController.reset();
        }

        if (rangeController) {
            rangeController.reset();
        }
    }

    instance = {
        initialize: initialize,
        reset: reset
    };

    return instance;
}

MetricsController.__dashjs_factory_name = 'MetricsController';
exports['default'] = dashjs.FactoryMaker.getClassFactory(MetricsController);
/* jshint ignore:line */
module.exports = exports['default'];

},{"10":10,"8":8,"9":9}],8:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _metricsMetricsHandlerFactory = _dereq_(11);

var _metricsMetricsHandlerFactory2 = _interopRequireDefault(_metricsMetricsHandlerFactory);

function MetricsHandlersController(config) {

    config = config || {};
    var handlers = [];

    var instance = undefined;
    var context = this.context;
    var eventBus = config.eventBus;
    var Events = config.events;

    var metricsHandlerFactory = (0, _metricsMetricsHandlerFactory2['default'])(context).getInstance({
        debug: config.debug,
        eventBus: config.eventBus,
        metricsConstants: config.metricsConstants
    });

    function handle(e) {
        handlers.forEach(function (handler) {
            handler.handleNewMetric(e.metric, e.value, e.mediaType);
        });
    }

    function initialize(metrics, reportingController) {
        metrics.split(',').forEach(function (m, midx, ms) {
            var handler = undefined;

            // there is a bug in ISO23009-1 where the metrics attribute
            // is a comma-separated list but HttpList key can contain a
            // comma enclosed by ().
            if (m.indexOf('(') !== -1 && m.indexOf(')') === -1) {
                var nextm = ms[midx + 1];

                if (nextm && nextm.indexOf('(') === -1 && nextm.indexOf(')') !== -1) {
                    m += ',' + nextm;

                    // delete the next metric so forEach does not visit.
                    delete ms[midx + 1];
                }
            }

            handler = metricsHandlerFactory.create(m, reportingController);

            if (handler) {
                handlers.push(handler);
            }
        });

        eventBus.on(Events.METRIC_ADDED, handle, instance);

        eventBus.on(Events.METRIC_UPDATED, handle, instance);
    }

    function reset() {
        eventBus.off(Events.METRIC_ADDED, handle, instance);

        eventBus.off(Events.METRIC_UPDATED, handle, instance);

        handlers.forEach(function (handler) {
            return handler.reset();
        });

        handlers = [];
    }

    instance = {
        initialize: initialize,
        reset: reset
    };

    return instance;
}

MetricsHandlersController.__dashjs_factory_name = 'MetricsHandlersController';
exports['default'] = dashjs.FactoryMaker.getClassFactory(MetricsHandlersController);
/* jshint ignore:line */
module.exports = exports['default'];

},{"11":11}],9:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilsCustomTimeRanges = _dereq_(27);

var _utilsCustomTimeRanges2 = _interopRequireDefault(_utilsCustomTimeRanges);

function RangeController(config) {

    config = config || {};
    var useWallClockTime = false;
    var context = this.context;
    var instance = undefined,
        ranges = undefined;

    var mediaElement = config.mediaElement;

    function initialize(rs) {
        if (rs && rs.length) {
            rs.forEach(function (r) {
                var start = r.starttime;
                var end = start + r.duration;

                ranges.add(start, end);
            });

            useWallClockTime = !!rs[0]._useWallClockTime;
        }
    }

    function reset() {
        ranges.clear();
    }

    function setup() {
        ranges = (0, _utilsCustomTimeRanges2['default'])(context).create();
    }

    function isEnabled() {
        var numRanges = ranges.length;
        var time = undefined;

        if (!numRanges) {
            return true;
        }

        // When not present, DASH Metrics reporting is requested
        // for the whole duration of the content.
        time = useWallClockTime ? new Date().getTime() / 1000 : mediaElement.currentTime;

        for (var i = 0; i < numRanges; i += 1) {
            var start = ranges.start(i);
            var end = ranges.end(i);

            if (start <= time && time < end) {
                return true;
            }
        }

        return false;
    }

    instance = {
        initialize: initialize,
        reset: reset,
        isEnabled: isEnabled
    };

    setup();

    return instance;
}

RangeController.__dashjs_factory_name = 'RangeController';
exports['default'] = dashjs.FactoryMaker.getClassFactory(RangeController);
/* jshint ignore:line */
module.exports = exports['default'];

},{"27":27}],10:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reportingReportingFactory = _dereq_(16);

var _reportingReportingFactory2 = _interopRequireDefault(_reportingReportingFactory);

function ReportingController(config) {

    var reporters = [];
    var instance = undefined;

    var reportingFactory = (0, _reportingReportingFactory2['default'])(this.context).getInstance(config);

    function initialize(reporting, rangeController) {
        // "if multiple Reporting elements are present, it is expected that
        // the client processes one of the recognized reporting schemes."
        // to ignore this, and support multiple Reporting per Metric,
        // simply change the 'some' below to 'forEach'
        reporting.some(function (r) {
            var reporter = reportingFactory.create(r, rangeController);

            if (reporter) {
                reporters.push(reporter);
                return true;
            }
        });
    }

    function reset() {
        reporters.forEach(function (r) {
            return r.reset();
        });
        reporters = [];
    }

    function report(type, vos) {
        reporters.forEach(function (r) {
            return r.report(type, vos);
        });
    }

    instance = {
        initialize: initialize,
        reset: reset,
        report: report
    };

    return instance;
}

ReportingController.__dashjs_factory_name = 'ReportingController';
exports['default'] = dashjs.FactoryMaker.getClassFactory(ReportingController);
/* jshint ignore:line */
module.exports = exports['default'];

},{"16":16}],11:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _handlersBufferLevelHandler = _dereq_(12);

var _handlersBufferLevelHandler2 = _interopRequireDefault(_handlersBufferLevelHandler);

var _handlersDVBErrorsHandler = _dereq_(13);

var _handlersDVBErrorsHandler2 = _interopRequireDefault(_handlersDVBErrorsHandler);

var _handlersHttpListHandler = _dereq_(15);

var _handlersHttpListHandler2 = _interopRequireDefault(_handlersHttpListHandler);

var _handlersGenericMetricHandler = _dereq_(14);

var _handlersGenericMetricHandler2 = _interopRequireDefault(_handlersGenericMetricHandler);

function MetricsHandlerFactory(config) {

    config = config || {};
    var instance = undefined;
    var debug = config.debug;

    // group 1: key, [group 3: n [, group 5: type]]
    var keyRegex = /([a-zA-Z]*)(\(([0-9]*)(\,\s*([a-zA-Z]*))?\))?/;

    var context = this.context;
    var knownFactoryProducts = {
        BufferLevel: _handlersBufferLevelHandler2['default'],
        DVBErrors: _handlersDVBErrorsHandler2['default'],
        HttpList: _handlersHttpListHandler2['default'],
        PlayList: _handlersGenericMetricHandler2['default'],
        RepSwitchList: _handlersGenericMetricHandler2['default'],
        TcpList: _handlersGenericMetricHandler2['default']
    };

    function create(listType, reportingController) {
        var matches = listType.match(keyRegex);
        var handler;

        if (!matches) {
            return;
        }

        try {
            handler = knownFactoryProducts[matches[1]](context).create({
                eventBus: config.eventBus,
                metricsConstants: config.metricsConstants
            });

            handler.initialize(matches[1], reportingController, matches[3], matches[5]);
        } catch (e) {
            handler = null;
            debug.error('MetricsHandlerFactory: Could not create handler for type ' + matches[1] + ' with args ' + matches[3] + ', ' + matches[5] + ' (' + e.message + ')');
        }

        return handler;
    }

    function register(key, handler) {
        knownFactoryProducts[key] = handler;
    }

    function unregister(key) {
        delete knownFactoryProducts[key];
    }

    instance = {
        create: create,
        register: register,
        unregister: unregister
    };

    return instance;
}

MetricsHandlerFactory.__dashjs_factory_name = 'MetricsHandlerFactory';
exports['default'] = dashjs.FactoryMaker.getSingletonFactory(MetricsHandlerFactory);
/* jshint ignore:line */
module.exports = exports['default'];

},{"12":12,"13":13,"14":14,"15":15}],12:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilsHandlerHelpers = _dereq_(19);

var _utilsHandlerHelpers2 = _interopRequireDefault(_utilsHandlerHelpers);

function BufferLevelHandler(config) {

    config = config || {};
    var instance = undefined,
        reportingController = undefined,
        n = undefined,
        name = undefined,
        interval = undefined,
        lastReportedTime = undefined;

    var context = this.context;
    var handlerHelpers = (0, _utilsHandlerHelpers2['default'])(context).getInstance();

    var storedVOs = [];

    var metricsConstants = config.metricsConstants;

    function getLowestBufferLevelVO() {
        try {
            return Object.keys(storedVOs).map(function (key) {
                return storedVOs[key];
            }).reduce(function (a, b) {
                return a.level < b.level ? a : b;
            });
        } catch (e) {
            return;
        }
    }

    function intervalCallback() {
        var vo = getLowestBufferLevelVO();

        if (vo) {
            if (lastReportedTime !== vo.t) {
                lastReportedTime = vo.t;
                reportingController.report(name, vo);
            }
        }
    }

    function initialize(basename, rc, n_ms) {
        if (rc) {
            // this will throw if n is invalid, to be
            // caught by the initialize caller.
            n = handlerHelpers.validateN(n_ms);
            reportingController = rc;
            name = handlerHelpers.reconstructFullMetricName(basename, n_ms);
            interval = setInterval(intervalCallback, n);
        }
    }

    function reset() {
        clearInterval(interval);
        interval = null;
        n = 0;
        reportingController = null;
        lastReportedTime = null;
    }

    function handleNewMetric(metric, vo, type) {
        if (metric === metricsConstants.BUFFER_LEVEL) {
            storedVOs[type] = vo;
        }
    }

    instance = {
        initialize: initialize,
        reset: reset,
        handleNewMetric: handleNewMetric
    };

    return instance;
}

BufferLevelHandler.__dashjs_factory_name = 'BufferLevelHandler';
exports['default'] = dashjs.FactoryMaker.getClassFactory(BufferLevelHandler);
/* jshint ignore:line */
module.exports = exports['default'];

},{"19":19}],13:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _MetricsReportingEvents = _dereq_(5);

var _MetricsReportingEvents2 = _interopRequireDefault(_MetricsReportingEvents);

function DVBErrorsHandler(config) {

    config = config || {};
    var instance = undefined,
        reportingController = undefined;

    var eventBus = config.eventBus;
    var metricsConstants = config.metricsConstants;

    function onInitialisationComplete() {
        // we only want to report this once per call to initialize
        eventBus.off(_MetricsReportingEvents2['default'].METRICS_INITIALISATION_COMPLETE, onInitialisationComplete, this);

        // Note: A Player becoming a reporting Player is itself
        // something which is recorded by the DVBErrors metric.
        eventBus.trigger(_MetricsReportingEvents2['default'].BECAME_REPORTING_PLAYER);
    }

    function initialize(unused, rc) {
        if (rc) {
            reportingController = rc;

            eventBus.on(_MetricsReportingEvents2['default'].METRICS_INITIALISATION_COMPLETE, onInitialisationComplete, this);
        }
    }

    function reset() {
        reportingController = null;
    }

    function handleNewMetric(metric, vo) {
        // simply pass metric straight through
        if (metric === metricsConstants.DVB_ERRORS) {
            if (reportingController) {
                reportingController.report(metric, vo);
            }
        }
    }

    instance = {
        initialize: initialize,
        reset: reset,
        handleNewMetric: handleNewMetric
    };

    return instance;
}

exports['default'] = dashjs.FactoryMaker.getClassFactory(DVBErrorsHandler);
/* jshint ignore:line */
module.exports = exports['default'];

},{"5":5}],14:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function GenericMetricHandler() {

    var instance = undefined,
        metricName = undefined,
        reportingController = undefined;

    function initialize(name, rc) {
        metricName = name;
        reportingController = rc;
    }

    function reset() {
        reportingController = null;
        metricName = undefined;
    }

    function handleNewMetric(metric, vo) {
        // simply pass metric straight through
        if (metric === metricName) {
            if (reportingController) {
                reportingController.report(metricName, vo);
            }
        }
    }

    instance = {
        initialize: initialize,
        reset: reset,
        handleNewMetric: handleNewMetric
    };

    return instance;
}

GenericMetricHandler.__dashjs_factory_name = 'GenericMetricHandler';
exports['default'] = dashjs.FactoryMaker.getClassFactory(GenericMetricHandler);
/* jshint ignore:line */
module.exports = exports['default'];

},{}],15:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilsHandlerHelpers = _dereq_(19);

var _utilsHandlerHelpers2 = _interopRequireDefault(_utilsHandlerHelpers);

function HttpListHandler(config) {

    config = config || {};
    var instance = undefined,
        reportingController = undefined,
        n = undefined,
        type = undefined,
        name = undefined,
        interval = undefined;

    var storedVos = [];

    var handlerHelpers = (0, _utilsHandlerHelpers2['default'])(this.context).getInstance();

    var metricsConstants = config.metricsConstants;

    function intervalCallback() {
        var vos = storedVos;

        if (vos.length) {
            if (reportingController) {
                reportingController.report(name, vos);
            }
        }

        storedVos = [];
    }

    function initialize(basename, rc, n_ms, requestType) {
        if (rc) {

            // this will throw if n is invalid, to be
            // caught by the initialize caller.
            n = handlerHelpers.validateN(n_ms);

            reportingController = rc;

            if (requestType && requestType.length) {
                type = requestType;
            }

            name = handlerHelpers.reconstructFullMetricName(basename, n_ms, requestType);

            interval = setInterval(intervalCallback, n);
        }
    }

    function reset() {
        clearInterval(interval);
        interval = null;
        n = null;
        type = null;
        storedVos = [];
        reportingController = null;
    }

    function handleNewMetric(metric, vo) {
        if (metric === metricsConstants.HTTP_REQUEST) {
            if (!type || type === vo.type) {
                storedVos.push(vo);
            }
        }
    }

    instance = {
        initialize: initialize,
        reset: reset,
        handleNewMetric: handleNewMetric
    };

    return instance;
}

HttpListHandler.__dashjs_factory_name = 'HttpListHandler';
exports['default'] = dashjs.FactoryMaker.getClassFactory(HttpListHandler);
/* jshint ignore:line */
module.exports = exports['default'];

},{"19":19}],16:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reportersDVBReporting = _dereq_(17);

var _reportersDVBReporting2 = _interopRequireDefault(_reportersDVBReporting);

function ReportingFactory(config) {
    config = config || {};

    var knownReportingSchemeIdUris = {
        'urn:dvb:dash:reporting:2014': _reportersDVBReporting2['default']
    };

    var context = this.context;
    var debug = config.debug;
    var metricsConstants = config.metricsConstants;

    var instance = undefined;

    function create(entry, rangeController) {
        var reporting = undefined;

        try {
            reporting = knownReportingSchemeIdUris[entry.schemeIdUri](context).create({
                metricsConstants: metricsConstants
            });

            reporting.initialize(entry, rangeController);
        } catch (e) {
            reporting = null;
            debug.error('ReportingFactory: could not create Reporting with schemeIdUri ' + entry.schemeIdUri + ' (' + e.message + ')');
        }

        return reporting;
    }

    function register(schemeIdUri, moduleName) {
        knownReportingSchemeIdUris[schemeIdUri] = moduleName;
    }

    function unregister(schemeIdUri) {
        delete knownReportingSchemeIdUris[schemeIdUri];
    }

    instance = {
        create: create,
        register: register,
        unregister: unregister
    };

    return instance;
}

ReportingFactory.__dashjs_factory_name = 'ReportingFactory';
exports['default'] = dashjs.FactoryMaker.getSingletonFactory(ReportingFactory);
/* jshint ignore:line */
module.exports = exports['default'];

},{"17":17}],17:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilsMetricSerialiser = _dereq_(21);

var _utilsMetricSerialiser2 = _interopRequireDefault(_utilsMetricSerialiser);

var _utilsRNG = _dereq_(22);

var _utilsRNG2 = _interopRequireDefault(_utilsRNG);

function DVBReporting(config) {
    config = config || {};
    var instance = undefined;

    var context = this.context;
    var metricSerialiser = undefined,
        randomNumberGenerator = undefined,
        reportingPlayerStatusDecided = undefined,
        isReportingPlayer = undefined,
        reportingUrl = undefined,
        rangeController = undefined;

    var USE_DRAFT_DVB_SPEC = true;
    var allowPendingRequestsToCompleteOnReset = true;
    var pendingRequests = [];

    var metricsConstants = config.metricsConstants;

    function setup() {
        metricSerialiser = (0, _utilsMetricSerialiser2['default'])(context).getInstance();
        randomNumberGenerator = (0, _utilsRNG2['default'])(context).getInstance();

        resetInitialSettings();
    }

    function doGetRequest(url, successCB, failureCB) {
        var req = new XMLHttpRequest();
        var oncomplete = function oncomplete() {
            var reqIndex = pendingRequests.indexOf(req);

            if (reqIndex === -1) {
                return;
            } else {
                pendingRequests.splice(reqIndex, 1);
            }

            if (req.status >= 200 && req.status < 300) {
                if (successCB) {
                    successCB();
                }
            } else {
                if (failureCB) {
                    failureCB();
                }
            }
        };

        pendingRequests.push(req);

        try {
            req.open('GET', url);
            req.onloadend = oncomplete;
            req.onerror = oncomplete;
            req.send();
        } catch (e) {
            req.onerror();
        }
    }

    function report(type, vos) {
        if (!Array.isArray(vos)) {
            vos = [vos];
        }

        // If the Player is not a reporting Player, then the Player shall
        // not report any errors.
        // ... In addition to any time restrictions specified by a Range
        // element within the Metrics element.
        if (isReportingPlayer && rangeController.isEnabled()) {

            // This reporting mechanism operates by creating one HTTP GET
            // request for every entry in the top level list of the metric.
            vos.forEach(function (vo) {
                var url = metricSerialiser.serialise(vo);

                // this has been proposed for errata
                if (USE_DRAFT_DVB_SPEC && type !== metricsConstants.DVB_ERRORS) {
                    url = 'metricname=' + type + '&' + url;
                }

                // Take the value of the @reportingUrl attribute, append a
                // question mark ('?') character and then append the string
                // created in the previous step.
                url = reportingUrl + '?' + url;

                // Make an HTTP GET request to the URL contained within the
                // string created in the previous step.
                doGetRequest(url, null, function () {
                    // If the Player is unable to make the report, for
                    // example because the @reportingUrl is invalid, the
                    // host cannot be reached, or an HTTP status code other
                    // than one in the 200 series is received, the Player
                    // shall cease being a reporting Player for the
                    // duration of the MPD.
                    isReportingPlayer = false;
                });
            });
        }
    }

    function initialize(entry, rc) {
        var probability = undefined;

        rangeController = rc;

        reportingUrl = entry['dvb:reportingUrl'];

        // If a required attribute is missing, the Reporting descriptor may
        // be ignored by the Player
        if (!reportingUrl) {
            throw new Error('required parameter missing (dvb:reportingUrl)');
        }

        // A Player's status, as a reporting Player or not, shall remain
        // static for the duration of the MPD, regardless of MPD updates.
        // (i.e. only calling reset (or failure) changes this state)
        if (!reportingPlayerStatusDecided) {
            // NOTE: DVB spec has a typo where it incorrectly references the
            // priority attribute, which should be probability
            probability = entry['dvb:probability'] || entry['dvb:priority'] || 0;
            // If the @priority attribute is set to 1000, it shall be a reporting Player.
            // If the @priority attribute is missing, the Player shall not be a reporting Player.
            // For any other value of the @probability attribute, it shall decide at random whether to be a
            // reporting Player, such that the probability of being one is @probability/1000.
            if (probability && (probability === 1000 || probability / 1000 >= randomNumberGenerator.random())) {
                isReportingPlayer = true;
            }

            reportingPlayerStatusDecided = true;
        }
    }

    function resetInitialSettings() {
        reportingPlayerStatusDecided = false;
        isReportingPlayer = false;
        reportingUrl = null;
        rangeController = null;
    }

    function reset() {
        if (!allowPendingRequestsToCompleteOnReset) {
            pendingRequests.forEach(function (req) {
                return req.abort();
            });
            pendingRequests = [];
        }

        resetInitialSettings();
    }

    instance = {
        report: report,
        initialize: initialize,
        reset: reset
    };

    setup();

    return instance;
}

DVBReporting.__dashjs_factory_name = 'DVBReporting';
exports['default'] = dashjs.FactoryMaker.getClassFactory(DVBReporting);
/* jshint ignore:line */
module.exports = exports['default'];

},{"21":21,"22":22}],18:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _voDVBErrors = _dereq_(23);

var _voDVBErrors2 = _interopRequireDefault(_voDVBErrors);

var _MetricsReportingEvents = _dereq_(5);

var _MetricsReportingEvents2 = _interopRequireDefault(_MetricsReportingEvents);

function DVBErrorsTranslator(config) {

    config = config || {};
    var instance = undefined,
        mpd = undefined;
    var eventBus = config.eventBus;
    var metricModel = config.metricsModel;
    var metricsConstants = config.metricsConstants;
    //MediaPlayerEvents have been added to Events in MediaPlayer class
    var Events = config.events;

    function report(vo) {
        var o = new _voDVBErrors2['default']();

        if (!mpd) {
            return;
        }

        for (var key in vo) {
            if (vo.hasOwnProperty(key)) {
                o[key] = vo[key];
            }
        }

        if (!o.mpdurl) {
            o.mpdurl = mpd.originalUrl || mpd.url;
        }

        if (!o.terror) {
            o.terror = new Date();
        }

        metricModel.addDVBErrors(o);
    }

    function onManifestUpdate(e) {
        if (e.error) {
            return;
        }

        mpd = e.manifest;
    }

    function onServiceLocationChanged(e) {
        report({
            errorcode: _voDVBErrors2['default'].BASE_URL_CHANGED,
            servicelocation: e.entry
        });
    }

    function onBecameReporter() {
        report({
            errorcode: _voDVBErrors2['default'].BECAME_REPORTER
        });
    }

    function handleHttpMetric(vo) {
        if (vo.responsecode === 0 || // connection failure - unknown
        vo.responsecode >= 400 || // HTTP error status code
        vo.responsecode < 100 || // unknown status codes
        vo.responsecode >= 600) {
            // unknown status codes
            report({
                errorcode: vo.responsecode || _voDVBErrors2['default'].CONNECTION_ERROR,
                url: vo.url,
                terror: vo.tresponse,
                servicelocation: vo._serviceLocation
            });
        }
    }

    function onMetricEvent(e) {
        switch (e.metric) {
            case metricsConstants.HTTP_REQUEST:
                handleHttpMetric(e.value);
                break;
            default:
                break;
        }
    }

    function onPlaybackError(e) {
        var reason = e.error ? e.error.code : 0;
        var errorcode = undefined;

        switch (reason) {
            case MediaError.MEDIA_ERR_NETWORK:
                errorcode = _voDVBErrors2['default'].CONNECTION_ERROR;
                break;
            case MediaError.MEDIA_ERR_DECODE:
                errorcode = _voDVBErrors2['default'].CORRUPT_MEDIA_OTHER;
                break;
            default:
                return;
        }

        report({
            errorcode: errorcode
        });
    }

    function initialise() {
        eventBus.on(Events.MANIFEST_UPDATED, onManifestUpdate, instance);
        eventBus.on(Events.SERVICE_LOCATION_BLACKLIST_CHANGED, onServiceLocationChanged, instance);
        eventBus.on(Events.METRIC_ADDED, onMetricEvent, instance);
        eventBus.on(Events.METRIC_UPDATED, onMetricEvent, instance);
        eventBus.on(Events.PLAYBACK_ERROR, onPlaybackError, instance);
        eventBus.on(_MetricsReportingEvents2['default'].BECAME_REPORTING_PLAYER, onBecameReporter, instance);
    }

    function reset() {
        eventBus.off(Events.MANIFEST_UPDATED, onManifestUpdate, instance);
        eventBus.off(Events.SERVICE_LOCATION_BLACKLIST_CHANGED, onServiceLocationChanged, instance);
        eventBus.off(Events.METRIC_ADDED, onMetricEvent, instance);
        eventBus.off(Events.METRIC_UPDATED, onMetricEvent, instance);
        eventBus.off(Events.PLAYBACK_ERROR, onPlaybackError, instance);
        eventBus.off(_MetricsReportingEvents2['default'].BECAME_REPORTING_PLAYER, onBecameReporter, instance);
    }

    instance = {
        initialise: initialise,
        reset: reset
    };

    initialise();

    return instance;
}

DVBErrorsTranslator.__dashjs_factory_name = 'DVBErrorsTranslator';
exports['default'] = dashjs.FactoryMaker.getSingletonFactory(DVBErrorsTranslator);
/* jshint ignore:line */
module.exports = exports['default'];

},{"23":23,"5":5}],19:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function HandlerHelpers() {
    return {
        reconstructFullMetricName: function reconstructFullMetricName(key, n, type) {
            var mn = key;

            if (n) {
                mn += '(' + n;

                if (type && type.length) {
                    mn += ',' + type;
                }

                mn += ')';
            }

            return mn;
        },

        validateN: function validateN(n_ms) {
            if (!n_ms) {
                throw new Error('missing n');
            }

            if (isNaN(n_ms)) {
                throw new Error('n is NaN');
            }

            // n is a positive integer is defined to refer to the metric
            // in which the buffer level is recorded every n ms.
            if (n_ms < 0) {
                throw new Error('n must be positive');
            }

            return n_ms;
        }
    };
}

HandlerHelpers.__dashjs_factory_name = 'HandlerHelpers';
exports['default'] = dashjs.FactoryMaker.getSingletonFactory(HandlerHelpers);
/* jshint ignore:line */
module.exports = exports['default'];

},{}],20:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _voMetrics = _dereq_(24);

var _voMetrics2 = _interopRequireDefault(_voMetrics);

var _voRange = _dereq_(25);

var _voRange2 = _interopRequireDefault(_voRange);

var _voReporting = _dereq_(26);

var _voReporting2 = _interopRequireDefault(_voReporting);

function ManifestParsing(config) {
    config = config || {};
    var instance = undefined;
    var dashManifestModel = config.dashManifestModel;
    var constants = config.constants;

    function getMetricsRangeStartTime(manifest, dynamic, range) {
        var mpd = dashManifestModel.getMpd(manifest);
        var voPeriods;
        var presentationStartTime = 0;
        var reportingStartTime;

        if (dynamic) {
            // For services with MPD@type='dynamic', the start time is
            // indicated in wall clock time by adding the value of this
            // attribute to the value of the MPD@availabilityStartTime
            // attribute.
            presentationStartTime = mpd.availabilityStartTime.getTime() / 1000;
        } else {
            // For services with MPD@type='static', the start time is indicated
            // in Media Presentation time and is relative to the PeriodStart
            // time of the first Period in this MPD.
            voPeriods = this.getRegularPeriods(mpd);

            if (voPeriods.length) {
                presentationStartTime = voPeriods[0].start;
            }
        }

        // When not present, DASH Metrics collection is
        // requested from the beginning of content
        // consumption.
        reportingStartTime = presentationStartTime;

        if (range && range.hasOwnProperty(constants.START_TIME)) {
            reportingStartTime += range.starttime;
        }

        return reportingStartTime;
    }

    function getMetrics(manifest) {
        var metrics = [];

        if (manifest.Metrics_asArray) {
            manifest.Metrics_asArray.forEach(function (metric) {
                var metricEntry = new _voMetrics2['default']();
                var isDynamic = dashManifestModel.getIsDynamic(manifest);

                if (metric.hasOwnProperty('metrics')) {
                    metricEntry.metrics = metric.metrics;
                } else {
                    return;
                }

                if (metric.Range_asArray) {
                    metric.Range_asArray.forEach(function (range) {
                        var rangeEntry = new _voRange2['default']();

                        rangeEntry.starttime = getMetricsRangeStartTime(manifest, isDynamic, range);

                        if (range.hasOwnProperty('duration')) {
                            rangeEntry.duration = range.duration;
                        } else {
                            // if not present, the value is identical to the
                            // Media Presentation duration.
                            rangeEntry.duration = dashManifestModel.getDuration(manifest);
                        }

                        rangeEntry._useWallClockTime = isDynamic;

                        metricEntry.Range.push(rangeEntry);
                    });
                }

                if (metric.Reporting_asArray) {
                    metric.Reporting_asArray.forEach(function (reporting) {
                        var reportingEntry = new _voReporting2['default']();

                        if (reporting.hasOwnProperty(constants.SCHEME_ID_URI)) {
                            reportingEntry.schemeIdUri = reporting.schemeIdUri;
                        } else {
                            // Invalid Reporting. schemeIdUri must be set. Ignore.
                            return;
                        }

                        for (var prop in reporting) {
                            if (reporting.hasOwnProperty(prop)) {
                                reportingEntry[prop] = reporting[prop];
                            }
                        }

                        metricEntry.Reporting.push(reportingEntry);
                    });
                } else {
                    // Invalid Metrics. At least one reporting must be present. Ignore
                    return;
                }

                metrics.push(metricEntry);
            });
        }

        return metrics;
    }

    instance = {
        getMetrics: getMetrics
    };

    return instance;
}

ManifestParsing.__dashjs_factory_name = 'ManifestParsing';
exports['default'] = dashjs.FactoryMaker.getSingletonFactory(ManifestParsing);
/* jshint ignore:line */
module.exports = exports['default'];

},{"24":24,"25":25,"26":26}],21:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function MetricSerialiser() {

    // For each entry in the top level list within the metric (in the case
    // of the DVBErrors metric each entry corresponds to an "error event"
    // described in clause 10.8.4) the Player shall:
    function serialise(metric) {
        var pairs = [];
        var obj = [];
        var key = undefined,
            value = undefined;

        // Take each (key, value) pair from the metric entry and create a
        // string consisting of the name of the key, followed by an equals
        // ('=') character, followed by the string representation of the
        // value. The string representation of the value is created based
        // on the type of the value following the instructions in Table 22.
        for (key in metric) {
            if (metric.hasOwnProperty(key) && key.indexOf('_') !== 0) {
                value = metric[key];

                // we want to ensure that keys still end up in the report
                // even if there is no value
                if (value === undefined || value === null) {
                    value = '';
                }

                // DVB A168 10.12.4 Table 22
                if (Array.isArray(value)) {
                    // if trace or similar is null, do not include in output
                    if (!value.length) {
                        continue;
                    }

                    obj = [];

                    value.forEach(function (v) {
                        var isBuiltIn = Object.prototype.toString.call(v).slice(8, -1) !== 'Object';

                        obj.push(isBuiltIn ? v : serialise(v));
                    });

                    value = obj.map(encodeURIComponent).join(',');
                } else if (typeof value === 'string') {
                    value = encodeURIComponent(value);
                } else if (value instanceof Date) {
                    value = value.toISOString();
                } else if (typeof value === 'number') {
                    value = Math.round(value);
                }

                pairs.push(key + '=' + value);
            }
        }

        // Concatenate the strings created in the previous step with an
        // ampersand ('&') character between each one.
        return pairs.join('&');
    }

    return {
        serialise: serialise
    };
}

MetricSerialiser.__dashjs_factory_name = 'MetricSerialiser';
exports['default'] = dashjs.FactoryMaker.getSingletonFactory(MetricSerialiser);
/* jshint ignore:line */
module.exports = exports['default'];

},{}],22:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function RNG() {

    // check whether secure random numbers are available. if not, revert to
    // using Math.random
    var crypto = window.crypto || window.msCrypto;

    // could just as easily use any other array type by changing line below
    var ArrayType = Uint32Array;
    var MAX_VALUE = Math.pow(2, ArrayType.BYTES_PER_ELEMENT * 8) - 1;

    // currently there is only one client for this code, and that only uses
    // a single random number per initialisation. may want to increase this
    // number if more consumers in the future
    var NUM_RANDOM_NUMBERS = 10;

    var randomNumbers = undefined,
        index = undefined,
        instance = undefined;

    function initialise() {
        if (crypto) {
            if (!randomNumbers) {
                randomNumbers = new ArrayType(NUM_RANDOM_NUMBERS);
            }
            crypto.getRandomValues(randomNumbers);
            index = 0;
        }
    }

    function rand(min, max) {
        var r = undefined;

        if (!min) {
            min = 0;
        }

        if (!max) {
            max = 1;
        }

        if (crypto) {
            if (index === randomNumbers.length) {
                initialise();
            }

            r = randomNumbers[index] / MAX_VALUE;
            index += 1;
        } else {
            r = Math.random();
        }

        return r * (max - min) + min;
    }

    instance = {
        random: rand
    };

    initialise();

    return instance;
}

RNG.__dashjs_factory_name = 'RNG';
exports['default'] = dashjs.FactoryMaker.getSingletonFactory(RNG);
/* jshint ignore:line */
module.exports = exports['default'];

},{}],23:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
/**
 * @class
 * @ignore
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var DVBErrors = function DVBErrors() {
    _classCallCheck(this, DVBErrors);

    this.mpdurl = null;
    // String - Absolute URL from which the MPD was originally
    // retrieved (MPD updates will not change this value).

    this.errorcode = null;
    // String - The value of errorcode depends upon the type
    // of error being reported. For an error listed in the
    // ErrorType column below the value is as described in the
    // Value column.
    //
    // ErrorType                                            Value
    // ---------                                            -----
    // HTTP error status code                               HTTP status code
    // Unknown HTTP status code                             HTTP status code
    // SSL connection failed                                "SSL" followed by SSL alert value
    // DNS resolution failed                                "C00"
    // Host unreachable                                     "C01"
    // Connection refused                                   "C02"
    // Connection error – Not otherwise specified           "C03"
    // Corrupt media – ISO BMFF container cannot be parsed  "M00"
    // Corrupt media – Not otherwise specified              "M01"
    // Changing Base URL in use due to errors               "F00"
    // Becoming an error reporting Player                   "S00"

    this.terror = null;
    // Real-Time - Date and time at which error occurred in UTC,
    // formatted as a combined date and time according to ISO 8601.

    this.url = null;
    // String - Absolute URL from which data was being requested
    // when this error occurred. If the error report is in relation
    // to corrupt media or changing BaseURL, this may be a null
    // string if the URL from which the media was obtained or
    // which led to the change of BaseURL is no longer known.

    this.ipaddress = null;
    // String - IP Address which the host name in "url" resolved to.
    // If the error report is in relation to corrupt media or
    // changing BaseURL, this may be a null string if the URL
    // from which the media was obtained or which led to the
    // change of BaseURL is no longer known.

    this.servicelocation = null;
    // String - The value of the serviceLocation field in the
    // BaseURL being used. In the event of this report indicating
    // a change of BaseURL this is the value from the BaseURL
    // being moved from.
};

DVBErrors.SSL_CONNECTION_FAILED_PREFIX = 'SSL';
DVBErrors.DNS_RESOLUTION_FAILED = 'C00';
DVBErrors.HOST_UNREACHABLE = 'C01';
DVBErrors.CONNECTION_REFUSED = 'C02';
DVBErrors.CONNECTION_ERROR = 'C03';
DVBErrors.CORRUPT_MEDIA_ISOBMFF = 'M00';
DVBErrors.CORRUPT_MEDIA_OTHER = 'M01';
DVBErrors.BASE_URL_CHANGED = 'F00';
DVBErrors.BECAME_REPORTER = 'S00';

exports['default'] = DVBErrors;
module.exports = exports['default'];

},{}],24:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
/**
 * @class
 * @ignore
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Metrics = function Metrics() {
  _classCallCheck(this, Metrics);

  this.metrics = '';
  this.Range = [];
  this.Reporting = [];
};

exports['default'] = Metrics;
module.exports = exports['default'];

},{}],25:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
/**
 * @class
 * @ignore
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Range = function Range() {
  _classCallCheck(this, Range);

  // as defined in ISO23009-1
  this.starttime = 0;
  this.duration = Infinity;

  // for internal use
  this._useWallClockTime = false;
};

exports["default"] = Range;
module.exports = exports["default"];

},{}],26:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
/**
 * @class
 * @ignore
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Reporting = function Reporting() {
  _classCallCheck(this, Reporting);

  // Reporting is a DescriptorType and doesn't have any additional fields
  this.schemeIdUri = '';
  this.value = '';
};

exports['default'] = Reporting;
module.exports = exports['default'];

},{}],27:[function(_dereq_,module,exports){
/**
* The copyright in this software is being made available under the BSD License,
* included below. This software may be subject to other third party and contributor
* rights, including patent rights, and no such rights are granted under this license.
*
* Copyright (c) 2013, Dash Industry Forum.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without modification,
* are permitted provided that the following conditions are met:
*  * Redistributions of source code must retain the above copyright notice, this
*  list of conditions and the following disclaimer.
*  * Redistributions in binary form must reproduce the above copyright notice,
*  this list of conditions and the following disclaimer in the documentation and/or
*  other materials provided with the distribution.
*  * Neither the name of Dash Industry Forum nor the names of its
*  contributors may be used to endorse or promote products derived from this software
*  without specific prior written permission.
*
*  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
*  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
*  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
*  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
*  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
*  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
*  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
*  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
*  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
*  POSSIBILITY OF SUCH DAMAGE.
*/
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _coreFactoryMaker = _dereq_(1);

var _coreFactoryMaker2 = _interopRequireDefault(_coreFactoryMaker);

var _utilsSupervisorTools = _dereq_(28);

function CustomTimeRanges() /*config*/{
    var customTimeRangeArray = [];
    var length = 0;

    function add(start, end) {
        var i = 0;

        for (i = 0; i < this.customTimeRangeArray.length && start > this.customTimeRangeArray[i].start; i++);

        this.customTimeRangeArray.splice(i, 0, { start: start, end: end });

        for (i = 0; i < this.customTimeRangeArray.length - 1; i++) {
            if (this.mergeRanges(i, i + 1)) {
                i--;
            }
        }
        this.length = this.customTimeRangeArray.length;
    }

    function clear() {
        this.customTimeRangeArray = [];
        this.length = 0;
    }

    function remove(start, end) {
        for (var i = 0; i < this.customTimeRangeArray.length; i++) {
            if (start <= this.customTimeRangeArray[i].start && end >= this.customTimeRangeArray[i].end) {
                //      |--------------Range i-------|
                //|---------------Range to remove ---------------|
                //    or
                //|--------------Range i-------|
                //|--------------Range to remove ---------------|
                //    or
                //                 |--------------Range i-------|
                //|--------------Range to remove ---------------|
                this.customTimeRangeArray.splice(i, 1);
                i--;
            } else if (start > this.customTimeRangeArray[i].start && end < this.customTimeRangeArray[i].end) {
                //|-----------------Range i----------------|
                //        |-------Range to remove -----|
                this.customTimeRangeArray.splice(i + 1, 0, { start: end, end: this.customTimeRangeArray[i].end });
                this.customTimeRangeArray[i].end = start;
                break;
            } else if (start > this.customTimeRangeArray[i].start && start < this.customTimeRangeArray[i].end) {
                //|-----------Range i----------|
                //                    |---------Range to remove --------|
                //    or
                //|-----------------Range i----------------|
                //            |-------Range to remove -----|
                this.customTimeRangeArray[i].end = start;
            } else if (end > this.customTimeRangeArray[i].start && end < this.customTimeRangeArray[i].end) {
                //                     |-----------Range i----------|
                //|---------Range to remove --------|
                //            or
                //|-----------------Range i----------------|
                //|-------Range to remove -----|
                this.customTimeRangeArray[i].start = end;
            }
        }

        this.length = this.customTimeRangeArray.length;
    }

    function mergeRanges(rangeIndex1, rangeIndex2) {
        var range1 = this.customTimeRangeArray[rangeIndex1];
        var range2 = this.customTimeRangeArray[rangeIndex2];

        if (range1.start <= range2.start && range2.start <= range1.end && range1.end <= range2.end) {
            //|-----------Range1----------|
            //                    |-----------Range2----------|
            range1.end = range2.end;
            this.customTimeRangeArray.splice(rangeIndex2, 1);
            return true;
        } else if (range2.start <= range1.start && range1.start <= range2.end && range2.end <= range1.end) {
            //                |-----------Range1----------|
            //|-----------Range2----------|
            range1.start = range2.start;
            this.customTimeRangeArray.splice(rangeIndex2, 1);
            return true;
        } else if (range2.start <= range1.start && range1.start <= range2.end && range1.end <= range2.end) {
            //      |--------Range1-------|
            //|---------------Range2--------------|
            this.customTimeRangeArray.splice(rangeIndex1, 1);
            return true;
        } else if (range1.start <= range2.start && range2.start <= range1.end && range2.end <= range1.end) {
            //|-----------------Range1--------------|
            //        |-----------Range2----------|
            this.customTimeRangeArray.splice(rangeIndex2, 1);
            return true;
        }
        return false;
    }

    function start(index) {
        (0, _utilsSupervisorTools.checkInteger)(index);

        if (index >= this.customTimeRangeArray.length || index < 0) {
            return NaN;
        }

        return this.customTimeRangeArray[index].start;
    }

    function end(index) {
        (0, _utilsSupervisorTools.checkInteger)(index);

        if (index >= this.customTimeRangeArray.length || index < 0) {
            return NaN;
        }

        return this.customTimeRangeArray[index].end;
    }

    return {
        customTimeRangeArray: customTimeRangeArray,
        length: length,
        add: add,
        clear: clear,
        remove: remove,
        mergeRanges: mergeRanges,
        start: start,
        end: end
    };
}
CustomTimeRanges.__dashjs_factory_name = 'CustomTimeRanges';
exports['default'] = _coreFactoryMaker2['default'].getClassFactory(CustomTimeRanges);
module.exports = exports['default'];

},{"1":1,"28":28}],28:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.checkParameterType = checkParameterType;
exports.checkInteger = checkInteger;
exports.checkRange = checkRange;
exports.checkIsVideoOrAudioType = checkIsVideoOrAudioType;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _constantsConstants = _dereq_(3);

var _constantsConstants2 = _interopRequireDefault(_constantsConstants);

function checkParameterType(parameter, type) {
    if (typeof parameter !== type) {
        throw _constantsConstants2['default'].BAD_ARGUMENT_ERROR;
    }
}

function checkInteger(parameter) {
    var isInt = parameter !== null && !isNaN(parameter) && parameter % 1 === 0;

    if (!isInt) {
        throw _constantsConstants2['default'].BAD_ARGUMENT_ERROR + ' : argument is not an integer';
    }
}

function checkRange(parameter, min, max) {
    if (parameter < min || parameter > max) {
        throw _constantsConstants2['default'].BAD_ARGUMENT_ERROR + ' : argument out of range';
    }
}

function checkIsVideoOrAudioType(type) {
    if (typeof type !== 'string' || type !== _constantsConstants2['default'].AUDIO && type !== _constantsConstants2['default'].VIDEO) {
        throw _constantsConstants2['default'].BAD_ARGUMENT_ERROR;
    }
}

},{"3":3}]},{},[4])(4)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJEOi9HaXQvR2l0aHViL2Rhc2guanMvc3JjL2NvcmUvRmFjdG9yeU1ha2VyLmpzIiwiRDovR2l0L0dpdGh1Yi9kYXNoLmpzL3NyYy9jb3JlL2V2ZW50cy9FdmVudHNCYXNlLmpzIiwiRDovR2l0L0dpdGh1Yi9kYXNoLmpzL3NyYy9zdHJlYW1pbmcvY29uc3RhbnRzL0NvbnN0YW50cy5qcyIsIkQ6L0dpdC9HaXRodWIvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL21ldHJpY3MvTWV0cmljc1JlcG9ydGluZy5qcyIsIkQ6L0dpdC9HaXRodWIvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL21ldHJpY3MvTWV0cmljc1JlcG9ydGluZ0V2ZW50cy5qcyIsIkQ6L0dpdC9HaXRodWIvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL21ldHJpY3MvY29udHJvbGxlcnMvTWV0cmljc0NvbGxlY3Rpb25Db250cm9sbGVyLmpzIiwiRDovR2l0L0dpdGh1Yi9kYXNoLmpzL3NyYy9zdHJlYW1pbmcvbWV0cmljcy9jb250cm9sbGVycy9NZXRyaWNzQ29udHJvbGxlci5qcyIsIkQ6L0dpdC9HaXRodWIvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL21ldHJpY3MvY29udHJvbGxlcnMvTWV0cmljc0hhbmRsZXJzQ29udHJvbGxlci5qcyIsIkQ6L0dpdC9HaXRodWIvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL21ldHJpY3MvY29udHJvbGxlcnMvUmFuZ2VDb250cm9sbGVyLmpzIiwiRDovR2l0L0dpdGh1Yi9kYXNoLmpzL3NyYy9zdHJlYW1pbmcvbWV0cmljcy9jb250cm9sbGVycy9SZXBvcnRpbmdDb250cm9sbGVyLmpzIiwiRDovR2l0L0dpdGh1Yi9kYXNoLmpzL3NyYy9zdHJlYW1pbmcvbWV0cmljcy9tZXRyaWNzL01ldHJpY3NIYW5kbGVyRmFjdG9yeS5qcyIsIkQ6L0dpdC9HaXRodWIvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL21ldHJpY3MvbWV0cmljcy9oYW5kbGVycy9CdWZmZXJMZXZlbEhhbmRsZXIuanMiLCJEOi9HaXQvR2l0aHViL2Rhc2guanMvc3JjL3N0cmVhbWluZy9tZXRyaWNzL21ldHJpY3MvaGFuZGxlcnMvRFZCRXJyb3JzSGFuZGxlci5qcyIsIkQ6L0dpdC9HaXRodWIvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL21ldHJpY3MvbWV0cmljcy9oYW5kbGVycy9HZW5lcmljTWV0cmljSGFuZGxlci5qcyIsIkQ6L0dpdC9HaXRodWIvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL21ldHJpY3MvbWV0cmljcy9oYW5kbGVycy9IdHRwTGlzdEhhbmRsZXIuanMiLCJEOi9HaXQvR2l0aHViL2Rhc2guanMvc3JjL3N0cmVhbWluZy9tZXRyaWNzL3JlcG9ydGluZy9SZXBvcnRpbmdGYWN0b3J5LmpzIiwiRDovR2l0L0dpdGh1Yi9kYXNoLmpzL3NyYy9zdHJlYW1pbmcvbWV0cmljcy9yZXBvcnRpbmcvcmVwb3J0ZXJzL0RWQlJlcG9ydGluZy5qcyIsIkQ6L0dpdC9HaXRodWIvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL21ldHJpY3MvdXRpbHMvRFZCRXJyb3JzVHJhbnNsYXRvci5qcyIsIkQ6L0dpdC9HaXRodWIvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL21ldHJpY3MvdXRpbHMvSGFuZGxlckhlbHBlcnMuanMiLCJEOi9HaXQvR2l0aHViL2Rhc2guanMvc3JjL3N0cmVhbWluZy9tZXRyaWNzL3V0aWxzL01hbmlmZXN0UGFyc2luZy5qcyIsIkQ6L0dpdC9HaXRodWIvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL21ldHJpY3MvdXRpbHMvTWV0cmljU2VyaWFsaXNlci5qcyIsIkQ6L0dpdC9HaXRodWIvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL21ldHJpY3MvdXRpbHMvUk5HLmpzIiwiRDovR2l0L0dpdGh1Yi9kYXNoLmpzL3NyYy9zdHJlYW1pbmcvbWV0cmljcy92by9EVkJFcnJvcnMuanMiLCJEOi9HaXQvR2l0aHViL2Rhc2guanMvc3JjL3N0cmVhbWluZy9tZXRyaWNzL3ZvL01ldHJpY3MuanMiLCJEOi9HaXQvR2l0aHViL2Rhc2guanMvc3JjL3N0cmVhbWluZy9tZXRyaWNzL3ZvL1JhbmdlLmpzIiwiRDovR2l0L0dpdGh1Yi9kYXNoLmpzL3NyYy9zdHJlYW1pbmcvbWV0cmljcy92by9SZXBvcnRpbmcuanMiLCJEOi9HaXQvR2l0aHViL2Rhc2guanMvc3JjL3N0cmVhbWluZy91dGlscy9DdXN0b21UaW1lUmFuZ2VzLmpzIiwiRDovR2l0L0dpdGh1Yi9kYXNoLmpzL3NyYy9zdHJlYW1pbmcvdXRpbHMvU3VwZXJ2aXNvclRvb2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNpQ0EsSUFBTSxZQUFZLEdBQUksQ0FBQSxZQUFZOztBQUU5QixRQUFJLFFBQVEsWUFBQSxDQUFDO0FBQ2IsUUFBTSxpQkFBaUIsR0FBRyxFQUFFLENBQUM7QUFDN0IsUUFBTSxrQkFBa0IsR0FBRyxFQUFFLENBQUM7QUFDOUIsUUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDOztBQUUxQixhQUFTLE1BQU0sQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDcEQsWUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxhQUFhLEVBQUU7QUFDakMsbUJBQU8sQ0FBQyxJQUFJLENBQUMsR0FBRztBQUNaLHdCQUFRLEVBQUUsYUFBYTtBQUN2Qix3QkFBUSxFQUFFLFFBQVE7YUFDckIsQ0FBQztTQUNMO0tBQ0o7Ozs7Ozs7Ozs7Ozs7O0FBY0QsYUFBUyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFO0FBQzlDLGFBQUssSUFBTSxDQUFDLElBQUksaUJBQWlCLEVBQUU7QUFDL0IsZ0JBQU0sR0FBRyxHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLGdCQUFJLEdBQUcsQ0FBQyxPQUFPLEtBQUssT0FBTyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtB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LElBQUksS0FBSyxnQ0FBVSxLQUFLLEFBQUMsRUFBRTtBQUNwRixjQUFNLGdDQUFVLGtCQUFrQixDQUFDO0tBQ3RDO0NBQ0oiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuLyoqXG4gKiBAbW9kdWxlIEZhY3RvcnlNYWtlclxuICovXG5jb25zdCBGYWN0b3J5TWFrZXIgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgbGV0IGluc3RhbmNlO1xuICAgIGNvbnN0IHNpbmdsZXRvbkNvbnRleHRzID0gW107XG4gICAgY29uc3Qgc2luZ2xldG9uRmFjdG9yaWVzID0ge307XG4gICAgY29uc3QgY2xhc3NGYWN0b3JpZXMgPSB7fTtcblxuICAgIGZ1bmN0aW9uIGV4dGVuZChuYW1lLCBjaGlsZEluc3RhbmNlLCBvdmVycmlkZSwgY29udGV4dCkge1xuICAgICAgICBpZiAoIWNvbnRleHRbbmFtZV0gJiYgY2hpbGRJbnN0YW5jZSkge1xuICAgICAgICAgICAgY29udGV4dFtuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZTogY2hpbGRJbnN0YW5jZSxcbiAgICAgICAgICAgICAgICBvdmVycmlkZTogb3ZlcnJpZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2UgdGhpcyBtZXRob2QgZnJvbSB5b3VyIGV4dGVuZGVkIG9iamVjdC4gIHRoaXMuZmFjdG9yeSBpcyBpbmplY3RlZCBpbnRvIHlvdXIgb2JqZWN0LlxuICAgICAqIHRoaXMuZmFjdG9yeS5nZXRTaW5nbGV0b25JbnN0YW5jZSh0aGlzLmNvbnRleHQsICdWaWRlb01vZGVsJylcbiAgICAgKiB3aWxsIHJldHVybiB0aGUgdmlkZW8gbW9kZWwgZm9yIHVzZSBpbiB0aGUgZXh0ZW5kZWQgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgLSBpbmplY3RlZCBpbnRvIGV4dGVuZGVkIG9iamVjdCBhcyB0aGlzLmNvbnRleHRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gc3RyaW5nIG5hbWUgZm91bmQgaW4gYWxsIGRhc2guanMgb2JqZWN0c1xuICAgICAqIHdpdGggbmFtZSBfX2Rhc2hqc19mYWN0b3J5X25hbWUgV2lsbCBiZSBhdCB0aGUgYm90dG9tLiBXaWxsIGJlIHRoZSBzYW1lIGFzIHRoZSBvYmplY3QncyBuYW1lLlxuICAgICAqIEByZXR1cm5zIHsqfSBDb250ZXh0IGF3YXJlIGluc3RhbmNlIG9mIHNwZWNpZmllZCBzaW5nbGV0b24gbmFtZS5cbiAgICAgKiBAbWVtYmVyb2YgbW9kdWxlOkZhY3RvcnlNYWtlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldFNpbmdsZXRvbkluc3RhbmNlKGNvbnRleHQsIGNsYXNzTmFtZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gc2luZ2xldG9uQ29udGV4dHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHNpbmdsZXRvbkNvbnRleHRzW2ldO1xuICAgICAgICAgICAgaWYgKG9iai5jb250ZXh0ID09PSBjb250ZXh0ICYmIG9iai5uYW1lID09PSBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqLmluc3RhbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZSB0aGlzIG1ldGhvZCB0byBhZGQgYW4gc2luZ2xldG9uIGluc3RhbmNlIHRvIHRoZSBzeXN0ZW0uICBVc2VmdWwgZm9yIHVuaXQgdGVzdGluZyB0byBtb2NrIG9iamVjdHMgZXRjLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlXG4gICAgICogQG1lbWJlcm9mIG1vZHVsZTpGYWN0b3J5TWFrZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRTaW5nbGV0b25JbnN0YW5jZShjb250ZXh0LCBjbGFzc05hbWUsIGluc3RhbmNlKSB7XG4gICAgICAgIGZvciAoY29uc3QgaSBpbiBzaW5nbGV0b25Db250ZXh0cykge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0gc2luZ2xldG9uQ29udGV4dHNbaV07XG4gICAgICAgICAgICBpZiAob2JqLmNvbnRleHQgPT09IGNvbnRleHQgJiYgb2JqLm5hbWUgPT09IGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIHNpbmdsZXRvbkNvbnRleHRzW2ldLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNpbmdsZXRvbkNvbnRleHRzLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAvLyBGYWN0b3JpZXMgc3RvcmFnZSBNYW5hZ2VtZW50XG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICBmdW5jdGlvbiBnZXRGYWN0b3J5QnlOYW1lKG5hbWUsIGZhY3Rvcmllc0FycmF5KSB7XG4gICAgICAgIHJldHVybiBmYWN0b3JpZXNBcnJheVtuYW1lXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVGYWN0b3J5KG5hbWUsIGZhY3RvcnksIGZhY3Rvcmllc0FycmF5KSB7XG4gICAgICAgIGlmIChuYW1lIGluIGZhY3Rvcmllc0FycmF5KSB7XG4gICAgICAgICAgICBmYWN0b3JpZXNBcnJheVtuYW1lXSA9IGZhY3Rvcnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAvLyBDbGFzcyBGYWN0b3JpZXMgTWFuYWdlbWVudFxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ2xhc3NGYWN0b3J5KG5hbWUsIGZhY3RvcnkpIHtcbiAgICAgICAgdXBkYXRlRmFjdG9yeShuYW1lLCBmYWN0b3J5LCBjbGFzc0ZhY3Rvcmllcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q2xhc3NGYWN0b3J5QnlOYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGdldEZhY3RvcnlCeU5hbWUobmFtZSwgY2xhc3NGYWN0b3JpZXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENsYXNzRmFjdG9yeShjbGFzc0NvbnN0cnVjdG9yKSB7XG4gICAgICAgIGxldCBmYWN0b3J5ID0gZ2V0RmFjdG9yeUJ5TmFtZShjbGFzc0NvbnN0cnVjdG9yLl9fZGFzaGpzX2ZhY3RvcnlfbmFtZSwgY2xhc3NGYWN0b3JpZXMpO1xuXG4gICAgICAgIGlmICghZmFjdG9yeSkge1xuICAgICAgICAgICAgZmFjdG9yeSA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0ID0ge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lcmdlKGNsYXNzQ29uc3RydWN0b3IsIGNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY2xhc3NGYWN0b3JpZXNbY2xhc3NDb25zdHJ1Y3Rvci5fX2Rhc2hqc19mYWN0b3J5X25hbWVdID0gZmFjdG9yeTsgLy8gc3RvcmUgZmFjdG9yeVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWN0b3J5O1xuICAgIH1cblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgIC8vIFNpbmdsZXRvbiBGYWN0b3J5IE1BYW5nZW1lbnRcblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNpbmdsZXRvbkZhY3RvcnkobmFtZSwgZmFjdG9yeSkge1xuICAgICAgICB1cGRhdGVGYWN0b3J5KG5hbWUsIGZhY3RvcnksIHNpbmdsZXRvbkZhY3Rvcmllcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2luZ2xldG9uRmFjdG9yeUJ5TmFtZShuYW1lKSB7XG4gICAgICAgIHJldHVybiBnZXRGYWN0b3J5QnlOYW1lKG5hbWUsIHNpbmdsZXRvbkZhY3Rvcmllcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2luZ2xldG9uRmFjdG9yeShjbGFzc0NvbnN0cnVjdG9yKSB7XG4gICAgICAgIGxldCBmYWN0b3J5ID0gZ2V0RmFjdG9yeUJ5TmFtZShjbGFzc0NvbnN0cnVjdG9yLl9fZGFzaGpzX2ZhY3RvcnlfbmFtZSwgc2luZ2xldG9uRmFjdG9yaWVzKTtcbiAgICAgICAgaWYgKCFmYWN0b3J5KSB7XG4gICAgICAgICAgICBmYWN0b3J5ID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0ID0ge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGdldEluc3RhbmNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGFuIGluc3RhbmNlIHlldCBjaGVjayBmb3Igb25lIG9uIHRoZSBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UgPSBnZXRTaW5nbGV0b25JbnN0YW5jZShjb250ZXh0LCBjbGFzc0NvbnN0cnVjdG9yLl9fZGFzaGpzX2ZhY3RvcnlfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGluc3RhbmNlIG9uIHRoZSBjb250ZXh0IHRoZW4gY3JlYXRlIG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlID0gbWVyZ2UoY2xhc3NDb25zdHJ1Y3RvciwgY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW5nbGV0b25Db250ZXh0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogY2xhc3NDb25zdHJ1Y3Rvci5fX2Rhc2hqc19mYWN0b3J5X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaW5nbGV0b25GYWN0b3JpZXNbY2xhc3NDb25zdHJ1Y3Rvci5fX2Rhc2hqc19mYWN0b3J5X25hbWVdID0gZmFjdG9yeTsgLy8gc3RvcmUgZmFjdG9yeVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhY3Rvcnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVyZ2UoY2xhc3NDb25zdHJ1Y3RvciwgY29udGV4dCwgYXJncykge1xuXG4gICAgICAgIGxldCBjbGFzc0luc3RhbmNlO1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc0NvbnN0cnVjdG9yLl9fZGFzaGpzX2ZhY3RvcnlfbmFtZTtcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uT2JqZWN0ID0gY29udGV4dFtjbGFzc05hbWVdO1xuXG4gICAgICAgIGlmIChleHRlbnNpb25PYmplY3QpIHtcblxuICAgICAgICAgICAgbGV0IGV4dGVuc2lvbiA9IGV4dGVuc2lvbk9iamVjdC5pbnN0YW5jZTtcblxuICAgICAgICAgICAgaWYgKGV4dGVuc2lvbk9iamVjdC5vdmVycmlkZSkgeyAvL092ZXJyaWRlIHB1YmxpYyBtZXRob2RzIGluIHBhcmVudCBidXQga2VlcCBwYXJlbnQuXG5cbiAgICAgICAgICAgICAgICBjbGFzc0luc3RhbmNlID0gY2xhc3NDb25zdHJ1Y3Rvci5hcHBseSh7Y29udGV4dH0sIGFyZ3MpO1xuICAgICAgICAgICAgICAgIGV4dGVuc2lvbiA9IGV4dGVuc2lvbi5hcHBseSh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIGZhY3Rvcnk6IGluc3RhbmNlLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGNsYXNzSW5zdGFuY2VcbiAgICAgICAgICAgICAgICB9LCBhcmdzKTtcblxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBleHRlbnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsYXNzSW5zdGFuY2UuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzSW5zdGFuY2VbcHJvcF0gPSBleHRlbnNpb25bcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7IC8vcmVwbGFjZSBwYXJlbnQgb2JqZWN0IGNvbXBsZXRlbHkgd2l0aCBuZXcgb2JqZWN0LiBTYW1lIGFzIGRpam9uLlxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4dGVuc2lvbi5hcHBseSh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIGZhY3Rvcnk6IGluc3RhbmNlXG4gICAgICAgICAgICAgICAgfSwgYXJncyk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGNsYXNzXG4gICAgICAgICAgICBjbGFzc0luc3RhbmNlID0gY2xhc3NDb25zdHJ1Y3Rvci5hcHBseSh7Y29udGV4dH0sIGFyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIGdldENsYXNzTmFtZSBmdW5jdGlvbiB0byBjbGFzcyBpbnN0YW5jZSBwcm90b3R5cGUgKHVzZWQgYnkgRGVidWcpXG4gICAgICAgIGNsYXNzSW5zdGFuY2UuZ2V0Q2xhc3NOYW1lID0gZnVuY3Rpb24gKCkge3JldHVybiBjbGFzc05hbWU7fTtcblxuICAgICAgICByZXR1cm4gY2xhc3NJbnN0YW5jZTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZSA9IHtcbiAgICAgICAgZXh0ZW5kOiBleHRlbmQsXG4gICAgICAgIGdldFNpbmdsZXRvbkluc3RhbmNlOiBnZXRTaW5nbGV0b25JbnN0YW5jZSxcbiAgICAgICAgc2V0U2luZ2xldG9uSW5zdGFuY2U6IHNldFNpbmdsZXRvbkluc3RhbmNlLFxuICAgICAgICBnZXRTaW5nbGV0b25GYWN0b3J5OiBnZXRTaW5nbGV0b25GYWN0b3J5LFxuICAgICAgICBnZXRTaW5nbGV0b25GYWN0b3J5QnlOYW1lOiBnZXRTaW5nbGV0b25GYWN0b3J5QnlOYW1lLFxuICAgICAgICB1cGRhdGVTaW5nbGV0b25GYWN0b3J5OiB1cGRhdGVTaW5nbGV0b25GYWN0b3J5LFxuICAgICAgICBnZXRDbGFzc0ZhY3Rvcnk6IGdldENsYXNzRmFjdG9yeSxcbiAgICAgICAgZ2V0Q2xhc3NGYWN0b3J5QnlOYW1lOiBnZXRDbGFzc0ZhY3RvcnlCeU5hbWUsXG4gICAgICAgIHVwZGF0ZUNsYXNzRmFjdG9yeTogdXBkYXRlQ2xhc3NGYWN0b3J5XG4gICAgfTtcblxuICAgIHJldHVybiBpbnN0YW5jZTtcblxufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgRmFjdG9yeU1ha2VyO1xuIiwiLyoqXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbi8qKlxuICogQGNsYXNzXG4gKiBAaWdub3JlXG4gKi9cbmNsYXNzIEV2ZW50c0Jhc2Uge1xuICAgIGV4dGVuZCAoZXZlbnRzLCBjb25maWcpIHtcbiAgICAgICAgaWYgKCFldmVudHMpIHJldHVybjtcblxuICAgICAgICBsZXQgb3ZlcnJpZGUgPSBjb25maWcgPyBjb25maWcub3ZlcnJpZGUgOiBmYWxzZTtcbiAgICAgICAgbGV0IHB1YmxpY09ubHkgPSBjb25maWcgPyBjb25maWcucHVibGljT25seSA6IGZhbHNlO1xuXG5cbiAgICAgICAgZm9yIChjb25zdCBldnQgaW4gZXZlbnRzKSB7XG4gICAgICAgICAgICBpZiAoIWV2ZW50cy5oYXNPd25Qcm9wZXJ0eShldnQpIHx8ICh0aGlzW2V2dF0gJiYgIW92ZXJyaWRlKSkgY29udGludWU7XG4gICAgICAgICAgICBpZiAocHVibGljT25seSAmJiBldmVudHNbZXZ0XS5pbmRleE9mKCdwdWJsaWNfJykgPT09IC0xKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRoaXNbZXZ0XSA9IGV2ZW50c1tldnRdO1xuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50c0Jhc2U7IiwiLyoqXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuLyoqXG4gKiBDb25zdGFudHMgZGVjbGFyYXRpb25cbiAqIEBjbGFzc1xuICovXG5jbGFzcyBDb25zdGFudHMge1xuXG4gICAgaW5pdCAoKSB7XG4gICAgICAgIHRoaXMuU1RSRUFNID0gJ3N0cmVhbSc7XG4gICAgICAgIHRoaXMuVklERU8gPSAndmlkZW8nO1xuICAgICAgICB0aGlzLkFVRElPID0gJ2F1ZGlvJztcbiAgICAgICAgdGhpcy5URVhUID0gJ3RleHQnO1xuICAgICAgICB0aGlzLkZSQUdNRU5URURfVEVYVCA9ICdmcmFnbWVudGVkVGV4dCc7XG4gICAgICAgIHRoaXMuRU1CRURERURfVEVYVCA9ICdlbWJlZGRlZFRleHQnO1xuICAgICAgICB0aGlzLk1VWEVEID0gJ211eGVkJztcbiAgICAgICAgdGhpcy5JTUFHRSA9ICdpbWFnZSc7XG4gICAgICAgIHRoaXMuTE9DQVRJT04gPSAnTG9jYXRpb24nO1xuICAgICAgICB0aGlzLklOSVRJQUxJWkUgPSAnaW5pdGlhbGl6ZSc7XG4gICAgICAgIHRoaXMuVEVYVF9TSE9XSU5HID0gJ3Nob3dpbmcnO1xuICAgICAgICB0aGlzLlRFWFRfSElEREVOID0gJ2hpZGRlbic7XG4gICAgICAgIHRoaXMuQ0MxID0gJ0NDMSc7XG4gICAgICAgIHRoaXMuQ0MzID0gJ0NDMyc7XG4gICAgICAgIHRoaXMuU1RQUCA9ICdzdHBwJztcbiAgICAgICAgdGhpcy5UVE1MID0gJ3R0bWwnO1xuICAgICAgICB0aGlzLlZUVCA9ICd2dHQnO1xuICAgICAgICB0aGlzLldWVFQgPSAnd3Z0dCc7XG4gICAgICAgIHRoaXMuVVRGOCA9ICd1dGYtOCc7XG4gICAgICAgIHRoaXMuU1VHR0VTVEVEX1BSRVNFTlRBVElPTl9ERUxBWSA9ICdzdWdnZXN0ZWRQcmVzZW50YXRpb25EZWxheSc7XG4gICAgICAgIHRoaXMuU0NIRU1FX0lEX1VSSSA9ICdzY2hlbWVJZFVyaSc7XG4gICAgICAgIHRoaXMuU1RBUlRfVElNRSA9ICdzdGFydHRpbWUnO1xuICAgICAgICB0aGlzLkFCUl9TVFJBVEVHWV9EWU5BTUlDID0gJ2FickR5bmFtaWMnO1xuICAgICAgICB0aGlzLkFCUl9TVFJBVEVHWV9CT0xBID0gJ2FickJvbGEnO1xuICAgICAgICB0aGlzLkFCUl9TVFJBVEVHWV9USFJPVUdIUFVUID0gJ2FiclRocm91Z2hwdXQnO1xuICAgICAgICB0aGlzLk1PVklOR19BVkVSQUdFX1NMSURJTkdfV0lORE9XID0gJ3NsaWRpbmdXaW5kb3cnO1xuICAgICAgICB0aGlzLk1PVklOR19BVkVSQUdFX0VXTUEgPSAnZXdtYSc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgQGNvbnN0YW50IHtzdHJpbmd9IEJBRF9BUkdVTUVOVF9FUlJPUiAnSW52YWxpZCBBcmd1bWVudHMnIGVycm9yXG4gICAgICAgICAqICBAbWVtYmVyb2YgQ29uc3RhbnRzI1xuICAgICAgICAgKiAgQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5CQURfQVJHVU1FTlRfRVJST1IgPSAnSW52YWxpZCBBcmd1bWVudHMnO1xuICAgICAgICB0aGlzLk1JU1NJTkdfQ09ORklHX0VSUk9SID0gJ01pc3NpbmcgY29uZmlnIHBhcmFtZXRlcihzKSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdHNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbn1cblxubGV0IGNvbnN0YW50cyA9IG5ldyBDb25zdGFudHMoKTtcbmV4cG9ydCBkZWZhdWx0IGNvbnN0YW50cztcbiIsIi8qKlxuICogVGhlIGNvcHlyaWdodCBpbiB0aGlzIHNvZnR3YXJlIGlzIGJlaW5nIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBCU0QgTGljZW5zZSxcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiAqICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbiAqICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgQVMgSVMgQU5EIEFOWVxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXG4gKiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxuICogIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLFxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuICogIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbmltcG9ydCBEVkJFcnJvcnNUcmFuc2xhdG9yIGZyb20gJy4vdXRpbHMvRFZCRXJyb3JzVHJhbnNsYXRvcic7XG5pbXBvcnQgTWV0cmljc1JlcG9ydGluZ0V2ZW50cyBmcm9tICcuL01ldHJpY3NSZXBvcnRpbmdFdmVudHMnO1xuaW1wb3J0IE1ldHJpY3NDb2xsZWN0aW9uQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL01ldHJpY3NDb2xsZWN0aW9uQ29udHJvbGxlcic7XG5pbXBvcnQgTWV0cmljc0hhbmRsZXJGYWN0b3J5IGZyb20gJy4vbWV0cmljcy9NZXRyaWNzSGFuZGxlckZhY3RvcnknO1xuaW1wb3J0IFJlcG9ydGluZ0ZhY3RvcnkgZnJvbSAnLi9yZXBvcnRpbmcvUmVwb3J0aW5nRmFjdG9yeSc7XG5cbmZ1bmN0aW9uIE1ldHJpY3NSZXBvcnRpbmcoKSB7XG5cbiAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICBsZXQgaW5zdGFuY2UsXG4gICAgICAgIGR2YkVycm9yc1RyYW5zbGF0b3I7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBNZXRyaWNzQ29sbGVjdGlvbkNvbnRyb2xsZXIsIGFuZCBhIERWQkVycm9yc1RyYW5zbGF0b3JcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIC0gZGVwZW5kYW5jaWVzIGZyb20gb3duZXJcbiAgICAgKiBAcmV0dXJuIHtNZXRyaWNzQ29sbGVjdGlvbkNvbnRyb2xsZXJ9IE1ldHJpY3MgQ29sbGVjdGlvbiBDb250cm9sbGVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gY3JlYXRlTWV0cmljc1JlcG9ydGluZyhjb25maWcpIHtcbiAgICAgICAgZHZiRXJyb3JzVHJhbnNsYXRvciA9IERWQkVycm9yc1RyYW5zbGF0b3IoY29udGV4dCkuZ2V0SW5zdGFuY2Uoe1xuICAgICAgICAgICAgZXZlbnRCdXM6IGNvbmZpZy5ldmVudEJ1cyxcbiAgICAgICAgICAgIG1ldHJpY3NNb2RlbDogY29uZmlnLm1ldHJpY3NNb2RlbCxcbiAgICAgICAgICAgIG1ldHJpY3NDb25zdGFudHM6IGNvbmZpZy5tZXRyaWNzQ29uc3RhbnRzLFxuICAgICAgICAgICAgZXZlbnRzOiBjb25maWcuZXZlbnRzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBNZXRyaWNzQ29sbGVjdGlvbkNvbnRyb2xsZXIoY29udGV4dCkuY3JlYXRlKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBSZXBvcnRpbmdGYWN0b3J5IHRvIGFsbG93IG5ldyByZXBvcnRlcnMgdG8gYmUgcmVnaXN0ZXJlZFxuICAgICAqIEByZXR1cm4ge1JlcG9ydGluZ0ZhY3Rvcnl9IFJlcG9ydGluZyBGYWN0b3J5XG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0UmVwb3J0aW5nRmFjdG9yeSgpIHtcbiAgICAgICAgcmV0dXJuIFJlcG9ydGluZ0ZhY3RvcnkoY29udGV4dCkuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIE1ldHJpY3NIYW5kbGVyRmFjdG9yeSB0byBhbGxvdyBuZXcgaGFuZGxlcnMgdG8gYmUgcmVnaXN0ZXJlZFxuICAgICAqIEByZXR1cm4ge01ldHJpY3NIYW5kbGVyRmFjdG9yeX0gTWV0cmljcyBIYW5kbGVyIEZhY3RvcnlcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRNZXRyaWNzSGFuZGxlckZhY3RvcnkoKSB7XG4gICAgICAgIHJldHVybiBNZXRyaWNzSGFuZGxlckZhY3RvcnkoY29udGV4dCkuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZSA9IHtcbiAgICAgICAgY3JlYXRlTWV0cmljc1JlcG9ydGluZzogICAgIGNyZWF0ZU1ldHJpY3NSZXBvcnRpbmcsXG4gICAgICAgIGdldFJlcG9ydGluZ0ZhY3Rvcnk6ICAgICAgICBnZXRSZXBvcnRpbmdGYWN0b3J5LFxuICAgICAgICBnZXRNZXRyaWNzSGFuZGxlckZhY3Rvcnk6ICAgZ2V0TWV0cmljc0hhbmRsZXJGYWN0b3J5XG4gICAgfTtcblxuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuTWV0cmljc1JlcG9ydGluZy5fX2Rhc2hqc19mYWN0b3J5X25hbWUgPSAnTWV0cmljc1JlcG9ydGluZyc7XG5jb25zdCBmYWN0b3J5ID0gZGFzaGpzLkZhY3RvcnlNYWtlci5nZXRDbGFzc0ZhY3RvcnkoTWV0cmljc1JlcG9ydGluZyk7IC8qIGpzaGludCBpZ25vcmU6bGluZSAqL1xuZmFjdG9yeS5ldmVudHMgPSBNZXRyaWNzUmVwb3J0aW5nRXZlbnRzO1xuZGFzaGpzLkZhY3RvcnlNYWtlci51cGRhdGVDbGFzc0ZhY3RvcnkoTWV0cmljc1JlcG9ydGluZy5fX2Rhc2hqc19mYWN0b3J5X25hbWUsIGZhY3RvcnkpOyAvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi9cbmV4cG9ydCBkZWZhdWx0IGZhY3Rvcnk7XG4iLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuaW1wb3J0IEV2ZW50c0Jhc2UgZnJvbSAnLi4vLi4vY29yZS9ldmVudHMvRXZlbnRzQmFzZSc7XG5cbmNsYXNzIE1ldHJpY3NSZXBvcnRpbmdFdmVudHMgZXh0ZW5kcyBFdmVudHNCYXNlIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5NRVRSSUNTX0lOSVRJQUxJU0FUSU9OX0NPTVBMRVRFID0gJ2ludGVybmFsX21ldHJpY3NSZXBvcnRpbmdJbml0aWFsaXplZCc7XG4gICAgICAgIHRoaXMuQkVDQU1FX1JFUE9SVElOR19QTEFZRVIgPSAnaW50ZXJuYWxfYmVjYW1lUmVwb3J0aW5nUGxheWVyJztcbiAgICB9XG59XG5cbmxldCBtZXRyaWNzUmVwb3J0aW5nRXZlbnRzID0gbmV3IE1ldHJpY3NSZXBvcnRpbmdFdmVudHMoKTtcbmV4cG9ydCBkZWZhdWx0IG1ldHJpY3NSZXBvcnRpbmdFdmVudHM7XG4iLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG5pbXBvcnQgTWV0cmljc0NvbnRyb2xsZXIgZnJvbSAnLi9NZXRyaWNzQ29udHJvbGxlcic7XG5pbXBvcnQgTWFuaWZlc3RQYXJzaW5nIGZyb20gJy4uL3V0aWxzL01hbmlmZXN0UGFyc2luZyc7XG5pbXBvcnQgTWV0cmljc1JlcG9ydGluZ0V2ZW50cyBmcm9tICcuLi9NZXRyaWNzUmVwb3J0aW5nRXZlbnRzJztcblxuZnVuY3Rpb24gTWV0cmljc0NvbGxlY3Rpb25Db250cm9sbGVyKGNvbmZpZykge1xuXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgIGxldCBtZXRyaWNzQ29udHJvbGxlcnMgPSB7fTtcblxuICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgIGxldCBldmVudEJ1cyA9IGNvbmZpZy5ldmVudEJ1cztcbiAgICBjb25zdCBldmVudHMgPSBjb25maWcuZXZlbnRzO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlKGUpIHtcbiAgICAgICAgaWYgKGUuZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0YXJ0IGJ5IGFzc3VtaW5nIGFsbCBleGlzdGluZyBjb250cm9sbGVycyBuZWVkIHJlbW92aW5nXG4gICAgICAgIGxldCBjb250cm9sbGVyc1RvUmVtb3ZlID0gT2JqZWN0LmtleXMobWV0cmljc0NvbnRyb2xsZXJzKTtcblxuICAgICAgICBjb25zdCBtZXRyaWNzID0gTWFuaWZlc3RQYXJzaW5nKGNvbnRleHQpLmdldEluc3RhbmNlKHtcbiAgICAgICAgICAgIGRhc2hNYW5pZmVzdE1vZGVsOiBjb25maWcuZGFzaE1hbmlmZXN0TW9kZWwsXG4gICAgICAgICAgICBjb25zdGFudHM6IGNvbmZpZy5jb25zdGFudHNcbiAgICAgICAgfSkuZ2V0TWV0cmljcyhlLm1hbmlmZXN0KTtcblxuICAgICAgICBtZXRyaWNzLmZvckVhY2gobSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBKU09OLnN0cmluZ2lmeShtKTtcblxuICAgICAgICAgICAgaWYgKCFtZXRyaWNzQ29udHJvbGxlcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb250cm9sbGVyID0gTWV0cmljc0NvbnRyb2xsZXIoY29udGV4dCkuY3JlYXRlKGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuaW5pdGlhbGl6ZShtKTtcbiAgICAgICAgICAgICAgICAgICAgbWV0cmljc0NvbnRyb2xsZXJzW2tleV0gPSBjb250cm9sbGVyO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmFpbCBxdWlldGx5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSBzdGlsbCBuZWVkIHRoaXMgY29udHJvbGxlciAtIGRlbGV0ZSBmcm9tIHJlbW92YWwgbGlzdFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJzVG9SZW1vdmUuc3BsaWNlKGtleSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIG5vdyByZW1vdmUgdGhlIHVud2FudGVkIGNvbnRyb2xsZXJzXG4gICAgICAgIGNvbnRyb2xsZXJzVG9SZW1vdmUuZm9yRWFjaChjID0+IHtcbiAgICAgICAgICAgIG1ldHJpY3NDb250cm9sbGVyc1tjXS5yZXNldCgpO1xuICAgICAgICAgICAgZGVsZXRlIG1ldHJpY3NDb250cm9sbGVyc1tjXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihcbiAgICAgICAgICAgIE1ldHJpY3NSZXBvcnRpbmdFdmVudHMuTUVUUklDU19JTklUSUFMSVNBVElPTl9DT01QTEVURVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0TWV0cmljc0NvbnRyb2xsZXJzKCkge1xuICAgICAgICBPYmplY3Qua2V5cyhtZXRyaWNzQ29udHJvbGxlcnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIG1ldHJpY3NDb250cm9sbGVyc1trZXldLnJlc2V0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1ldHJpY3NDb250cm9sbGVycyA9IHt9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHVwKCkge1xuICAgICAgICBldmVudEJ1cy5vbihldmVudHMuTUFOSUZFU1RfVVBEQVRFRCwgdXBkYXRlKTtcbiAgICAgICAgZXZlbnRCdXMub24oZXZlbnRzLlNUUkVBTV9URUFSRE9XTl9DT01QTEVURSwgcmVzZXRNZXRyaWNzQ29udHJvbGxlcnMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICBldmVudEJ1cy5vZmYoZXZlbnRzLk1BTklGRVNUX1VQREFURUQsIHVwZGF0ZSk7XG4gICAgICAgIGV2ZW50QnVzLm9mZihldmVudHMuU1RSRUFNX1RFQVJET1dOX0NPTVBMRVRFLCByZXNldE1ldHJpY3NDb250cm9sbGVycyk7XG4gICAgfVxuXG4gICAgc2V0dXAoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc2V0OiByZXNldFxuICAgIH07XG59XG5cbk1ldHJpY3NDb2xsZWN0aW9uQ29udHJvbGxlci5fX2Rhc2hqc19mYWN0b3J5X25hbWUgPSAnTWV0cmljc0NvbGxlY3Rpb25Db250cm9sbGVyJztcbmV4cG9ydCBkZWZhdWx0IGRhc2hqcy5GYWN0b3J5TWFrZXIuZ2V0Q2xhc3NGYWN0b3J5KE1ldHJpY3NDb2xsZWN0aW9uQ29udHJvbGxlcik7IC8qIGpzaGludCBpZ25vcmU6bGluZSAqL1xuIiwiLyoqXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuaW1wb3J0IFJhbmdlQ29udHJvbGxlciBmcm9tICcuL1JhbmdlQ29udHJvbGxlcic7XG5pbXBvcnQgUmVwb3J0aW5nQ29udHJvbGxlciBmcm9tICcuL1JlcG9ydGluZ0NvbnRyb2xsZXInO1xuaW1wb3J0IE1ldHJpY3NIYW5kbGVyc0NvbnRyb2xsZXIgZnJvbSAnLi9NZXRyaWNzSGFuZGxlcnNDb250cm9sbGVyJztcblxuZnVuY3Rpb24gTWV0cmljc0NvbnRyb2xsZXIoY29uZmlnKSB7XG5cbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gICAgbGV0IG1ldHJpY3NIYW5kbGVyc0NvbnRyb2xsZXIsXG4gICAgICAgIHJlcG9ydGluZ0NvbnRyb2xsZXIsXG4gICAgICAgIHJhbmdlQ29udHJvbGxlcixcbiAgICAgICAgaW5zdGFuY2U7XG5cbiAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dDtcblxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUobWV0cmljc0VudHJ5KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByYW5nZUNvbnRyb2xsZXIgPSBSYW5nZUNvbnRyb2xsZXIoY29udGV4dCkuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBtZWRpYUVsZW1lbnQ6IGNvbmZpZy5tZWRpYUVsZW1lbnRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByYW5nZUNvbnRyb2xsZXIuaW5pdGlhbGl6ZShtZXRyaWNzRW50cnkuUmFuZ2UpO1xuXG4gICAgICAgICAgICByZXBvcnRpbmdDb250cm9sbGVyID0gUmVwb3J0aW5nQ29udHJvbGxlcihjb250ZXh0KS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGRlYnVnOiBjb25maWcuZGVidWcsXG4gICAgICAgICAgICAgICAgbWV0cmljc0NvbnN0YW50czogY29uZmlnLm1ldHJpY3NDb25zdGFudHNcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXBvcnRpbmdDb250cm9sbGVyLmluaXRpYWxpemUobWV0cmljc0VudHJ5LlJlcG9ydGluZywgcmFuZ2VDb250cm9sbGVyKTtcblxuICAgICAgICAgICAgbWV0cmljc0hhbmRsZXJzQ29udHJvbGxlciA9IE1ldHJpY3NIYW5kbGVyc0NvbnRyb2xsZXIoY29udGV4dCkuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBkZWJ1ZzogY29uZmlnLmRlYnVnLFxuICAgICAgICAgICAgICAgIGV2ZW50QnVzOiBjb25maWcuZXZlbnRCdXMsXG4gICAgICAgICAgICAgICAgbWV0cmljc0NvbnN0YW50czogY29uZmlnLm1ldHJpY3NDb25zdGFudHMsXG4gICAgICAgICAgICAgICAgZXZlbnRzOiBjb25maWcuZXZlbnRzXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWV0cmljc0hhbmRsZXJzQ29udHJvbGxlci5pbml0aWFsaXplKG1ldHJpY3NFbnRyeS5tZXRyaWNzLCByZXBvcnRpbmdDb250cm9sbGVyKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgaWYgKG1ldHJpY3NIYW5kbGVyc0NvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIG1ldHJpY3NIYW5kbGVyc0NvbnRyb2xsZXIucmVzZXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXBvcnRpbmdDb250cm9sbGVyKSB7XG4gICAgICAgICAgICByZXBvcnRpbmdDb250cm9sbGVyLnJlc2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmFuZ2VDb250cm9sbGVyKSB7XG4gICAgICAgICAgICByYW5nZUNvbnRyb2xsZXIucmVzZXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluc3RhbmNlID0ge1xuICAgICAgICBpbml0aWFsaXplOiBpbml0aWFsaXplLFxuICAgICAgICByZXNldDogICAgICByZXNldFxuICAgIH07XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbk1ldHJpY3NDb250cm9sbGVyLl9fZGFzaGpzX2ZhY3RvcnlfbmFtZSA9ICdNZXRyaWNzQ29udHJvbGxlcic7XG5leHBvcnQgZGVmYXVsdCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldENsYXNzRmFjdG9yeShNZXRyaWNzQ29udHJvbGxlcik7IC8qIGpzaGludCBpZ25vcmU6bGluZSAqL1xuIiwiLyoqXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuaW1wb3J0IE1ldHJpY3NIYW5kbGVyRmFjdG9yeSBmcm9tICcuLi9tZXRyaWNzL01ldHJpY3NIYW5kbGVyRmFjdG9yeSc7XG5cbmZ1bmN0aW9uIE1ldHJpY3NIYW5kbGVyc0NvbnRyb2xsZXIoY29uZmlnKSB7XG5cbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gICAgbGV0IGhhbmRsZXJzID0gW107XG5cbiAgICBsZXQgaW5zdGFuY2U7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCBldmVudEJ1cyA9IGNvbmZpZy5ldmVudEJ1cztcbiAgICBjb25zdCBFdmVudHMgPSBjb25maWcuZXZlbnRzO1xuXG4gICAgbGV0IG1ldHJpY3NIYW5kbGVyRmFjdG9yeSA9IE1ldHJpY3NIYW5kbGVyRmFjdG9yeShjb250ZXh0KS5nZXRJbnN0YW5jZSh7XG4gICAgICAgIGRlYnVnOiBjb25maWcuZGVidWcsXG4gICAgICAgIGV2ZW50QnVzOiBjb25maWcuZXZlbnRCdXMsXG4gICAgICAgIG1ldHJpY3NDb25zdGFudHM6IGNvbmZpZy5tZXRyaWNzQ29uc3RhbnRzXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGUoZSkge1xuICAgICAgICBoYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgaGFuZGxlci5oYW5kbGVOZXdNZXRyaWMoZS5tZXRyaWMsIGUudmFsdWUsIGUubWVkaWFUeXBlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZShtZXRyaWNzLCByZXBvcnRpbmdDb250cm9sbGVyKSB7XG4gICAgICAgIG1ldHJpY3Muc3BsaXQoJywnKS5mb3JFYWNoKFxuICAgICAgICAgICAgKG0sIG1pZHgsIG1zKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGhhbmRsZXI7XG5cbiAgICAgICAgICAgICAgICAvLyB0aGVyZSBpcyBhIGJ1ZyBpbiBJU08yMzAwOS0xIHdoZXJlIHRoZSBtZXRyaWNzIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgIC8vIGlzIGEgY29tbWEtc2VwYXJhdGVkIGxpc3QgYnV0IEh0dHBMaXN0IGtleSBjYW4gY29udGFpbiBhXG4gICAgICAgICAgICAgICAgLy8gY29tbWEgZW5jbG9zZWQgYnkgKCkuXG4gICAgICAgICAgICAgICAgaWYgKChtLmluZGV4T2YoJygnKSAhPT0gLTEpICYmIG0uaW5kZXhPZignKScpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dG0gPSBtc1ttaWR4ICsgMV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRtICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5leHRtLmluZGV4T2YoJygnKSA9PT0gLTEpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5leHRtLmluZGV4T2YoJyknKSAhPT0gLTEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtICs9ICcsJyArIG5leHRtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWxldGUgdGhlIG5leHQgbWV0cmljIHNvIGZvckVhY2ggZG9lcyBub3QgdmlzaXQuXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbXNbbWlkeCArIDFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IG1ldHJpY3NIYW5kbGVyRmFjdG9yeS5jcmVhdGUoXG4gICAgICAgICAgICAgICAgICAgIG0sXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydGluZ0NvbnRyb2xsZXJcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgZXZlbnRCdXMub24oXG4gICAgICAgICAgICBFdmVudHMuTUVUUklDX0FEREVELFxuICAgICAgICAgICAgaGFuZGxlLFxuICAgICAgICAgICAgaW5zdGFuY2VcbiAgICAgICAgKTtcblxuICAgICAgICBldmVudEJ1cy5vbihcbiAgICAgICAgICAgIEV2ZW50cy5NRVRSSUNfVVBEQVRFRCxcbiAgICAgICAgICAgIGhhbmRsZSxcbiAgICAgICAgICAgIGluc3RhbmNlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIGV2ZW50QnVzLm9mZihcbiAgICAgICAgICAgIEV2ZW50cy5NRVRSSUNfQURERUQsXG4gICAgICAgICAgICBoYW5kbGUsXG4gICAgICAgICAgICBpbnN0YW5jZVxuICAgICAgICApO1xuXG4gICAgICAgIGV2ZW50QnVzLm9mZihcbiAgICAgICAgICAgIEV2ZW50cy5NRVRSSUNfVVBEQVRFRCxcbiAgICAgICAgICAgIGhhbmRsZSxcbiAgICAgICAgICAgIGluc3RhbmNlXG4gICAgICAgICk7XG5cbiAgICAgICAgaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIucmVzZXQoKSk7XG5cbiAgICAgICAgaGFuZGxlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZSA9IHtcbiAgICAgICAgaW5pdGlhbGl6ZTogaW5pdGlhbGl6ZSxcbiAgICAgICAgcmVzZXQ6ICAgICAgcmVzZXRcbiAgICB9O1xuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG5NZXRyaWNzSGFuZGxlcnNDb250cm9sbGVyLl9fZGFzaGpzX2ZhY3RvcnlfbmFtZSA9ICdNZXRyaWNzSGFuZGxlcnNDb250cm9sbGVyJztcbmV4cG9ydCBkZWZhdWx0IGRhc2hqcy5GYWN0b3J5TWFrZXIuZ2V0Q2xhc3NGYWN0b3J5KE1ldHJpY3NIYW5kbGVyc0NvbnRyb2xsZXIpOyAvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi9cbiIsIi8qKlxuICogVGhlIGNvcHlyaWdodCBpbiB0aGlzIHNvZnR3YXJlIGlzIGJlaW5nIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBCU0QgTGljZW5zZSxcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiAqICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbiAqICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgQVMgSVMgQU5EIEFOWVxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXG4gKiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxuICogIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLFxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuICogIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbmltcG9ydCBDdXN0b21UaW1lUmFuZ2VzIGZyb20gJy4uLy4uL3V0aWxzL0N1c3RvbVRpbWVSYW5nZXMnO1xuXG5mdW5jdGlvbiBSYW5nZUNvbnRyb2xsZXIoY29uZmlnKSB7XG5cbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gICAgbGV0IHVzZVdhbGxDbG9ja1RpbWUgPSBmYWxzZTtcbiAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICBsZXQgaW5zdGFuY2UsXG4gICAgICAgIHJhbmdlcztcblxuICAgIGxldCBtZWRpYUVsZW1lbnQgPSBjb25maWcubWVkaWFFbGVtZW50O1xuXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZShycykge1xuICAgICAgICBpZiAocnMgJiYgcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBycy5mb3JFYWNoKHIgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzdGFydCA9IHIuc3RhcnR0aW1lO1xuICAgICAgICAgICAgICAgIGxldCBlbmQgPSBzdGFydCArIHIuZHVyYXRpb247XG5cbiAgICAgICAgICAgICAgICByYW5nZXMuYWRkKHN0YXJ0LCBlbmQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHVzZVdhbGxDbG9ja1RpbWUgPSAhIXJzWzBdLl91c2VXYWxsQ2xvY2tUaW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIHJhbmdlcy5jbGVhcigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHVwKCkge1xuICAgICAgICByYW5nZXMgPSBDdXN0b21UaW1lUmFuZ2VzKGNvbnRleHQpLmNyZWF0ZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzRW5hYmxlZCgpIHtcbiAgICAgICAgbGV0IG51bVJhbmdlcyA9IHJhbmdlcy5sZW5ndGg7XG4gICAgICAgIGxldCB0aW1lO1xuXG4gICAgICAgIGlmICghbnVtUmFuZ2VzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdoZW4gbm90IHByZXNlbnQsIERBU0ggTWV0cmljcyByZXBvcnRpbmcgaXMgcmVxdWVzdGVkXG4gICAgICAgIC8vIGZvciB0aGUgd2hvbGUgZHVyYXRpb24gb2YgdGhlIGNvbnRlbnQuXG4gICAgICAgIHRpbWUgPSB1c2VXYWxsQ2xvY2tUaW1lID9cbiAgICAgICAgICAgICAgICAobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKSA6XG4gICAgICAgICAgICAgICAgbWVkaWFFbGVtZW50LmN1cnJlbnRUaW1lO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUmFuZ2VzOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGxldCBzdGFydCA9IHJhbmdlcy5zdGFydChpKTtcbiAgICAgICAgICAgIGxldCBlbmQgPSByYW5nZXMuZW5kKGkpO1xuXG4gICAgICAgICAgICBpZiAoKHN0YXJ0IDw9IHRpbWUpICYmICh0aW1lIDwgZW5kKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGluc3RhbmNlID0ge1xuICAgICAgICBpbml0aWFsaXplOiBpbml0aWFsaXplLFxuICAgICAgICByZXNldDogICAgICByZXNldCxcbiAgICAgICAgaXNFbmFibGVkOiAgaXNFbmFibGVkXG4gICAgfTtcblxuICAgIHNldHVwKCk7XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cblJhbmdlQ29udHJvbGxlci5fX2Rhc2hqc19mYWN0b3J5X25hbWUgPSAnUmFuZ2VDb250cm9sbGVyJztcbmV4cG9ydCBkZWZhdWx0IGRhc2hqcy5GYWN0b3J5TWFrZXIuZ2V0Q2xhc3NGYWN0b3J5KFJhbmdlQ29udHJvbGxlcik7IC8qIGpzaGludCBpZ25vcmU6bGluZSAqL1xuIiwiLyoqXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuaW1wb3J0IFJlcG9ydGluZ0ZhY3RvcnkgZnJvbSAnLi4vcmVwb3J0aW5nL1JlcG9ydGluZ0ZhY3RvcnknO1xuXG5mdW5jdGlvbiBSZXBvcnRpbmdDb250cm9sbGVyKGNvbmZpZykge1xuXG4gICAgbGV0IHJlcG9ydGVycyA9IFtdO1xuICAgIGxldCBpbnN0YW5jZTtcblxuICAgIGNvbnN0IHJlcG9ydGluZ0ZhY3RvcnkgPSBSZXBvcnRpbmdGYWN0b3J5KHRoaXMuY29udGV4dCkuZ2V0SW5zdGFuY2UoY29uZmlnKTtcblxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUocmVwb3J0aW5nLCByYW5nZUNvbnRyb2xsZXIpIHtcbiAgICAgICAgLy8gXCJpZiBtdWx0aXBsZSBSZXBvcnRpbmcgZWxlbWVudHMgYXJlIHByZXNlbnQsIGl0IGlzIGV4cGVjdGVkIHRoYXRcbiAgICAgICAgLy8gdGhlIGNsaWVudCBwcm9jZXNzZXMgb25lIG9mIHRoZSByZWNvZ25pemVkIHJlcG9ydGluZyBzY2hlbWVzLlwiXG4gICAgICAgIC8vIHRvIGlnbm9yZSB0aGlzLCBhbmQgc3VwcG9ydCBtdWx0aXBsZSBSZXBvcnRpbmcgcGVyIE1ldHJpYyxcbiAgICAgICAgLy8gc2ltcGx5IGNoYW5nZSB0aGUgJ3NvbWUnIGJlbG93IHRvICdmb3JFYWNoJ1xuICAgICAgICByZXBvcnRpbmcuc29tZShyID0+IHtcbiAgICAgICAgICAgIGxldCByZXBvcnRlciA9IHJlcG9ydGluZ0ZhY3RvcnkuY3JlYXRlKHIsIHJhbmdlQ29udHJvbGxlcik7XG5cbiAgICAgICAgICAgIGlmIChyZXBvcnRlcikge1xuICAgICAgICAgICAgICAgIHJlcG9ydGVycy5wdXNoKHJlcG9ydGVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIHJlcG9ydGVycy5mb3JFYWNoKHIgPT4gci5yZXNldCgpKTtcbiAgICAgICAgcmVwb3J0ZXJzID0gW107XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0KHR5cGUsIHZvcykge1xuICAgICAgICByZXBvcnRlcnMuZm9yRWFjaChyID0+IHIucmVwb3J0KHR5cGUsIHZvcykpO1xuICAgIH1cblxuICAgIGluc3RhbmNlID0ge1xuICAgICAgICBpbml0aWFsaXplOiBpbml0aWFsaXplLFxuICAgICAgICByZXNldDogICAgICByZXNldCxcbiAgICAgICAgcmVwb3J0OiAgICAgcmVwb3J0XG4gICAgfTtcblxuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuUmVwb3J0aW5nQ29udHJvbGxlci5fX2Rhc2hqc19mYWN0b3J5X25hbWUgPSAnUmVwb3J0aW5nQ29udHJvbGxlcic7XG5leHBvcnQgZGVmYXVsdCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldENsYXNzRmFjdG9yeShSZXBvcnRpbmdDb250cm9sbGVyKTsgLyoganNoaW50IGlnbm9yZTpsaW5lICovXG4iLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG5pbXBvcnQgQnVmZmVyTGV2ZWwgZnJvbSAnLi9oYW5kbGVycy9CdWZmZXJMZXZlbEhhbmRsZXInO1xuaW1wb3J0IERWQkVycm9ycyBmcm9tICcuL2hhbmRsZXJzL0RWQkVycm9yc0hhbmRsZXInO1xuaW1wb3J0IEh0dHBMaXN0IGZyb20gJy4vaGFuZGxlcnMvSHR0cExpc3RIYW5kbGVyJztcbmltcG9ydCBHZW5lcmljTWV0cmljSGFuZGxlciBmcm9tICcuL2hhbmRsZXJzL0dlbmVyaWNNZXRyaWNIYW5kbGVyJztcblxuZnVuY3Rpb24gTWV0cmljc0hhbmRsZXJGYWN0b3J5KGNvbmZpZykge1xuXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgIGxldCBpbnN0YW5jZTtcbiAgICBjb25zdCBkZWJ1ZyA9IGNvbmZpZy5kZWJ1ZztcblxuICAgIC8vIGdyb3VwIDE6IGtleSwgW2dyb3VwIDM6IG4gWywgZ3JvdXAgNTogdHlwZV1dXG4gICAgbGV0IGtleVJlZ2V4ID0gLyhbYS16QS1aXSopKFxcKChbMC05XSopKFxcLFxccyooW2EtekEtWl0qKSk/XFwpKT8vO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICBsZXQga25vd25GYWN0b3J5UHJvZHVjdHMgPSB7XG4gICAgICAgIEJ1ZmZlckxldmVsOiAgICBCdWZmZXJMZXZlbCxcbiAgICAgICAgRFZCRXJyb3JzOiAgICAgIERWQkVycm9ycyxcbiAgICAgICAgSHR0cExpc3Q6ICAgICAgIEh0dHBMaXN0LFxuICAgICAgICBQbGF5TGlzdDogICAgICAgR2VuZXJpY01ldHJpY0hhbmRsZXIsXG4gICAgICAgIFJlcFN3aXRjaExpc3Q6ICBHZW5lcmljTWV0cmljSGFuZGxlcixcbiAgICAgICAgVGNwTGlzdDogICAgICAgIEdlbmVyaWNNZXRyaWNIYW5kbGVyXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZShsaXN0VHlwZSwgcmVwb3J0aW5nQ29udHJvbGxlcikge1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IGxpc3RUeXBlLm1hdGNoKGtleVJlZ2V4KTtcbiAgICAgICAgdmFyIGhhbmRsZXI7XG5cbiAgICAgICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaGFuZGxlciA9IGtub3duRmFjdG9yeVByb2R1Y3RzW21hdGNoZXNbMV1dKGNvbnRleHQpLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgZXZlbnRCdXM6IGNvbmZpZy5ldmVudEJ1cyxcbiAgICAgICAgICAgICAgICBtZXRyaWNzQ29uc3RhbnRzOiBjb25maWcubWV0cmljc0NvbnN0YW50c1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGhhbmRsZXIuaW5pdGlhbGl6ZShcbiAgICAgICAgICAgICAgICBtYXRjaGVzWzFdLFxuICAgICAgICAgICAgICAgIHJlcG9ydGluZ0NvbnRyb2xsZXIsXG4gICAgICAgICAgICAgICAgbWF0Y2hlc1szXSxcbiAgICAgICAgICAgICAgICBtYXRjaGVzWzVdXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBoYW5kbGVyID0gbnVsbDtcbiAgICAgICAgICAgIGRlYnVnLmVycm9yKGBNZXRyaWNzSGFuZGxlckZhY3Rvcnk6IENvdWxkIG5vdCBjcmVhdGUgaGFuZGxlciBmb3IgdHlwZSAke21hdGNoZXNbMV19IHdpdGggYXJncyAke21hdGNoZXNbM119LCAke21hdGNoZXNbNV19ICgke2UubWVzc2FnZX0pYCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaGFuZGxlcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWdpc3RlcihrZXksIGhhbmRsZXIpIHtcbiAgICAgICAga25vd25GYWN0b3J5UHJvZHVjdHNba2V5XSA9IGhhbmRsZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5yZWdpc3RlcihrZXkpIHtcbiAgICAgICAgZGVsZXRlIGtub3duRmFjdG9yeVByb2R1Y3RzW2tleV07XG4gICAgfVxuXG4gICAgaW5zdGFuY2UgPSB7XG4gICAgICAgIGNyZWF0ZTogICAgIGNyZWF0ZSxcbiAgICAgICAgcmVnaXN0ZXI6ICAgcmVnaXN0ZXIsXG4gICAgICAgIHVucmVnaXN0ZXI6IHVucmVnaXN0ZXJcbiAgICB9O1xuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG5NZXRyaWNzSGFuZGxlckZhY3RvcnkuX19kYXNoanNfZmFjdG9yeV9uYW1lID0gJ01ldHJpY3NIYW5kbGVyRmFjdG9yeSc7XG5leHBvcnQgZGVmYXVsdCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldFNpbmdsZXRvbkZhY3RvcnkoTWV0cmljc0hhbmRsZXJGYWN0b3J5KTsgLyoganNoaW50IGlnbm9yZTpsaW5lICovXG4iLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG5pbXBvcnQgSGFuZGxlckhlbHBlcnMgZnJvbSAnLi4vLi4vdXRpbHMvSGFuZGxlckhlbHBlcnMnO1xuXG5mdW5jdGlvbiBCdWZmZXJMZXZlbEhhbmRsZXIoY29uZmlnKSB7XG5cbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gICAgbGV0IGluc3RhbmNlLFxuICAgICAgICByZXBvcnRpbmdDb250cm9sbGVyLFxuICAgICAgICBuLFxuICAgICAgICBuYW1lLFxuICAgICAgICBpbnRlcnZhbCxcbiAgICAgICAgbGFzdFJlcG9ydGVkVGltZTtcblxuICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgIGxldCBoYW5kbGVySGVscGVycyA9IEhhbmRsZXJIZWxwZXJzKGNvbnRleHQpLmdldEluc3RhbmNlKCk7XG5cbiAgICBsZXQgc3RvcmVkVk9zID0gW107XG5cbiAgICBjb25zdCBtZXRyaWNzQ29uc3RhbnRzID0gY29uZmlnLm1ldHJpY3NDb25zdGFudHM7XG5cbiAgICBmdW5jdGlvbiBnZXRMb3dlc3RCdWZmZXJMZXZlbFZPKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHN0b3JlZFZPcykubWFwKFxuICAgICAgICAgICAgICAgIGtleSA9PiBzdG9yZWRWT3Nba2V5XVxuICAgICAgICAgICAgKS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChhLmxldmVsIDwgYi5sZXZlbCkgPyBhIDogYjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnRlcnZhbENhbGxiYWNrKCkge1xuICAgICAgICBsZXQgdm8gPSBnZXRMb3dlc3RCdWZmZXJMZXZlbFZPKCk7XG5cbiAgICAgICAgaWYgKHZvKSB7XG4gICAgICAgICAgICBpZiAobGFzdFJlcG9ydGVkVGltZSAhPT0gdm8udCkge1xuICAgICAgICAgICAgICAgIGxhc3RSZXBvcnRlZFRpbWUgPSB2by50O1xuICAgICAgICAgICAgICAgIHJlcG9ydGluZ0NvbnRyb2xsZXIucmVwb3J0KG5hbWUsIHZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUoYmFzZW5hbWUsIHJjLCBuX21zKSB7XG4gICAgICAgIGlmIChyYykge1xuICAgICAgICAgICAgLy8gdGhpcyB3aWxsIHRocm93IGlmIG4gaXMgaW52YWxpZCwgdG8gYmVcbiAgICAgICAgICAgIC8vIGNhdWdodCBieSB0aGUgaW5pdGlhbGl6ZSBjYWxsZXIuXG4gICAgICAgICAgICBuID0gaGFuZGxlckhlbHBlcnMudmFsaWRhdGVOKG5fbXMpO1xuICAgICAgICAgICAgcmVwb3J0aW5nQ29udHJvbGxlciA9IHJjO1xuICAgICAgICAgICAgbmFtZSA9IGhhbmRsZXJIZWxwZXJzLnJlY29uc3RydWN0RnVsbE1ldHJpY05hbWUoYmFzZW5hbWUsIG5fbXMpO1xuICAgICAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChpbnRlcnZhbENhbGxiYWNrLCBuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgaW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICBuID0gMDtcbiAgICAgICAgcmVwb3J0aW5nQ29udHJvbGxlciA9IG51bGw7XG4gICAgICAgIGxhc3RSZXBvcnRlZFRpbWUgPSBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZU5ld01ldHJpYyhtZXRyaWMsIHZvLCB0eXBlKSB7XG4gICAgICAgIGlmIChtZXRyaWMgPT09IG1ldHJpY3NDb25zdGFudHMuQlVGRkVSX0xFVkVMKSB7XG4gICAgICAgICAgICBzdG9yZWRWT3NbdHlwZV0gPSB2bztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluc3RhbmNlID0ge1xuICAgICAgICBpbml0aWFsaXplOiAgICAgICAgIGluaXRpYWxpemUsXG4gICAgICAgIHJlc2V0OiAgICAgICAgICAgICAgcmVzZXQsXG4gICAgICAgIGhhbmRsZU5ld01ldHJpYzogICAgaGFuZGxlTmV3TWV0cmljXG4gICAgfTtcblxuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuQnVmZmVyTGV2ZWxIYW5kbGVyLl9fZGFzaGpzX2ZhY3RvcnlfbmFtZSA9ICdCdWZmZXJMZXZlbEhhbmRsZXInO1xuZXhwb3J0IGRlZmF1bHQgZGFzaGpzLkZhY3RvcnlNYWtlci5nZXRDbGFzc0ZhY3RvcnkoQnVmZmVyTGV2ZWxIYW5kbGVyKTsgLyoganNoaW50IGlnbm9yZTpsaW5lICovXG4iLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG5pbXBvcnQgTWV0cmljc1JlcG9ydGluZ0V2ZW50cyBmcm9tICcuLi8uLi9NZXRyaWNzUmVwb3J0aW5nRXZlbnRzJztcblxuZnVuY3Rpb24gRFZCRXJyb3JzSGFuZGxlcihjb25maWcpIHtcblxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICBsZXQgaW5zdGFuY2UsXG4gICAgICAgIHJlcG9ydGluZ0NvbnRyb2xsZXI7XG5cbiAgICBsZXQgZXZlbnRCdXMgPSBjb25maWcuZXZlbnRCdXM7XG4gICAgY29uc3QgbWV0cmljc0NvbnN0YW50cyA9IGNvbmZpZy5tZXRyaWNzQ29uc3RhbnRzO1xuXG4gICAgZnVuY3Rpb24gb25Jbml0aWFsaXNhdGlvbkNvbXBsZXRlKCkge1xuICAgICAgICAvLyB3ZSBvbmx5IHdhbnQgdG8gcmVwb3J0IHRoaXMgb25jZSBwZXIgY2FsbCB0byBpbml0aWFsaXplXG4gICAgICAgIGV2ZW50QnVzLm9mZihcbiAgICAgICAgICAgIE1ldHJpY3NSZXBvcnRpbmdFdmVudHMuTUVUUklDU19JTklUSUFMSVNBVElPTl9DT01QTEVURSxcbiAgICAgICAgICAgIG9uSW5pdGlhbGlzYXRpb25Db21wbGV0ZSxcbiAgICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBOb3RlOiBBIFBsYXllciBiZWNvbWluZyBhIHJlcG9ydGluZyBQbGF5ZXIgaXMgaXRzZWxmXG4gICAgICAgIC8vIHNvbWV0aGluZyB3aGljaCBpcyByZWNvcmRlZCBieSB0aGUgRFZCRXJyb3JzIG1ldHJpYy5cbiAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihcbiAgICAgICAgICAgIE1ldHJpY3NSZXBvcnRpbmdFdmVudHMuQkVDQU1FX1JFUE9SVElOR19QTEFZRVJcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0aWFsaXplKHVudXNlZCwgcmMpIHtcbiAgICAgICAgaWYgKHJjKSB7XG4gICAgICAgICAgICByZXBvcnRpbmdDb250cm9sbGVyID0gcmM7XG5cbiAgICAgICAgICAgIGV2ZW50QnVzLm9uKFxuICAgICAgICAgICAgICAgIE1ldHJpY3NSZXBvcnRpbmdFdmVudHMuTUVUUklDU19JTklUSUFMSVNBVElPTl9DT01QTEVURSxcbiAgICAgICAgICAgICAgICBvbkluaXRpYWxpc2F0aW9uQ29tcGxldGUsXG4gICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICByZXBvcnRpbmdDb250cm9sbGVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVOZXdNZXRyaWMobWV0cmljLCB2bykge1xuICAgICAgICAvLyBzaW1wbHkgcGFzcyBtZXRyaWMgc3RyYWlnaHQgdGhyb3VnaFxuICAgICAgICBpZiAobWV0cmljID09PSBtZXRyaWNzQ29uc3RhbnRzLkRWQl9FUlJPUlMpIHtcbiAgICAgICAgICAgIGlmIChyZXBvcnRpbmdDb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgcmVwb3J0aW5nQ29udHJvbGxlci5yZXBvcnQobWV0cmljLCB2byk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnN0YW5jZSA9IHtcbiAgICAgICAgaW5pdGlhbGl6ZTogICAgICAgICBpbml0aWFsaXplLFxuICAgICAgICByZXNldDogICAgICAgICAgICAgIHJlc2V0LFxuICAgICAgICBoYW5kbGVOZXdNZXRyaWM6ICAgIGhhbmRsZU5ld01ldHJpY1xuICAgIH07XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRhc2hqcy5GYWN0b3J5TWFrZXIuZ2V0Q2xhc3NGYWN0b3J5KERWQkVycm9yc0hhbmRsZXIpOyAvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi9cbiIsIi8qKlxuICogVGhlIGNvcHlyaWdodCBpbiB0aGlzIHNvZnR3YXJlIGlzIGJlaW5nIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBCU0QgTGljZW5zZSxcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiAqICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbiAqICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgQVMgSVMgQU5EIEFOWVxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXG4gKiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxuICogIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLFxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuICogIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbmZ1bmN0aW9uIEdlbmVyaWNNZXRyaWNIYW5kbGVyKCkge1xuXG4gICAgbGV0IGluc3RhbmNlLFxuICAgICAgICBtZXRyaWNOYW1lLFxuICAgICAgICByZXBvcnRpbmdDb250cm9sbGVyO1xuXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZShuYW1lLCByYykge1xuICAgICAgICBtZXRyaWNOYW1lID0gbmFtZTtcbiAgICAgICAgcmVwb3J0aW5nQ29udHJvbGxlciA9IHJjO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICByZXBvcnRpbmdDb250cm9sbGVyID0gbnVsbDtcbiAgICAgICAgbWV0cmljTmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVOZXdNZXRyaWMobWV0cmljLCB2bykge1xuICAgICAgICAvLyBzaW1wbHkgcGFzcyBtZXRyaWMgc3RyYWlnaHQgdGhyb3VnaFxuICAgICAgICBpZiAobWV0cmljID09PSBtZXRyaWNOYW1lKSB7XG4gICAgICAgICAgICBpZiAocmVwb3J0aW5nQ29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgIHJlcG9ydGluZ0NvbnRyb2xsZXIucmVwb3J0KG1ldHJpY05hbWUsIHZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluc3RhbmNlID0ge1xuICAgICAgICBpbml0aWFsaXplOiAgICAgICAgIGluaXRpYWxpemUsXG4gICAgICAgIHJlc2V0OiAgICAgICAgICAgICAgcmVzZXQsXG4gICAgICAgIGhhbmRsZU5ld01ldHJpYzogICAgaGFuZGxlTmV3TWV0cmljXG4gICAgfTtcblxuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuR2VuZXJpY01ldHJpY0hhbmRsZXIuX19kYXNoanNfZmFjdG9yeV9uYW1lID0gJ0dlbmVyaWNNZXRyaWNIYW5kbGVyJztcbmV4cG9ydCBkZWZhdWx0IGRhc2hqcy5GYWN0b3J5TWFrZXIuZ2V0Q2xhc3NGYWN0b3J5KEdlbmVyaWNNZXRyaWNIYW5kbGVyKTsgLyoganNoaW50IGlnbm9yZTpsaW5lICovXG4iLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG5pbXBvcnQgSGFuZGxlckhlbHBlcnMgZnJvbSAnLi4vLi4vdXRpbHMvSGFuZGxlckhlbHBlcnMnO1xuXG5mdW5jdGlvbiBIdHRwTGlzdEhhbmRsZXIoY29uZmlnKSB7XG5cbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gICAgbGV0IGluc3RhbmNlLFxuICAgICAgICByZXBvcnRpbmdDb250cm9sbGVyLFxuICAgICAgICBuLFxuICAgICAgICB0eXBlLFxuICAgICAgICBuYW1lLFxuICAgICAgICBpbnRlcnZhbDtcblxuICAgIGxldCBzdG9yZWRWb3MgPSBbXTtcblxuICAgIGxldCBoYW5kbGVySGVscGVycyA9IEhhbmRsZXJIZWxwZXJzKHRoaXMuY29udGV4dCkuZ2V0SW5zdGFuY2UoKTtcblxuICAgIGNvbnN0IG1ldHJpY3NDb25zdGFudHMgPSBjb25maWcubWV0cmljc0NvbnN0YW50cztcblxuICAgIGZ1bmN0aW9uIGludGVydmFsQ2FsbGJhY2soKSB7XG4gICAgICAgIHZhciB2b3MgPSBzdG9yZWRWb3M7XG5cbiAgICAgICAgaWYgKHZvcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChyZXBvcnRpbmdDb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgcmVwb3J0aW5nQ29udHJvbGxlci5yZXBvcnQobmFtZSwgdm9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN0b3JlZFZvcyA9IFtdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUoYmFzZW5hbWUsIHJjLCBuX21zLCByZXF1ZXN0VHlwZSkge1xuICAgICAgICBpZiAocmMpIHtcblxuICAgICAgICAgICAgLy8gdGhpcyB3aWxsIHRocm93IGlmIG4gaXMgaW52YWxpZCwgdG8gYmVcbiAgICAgICAgICAgIC8vIGNhdWdodCBieSB0aGUgaW5pdGlhbGl6ZSBjYWxsZXIuXG4gICAgICAgICAgICBuID0gaGFuZGxlckhlbHBlcnMudmFsaWRhdGVOKG5fbXMpO1xuXG4gICAgICAgICAgICByZXBvcnRpbmdDb250cm9sbGVyID0gcmM7XG5cbiAgICAgICAgICAgIGlmIChyZXF1ZXN0VHlwZSAmJiByZXF1ZXN0VHlwZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gcmVxdWVzdFR5cGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hbWUgPSBoYW5kbGVySGVscGVycy5yZWNvbnN0cnVjdEZ1bGxNZXRyaWNOYW1lKFxuICAgICAgICAgICAgICAgIGJhc2VuYW1lLFxuICAgICAgICAgICAgICAgIG5fbXMsXG4gICAgICAgICAgICAgICAgcmVxdWVzdFR5cGVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoaW50ZXJ2YWxDYWxsYmFjaywgbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIGludGVydmFsID0gbnVsbDtcbiAgICAgICAgbiA9IG51bGw7XG4gICAgICAgIHR5cGUgPSBudWxsO1xuICAgICAgICBzdG9yZWRWb3MgPSBbXTtcbiAgICAgICAgcmVwb3J0aW5nQ29udHJvbGxlciA9IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTmV3TWV0cmljKG1ldHJpYywgdm8pIHtcbiAgICAgICAgaWYgKG1ldHJpYyA9PT0gbWV0cmljc0NvbnN0YW50cy5IVFRQX1JFUVVFU1QpIHtcbiAgICAgICAgICAgIGlmICghdHlwZSB8fCAodHlwZSA9PT0gdm8udHlwZSkpIHtcbiAgICAgICAgICAgICAgICBzdG9yZWRWb3MucHVzaCh2byk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnN0YW5jZSA9IHtcbiAgICAgICAgaW5pdGlhbGl6ZTogICAgICAgICBpbml0aWFsaXplLFxuICAgICAgICByZXNldDogICAgICAgICAgICAgIHJlc2V0LFxuICAgICAgICBoYW5kbGVOZXdNZXRyaWM6ICAgIGhhbmRsZU5ld01ldHJpY1xuICAgIH07XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbkh0dHBMaXN0SGFuZGxlci5fX2Rhc2hqc19mYWN0b3J5X25hbWUgPSAnSHR0cExpc3RIYW5kbGVyJztcbmV4cG9ydCBkZWZhdWx0IGRhc2hqcy5GYWN0b3J5TWFrZXIuZ2V0Q2xhc3NGYWN0b3J5KEh0dHBMaXN0SGFuZGxlcik7IC8qIGpzaGludCBpZ25vcmU6bGluZSAqL1xuIiwiLyoqXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuaW1wb3J0IERWQlJlcG9ydGluZyBmcm9tICcuL3JlcG9ydGVycy9EVkJSZXBvcnRpbmcnO1xuXG5mdW5jdGlvbiBSZXBvcnRpbmdGYWN0b3J5KGNvbmZpZykge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblxuICAgIGNvbnN0IGtub3duUmVwb3J0aW5nU2NoZW1lSWRVcmlzID0ge1xuICAgICAgICAndXJuOmR2YjpkYXNoOnJlcG9ydGluZzoyMDE0JzogRFZCUmVwb3J0aW5nXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3QgZGVidWcgPSBjb25maWcuZGVidWc7XG4gICAgY29uc3QgbWV0cmljc0NvbnN0YW50cyA9IGNvbmZpZy5tZXRyaWNzQ29uc3RhbnRzO1xuXG4gICAgbGV0IGluc3RhbmNlO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlKGVudHJ5LCByYW5nZUNvbnRyb2xsZXIpIHtcbiAgICAgICAgbGV0IHJlcG9ydGluZztcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVwb3J0aW5nID0ga25vd25SZXBvcnRpbmdTY2hlbWVJZFVyaXNbZW50cnkuc2NoZW1lSWRVcmldKGNvbnRleHQpLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgbWV0cmljc0NvbnN0YW50czogbWV0cmljc0NvbnN0YW50c1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlcG9ydGluZy5pbml0aWFsaXplKGVudHJ5LCByYW5nZUNvbnRyb2xsZXIpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXBvcnRpbmcgPSBudWxsO1xuICAgICAgICAgICAgZGVidWcuZXJyb3IoYFJlcG9ydGluZ0ZhY3Rvcnk6IGNvdWxkIG5vdCBjcmVhdGUgUmVwb3J0aW5nIHdpdGggc2NoZW1lSWRVcmkgJHtlbnRyeS5zY2hlbWVJZFVyaX0gKCR7ZS5tZXNzYWdlfSlgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXBvcnRpbmc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXIoc2NoZW1lSWRVcmksIG1vZHVsZU5hbWUpIHtcbiAgICAgICAga25vd25SZXBvcnRpbmdTY2hlbWVJZFVyaXNbc2NoZW1lSWRVcmldID0gbW9kdWxlTmFtZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bnJlZ2lzdGVyKHNjaGVtZUlkVXJpKSB7XG4gICAgICAgIGRlbGV0ZSBrbm93blJlcG9ydGluZ1NjaGVtZUlkVXJpc1tzY2hlbWVJZFVyaV07XG4gICAgfVxuXG4gICAgaW5zdGFuY2UgPSB7XG4gICAgICAgIGNyZWF0ZTogICAgIGNyZWF0ZSxcbiAgICAgICAgcmVnaXN0ZXI6ICAgcmVnaXN0ZXIsXG4gICAgICAgIHVucmVnaXN0ZXI6IHVucmVnaXN0ZXJcbiAgICB9O1xuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG5SZXBvcnRpbmdGYWN0b3J5Ll9fZGFzaGpzX2ZhY3RvcnlfbmFtZSA9ICdSZXBvcnRpbmdGYWN0b3J5JztcbmV4cG9ydCBkZWZhdWx0IGRhc2hqcy5GYWN0b3J5TWFrZXIuZ2V0U2luZ2xldG9uRmFjdG9yeShSZXBvcnRpbmdGYWN0b3J5KTsgLyoganNoaW50IGlnbm9yZTpsaW5lICovXG4iLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG5pbXBvcnQgTWV0cmljU2VyaWFsaXNlciBmcm9tICcuLi8uLi91dGlscy9NZXRyaWNTZXJpYWxpc2VyJztcbmltcG9ydCBSTkcgZnJvbSAnLi4vLi4vdXRpbHMvUk5HJztcblxuZnVuY3Rpb24gRFZCUmVwb3J0aW5nKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICBsZXQgaW5zdGFuY2U7XG5cbiAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICBsZXQgbWV0cmljU2VyaWFsaXNlcixcbiAgICAgICAgcmFuZG9tTnVtYmVyR2VuZXJhdG9yLFxuICAgICAgICByZXBvcnRpbmdQbGF5ZXJTdGF0dXNEZWNpZGVkLFxuICAgICAgICBpc1JlcG9ydGluZ1BsYXllcixcbiAgICAgICAgcmVwb3J0aW5nVXJsLFxuICAgICAgICByYW5nZUNvbnRyb2xsZXI7XG5cbiAgICBsZXQgVVNFX0RSQUZUX0RWQl9TUEVDID0gdHJ1ZTtcbiAgICBsZXQgYWxsb3dQZW5kaW5nUmVxdWVzdHNUb0NvbXBsZXRlT25SZXNldCA9IHRydWU7XG4gICAgbGV0IHBlbmRpbmdSZXF1ZXN0cyA9IFtdO1xuXG4gICAgY29uc3QgbWV0cmljc0NvbnN0YW50cyA9IGNvbmZpZy5tZXRyaWNzQ29uc3RhbnRzO1xuXG4gICAgZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgICAgIG1ldHJpY1NlcmlhbGlzZXIgPSBNZXRyaWNTZXJpYWxpc2VyKGNvbnRleHQpLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHJhbmRvbU51bWJlckdlbmVyYXRvciA9IFJORyhjb250ZXh0KS5nZXRJbnN0YW5jZSgpO1xuXG4gICAgICAgIHJlc2V0SW5pdGlhbFNldHRpbmdzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZG9HZXRSZXF1ZXN0KHVybCwgc3VjY2Vzc0NCLCBmYWlsdXJlQ0IpIHtcbiAgICAgICAgbGV0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICBjb25zdCBvbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IHJlcUluZGV4ID0gcGVuZGluZ1JlcXVlc3RzLmluZGV4T2YocmVxKTtcblxuICAgICAgICAgICAgaWYgKHJlcUluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGVuZGluZ1JlcXVlc3RzLnNwbGljZShyZXFJbmRleCwgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgocmVxLnN0YXR1cyA+PSAyMDApICYmIChyZXEuc3RhdHVzIDwgMzAwKSkge1xuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzQ0IpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0NCKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZmFpbHVyZUNCKSB7XG4gICAgICAgICAgICAgICAgICAgIGZhaWx1cmVDQigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBwZW5kaW5nUmVxdWVzdHMucHVzaChyZXEpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXEub3BlbignR0VUJywgdXJsKTtcbiAgICAgICAgICAgIHJlcS5vbmxvYWRlbmQgPSBvbmNvbXBsZXRlO1xuICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBvbmNvbXBsZXRlO1xuICAgICAgICAgICAgcmVxLnNlbmQoKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmVxLm9uZXJyb3IoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydCh0eXBlLCB2b3MpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZvcykpIHtcbiAgICAgICAgICAgIHZvcyA9IFt2b3NdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIFBsYXllciBpcyBub3QgYSByZXBvcnRpbmcgUGxheWVyLCB0aGVuIHRoZSBQbGF5ZXIgc2hhbGxcbiAgICAgICAgLy8gbm90IHJlcG9ydCBhbnkgZXJyb3JzLlxuICAgICAgICAvLyAuLi4gSW4gYWRkaXRpb24gdG8gYW55IHRpbWUgcmVzdHJpY3Rpb25zIHNwZWNpZmllZCBieSBhIFJhbmdlXG4gICAgICAgIC8vIGVsZW1lbnQgd2l0aGluIHRoZSBNZXRyaWNzIGVsZW1lbnQuXG4gICAgICAgIGlmIChpc1JlcG9ydGluZ1BsYXllciAmJiByYW5nZUNvbnRyb2xsZXIuaXNFbmFibGVkKCkpIHtcblxuICAgICAgICAgICAgLy8gVGhpcyByZXBvcnRpbmcgbWVjaGFuaXNtIG9wZXJhdGVzIGJ5IGNyZWF0aW5nIG9uZSBIVFRQIEdFVFxuICAgICAgICAgICAgLy8gcmVxdWVzdCBmb3IgZXZlcnkgZW50cnkgaW4gdGhlIHRvcCBsZXZlbCBsaXN0IG9mIHRoZSBtZXRyaWMuXG4gICAgICAgICAgICB2b3MuZm9yRWFjaChmdW5jdGlvbiAodm8pIHtcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gbWV0cmljU2VyaWFsaXNlci5zZXJpYWxpc2Uodm8pO1xuXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBoYXMgYmVlbiBwcm9wb3NlZCBmb3IgZXJyYXRhXG4gICAgICAgICAgICAgICAgaWYgKFVTRV9EUkFGVF9EVkJfU1BFQyAmJiAodHlwZSAhPT0gbWV0cmljc0NvbnN0YW50cy5EVkJfRVJST1JTKSkge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSBgbWV0cmljbmFtZT0ke3R5cGV9JiR7dXJsfWA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVGFrZSB0aGUgdmFsdWUgb2YgdGhlIEByZXBvcnRpbmdVcmwgYXR0cmlidXRlLCBhcHBlbmQgYVxuICAgICAgICAgICAgICAgIC8vIHF1ZXN0aW9uIG1hcmsgKCc/JykgY2hhcmFjdGVyIGFuZCB0aGVuIGFwcGVuZCB0aGUgc3RyaW5nXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlZCBpbiB0aGUgcHJldmlvdXMgc3RlcC5cbiAgICAgICAgICAgICAgICB1cmwgPSBgJHtyZXBvcnRpbmdVcmx9PyR7dXJsfWA7XG5cbiAgICAgICAgICAgICAgICAvLyBNYWtlIGFuIEhUVFAgR0VUIHJlcXVlc3QgdG8gdGhlIFVSTCBjb250YWluZWQgd2l0aGluIHRoZVxuICAgICAgICAgICAgICAgIC8vIHN0cmluZyBjcmVhdGVkIGluIHRoZSBwcmV2aW91cyBzdGVwLlxuICAgICAgICAgICAgICAgIGRvR2V0UmVxdWVzdCh1cmwsIG51bGwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIFBsYXllciBpcyB1bmFibGUgdG8gbWFrZSB0aGUgcmVwb3J0LCBmb3JcbiAgICAgICAgICAgICAgICAgICAgLy8gZXhhbXBsZSBiZWNhdXNlIHRoZSBAcmVwb3J0aW5nVXJsIGlzIGludmFsaWQsIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyBob3N0IGNhbm5vdCBiZSByZWFjaGVkLCBvciBhbiBIVFRQIHN0YXR1cyBjb2RlIG90aGVyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoYW4gb25lIGluIHRoZSAyMDAgc2VyaWVzIGlzIHJlY2VpdmVkLCB0aGUgUGxheWVyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNoYWxsIGNlYXNlIGJlaW5nIGEgcmVwb3J0aW5nIFBsYXllciBmb3IgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIGR1cmF0aW9uIG9mIHRoZSBNUEQuXG4gICAgICAgICAgICAgICAgICAgIGlzUmVwb3J0aW5nUGxheWVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUoZW50cnksIHJjKSB7XG4gICAgICAgIGxldCBwcm9iYWJpbGl0eTtcblxuICAgICAgICByYW5nZUNvbnRyb2xsZXIgPSByYztcblxuICAgICAgICByZXBvcnRpbmdVcmwgPSBlbnRyeVsnZHZiOnJlcG9ydGluZ1VybCddO1xuXG4gICAgICAgIC8vIElmIGEgcmVxdWlyZWQgYXR0cmlidXRlIGlzIG1pc3NpbmcsIHRoZSBSZXBvcnRpbmcgZGVzY3JpcHRvciBtYXlcbiAgICAgICAgLy8gYmUgaWdub3JlZCBieSB0aGUgUGxheWVyXG4gICAgICAgIGlmICghcmVwb3J0aW5nVXJsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ3JlcXVpcmVkIHBhcmFtZXRlciBtaXNzaW5nIChkdmI6cmVwb3J0aW5nVXJsKSdcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBIFBsYXllcidzIHN0YXR1cywgYXMgYSByZXBvcnRpbmcgUGxheWVyIG9yIG5vdCwgc2hhbGwgcmVtYWluXG4gICAgICAgIC8vIHN0YXRpYyBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBNUEQsIHJlZ2FyZGxlc3Mgb2YgTVBEIHVwZGF0ZXMuXG4gICAgICAgIC8vIChpLmUuIG9ubHkgY2FsbGluZyByZXNldCAob3IgZmFpbHVyZSkgY2hhbmdlcyB0aGlzIHN0YXRlKVxuICAgICAgICBpZiAoIXJlcG9ydGluZ1BsYXllclN0YXR1c0RlY2lkZWQpIHtcbiAgICAgICAgICAgIC8vIE5PVEU6IERWQiBzcGVjIGhhcyBhIHR5cG8gd2hlcmUgaXQgaW5jb3JyZWN0bHkgcmVmZXJlbmNlcyB0aGVcbiAgICAgICAgICAgIC8vIHByaW9yaXR5IGF0dHJpYnV0ZSwgd2hpY2ggc2hvdWxkIGJlIHByb2JhYmlsaXR5XG4gICAgICAgICAgICBwcm9iYWJpbGl0eSA9IGVudHJ5WydkdmI6cHJvYmFiaWxpdHknXSB8fCBlbnRyeVsnZHZiOnByaW9yaXR5J10gfHwgMDtcbiAgICAgICAgICAgIC8vIElmIHRoZSBAcHJpb3JpdHkgYXR0cmlidXRlIGlzIHNldCB0byAxMDAwLCBpdCBzaGFsbCBiZSBhIHJlcG9ydGluZyBQbGF5ZXIuXG4gICAgICAgICAgICAvLyBJZiB0aGUgQHByaW9yaXR5IGF0dHJpYnV0ZSBpcyBtaXNzaW5nLCB0aGUgUGxheWVyIHNoYWxsIG5vdCBiZSBhIHJlcG9ydGluZyBQbGF5ZXIuXG4gICAgICAgICAgICAvLyBGb3IgYW55IG90aGVyIHZhbHVlIG9mIHRoZSBAcHJvYmFiaWxpdHkgYXR0cmlidXRlLCBpdCBzaGFsbCBkZWNpZGUgYXQgcmFuZG9tIHdoZXRoZXIgdG8gYmUgYVxuICAgICAgICAgICAgLy8gcmVwb3J0aW5nIFBsYXllciwgc3VjaCB0aGF0IHRoZSBwcm9iYWJpbGl0eSBvZiBiZWluZyBvbmUgaXMgQHByb2JhYmlsaXR5LzEwMDAuXG4gICAgICAgICAgICBpZiAocHJvYmFiaWxpdHkgJiYgKHByb2JhYmlsaXR5ID09PSAxMDAwIHx8ICgocHJvYmFiaWxpdHkgLyAxMDAwKSA+PSByYW5kb21OdW1iZXJHZW5lcmF0b3IucmFuZG9tKCkpKSkge1xuICAgICAgICAgICAgICAgIGlzUmVwb3J0aW5nUGxheWVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVwb3J0aW5nUGxheWVyU3RhdHVzRGVjaWRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldEluaXRpYWxTZXR0aW5ncygpIHtcbiAgICAgICAgcmVwb3J0aW5nUGxheWVyU3RhdHVzRGVjaWRlZCA9IGZhbHNlO1xuICAgICAgICBpc1JlcG9ydGluZ1BsYXllciA9IGZhbHNlO1xuICAgICAgICByZXBvcnRpbmdVcmwgPSBudWxsO1xuICAgICAgICByYW5nZUNvbnRyb2xsZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICBpZiAoIWFsbG93UGVuZGluZ1JlcXVlc3RzVG9Db21wbGV0ZU9uUmVzZXQpIHtcbiAgICAgICAgICAgIHBlbmRpbmdSZXF1ZXN0cy5mb3JFYWNoKHJlcSA9PiByZXEuYWJvcnQoKSk7XG4gICAgICAgICAgICBwZW5kaW5nUmVxdWVzdHMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc2V0SW5pdGlhbFNldHRpbmdzKCk7XG4gICAgfVxuXG4gICAgaW5zdGFuY2UgPSB7XG4gICAgICAgIHJlcG9ydDogICAgIHJlcG9ydCxcbiAgICAgICAgaW5pdGlhbGl6ZTogaW5pdGlhbGl6ZSxcbiAgICAgICAgcmVzZXQ6ICAgICAgcmVzZXRcbiAgICB9O1xuXG4gICAgc2V0dXAoKTtcblxuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuRFZCUmVwb3J0aW5nLl9fZGFzaGpzX2ZhY3RvcnlfbmFtZSA9ICdEVkJSZXBvcnRpbmcnO1xuZXhwb3J0IGRlZmF1bHQgZGFzaGpzLkZhY3RvcnlNYWtlci5nZXRDbGFzc0ZhY3RvcnkoRFZCUmVwb3J0aW5nKTsgLyoganNoaW50IGlnbm9yZTpsaW5lICovXG4iLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG5pbXBvcnQgRFZCRXJyb3JzIGZyb20gJy4uL3ZvL0RWQkVycm9ycyc7XG5pbXBvcnQgTWV0cmljc1JlcG9ydGluZ0V2ZW50cyBmcm9tICcuLi9NZXRyaWNzUmVwb3J0aW5nRXZlbnRzJztcblxuZnVuY3Rpb24gRFZCRXJyb3JzVHJhbnNsYXRvcihjb25maWcpIHtcblxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICBsZXQgaW5zdGFuY2UsXG4gICAgICAgIG1wZDtcbiAgICBjb25zdCBldmVudEJ1cyA9IGNvbmZpZy5ldmVudEJ1cztcbiAgICBjb25zdCBtZXRyaWNNb2RlbCA9IGNvbmZpZy5tZXRyaWNzTW9kZWw7XG4gICAgY29uc3QgbWV0cmljc0NvbnN0YW50cyA9IGNvbmZpZy5tZXRyaWNzQ29uc3RhbnRzO1xuICAgIC8vTWVkaWFQbGF5ZXJFdmVudHMgaGF2ZSBiZWVuIGFkZGVkIHRvIEV2ZW50cyBpbiBNZWRpYVBsYXllciBjbGFzc1xuICAgIGNvbnN0IEV2ZW50cyA9IGNvbmZpZy5ldmVudHM7XG5cbiAgICBmdW5jdGlvbiByZXBvcnQodm8pIHtcbiAgICAgICAgbGV0IG8gPSBuZXcgRFZCRXJyb3JzKCk7XG5cbiAgICAgICAgaWYgKCFtcGQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZvKSB7XG4gICAgICAgICAgICBpZiAodm8uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG9ba2V5XSA9IHZvW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW8ubXBkdXJsKSB7XG4gICAgICAgICAgICBvLm1wZHVybCA9IG1wZC5vcmlnaW5hbFVybCB8fCBtcGQudXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvLnRlcnJvcikge1xuICAgICAgICAgICAgby50ZXJyb3IgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWV0cmljTW9kZWwuYWRkRFZCRXJyb3JzKG8pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTWFuaWZlc3RVcGRhdGUoZSkge1xuICAgICAgICBpZiAoZS5lcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbXBkID0gZS5tYW5pZmVzdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblNlcnZpY2VMb2NhdGlvbkNoYW5nZWQoZSkge1xuICAgICAgICByZXBvcnQoe1xuICAgICAgICAgICAgZXJyb3Jjb2RlOiAgICAgICAgICBEVkJFcnJvcnMuQkFTRV9VUkxfQ0hBTkdFRCxcbiAgICAgICAgICAgIHNlcnZpY2Vsb2NhdGlvbjogICAgZS5lbnRyeVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkJlY2FtZVJlcG9ydGVyKCkge1xuICAgICAgICByZXBvcnQoe1xuICAgICAgICAgICAgZXJyb3Jjb2RlOiBEVkJFcnJvcnMuQkVDQU1FX1JFUE9SVEVSXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUh0dHBNZXRyaWModm8pIHtcbiAgICAgICAgaWYgKCh2by5yZXNwb25zZWNvZGUgPT09IDApIHx8ICAgICAgLy8gY29ubmVjdGlvbiBmYWlsdXJlIC0gdW5rbm93blxuICAgICAgICAgICAgICAgICh2by5yZXNwb25zZWNvZGUgPj0gNDAwKSB8fCAvLyBIVFRQIGVycm9yIHN0YXR1cyBjb2RlXG4gICAgICAgICAgICAgICAgKHZvLnJlc3BvbnNlY29kZSA8IDEwMCkgfHwgIC8vIHVua25vd24gc3RhdHVzIGNvZGVzXG4gICAgICAgICAgICAgICAgKHZvLnJlc3BvbnNlY29kZSA+PSA2MDApKSB7IC8vIHVua25vd24gc3RhdHVzIGNvZGVzXG4gICAgICAgICAgICByZXBvcnQoe1xuICAgICAgICAgICAgICAgIGVycm9yY29kZTogICAgICAgICAgdm8ucmVzcG9uc2Vjb2RlIHx8IERWQkVycm9ycy5DT05ORUNUSU9OX0VSUk9SLFxuICAgICAgICAgICAgICAgIHVybDogICAgICAgICAgICAgICAgdm8udXJsLFxuICAgICAgICAgICAgICAgIHRlcnJvcjogICAgICAgICAgICAgdm8udHJlc3BvbnNlLFxuICAgICAgICAgICAgICAgIHNlcnZpY2Vsb2NhdGlvbjogICAgdm8uX3NlcnZpY2VMb2NhdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1ldHJpY0V2ZW50KGUpIHtcbiAgICAgICAgc3dpdGNoIChlLm1ldHJpYykge1xuICAgICAgICBjYXNlIG1ldHJpY3NDb25zdGFudHMuSFRUUF9SRVFVRVNUOlxuICAgICAgICAgICAgaGFuZGxlSHR0cE1ldHJpYyhlLnZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBsYXliYWNrRXJyb3IoZSkge1xuICAgICAgICBsZXQgcmVhc29uID0gZS5lcnJvciA/IGUuZXJyb3IuY29kZSA6IDA7XG4gICAgICAgIGxldCBlcnJvcmNvZGU7XG5cbiAgICAgICAgc3dpdGNoIChyZWFzb24pIHtcbiAgICAgICAgICAgIGNhc2UgTWVkaWFFcnJvci5NRURJQV9FUlJfTkVUV09SSzpcbiAgICAgICAgICAgICAgICBlcnJvcmNvZGUgPSBEVkJFcnJvcnMuQ09OTkVDVElPTl9FUlJPUjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTWVkaWFFcnJvci5NRURJQV9FUlJfREVDT0RFOlxuICAgICAgICAgICAgICAgIGVycm9yY29kZSA9IERWQkVycm9ycy5DT1JSVVBUX01FRElBX09USEVSO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXBvcnQoe1xuICAgICAgICAgICAgZXJyb3Jjb2RlOiBlcnJvcmNvZGVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdGlhbGlzZSgpIHtcbiAgICAgICAgZXZlbnRCdXMub24oRXZlbnRzLk1BTklGRVNUX1VQREFURUQsIG9uTWFuaWZlc3RVcGRhdGUsIGluc3RhbmNlKTtcbiAgICAgICAgZXZlbnRCdXMub24oXG4gICAgICAgICAgICBFdmVudHMuU0VSVklDRV9MT0NBVElPTl9CTEFDS0xJU1RfQ0hBTkdFRCxcbiAgICAgICAgICAgIG9uU2VydmljZUxvY2F0aW9uQ2hhbmdlZCxcbiAgICAgICAgICAgIGluc3RhbmNlXG4gICAgICAgICk7XG4gICAgICAgIGV2ZW50QnVzLm9uKEV2ZW50cy5NRVRSSUNfQURERUQsIG9uTWV0cmljRXZlbnQsIGluc3RhbmNlKTtcbiAgICAgICAgZXZlbnRCdXMub24oRXZlbnRzLk1FVFJJQ19VUERBVEVELCBvbk1ldHJpY0V2ZW50LCBpbnN0YW5jZSk7XG4gICAgICAgIGV2ZW50QnVzLm9uKEV2ZW50cy5QTEFZQkFDS19FUlJPUiwgb25QbGF5YmFja0Vycm9yLCBpbnN0YW5jZSk7XG4gICAgICAgIGV2ZW50QnVzLm9uKFxuICAgICAgICAgICAgTWV0cmljc1JlcG9ydGluZ0V2ZW50cy5CRUNBTUVfUkVQT1JUSU5HX1BMQVlFUixcbiAgICAgICAgICAgIG9uQmVjYW1lUmVwb3J0ZXIsXG4gICAgICAgICAgICBpbnN0YW5jZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICBldmVudEJ1cy5vZmYoRXZlbnRzLk1BTklGRVNUX1VQREFURUQsIG9uTWFuaWZlc3RVcGRhdGUsIGluc3RhbmNlKTtcbiAgICAgICAgZXZlbnRCdXMub2ZmKFxuICAgICAgICAgICAgRXZlbnRzLlNFUlZJQ0VfTE9DQVRJT05fQkxBQ0tMSVNUX0NIQU5HRUQsXG4gICAgICAgICAgICBvblNlcnZpY2VMb2NhdGlvbkNoYW5nZWQsXG4gICAgICAgICAgICBpbnN0YW5jZVxuICAgICAgICApO1xuICAgICAgICBldmVudEJ1cy5vZmYoRXZlbnRzLk1FVFJJQ19BRERFRCwgb25NZXRyaWNFdmVudCwgaW5zdGFuY2UpO1xuICAgICAgICBldmVudEJ1cy5vZmYoRXZlbnRzLk1FVFJJQ19VUERBVEVELCBvbk1ldHJpY0V2ZW50LCBpbnN0YW5jZSk7XG4gICAgICAgIGV2ZW50QnVzLm9mZihFdmVudHMuUExBWUJBQ0tfRVJST1IsIG9uUGxheWJhY2tFcnJvciwgaW5zdGFuY2UpO1xuICAgICAgICBldmVudEJ1cy5vZmYoXG4gICAgICAgICAgICBNZXRyaWNzUmVwb3J0aW5nRXZlbnRzLkJFQ0FNRV9SRVBPUlRJTkdfUExBWUVSLFxuICAgICAgICAgICAgb25CZWNhbWVSZXBvcnRlcixcbiAgICAgICAgICAgIGluc3RhbmNlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaW5zdGFuY2UgPSB7XG4gICAgICAgIGluaXRpYWxpc2U6IGluaXRpYWxpc2UsXG4gICAgICAgIHJlc2V0OiAgICAgIHJlc2V0XG4gICAgfTtcblxuICAgIGluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuRFZCRXJyb3JzVHJhbnNsYXRvci5fX2Rhc2hqc19mYWN0b3J5X25hbWUgPSAnRFZCRXJyb3JzVHJhbnNsYXRvcic7XG5leHBvcnQgZGVmYXVsdCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldFNpbmdsZXRvbkZhY3RvcnkoRFZCRXJyb3JzVHJhbnNsYXRvcik7IC8qIGpzaGludCBpZ25vcmU6bGluZSAqL1xuIiwiLyoqXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuZnVuY3Rpb24gSGFuZGxlckhlbHBlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVjb25zdHJ1Y3RGdWxsTWV0cmljTmFtZTogZnVuY3Rpb24gKGtleSwgbiwgdHlwZSkge1xuICAgICAgICAgICAgbGV0IG1uID0ga2V5O1xuXG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgIG1uICs9ICcoJyArIG47XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSAmJiB0eXBlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBtbiArPSAnLCcgKyB0eXBlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1uICs9ICcpJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1uO1xuICAgICAgICB9LFxuXG4gICAgICAgIHZhbGlkYXRlTjogZnVuY3Rpb24gKG5fbXMpIHtcbiAgICAgICAgICAgIGlmICghbl9tcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc05hTihuX21zKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbiBpcyBOYU4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbiBpcyBhIHBvc2l0aXZlIGludGVnZXIgaXMgZGVmaW5lZCB0byByZWZlciB0byB0aGUgbWV0cmljXG4gICAgICAgICAgICAvLyBpbiB3aGljaCB0aGUgYnVmZmVyIGxldmVsIGlzIHJlY29yZGVkIGV2ZXJ5IG4gbXMuXG4gICAgICAgICAgICBpZiAobl9tcyA8IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ24gbXVzdCBiZSBwb3NpdGl2ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbl9tcztcbiAgICAgICAgfVxuICAgIH07XG59XG5cbkhhbmRsZXJIZWxwZXJzLl9fZGFzaGpzX2ZhY3RvcnlfbmFtZSA9ICdIYW5kbGVySGVscGVycyc7XG5leHBvcnQgZGVmYXVsdCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldFNpbmdsZXRvbkZhY3RvcnkoSGFuZGxlckhlbHBlcnMpOyAvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi9cbiIsImltcG9ydCBNZXRyaWNzIGZyb20gJy4uL3ZvL01ldHJpY3MnO1xuaW1wb3J0IFJhbmdlIGZyb20gJy4uL3ZvL1JhbmdlJztcbmltcG9ydCBSZXBvcnRpbmcgZnJvbSAnLi4vdm8vUmVwb3J0aW5nJztcblxuZnVuY3Rpb24gTWFuaWZlc3RQYXJzaW5nIChjb25maWcpIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gICAgbGV0IGluc3RhbmNlO1xuICAgIGxldCBkYXNoTWFuaWZlc3RNb2RlbCA9IGNvbmZpZy5kYXNoTWFuaWZlc3RNb2RlbDtcbiAgICBjb25zdCBjb25zdGFudHMgPSBjb25maWcuY29uc3RhbnRzO1xuXG4gICAgZnVuY3Rpb24gZ2V0TWV0cmljc1JhbmdlU3RhcnRUaW1lKG1hbmlmZXN0LCBkeW5hbWljLCByYW5nZSkge1xuICAgICAgICB2YXIgbXBkID0gZGFzaE1hbmlmZXN0TW9kZWwuZ2V0TXBkKG1hbmlmZXN0KTtcbiAgICAgICAgdmFyIHZvUGVyaW9kcztcbiAgICAgICAgdmFyIHByZXNlbnRhdGlvblN0YXJ0VGltZSA9IDA7XG4gICAgICAgIHZhciByZXBvcnRpbmdTdGFydFRpbWU7XG5cbiAgICAgICAgaWYgKGR5bmFtaWMpIHtcbiAgICAgICAgICAgIC8vIEZvciBzZXJ2aWNlcyB3aXRoIE1QREB0eXBlPSdkeW5hbWljJywgdGhlIHN0YXJ0IHRpbWUgaXNcbiAgICAgICAgICAgIC8vIGluZGljYXRlZCBpbiB3YWxsIGNsb2NrIHRpbWUgYnkgYWRkaW5nIHRoZSB2YWx1ZSBvZiB0aGlzXG4gICAgICAgICAgICAvLyBhdHRyaWJ1dGUgdG8gdGhlIHZhbHVlIG9mIHRoZSBNUERAYXZhaWxhYmlsaXR5U3RhcnRUaW1lXG4gICAgICAgICAgICAvLyBhdHRyaWJ1dGUuXG4gICAgICAgICAgICBwcmVzZW50YXRpb25TdGFydFRpbWUgPSBtcGQuYXZhaWxhYmlsaXR5U3RhcnRUaW1lLmdldFRpbWUoKSAvIDEwMDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBGb3Igc2VydmljZXMgd2l0aCBNUERAdHlwZT0nc3RhdGljJywgdGhlIHN0YXJ0IHRpbWUgaXMgaW5kaWNhdGVkXG4gICAgICAgICAgICAvLyBpbiBNZWRpYSBQcmVzZW50YXRpb24gdGltZSBhbmQgaXMgcmVsYXRpdmUgdG8gdGhlIFBlcmlvZFN0YXJ0XG4gICAgICAgICAgICAvLyB0aW1lIG9mIHRoZSBmaXJzdCBQZXJpb2QgaW4gdGhpcyBNUEQuXG4gICAgICAgICAgICB2b1BlcmlvZHMgPSB0aGlzLmdldFJlZ3VsYXJQZXJpb2RzKG1wZCk7XG5cbiAgICAgICAgICAgIGlmICh2b1BlcmlvZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VudGF0aW9uU3RhcnRUaW1lID0gdm9QZXJpb2RzWzBdLnN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2hlbiBub3QgcHJlc2VudCwgREFTSCBNZXRyaWNzIGNvbGxlY3Rpb24gaXNcbiAgICAgICAgLy8gcmVxdWVzdGVkIGZyb20gdGhlIGJlZ2lubmluZyBvZiBjb250ZW50XG4gICAgICAgIC8vIGNvbnN1bXB0aW9uLlxuICAgICAgICByZXBvcnRpbmdTdGFydFRpbWUgPSBwcmVzZW50YXRpb25TdGFydFRpbWU7XG5cbiAgICAgICAgaWYgKHJhbmdlICYmIHJhbmdlLmhhc093blByb3BlcnR5KGNvbnN0YW50cy5TVEFSVF9USU1FKSkge1xuICAgICAgICAgICAgcmVwb3J0aW5nU3RhcnRUaW1lICs9IHJhbmdlLnN0YXJ0dGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXBvcnRpbmdTdGFydFRpbWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TWV0cmljcyhtYW5pZmVzdCkge1xuICAgICAgICB2YXIgbWV0cmljcyA9IFtdO1xuXG4gICAgICAgIGlmIChtYW5pZmVzdC5NZXRyaWNzX2FzQXJyYXkpIHtcbiAgICAgICAgICAgIG1hbmlmZXN0Lk1ldHJpY3NfYXNBcnJheS5mb3JFYWNoKG1ldHJpYyA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIG1ldHJpY0VudHJ5ID0gbmV3IE1ldHJpY3MoKTtcbiAgICAgICAgICAgICAgICB2YXIgaXNEeW5hbWljID0gZGFzaE1hbmlmZXN0TW9kZWwuZ2V0SXNEeW5hbWljKG1hbmlmZXN0KTtcblxuICAgICAgICAgICAgICAgIGlmIChtZXRyaWMuaGFzT3duUHJvcGVydHkoJ21ldHJpY3MnKSkge1xuICAgICAgICAgICAgICAgICAgICBtZXRyaWNFbnRyeS5tZXRyaWNzID0gbWV0cmljLm1ldHJpY3M7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChtZXRyaWMuUmFuZ2VfYXNBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBtZXRyaWMuUmFuZ2VfYXNBcnJheS5mb3JFYWNoKHJhbmdlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByYW5nZUVudHJ5ID0gbmV3IFJhbmdlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlRW50cnkuc3RhcnR0aW1lID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRNZXRyaWNzUmFuZ2VTdGFydFRpbWUobWFuaWZlc3QsIGlzRHluYW1pYywgcmFuZ2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmFuZ2UuaGFzT3duUHJvcGVydHkoJ2R1cmF0aW9uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZUVudHJ5LmR1cmF0aW9uID0gcmFuZ2UuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIG5vdCBwcmVzZW50LCB0aGUgdmFsdWUgaXMgaWRlbnRpY2FsIHRvIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1lZGlhIFByZXNlbnRhdGlvbiBkdXJhdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZUVudHJ5LmR1cmF0aW9uID0gZGFzaE1hbmlmZXN0TW9kZWwuZ2V0RHVyYXRpb24obWFuaWZlc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZUVudHJ5Ll91c2VXYWxsQ2xvY2tUaW1lID0gaXNEeW5hbWljO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRyaWNFbnRyeS5SYW5nZS5wdXNoKHJhbmdlRW50cnkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobWV0cmljLlJlcG9ydGluZ19hc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldHJpYy5SZXBvcnRpbmdfYXNBcnJheS5mb3JFYWNoKHJlcG9ydGluZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVwb3J0aW5nRW50cnkgPSBuZXcgUmVwb3J0aW5nKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXBvcnRpbmcuaGFzT3duUHJvcGVydHkoY29uc3RhbnRzLlNDSEVNRV9JRF9VUkkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3J0aW5nRW50cnkuc2NoZW1lSWRVcmkgPSByZXBvcnRpbmcuc2NoZW1lSWRVcmk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEludmFsaWQgUmVwb3J0aW5nLiBzY2hlbWVJZFVyaSBtdXN0IGJlIHNldC4gSWdub3JlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHJlcG9ydGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXBvcnRpbmcuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3J0aW5nRW50cnlbcHJvcF0gPSByZXBvcnRpbmdbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRyaWNFbnRyeS5SZXBvcnRpbmcucHVzaChyZXBvcnRpbmdFbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEludmFsaWQgTWV0cmljcy4gQXQgbGVhc3Qgb25lIHJlcG9ydGluZyBtdXN0IGJlIHByZXNlbnQuIElnbm9yZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWV0cmljcy5wdXNoKG1ldHJpY0VudHJ5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1ldHJpY3M7XG4gICAgfVxuXG4gICAgaW5zdGFuY2UgPSB7XG4gICAgICAgIGdldE1ldHJpY3M6IGdldE1ldHJpY3NcbiAgICB9O1xuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG5NYW5pZmVzdFBhcnNpbmcuX19kYXNoanNfZmFjdG9yeV9uYW1lID0gJ01hbmlmZXN0UGFyc2luZyc7XG5leHBvcnQgZGVmYXVsdCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldFNpbmdsZXRvbkZhY3RvcnkoTWFuaWZlc3RQYXJzaW5nKTsgLyoganNoaW50IGlnbm9yZTpsaW5lICovIiwiLyoqXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuZnVuY3Rpb24gTWV0cmljU2VyaWFsaXNlcigpIHtcblxuICAgIC8vIEZvciBlYWNoIGVudHJ5IGluIHRoZSB0b3AgbGV2ZWwgbGlzdCB3aXRoaW4gdGhlIG1ldHJpYyAoaW4gdGhlIGNhc2VcbiAgICAvLyBvZiB0aGUgRFZCRXJyb3JzIG1ldHJpYyBlYWNoIGVudHJ5IGNvcnJlc3BvbmRzIHRvIGFuIFwiZXJyb3IgZXZlbnRcIlxuICAgIC8vIGRlc2NyaWJlZCBpbiBjbGF1c2UgMTAuOC40KSB0aGUgUGxheWVyIHNoYWxsOlxuICAgIGZ1bmN0aW9uIHNlcmlhbGlzZShtZXRyaWMpIHtcbiAgICAgICAgbGV0IHBhaXJzID0gW107XG4gICAgICAgIGxldCBvYmogPSBbXTtcbiAgICAgICAgbGV0IGtleSxcbiAgICAgICAgICAgIHZhbHVlO1xuXG4gICAgICAgIC8vIFRha2UgZWFjaCAoa2V5LCB2YWx1ZSkgcGFpciBmcm9tIHRoZSBtZXRyaWMgZW50cnkgYW5kIGNyZWF0ZSBhXG4gICAgICAgIC8vIHN0cmluZyBjb25zaXN0aW5nIG9mIHRoZSBuYW1lIG9mIHRoZSBrZXksIGZvbGxvd2VkIGJ5IGFuIGVxdWFsc1xuICAgICAgICAvLyAoJz0nKSBjaGFyYWN0ZXIsIGZvbGxvd2VkIGJ5IHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlXG4gICAgICAgIC8vIHZhbHVlLiBUaGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2YWx1ZSBpcyBjcmVhdGVkIGJhc2VkXG4gICAgICAgIC8vIG9uIHRoZSB0eXBlIG9mIHRoZSB2YWx1ZSBmb2xsb3dpbmcgdGhlIGluc3RydWN0aW9ucyBpbiBUYWJsZSAyMi5cbiAgICAgICAgZm9yIChrZXkgaW4gbWV0cmljKSB7XG4gICAgICAgICAgICBpZiAobWV0cmljLmhhc093blByb3BlcnR5KGtleSkgJiYgKGtleS5pbmRleE9mKCdfJykgIT09IDApKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBtZXRyaWNba2V5XTtcblxuICAgICAgICAgICAgICAgIC8vIHdlIHdhbnQgdG8gZW5zdXJlIHRoYXQga2V5cyBzdGlsbCBlbmQgdXAgaW4gdGhlIHJlcG9ydFxuICAgICAgICAgICAgICAgIC8vIGV2ZW4gaWYgdGhlcmUgaXMgbm8gdmFsdWVcbiAgICAgICAgICAgICAgICBpZiAoKHZhbHVlID09PSB1bmRlZmluZWQpIHx8ICh2YWx1ZSA9PT0gbnVsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBEVkIgQTE2OCAxMC4xMi40IFRhYmxlIDIyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRyYWNlIG9yIHNpbWlsYXIgaXMgbnVsbCwgZG8gbm90IGluY2x1ZGUgaW4gb3V0cHV0XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0J1aWx0SW4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodikuc2xpY2UoOCwgLTEpICE9PSAnT2JqZWN0JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnB1c2goaXNCdWlsdEluID8gdiA6IHNlcmlhbGlzZSh2KSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb2JqLm1hcChlbmNvZGVVUklDb21wb25lbnQpLmpvaW4oJywnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwYWlycy5wdXNoKGtleSArICc9JyArIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbmNhdGVuYXRlIHRoZSBzdHJpbmdzIGNyZWF0ZWQgaW4gdGhlIHByZXZpb3VzIHN0ZXAgd2l0aCBhblxuICAgICAgICAvLyBhbXBlcnNhbmQgKCcmJykgY2hhcmFjdGVyIGJldHdlZW4gZWFjaCBvbmUuXG4gICAgICAgIHJldHVybiBwYWlycy5qb2luKCcmJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VyaWFsaXNlOiBzZXJpYWxpc2VcbiAgICB9O1xufVxuXG5NZXRyaWNTZXJpYWxpc2VyLl9fZGFzaGpzX2ZhY3RvcnlfbmFtZSA9ICdNZXRyaWNTZXJpYWxpc2VyJztcbmV4cG9ydCBkZWZhdWx0IGRhc2hqcy5GYWN0b3J5TWFrZXIuZ2V0U2luZ2xldG9uRmFjdG9yeShNZXRyaWNTZXJpYWxpc2VyKTsgLyoganNoaW50IGlnbm9yZTpsaW5lICovXG4iLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG5mdW5jdGlvbiBSTkcoKSB7XG5cbiAgICAvLyBjaGVjayB3aGV0aGVyIHNlY3VyZSByYW5kb20gbnVtYmVycyBhcmUgYXZhaWxhYmxlLiBpZiBub3QsIHJldmVydCB0b1xuICAgIC8vIHVzaW5nIE1hdGgucmFuZG9tXG4gICAgbGV0IGNyeXB0byA9IHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvO1xuXG4gICAgLy8gY291bGQganVzdCBhcyBlYXNpbHkgdXNlIGFueSBvdGhlciBhcnJheSB0eXBlIGJ5IGNoYW5naW5nIGxpbmUgYmVsb3dcbiAgICBsZXQgQXJyYXlUeXBlID0gVWludDMyQXJyYXk7XG4gICAgbGV0IE1BWF9WQUxVRSA9IE1hdGgucG93KDIsIEFycmF5VHlwZS5CWVRFU19QRVJfRUxFTUVOVCAqIDgpIC0gMTtcblxuICAgIC8vIGN1cnJlbnRseSB0aGVyZSBpcyBvbmx5IG9uZSBjbGllbnQgZm9yIHRoaXMgY29kZSwgYW5kIHRoYXQgb25seSB1c2VzXG4gICAgLy8gYSBzaW5nbGUgcmFuZG9tIG51bWJlciBwZXIgaW5pdGlhbGlzYXRpb24uIG1heSB3YW50IHRvIGluY3JlYXNlIHRoaXNcbiAgICAvLyBudW1iZXIgaWYgbW9yZSBjb25zdW1lcnMgaW4gdGhlIGZ1dHVyZVxuICAgIGxldCBOVU1fUkFORE9NX05VTUJFUlMgPSAxMDtcblxuICAgIGxldCByYW5kb21OdW1iZXJzLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgaW5zdGFuY2U7XG5cbiAgICBmdW5jdGlvbiBpbml0aWFsaXNlKCkge1xuICAgICAgICBpZiAoY3J5cHRvKSB7XG4gICAgICAgICAgICBpZiAoIXJhbmRvbU51bWJlcnMpIHtcbiAgICAgICAgICAgICAgICByYW5kb21OdW1iZXJzID0gbmV3IEFycmF5VHlwZShOVU1fUkFORE9NX05VTUJFUlMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhyYW5kb21OdW1iZXJzKTtcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJhbmQobWluLCBtYXgpIHtcbiAgICAgICAgbGV0IHI7XG5cbiAgICAgICAgaWYgKCFtaW4pIHtcbiAgICAgICAgICAgIG1pbiA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW1heCkge1xuICAgICAgICAgICAgbWF4ID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjcnlwdG8pIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gcmFuZG9tTnVtYmVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsaXNlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHIgPSByYW5kb21OdW1iZXJzW2luZGV4XSAvIE1BWF9WQUxVRTtcbiAgICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAociAqIChtYXggLSBtaW4pKSArIG1pbjtcbiAgICB9XG5cbiAgICBpbnN0YW5jZSA9IHtcbiAgICAgICAgcmFuZG9tOiByYW5kXG4gICAgfTtcblxuICAgIGluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuUk5HLl9fZGFzaGpzX2ZhY3RvcnlfbmFtZSA9ICdSTkcnO1xuZXhwb3J0IGRlZmF1bHQgZGFzaGpzLkZhY3RvcnlNYWtlci5nZXRTaW5nbGV0b25GYWN0b3J5KFJORyk7IC8qIGpzaGludCBpZ25vcmU6bGluZSAqL1xuIiwiLyoqXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbi8qKlxuICogQGNsYXNzXG4gKiBAaWdub3JlXG4gKi9cbmNsYXNzIERWQkVycm9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubXBkdXJsID0gbnVsbDtcbiAgICAgICAgLy8gU3RyaW5nIC0gQWJzb2x1dGUgVVJMIGZyb20gd2hpY2ggdGhlIE1QRCB3YXMgb3JpZ2luYWxseVxuICAgICAgICAvLyByZXRyaWV2ZWQgKE1QRCB1cGRhdGVzIHdpbGwgbm90IGNoYW5nZSB0aGlzIHZhbHVlKS5cblxuICAgICAgICB0aGlzLmVycm9yY29kZSA9IG51bGw7XG4gICAgICAgIC8vIFN0cmluZyAtIFRoZSB2YWx1ZSBvZiBlcnJvcmNvZGUgZGVwZW5kcyB1cG9uIHRoZSB0eXBlXG4gICAgICAgIC8vIG9mIGVycm9yIGJlaW5nIHJlcG9ydGVkLiBGb3IgYW4gZXJyb3IgbGlzdGVkIGluIHRoZVxuICAgICAgICAvLyBFcnJvclR5cGUgY29sdW1uIGJlbG93IHRoZSB2YWx1ZSBpcyBhcyBkZXNjcmliZWQgaW4gdGhlXG4gICAgICAgIC8vIFZhbHVlIGNvbHVtbi5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gRXJyb3JUeXBlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWx1ZVxuICAgICAgICAvLyAtLS0tLS0tLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0tLS0tXG4gICAgICAgIC8vIEhUVFAgZXJyb3Igc3RhdHVzIGNvZGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSFRUUCBzdGF0dXMgY29kZVxuICAgICAgICAvLyBVbmtub3duIEhUVFAgc3RhdHVzIGNvZGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhUVFAgc3RhdHVzIGNvZGVcbiAgICAgICAgLy8gU1NMIGNvbm5lY3Rpb24gZmFpbGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNTTFwiIGZvbGxvd2VkIGJ5IFNTTCBhbGVydCB2YWx1ZVxuICAgICAgICAvLyBETlMgcmVzb2x1dGlvbiBmYWlsZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQzAwXCJcbiAgICAgICAgLy8gSG9zdCB1bnJlYWNoYWJsZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkMwMVwiXG4gICAgICAgIC8vIENvbm5lY3Rpb24gcmVmdXNlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDMDJcIlxuICAgICAgICAvLyBDb25uZWN0aW9uIGVycm9yIOKAkyBOb3Qgb3RoZXJ3aXNlIHNwZWNpZmllZCAgICAgICAgICAgXCJDMDNcIlxuICAgICAgICAvLyBDb3JydXB0IG1lZGlhIOKAkyBJU08gQk1GRiBjb250YWluZXIgY2Fubm90IGJlIHBhcnNlZCAgXCJNMDBcIlxuICAgICAgICAvLyBDb3JydXB0IG1lZGlhIOKAkyBOb3Qgb3RoZXJ3aXNlIHNwZWNpZmllZCAgICAgICAgICAgICAgXCJNMDFcIlxuICAgICAgICAvLyBDaGFuZ2luZyBCYXNlIFVSTCBpbiB1c2UgZHVlIHRvIGVycm9ycyAgICAgICAgICAgICAgIFwiRjAwXCJcbiAgICAgICAgLy8gQmVjb21pbmcgYW4gZXJyb3IgcmVwb3J0aW5nIFBsYXllciAgICAgICAgICAgICAgICAgICBcIlMwMFwiXG5cbiAgICAgICAgdGhpcy50ZXJyb3IgPSBudWxsO1xuICAgICAgICAvLyBSZWFsLVRpbWUgLSBEYXRlIGFuZCB0aW1lIGF0IHdoaWNoIGVycm9yIG9jY3VycmVkIGluIFVUQyxcbiAgICAgICAgLy8gZm9ybWF0dGVkIGFzIGEgY29tYmluZWQgZGF0ZSBhbmQgdGltZSBhY2NvcmRpbmcgdG8gSVNPIDg2MDEuXG5cbiAgICAgICAgdGhpcy51cmwgPSBudWxsO1xuICAgICAgICAvLyBTdHJpbmcgLSBBYnNvbHV0ZSBVUkwgZnJvbSB3aGljaCBkYXRhIHdhcyBiZWluZyByZXF1ZXN0ZWRcbiAgICAgICAgLy8gd2hlbiB0aGlzIGVycm9yIG9jY3VycmVkLiBJZiB0aGUgZXJyb3IgcmVwb3J0IGlzIGluIHJlbGF0aW9uXG4gICAgICAgIC8vIHRvIGNvcnJ1cHQgbWVkaWEgb3IgY2hhbmdpbmcgQmFzZVVSTCwgdGhpcyBtYXkgYmUgYSBudWxsXG4gICAgICAgIC8vIHN0cmluZyBpZiB0aGUgVVJMIGZyb20gd2hpY2ggdGhlIG1lZGlhIHdhcyBvYnRhaW5lZCBvclxuICAgICAgICAvLyB3aGljaCBsZWQgdG8gdGhlIGNoYW5nZSBvZiBCYXNlVVJMIGlzIG5vIGxvbmdlciBrbm93bi5cblxuICAgICAgICB0aGlzLmlwYWRkcmVzcyA9IG51bGw7XG4gICAgICAgIC8vIFN0cmluZyAtIElQIEFkZHJlc3Mgd2hpY2ggdGhlIGhvc3QgbmFtZSBpbiBcInVybFwiIHJlc29sdmVkIHRvLlxuICAgICAgICAvLyBJZiB0aGUgZXJyb3IgcmVwb3J0IGlzIGluIHJlbGF0aW9uIHRvIGNvcnJ1cHQgbWVkaWEgb3JcbiAgICAgICAgLy8gY2hhbmdpbmcgQmFzZVVSTCwgdGhpcyBtYXkgYmUgYSBudWxsIHN0cmluZyBpZiB0aGUgVVJMXG4gICAgICAgIC8vIGZyb20gd2hpY2ggdGhlIG1lZGlhIHdhcyBvYnRhaW5lZCBvciB3aGljaCBsZWQgdG8gdGhlXG4gICAgICAgIC8vIGNoYW5nZSBvZiBCYXNlVVJMIGlzIG5vIGxvbmdlciBrbm93bi5cblxuICAgICAgICB0aGlzLnNlcnZpY2Vsb2NhdGlvbiA9IG51bGw7XG4gICAgICAgIC8vIFN0cmluZyAtIFRoZSB2YWx1ZSBvZiB0aGUgc2VydmljZUxvY2F0aW9uIGZpZWxkIGluIHRoZVxuICAgICAgICAvLyBCYXNlVVJMIGJlaW5nIHVzZWQuIEluIHRoZSBldmVudCBvZiB0aGlzIHJlcG9ydCBpbmRpY2F0aW5nXG4gICAgICAgIC8vIGEgY2hhbmdlIG9mIEJhc2VVUkwgdGhpcyBpcyB0aGUgdmFsdWUgZnJvbSB0aGUgQmFzZVVSTFxuICAgICAgICAvLyBiZWluZyBtb3ZlZCBmcm9tLlxuICAgIH1cbn1cblxuRFZCRXJyb3JzLlNTTF9DT05ORUNUSU9OX0ZBSUxFRF9QUkVGSVggPSAnU1NMJztcbkRWQkVycm9ycy5ETlNfUkVTT0xVVElPTl9GQUlMRUQgPSAgICAgICAgJ0MwMCc7XG5EVkJFcnJvcnMuSE9TVF9VTlJFQUNIQUJMRSA9ICAgICAgICAgICAgICdDMDEnO1xuRFZCRXJyb3JzLkNPTk5FQ1RJT05fUkVGVVNFRCA9ICAgICAgICAgICAnQzAyJztcbkRWQkVycm9ycy5DT05ORUNUSU9OX0VSUk9SID0gICAgICAgICAgICAgJ0MwMyc7XG5EVkJFcnJvcnMuQ09SUlVQVF9NRURJQV9JU09CTUZGID0gICAgICAgICdNMDAnO1xuRFZCRXJyb3JzLkNPUlJVUFRfTUVESUFfT1RIRVIgPSAgICAgICAgICAnTTAxJztcbkRWQkVycm9ycy5CQVNFX1VSTF9DSEFOR0VEID0gICAgICAgICAgICAgJ0YwMCc7XG5EVkJFcnJvcnMuQkVDQU1FX1JFUE9SVEVSID0gICAgICAgICAgICAgICdTMDAnO1xuXG5leHBvcnQgZGVmYXVsdCBEVkJFcnJvcnM7XG4iLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuLyoqXG4gKiBAY2xhc3NcbiAqIEBpZ25vcmVcbiAqL1xuY2xhc3MgTWV0cmljcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgdGhpcy5tZXRyaWNzID0gJyc7XG4gICAgICAgIHRoaXMuUmFuZ2UgPSBbXTtcbiAgICAgICAgdGhpcy5SZXBvcnRpbmcgPSBbXTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1ldHJpY3M7XG4iLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuLyoqXG4gKiBAY2xhc3NcbiAqIEBpZ25vcmVcbiAqL1xuY2xhc3MgUmFuZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIC8vIGFzIGRlZmluZWQgaW4gSVNPMjMwMDktMVxuICAgICAgICB0aGlzLnN0YXJ0dGltZSA9IDA7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBJbmZpbml0eTtcblxuICAgICAgICAvLyBmb3IgaW50ZXJuYWwgdXNlXG4gICAgICAgIHRoaXMuX3VzZVdhbGxDbG9ja1RpbWUgPSBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmdlO1xuIiwiLyoqXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbi8qKlxuICogQGNsYXNzXG4gKiBAaWdub3JlXG4gKi9cbmNsYXNzIFJlcG9ydGluZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIFJlcG9ydGluZyBpcyBhIERlc2NyaXB0b3JUeXBlIGFuZCBkb2Vzbid0IGhhdmUgYW55IGFkZGl0aW9uYWwgZmllbGRzXG4gICAgICAgIHRoaXMuc2NoZW1lSWRVcmkgPSAnJztcbiAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0aW5nO1xuIiwiLyoqXG4qIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4qIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxuKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxuKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXG4qIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4qICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcbiogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbiogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4qICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXG4qICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4qICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5pbXBvcnQgRmFjdG9yeU1ha2VyIGZyb20gJy4uLy4uL2NvcmUvRmFjdG9yeU1ha2VyJztcbmltcG9ydCB7IGNoZWNrSW50ZWdlciB9IGZyb20gJy4uL3V0aWxzL1N1cGVydmlzb3JUb29scyc7XG5cbmZ1bmN0aW9uIEN1c3RvbVRpbWVSYW5nZXMoLypjb25maWcqLykge1xuICAgIGxldCBjdXN0b21UaW1lUmFuZ2VBcnJheSA9IFtdO1xuICAgIGxldCBsZW5ndGggPSAwO1xuXG4gICAgZnVuY3Rpb24gYWRkKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IChpIDwgdGhpcy5jdXN0b21UaW1lUmFuZ2VBcnJheS5sZW5ndGgpICYmIChzdGFydCA+IHRoaXMuY3VzdG9tVGltZVJhbmdlQXJyYXlbaV0uc3RhcnQpOyBpKyspO1xuXG4gICAgICAgIHRoaXMuY3VzdG9tVGltZVJhbmdlQXJyYXkuc3BsaWNlKGksIDAsIHtzdGFydDogc3RhcnQsZW5kOiBlbmR9KTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5jdXN0b21UaW1lUmFuZ2VBcnJheS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1lcmdlUmFuZ2VzKGksaSArIDEpKSB7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy5jdXN0b21UaW1lUmFuZ2VBcnJheS5sZW5ndGg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuY3VzdG9tVGltZVJhbmdlQXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZShzdGFydCwgZW5kKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXN0b21UaW1lUmFuZ2VBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHN0YXJ0IDw9IHRoaXMuY3VzdG9tVGltZVJhbmdlQXJyYXlbaV0uc3RhcnQgJiYgZW5kID49IHRoaXMuY3VzdG9tVGltZVJhbmdlQXJyYXlbaV0uZW5kKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICB8LS0tLS0tLS0tLS0tLS1SYW5nZSBpLS0tLS0tLXxcbiAgICAgICAgICAgICAgICAvL3wtLS0tLS0tLS0tLS0tLS1SYW5nZSB0byByZW1vdmUgLS0tLS0tLS0tLS0tLS0tfFxuICAgICAgICAgICAgICAgIC8vICAgIG9yXG4gICAgICAgICAgICAgICAgLy98LS0tLS0tLS0tLS0tLS1SYW5nZSBpLS0tLS0tLXxcbiAgICAgICAgICAgICAgICAvL3wtLS0tLS0tLS0tLS0tLVJhbmdlIHRvIHJlbW92ZSAtLS0tLS0tLS0tLS0tLS18XG4gICAgICAgICAgICAgICAgLy8gICAgb3JcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfC0tLS0tLS0tLS0tLS0tUmFuZ2UgaS0tLS0tLS18XG4gICAgICAgICAgICAgICAgLy98LS0tLS0tLS0tLS0tLS1SYW5nZSB0byByZW1vdmUgLS0tLS0tLS0tLS0tLS0tfFxuICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tVGltZVJhbmdlQXJyYXkuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICAgICAgaS0tO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXJ0ID4gdGhpcy5jdXN0b21UaW1lUmFuZ2VBcnJheVtpXS5zdGFydCAmJiBlbmQgPCB0aGlzLmN1c3RvbVRpbWVSYW5nZUFycmF5W2ldLmVuZCkge1xuICAgICAgICAgICAgICAgIC8vfC0tLS0tLS0tLS0tLS0tLS0tUmFuZ2UgaS0tLS0tLS0tLS0tLS0tLS18XG4gICAgICAgICAgICAgICAgLy8gICAgICAgIHwtLS0tLS0tUmFuZ2UgdG8gcmVtb3ZlIC0tLS0tfFxuICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tVGltZVJhbmdlQXJyYXkuc3BsaWNlKGkgKyAxLCAwLCB7c3RhcnQ6IGVuZCxlbmQ6IHRoaXMuY3VzdG9tVGltZVJhbmdlQXJyYXlbaV0uZW5kfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21UaW1lUmFuZ2VBcnJheVtpXS5lbmQgPSBzdGFydDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHN0YXJ0ID4gdGhpcy5jdXN0b21UaW1lUmFuZ2VBcnJheVtpXS5zdGFydCAmJiBzdGFydCA8IHRoaXMuY3VzdG9tVGltZVJhbmdlQXJyYXlbaV0uZW5kKSB7XG4gICAgICAgICAgICAgICAgLy98LS0tLS0tLS0tLS1SYW5nZSBpLS0tLS0tLS0tLXxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgfC0tLS0tLS0tLVJhbmdlIHRvIHJlbW92ZSAtLS0tLS0tLXxcbiAgICAgICAgICAgICAgICAvLyAgICBvclxuICAgICAgICAgICAgICAgIC8vfC0tLS0tLS0tLS0tLS0tLS0tUmFuZ2UgaS0tLS0tLS0tLS0tLS0tLS18XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICB8LS0tLS0tLVJhbmdlIHRvIHJlbW92ZSAtLS0tLXxcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbVRpbWVSYW5nZUFycmF5W2ldLmVuZCA9IHN0YXJ0O1xuICAgICAgICAgICAgfSBlbHNlIGlmICggZW5kID4gdGhpcy5jdXN0b21UaW1lUmFuZ2VBcnJheVtpXS5zdGFydCAmJiBlbmQgPCB0aGlzLmN1c3RvbVRpbWVSYW5nZUFycmF5W2ldLmVuZCkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfC0tLS0tLS0tLS0tUmFuZ2UgaS0tLS0tLS0tLS18XG4gICAgICAgICAgICAgICAgLy98LS0tLS0tLS0tUmFuZ2UgdG8gcmVtb3ZlIC0tLS0tLS0tfFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgb3JcbiAgICAgICAgICAgICAgICAvL3wtLS0tLS0tLS0tLS0tLS0tLVJhbmdlIGktLS0tLS0tLS0tLS0tLS0tfFxuICAgICAgICAgICAgICAgIC8vfC0tLS0tLS1SYW5nZSB0byByZW1vdmUgLS0tLS18XG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21UaW1lUmFuZ2VBcnJheVtpXS5zdGFydCA9IGVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy5jdXN0b21UaW1lUmFuZ2VBcnJheS5sZW5ndGg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVyZ2VSYW5nZXMocmFuZ2VJbmRleDEsIHJhbmdlSW5kZXgyKSB7XG4gICAgICAgIGxldCByYW5nZTEgPSB0aGlzLmN1c3RvbVRpbWVSYW5nZUFycmF5W3JhbmdlSW5kZXgxXTtcbiAgICAgICAgbGV0IHJhbmdlMiA9IHRoaXMuY3VzdG9tVGltZVJhbmdlQXJyYXlbcmFuZ2VJbmRleDJdO1xuXG4gICAgICAgIGlmIChyYW5nZTEuc3RhcnQgPD0gIHJhbmdlMi5zdGFydCAmJiByYW5nZTIuc3RhcnQgPD0gcmFuZ2UxLmVuZCAmJiByYW5nZTEuZW5kIDw9IHJhbmdlMi5lbmQpIHtcbiAgICAgICAgICAgIC8vfC0tLS0tLS0tLS0tUmFuZ2UxLS0tLS0tLS0tLXxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICB8LS0tLS0tLS0tLS1SYW5nZTItLS0tLS0tLS0tfFxuICAgICAgICAgICAgcmFuZ2UxLmVuZCA9IHJhbmdlMi5lbmQ7XG4gICAgICAgICAgICB0aGlzLmN1c3RvbVRpbWVSYW5nZUFycmF5LnNwbGljZShyYW5nZUluZGV4MiwxKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmFuZ2UyLnN0YXJ0IDw9IHJhbmdlMS5zdGFydCAmJiByYW5nZTEuc3RhcnQgPD0gcmFuZ2UyLmVuZCAmJiByYW5nZTIuZW5kIDw9IHJhbmdlMS5lbmQpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIHwtLS0tLS0tLS0tLVJhbmdlMS0tLS0tLS0tLS18XG4gICAgICAgICAgICAvL3wtLS0tLS0tLS0tLVJhbmdlMi0tLS0tLS0tLS18XG4gICAgICAgICAgICByYW5nZTEuc3RhcnQgPSByYW5nZTIuc3RhcnQ7XG4gICAgICAgICAgICB0aGlzLmN1c3RvbVRpbWVSYW5nZUFycmF5LnNwbGljZShyYW5nZUluZGV4MiwxKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHJhbmdlMi5zdGFydCA8PSByYW5nZTEuc3RhcnQgJiYgcmFuZ2UxLnN0YXJ0IDw9IHJhbmdlMi5lbmQgJiYgcmFuZ2UxLmVuZCA8PSByYW5nZTIuZW5kKSB7XG4gICAgICAgICAgICAvLyAgICAgIHwtLS0tLS0tLVJhbmdlMS0tLS0tLS18XG4gICAgICAgICAgICAvL3wtLS0tLS0tLS0tLS0tLS1SYW5nZTItLS0tLS0tLS0tLS0tLXxcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tVGltZVJhbmdlQXJyYXkuc3BsaWNlKHJhbmdlSW5kZXgxLDEpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAocmFuZ2UxLnN0YXJ0IDw9IHJhbmdlMi5zdGFydCAmJiByYW5nZTIuc3RhcnQgPD0gcmFuZ2UxLmVuZCAmJiByYW5nZTIuZW5kIDw9IHJhbmdlMS5lbmQpIHtcbiAgICAgICAgICAgIC8vfC0tLS0tLS0tLS0tLS0tLS0tUmFuZ2UxLS0tLS0tLS0tLS0tLS18XG4gICAgICAgICAgICAvLyAgICAgICAgfC0tLS0tLS0tLS0tUmFuZ2UyLS0tLS0tLS0tLXxcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tVGltZVJhbmdlQXJyYXkuc3BsaWNlKHJhbmdlSW5kZXgyLDEpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0KGluZGV4KSB7XG4gICAgICAgIGNoZWNrSW50ZWdlcihpbmRleCk7XG5cbiAgICAgICAgaWYgKGluZGV4ID49IHRoaXMuY3VzdG9tVGltZVJhbmdlQXJyYXkubGVuZ3RoIHx8IGluZGV4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmN1c3RvbVRpbWVSYW5nZUFycmF5W2luZGV4XS5zdGFydDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmQoaW5kZXgpIHtcbiAgICAgICAgY2hlY2tJbnRlZ2VyKGluZGV4KTtcblxuICAgICAgICBpZiAoaW5kZXggPj0gdGhpcy5jdXN0b21UaW1lUmFuZ2VBcnJheS5sZW5ndGggfHwgaW5kZXggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tVGltZVJhbmdlQXJyYXlbaW5kZXhdLmVuZDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjdXN0b21UaW1lUmFuZ2VBcnJheTogY3VzdG9tVGltZVJhbmdlQXJyYXksXG4gICAgICAgIGxlbmd0aDogbGVuZ3RoLFxuICAgICAgICBhZGQ6IGFkZCxcbiAgICAgICAgY2xlYXI6IGNsZWFyLFxuICAgICAgICByZW1vdmU6IHJlbW92ZSxcbiAgICAgICAgbWVyZ2VSYW5nZXM6IG1lcmdlUmFuZ2VzLFxuICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgIGVuZDogZW5kXG4gICAgfTtcbn1cbkN1c3RvbVRpbWVSYW5nZXMuX19kYXNoanNfZmFjdG9yeV9uYW1lID0gJ0N1c3RvbVRpbWVSYW5nZXMnO1xuZXhwb3J0IGRlZmF1bHQgRmFjdG9yeU1ha2VyLmdldENsYXNzRmFjdG9yeShDdXN0b21UaW1lUmFuZ2VzKTtcbiIsIi8qKlxuICogVGhlIGNvcHlyaWdodCBpbiB0aGlzIHNvZnR3YXJlIGlzIGJlaW5nIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBCU0QgTGljZW5zZSxcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiAqICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbiAqICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgQVMgSVMgQU5EIEFOWVxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXG4gKiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxuICogIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLFxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuICogIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL2NvbnN0YW50cy9Db25zdGFudHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tQYXJhbWV0ZXJUeXBlKHBhcmFtZXRlciwgdHlwZSkge1xuICAgIGlmICh0eXBlb2YgcGFyYW1ldGVyICE9PSB0eXBlKSB7XG4gICAgICAgIHRocm93IENvbnN0YW50cy5CQURfQVJHVU1FTlRfRVJST1I7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJbnRlZ2VyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IGlzSW50ID0gcGFyYW1ldGVyICE9PSBudWxsICYmICFpc05hTihwYXJhbWV0ZXIpICYmIChwYXJhbWV0ZXIgJSAxID09PSAwKTtcblxuICAgIGlmICghaXNJbnQpIHtcbiAgICAgICAgdGhyb3cgQ29uc3RhbnRzLkJBRF9BUkdVTUVOVF9FUlJPUiArICcgOiBhcmd1bWVudCBpcyBub3QgYW4gaW50ZWdlcic7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSYW5nZShwYXJhbWV0ZXIsIG1pbiwgbWF4KSB7XG4gICAgaWYgKHBhcmFtZXRlciA8IG1pbiB8fCBwYXJhbWV0ZXIgPiBtYXgpIHtcbiAgICAgICAgdGhyb3cgQ29uc3RhbnRzLkJBRF9BUkdVTUVOVF9FUlJPUiArICcgOiBhcmd1bWVudCBvdXQgb2YgcmFuZ2UnO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNWaWRlb09yQXVkaW9UeXBlKHR5cGUpIHtcbiAgICBpZiAodHlwZW9mIHR5cGUgIT09ICdzdHJpbmcnIHx8ICh0eXBlICE9PSBDb25zdGFudHMuQVVESU8gJiYgdHlwZSAhPT0gQ29uc3RhbnRzLlZJREVPKSkge1xuICAgICAgICB0aHJvdyBDb25zdGFudHMuQkFEX0FSR1VNRU5UX0VSUk9SO1xuICAgIH1cbn0iXX0=
