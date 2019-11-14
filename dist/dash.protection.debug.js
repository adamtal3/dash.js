(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.dashjs || (g.dashjs = {})).Protection = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
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

var ErrorsBase = (function () {
    function ErrorsBase() {
        _classCallCheck(this, ErrorsBase);
    }

    _createClass(ErrorsBase, [{
        key: 'extend',
        value: function extend(errors, config) {
            if (!errors) return;

            var override = config ? config.override : false;
            var publicOnly = config ? config.publicOnly : false;

            for (var err in errors) {
                if (!errors.hasOwnProperty(err) || this[err] && !override) continue;
                if (publicOnly && errors[err].indexOf('public_') === -1) continue;
                this[err] = errors[err];
            }
        }
    }]);

    return ErrorsBase;
})();

exports['default'] = ErrorsBase;
module.exports = exports['default'];

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
 * Protection Constants declaration
 * @class
 * @ignore
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ProtectionConstants = (function () {
    _createClass(ProtectionConstants, [{
        key: 'init',
        value: function init() {
            this.CLEARKEY_KEYSTEM_STRING = 'org.w3.clearkey';
            this.WIDEVINE_KEYSTEM_STRING = 'com.widevine.alpha';
            this.PLAYREADY_KEYSTEM_STRING = 'com.microsoft.playready';
        }
    }]);

    function ProtectionConstants() {
        _classCallCheck(this, ProtectionConstants);

        this.init();
    }

    return ProtectionConstants;
})();

var constants = new ProtectionConstants();
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

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var CommonEncryption = (function () {
    function CommonEncryption() {
        _classCallCheck(this, CommonEncryption);
    }

    _createClass(CommonEncryption, null, [{
        key: 'findCencContentProtection',

        /**
         * Find and return the ContentProtection element in the given array
         * that indicates support for MPEG Common Encryption
         *
         * @param {Array} cpArray array of content protection elements
         * @returns {Object|null} the Common Encryption content protection element or
         * null if one was not found
         */
        value: function findCencContentProtection(cpArray) {
            var retVal = null;
            for (var i = 0; i < cpArray.length; ++i) {
                var cp = cpArray[i];
                if (cp.schemeIdUri.toLowerCase() === 'urn:mpeg:dash:mp4protection:2011' && cp.value.toLowerCase() === 'cenc') retVal = cp;
            }
            return retVal;
        }

        /**
         * Returns just the data portion of a single PSSH
         *
         * @param {ArrayBuffer} pssh - the PSSH
         * @return {ArrayBuffer} data portion of the PSSH
         */
    }, {
        key: 'getPSSHData',
        value: function getPSSHData(pssh) {
            var offset = 8; // Box size and type fields
            var view = new DataView(pssh);

            // Read version
            var version = view.getUint8(offset);

            offset += 20; // Version (1), flags (3), system ID (16)

            if (version > 0) {
                offset += 4 + 16 * view.getUint32(offset); // Key ID count (4) and All key IDs (16*count)
            }

            offset += 4; // Data size
            return pssh.slice(offset);
        }

        /**
         * Returns the PSSH associated with the given key system from the concatenated
         * list of PSSH boxes in the given initData
         *
         * @param {KeySystem} keySystem the desired
         * key system
         * @param {ArrayBuffer} initData 'cenc' initialization data.  Concatenated list of PSSH.
         * @returns {ArrayBuffer|null} The PSSH box data corresponding to the given key system, null if not found
         * or null if a valid association could not be found.
         */
    }, {
        key: 'getPSSHForKeySystem',
        value: function getPSSHForKeySystem(keySystem, initData) {
            var psshList = CommonEncryption.parsePSSHList(initData);
            if (psshList.hasOwnProperty(keySystem.uuid.toLowerCase())) {
                return psshList[keySystem.uuid.toLowerCase()];
            }
            return null;
        }

        /**
         * Parse a standard common encryption PSSH which contains a simple
         * base64-encoding of the init data
         *
         * @param {Object} cpData the ContentProtection element
         * @param {BASE64} BASE64 reference
         * @returns {ArrayBuffer|null} the init data or null if not found
         */
    }, {
        key: 'parseInitDataFromContentProtection',
        value: function parseInitDataFromContentProtection(cpData, BASE64) {
            if ('pssh' in cpData) {
                return BASE64.decodeArray(cpData.pssh.__text).buffer;
            }
            return null;
        }

        /**
         * Parses list of PSSH boxes into keysystem-specific PSSH data
         *
         * @param {ArrayBuffer} data - the concatenated list of PSSH boxes as provided by
         * CDM as initialization data when CommonEncryption content is detected
         * @returns {Object|Array} an object that has a property named according to each of
         * the detected key system UUIDs (e.g. 00000000-0000-0000-0000-0000000000)
         * and a ArrayBuffer (the entire PSSH box) as the property value
         */
    }, {
        key: 'parsePSSHList',
        value: function parsePSSHList(data) {

            if (data === null) return [];

            var dv = new DataView(data.buffer || data); // data.buffer first for Uint8Array support
            var done = false;
            var pssh = {};

            // TODO: Need to check every data read for end of buffer
            var byteCursor = 0;
            while (!done) {

                var size = undefined,
                    nextBox = undefined,
                    version = undefined,
                    systemID = undefined,
                    psshDataSize = undefined;
                var boxStart = byteCursor;

                if (byteCursor >= dv.buffer.byteLength) break;

                /* Box size */
                size = dv.getUint32(byteCursor);
                nextBox = byteCursor + size;
                byteCursor += 4;

                /* Verify PSSH */
                if (dv.getUint32(byteCursor) !== 0x70737368) {
                    byteCursor = nextBox;
                    continue;
                }
                byteCursor += 4;

                /* Version must be 0 or 1 */
                version = dv.getUint8(byteCursor);
                if (version !== 0 && version !== 1) {
                    byteCursor = nextBox;
                    continue;
                }
                byteCursor++;

                byteCursor += 3; /* skip flags */

                // 16-byte UUID/SystemID
                systemID = '';
                var i = undefined,
                    val = undefined;
                for (i = 0; i < 4; i++) {
                    val = dv.getUint8(byteCursor + i).toString(16);
                    systemID += val.length === 1 ? '0' + val : val;
                }
                byteCursor += 4;
                systemID += '-';
                for (i = 0; i < 2; i++) {
                    val = dv.getUint8(byteCursor + i).toString(16);
                    systemID += val.length === 1 ? '0' + val : val;
                }
                byteCursor += 2;
                systemID += '-';
                for (i = 0; i < 2; i++) {
                    val = dv.getUint8(byteCursor + i).toString(16);
                    systemID += val.length === 1 ? '0' + val : val;
                }
                byteCursor += 2;
                systemID += '-';
                for (i = 0; i < 2; i++) {
                    val = dv.getUint8(byteCursor + i).toString(16);
                    systemID += val.length === 1 ? '0' + val : val;
                }
                byteCursor += 2;
                systemID += '-';
                for (i = 0; i < 6; i++) {
                    val = dv.getUint8(byteCursor + i).toString(16);
                    systemID += val.length === 1 ? '0' + val : val;
                }
                byteCursor += 6;

                systemID = systemID.toLowerCase();

                /* PSSH Data Size */
                psshDataSize = dv.getUint32(byteCursor);
                byteCursor += 4;

                /* PSSH Data */
                pssh[systemID] = dv.buffer.slice(boxStart, nextBox);
                byteCursor = nextBox;
            }

            return pssh;
        }
    }]);

    return CommonEncryption;
})();

exports['default'] = CommonEncryption;
module.exports = exports['default'];

},{}],5:[function(_dereq_,module,exports){
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

var _controllersProtectionController = _dereq_(7);

var _controllersProtectionController2 = _interopRequireDefault(_controllersProtectionController);

var _controllersProtectionKeyController = _dereq_(8);

var _controllersProtectionKeyController2 = _interopRequireDefault(_controllersProtectionKeyController);

var _ProtectionEvents = _dereq_(6);

var _ProtectionEvents2 = _interopRequireDefault(_ProtectionEvents);

var _errorsProtectionErrors = _dereq_(13);

var _errorsProtectionErrors2 = _interopRequireDefault(_errorsProtectionErrors);

var _modelsProtectionModel_21Jan2015 = _dereq_(15);

var _modelsProtectionModel_21Jan20152 = _interopRequireDefault(_modelsProtectionModel_21Jan2015);

var _modelsProtectionModel_3Feb2014 = _dereq_(16);

var _modelsProtectionModel_3Feb20142 = _interopRequireDefault(_modelsProtectionModel_3Feb2014);

var _modelsProtectionModel_01b = _dereq_(14);

var _modelsProtectionModel_01b2 = _interopRequireDefault(_modelsProtectionModel_01b);

var APIS_ProtectionModel_01b = [
// Un-prefixed as per spec
{
    // Video Element
    generateKeyRequest: 'generateKeyRequest',
    addKey: 'addKey',
    cancelKeyRequest: 'cancelKeyRequest',

    // Events
    needkey: 'needkey',
    keyerror: 'keyerror',
    keyadded: 'keyadded',
    keymessage: 'keymessage'
},
// Webkit-prefixed (early Chrome versions and Chrome with EME disabled in chrome://flags)
{
    // Video Element
    generateKeyRequest: 'webkitGenerateKeyRequest',
    addKey: 'webkitAddKey',
    cancelKeyRequest: 'webkitCancelKeyRequest',

    // Events
    needkey: 'webkitneedkey',
    keyerror: 'webkitkeyerror',
    keyadded: 'webkitkeyadded',
    keymessage: 'webkitkeymessage'
}];

var APIS_ProtectionModel_3Feb2014 = [
// Un-prefixed as per spec
// Chrome 38-39 (and some earlier versions) with chrome://flags -- Enable Encrypted Media Extensions
{
    // Video Element
    setMediaKeys: 'setMediaKeys',
    // MediaKeys
    MediaKeys: 'MediaKeys',
    // MediaKeySession
    release: 'close',

    // Events
    needkey: 'needkey',
    error: 'keyerror',
    message: 'keymessage',
    ready: 'keyadded',
    close: 'keyclose'
},
// MS-prefixed (IE11, Windows 8.1)
{
    // Video Element
    setMediaKeys: 'msSetMediaKeys',
    // MediaKeys
    MediaKeys: 'MSMediaKeys',
    // MediaKeySession
    release: 'close',
    // Events
    needkey: 'msneedkey',
    error: 'mskeyerror',
    message: 'mskeymessage',
    ready: 'mskeyadded',
    close: 'mskeyclose'
}];

function Protection() {
    var instance = undefined;
    var context = this.context;

    /**
     * Create a ProtectionController and associated ProtectionModel for use with
     * a single piece of content.
     *
     * @param {Object} config
     * @return {ProtectionController} protection controller
     *
     */
    function createProtectionSystem(config) {
        var controller = null;

        var protectionKeyController = (0, _controllersProtectionKeyController2['default'])(context).getInstance();
        protectionKeyController.setConfig({ debug: config.debug, BASE64: config.BASE64 });
        protectionKeyController.initialize();

        var protectionModel = getProtectionModel(config);

        if (!controller && protectionModel) {
            //TODO add ability to set external controller if still needed at all?
            controller = (0, _controllersProtectionController2['default'])(context).create({
                protectionModel: protectionModel,
                protectionKeyController: protectionKeyController,
                eventBus: config.eventBus,
                debug: config.debug,
                events: config.events,
                BASE64: config.BASE64,
                constants: config.constants
            });
            config.capabilities.setEncryptedMediaSupported(true);
        }
        return controller;
    }

    function getProtectionModel(config) {
        var debug = config.debug;
        var logger = debug.getLogger(instance);
        var eventBus = config.eventBus;
        var errHandler = config.errHandler;
        var videoElement = config.videoModel ? config.videoModel.getElement() : null;

        if ((!videoElement || videoElement.onencrypted !== undefined) && (!videoElement || videoElement.mediaKeys !== undefined)) {
            logger.info('EME detected on this user agent! (ProtectionModel_21Jan2015)');
            return (0, _modelsProtectionModel_21Jan20152['default'])(context).create({ debug: debug, eventBus: eventBus, events: config.events });
        } else if (getAPI(videoElement, APIS_ProtectionModel_3Feb2014)) {
            logger.info('EME detected on this user agent! (ProtectionModel_3Feb2014)');
            return (0, _modelsProtectionModel_3Feb20142['default'])(context).create({ debug: debug, eventBus: eventBus, events: config.events, api: getAPI(videoElement, APIS_ProtectionModel_3Feb2014) });
        } else if (getAPI(videoElement, APIS_ProtectionModel_01b)) {
            logger.info('EME detected on this user agent! (ProtectionModel_01b)');
            return (0, _modelsProtectionModel_01b2['default'])(context).create({ debug: debug, eventBus: eventBus, errHandler: errHandler, events: config.events, api: getAPI(videoElement, APIS_ProtectionModel_01b) });
        } else {
            logger.warn('No supported version of EME detected on this user agent! - Attempts to play encrypted content will fail!');
            return null;
        }
    }

    function getAPI(videoElement, apis) {
        for (var i = 0; i < apis.length; i++) {
            var api = apis[i];
            // detect if api is supported by browser
            // check only first function in api -> should be fine
            if (typeof videoElement[api[Object.keys(api)[0]]] !== 'function') {
                continue;
            }

            return api;
        }

        return null;
    }

    instance = {
        createProtectionSystem: createProtectionSystem
    };

    return instance;
}

Protection.__dashjs_factory_name = 'Protection';
var factory = dashjs.FactoryMaker.getClassFactory(Protection); /* jshint ignore:line */
factory.events = _ProtectionEvents2['default'];
factory.errors = _errorsProtectionErrors2['default'];
dashjs.FactoryMaker.updateClassFactory(Protection.__dashjs_factory_name, factory); /* jshint ignore:line */
exports['default'] = factory;
module.exports = exports['default'];

},{"13":13,"14":14,"15":15,"16":16,"6":6,"7":7,"8":8}],6:[function(_dereq_,module,exports){
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

/**
 * @class
 *
 */

var ProtectionEvents = (function (_EventsBase) {
  _inherits(ProtectionEvents, _EventsBase);

  /**
   * @description Public facing external events to be used when including protection package.
   * All public events will be aggregated into the MediaPlayerEvents Class and can be accessed
   * via MediaPlayer.events.  public_ is the prefix that we use to move event names to MediaPlayerEvents.
   */

  function ProtectionEvents() {
    _classCallCheck(this, ProtectionEvents);

    _get(Object.getPrototypeOf(ProtectionEvents.prototype), 'constructor', this).call(this);

    /**
     * Event ID for events delivered when the protection set receives
     * a key message from the CDM
     *
     * @ignore
     */
    this.INTERNAL_KEY_MESSAGE = 'internalKeyMessage';

    /**
     * Event ID for events delivered when a key system selection procedure
     * completes
     * @ignore
     */
    this.INTERNAL_KEY_SYSTEM_SELECTED = 'internalKeySystemSelected';

    /**
     * Event ID for events delivered when the status of one decryption keys has changed
     * @ignore
     */
    this.INTERNAL_KEY_STATUS_CHANGED = 'internalkeyStatusChanged';

    /**
     * Event ID for events delivered when a new key has been added
     *
     * @constant
     * @deprecated The latest versions of the EME specification no longer
     * use this event.  {@MediaPlayer.models.protectionModel.eventList.KEY_STATUSES_CHANGED}
     * is preferred.
     * @event ProtectionEvents#KEY_ADDED
     */
    this.KEY_ADDED = 'public_keyAdded';
    /**
     * Event ID for events delivered when an error is encountered by the CDM
     * while processing a license server response message
     * @event ProtectionEvents#KEY_ERROR
     */
    this.KEY_ERROR = 'public_keyError';

    /**
     * Event ID for events delivered when the protection set receives
     * a key message from the CDM
     * @event ProtectionEvents#KEY_MESSAGE
     */
    this.KEY_MESSAGE = 'public_keyMessage';

    /**
     * Event ID for events delivered when a key session close
     * process has completed
     * @event ProtectionEvents#KEY_SESSION_CLOSED
     */
    this.KEY_SESSION_CLOSED = 'public_keySessionClosed';

    /**
     * Event ID for events delivered when a new key sessions creation
     * process has completed
     * @event ProtectionEvents#KEY_SESSION_CREATED
     */
    this.KEY_SESSION_CREATED = 'public_keySessionCreated';

    /**
     * Event ID for events delivered when a key session removal
     * process has completed
     * @event ProtectionEvents#KEY_SESSION_REMOVED
     */
    this.KEY_SESSION_REMOVED = 'public_keySessionRemoved';

    /**
     * Event ID for events delivered when the status of one or more
     * decryption keys has changed
     * @event ProtectionEvents#KEY_STATUSES_CHANGED
     */
    this.KEY_STATUSES_CHANGED = 'public_keyStatusesChanged';

    /**
     * Event ID for events delivered when a key system access procedure
     * has completed
     * @ignore
     */
    this.KEY_SYSTEM_ACCESS_COMPLETE = 'public_keySystemAccessComplete';

    /**
     * Event ID for events delivered when a key system selection procedure
     * completes
     * @event ProtectionEvents#KEY_SYSTEM_SELECTED
     */
    this.KEY_SYSTEM_SELECTED = 'public_keySystemSelected';

    /**
     * Event ID for events delivered when a license request procedure
     * has completed
     * @event ProtectionEvents#LICENSE_REQUEST_COMPLETE
     */
    this.LICENSE_REQUEST_COMPLETE = 'public_licenseRequestComplete';

    /**
     * Event ID for needkey/encrypted events
     * @ignore
     */
    this.NEED_KEY = 'needkey';

    /**
     * Event ID for events delivered when the Protection system is detected and created.
     * @event ProtectionEvents#PROTECTION_CREATED
     */
    this.PROTECTION_CREATED = 'public_protectioncreated';

    /**
     * Event ID for events delivered when the Protection system is destroyed.
     * @event ProtectionEvents#PROTECTION_DESTROYED
     */
    this.PROTECTION_DESTROYED = 'public_protectiondestroyed';

    /**
     * Event ID for events delivered when a new server certificate has
     * been delivered to the CDM
     * @ignore
     */
    this.SERVER_CERTIFICATE_UPDATED = 'serverCertificateUpdated';

    /**
     * Event ID for events delivered when the process of shutting down
     * a protection set has completed
     * @ignore
     */
    this.TEARDOWN_COMPLETE = 'protectionTeardownComplete';

    /**
     * Event ID for events delivered when a HTMLMediaElement has been
     * associated with the protection set
     * @ignore
     */
    this.VIDEO_ELEMENT_SELECTED = 'videoElementSelected';
  }

  return ProtectionEvents;
})(_coreEventsEventsBase2['default']);

var protectionEvents = new ProtectionEvents();
exports['default'] = protectionEvents;
module.exports = exports['default'];

},{"2":2}],7:[function(_dereq_,module,exports){
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

var _CommonEncryption = _dereq_(4);

var _CommonEncryption2 = _interopRequireDefault(_CommonEncryption);

var _voMediaCapability = _dereq_(26);

var _voMediaCapability2 = _interopRequireDefault(_voMediaCapability);

var _voKeySystemConfiguration = _dereq_(25);

var _voKeySystemConfiguration2 = _interopRequireDefault(_voKeySystemConfiguration);

var _errorsProtectionErrors = _dereq_(13);

var _errorsProtectionErrors2 = _interopRequireDefault(_errorsProtectionErrors);

var _voDashJSError = _dereq_(28);

var _voDashJSError2 = _interopRequireDefault(_voDashJSError);

var NEEDKEY_BEFORE_INITIALIZE_RETRIES = 5;
var NEEDKEY_BEFORE_INITIALIZE_TIMEOUT = 500;

var LICENSE_SERVER_REQUEST_RETRIES = 3;
var LICENSE_SERVER_REQUEST_RETRY_INTERVAL = 1000;
var LICENSE_SERVER_REQUEST_DEFAULT_TIMEOUT = 8000;

/**
 * @module ProtectionController
 * @description Provides access to media protection information and functionality.  Each
 * ProtectionController manages a single {@link MediaPlayer.models.ProtectionModel}
 * which encapsulates a set of protection information (EME APIs, selected key system,
 * key sessions).  The APIs of ProtectionController mostly align with the latest EME
 * APIs.  Key system selection is mostly automated when combined with app-overrideable
 * functionality provided in {@link ProtectionKeyController}.
 * @todo ProtectionController does almost all of its tasks automatically after init() is
 * called.  Applications might want more control over this process and want to go through
 * each step manually (key system selection, session creation, session maintenance).
 * @param {Object} config
 */

function ProtectionController(config) {

    config = config || {};
    var protectionKeyController = config.protectionKeyController;
    var protectionModel = config.protectionModel;
    var eventBus = config.eventBus;
    var events = config.events;
    var debug = config.debug;
    var BASE64 = config.BASE64;
    var constants = config.constants;
    var needkeyRetries = [];

    var instance = undefined,
        logger = undefined,
        pendingNeedKeyData = undefined,
        mediaInfoArr = undefined,
        protDataSet = undefined,
        sessionType = undefined,
        robustnessLevel = undefined,
        keySystem = undefined;

    function setup() {
        logger = debug.getLogger(instance);
        pendingNeedKeyData = [];
        mediaInfoArr = [];
        sessionType = 'temporary';
        robustnessLevel = '';
    }

    function checkConfig() {
        if (!eventBus || !eventBus.hasOwnProperty('on') || !protectionKeyController || !protectionKeyController.hasOwnProperty('getSupportedKeySystemsFromContentProtection')) {
            throw new Error('Missing config parameter(s)');
        }
    }

    /**
     * Initialize this protection system with a given audio
     * or video stream information.
     *
     * @param {StreamInfo} [mediaInfo] Media information
     * @memberof module:ProtectionController
     * @instance
     * @todo This API will change when we have better support for allowing applications
     * to select different adaptation sets for playback.  Right now it is clunky for
     * applications to create {@link StreamInfo} with the right information,
     */
    function initializeForMedia(mediaInfo) {
        // Not checking here if a session for similar KS/KID combination is already created
        // because still don't know which keysystem will be selected.
        // Once Keysystem is selected and before creating the session, we will do that check
        // so we create the strictly necessary DRM sessions
        if (!mediaInfo) {
            throw new Error('mediaInfo can not be null or undefined');
        }

        checkConfig();

        eventBus.on(events.INTERNAL_KEY_MESSAGE, onKeyMessage, this);
        eventBus.on(events.INTERNAL_KEY_STATUS_CHANGED, onKeyStatusChanged, this);

        mediaInfoArr.push(mediaInfo);

        // ContentProtection elements are specified at the AdaptationSet level, so the CP for audio
        // and video will be the same.  Just use one valid MediaInfo object
        var supportedKS = protectionKeyController.getSupportedKeySystemsFromContentProtection(mediaInfo.contentProtection);
        if (supportedKS && supportedKS.length > 0) {
            selectKeySystem(supportedKS, true);
        }
    }

    /**
     * Returns a set of supported key systems and CENC initialization data
     * from the given array of ContentProtection elements.  Only
     * key systems that are supported by this player will be returned.
     * Key systems are returned in priority order (highest first).
     *
     * @param {Array.<Object>} cps - array of content protection elements parsed
     * from the manifest
     * @returns {Array.<Object>} array of objects indicating which supported key
     * systems were found.  Empty array is returned if no
     * supported key systems were found
     * @memberof module:ProtectionKeyController
     * @instance
     */
    function getSupportedKeySystemsFromContentProtection(cps) {
        return protectionKeyController.getSupportedKeySystemsFromContentProtection(cps);
    }

    /**
     * Create a new key session associated with the given initialization data from
     * the MPD or from the PSSH box in the media
     *
     * @param {ArrayBuffer} initData the initialization data
     * @param {Uint8Array} cdmData the custom data to provide to licenser
     * @memberof module:ProtectionController
     * @instance
     * @fires ProtectionController#KeySessionCreated
     * @todo In older versions of the EME spec, there was a one-to-one relationship between
     * initialization data and key sessions.  That is no longer true in the latest APIs.  This
     * API will need to modified (and a new "generateRequest(keySession, initData)" API created)
     * to come up to speed with the latest EME standard
     */
    function createKeySession(initData, cdmData) {
        var initDataForKS = _CommonEncryption2['default'].getPSSHForKeySystem(keySystem, initData);
        var protData = getProtData(keySystem);
        if (initDataForKS) {

            // Check for duplicate initData
            var currentInitData = protectionModel.getAllInitData();
            for (var i = 0; i < currentInitData.length; i++) {
                if (protectionKeyController.initDataEquals(initDataForKS, currentInitData[i])) {
                    logger.warn('DRM: Ignoring initData because we have already seen it!');
                    return;
                }
            }
            try {
                protectionModel.createKeySession(initDataForKS, protData, getSessionType(keySystem), cdmData);
            } catch (error) {
                eventBus.trigger(events.KEY_SESSION_CREATED, { data: null, error: new _voDashJSError2['default'](_errorsProtectionErrors2['default'].KEY_SESSION_CREATED_ERROR_CODE, _errorsProtectionErrors2['default'].KEY_SESSION_CREATED_ERROR_MESSAGE + error.message) });
            }
        } else if (initData) {
            protectionModel.createKeySession(initData, protData, getSessionType(keySystem), cdmData);
        } else {
            eventBus.trigger(events.KEY_SESSION_CREATED, { data: null, error: new _voDashJSError2['default'](_errorsProtectionErrors2['default'].KEY_SESSION_CREATED_ERROR_CODE, _errorsProtectionErrors2['default'].KEY_SESSION_CREATED_ERROR_MESSAGE + 'Selected key system is ' + keySystem.systemString + '.  needkey/encrypted event contains no initData corresponding to that key system!') });
        }
    }

    /**
     * Loads a key session with the given session ID from persistent storage.  This
     * essentially creates a new key session
     *
     * @param {string} sessionID
     * @param {string} initData
     * @memberof module:ProtectionController
     * @instance
     * @fires ProtectionController#KeySessionCreated
     */
    function loadKeySession(sessionID, initData) {
        protectionModel.loadKeySession(sessionID, initData, getSessionType(keySystem));
    }

    /**
     * Removes the given key session from persistent storage and closes the session
     * as if {@link ProtectionController#closeKeySession}
     * was called
     *
     * @param {SessionToken} sessionToken the session
     * token
     * @memberof module:ProtectionController
     * @instance
     * @fires ProtectionController#KeySessionRemoved
     * @fires ProtectionController#KeySessionClosed
     */
    function removeKeySession(sessionToken) {
        protectionModel.removeKeySession(sessionToken);
    }

    /**
     * Closes the key session and releases all associated decryption keys.  These
     * keys will no longer be available for decrypting media
     *
     * @param {SessionToken} sessionToken the session
     * token
     * @memberof module:ProtectionController
     * @instance
     * @fires ProtectionController#KeySessionClosed
     */
    function closeKeySession(sessionToken) {
        protectionModel.closeKeySession(sessionToken);
    }

    /**
     * Sets a server certificate for use by the CDM when signing key messages
     * intended for a particular license server.  This will fire
     * an error event if a key system has not yet been selected.
     *
     * @param {ArrayBuffer} serverCertificate a CDM-specific license server
     * certificate
     * @memberof module:ProtectionController
     * @instance
     * @fires ProtectionController#ServerCertificateUpdated
     */
    function setServerCertificate(serverCertificate) {
        protectionModel.setServerCertificate(serverCertificate);
    }

    /**
     * Associate this protection system with the given HTMLMediaElement.  This
     * causes the system to register for needkey/encrypted events from the given
     * element and provides a destination for setting of MediaKeys
     *
     * @param {HTMLMediaElement} element the media element to which the protection
     * system should be associated
     * @memberof module:ProtectionController
     * @instance
     */
    function setMediaElement(element) {
        if (element) {
            protectionModel.setMediaElement(element);
            eventBus.on(events.NEED_KEY, onNeedKey, this);
        } else if (element === null) {
            protectionModel.setMediaElement(element);
            eventBus.off(events.NEED_KEY, onNeedKey, this);
        }
    }

    /**
     * Sets the session type to use when creating key sessions.  Either "temporary" or
     * "persistent-license".  Default is "temporary".
     *
     * @param {string} value the session type
     * @memberof module:ProtectionController
     * @instance
     */
    function setSessionType(value) {
        sessionType = value;
    }

    /**
     * Sets the robustness level for video and audio capabilities. Optional to remove Chrome warnings.
     * Possible values are SW_SECURE_CRYPTO, SW_SECURE_DECODE, HW_SECURE_CRYPTO, HW_SECURE_CRYPTO, HW_SECURE_DECODE, HW_SECURE_ALL.
     *
     * @param {string} level the robustness level
     * @memberof module:ProtectionController
     * @instance
     */
    function setRobustnessLevel(level) {
        robustnessLevel = level;
    }

    /**
     * Attach KeySystem-specific data to use for license acquisition with EME
     *
     * @param {Object} data an object containing property names corresponding to
     * key system name strings (e.g. "org.w3.clearkey") and associated values
     * being instances of {@link ProtectionData}
     * @memberof module:ProtectionController
     * @instance
     */
    function setProtectionData(data) {
        protDataSet = data;
        protectionKeyController.setProtectionData(data);
    }

    /**
     * Stop method is called when current playback is stopped/resetted.
     *
     * @memberof module:ProtectionController
     * @instance
     */
    function stop() {
        if (protectionModel) {
            protectionModel.stop();
        }
    }

    /**
     * Destroys all protection data associated with this protection set.  This includes
     * deleting all key sessions. In the case of persistent key sessions, the sessions
     * will simply be unloaded and not deleted.  Additionally, if this protection set is
     * associated with a HTMLMediaElement, it will be detached from that element.
     *
     * @memberof module:ProtectionController
     * @instance
     */
    function reset() {

        eventBus.off(events.INTERNAL_KEY_MESSAGE, onKeyMessage, this);
        eventBus.off(events.INTERNAL_KEY_STATUS_CHANGED, onKeyStatusChanged, this);

        setMediaElement(null);

        keySystem = undefined; //TODO-Refactor look at why undefined is needed for this. refactor

        if (protectionModel) {
            protectionModel.reset();
            protectionModel = null;
        }

        needkeyRetries.forEach(function (retryTimeout) {
            return clearTimeout(retryTimeout);
        });
        needkeyRetries = [];

        mediaInfoArr = [];
    }

    ///////////////
    // Private
    ///////////////

    function getProtData(keySystem) {
        var protData = null;
        if (keySystem) {
            var keySystemString = keySystem.systemString;

            if (protDataSet) {
                protData = keySystemString in protDataSet ? protDataSet[keySystemString] : null;
            }
        }
        return protData;
    }

    function getKeySystemConfiguration(keySystem) {
        var protData = getProtData(keySystem);
        var audioCapabilities = [];
        var videoCapabilities = [];
        var audioRobustness = protData && protData.audioRobustness && protData.audioRobustness.length > 0 ? protData.audioRobustness : robustnessLevel;
        var videoRobustness = protData && protData.videoRobustness && protData.videoRobustness.length > 0 ? protData.videoRobustness : robustnessLevel;
        var ksSessionType = getSessionType(keySystem);
        var distinctiveIdentifier = protData && protData.distinctiveIdentifier ? protData.distinctiveIdentifier : 'optional';
        var persistentState = protData && protData.persistentState ? protData.persistentState : ksSessionType === 'temporary' ? 'optional' : 'required';

        mediaInfoArr.forEach(function (media) {
            if (media.type === constants.AUDIO) {
                audioCapabilities.push(new _voMediaCapability2['default'](media.codec, audioRobustness));
            } else if (media.type === constants.VIDEO) {
                videoCapabilities.push(new _voMediaCapability2['default'](media.codec, videoRobustness));
            }
        });

        return new _voKeySystemConfiguration2['default'](audioCapabilities, videoCapabilities, distinctiveIdentifier, persistentState, [ksSessionType]);
    }

    function getSessionType(keySystem) {
        var protData = getProtData(keySystem);
        var ksSessionType = protData && protData.sessionType ? protData.sessionType : sessionType;
        return ksSessionType;
    }

    function selectKeySystem(supportedKS, fromManifest) {
        var self = this;
        var requestedKeySystems = [];

        var ksIdx = undefined;
        if (keySystem) {
            // We have a key system
            for (ksIdx = 0; ksIdx < supportedKS.length; ksIdx++) {
                if (keySystem === supportedKS[ksIdx].ks) {
                    var _ret = (function () {

                        requestedKeySystems.push({ ks: supportedKS[ksIdx].ks, configs: [getKeySystemConfiguration(keySystem)] });

                        // Ensure that we would be granted key system access using the key
                        // system and codec information
                        var onKeySystemAccessComplete = function onKeySystemAccessComplete(event) {
                            eventBus.off(events.KEY_SYSTEM_ACCESS_COMPLETE, onKeySystemAccessComplete, self);
                            if (event.error) {
                                if (!fromManifest) {
                                    eventBus.trigger(events.KEY_SYSTEM_SELECTED, { error: new _voDashJSError2['default'](_errorsProtectionErrors2['default'].KEY_SYSTEM_ACCESS_DENIED_ERROR_CODE, _errorsProtectionErrors2['default'].KEY_SYSTEM_ACCESS_DENIED_ERROR_MESSAGE + event.error) });
                                }
                            } else {
                                logger.info('DRM: KeySystem Access Granted');
                                eventBus.trigger(events.KEY_SYSTEM_SELECTED, { data: event.data });
                                if (supportedKS[ksIdx].sessionId) {
                                    // Load MediaKeySession with sessionId
                                    loadKeySession(supportedKS[ksIdx].sessionId, supportedKS[ksIdx].initData);
                                } else if (supportedKS[ksIdx].initData) {
                                    // Create new MediaKeySession with initData
                                    createKeySession(supportedKS[ksIdx].initData, supportedKS[ksIdx].cdmData);
                                }
                            }
                        };
                        eventBus.on(events.KEY_SYSTEM_ACCESS_COMPLETE, onKeySystemAccessComplete, self);
                        protectionModel.requestKeySystemAccess(requestedKeySystems);
                        return 'break';
                    })();

                    if (_ret === 'break') break;
                }
            }
        } else if (keySystem === undefined) {
            var onKeySystemSelected;

            (function () {
                // First time through, so we need to select a key system
                keySystem = null;
                pendingNeedKeyData.push(supportedKS);

                // Add all key systems to our request list since we have yet to select a key system
                for (var i = 0; i < supportedKS.length; i++) {
                    requestedKeySystems.push({ ks: supportedKS[i].ks, configs: [getKeySystemConfiguration(supportedKS[i].ks)] });
                }

                var keySystemAccess = undefined;
                var onKeySystemAccessComplete = function onKeySystemAccessComplete(event) {
                    eventBus.off(events.KEY_SYSTEM_ACCESS_COMPLETE, onKeySystemAccessComplete, self);
                    if (event.error) {
                        keySystem = undefined;
                        eventBus.off(events.INTERNAL_KEY_SYSTEM_SELECTED, onKeySystemSelected, self);
                        if (!fromManifest) {
                            eventBus.trigger(events.KEY_SYSTEM_SELECTED, { data: null, error: new _voDashJSError2['default'](_errorsProtectionErrors2['default'].KEY_SYSTEM_ACCESS_DENIED_ERROR_CODE, _errorsProtectionErrors2['default'].KEY_SYSTEM_ACCESS_DENIED_ERROR_MESSAGE + event.error) });
                        }
                    } else {
                        keySystemAccess = event.data;
                        logger.info('DRM: KeySystem Access Granted (' + keySystemAccess.keySystem.systemString + ')!  Selecting key system...');
                        protectionModel.selectKeySystem(keySystemAccess);
                    }
                };

                onKeySystemSelected = function onKeySystemSelected(event) {
                    eventBus.off(events.INTERNAL_KEY_SYSTEM_SELECTED, onKeySystemSelected, self);
                    eventBus.off(events.KEY_SYSTEM_ACCESS_COMPLETE, onKeySystemAccessComplete, self);
                    if (!event.error) {
                        if (!protectionModel) {
                            return;
                        }
                        keySystem = protectionModel.getKeySystem();
                        eventBus.trigger(events.KEY_SYSTEM_SELECTED, { data: keySystemAccess });
                        // Set server certificate from protData
                        var protData = getProtData(keySystem);
                        if (protData && protData.serverCertificate && protData.serverCertificate.length > 0) {
                            protectionModel.setServerCertificate(BASE64.decodeArray(protData.serverCertificate).buffer);
                        }
                        for (var i = 0; i < pendingNeedKeyData.length; i++) {
                            for (ksIdx = 0; ksIdx < pendingNeedKeyData[i].length; ksIdx++) {
                                if (keySystem === pendingNeedKeyData[i][ksIdx].ks) {
                                    // For Clearkey: if parameters for generating init data was provided by the user, use them for generating
                                    // initData and overwrite possible initData indicated in encrypted event (EME)
                                    if (protectionKeyController.isClearKey(keySystem) && protData && protData.hasOwnProperty('clearkeys')) {
                                        var initData = { kids: Object.keys(protData.clearkeys) };
                                        pendingNeedKeyData[i][ksIdx].initData = new TextEncoder().encode(JSON.stringify(initData));
                                    }
                                    if (pendingNeedKeyData[i][ksIdx].sessionId) {
                                        // Load MediaKeySession with sessionId
                                        loadKeySession(pendingNeedKeyData[i][ksIdx].sessionId, pendingNeedKeyData[i][ksIdx].initData);
                                    } else if (pendingNeedKeyData[i][ksIdx].initData !== null) {
                                        // Create new MediaKeySession with initData
                                        createKeySession(pendingNeedKeyData[i][ksIdx].initData, pendingNeedKeyData[i][ksIdx].cdmData);
                                    }
                                    break;
                                }
                            }
                        }
                    } else {
                        keySystem = undefined;
                        if (!fromManifest) {
                            eventBus.trigger(events.KEY_SYSTEM_SELECTED, { data: null, error: new _voDashJSError2['default'](_errorsProtectionErrors2['default'].KEY_SYSTEM_ACCESS_DENIED_ERROR_CODE, _errorsProtectionErrors2['default'].KEY_SYSTEM_ACCESS_DENIED_ERROR_MESSAGE + 'Error selecting key system! -- ' + event.error) });
                        }
                    }
                };

                eventBus.on(events.INTERNAL_KEY_SYSTEM_SELECTED, onKeySystemSelected, self);
                eventBus.on(events.KEY_SYSTEM_ACCESS_COMPLETE, onKeySystemAccessComplete, self);
                protectionModel.requestKeySystemAccess(requestedKeySystems);
            })();
        } else {
            // We are in the process of selecting a key system, so just save the data
            pendingNeedKeyData.push(supportedKS);
        }
    }

    function sendLicenseRequestCompleteEvent(data, error) {
        eventBus.trigger(events.LICENSE_REQUEST_COMPLETE, { data: data, error: error });
    }

    function onKeyStatusChanged(e) {
        if (e.error) {
            eventBus.trigger(events.KEY_STATUSES_CHANGED, { data: null, error: e.error });
        } else {
            logger.debug('DRM: key status = ' + e.status);
        }
    }

    function onKeyMessage(e) {
        logger.debug('DRM: onKeyMessage');

        // Dispatch event to applications indicating we received a key message
        var keyMessage = e.data;
        eventBus.trigger(events.KEY_MESSAGE, { data: keyMessage });
        var messageType = keyMessage.messageType ? keyMessage.messageType : 'license-request';
        var message = keyMessage.message;
        var sessionToken = keyMessage.sessionToken;
        var protData = getProtData(keySystem);
        var keySystemString = keySystem ? keySystem.systemString : null;
        var licenseServerData = protectionKeyController.getLicenseServer(keySystem, protData, messageType);
        var eventData = { sessionToken: sessionToken, messageType: messageType };

        // Ensure message from CDM is not empty
        if (!message || message.byteLength === 0) {
            sendLicenseRequestCompleteEvent(eventData, new _voDashJSError2['default'](_errorsProtectionErrors2['default'].MEDIA_KEY_MESSAGE_NO_CHALLENGE_ERROR_CODE, _errorsProtectionErrors2['default'].MEDIA_KEY_MESSAGE_NO_CHALLENGE_ERROR_MESSAGE));
            return;
        }

        // Message not destined for license server
        if (!licenseServerData) {
            logger.debug('DRM: License server request not required for this message (type = ' + e.data.messageType + ').  Session ID = ' + sessionToken.getSessionID());
            sendLicenseRequestCompleteEvent(eventData);
            return;
        }

        // Perform any special handling for ClearKey
        if (protectionKeyController.isClearKey(keySystem)) {
            var clearkeys = protectionKeyController.processClearKeyLicenseRequest(keySystem, protData, message);
            if (clearkeys) {
                logger.debug('DRM: ClearKey license request handled by application!');
                sendLicenseRequestCompleteEvent(eventData);
                protectionModel.updateKeySession(sessionToken, clearkeys);
                return;
            }
        }

        // All remaining key system scenarios require a request to a remote license server
        // Determine license server URL
        var url = null;
        if (protData && protData.serverURL) {
            var serverURL = protData.serverURL;
            if (typeof serverURL === 'string' && serverURL !== '') {
                url = serverURL;
            } else if (typeof serverURL === 'object' && serverURL.hasOwnProperty(messageType)) {
                url = serverURL[messageType];
            }
        } else if (protData && protData.laURL && protData.laURL !== '') {
            // TODO: Deprecated!
            url = protData.laURL;
        } else {
            url = keySystem.getLicenseServerURLFromInitData(_CommonEncryption2['default'].getPSSHData(sessionToken.initData));
            if (!url) {
                url = e.data.laURL;
            }
        }
        // Possibly update or override the URL based on the message
        url = licenseServerData.getServerURLFromMessage(url, message, messageType);

        // Ensure valid license server URL
        if (!url) {
            sendLicenseRequestCompleteEvent(eventData, new _voDashJSError2['default'](_errorsProtectionErrors2['default'].MEDIA_KEY_MESSAGE_NO_LICENSE_SERVER_URL_ERROR_CODE, _errorsProtectionErrors2['default'].MEDIA_KEY_MESSAGE_NO_LICENSE_SERVER_URL_ERROR_MESSAGE));
            return;
        }

        // Set optional XMLHttpRequest headers from protection data and message
        var reqHeaders = {};
        var withCredentials = false;
        var updateHeaders = function updateHeaders(headers) {
            if (headers) {
                for (var key in headers) {
                    if ('authorization' === key.toLowerCase()) {
                        withCredentials = true;
                    }
                    reqHeaders[key] = headers[key];
                }
            }
        };
        if (protData) {
            updateHeaders(protData.httpRequestHeaders);
        }
        updateHeaders(keySystem.getRequestHeadersFromMessage(message));

        // Overwrite withCredentials property from protData if present
        if (protData && typeof protData.withCredentials == 'boolean') {
            withCredentials = protData.withCredentials;
        }

        var reportError = function reportError(xhr, eventData, keySystemString, messageType) {
            var errorMsg = xhr.response ? licenseServerData.getErrorResponse(xhr.response, keySystemString, messageType) : 'NONE';
            sendLicenseRequestCompleteEvent(eventData, new _voDashJSError2['default'](_errorsProtectionErrors2['default'].MEDIA_KEY_MESSAGE_LICENSER_ERROR_CODE, _errorsProtectionErrors2['default'].MEDIA_KEY_MESSAGE_LICENSER_ERROR_MESSAGE + keySystemString + ' update, XHR complete. status is "' + xhr.statusText + '" (' + xhr.status + '), readyState is ' + xhr.readyState + '.  Response is ' + errorMsg));
        };

        var onLoad = function onLoad(xhr) {
            if (!protectionModel) {
                return;
            }

            if (xhr.status === 200) {
                var licenseMessage = licenseServerData.getLicenseMessage(xhr.response, keySystemString, messageType);
                if (licenseMessage !== null) {
                    sendLicenseRequestCompleteEvent(eventData);
                    protectionModel.updateKeySession(sessionToken, licenseMessage);
                } else {
                    reportError(xhr, eventData, keySystemString, messageType);
                }
            } else {
                reportError(xhr, eventData, keySystemString, messageType);
            }
        };

        var onAbort = function onAbort(xhr) {
            sendLicenseRequestCompleteEvent(eventData, new _voDashJSError2['default'](_errorsProtectionErrors2['default'].MEDIA_KEY_MESSAGE_LICENSER_ERROR_CODE, _errorsProtectionErrors2['default'].MEDIA_KEY_MESSAGE_LICENSER_ERROR_MESSAGE + keySystemString + ' update, XHR aborted. status is "' + xhr.statusText + '" (' + xhr.status + '), readyState is ' + xhr.readyState));
        };

        var onError = function onError(xhr) {
            sendLicenseRequestCompleteEvent(eventData, new _voDashJSError2['default'](_errorsProtectionErrors2['default'].MEDIA_KEY_MESSAGE_LICENSER_ERROR_CODE, _errorsProtectionErrors2['default'].MEDIA_KEY_MESSAGE_LICENSER_ERROR_MESSAGE + keySystemString + ' update, XHR error. status is "' + xhr.statusText + '" (' + xhr.status + '), readyState is ' + xhr.readyState));
        };

        var reqPayload = keySystem.getLicenseRequestFromMessage(message);
        var reqMethod = licenseServerData.getHTTPMethod(messageType);
        var responseType = licenseServerData.getResponseType(keySystemString, messageType);
        var timeout = protData && !isNaN(protData.httpTimeout) ? protData.httpTimeout : LICENSE_SERVER_REQUEST_DEFAULT_TIMEOUT;

        doLicenseRequest(url, reqHeaders, reqMethod, responseType, withCredentials, reqPayload, LICENSE_SERVER_REQUEST_RETRIES, timeout, onLoad, onAbort, onError);
    }

    // Implement license requests with a retry mechanism to avoid temporary network issues to affect playback experience
    function doLicenseRequest(url, headers, method, responseType, withCredentials, payload, retriesCount, timeout, onLoad, onAbort, onError) {
        var xhr = new XMLHttpRequest();

        xhr.open(method, url, true);
        xhr.responseType = responseType;
        xhr.withCredentials = withCredentials;
        if (timeout > 0) {
            xhr.timeout = timeout;
        }
        for (var key in headers) {
            xhr.setRequestHeader(key, headers[key]);
        }

        var retryRequest = function retryRequest() {
            // fail silently and retry
            retriesCount--;
            setTimeout(function () {
                doLicenseRequest(url, headers, method, responseType, withCredentials, payload, retriesCount, timeout, onLoad, onAbort, onError);
            }, LICENSE_SERVER_REQUEST_RETRY_INTERVAL);
        };

        xhr.onload = function () {
            if (this.status === 200 || retriesCount <= 0) {
                onLoad(this);
            } else {
                logger.warn('License request failed (' + this.status + '). Retrying it... Pending retries: ' + retriesCount);
                retryRequest();
            }
        };

        xhr.ontimeout = xhr.onerror = function () {
            if (retriesCount <= 0) {
                onError(this);
            } else {
                logger.warn('License request network request failed . Retrying it... Pending retries: ' + retriesCount);
                retryRequest();
            }
        };

        xhr.onabort = function () {
            onAbort(this);
        };

        xhr.send(payload);
    }

    function onNeedKey(event, retry) {
        logger.debug('DRM: onNeedKey');
        // Ignore non-cenc initData
        if (event.key.initDataType !== 'cenc') {
            logger.warn('DRM:  Only \'cenc\' initData is supported!  Ignoring initData of type: ' + event.key.initDataType);
            return;
        }

        if (mediaInfoArr.length === 0) {
            logger.warn('DRM: onNeedKey called before initializeForMedia, wait until initialized');
            retry = typeof retry === 'undefined' ? 1 : retry + 1;
            if (retry < NEEDKEY_BEFORE_INITIALIZE_RETRIES) {
                needkeyRetries.push(setTimeout(function () {
                    onNeedKey(event, retry);
                }, NEEDKEY_BEFORE_INITIALIZE_TIMEOUT));
                return;
            }
        }

        // Some browsers return initData as Uint8Array (IE), some as ArrayBuffer (Chrome).
        // Convert to ArrayBuffer
        var abInitData = event.key.initData;
        if (ArrayBuffer.isView(abInitData)) {
            abInitData = abInitData.buffer;
        }

        // If key system has already been selected and initData already seen, then do nothing
        if (keySystem) {
            var initDataForKS = _CommonEncryption2['default'].getPSSHForKeySystem(keySystem, abInitData);
            if (initDataForKS) {

                // Check for duplicate initData
                var currentInitData = protectionModel.getAllInitData();
                for (var i = 0; i < currentInitData.length; i++) {
                    if (protectionKeyController.initDataEquals(initDataForKS, currentInitData[i])) {
                        logger.warn('DRM: Ignoring initData because we have already seen it!');
                        return;
                    }
                }
            }
        }

        logger.debug('DRM: initData:', String.fromCharCode.apply(null, new Uint8Array(abInitData)));

        var supportedKS = protectionKeyController.getSupportedKeySystems(abInitData, protDataSet);
        if (supportedKS.length === 0) {
            logger.debug('DRM: Received needkey event with initData, but we don\'t support any of the key systems!');
            return;
        }

        selectKeySystem(supportedKS, false);
    }

    function getKeySystems() {
        return protectionKeyController ? protectionKeyController.getKeySystems() : [];
    }

    instance = {
        initializeForMedia: initializeForMedia,
        createKeySession: createKeySession,
        loadKeySession: loadKeySession,
        removeKeySession: removeKeySession,
        closeKeySession: closeKeySession,
        setServerCertificate: setServerCertificate,
        setMediaElement: setMediaElement,
        setSessionType: setSessionType,
        setRobustnessLevel: setRobustnessLevel,
        setProtectionData: setProtectionData,
        getSupportedKeySystemsFromContentProtection: getSupportedKeySystemsFromContentProtection,
        getKeySystems: getKeySystems,
        stop: stop,
        reset: reset
    };

    setup();
    return instance;
}

ProtectionController.__dashjs_factory_name = 'ProtectionController';
exports['default'] = dashjs.FactoryMaker.getClassFactory(ProtectionController);
/* jshint ignore:line */
module.exports = exports['default'];

},{"13":13,"25":25,"26":26,"28":28,"4":4}],8:[function(_dereq_,module,exports){
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

var _CommonEncryption = _dereq_(4);

var _CommonEncryption2 = _interopRequireDefault(_CommonEncryption);

var _drmKeySystemClearKey = _dereq_(9);

var _drmKeySystemClearKey2 = _interopRequireDefault(_drmKeySystemClearKey);

var _drmKeySystemW3CClearKey = _dereq_(11);

var _drmKeySystemW3CClearKey2 = _interopRequireDefault(_drmKeySystemW3CClearKey);

var _drmKeySystemWidevine = _dereq_(12);

var _drmKeySystemWidevine2 = _interopRequireDefault(_drmKeySystemWidevine);

var _drmKeySystemPlayReady = _dereq_(10);

var _drmKeySystemPlayReady2 = _interopRequireDefault(_drmKeySystemPlayReady);

var _serversDRMToday = _dereq_(18);

var _serversDRMToday2 = _interopRequireDefault(_serversDRMToday);

var _serversPlayReady = _dereq_(19);

var _serversPlayReady2 = _interopRequireDefault(_serversPlayReady);

var _serversWidevine = _dereq_(20);

var _serversWidevine2 = _interopRequireDefault(_serversWidevine);

var _serversClearKey = _dereq_(17);

var _serversClearKey2 = _interopRequireDefault(_serversClearKey);

var _constantsProtectionConstants = _dereq_(3);

var _constantsProtectionConstants2 = _interopRequireDefault(_constantsProtectionConstants);

/**
 * @module ProtectionKeyController
 * @description Media protection key system functionality that can be modified/overridden by applications
 */
function ProtectionKeyController() {

    var context = this.context;

    var instance = undefined,
        debug = undefined,
        logger = undefined,
        keySystems = undefined,
        BASE64 = undefined,
        clearkeyKeySystem = undefined,
        clearkeyW3CKeySystem = undefined;

    function setConfig(config) {
        if (!config) return;

        if (config.debug) {
            debug = config.debug;
            logger = debug.getLogger(instance);
        }

        if (config.BASE64) {
            BASE64 = config.BASE64;
        }
    }

    function initialize() {
        keySystems = [];

        var keySystem = undefined;

        // PlayReady
        keySystem = (0, _drmKeySystemPlayReady2['default'])(context).getInstance({ BASE64: BASE64 });
        keySystems.push(keySystem);

        // Widevine
        keySystem = (0, _drmKeySystemWidevine2['default'])(context).getInstance({ BASE64: BASE64 });
        keySystems.push(keySystem);

        // ClearKey
        keySystem = (0, _drmKeySystemClearKey2['default'])(context).getInstance({ BASE64: BASE64 });
        keySystems.push(keySystem);
        clearkeyKeySystem = keySystem;

        // W3C ClearKey
        keySystem = (0, _drmKeySystemW3CClearKey2['default'])(context).getInstance({ BASE64: BASE64, debug: debug });
        keySystems.push(keySystem);
        clearkeyW3CKeySystem = keySystem;
    }

    /**
     * Returns a prioritized list of key systems supported
     * by this player (not necessarily those supported by the
     * user agent)
     *
     * @returns {Array.<KeySystem>} a prioritized
     * list of key systems
     * @memberof module:ProtectionKeyController
     * @instance
     */
    function getKeySystems() {
        return keySystems;
    }

    /**
     * Returns the key system associated with the given key system string
     * name (i.e. 'org.w3.clearkey')
     *
     * @param {string} systemString the system string
     * @returns {KeySystem|null} the key system
     * or null if no supported key system is associated with the given key
     * system string
     * @memberof module:ProtectionKeyController
     * @instance
     */
    function getKeySystemBySystemString(systemString) {
        for (var i = 0; i < keySystems.length; i++) {
            if (keySystems[i].systemString === systemString) {
                return keySystems[i];
            }
        }
        return null;
    }

    /**
     * Determines whether the given key system is ClearKey.  This is
     * necessary because the EME spec defines ClearKey and its method
     * for providing keys to the key session; and this method has changed
     * between the various API versions.  Our EME-specific ProtectionModels
     * must know if the system is ClearKey so that it can format the keys
     * according to the particular spec version.
     *
     * @param {Object} keySystem the key
     * @returns {boolean} true if this is the ClearKey key system, false
     * otherwise
     * @memberof module:ProtectionKeyController
     * @instance
     */
    function isClearKey(keySystem) {
        return keySystem === clearkeyKeySystem || keySystem === clearkeyW3CKeySystem;
    }

    /**
     * Check equality of initData array buffers.
     *
     * @param {ArrayBuffer} initData1 - first initData
     * @param {ArrayBuffer} initData2 - second initData
     * @returns {boolean} true if the initData arrays are equal in size and
     * contents, false otherwise
     * @memberof module:ProtectionKeyController
     * @instance
     */
    function initDataEquals(initData1, initData2) {
        if (initData1.byteLength === initData2.byteLength) {
            var data1 = new Uint8Array(initData1);
            var data2 = new Uint8Array(initData2);

            for (var j = 0; j < data1.length; j++) {
                if (data1[j] !== data2[j]) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    /**
     * Returns a set of supported key systems and CENC initialization data
     * from the given array of ContentProtection elements.  Only
     * key systems that are supported by this player will be returned.
     * Key systems are returned in priority order (highest first).
     *
     * @param {Array.<Object>} cps - array of content protection elements parsed
     * from the manifest
     * @returns {Array.<Object>} array of objects indicating which supported key
     * systems were found.  Empty array is returned if no
     * supported key systems were found
     * @memberof module:ProtectionKeyController
     * @instance
     */
    function getSupportedKeySystemsFromContentProtection(cps) {
        var cp = undefined,
            ks = undefined,
            ksIdx = undefined,
            cpIdx = undefined;
        var supportedKS = [];

        if (cps) {
            for (ksIdx = 0; ksIdx < keySystems.length; ++ksIdx) {
                ks = keySystems[ksIdx];
                for (cpIdx = 0; cpIdx < cps.length; ++cpIdx) {
                    cp = cps[cpIdx];
                    if (cp.schemeIdUri.toLowerCase() === ks.schemeIdURI) {
                        // Look for DRM-specific ContentProtection
                        var initData = ks.getInitData(cp);
                        if (!!initData) {
                            supportedKS.push({
                                ks: keySystems[ksIdx],
                                initData: initData,
                                cdmData: ks.getCDMData(),
                                sessionId: ks.getSessionId(cp)
                            });
                        } else if (this.isClearKey(ks)) {
                            supportedKS.push({
                                ks: ks,
                                initData: null
                            });
                        }
                    }
                }
            }
        }
        return supportedKS;
    }

    /**
     * Returns key systems supported by this player for the given PSSH
     * initializationData. Only key systems supported by this player
     * that have protection data present will be returned.  Key systems are returned in priority order
     * (highest priority first)
     *
     * @param {ArrayBuffer} initData Concatenated PSSH data for all DRMs
     * supported by the content
     * @param {ProtectionData} protDataSet user specified protection data - license server url etc
     * supported by the content
     * @returns {Array.<Object>} array of objects indicating which supported key
     * systems were found.  Empty array is returned if no
     * supported key systems were found
     * @memberof module:ProtectionKeyController
     * @instance
     */
    function getSupportedKeySystems(initData, protDataSet) {
        var supportedKS = [];
        var pssh = _CommonEncryption2['default'].parsePSSHList(initData);
        var ks = undefined,
            keySystemString = undefined,
            shouldNotFilterOutKeySystem = undefined;

        for (var ksIdx = 0; ksIdx < keySystems.length; ++ksIdx) {
            ks = keySystems[ksIdx];
            keySystemString = ks.systemString;
            shouldNotFilterOutKeySystem = protDataSet ? keySystemString in protDataSet : true;

            if (ks.uuid in pssh && shouldNotFilterOutKeySystem) {
                supportedKS.push({
                    ks: ks,
                    initData: pssh[ks.uuid],
                    cdmData: ks.getCDMData(),
                    sessionId: ks.getSessionId()
                });
            }
        }
        return supportedKS;
    }

    /**
     * Returns the license server implementation data that should be used for this request.
     *
     * @param {KeySystem} keySystem the key system
     * associated with this license request
     * @param {ProtectionData} protData protection data to use for the
     * request
     * @param {string} [messageType="license-request"] the message type associated with this
     * request.  Supported message types can be found
     * {@link https://w3c.github.io/encrypted-media/#idl-def-MediaKeyMessageType|here}.
     * @returns {LicenseServer|null} the license server
     * implementation that should be used for this request or null if the player should not
     * pass messages of the given type to a license server
     * @memberof module:ProtectionKeyController
     * @instance
     *
     */
    function getLicenseServer(keySystem, protData, messageType) {

        // Our default server implementations do not do anything with "license-release" or
        // "individualization-request" messages, so we just send a success event
        if (messageType === 'license-release' || messageType === 'individualization-request') {
            return null;
        }

        var licenseServerData = null;
        if (protData && protData.hasOwnProperty('drmtoday')) {
            licenseServerData = (0, _serversDRMToday2['default'])(context).getInstance({ BASE64: BASE64 });
        } else if (keySystem.systemString === _constantsProtectionConstants2['default'].WIDEVINE_KEYSTEM_STRING) {
            licenseServerData = (0, _serversWidevine2['default'])(context).getInstance();
        } else if (keySystem.systemString === _constantsProtectionConstants2['default'].PLAYREADY_KEYSTEM_STRING) {
            licenseServerData = (0, _serversPlayReady2['default'])(context).getInstance();
        } else if (keySystem.systemString === _constantsProtectionConstants2['default'].CLEARKEY_KEYSTEM_STRING) {
            licenseServerData = (0, _serversClearKey2['default'])(context).getInstance();
        }

        return licenseServerData;
    }

    /**
     * Allows application-specific retrieval of ClearKey keys.
     *
     * @param {KeySystem} clearkeyKeySystem They exact ClearKey System to be used
     * @param {ProtectionData} protData protection data to use for the
     * request
     * @param {ArrayBuffer} message the key message from the CDM
     * @return {ClearKeyKeySet|null} the clear keys associated with
     * the request or null if no keys can be returned by this function
     * @memberof module:ProtectionKeyController
     * @instance
     */
    function processClearKeyLicenseRequest(clearkeyKeySystem, protData, message) {
        try {
            return clearkeyKeySystem.getClearKeysFromProtectionData(protData, message);
        } catch (error) {
            logger.error('Failed to retrieve clearkeys from ProtectionData');
            return null;
        }
    }

    function setProtectionData(protectionDataSet) {
        var getProtectionData = function getProtectionData(keySystemString) {
            var protData = null;
            if (protectionDataSet) {
                protData = keySystemString in protectionDataSet ? protectionDataSet[keySystemString] : null;
            }
            return protData;
        };

        for (var i = 0; i < keySystems.length; i++) {
            var keySystem = keySystems[i];
            if (keySystem.hasOwnProperty('init')) {
                keySystem.init(getProtectionData(keySystem.systemString));
            }
        }
    }

    instance = {
        initialize: initialize,
        setProtectionData: setProtectionData,
        isClearKey: isClearKey,
        initDataEquals: initDataEquals,
        getKeySystems: getKeySystems,
        getKeySystemBySystemString: getKeySystemBySystemString,
        getSupportedKeySystemsFromContentProtection: getSupportedKeySystemsFromContentProtection,
        getSupportedKeySystems: getSupportedKeySystems,
        getLicenseServer: getLicenseServer,
        processClearKeyLicenseRequest: processClearKeyLicenseRequest,
        setConfig: setConfig
    };

    return instance;
}

ProtectionKeyController.__dashjs_factory_name = 'ProtectionKeyController';
exports['default'] = dashjs.FactoryMaker.getSingletonFactory(ProtectionKeyController);
/* jshint ignore:line */
module.exports = exports['default'];

},{"10":10,"11":11,"12":12,"17":17,"18":18,"19":19,"20":20,"3":3,"4":4,"9":9}],9:[function(_dereq_,module,exports){
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

var _voKeyPair = _dereq_(23);

var _voKeyPair2 = _interopRequireDefault(_voKeyPair);

var _voClearKeyKeySet = _dereq_(21);

var _voClearKeyKeySet2 = _interopRequireDefault(_voClearKeyKeySet);

var _CommonEncryption = _dereq_(4);

var _CommonEncryption2 = _interopRequireDefault(_CommonEncryption);

var _constantsProtectionConstants = _dereq_(3);

var _constantsProtectionConstants2 = _interopRequireDefault(_constantsProtectionConstants);

var uuid = 'e2719d58-a985-b3c9-781a-b030af78d30e';
var systemString = _constantsProtectionConstants2['default'].CLEARKEY_KEYSTEM_STRING;
var schemeIdURI = 'urn:uuid:' + uuid;

function KeySystemClearKey(config) {

    config = config || {};
    var instance = undefined;
    var BASE64 = config.BASE64;

    /**
     * Returns desired clearkeys (as specified in the CDM message) from protection data
     *
     * @param {ProtectionData} protectionData the protection data
     * @param {ArrayBuffer} message the ClearKey CDM message
     * @returns {ClearKeyKeySet} the key set or null if none found
     * @throws {Error} if a keyID specified in the CDM message was not found in the
     * protection data
     * @memberof KeySystemClearKey
     */
    function getClearKeysFromProtectionData(protectionData, message) {
        var clearkeySet = null;
        if (protectionData) {
            // ClearKey is the only system that does not require a license server URL, so we
            // handle it here when keys are specified in protection data
            var jsonMsg = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(message)));
            var keyPairs = [];
            for (var i = 0; i < jsonMsg.kids.length; i++) {
                var clearkeyID = jsonMsg.kids[i];
                var clearkey = protectionData.clearkeys && protectionData.clearkeys.hasOwnProperty(clearkeyID) ? protectionData.clearkeys[clearkeyID] : null;
                if (!clearkey) {
                    throw new Error('DRM: ClearKey keyID (' + clearkeyID + ') is not known!');
                }
                // KeyIDs from CDM are not base64 padded.  Keys may or may not be padded
                keyPairs.push(new _voKeyPair2['default'](clearkeyID, clearkey));
            }
            clearkeySet = new _voClearKeyKeySet2['default'](keyPairs);
        }
        return clearkeySet;
    }

    function getInitData(cp) {
        return _CommonEncryption2['default'].parseInitDataFromContentProtection(cp, BASE64);
    }

    function getRequestHeadersFromMessage() /*message*/{
        return null;
    }

    function getLicenseRequestFromMessage(message) {
        return new Uint8Array(message);
    }

    function getLicenseServerURLFromInitData() /*initData*/{
        return null;
    }

    function getCDMData() {
        return null;
    }

    function getSessionId() /*cp*/{
        return null;
    }

    instance = {
        uuid: uuid,
        schemeIdURI: schemeIdURI,
        systemString: systemString,
        getInitData: getInitData,
        getRequestHeadersFromMessage: getRequestHeadersFromMessage,
        getLicenseRequestFromMessage: getLicenseRequestFromMessage,
        getLicenseServerURLFromInitData: getLicenseServerURLFromInitData,
        getCDMData: getCDMData,
        getSessionId: getSessionId,
        getClearKeysFromProtectionData: getClearKeysFromProtectionData
    };

    return instance;
}

KeySystemClearKey.__dashjs_factory_name = 'KeySystemClearKey';
exports['default'] = dashjs.FactoryMaker.getSingletonFactory(KeySystemClearKey);
/* jshint ignore:line */
module.exports = exports['default'];

},{"21":21,"23":23,"3":3,"4":4}],10:[function(_dereq_,module,exports){
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
 * Microsoft PlayReady DRM
 *
 * @class
 * @implements KeySystem
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _CommonEncryption = _dereq_(4);

var _CommonEncryption2 = _interopRequireDefault(_CommonEncryption);

var _constantsProtectionConstants = _dereq_(3);

var _constantsProtectionConstants2 = _interopRequireDefault(_constantsProtectionConstants);

var uuid = '9a04f079-9840-4286-ab92-e65be0885f95';
var systemString = _constantsProtectionConstants2['default'].PLAYREADY_KEYSTEM_STRING;
var schemeIdURI = 'urn:uuid:' + uuid;
var PRCDMData = '<PlayReadyCDMData type="LicenseAcquisition"><LicenseAcquisition version="1.0" Proactive="false"><CustomData encoding="base64encoded">%CUSTOMDATA%</CustomData></LicenseAcquisition></PlayReadyCDMData>';
var protData = undefined;

function KeySystemPlayReady(config) {

    config = config || {};
    var instance = undefined;
    var messageFormat = 'utf16';
    var BASE64 = config.BASE64;

    function checkConfig() {
        if (!BASE64 || !BASE64.hasOwnProperty('decodeArray') || !BASE64.hasOwnProperty('decodeArray')) {
            throw new Error('Missing config parameter(s)');
        }
    }

    function getRequestHeadersFromMessage(message) {
        var msg = undefined,
            xmlDoc = undefined;
        var headers = {};
        var parser = new DOMParser();
        var dataview = messageFormat === 'utf16' ? new Uint16Array(message) : new Uint8Array(message);

        msg = String.fromCharCode.apply(null, dataview);
        xmlDoc = parser.parseFromString(msg, 'application/xml');

        var headerNameList = xmlDoc.getElementsByTagName('name');
        var headerValueList = xmlDoc.getElementsByTagName('value');
        for (var i = 0; i < headerNameList.length; i++) {
            headers[headerNameList[i].childNodes[0].nodeValue] = headerValueList[i].childNodes[0].nodeValue;
        }
        // some versions of the PlayReady CDM return 'Content' instead of 'Content-Type'.
        // this is NOT w3c conform and license servers may reject the request!
        // -> rename it to proper w3c definition!
        if (headers.hasOwnProperty('Content')) {
            headers['Content-Type'] = headers.Content;
            delete headers.Content;
        }
        // some devices (Ex: LG SmartTVs) require content-type to be defined
        if (!headers.hasOwnProperty('Content-Type')) {
            headers['Content-Type'] = 'text/xml; charset=' + messageFormat;
        }
        return headers;
    }

    function getLicenseRequestFromMessage(message) {
        var licenseRequest = null;
        var parser = new DOMParser();
        var dataview = messageFormat === 'utf16' ? new Uint16Array(message) : new Uint8Array(message);

        checkConfig();
        var msg = String.fromCharCode.apply(null, dataview);
        var xmlDoc = parser.parseFromString(msg, 'application/xml');

        if (xmlDoc.getElementsByTagName('Challenge')[0]) {
            var Challenge = xmlDoc.getElementsByTagName('Challenge')[0].childNodes[0].nodeValue;
            if (Challenge) {
                licenseRequest = BASE64.decode(Challenge);
            }
        } else if (xmlDoc.getElementsByTagName('parsererror').length) {
            // In case it is not an XML doc, return the message itself
            // There are CDM implementations of some devices (example: some smartTVs) that
            // return directly the challenge without wrapping it in an xml doc
            return message;
        }

        return licenseRequest;
    }

    function getLicenseServerURLFromInitData(initData) {
        if (initData) {
            var data = new DataView(initData);
            var numRecords = data.getUint16(4, true);
            var offset = 6;
            var parser = new DOMParser();

            for (var i = 0; i < numRecords; i++) {
                // Parse the PlayReady Record header
                var recordType = data.getUint16(offset, true);
                offset += 2;
                var recordLength = data.getUint16(offset, true);
                offset += 2;
                if (recordType !== 0x0001) {
                    offset += recordLength;
                    continue;
                }

                var recordData = initData.slice(offset, offset + recordLength);
                var record = String.fromCharCode.apply(null, new Uint16Array(recordData));
                var xmlDoc = parser.parseFromString(record, 'application/xml');

                // First try <LA_URL>
                if (xmlDoc.getElementsByTagName('LA_URL')[0]) {
                    var laurl = xmlDoc.getElementsByTagName('LA_URL')[0].childNodes[0].nodeValue;
                    if (laurl) {
                        return laurl;
                    }
                }

                // Optionally, try <LUI_URL>
                if (xmlDoc.getElementsByTagName('LUI_URL')[0]) {
                    var luiurl = xmlDoc.getElementsByTagName('LUI_URL')[0].childNodes[0].nodeValue;
                    if (luiurl) {
                        return luiurl;
                    }
                }
            }
        }

        return null;
    }

    function getInitData(cpData) {
        // * desc@ getInitData
        // *   generate PSSH data from PROHeader defined in MPD file
        // *   PSSH format:
        // *   size (4)
        // *   box type(PSSH) (8)
        // *   Protection SystemID (16)
        // *   protection system data size (4) - length of decoded PROHeader
        // *   decoded PROHeader data from MPD file
        var PSSHBoxType = new Uint8Array([0x70, 0x73, 0x73, 0x68, 0x00, 0x00, 0x00, 0x00]); //'PSSH' 8 bytes
        var playreadySystemID = new Uint8Array([0x9a, 0x04, 0xf0, 0x79, 0x98, 0x40, 0x42, 0x86, 0xab, 0x92, 0xe6, 0x5b, 0xe0, 0x88, 0x5f, 0x95]);

        var byteCursor = 0;
        var uint8arraydecodedPROHeader = null;

        var PROSize = undefined,
            PSSHSize = undefined,
            PSSHBoxBuffer = undefined,
            PSSHBox = undefined,
            PSSHData = undefined;

        checkConfig();
        // Handle common encryption PSSH
        if ('pssh' in cpData) {
            return _CommonEncryption2['default'].parseInitDataFromContentProtection(cpData, BASE64);
        }
        // Handle native MS PlayReady ContentProtection elements
        if ('pro' in cpData) {
            uint8arraydecodedPROHeader = BASE64.decodeArray(cpData.pro.__text);
        } else if ('prheader' in cpData) {
            uint8arraydecodedPROHeader = BASE64.decodeArray(cpData.prheader.__text);
        } else {
            return null;
        }

        PROSize = uint8arraydecodedPROHeader.length;
        PSSHSize = 0x4 + PSSHBoxType.length + playreadySystemID.length + 0x4 + PROSize;

        PSSHBoxBuffer = new ArrayBuffer(PSSHSize);

        PSSHBox = new Uint8Array(PSSHBoxBuffer);
        PSSHData = new DataView(PSSHBoxBuffer);

        PSSHData.setUint32(byteCursor, PSSHSize);
        byteCursor += 0x4;

        PSSHBox.set(PSSHBoxType, byteCursor);
        byteCursor += PSSHBoxType.length;

        PSSHBox.set(playreadySystemID, byteCursor);
        byteCursor += playreadySystemID.length;

        PSSHData.setUint32(byteCursor, PROSize);
        byteCursor += 0x4;

        PSSHBox.set(uint8arraydecodedPROHeader, byteCursor);
        byteCursor += PROSize;

        return PSSHBox.buffer;
    }

    /**
     * It seems that some PlayReady implementations return their XML-based CDM
     * messages using UTF16, while others return them as UTF8.  Use this function
     * to modify the message format to expect when parsing CDM messages.
     *
     * @param {string} format the expected message format.  Either "utf8" or "utf16".
     * @throws {Error} Specified message format is not one of "utf8" or "utf16"
     */
    function setPlayReadyMessageFormat(format) {
        if (format !== 'utf8' && format !== 'utf16') {
            throw new Error('Illegal PlayReady message format! -- ' + format);
        }
        messageFormat = format;
    }

    /**
     * Initialize the Key system with protection data
     * @param {Object} protectionData the protection data
     */
    function init(protectionData) {
        if (protectionData) {
            protData = protectionData;
        }
    }

    /**
     * Get Playready Custom data
     */
    function getCDMData() {
        var customData = undefined,
            cdmData = undefined,
            cdmDataBytes = undefined,
            i = undefined;

        checkConfig();
        if (protData && protData.cdmData) {
            // Convert custom data into multibyte string
            customData = [];
            for (i = 0; i < protData.cdmData.length; ++i) {
                customData.push(protData.cdmData.charCodeAt(i));
                customData.push(0);
            }
            customData = String.fromCharCode.apply(null, customData);

            // Encode in Base 64 the custom data string
            customData = BASE64.encode(customData);

            // Initialize CDM data with Base 64 encoded custom data
            // (see https://msdn.microsoft.com/en-us/library/dn457361.aspx)
            cdmData = PRCDMData.replace('%CUSTOMDATA%', customData);

            // Convert CDM data into multibyte characters
            cdmDataBytes = [];
            for (i = 0; i < cdmData.length; ++i) {
                cdmDataBytes.push(cdmData.charCodeAt(i));
                cdmDataBytes.push(0);
            }

            return new Uint8Array(cdmDataBytes).buffer;
        }

        return null;
    }

    function getSessionId(cp) {
        // Get sessionId from protectionData or from manifest
        if (protData && protData.sessionId) {
            return protData.sessionId;
        } else if (cp && cp.sessionId) {
            return cp.sessionId;
        }
        return null;
    }

    instance = {
        uuid: uuid,
        schemeIdURI: schemeIdURI,
        systemString: systemString,
        getInitData: getInitData,
        getRequestHeadersFromMessage: getRequestHeadersFromMessage,
        getLicenseRequestFromMessage: getLicenseRequestFromMessage,
        getLicenseServerURLFromInitData: getLicenseServerURLFromInitData,
        getCDMData: getCDMData,
        getSessionId: getSessionId,
        setPlayReadyMessageFormat: setPlayReadyMessageFormat,
        init: init
    };

    return instance;
}

KeySystemPlayReady.__dashjs_factory_name = 'KeySystemPlayReady';
exports['default'] = dashjs.FactoryMaker.getSingletonFactory(KeySystemPlayReady);
/* jshint ignore:line */
module.exports = exports['default'];

},{"3":3,"4":4}],11:[function(_dereq_,module,exports){
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

var _voKeyPair = _dereq_(23);

var _voKeyPair2 = _interopRequireDefault(_voKeyPair);

var _voClearKeyKeySet = _dereq_(21);

var _voClearKeyKeySet2 = _interopRequireDefault(_voClearKeyKeySet);

var _CommonEncryption = _dereq_(4);

var _CommonEncryption2 = _interopRequireDefault(_CommonEncryption);

var _constantsProtectionConstants = _dereq_(3);

var _constantsProtectionConstants2 = _interopRequireDefault(_constantsProtectionConstants);

var uuid = '1077efec-c0b2-4d02-ace3-3c1e52e2fb4b';
var systemString = _constantsProtectionConstants2['default'].CLEARKEY_KEYSTEM_STRING;
var schemeIdURI = 'urn:uuid:' + uuid;

function KeySystemW3CClearKey(config) {
    var instance = undefined;
    var BASE64 = config.BASE64;
    var logger = config.debug.getLogger(instance);
    /**
     * Returns desired clearkeys (as specified in the CDM message) from protection data
     *
     * @param {ProtectionData} protectionData the protection data
     * @param {ArrayBuffer} message the ClearKey CDM message
     * @returns {ClearKeyKeySet} the key set or null if none found
     * @throws {Error} if a keyID specified in the CDM message was not found in the
     * protection data
     * @memberof KeySystemClearKey
     */
    function getClearKeysFromProtectionData(protectionData, message) {
        var clearkeySet = null;
        if (protectionData) {
            // ClearKey is the only system that does not require a license server URL, so we
            // handle it here when keys are specified in protection data
            var jsonMsg = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(message)));
            var keyPairs = [];
            for (var i = 0; i < jsonMsg.kids.length; i++) {
                var clearkeyID = jsonMsg.kids[i];
                var clearkey = protectionData.clearkeys && protectionData.clearkeys.hasOwnProperty(clearkeyID) ? protectionData.clearkeys[clearkeyID] : null;
                if (!clearkey) {
                    throw new Error('DRM: ClearKey keyID (' + clearkeyID + ') is not known!');
                }
                // KeyIDs from CDM are not base64 padded.  Keys may or may not be padded
                keyPairs.push(new _voKeyPair2['default'](clearkeyID, clearkey));
            }
            clearkeySet = new _voClearKeyKeySet2['default'](keyPairs);

            logger.warn('ClearKey schemeIdURI is using W3C Common PSSH systemID (1077efec-c0b2-4d02-ace3-3c1e52e2fb4b) in Content Protection. See DASH-IF IOP v4.1 section 7.6.2.4');
        }
        return clearkeySet;
    }

    function getInitData(cp) {
        return _CommonEncryption2['default'].parseInitDataFromContentProtection(cp, BASE64);
    }

    function getRequestHeadersFromMessage() /*message*/{
        return null;
    }

    function getLicenseRequestFromMessage(message) {
        return new Uint8Array(message);
    }

    function getLicenseServerURLFromInitData() /*initData*/{
        return null;
    }

    function getCDMData() {
        return null;
    }

    function getSessionId() /*cp*/{
        return null;
    }

    instance = {
        uuid: uuid,
        schemeIdURI: schemeIdURI,
        systemString: systemString,
        getInitData: getInitData,
        getRequestHeadersFromMessage: getRequestHeadersFromMessage,
        getLicenseRequestFromMessage: getLicenseRequestFromMessage,
        getLicenseServerURLFromInitData: getLicenseServerURLFromInitData,
        getCDMData: getCDMData,
        getSessionId: getSessionId,
        getClearKeysFromProtectionData: getClearKeysFromProtectionData
    };

    return instance;
}

KeySystemW3CClearKey.__dashjs_factory_name = 'KeySystemW3CClearKey';
exports['default'] = dashjs.FactoryMaker.getSingletonFactory(KeySystemW3CClearKey);
/* jshint ignore:line */
module.exports = exports['default'];

},{"21":21,"23":23,"3":3,"4":4}],12:[function(_dereq_,module,exports){
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
 * Google Widevine DRM
 *
 * @class
 * @implements MediaPlayer.dependencies.protection.KeySystem
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _CommonEncryption = _dereq_(4);

var _CommonEncryption2 = _interopRequireDefault(_CommonEncryption);

var _constantsProtectionConstants = _dereq_(3);

var _constantsProtectionConstants2 = _interopRequireDefault(_constantsProtectionConstants);

var uuid = 'edef8ba9-79d6-4ace-a3c8-27dcd51d21ed';
var systemString = _constantsProtectionConstants2['default'].WIDEVINE_KEYSTEM_STRING;
var schemeIdURI = 'urn:uuid:' + uuid;

function KeySystemWidevine(config) {

    config = config || {};
    var instance = undefined;
    var protData = null;
    var BASE64 = config.BASE64;

    function init(protectionData) {
        if (protectionData) {
            protData = protectionData;
        }
    }

    function getInitData(cp) {
        return _CommonEncryption2['default'].parseInitDataFromContentProtection(cp, BASE64);
    }

    function getRequestHeadersFromMessage() /*message*/{
        return null;
    }

    function getLicenseRequestFromMessage(message) {
        return new Uint8Array(message);
    }

    function getLicenseServerURLFromInitData() /*initData*/{
        return null;
    }

    function getCDMData() {
        return null;
    }

    function getSessionId(cp) {
        // Get sessionId from protectionData or from manifest
        if (protData && protData.sessionId) {
            return protData.sessionId;
        } else if (cp && cp.sessionId) {
            return cp.sessionId;
        }
        return null;
    }

    instance = {
        uuid: uuid,
        schemeIdURI: schemeIdURI,
        systemString: systemString,
        init: init,
        getInitData: getInitData,
        getRequestHeadersFromMessage: getRequestHeadersFromMessage,
        getLicenseRequestFromMessage: getLicenseRequestFromMessage,
        getLicenseServerURLFromInitData: getLicenseServerURLFromInitData,
        getCDMData: getCDMData,
        getSessionId: getSessionId
    };

    return instance;
}

KeySystemWidevine.__dashjs_factory_name = 'KeySystemWidevine';
exports['default'] = dashjs.FactoryMaker.getSingletonFactory(KeySystemWidevine);
/* jshint ignore:line */
module.exports = exports['default'];

},{"3":3,"4":4}],13:[function(_dereq_,module,exports){
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

var _coreErrorsErrorsBase = _dereq_(1);

var _coreErrorsErrorsBase2 = _interopRequireDefault(_coreErrorsErrorsBase);

/**
 * @class
 *
 */

var ProtectionErrors = (function (_ErrorsBase) {
  _inherits(ProtectionErrors, _ErrorsBase);

  function ProtectionErrors() {
    _classCallCheck(this, ProtectionErrors);

    _get(Object.getPrototypeOf(ProtectionErrors.prototype), 'constructor', this).call(this);

    /**
     *  Generid key Error code
     */
    this.MEDIA_KEYERR_CODE = 100;
    /**
     *  Error code returned by keyerror api for ProtectionModel_01b
     */
    this.MEDIA_KEYERR_UNKNOWN_CODE = 101;
    /**
     *  Error code returned by keyerror api for ProtectionModel_01b
     */
    this.MEDIA_KEYERR_CLIENT_CODE = 102;
    /**
     *  Error code returned by keyerror api for ProtectionModel_01b
     */
    this.MEDIA_KEYERR_SERVICE_CODE = 103;
    /**
     *  Error code returned by keyerror api for ProtectionModel_01b
     */
    this.MEDIA_KEYERR_OUTPUT_CODE = 104;
    /**
     *  Error code returned by keyerror api for ProtectionModel_01b
     */
    this.MEDIA_KEYERR_HARDWARECHANGE_CODE = 105;
    /**
     *  Error code returned by keyerror api for ProtectionModel_01b
     */
    this.MEDIA_KEYERR_DOMAIN_CODE = 106;

    /**
     *  Error code returned when an error occured in keymessage event for ProtectionModel_01b
     */
    this.MEDIA_KEY_MESSAGE_ERROR_CODE = 107;
    /**
     *  Error code returned when challenge is invalid in keymessage event (event triggered by CDM)
     */
    this.MEDIA_KEY_MESSAGE_NO_CHALLENGE_ERROR_CODE = 108;
    /**
     *  Error code returned when License server certificate has not been successfully updated
     */
    this.SERVER_CERTIFICATE_UPDATED_ERROR_CODE = 109;
    /**
     *  Error code returned when license validity has expired
     */
    this.KEY_STATUS_CHANGED_EXPIRED_ERROR_CODE = 110;
    /**
     *  Error code returned when no licenser url is defined
     */
    this.MEDIA_KEY_MESSAGE_NO_LICENSE_SERVER_URL_ERROR_CODE = 111;
    /**
     *  Error code returned when key system access is denied
     */
    this.KEY_SYSTEM_ACCESS_DENIED_ERROR_CODE = 112;
    /**
     *  Error code returned when key session has not been successfully created
     */
    this.KEY_SESSION_CREATED_ERROR_CODE = 113;
    /**
     *  Error code returned when license request failed after a keymessage event has been triggered
     */
    this.MEDIA_KEY_MESSAGE_LICENSER_ERROR_CODE = 114;

    this.MEDIA_KEYERR_UNKNOWN_MESSAGE = 'An unspecified error occurred. This value is used for errors that don\'t match any of the other codes.';
    this.MEDIA_KEYERR_CLIENT_MESSAGE = 'The Key System could not be installed or updated.';
    this.MEDIA_KEYERR_SERVICE_MESSAGE = 'The message passed into update indicated an error from the license service.';
    this.MEDIA_KEYERR_OUTPUT_MESSAGE = 'There is no available output device with the required characteristics for the content protection system.';
    this.MEDIA_KEYERR_HARDWARECHANGE_MESSAGE = 'A hardware configuration change caused a content protection error.';
    this.MEDIA_KEYERR_DOMAIN_MESSAGE = 'An error occurred in a multi-device domain licensing configuration. The most common error is a failure to join the domain.';
    this.MEDIA_KEY_MESSAGE_ERROR_MESSAGE = 'Multiple key sessions were creates with a user-agent that does not support sessionIDs!! Unpredictable behavior ahead!';
    this.MEDIA_KEY_MESSAGE_NO_CHALLENGE_ERROR_MESSAGE = 'DRM: Empty key message from CDM';
    this.SERVER_CERTIFICATE_UPDATED_ERROR_MESSAGE = 'Error updating server certificate -- ';
    this.KEY_STATUS_CHANGED_EXPIRED_ERROR_MESSAGE = 'DRM: KeyStatusChange error! -- License has expired';
    this.MEDIA_KEY_MESSAGE_NO_LICENSE_SERVER_URL_ERROR_MESSAGE = 'DRM: No license server URL specified!';
    this.KEY_SYSTEM_ACCESS_DENIED_ERROR_MESSAGE = 'DRM: KeySystem Access Denied! -- ';
    this.KEY_SESSION_CREATED_ERROR_MESSAGE = 'DRM: unable to create session! --';
    this.MEDIA_KEY_MESSAGE_LICENSER_ERROR_MESSAGE = 'DRM: licenser error! --';
  }

  return ProtectionErrors;
})(_coreErrorsErrorsBase2['default']);

var protectionErrors = new ProtectionErrors();
exports['default'] = protectionErrors;
module.exports = exports['default'];

},{"1":1}],14:[function(_dereq_,module,exports){
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
 * Initial implementation of EME
 *
 * Implemented by Google Chrome prior to v36
 *
 * @implements ProtectionModel
 * @class
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _controllersProtectionKeyController = _dereq_(8);

var _controllersProtectionKeyController2 = _interopRequireDefault(_controllersProtectionKeyController);

var _voNeedKey = _dereq_(27);

var _voNeedKey2 = _interopRequireDefault(_voNeedKey);

var _voDashJSError = _dereq_(28);

var _voDashJSError2 = _interopRequireDefault(_voDashJSError);

var _voKeyMessage = _dereq_(22);

var _voKeyMessage2 = _interopRequireDefault(_voKeyMessage);

var _voKeySystemConfiguration = _dereq_(25);

var _voKeySystemConfiguration2 = _interopRequireDefault(_voKeySystemConfiguration);

var _voKeySystemAccess = _dereq_(24);

var _voKeySystemAccess2 = _interopRequireDefault(_voKeySystemAccess);

var _errorsProtectionErrors = _dereq_(13);

var _errorsProtectionErrors2 = _interopRequireDefault(_errorsProtectionErrors);

function ProtectionModel_01b(config) {

    config = config || {};
    var context = this.context;
    var eventBus = config.eventBus; //Need to pass in here so we can use same instance since this is optional module
    var events = config.events;
    var debug = config.debug;
    var api = config.api;
    var errHandler = config.errHandler;

    var instance = undefined,
        logger = undefined,
        videoElement = undefined,
        keySystem = undefined,
        protectionKeyController = undefined,

    // With this version of the EME APIs, sessionIDs are not assigned to
    // sessions until the first key message is received.  We are assuming
    // that in the case of multiple sessions, key messages will be received
    // in the order that generateKeyRequest() is called.
    // Holding spot for newly-created sessions until we determine whether or
    // not the CDM supports sessionIDs
    pendingSessions = undefined,

    // List of sessions that have been initialized.  Only the first position will
    // be used in the case that the CDM does not support sessionIDs
    sessions = undefined,

    // Not all CDMs support the notion of sessionIDs.  Without sessionIDs
    // there is no way for us to differentiate between sessions, therefore
    // we must only allow a single session.  Once we receive the first key
    // message we can set this flag to determine if more sessions are allowed
    moreSessionsAllowed = undefined,

    // This is our main event handler for all desired HTMLMediaElement events
    // related to EME.  These events are translated into our API-independent
    // versions of the same events
    eventHandler = undefined;

    function setup() {
        logger = debug.getLogger(instance);
        videoElement = null;
        keySystem = null;
        pendingSessions = [];
        sessions = [];
        protectionKeyController = (0, _controllersProtectionKeyController2['default'])(context).getInstance();
        eventHandler = createEventHandler();
    }

    function reset() {
        if (videoElement) {
            removeEventListeners();
        }
        for (var i = 0; i < sessions.length; i++) {
            closeKeySession(sessions[i]);
        }
        eventBus.trigger(events.TEARDOWN_COMPLETE);
    }

    function getKeySystem() {
        return keySystem;
    }

    function getAllInitData() {
        var retVal = [];
        for (var i = 0; i < pendingSessions.length; i++) {
            retVal.push(pendingSessions[i].initData);
        }
        for (var i = 0; i < sessions.length; i++) {
            retVal.push(sessions[i].initData);
        }
        return retVal;
    }

    function requestKeySystemAccess(ksConfigurations) {
        var ve = videoElement;
        if (!ve) {
            // Must have a video element to do this capability tests
            ve = document.createElement('video');
        }

        // Try key systems in order, first one with supported key system configuration
        // is used
        var found = false;
        for (var ksIdx = 0; ksIdx < ksConfigurations.length; ksIdx++) {
            var systemString = ksConfigurations[ksIdx].ks.systemString;
            var configs = ksConfigurations[ksIdx].configs;
            var supportedAudio = null;
            var supportedVideo = null;

            // Try key system configs in order, first one with supported audio/video
            // is used
            for (var configIdx = 0; configIdx < configs.length; configIdx++) {
                //let audios = configs[configIdx].audioCapabilities;
                var videos = configs[configIdx].videoCapabilities;
                // Look for supported video container/codecs
                if (videos && videos.length !== 0) {
                    supportedVideo = []; // Indicates that we have a requested video config
                    for (var videoIdx = 0; videoIdx < videos.length; videoIdx++) {
                        if (ve.canPlayType(videos[videoIdx].contentType, systemString) !== '') {
                            supportedVideo.push(videos[videoIdx]);
                        }
                    }
                }

                // No supported audio or video in this configuration OR we have
                // requested audio or video configuration that is not supported
                if (!supportedAudio && !supportedVideo || supportedAudio && supportedAudio.length === 0 || supportedVideo && supportedVideo.length === 0) {
                    continue;
                }

                // This configuration is supported
                found = true;
                var ksConfig = new _voKeySystemConfiguration2['default'](supportedAudio, supportedVideo);
                var ks = protectionKeyController.getKeySystemBySystemString(systemString);
                eventBus.trigger(events.KEY_SYSTEM_ACCESS_COMPLETE, { data: new _voKeySystemAccess2['default'](ks, ksConfig) });
                break;
            }
        }
        if (!found) {
            eventBus.trigger(events.KEY_SYSTEM_ACCESS_COMPLETE, { error: 'Key system access denied! -- No valid audio/video content configurations detected!' });
        }
    }

    function selectKeySystem(keySystemAccess) {
        keySystem = keySystemAccess.keySystem;
        eventBus.trigger(events.INTERNAL_KEY_SYSTEM_SELECTED);
    }

    function setMediaElement(mediaElement) {
        if (videoElement === mediaElement) {
            return;
        }

        // Replacing the previous element
        if (videoElement) {
            removeEventListeners();

            // Close any open sessions - avoids memory leak on LG webOS 2016/2017 TVs
            for (var i = 0; i < sessions.length; i++) {
                closeKeySession(sessions[i]);
            }
            sessions = [];
        }

        videoElement = mediaElement;

        // Only if we are not detaching from the existing element
        if (videoElement) {
            videoElement.addEventListener(api.keyerror, eventHandler);
            videoElement.addEventListener(api.needkey, eventHandler);
            videoElement.addEventListener(api.keymessage, eventHandler);
            videoElement.addEventListener(api.keyadded, eventHandler);
            eventBus.trigger(events.VIDEO_ELEMENT_SELECTED);
        }
    }

    function createKeySession(initData /*, protData, keySystemType */) {
        if (!keySystem) {
            throw new Error('Can not create sessions until you have selected a key system');
        }

        // Determine if creating a new session is allowed
        if (moreSessionsAllowed || sessions.length === 0) {
            var newSession = { // Implements SessionToken
                sessionID: null,
                initData: initData,
                getSessionID: function getSessionID() {
                    return this.sessionID;
                },

                getExpirationTime: function getExpirationTime() {
                    return NaN;
                },

                getSessionType: function getSessionType() {
                    return 'temporary';
                }
            };
            pendingSessions.push(newSession);

            // Send our request to the CDM
            videoElement[api.generateKeyRequest](keySystem.systemString, new Uint8Array(initData));

            return newSession;
        } else {
            throw new Error('Multiple sessions not allowed!');
        }
    }

    function updateKeySession(sessionToken, message) {
        var sessionID = sessionToken.sessionID;
        if (!protectionKeyController.isClearKey(keySystem)) {
            // Send our request to the CDM
            videoElement[api.addKey](keySystem.systemString, new Uint8Array(message), new Uint8Array(sessionToken.initData), sessionID);
        } else {
            // For clearkey, message is a ClearKeyKeySet
            for (var i = 0; i < message.keyPairs.length; i++) {
                videoElement[api.addKey](keySystem.systemString, message.keyPairs[i].key, message.keyPairs[i].keyID, sessionID);
            }
        }
    }

    function closeKeySession(sessionToken) {
        // Send our request to the CDM
        try {
            videoElement[api.cancelKeyRequest](keySystem.systemString, sessionToken.sessionID);
        } catch (error) {
            eventBus.trigger(events.KEY_SESSION_CLOSED, { data: null, error: 'Error closing session (' + sessionToken.sessionID + ') ' + error.message });
        }
    }

    function setServerCertificate() /*serverCertificate*/{/* Not supported */}
    function loadKeySession() /*sessionID*/{/* Not supported */}
    function removeKeySession() /*sessionToken*/{/* Not supported */}

    function createEventHandler() {
        return {
            handleEvent: function handleEvent(event) {
                var sessionToken = null;
                switch (event.type) {
                    case api.needkey:
                        var initData = ArrayBuffer.isView(event.initData) ? event.initData.buffer : event.initData;
                        eventBus.trigger(events.NEED_KEY, { key: new _voNeedKey2['default'](initData, 'cenc') });
                        break;

                    case api.keyerror:
                        sessionToken = findSessionByID(sessions, event.sessionId);
                        if (!sessionToken) {
                            sessionToken = findSessionByID(pendingSessions, event.sessionId);
                        }

                        if (sessionToken) {
                            var code = _errorsProtectionErrors2['default'].MEDIA_KEYERR_CODE;
                            var msg = '';
                            switch (event.errorCode.code) {
                                case 1:
                                    code = _errorsProtectionErrors2['default'].MEDIA_KEYERR_UNKNOWN_CODE;
                                    msg += 'MEDIA_KEYERR_UNKNOWN - ' + _errorsProtectionErrors2['default'].MEDIA_KEYERR_UNKNOWN_MESSAGE;
                                    break;
                                case 2:
                                    code = _errorsProtectionErrors2['default'].MEDIA_KEYERR_CLIENT_CODE;
                                    msg += 'MEDIA_KEYERR_CLIENT - ' + _errorsProtectionErrors2['default'].MEDIA_KEYERR_CLIENT_MESSAGE;
                                    break;
                                case 3:
                                    code = _errorsProtectionErrors2['default'].MEDIA_KEYERR_SERVICE_CODE;
                                    msg += 'MEDIA_KEYERR_SERVICE - ' + _errorsProtectionErrors2['default'].MEDIA_KEYERR_SERVICE_MESSAGE;
                                    break;
                                case 4:
                                    code = _errorsProtectionErrors2['default'].MEDIA_KEYERR_OUTPUT_CODE;
                                    msg += 'MEDIA_KEYERR_OUTPUT - ' + _errorsProtectionErrors2['default'].MEDIA_KEYERR_OUTPUT_MESSAGE;
                                    break;
                                case 5:
                                    code = _errorsProtectionErrors2['default'].MEDIA_KEYERR_HARDWARECHANGE_CODE;
                                    msg += 'MEDIA_KEYERR_HARDWARECHANGE - ' + _errorsProtectionErrors2['default'].MEDIA_KEYERR_HARDWARECHANGE_MESSAGE;
                                    break;
                                case 6:
                                    code = _errorsProtectionErrors2['default'].MEDIA_KEYERR_DOMAIN_CODE;
                                    msg += 'MEDIA_KEYERR_DOMAIN - ' + _errorsProtectionErrors2['default'].MEDIA_KEYERR_DOMAIN_MESSAGE;
                                    break;
                            }
                            msg += '  System Code = ' + event.systemCode;
                            // TODO: Build error string based on key error
                            eventBus.trigger(events.KEY_ERROR, { data: new _voDashJSError2['default'](code, msg, sessionToken) });
                        } else {
                            logger.error('No session token found for key error');
                        }
                        break;

                    case api.keyadded:
                        sessionToken = findSessionByID(sessions, event.sessionId);
                        if (!sessionToken) {
                            sessionToken = findSessionByID(pendingSessions, event.sessionId);
                        }

                        if (sessionToken) {
                            logger.debug('DRM: Key added.');
                            eventBus.trigger(events.KEY_ADDED, { data: sessionToken }); //TODO not sure anything is using sessionToken? why there?
                        } else {
                                logger.debug('No session token found for key added');
                            }
                        break;

                    case api.keymessage:
                        // If this CDM does not support session IDs, we will be limited
                        // to a single session
                        moreSessionsAllowed = event.sessionId !== null && event.sessionId !== undefined;

                        // SessionIDs supported
                        if (moreSessionsAllowed) {
                            // Attempt to find an uninitialized token with this sessionID
                            sessionToken = findSessionByID(sessions, event.sessionId);
                            if (!sessionToken && pendingSessions.length > 0) {

                                // This is the first message for our latest session, so set the
                                // sessionID and add it to our list
                                sessionToken = pendingSessions.shift();
                                sessions.push(sessionToken);
                                sessionToken.sessionID = event.sessionId;

                                eventBus.trigger(events.KEY_SESSION_CREATED, { data: sessionToken });
                            }
                        } else if (pendingSessions.length > 0) {
                            // SessionIDs not supported
                            sessionToken = pendingSessions.shift();
                            sessions.push(sessionToken);

                            if (pendingSessions.length !== 0) {
                                errHandler.mediaKeyMessageError(_errorsProtectionErrors2['default'].MEDIA_KEY_MESSAGE_ERROR_MESSAGE);
                                errHandler.error(new _voDashJSError2['default'](_errorsProtectionErrors2['default'].MEDIA_KEY_MESSAGE_ERROR_CODE, _errorsProtectionErrors2['default'].MEDIA_KEY_MESSAGE_ERROR_MESSAGE));
                            }
                        }

                        if (sessionToken) {
                            var message = ArrayBuffer.isView(event.message) ? event.message.buffer : event.message;

                            // For ClearKey, the spec mandates that you pass this message to the
                            // addKey method, so we always save it to the token since there is no
                            // way to tell which key system is in use
                            sessionToken.keyMessage = message;
                            eventBus.trigger(events.INTERNAL_KEY_MESSAGE, { data: new _voKeyMessage2['default'](sessionToken, message, event.defaultURL) });
                        } else {
                            logger.warn('No session token found for key message');
                        }
                        break;
                }
            }
        };
    }

    /**
     * Helper function to retrieve the stored session token based on a given
     * sessionID value
     *
     * @param {Array} sessionArray - the array of sessions to search
     * @param {*} sessionID - the sessionID to search for
     * @returns {*} the session token with the given sessionID
     */
    function findSessionByID(sessionArray, sessionID) {
        if (!sessionID || !sessionArray) {
            return null;
        } else {
            var len = sessionArray.length;
            for (var i = 0; i < len; i++) {
                if (sessionArray[i].sessionID == sessionID) {
                    return sessionArray[i];
                }
            }
            return null;
        }
    }

    function removeEventListeners() {
        videoElement.removeEventListener(api.keyerror, eventHandler);
        videoElement.removeEventListener(api.needkey, eventHandler);
        videoElement.removeEventListener(api.keymessage, eventHandler);
        videoElement.removeEventListener(api.keyadded, eventHandler);
    }

    instance = {
        getAllInitData: getAllInitData,
        requestKeySystemAccess: requestKeySystemAccess,
        getKeySystem: getKeySystem,
        selectKeySystem: selectKeySystem,
        setMediaElement: setMediaElement,
        createKeySession: createKeySession,
        updateKeySession: updateKeySession,
        closeKeySession: closeKeySession,
        setServerCertificate: setServerCertificate,
        loadKeySession: loadKeySession,
        removeKeySession: removeKeySession,
        stop: reset,
        reset: reset
    };

    setup();

    return instance;
}

ProtectionModel_01b.__dashjs_factory_name = 'ProtectionModel_01b';
exports['default'] = dashjs.FactoryMaker.getClassFactory(ProtectionModel_01b);
/* jshint ignore:line */
module.exports = exports['default'];

},{"13":13,"22":22,"24":24,"25":25,"27":27,"28":28,"8":8}],15:[function(_dereq_,module,exports){
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
 * Most recent EME implementation
 *
 * Implemented by Google Chrome v36+ (Windows, OSX, Linux)
 *
 * @implements ProtectionModel
 * @class
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _controllersProtectionKeyController = _dereq_(8);

var _controllersProtectionKeyController2 = _interopRequireDefault(_controllersProtectionKeyController);

var _voNeedKey = _dereq_(27);

var _voNeedKey2 = _interopRequireDefault(_voNeedKey);

var _errorsProtectionErrors = _dereq_(13);

var _errorsProtectionErrors2 = _interopRequireDefault(_errorsProtectionErrors);

var _voDashJSError = _dereq_(28);

var _voDashJSError2 = _interopRequireDefault(_voDashJSError);

var _voKeyMessage = _dereq_(22);

var _voKeyMessage2 = _interopRequireDefault(_voKeyMessage);

var _voKeySystemAccess = _dereq_(24);

var _voKeySystemAccess2 = _interopRequireDefault(_voKeySystemAccess);

var _constantsProtectionConstants = _dereq_(3);

var _constantsProtectionConstants2 = _interopRequireDefault(_constantsProtectionConstants);

function ProtectionModel_21Jan2015(config) {

    config = config || {};
    var context = this.context;
    var eventBus = config.eventBus; //Need to pass in here so we can use same instance since this is optional module
    var events = config.events;
    var debug = config.debug;

    var instance = undefined,
        logger = undefined,
        keySystem = undefined,
        videoElement = undefined,
        mediaKeys = undefined,
        sessions = undefined,
        eventHandler = undefined,
        protectionKeyController = undefined;

    function setup() {
        logger = debug.getLogger(instance);
        keySystem = null;
        videoElement = null;
        mediaKeys = null;
        sessions = [];
        protectionKeyController = (0, _controllersProtectionKeyController2['default'])(context).getInstance();
        eventHandler = createEventHandler();
    }

    function reset() {
        var numSessions = sessions.length;
        var session = undefined;

        if (numSessions !== 0) {
            (function () {
                // Called when we are done closing a session.  Success or fail
                var done = function done(session) {
                    removeSession(session);
                    if (sessions.length === 0) {
                        if (videoElement) {
                            videoElement.removeEventListener('encrypted', eventHandler);
                            videoElement.setMediaKeys(null).then(function () {
                                eventBus.trigger(events.TEARDOWN_COMPLETE);
                            });
                        } else {
                            eventBus.trigger(events.TEARDOWN_COMPLETE);
                        }
                    }
                };
                for (var i = 0; i < numSessions; i++) {
                    session = sessions[i];
                    (function (s) {
                        // Override closed promise resolver
                        session.session.closed.then(function () {
                            done(s);
                        });
                        // Close the session and handle errors, otherwise promise
                        // resolver above will be called
                        closeKeySessionInternal(session)['catch'](function () {
                            done(s);
                        });
                    })(session);
                }
            })();
        } else {
            eventBus.trigger(events.TEARDOWN_COMPLETE);
        }
    }

    function stop() {
        // Close and remove not usable sessions
        var session = undefined;
        for (var i = 0; i < sessions.length; i++) {
            session = sessions[i];
            if (!session.getUsable()) {
                closeKeySessionInternal(session)['catch'](function () {
                    removeSession(session);
                });
            }
        }
    }

    function getKeySystem() {
        return keySystem;
    }

    function getAllInitData() {
        var retVal = [];
        for (var i = 0; i < sessions.length; i++) {
            if (sessions[i].initData) {
                retVal.push(sessions[i].initData);
            }
        }
        return retVal;
    }

    function requestKeySystemAccess(ksConfigurations) {
        requestKeySystemAccessInternal(ksConfigurations, 0);
    }

    function selectKeySystem(keySystemAccess) {
        keySystemAccess.mksa.createMediaKeys().then(function (mkeys) {
            keySystem = keySystemAccess.keySystem;
            mediaKeys = mkeys;
            if (videoElement) {
                videoElement.setMediaKeys(mediaKeys).then(function () {
                    eventBus.trigger(events.INTERNAL_KEY_SYSTEM_SELECTED);
                });
            } else {
                eventBus.trigger(events.INTERNAL_KEY_SYSTEM_SELECTED);
            }
        })['catch'](function () {
            eventBus.trigger(events.INTERNAL_KEY_SYSTEM_SELECTED, { error: 'Error selecting keys system (' + keySystemAccess.keySystem.systemString + ')! Could not create MediaKeys -- TODO' });
        });
    }

    function setMediaElement(mediaElement) {
        if (videoElement === mediaElement) return;

        // Replacing the previous element
        if (videoElement) {
            videoElement.removeEventListener('encrypted', eventHandler);
            if (videoElement.setMediaKeys) {
                videoElement.setMediaKeys(null);
            }
        }

        videoElement = mediaElement;

        // Only if we are not detaching from the existing element
        if (videoElement) {
            videoElement.addEventListener('encrypted', eventHandler);
            if (videoElement.setMediaKeys && mediaKeys) {
                videoElement.setMediaKeys(mediaKeys);
            }
        }
    }

    function setServerCertificate(serverCertificate) {
        if (!keySystem || !mediaKeys) {
            throw new Error('Can not set server certificate until you have selected a key system');
        }
        mediaKeys.setServerCertificate(serverCertificate).then(function () {
            logger.info('DRM: License server certificate successfully updated.');
            eventBus.trigger(events.SERVER_CERTIFICATE_UPDATED);
        })['catch'](function (error) {
            eventBus.trigger(events.SERVER_CERTIFICATE_UPDATED, { error: new _voDashJSError2['default'](_errorsProtectionErrors2['default'].SERVER_CERTIFICATE_UPDATED_ERROR_CODE, _errorsProtectionErrors2['default'].SERVER_CERTIFICATE_UPDATED_ERROR_MESSAGE + error.name) });
        });
    }

    function createKeySession(initData, protData, sessionType) {
        if (!keySystem || !mediaKeys) {
            throw new Error('Can not create sessions until you have selected a key system');
        }

        var session = mediaKeys.createSession(sessionType);
        var sessionToken = createSessionToken(session, initData, sessionType);
        var ks = this.getKeySystem();

        // Generate initial key request.
        // keyids type is used for clearkey when keys are provided directly in the protection data and then request to a license server is not needed
        var dataType = ks.systemString === _constantsProtectionConstants2['default'].CLEARKEY_KEYSTEM_STRING && protData && protData.clearkeys ? 'keyids' : 'cenc';
        session.generateRequest(dataType, initData).then(function () {
            logger.debug('DRM: Session created.  SessionID = ' + sessionToken.getSessionID());
            eventBus.trigger(events.KEY_SESSION_CREATED, { data: sessionToken });
        })['catch'](function (error) {
            // TODO: Better error string
            removeSession(sessionToken);
            eventBus.trigger(events.KEY_SESSION_CREATED, { data: null, error: new _voDashJSError2['default'](_errorsProtectionErrors2['default'].KEY_SESSION_CREATED_ERROR_CODE, _errorsProtectionErrors2['default'].KEY_SESSION_CREATED_ERROR_MESSAGE + 'Error generating key request -- ' + error.name) });
        });
    }

    function updateKeySession(sessionToken, message) {
        var session = sessionToken.session;

        // Send our request to the key session
        if (protectionKeyController.isClearKey(keySystem)) {
            message = message.toJWK();
        }
        session.update(message)['catch'](function (error) {
            eventBus.trigger(events.KEY_ERROR, { data: new _voDashJSError2['default'](_errorsProtectionErrors2['default'].MEDIA_KEYERR_CODE, 'Error sending update() message! ' + error.name, sessionToken) });
        });
    }

    function loadKeySession(sessionID, initData, sessionType) {
        if (!keySystem || !mediaKeys) {
            throw new Error('Can not load sessions until you have selected a key system');
        }

        // Check if session Id is not already loaded or loading
        for (var i = 0; i < sessions.length; i++) {
            if (sessionID === sessions[i].sessionId) {
                logger.warn('DRM: Ignoring session ID because we have already seen it!');
                return;
            }
        }

        var session = mediaKeys.createSession(sessionType);
        var sessionToken = createSessionToken(session, initData, sessionType, sessionID);

        // Load persisted session data into our newly created session object
        session.load(sessionID).then(function (success) {
            if (success) {
                logger.debug('DRM: Session loaded.  SessionID = ' + sessionToken.getSessionID());
                eventBus.trigger(events.KEY_SESSION_CREATED, { data: sessionToken });
            } else {
                removeSession(sessionToken);
                eventBus.trigger(events.KEY_SESSION_CREATED, { data: null, error: new _voDashJSError2['default'](_errorsProtectionErrors2['default'].KEY_SESSION_CREATED_ERROR_CODE, _errorsProtectionErrors2['default'].KEY_SESSION_CREATED_ERROR_MESSAGE + 'Could not load session! Invalid Session ID (' + sessionID + ')') });
            }
        })['catch'](function (error) {
            removeSession(sessionToken);
            eventBus.trigger(events.KEY_SESSION_CREATED, { data: null, error: new _voDashJSError2['default'](_errorsProtectionErrors2['default'].KEY_SESSION_CREATED_ERROR_CODE, _errorsProtectionErrors2['default'].KEY_SESSION_CREATED_ERROR_MESSAGE + 'Could not load session (' + sessionID + ')! ' + error.name) });
        });
    }

    function removeKeySession(sessionToken) {
        var session = sessionToken.session;

        session.remove().then(function () {
            logger.debug('DRM: Session removed.  SessionID = ' + sessionToken.getSessionID());
            eventBus.trigger(events.KEY_SESSION_REMOVED, { data: sessionToken.getSessionID() });
        }, function (error) {
            eventBus.trigger(events.KEY_SESSION_REMOVED, { data: null, error: 'Error removing session (' + sessionToken.getSessionID() + '). ' + error.name });
        });
    }

    function closeKeySession(sessionToken) {
        // Send our request to the key session
        closeKeySessionInternal(sessionToken)['catch'](function (error) {
            removeSession(sessionToken);
            eventBus.trigger(events.KEY_SESSION_CLOSED, { data: null, error: 'Error closing session (' + sessionToken.getSessionID() + ') ' + error.name });
        });
    }

    function requestKeySystemAccessInternal(ksConfigurations, idx) {

        if (navigator.requestMediaKeySystemAccess === undefined || typeof navigator.requestMediaKeySystemAccess !== 'function') {
            eventBus.trigger(events.KEY_SYSTEM_ACCESS_COMPLETE, { error: 'Insecure origins are not allowed' });
            return;
        }

        (function (i) {
            var keySystem = ksConfigurations[i].ks;
            var configs = ksConfigurations[i].configs;
            var systemString = keySystem.systemString;

            // PATCH to support persistent licenses on Edge browser (see issue #2658)
            if (systemString === _constantsProtectionConstants2['default'].PLAYREADY_KEYSTEM_STRING && configs[0].persistentState === 'required') {
                systemString += '.recommendation';
            }

            navigator.requestMediaKeySystemAccess(systemString, configs).then(function (mediaKeySystemAccess) {
                // Chrome 40 does not currently implement MediaKeySystemAccess.getConfiguration()
                var configuration = typeof mediaKeySystemAccess.getConfiguration === 'function' ? mediaKeySystemAccess.getConfiguration() : null;
                var keySystemAccess = new _voKeySystemAccess2['default'](keySystem, configuration);
                keySystemAccess.mksa = mediaKeySystemAccess;
                eventBus.trigger(events.KEY_SYSTEM_ACCESS_COMPLETE, { data: keySystemAccess });
            })['catch'](function (error) {
                if (++i < ksConfigurations.length) {
                    requestKeySystemAccessInternal(ksConfigurations, i);
                } else {
                    eventBus.trigger(events.KEY_SYSTEM_ACCESS_COMPLETE, { error: 'Key system access denied! ' + error.message });
                }
            });
        })(idx);
    }

    function closeKeySessionInternal(sessionToken) {
        var session = sessionToken.session;

        // Remove event listeners
        session.removeEventListener('keystatuseschange', sessionToken);
        session.removeEventListener('message', sessionToken);

        // Send our request to the key session
        return session.close();
    }

    // This is our main event handler for all desired HTMLMediaElement events
    // related to EME.  These events are translated into our API-independent
    // versions of the same events
    function createEventHandler() {
        return {
            handleEvent: function handleEvent(event) {
                switch (event.type) {
                    case 'encrypted':
                        if (event.initData) {
                            var initData = ArrayBuffer.isView(event.initData) ? event.initData.buffer : event.initData;
                            eventBus.trigger(events.NEED_KEY, { key: new _voNeedKey2['default'](initData, event.initDataType) });
                        }
                        break;
                }
            }
        };
    }

    function removeSession(token) {
        // Remove from our session list
        for (var i = 0; i < sessions.length; i++) {
            if (sessions[i] === token) {
                sessions.splice(i, 1);
                break;
            }
        }
    }

    function parseKeyStatus(args) {
        // Edge and Chrome implement different version of keystatues, param are not on same order
        var status = undefined,
            keyId = undefined;
        if (args && args.length > 0) {
            if (args[0]) {
                if (typeof args[0] === 'string') {
                    status = args[0];
                } else {
                    keyId = args[0];
                }
            }

            if (args[1]) {
                if (typeof args[1] === 'string') {
                    status = args[1];
                } else {
                    keyId = args[1];
                }
            }
        }
        return {
            status: status,
            keyId: keyId
        };
    }

    // Function to create our session token objects which manage the EME
    // MediaKeySession and session-specific event handler
    function createSessionToken(session, initData, sessionType, sessionID) {
        var token = { // Implements SessionToken
            session: session,
            initData: initData,
            sessionId: sessionID,

            // This is our main event handler for all desired MediaKeySession events
            // These events are translated into our API-independent versions of the
            // same events
            handleEvent: function handleEvent(event) {
                switch (event.type) {
                    case 'keystatuseschange':
                        eventBus.trigger(events.KEY_STATUSES_CHANGED, { data: this });
                        event.target.keyStatuses.forEach(function () {
                            var keyStatus = parseKeyStatus(arguments);
                            switch (keyStatus.status) {
                                case 'expired':
                                    eventBus.trigger(events.INTERNAL_KEY_STATUS_CHANGED, { error: new _voDashJSError2['default'](_errorsProtectionErrors2['default'].KEY_STATUS_CHANGED_EXPIRED_ERROR_CODE, _errorsProtectionErrors2['default'].KEY_STATUS_CHANGED_EXPIRED_ERROR_MESSAGE) });
                                    break;
                                default:
                                    eventBus.trigger(events.INTERNAL_KEY_STATUS_CHANGED, keyStatus);
                                    break;
                            }
                        });
                        break;

                    case 'message':
                        var message = ArrayBuffer.isView(event.message) ? event.message.buffer : event.message;
                        eventBus.trigger(events.INTERNAL_KEY_MESSAGE, { data: new _voKeyMessage2['default'](this, message, undefined, event.messageType) });
                        break;
                }
            },

            getSessionID: function getSessionID() {
                return session.sessionId;
            },

            getExpirationTime: function getExpirationTime() {
                return session.expiration;
            },

            getKeyStatuses: function getKeyStatuses() {
                return session.keyStatuses;
            },

            getUsable: function getUsable() {
                var usable = false;
                session.keyStatuses.forEach(function () {
                    var keyStatus = parseKeyStatus(arguments);
                    if (keyStatus.status === 'usable') {
                        usable = true;
                    }
                });
                return usable;
            },

            getSessionType: function getSessionType() {
                return sessionType;
            }
        };

        // Add all event listeners
        session.addEventListener('keystatuseschange', token);
        session.addEventListener('message', token);

        // Register callback for session closed Promise
        session.closed.then(function () {
            removeSession(token);
            logger.debug('DRM: Session closed.  SessionID = ' + token.getSessionID());
            eventBus.trigger(events.KEY_SESSION_CLOSED, { data: token.getSessionID() });
        });

        // Add to our session list
        sessions.push(token);

        return token;
    }

    instance = {
        getAllInitData: getAllInitData,
        requestKeySystemAccess: requestKeySystemAccess,
        getKeySystem: getKeySystem,
        selectKeySystem: selectKeySystem,
        setMediaElement: setMediaElement,
        setServerCertificate: setServerCertificate,
        createKeySession: createKeySession,
        updateKeySession: updateKeySession,
        loadKeySession: loadKeySession,
        removeKeySession: removeKeySession,
        closeKeySession: closeKeySession,
        stop: stop,
        reset: reset
    };

    setup();

    return instance;
}

ProtectionModel_21Jan2015.__dashjs_factory_name = 'ProtectionModel_21Jan2015';
exports['default'] = dashjs.FactoryMaker.getClassFactory(ProtectionModel_21Jan2015);
/* jshint ignore:line */
module.exports = exports['default'];

},{"13":13,"22":22,"24":24,"27":27,"28":28,"3":3,"8":8}],16:[function(_dereq_,module,exports){
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
 * Implementation of the EME APIs as of the 3 Feb 2014 state of the specification.
 *
 * Implemented by Internet Explorer 11 (Windows 8.1)
 *
 * @implements ProtectionModel
 * @class
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _controllersProtectionKeyController = _dereq_(8);

var _controllersProtectionKeyController2 = _interopRequireDefault(_controllersProtectionKeyController);

var _voNeedKey = _dereq_(27);

var _voNeedKey2 = _interopRequireDefault(_voNeedKey);

var _voDashJSError = _dereq_(28);

var _voDashJSError2 = _interopRequireDefault(_voDashJSError);

var _errorsProtectionErrors = _dereq_(13);

var _errorsProtectionErrors2 = _interopRequireDefault(_errorsProtectionErrors);

var _voKeyMessage = _dereq_(22);

var _voKeyMessage2 = _interopRequireDefault(_voKeyMessage);

var _voKeySystemConfiguration = _dereq_(25);

var _voKeySystemConfiguration2 = _interopRequireDefault(_voKeySystemConfiguration);

var _voKeySystemAccess = _dereq_(24);

var _voKeySystemAccess2 = _interopRequireDefault(_voKeySystemAccess);

function ProtectionModel_3Feb2014(config) {

    config = config || {};
    var context = this.context;
    var eventBus = config.eventBus; //Need to pass in here so we can use same instance since this is optional module
    var events = config.events;
    var debug = config.debug;
    var api = config.api;

    var instance = undefined,
        logger = undefined,
        videoElement = undefined,
        keySystem = undefined,
        mediaKeys = undefined,
        keySystemAccess = undefined,
        sessions = undefined,
        eventHandler = undefined,
        protectionKeyController = undefined;

    function setup() {
        logger = debug.getLogger(instance);
        videoElement = null;
        keySystem = null;
        mediaKeys = null;
        keySystemAccess = null;
        sessions = [];
        protectionKeyController = (0, _controllersProtectionKeyController2['default'])(context).getInstance();
        eventHandler = createEventHandler();
    }

    function reset() {
        try {
            for (var i = 0; i < sessions.length; i++) {
                closeKeySession(sessions[i]);
            }
            if (videoElement) {
                videoElement.removeEventListener(api.needkey, eventHandler);
            }
            eventBus.trigger(events.TEARDOWN_COMPLETE);
        } catch (error) {
            eventBus.trigger(events.TEARDOWN_COMPLETE, { error: 'Error tearing down key sessions and MediaKeys! -- ' + error.message });
        }
    }

    function getKeySystem() {
        return keySystem;
    }

    function getAllInitData() {
        var retVal = [];
        for (var i = 0; i < sessions.length; i++) {
            retVal.push(sessions[i].initData);
        }
        return retVal;
    }

    function requestKeySystemAccess(ksConfigurations) {

        // Try key systems in order, first one with supported key system configuration
        // is used
        var found = false;
        for (var ksIdx = 0; ksIdx < ksConfigurations.length; ksIdx++) {
            var systemString = ksConfigurations[ksIdx].ks.systemString;
            var configs = ksConfigurations[ksIdx].configs;
            var supportedAudio = null;
            var supportedVideo = null;

            // Try key system configs in order, first one with supported audio/video
            // is used
            for (var configIdx = 0; configIdx < configs.length; configIdx++) {
                var audios = configs[configIdx].audioCapabilities;
                var videos = configs[configIdx].videoCapabilities;

                // Look for supported audio container/codecs
                if (audios && audios.length !== 0) {
                    supportedAudio = []; // Indicates that we have a requested audio config
                    for (var audioIdx = 0; audioIdx < audios.length; audioIdx++) {
                        if (window[api.MediaKeys].isTypeSupported(systemString, audios[audioIdx].contentType)) {
                            supportedAudio.push(audios[audioIdx]);
                        }
                    }
                }

                // Look for supported video container/codecs
                if (videos && videos.length !== 0) {
                    supportedVideo = []; // Indicates that we have a requested video config
                    for (var videoIdx = 0; videoIdx < videos.length; videoIdx++) {
                        if (window[api.MediaKeys].isTypeSupported(systemString, videos[videoIdx].contentType)) {
                            supportedVideo.push(videos[videoIdx]);
                        }
                    }
                }

                // No supported audio or video in this configuration OR we have
                // requested audio or video configuration that is not supported
                if (!supportedAudio && !supportedVideo || supportedAudio && supportedAudio.length === 0 || supportedVideo && supportedVideo.length === 0) {
                    continue;
                }

                // This configuration is supported
                found = true;
                var ksConfig = new _voKeySystemConfiguration2['default'](supportedAudio, supportedVideo);
                var ks = protectionKeyController.getKeySystemBySystemString(systemString);
                eventBus.trigger(events.KEY_SYSTEM_ACCESS_COMPLETE, { data: new _voKeySystemAccess2['default'](ks, ksConfig) });
                break;
            }
        }
        if (!found) {
            eventBus.trigger(events.KEY_SYSTEM_ACCESS_COMPLETE, { error: 'Key system access denied! -- No valid audio/video content configurations detected!' });
        }
    }

    function selectKeySystem(ksAccess) {
        try {
            mediaKeys = ksAccess.mediaKeys = new window[api.MediaKeys](ksAccess.keySystem.systemString);
            keySystem = ksAccess.keySystem;
            keySystemAccess = ksAccess;
            if (videoElement) {
                setMediaKeys();
            }
            eventBus.trigger(events.INTERNAL_KEY_SYSTEM_SELECTED);
        } catch (error) {
            eventBus.trigger(events.INTERNAL_KEY_SYSTEM_SELECTED, { error: 'Error selecting keys system (' + keySystem.systemString + ')! Could not create MediaKeys -- TODO' });
        }
    }

    function setMediaElement(mediaElement) {
        if (videoElement === mediaElement) return;

        // Replacing the previous element
        if (videoElement) {
            videoElement.removeEventListener(api.needkey, eventHandler);
        }

        videoElement = mediaElement;

        // Only if we are not detaching from the existing element
        if (videoElement) {
            videoElement.addEventListener(api.needkey, eventHandler);
            if (mediaKeys) {
                setMediaKeys();
            }
        }
    }

    function createKeySession(initData, protData, sessionType, cdmData) {
        if (!keySystem || !mediaKeys || !keySystemAccess) {
            throw new Error('Can not create sessions until you have selected a key system');
        }

        // Use the first video capability for the contentType.
        // TODO:  Not sure if there is a way to concatenate all capability data into a RFC6386-compatible format

        // If player is trying to playback Audio only stream - don't error out.
        var capabilities = null;

        if (keySystemAccess.ksConfiguration.videoCapabilities && keySystemAccess.ksConfiguration.videoCapabilities.length > 0) {
            capabilities = keySystemAccess.ksConfiguration.videoCapabilities[0];
        }

        if (capabilities === null && keySystemAccess.ksConfiguration.audioCapabilities && keySystemAccess.ksConfiguration.audioCapabilities.length > 0) {
            capabilities = keySystemAccess.ksConfiguration.audioCapabilities[0];
        }

        if (capabilities === null) {
            throw new Error('Can not create sessions for unknown content types.');
        }

        var contentType = capabilities.contentType;
        var session = mediaKeys.createSession(contentType, new Uint8Array(initData), cdmData ? new Uint8Array(cdmData) : null);
        var sessionToken = createSessionToken(session, initData);

        // Add all event listeners
        session.addEventListener(api.error, sessionToken);
        session.addEventListener(api.message, sessionToken);
        session.addEventListener(api.ready, sessionToken);
        session.addEventListener(api.close, sessionToken);

        // Add to our session list
        sessions.push(sessionToken);
        logger.debug('DRM: Session created.  SessionID = ' + sessionToken.getSessionID());
        eventBus.trigger(events.KEY_SESSION_CREATED, { data: sessionToken });
    }

    function updateKeySession(sessionToken, message) {
        var session = sessionToken.session;

        if (!protectionKeyController.isClearKey(keySystem)) {
            // Send our request to the key session
            session.update(new Uint8Array(message));
        } else {
            // For clearkey, message is a ClearKeyKeySet
            session.update(new Uint8Array(message.toJWK()));
        }
    }

    /**
     * Close the given session and release all associated keys.  Following
     * this call, the sessionToken becomes invalid
     *
     * @param {Object} sessionToken - the session token
     */
    function closeKeySession(sessionToken) {
        var session = sessionToken.session;

        // Remove event listeners
        session.removeEventListener(api.error, sessionToken);
        session.removeEventListener(api.message, sessionToken);
        session.removeEventListener(api.ready, sessionToken);
        session.removeEventListener(api.close, sessionToken);

        // Remove from our session list
        for (var i = 0; i < sessions.length; i++) {
            if (sessions[i] === sessionToken) {
                sessions.splice(i, 1);
                break;
            }
        }

        // Send our request to the key session
        session[api.release]();
    }

    function setServerCertificate() /*serverCertificate*/{/* Not supported */}
    function loadKeySession() /*sessionID*/{/* Not supported */}
    function removeKeySession() /*sessionToken*/{/* Not supported */}

    function createEventHandler() {
        return {
            handleEvent: function handleEvent(event) {
                switch (event.type) {

                    case api.needkey:
                        if (event.initData) {
                            var initData = ArrayBuffer.isView(event.initData) ? event.initData.buffer : event.initData;
                            eventBus.trigger(events.NEED_KEY, { key: new _voNeedKey2['default'](initData, 'cenc') });
                        }
                        break;
                }
            }
        };
    }

    // IE11 does not let you set MediaKeys until it has entered a certain
    // readyState, so we need this logic to ensure we don't set the keys
    // too early
    function setMediaKeys() {
        var boundDoSetKeys = null;
        var doSetKeys = function doSetKeys() {
            videoElement.removeEventListener('loadedmetadata', boundDoSetKeys);
            videoElement[api.setMediaKeys](mediaKeys);
            eventBus.trigger(events.VIDEO_ELEMENT_SELECTED);
        };
        if (videoElement.readyState >= 1) {
            doSetKeys();
        } else {
            boundDoSetKeys = doSetKeys.bind(this);
            videoElement.addEventListener('loadedmetadata', boundDoSetKeys);
        }
    }

    // Function to create our session token objects which manage the EME
    // MediaKeySession and session-specific event handler
    function createSessionToken(keySession, initData) {
        return {
            // Implements SessionToken
            session: keySession,
            initData: initData,

            getSessionID: function getSessionID() {
                return this.session.sessionId;
            },

            getExpirationTime: function getExpirationTime() {
                return NaN;
            },

            getSessionType: function getSessionType() {
                return 'temporary';
            },
            // This is our main event handler for all desired MediaKeySession events
            // These events are translated into our API-independent versions of the
            // same events
            handleEvent: function handleEvent(event) {
                switch (event.type) {
                    case api.error:
                        var errorStr = 'KeyError'; // TODO: Make better string from event
                        eventBus.trigger(events.KEY_ERROR, { data: new _voDashJSError2['default'](_errorsProtectionErrors2['default'].MEDIA_KEYERR_CODE, errorStr, this) });
                        break;
                    case api.message:
                        var message = ArrayBuffer.isView(event.message) ? event.message.buffer : event.message;
                        eventBus.trigger(events.INTERNAL_KEY_MESSAGE, { data: new _voKeyMessage2['default'](this, message, event.destinationURL) });
                        break;
                    case api.ready:
                        logger.debug('DRM: Key added.');
                        eventBus.trigger(events.KEY_ADDED);
                        break;

                    case api.close:
                        logger.debug('DRM: Session closed.  SessionID = ' + this.getSessionID());
                        eventBus.trigger(events.KEY_SESSION_CLOSED, { data: this.getSessionID() });
                        break;
                }
            }
        };
    }

    instance = {
        getAllInitData: getAllInitData,
        requestKeySystemAccess: requestKeySystemAccess,
        getKeySystem: getKeySystem,
        selectKeySystem: selectKeySystem,
        setMediaElement: setMediaElement,
        createKeySession: createKeySession,
        updateKeySession: updateKeySession,
        closeKeySession: closeKeySession,
        setServerCertificate: setServerCertificate,
        loadKeySession: loadKeySession,
        removeKeySession: removeKeySession,
        stop: reset,
        reset: reset
    };

    setup();

    return instance;
}

ProtectionModel_3Feb2014.__dashjs_factory_name = 'ProtectionModel_3Feb2014';
exports['default'] = dashjs.FactoryMaker.getClassFactory(ProtectionModel_3Feb2014);
/* jshint ignore:line */
module.exports = exports['default'];

},{"13":13,"22":22,"24":24,"25":25,"27":27,"28":28,"8":8}],17:[function(_dereq_,module,exports){
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
 * CableLabs ClearKey license server implementation
 *
 * For testing purposes and evaluating potential uses for ClearKey, we have developed
 * a dirt-simple API for requesting ClearKey licenses from a remote server.
 *
 * @implements LicenseServer
 * @class
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _voKeyPair = _dereq_(23);

var _voKeyPair2 = _interopRequireDefault(_voKeyPair);

var _voClearKeyKeySet = _dereq_(21);

var _voClearKeyKeySet2 = _interopRequireDefault(_voClearKeyKeySet);

function ClearKey() {

    var instance = undefined;

    function getServerURLFromMessage(url, message /*, messageType*/) {
        // Build ClearKey server query string
        var jsonMsg = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(message)));
        url += '/?';
        for (var i = 0; i < jsonMsg.kids.length; i++) {
            url += jsonMsg.kids[i] + '&';
        }
        url = url.substring(0, url.length - 1);
        return url;
    }

    function getHTTPMethod() /*messageType*/{
        return 'GET';
    }

    function getResponseType() /*keySystemStr*/{
        return 'json';
    }

    function getLicenseMessage(serverResponse /*, keySystemStr, messageType*/) {
        if (!serverResponse.hasOwnProperty('keys')) {
            return null;
        }
        var keyPairs = [];
        for (var i = 0; i < serverResponse.keys.length; i++) {
            var keypair = serverResponse.keys[i];
            var keyid = keypair.kid.replace(/=/g, '');
            var key = keypair.k.replace(/=/g, '');

            keyPairs.push(new _voKeyPair2['default'](keyid, key));
        }
        return new _voClearKeyKeySet2['default'](keyPairs);
    }

    function getErrorResponse(serverResponse /*, keySystemStr, messageType*/) {
        return String.fromCharCode.apply(null, new Uint8Array(serverResponse));
    }

    instance = {
        getServerURLFromMessage: getServerURLFromMessage,
        getHTTPMethod: getHTTPMethod,
        getResponseType: getResponseType,
        getLicenseMessage: getLicenseMessage,
        getErrorResponse: getErrorResponse
    };

    return instance;
}

ClearKey.__dashjs_factory_name = 'ClearKey';
exports['default'] = dashjs.FactoryMaker.getSingletonFactory(ClearKey);
/* jshint ignore:line */
module.exports = exports['default'];

},{"21":21,"23":23}],18:[function(_dereq_,module,exports){
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
 * CastLabs DRMToday License Server implementation
 *
 * @implements LicenseServer
 * @class
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _constantsProtectionConstants = _dereq_(3);

var _constantsProtectionConstants2 = _interopRequireDefault(_constantsProtectionConstants);

function DRMToday(config) {

    config = config || {};
    var BASE64 = config.BASE64;

    var keySystems = {};
    keySystems[_constantsProtectionConstants2['default'].WIDEVINE_KEYSTEM_STRING] = {
        responseType: 'json',
        getLicenseMessage: function getLicenseMessage(response) {
            return BASE64.decodeArray(response.license);
        },
        getErrorResponse: function getErrorResponse(response) {
            return response;
        }
    };
    keySystems[_constantsProtectionConstants2['default'].PLAYREADY_KEYSTEM_STRING] = {
        responseType: 'arraybuffer',
        getLicenseMessage: function getLicenseMessage(response) {
            return response;
        },
        getErrorResponse: function getErrorResponse(response) {
            return String.fromCharCode.apply(null, new Uint8Array(response));
        }
    };

    var instance = undefined;

    function checkConfig() {
        if (!BASE64 || !BASE64.hasOwnProperty('decodeArray')) {
            throw new Error('Missing config parameter(s)');
        }
    }

    function getServerURLFromMessage(url /*, message, messageType*/) {
        return url;
    }

    function getHTTPMethod() /*messageType*/{
        return 'POST';
    }

    function getResponseType(keySystemStr /*, messageType*/) {
        return keySystems[keySystemStr].responseType;
    }

    function getLicenseMessage(serverResponse, keySystemStr /*, messageType*/) {
        checkConfig();
        return keySystems[keySystemStr].getLicenseMessage(serverResponse);
    }

    function getErrorResponse(serverResponse, keySystemStr /*, messageType*/) {
        return keySystems[keySystemStr].getErrorResponse(serverResponse);
    }

    instance = {
        getServerURLFromMessage: getServerURLFromMessage,
        getHTTPMethod: getHTTPMethod,
        getResponseType: getResponseType,
        getLicenseMessage: getLicenseMessage,
        getErrorResponse: getErrorResponse
    };

    return instance;
}

DRMToday.__dashjs_factory_name = 'DRMToday';
exports['default'] = dashjs.FactoryMaker.getSingletonFactory(DRMToday);
/* jshint ignore:line */
module.exports = exports['default'];

},{"3":3}],19:[function(_dereq_,module,exports){
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

/* global escape: true */

/**
 * Microsoft PlayReady Test License Server
 *
 * For testing content that uses the PlayReady test server at
 *
 * @implements LicenseServer
 * @class
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function PlayReady() {

    var instance = undefined;

    var soap = 'http://schemas.xmlsoap.org/soap/envelope/';

    function uintToString(arrayBuffer) {
        var encodedString = String.fromCharCode.apply(null, new Uint8Array(arrayBuffer));
        var decodedString = decodeURIComponent(escape(encodedString));
        return decodedString;
    }

    function parseServerResponse(serverResponse) {
        if (window.DOMParser) {
            var stringResponse = uintToString(serverResponse);
            var parser = new window.DOMParser();
            var xmlDoc = parser.parseFromString(stringResponse, 'text/xml');
            var envelope = xmlDoc ? xmlDoc.getElementsByTagNameNS(soap, 'Envelope')[0] : null;
            var body = envelope ? envelope.getElementsByTagNameNS(soap, 'Body')[0] : null;
            var fault = body ? body.getElementsByTagNameNS(soap, 'Fault')[0] : null;

            if (fault) {
                return null;
            }
        }
        return serverResponse;
    }

    function parseErrorResponse(serverResponse) {
        var faultstring = '';
        var statusCode = '';
        var message = '';
        var idStart = -1;
        var idEnd = -1;

        if (window.DOMParser) {
            var stringResponse = uintToString(serverResponse);
            var parser = new window.DOMParser();
            var xmlDoc = parser.parseFromString(stringResponse, 'text/xml');
            var envelope = xmlDoc ? xmlDoc.getElementsByTagNameNS(soap, 'Envelope')[0] : null;
            var body = envelope ? envelope.getElementsByTagNameNS(soap, 'Body')[0] : null;
            var fault = body ? body.getElementsByTagNameNS(soap, 'Fault')[0] : null;
            var detail = fault ? fault.getElementsByTagName('detail')[0] : null;
            var exception = detail ? detail.getElementsByTagName('Exception')[0] : null;
            var node = null;

            if (fault === null) {
                return stringResponse;
            }

            node = fault.getElementsByTagName('faultstring')[0].firstChild;
            faultstring = node ? node.nodeValue : null;

            if (exception !== null) {
                node = exception.getElementsByTagName('StatusCode')[0];
                statusCode = node ? node.firstChild.nodeValue : null;
                node = exception.getElementsByTagName('Message')[0];
                message = node ? node.firstChild.nodeValue : null;
                idStart = message ? message.lastIndexOf('[') + 1 : -1;
                idEnd = message ? message.indexOf(']') : -1;
                message = message ? message.substring(idStart, idEnd) : '';
            }
        }

        var errorString = 'code: ' + statusCode + ', name: ' + faultstring;
        if (message) {
            errorString += ', message: ' + message;
        }

        return errorString;
    }

    function getServerURLFromMessage(url /*, message, messageType*/) {
        return url;
    }

    function getHTTPMethod() /*messageType*/{
        return 'POST';
    }

    function getResponseType() /*keySystemStr, messageType*/{
        return 'arraybuffer';
    }

    function getLicenseMessage(serverResponse /*, keySystemStr, messageType*/) {
        return parseServerResponse.call(this, serverResponse);
    }

    function getErrorResponse(serverResponse /*, keySystemStr, messageType*/) {
        return parseErrorResponse.call(this, serverResponse);
    }

    instance = {
        getServerURLFromMessage: getServerURLFromMessage,
        getHTTPMethod: getHTTPMethod,
        getResponseType: getResponseType,
        getLicenseMessage: getLicenseMessage,
        getErrorResponse: getErrorResponse
    };

    return instance;
}

PlayReady.__dashjs_factory_name = 'PlayReady';
exports['default'] = dashjs.FactoryMaker.getSingletonFactory(PlayReady);
/* jshint ignore:line */
module.exports = exports['default'];

},{}],20:[function(_dereq_,module,exports){
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
function Widevine() {

    var instance = undefined;

    function getServerURLFromMessage(url /*, message, messageType*/) {
        return url;
    }

    function getHTTPMethod() /*messageType*/{
        return 'POST';
    }

    function getResponseType() /*keySystemStr, messageType*/{
        return 'arraybuffer';
    }

    function getLicenseMessage(serverResponse /*, keySystemStr, messageType*/) {
        return serverResponse;
    }

    function getErrorResponse(serverResponse /*, keySystemStr, messageType*/) {
        return String.fromCharCode.apply(null, new Uint8Array(serverResponse));
    }

    instance = {
        getServerURLFromMessage: getServerURLFromMessage,
        getHTTPMethod: getHTTPMethod,
        getResponseType: getResponseType,
        getLicenseMessage: getLicenseMessage,
        getErrorResponse: getErrorResponse
    };

    return instance;
}

Widevine.__dashjs_factory_name = 'Widevine';
exports['default'] = dashjs.FactoryMaker.getSingletonFactory(Widevine);
/* jshint ignore:line */
module.exports = exports['default'];

},{}],21:[function(_dereq_,module,exports){
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
 * @classdesc A collection of ClearKey encryption keys with an (optional) associated
 *  type
 * @ignore
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ClearKeyKeySet = (function () {
    /**
     * @param {Array.<KeyPair>} keyPairs
     * @param {string} type the type of keys in this set.  One of either 'persistent'
     * or 'temporary'.  Can also be null or undefined.
     * @class
     * @ignore
     */

    function ClearKeyKeySet(keyPairs, type) {
        _classCallCheck(this, ClearKeyKeySet);

        if (type && type !== 'persistent' && type !== 'temporary') throw new Error('Invalid ClearKey key set type!  Must be one of \'persistent\' or \'temporary\'');
        this.keyPairs = keyPairs;
        this.type = type;
    }

    /**
     * Convert this key set to its JSON Web Key (JWK) representation
     *
     * @return {ArrayBuffer} JWK object UTF-8 encoded as ArrayBuffer
     */

    _createClass(ClearKeyKeySet, [{
        key: 'toJWK',
        value: function toJWK() {
            var i = undefined;
            var numKeys = this.keyPairs.length;
            var jwk = { keys: [] };

            for (i = 0; i < numKeys; i++) {
                var key = {
                    kty: 'oct',
                    alg: 'A128KW',
                    kid: this.keyPairs[i].keyID,
                    k: this.keyPairs[i].key
                };
                jwk.keys.push(key);
            }
            if (this.type) {
                jwk.type = this.type;
            }
            var jwkString = JSON.stringify(jwk);
            var len = jwkString.length;

            // Convert JSON string to ArrayBuffer
            var buf = new ArrayBuffer(len);
            var bView = new Uint8Array(buf);
            for (i = 0; i < len; i++) bView[i] = jwkString.charCodeAt(i);
            return buf;
        }
    }]);

    return ClearKeyKeySet;
})();

exports['default'] = ClearKeyKeySet;
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
/**
 * @classdesc EME-independent KeyMessage
 * @ignore
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var KeyMessage =
/**
 * @param {SessionToken} sessionToken the session
 * to which the key message is associated
 * @param {ArrayBuffer} message the key message
 * @param {string} defaultURL license acquisition URL provided by the CDM
 * @param {string} messageType Supported message types can be found
 * {@link https://w3c.github.io/encrypted-media/#idl-def-MediaKeyMessageType|here}.
 * @class
 */
function KeyMessage(sessionToken, message, defaultURL, messageType) {
  _classCallCheck(this, KeyMessage);

  this.sessionToken = sessionToken;
  this.message = message;
  this.defaultURL = defaultURL;
  this.messageType = messageType ? messageType : 'license-request';
};

exports['default'] = KeyMessage;
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
 * @classdesc Represents a 128-bit keyID and 128-bit encryption key
 * @ignore
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KeyPair =
/**
 * @param {string} keyID 128-bit key ID, base64 encoded, with no padding
 * @param {string} key 128-bit encryption key, base64 encoded, with no padding
 * @class
 * @ignore
 */
function KeyPair(keyID, key) {
  _classCallCheck(this, KeyPair);

  this.keyID = keyID;
  this.key = key;
};

exports["default"] = KeyPair;
module.exports = exports["default"];

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
 * @classdesc Creates a new key system access token.  Represents a valid key system for
 * given piece of content and key system requirements.  Used to initialize license
 * acquisition operations.
 * @ignore
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KeySystemAccess =
/**
 * @param {MediaPlayer.dependencies.protection.KeySystem} keySystem the key system
 * @param {KeySystemConfiguration} ksConfiguration the
 * subset of configurations passed to the key system access request that are supported
 * by this user agent
 * @class
 * @ignore
 */
function KeySystemAccess(keySystem, ksConfiguration) {
  _classCallCheck(this, KeySystemAccess);

  this.keySystem = keySystem;
  this.ksConfiguration = ksConfiguration;
};

exports["default"] = KeySystemAccess;
module.exports = exports["default"];

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
 * @classdesc Represents a set of configurations that describe the capabilities desired for
 *  support by a given CDM
 * @ignore
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var KeySystemConfiguration =
/**
 * @param {Array.<MediaCapability>} audioCapabilities array of
 * desired audio capabilities.  Higher preference capabilities should be placed earlier
 * in the array.
 * @param {Array.<MediaCapability>} videoCapabilities array of
 * desired video capabilities.  Higher preference capabilities should be placed earlier
 * in the array.
 * @param {string} distinctiveIdentifier desired use of distinctive identifiers.
 * One of "required", "optional", or "not-allowed"
 * @param {string} persistentState desired support for persistent storage of
 * key systems.  One of "required", "optional", or "not-allowed"
 * @param {Array.<string>} sessionTypes List of session types that must
 * be supported by the key system
 * @class
 */
function KeySystemConfiguration(audioCapabilities, videoCapabilities, distinctiveIdentifier, persistentState, sessionTypes) {
    _classCallCheck(this, KeySystemConfiguration);

    this.initDataTypes = ['cenc'];
    if (audioCapabilities && audioCapabilities.length) {
        this.audioCapabilities = audioCapabilities;
    }
    if (videoCapabilities && videoCapabilities.length) {
        this.videoCapabilities = videoCapabilities;
    }
    this.distinctiveIdentifier = distinctiveIdentifier;
    this.persistentState = persistentState;
    this.sessionTypes = sessionTypes;
};

exports['default'] = KeySystemConfiguration;
module.exports = exports['default'];

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
 * @classdesc A media capability
 * @ignore
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediaCapability =
/**
 * @param {string} contentType MIME type and codecs (RFC6386)
 * @param {string} robustness
 * @class
 * @ignore
 */
function MediaCapability(contentType, robustness) {
  _classCallCheck(this, MediaCapability);

  this.contentType = contentType;
  this.robustness = robustness;
};

exports["default"] = MediaCapability;
module.exports = exports["default"];

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
/**
 * @classdesc NeedKey
 * @ignore
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NeedKey =
/**
 * @param {ArrayBuffer} initData the initialization data
 * @param {string} initDataType initialization data type
 * @class
 */
function NeedKey(initData, initDataType) {
  _classCallCheck(this, NeedKey);

  this.initData = initData;
  this.initDataType = initDataType;
};

exports["default"] = NeedKey;
module.exports = exports["default"];

},{}],28:[function(_dereq_,module,exports){
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

var DashJSError = function DashJSError(code, message, data) {
  _classCallCheck(this, DashJSError);

  this.code = code || null;
  this.message = message || null;
  this.data = data || null;
};

exports["default"] = DashJSError;
module.exports = exports["default"];

},{}]},{},[5])(5)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJEOi9HaXQvR2l0aHViL2Rhc2guanMvc3JjL2NvcmUvZXJyb3JzL0Vycm9yc0Jhc2UuanMiLCJEOi9HaXQvR2l0aHViL2Rhc2guanMvc3JjL2NvcmUvZXZlbnRzL0V2ZW50c0Jhc2UuanMiLCJEOi9HaXQvR2l0aHViL2Rhc2guanMvc3JjL3N0cmVhbWluZy9jb25zdGFudHMvUHJvdGVjdGlvbkNvbnN0YW50cy5qcyIsIkQ6L0dpdC9HaXRodWIvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL3Byb3RlY3Rpb24vQ29tbW9uRW5jcnlwdGlvbi5qcyIsIkQ6L0dpdC9HaXRodWIvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL3Byb3RlY3Rpb24vUHJvdGVjdGlvbi5qcyIsIkQ6L0dpdC9HaXRodWIvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL3Byb3RlY3Rpb24vUHJvdGVjdGlvbkV2ZW50cy5qcyIsIkQ6L0dpdC9HaXRodWIvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL3Byb3RlY3Rpb24vY29udHJvbGxlcnMvUHJvdGVjdGlvbkNvbnRyb2xsZXIuanMiLCJEOi9HaXQvR2l0aHViL2Rhc2guanMvc3JjL3N0cmVhbWluZy9wcm90ZWN0aW9uL2NvbnRyb2xsZXJzL1Byb3RlY3Rpb25LZXlDb250cm9sbGVyLmpzIiwiRDovR2l0L0dpdGh1Yi9kYXNoLmpzL3NyYy9zdHJlYW1pbmcvcHJvdGVjdGlvbi9kcm0vS2V5U3lzdGVtQ2xlYXJLZXkuanMiLCJEOi9HaXQvR2l0aHViL2Rhc2guanMvc3JjL3N0cmVhbWluZy9wcm90ZWN0aW9uL2RybS9LZXlTeXN0ZW1QbGF5UmVhZHkuanMiLCJEOi9HaXQvR2l0aHViL2Rhc2guanMvc3JjL3N0cmVhbWluZy9wcm90ZWN0aW9uL2RybS9LZXlTeXN0ZW1XM0NDbGVhcktleS5qcyIsIkQ6L0dpdC9HaXRodWIvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL3Byb3RlY3Rpb24vZHJtL0tleVN5c3RlbVdpZGV2aW5lLmpzIiwiRDovR2l0L0dpdGh1Yi9kYXNoLmpzL3NyYy9zdHJlYW1pbmcvcHJvdGVjdGlvbi9lcnJvcnMvUHJvdGVjdGlvbkVycm9ycy5qcyIsIkQ6L0dpdC9HaXRodWIvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL3Byb3RlY3Rpb24vbW9kZWxzL1Byb3RlY3Rpb25Nb2RlbF8wMWIuanMiLCJEOi9HaXQvR2l0aHViL2Rhc2guanMvc3JjL3N0cmVhbWluZy9wcm90ZWN0aW9uL21vZGVscy9Qcm90ZWN0aW9uTW9kZWxfMjFKYW4yMDE1LmpzIiwiRDovR2l0L0dpdGh1Yi9kYXNoLmpzL3NyYy9zdHJlYW1pbmcvcHJvdGVjdGlvbi9tb2RlbHMvUHJvdGVjdGlvbk1vZGVsXzNGZWIyMDE0LmpzIiwiRDovR2l0L0dpdGh1Yi9kYXNoLmpzL3NyYy9zdHJlYW1pbmcvcHJvdGVjdGlvbi9zZXJ2ZXJzL0NsZWFyS2V5LmpzIiwiRDovR2l0L0dpdGh1Yi9kYXNoLmpzL3NyYy9zdHJlYW1pbmcvcHJvdGVjdGlvbi9zZXJ2ZXJzL0RSTVRvZGF5LmpzIiwiRDovR2l0L0dpdGh1Yi9kYXNoLmpzL3NyYy9zdHJlYW1pbmcvcHJvdGVjdGlvbi9zZXJ2ZXJzL1BsYXlSZWFkeS5qcyIsIkQ6L0dpdC9HaXRodWIvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL3Byb3RlY3Rpb24vc2VydmVycy9XaWRldmluZS5qcyIsIkQ6L0dpdC9HaXRodWIvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL3Byb3RlY3Rpb24vdm8vQ2xlYXJLZXlLZXlTZXQuanMiLCJEOi9HaXQvR2l0aHViL2Rhc2guanMvc3JjL3N0cmVhbWluZy9wcm90ZWN0aW9uL3ZvL0tleU1lc3NhZ2UuanMiLCJEOi9HaXQvR2l0aHViL2Rhc2guanMvc3JjL3N0cmVhbWluZy9wcm90ZWN0aW9uL3ZvL0tleVBhaXIuanMiLCJEOi9HaXQvR2l0aHViL2Rhc2guanMvc3JjL3N0cmVhbWluZy9wcm90ZWN0aW9uL3ZvL0tleVN5c3RlbUFjY2Vzcy5qcyIsIkQ6L0dpdC9HaXRodWIvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL3Byb3RlY3Rpb24vdm8vS2V5U3lzdGVtQ29uZmlndXJhdGlvbi5qcyIsIkQ6L0dpdC9HaXRodWIvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL3Byb3RlY3Rpb24vdm8vTWVkaWFDYXBhYmlsaXR5LmpzIiwiRDovR2l0L0dpdGh1Yi9kYXNoLmpzL3NyYy9zdHJlYW1pbmcvcHJvdGVjdGlvbi92by9OZWVkS2V5LmpzIiwiRDovR2l0L0dpdGh1Yi9kYXNoLmpzL3NyYy9zdHJlYW1pbmcvdm8vRGFzaEpTRXJyb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2tDTSxVQUFVO2FBQVYsVUFBVTs4QkFBVixVQUFVOzs7aUJBQVYsVUFBVTs7ZUFDTCxnQkFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQ3BCLGdCQUFJLENBQUMsTUFBTSxFQUFFLE9BQU87O0FBRXBCLGdCQUFJLFFBQVEsR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDaEQsZ0JBQUksVUFBVSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzs7QUFHcEQsaUJBQUssSUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO0FBQ3RCLG9CQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEFBQUMsRUFBRSxTQUFTO0FBQ3RFLG9CQUFJLFVBQVUsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVM7QUFDbEUsb0JBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFFM0I7U0FDSjs7O1dBZEMsVUFBVTs7O3FCQWlCRCxVQUFVOzs7Ozs7Ozs7Ozs7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Iiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuLyoqXG4gKiBAY2xhc3NcbiAqIEBpZ25vcmVcbiAqL1xuY2xhc3MgRXJyb3JzQmFzZSB7XG4gICAgZXh0ZW5kIChlcnJvcnMsIGNvbmZpZykge1xuICAgICAgICBpZiAoIWVycm9ycykgcmV0dXJuO1xuXG4gICAgICAgIGxldCBvdmVycmlkZSA9IGNvbmZpZyA/IGNvbmZpZy5vdmVycmlkZSA6IGZhbHNlO1xuICAgICAgICBsZXQgcHVibGljT25seSA9IGNvbmZpZyA/IGNvbmZpZy5wdWJsaWNPbmx5IDogZmFsc2U7XG5cblxuICAgICAgICBmb3IgKGNvbnN0IGVyciBpbiBlcnJvcnMpIHtcbiAgICAgICAgICAgIGlmICghZXJyb3JzLmhhc093blByb3BlcnR5KGVycikgfHwgKHRoaXNbZXJyXSAmJiAhb3ZlcnJpZGUpKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChwdWJsaWNPbmx5ICYmIGVycm9yc1tlcnJdLmluZGV4T2YoJ3B1YmxpY18nKSA9PT0gLTEpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGhpc1tlcnJdID0gZXJyb3JzW2Vycl07XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JzQmFzZTsiLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuLyoqXG4gKiBAY2xhc3NcbiAqIEBpZ25vcmVcbiAqL1xuY2xhc3MgRXZlbnRzQmFzZSB7XG4gICAgZXh0ZW5kIChldmVudHMsIGNvbmZpZykge1xuICAgICAgICBpZiAoIWV2ZW50cykgcmV0dXJuO1xuXG4gICAgICAgIGxldCBvdmVycmlkZSA9IGNvbmZpZyA/IGNvbmZpZy5vdmVycmlkZSA6IGZhbHNlO1xuICAgICAgICBsZXQgcHVibGljT25seSA9IGNvbmZpZyA/IGNvbmZpZy5wdWJsaWNPbmx5IDogZmFsc2U7XG5cblxuICAgICAgICBmb3IgKGNvbnN0IGV2dCBpbiBldmVudHMpIHtcbiAgICAgICAgICAgIGlmICghZXZlbnRzLmhhc093blByb3BlcnR5KGV2dCkgfHwgKHRoaXNbZXZ0XSAmJiAhb3ZlcnJpZGUpKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChwdWJsaWNPbmx5ICYmIGV2ZW50c1tldnRdLmluZGV4T2YoJ3B1YmxpY18nKSA9PT0gLTEpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGhpc1tldnRdID0gZXZlbnRzW2V2dF07XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzQmFzZTsiLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG4vKipcbiAqIFByb3RlY3Rpb24gQ29uc3RhbnRzIGRlY2xhcmF0aW9uXG4gKiBAY2xhc3NcbiAqIEBpZ25vcmVcbiAqL1xuY2xhc3MgUHJvdGVjdGlvbkNvbnN0YW50cyB7XG5cbiAgICBpbml0ICgpIHtcbiAgICAgICAgdGhpcy5DTEVBUktFWV9LRVlTVEVNX1NUUklORyA9ICdvcmcudzMuY2xlYXJrZXknO1xuICAgICAgICB0aGlzLldJREVWSU5FX0tFWVNURU1fU1RSSU5HID0gJ2NvbS53aWRldmluZS5hbHBoYSc7XG4gICAgICAgIHRoaXMuUExBWVJFQURZX0tFWVNURU1fU1RSSU5HID0gJ2NvbS5taWNyb3NvZnQucGxheXJlYWR5JztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbn1cblxubGV0IGNvbnN0YW50cyA9IG5ldyBQcm90ZWN0aW9uQ29uc3RhbnRzKCk7XG5leHBvcnQgZGVmYXVsdCBjb25zdGFudHM7XG4iLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG5jbGFzcyBDb21tb25FbmNyeXB0aW9uIHtcbiAgICAvKipcbiAgICAgKiBGaW5kIGFuZCByZXR1cm4gdGhlIENvbnRlbnRQcm90ZWN0aW9uIGVsZW1lbnQgaW4gdGhlIGdpdmVuIGFycmF5XG4gICAgICogdGhhdCBpbmRpY2F0ZXMgc3VwcG9ydCBmb3IgTVBFRyBDb21tb24gRW5jcnlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gY3BBcnJheSBhcnJheSBvZiBjb250ZW50IHByb3RlY3Rpb24gZWxlbWVudHNcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9IHRoZSBDb21tb24gRW5jcnlwdGlvbiBjb250ZW50IHByb3RlY3Rpb24gZWxlbWVudCBvclxuICAgICAqIG51bGwgaWYgb25lIHdhcyBub3QgZm91bmRcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZENlbmNDb250ZW50UHJvdGVjdGlvbihjcEFycmF5KSB7XG4gICAgICAgIGxldCByZXRWYWwgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNwQXJyYXkubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBjcCA9IGNwQXJyYXlbaV07XG4gICAgICAgICAgICBpZiAoY3Auc2NoZW1lSWRVcmkudG9Mb3dlckNhc2UoKSA9PT0gJ3VybjptcGVnOmRhc2g6bXA0cHJvdGVjdGlvbjoyMDExJyAmJlxuICAgICAgICAgICAgICAgICAgICBjcC52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAnY2VuYycpXG4gICAgICAgICAgICAgICAgcmV0VmFsID0gY3A7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldFZhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGp1c3QgdGhlIGRhdGEgcG9ydGlvbiBvZiBhIHNpbmdsZSBQU1NIXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBwc3NoIC0gdGhlIFBTU0hcbiAgICAgKiBAcmV0dXJuIHtBcnJheUJ1ZmZlcn0gZGF0YSBwb3J0aW9uIG9mIHRoZSBQU1NIXG4gICAgICovXG4gICAgc3RhdGljIGdldFBTU0hEYXRhKHBzc2gpIHtcbiAgICAgICAgbGV0IG9mZnNldCA9IDg7IC8vIEJveCBzaXplIGFuZCB0eXBlIGZpZWxkc1xuICAgICAgICBsZXQgdmlldyA9IG5ldyBEYXRhVmlldyhwc3NoKTtcblxuICAgICAgICAvLyBSZWFkIHZlcnNpb25cbiAgICAgICAgbGV0IHZlcnNpb24gPSB2aWV3LmdldFVpbnQ4KG9mZnNldCk7XG5cbiAgICAgICAgb2Zmc2V0ICs9IDIwOyAvLyBWZXJzaW9uICgxKSwgZmxhZ3MgKDMpLCBzeXN0ZW0gSUQgKDE2KVxuXG4gICAgICAgIGlmICh2ZXJzaW9uID4gMCkge1xuICAgICAgICAgICAgb2Zmc2V0ICs9IDQgKyAoMTYgKiB2aWV3LmdldFVpbnQzMihvZmZzZXQpKTsgLy8gS2V5IElEIGNvdW50ICg0KSBhbmQgQWxsIGtleSBJRHMgKDE2KmNvdW50KVxuICAgICAgICB9XG5cbiAgICAgICAgb2Zmc2V0ICs9IDQ7IC8vIERhdGEgc2l6ZVxuICAgICAgICByZXR1cm4gcHNzaC5zbGljZShvZmZzZXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIFBTU0ggYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBrZXkgc3lzdGVtIGZyb20gdGhlIGNvbmNhdGVuYXRlZFxuICAgICAqIGxpc3Qgb2YgUFNTSCBib3hlcyBpbiB0aGUgZ2l2ZW4gaW5pdERhdGFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7S2V5U3lzdGVtfSBrZXlTeXN0ZW0gdGhlIGRlc2lyZWRcbiAgICAgKiBrZXkgc3lzdGVtXG4gICAgICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gaW5pdERhdGEgJ2NlbmMnIGluaXRpYWxpemF0aW9uIGRhdGEuICBDb25jYXRlbmF0ZWQgbGlzdCBvZiBQU1NILlxuICAgICAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcnxudWxsfSBUaGUgUFNTSCBib3ggZGF0YSBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBrZXkgc3lzdGVtLCBudWxsIGlmIG5vdCBmb3VuZFxuICAgICAqIG9yIG51bGwgaWYgYSB2YWxpZCBhc3NvY2lhdGlvbiBjb3VsZCBub3QgYmUgZm91bmQuXG4gICAgICovXG4gICAgc3RhdGljIGdldFBTU0hGb3JLZXlTeXN0ZW0oa2V5U3lzdGVtLCBpbml0RGF0YSkge1xuICAgICAgICBsZXQgcHNzaExpc3QgPSBDb21tb25FbmNyeXB0aW9uLnBhcnNlUFNTSExpc3QoaW5pdERhdGEpO1xuICAgICAgICBpZiAocHNzaExpc3QuaGFzT3duUHJvcGVydHkoa2V5U3lzdGVtLnV1aWQudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBwc3NoTGlzdFtrZXlTeXN0ZW0udXVpZC50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSBhIHN0YW5kYXJkIGNvbW1vbiBlbmNyeXB0aW9uIFBTU0ggd2hpY2ggY29udGFpbnMgYSBzaW1wbGVcbiAgICAgKiBiYXNlNjQtZW5jb2Rpbmcgb2YgdGhlIGluaXQgZGF0YVxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNwRGF0YSB0aGUgQ29udGVudFByb3RlY3Rpb24gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7QkFTRTY0fSBCQVNFNjQgcmVmZXJlbmNlXG4gICAgICogQHJldHVybnMge0FycmF5QnVmZmVyfG51bGx9IHRoZSBpbml0IGRhdGEgb3IgbnVsbCBpZiBub3QgZm91bmRcbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2VJbml0RGF0YUZyb21Db250ZW50UHJvdGVjdGlvbihjcERhdGEsIEJBU0U2NCkge1xuICAgICAgICBpZiAoJ3Bzc2gnIGluIGNwRGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIEJBU0U2NC5kZWNvZGVBcnJheShjcERhdGEucHNzaC5fX3RleHQpLmJ1ZmZlcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgbGlzdCBvZiBQU1NIIGJveGVzIGludG8ga2V5c3lzdGVtLXNwZWNpZmljIFBTU0ggZGF0YVxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gZGF0YSAtIHRoZSBjb25jYXRlbmF0ZWQgbGlzdCBvZiBQU1NIIGJveGVzIGFzIHByb3ZpZGVkIGJ5XG4gICAgICogQ0RNIGFzIGluaXRpYWxpemF0aW9uIGRhdGEgd2hlbiBDb21tb25FbmNyeXB0aW9uIGNvbnRlbnQgaXMgZGV0ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fEFycmF5fSBhbiBvYmplY3QgdGhhdCBoYXMgYSBwcm9wZXJ0eSBuYW1lZCBhY2NvcmRpbmcgdG8gZWFjaCBvZlxuICAgICAqIHRoZSBkZXRlY3RlZCBrZXkgc3lzdGVtIFVVSURzIChlLmcuIDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDApXG4gICAgICogYW5kIGEgQXJyYXlCdWZmZXIgKHRoZSBlbnRpcmUgUFNTSCBib3gpIGFzIHRoZSBwcm9wZXJ0eSB2YWx1ZVxuICAgICAqL1xuICAgIHN0YXRpYyBwYXJzZVBTU0hMaXN0KGRhdGEpIHtcblxuICAgICAgICBpZiAoZGF0YSA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBbXTtcblxuICAgICAgICBsZXQgZHYgPSBuZXcgRGF0YVZpZXcoZGF0YS5idWZmZXIgfHwgZGF0YSk7IC8vIGRhdGEuYnVmZmVyIGZpcnN0IGZvciBVaW50OEFycmF5IHN1cHBvcnRcbiAgICAgICAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgICAgICAgbGV0IHBzc2ggPSB7fTtcblxuICAgICAgICAvLyBUT0RPOiBOZWVkIHRvIGNoZWNrIGV2ZXJ5IGRhdGEgcmVhZCBmb3IgZW5kIG9mIGJ1ZmZlclxuICAgICAgICBsZXQgYnl0ZUN1cnNvciA9IDA7XG4gICAgICAgIHdoaWxlICghZG9uZSkge1xuXG4gICAgICAgICAgICBsZXQgc2l6ZSxcbiAgICAgICAgICAgICAgICBuZXh0Qm94LFxuICAgICAgICAgICAgICAgIHZlcnNpb24sXG4gICAgICAgICAgICAgICAgc3lzdGVtSUQsXG4gICAgICAgICAgICAgICAgcHNzaERhdGFTaXplO1xuICAgICAgICAgICAgbGV0IGJveFN0YXJ0ID0gYnl0ZUN1cnNvcjtcblxuICAgICAgICAgICAgaWYgKGJ5dGVDdXJzb3IgPj0gZHYuYnVmZmVyLmJ5dGVMZW5ndGgpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8qIEJveCBzaXplICovXG4gICAgICAgICAgICBzaXplID0gZHYuZ2V0VWludDMyKGJ5dGVDdXJzb3IpO1xuICAgICAgICAgICAgbmV4dEJveCA9IGJ5dGVDdXJzb3IgKyBzaXplO1xuICAgICAgICAgICAgYnl0ZUN1cnNvciArPSA0O1xuXG4gICAgICAgICAgICAvKiBWZXJpZnkgUFNTSCAqL1xuICAgICAgICAgICAgaWYgKGR2LmdldFVpbnQzMihieXRlQ3Vyc29yKSAhPT0gMHg3MDczNzM2OCkge1xuICAgICAgICAgICAgICAgIGJ5dGVDdXJzb3IgPSBuZXh0Qm94O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnl0ZUN1cnNvciArPSA0O1xuXG4gICAgICAgICAgICAvKiBWZXJzaW9uIG11c3QgYmUgMCBvciAxICovXG4gICAgICAgICAgICB2ZXJzaW9uID0gZHYuZ2V0VWludDgoYnl0ZUN1cnNvcik7XG4gICAgICAgICAgICBpZiAodmVyc2lvbiAhPT0gMCAmJiB2ZXJzaW9uICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgYnl0ZUN1cnNvciA9IG5leHRCb3g7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBieXRlQ3Vyc29yKys7XG5cbiAgICAgICAgICAgIGJ5dGVDdXJzb3IgKz0gMzsgLyogc2tpcCBmbGFncyAqL1xuXG4gICAgICAgICAgICAvLyAxNi1ieXRlIFVVSUQvU3lzdGVtSURcbiAgICAgICAgICAgIHN5c3RlbUlEID0gJyc7XG4gICAgICAgICAgICBsZXQgaSwgdmFsO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbCA9IGR2LmdldFVpbnQ4KGJ5dGVDdXJzb3IgKyBpKS50b1N0cmluZygxNik7XG4gICAgICAgICAgICAgICAgc3lzdGVtSUQgKz0gKHZhbC5sZW5ndGggPT09IDEpID8gJzAnICsgdmFsIDogdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnl0ZUN1cnNvciArPSA0O1xuICAgICAgICAgICAgc3lzdGVtSUQgKz0gJy0nO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbCA9IGR2LmdldFVpbnQ4KGJ5dGVDdXJzb3IgKyBpKS50b1N0cmluZygxNik7XG4gICAgICAgICAgICAgICAgc3lzdGVtSUQgKz0gKHZhbC5sZW5ndGggPT09IDEpID8gJzAnICsgdmFsIDogdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnl0ZUN1cnNvciArPSAyO1xuICAgICAgICAgICAgc3lzdGVtSUQgKz0gJy0nO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbCA9IGR2LmdldFVpbnQ4KGJ5dGVDdXJzb3IgKyBpKS50b1N0cmluZygxNik7XG4gICAgICAgICAgICAgICAgc3lzdGVtSUQgKz0gKHZhbC5sZW5ndGggPT09IDEpID8gJzAnICsgdmFsIDogdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnl0ZUN1cnNvciArPSAyO1xuICAgICAgICAgICAgc3lzdGVtSUQgKz0gJy0nO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbCA9IGR2LmdldFVpbnQ4KGJ5dGVDdXJzb3IgKyBpKS50b1N0cmluZygxNik7XG4gICAgICAgICAgICAgICAgc3lzdGVtSUQgKz0gKHZhbC5sZW5ndGggPT09IDEpID8gJzAnICsgdmFsIDogdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnl0ZUN1cnNvciArPSAyO1xuICAgICAgICAgICAgc3lzdGVtSUQgKz0gJy0nO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbCA9IGR2LmdldFVpbnQ4KGJ5dGVDdXJzb3IgKyBpKS50b1N0cmluZygxNik7XG4gICAgICAgICAgICAgICAgc3lzdGVtSUQgKz0gKHZhbC5sZW5ndGggPT09IDEpID8gJzAnICsgdmFsIDogdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnl0ZUN1cnNvciArPSA2O1xuXG4gICAgICAgICAgICBzeXN0ZW1JRCA9IHN5c3RlbUlELnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIC8qIFBTU0ggRGF0YSBTaXplICovXG4gICAgICAgICAgICBwc3NoRGF0YVNpemUgPSBkdi5nZXRVaW50MzIoYnl0ZUN1cnNvcik7XG4gICAgICAgICAgICBieXRlQ3Vyc29yICs9IDQ7XG5cbiAgICAgICAgICAgIC8qIFBTU0ggRGF0YSAqL1xuICAgICAgICAgICAgcHNzaFtzeXN0ZW1JRF0gPSBkdi5idWZmZXIuc2xpY2UoYm94U3RhcnQsIG5leHRCb3gpO1xuICAgICAgICAgICAgYnl0ZUN1cnNvciA9IG5leHRCb3g7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHNzaDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1vbkVuY3J5cHRpb247XG4iLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuaW1wb3J0IFByb3RlY3Rpb25Db250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvUHJvdGVjdGlvbkNvbnRyb2xsZXInO1xuaW1wb3J0IFByb3RlY3Rpb25LZXlDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvUHJvdGVjdGlvbktleUNvbnRyb2xsZXInO1xuaW1wb3J0IFByb3RlY3Rpb25FdmVudHMgZnJvbSAnLi9Qcm90ZWN0aW9uRXZlbnRzJztcbmltcG9ydCBQcm90ZWN0aW9uRXJyb3JzIGZyb20gJy4vZXJyb3JzL1Byb3RlY3Rpb25FcnJvcnMnO1xuaW1wb3J0IFByb3RlY3Rpb25Nb2RlbF8yMUphbjIwMTUgZnJvbSAnLi9tb2RlbHMvUHJvdGVjdGlvbk1vZGVsXzIxSmFuMjAxNSc7XG5pbXBvcnQgUHJvdGVjdGlvbk1vZGVsXzNGZWIyMDE0IGZyb20gJy4vbW9kZWxzL1Byb3RlY3Rpb25Nb2RlbF8zRmViMjAxNCc7XG5pbXBvcnQgUHJvdGVjdGlvbk1vZGVsXzAxYiBmcm9tICcuL21vZGVscy9Qcm90ZWN0aW9uTW9kZWxfMDFiJztcblxuY29uc3QgQVBJU19Qcm90ZWN0aW9uTW9kZWxfMDFiID0gW1xuICAgIC8vIFVuLXByZWZpeGVkIGFzIHBlciBzcGVjXG4gICAge1xuICAgICAgICAvLyBWaWRlbyBFbGVtZW50XG4gICAgICAgIGdlbmVyYXRlS2V5UmVxdWVzdDogJ2dlbmVyYXRlS2V5UmVxdWVzdCcsXG4gICAgICAgIGFkZEtleTogJ2FkZEtleScsXG4gICAgICAgIGNhbmNlbEtleVJlcXVlc3Q6ICdjYW5jZWxLZXlSZXF1ZXN0JyxcblxuICAgICAgICAvLyBFdmVudHNcbiAgICAgICAgbmVlZGtleTogJ25lZWRrZXknLFxuICAgICAgICBrZXllcnJvcjogJ2tleWVycm9yJyxcbiAgICAgICAga2V5YWRkZWQ6ICdrZXlhZGRlZCcsXG4gICAgICAgIGtleW1lc3NhZ2U6ICdrZXltZXNzYWdlJ1xuICAgIH0sXG4gICAgLy8gV2Via2l0LXByZWZpeGVkIChlYXJseSBDaHJvbWUgdmVyc2lvbnMgYW5kIENocm9tZSB3aXRoIEVNRSBkaXNhYmxlZCBpbiBjaHJvbWU6Ly9mbGFncylcbiAgICB7XG4gICAgICAgIC8vIFZpZGVvIEVsZW1lbnRcbiAgICAgICAgZ2VuZXJhdGVLZXlSZXF1ZXN0OiAnd2Via2l0R2VuZXJhdGVLZXlSZXF1ZXN0JyxcbiAgICAgICAgYWRkS2V5OiAnd2Via2l0QWRkS2V5JyxcbiAgICAgICAgY2FuY2VsS2V5UmVxdWVzdDogJ3dlYmtpdENhbmNlbEtleVJlcXVlc3QnLFxuXG4gICAgICAgIC8vIEV2ZW50c1xuICAgICAgICBuZWVka2V5OiAnd2Via2l0bmVlZGtleScsXG4gICAgICAgIGtleWVycm9yOiAnd2Via2l0a2V5ZXJyb3InLFxuICAgICAgICBrZXlhZGRlZDogJ3dlYmtpdGtleWFkZGVkJyxcbiAgICAgICAga2V5bWVzc2FnZTogJ3dlYmtpdGtleW1lc3NhZ2UnXG4gICAgfVxuXTtcblxuY29uc3QgQVBJU19Qcm90ZWN0aW9uTW9kZWxfM0ZlYjIwMTQgPSBbXG4gICAgLy8gVW4tcHJlZml4ZWQgYXMgcGVyIHNwZWNcbiAgICAvLyBDaHJvbWUgMzgtMzkgKGFuZCBzb21lIGVhcmxpZXIgdmVyc2lvbnMpIHdpdGggY2hyb21lOi8vZmxhZ3MgLS0gRW5hYmxlIEVuY3J5cHRlZCBNZWRpYSBFeHRlbnNpb25zXG4gICAge1xuICAgICAgICAvLyBWaWRlbyBFbGVtZW50XG4gICAgICAgIHNldE1lZGlhS2V5czogJ3NldE1lZGlhS2V5cycsXG4gICAgICAgIC8vIE1lZGlhS2V5c1xuICAgICAgICBNZWRpYUtleXM6ICdNZWRpYUtleXMnLFxuICAgICAgICAvLyBNZWRpYUtleVNlc3Npb25cbiAgICAgICAgcmVsZWFzZTogJ2Nsb3NlJyxcblxuICAgICAgICAvLyBFdmVudHNcbiAgICAgICAgbmVlZGtleTogJ25lZWRrZXknLFxuICAgICAgICBlcnJvcjogJ2tleWVycm9yJyxcbiAgICAgICAgbWVzc2FnZTogJ2tleW1lc3NhZ2UnLFxuICAgICAgICByZWFkeTogJ2tleWFkZGVkJyxcbiAgICAgICAgY2xvc2U6ICdrZXljbG9zZSdcbiAgICB9LFxuICAgIC8vIE1TLXByZWZpeGVkIChJRTExLCBXaW5kb3dzIDguMSlcbiAgICB7XG4gICAgICAgIC8vIFZpZGVvIEVsZW1lbnRcbiAgICAgICAgc2V0TWVkaWFLZXlzOiAnbXNTZXRNZWRpYUtleXMnLFxuICAgICAgICAvLyBNZWRpYUtleXNcbiAgICAgICAgTWVkaWFLZXlzOiAnTVNNZWRpYUtleXMnLFxuICAgICAgICAvLyBNZWRpYUtleVNlc3Npb25cbiAgICAgICAgcmVsZWFzZTogJ2Nsb3NlJyxcbiAgICAgICAgLy8gRXZlbnRzXG4gICAgICAgIG5lZWRrZXk6ICdtc25lZWRrZXknLFxuICAgICAgICBlcnJvcjogJ21za2V5ZXJyb3InLFxuICAgICAgICBtZXNzYWdlOiAnbXNrZXltZXNzYWdlJyxcbiAgICAgICAgcmVhZHk6ICdtc2tleWFkZGVkJyxcbiAgICAgICAgY2xvc2U6ICdtc2tleWNsb3NlJ1xuICAgIH1cbl07XG5cbmZ1bmN0aW9uIFByb3RlY3Rpb24oKSB7XG4gICAgbGV0IGluc3RhbmNlO1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBQcm90ZWN0aW9uQ29udHJvbGxlciBhbmQgYXNzb2NpYXRlZCBQcm90ZWN0aW9uTW9kZWwgZm9yIHVzZSB3aXRoXG4gICAgICogYSBzaW5nbGUgcGllY2Ugb2YgY29udGVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHtQcm90ZWN0aW9uQ29udHJvbGxlcn0gcHJvdGVjdGlvbiBjb250cm9sbGVyXG4gICAgICpcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm90ZWN0aW9uU3lzdGVtKGNvbmZpZykge1xuICAgICAgICBsZXQgY29udHJvbGxlciA9IG51bGw7XG5cbiAgICAgICAgY29uc3QgcHJvdGVjdGlvbktleUNvbnRyb2xsZXIgPSBQcm90ZWN0aW9uS2V5Q29udHJvbGxlcihjb250ZXh0KS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBwcm90ZWN0aW9uS2V5Q29udHJvbGxlci5zZXRDb25maWcoeyBkZWJ1ZzogY29uZmlnLmRlYnVnLCBCQVNFNjQ6IGNvbmZpZy5CQVNFNjQgfSk7XG4gICAgICAgIHByb3RlY3Rpb25LZXlDb250cm9sbGVyLmluaXRpYWxpemUoKTtcblxuICAgICAgICBsZXQgcHJvdGVjdGlvbk1vZGVsID0gIGdldFByb3RlY3Rpb25Nb2RlbChjb25maWcpO1xuXG4gICAgICAgIGlmICghY29udHJvbGxlciAmJiBwcm90ZWN0aW9uTW9kZWwpIHsvL1RPRE8gYWRkIGFiaWxpdHkgdG8gc2V0IGV4dGVybmFsIGNvbnRyb2xsZXIgaWYgc3RpbGwgbmVlZGVkIGF0IGFsbD9cbiAgICAgICAgICAgIGNvbnRyb2xsZXIgPSBQcm90ZWN0aW9uQ29udHJvbGxlcihjb250ZXh0KS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHByb3RlY3Rpb25Nb2RlbDogcHJvdGVjdGlvbk1vZGVsLFxuICAgICAgICAgICAgICAgIHByb3RlY3Rpb25LZXlDb250cm9sbGVyOiBwcm90ZWN0aW9uS2V5Q29udHJvbGxlcixcbiAgICAgICAgICAgICAgICBldmVudEJ1czogY29uZmlnLmV2ZW50QnVzLFxuICAgICAgICAgICAgICAgIGRlYnVnOiBjb25maWcuZGVidWcsXG4gICAgICAgICAgICAgICAgZXZlbnRzOiBjb25maWcuZXZlbnRzLFxuICAgICAgICAgICAgICAgIEJBU0U2NDogY29uZmlnLkJBU0U2NCxcbiAgICAgICAgICAgICAgICBjb25zdGFudHM6IGNvbmZpZy5jb25zdGFudHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uZmlnLmNhcGFiaWxpdGllcy5zZXRFbmNyeXB0ZWRNZWRpYVN1cHBvcnRlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udHJvbGxlcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcm90ZWN0aW9uTW9kZWwoY29uZmlnKSB7XG4gICAgICAgIGNvbnN0IGRlYnVnID0gY29uZmlnLmRlYnVnO1xuICAgICAgICBjb25zdCBsb2dnZXIgPSBkZWJ1Zy5nZXRMb2dnZXIoaW5zdGFuY2UpO1xuICAgICAgICBjb25zdCBldmVudEJ1cyA9IGNvbmZpZy5ldmVudEJ1cztcbiAgICAgICAgY29uc3QgZXJySGFuZGxlciA9IGNvbmZpZy5lcnJIYW5kbGVyO1xuICAgICAgICBjb25zdCB2aWRlb0VsZW1lbnQgPSBjb25maWcudmlkZW9Nb2RlbCA/IGNvbmZpZy52aWRlb01vZGVsLmdldEVsZW1lbnQoKSA6IG51bGw7XG5cbiAgICAgICAgaWYgKCghdmlkZW9FbGVtZW50IHx8IHZpZGVvRWxlbWVudC5vbmVuY3J5cHRlZCAhPT0gdW5kZWZpbmVkKSAmJlxuICAgICAgICAgICAgKCF2aWRlb0VsZW1lbnQgfHwgdmlkZW9FbGVtZW50Lm1lZGlhS2V5cyAhPT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ0VNRSBkZXRlY3RlZCBvbiB0aGlzIHVzZXIgYWdlbnQhIChQcm90ZWN0aW9uTW9kZWxfMjFKYW4yMDE1KScpO1xuICAgICAgICAgICAgcmV0dXJuIFByb3RlY3Rpb25Nb2RlbF8yMUphbjIwMTUoY29udGV4dCkuY3JlYXRlKHsgZGVidWc6IGRlYnVnLCBldmVudEJ1czogZXZlbnRCdXMsIGV2ZW50czogY29uZmlnLmV2ZW50cyB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChnZXRBUEkodmlkZW9FbGVtZW50LCBBUElTX1Byb3RlY3Rpb25Nb2RlbF8zRmViMjAxNCkpIHtcbiAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdFTUUgZGV0ZWN0ZWQgb24gdGhpcyB1c2VyIGFnZW50ISAoUHJvdGVjdGlvbk1vZGVsXzNGZWIyMDE0KScpO1xuICAgICAgICAgICAgcmV0dXJuIFByb3RlY3Rpb25Nb2RlbF8zRmViMjAxNChjb250ZXh0KS5jcmVhdGUoeyBkZWJ1ZzogZGVidWcsIGV2ZW50QnVzOiBldmVudEJ1cywgZXZlbnRzOiBjb25maWcuZXZlbnRzLCBhcGk6IGdldEFQSSh2aWRlb0VsZW1lbnQsIEFQSVNfUHJvdGVjdGlvbk1vZGVsXzNGZWIyMDE0KSB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChnZXRBUEkodmlkZW9FbGVtZW50LCBBUElTX1Byb3RlY3Rpb25Nb2RlbF8wMWIpKSB7XG4gICAgICAgICAgICBsb2dnZXIuaW5mbygnRU1FIGRldGVjdGVkIG9uIHRoaXMgdXNlciBhZ2VudCEgKFByb3RlY3Rpb25Nb2RlbF8wMWIpJyk7XG4gICAgICAgICAgICByZXR1cm4gUHJvdGVjdGlvbk1vZGVsXzAxYihjb250ZXh0KS5jcmVhdGUoeyBkZWJ1ZzogZGVidWcsIGV2ZW50QnVzOiBldmVudEJ1cywgZXJySGFuZGxlcjogZXJySGFuZGxlciwgZXZlbnRzOiBjb25maWcuZXZlbnRzLCBhcGk6IGdldEFQSSh2aWRlb0VsZW1lbnQsIEFQSVNfUHJvdGVjdGlvbk1vZGVsXzAxYikgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2dnZXIud2FybignTm8gc3VwcG9ydGVkIHZlcnNpb24gb2YgRU1FIGRldGVjdGVkIG9uIHRoaXMgdXNlciBhZ2VudCEgLSBBdHRlbXB0cyB0byBwbGF5IGVuY3J5cHRlZCBjb250ZW50IHdpbGwgZmFpbCEnKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QVBJKHZpZGVvRWxlbWVudCwgYXBpcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFwaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGFwaSA9IGFwaXNbaV07XG4gICAgICAgICAgICAvLyBkZXRlY3QgaWYgYXBpIGlzIHN1cHBvcnRlZCBieSBicm93c2VyXG4gICAgICAgICAgICAvLyBjaGVjayBvbmx5IGZpcnN0IGZ1bmN0aW9uIGluIGFwaSAtPiBzaG91bGQgYmUgZmluZVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2aWRlb0VsZW1lbnRbYXBpW09iamVjdC5rZXlzKGFwaSlbMF1dXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXBpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaW5zdGFuY2UgPSB7XG4gICAgICAgIGNyZWF0ZVByb3RlY3Rpb25TeXN0ZW06IGNyZWF0ZVByb3RlY3Rpb25TeXN0ZW1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG5Qcm90ZWN0aW9uLl9fZGFzaGpzX2ZhY3RvcnlfbmFtZSA9ICdQcm90ZWN0aW9uJztcbmNvbnN0IGZhY3RvcnkgPSBkYXNoanMuRmFjdG9yeU1ha2VyLmdldENsYXNzRmFjdG9yeShQcm90ZWN0aW9uKTsgLyoganNoaW50IGlnbm9yZTpsaW5lICovXG5mYWN0b3J5LmV2ZW50cyA9IFByb3RlY3Rpb25FdmVudHM7XG5mYWN0b3J5LmVycm9ycyA9IFByb3RlY3Rpb25FcnJvcnM7XG5kYXNoanMuRmFjdG9yeU1ha2VyLnVwZGF0ZUNsYXNzRmFjdG9yeShQcm90ZWN0aW9uLl9fZGFzaGpzX2ZhY3RvcnlfbmFtZSwgZmFjdG9yeSk7IC8qIGpzaGludCBpZ25vcmU6bGluZSAqL1xuZXhwb3J0IGRlZmF1bHQgZmFjdG9yeTtcbiIsIi8qKlxuICogVGhlIGNvcHlyaWdodCBpbiB0aGlzIHNvZnR3YXJlIGlzIGJlaW5nIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBCU0QgTGljZW5zZSxcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiAqICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbiAqICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgQVMgSVMgQU5EIEFOWVxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXG4gKiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxuICogIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLFxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuICogIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5pbXBvcnQgRXZlbnRzQmFzZSBmcm9tICcuLi8uLi9jb3JlL2V2ZW50cy9FdmVudHNCYXNlJztcbi8qKlxuICogQGNsYXNzXG4gKlxuICovXG5jbGFzcyBQcm90ZWN0aW9uRXZlbnRzIGV4dGVuZHMgRXZlbnRzQmFzZSB7XG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIFB1YmxpYyBmYWNpbmcgZXh0ZXJuYWwgZXZlbnRzIHRvIGJlIHVzZWQgd2hlbiBpbmNsdWRpbmcgcHJvdGVjdGlvbiBwYWNrYWdlLlxuICAgICAqIEFsbCBwdWJsaWMgZXZlbnRzIHdpbGwgYmUgYWdncmVnYXRlZCBpbnRvIHRoZSBNZWRpYVBsYXllckV2ZW50cyBDbGFzcyBhbmQgY2FuIGJlIGFjY2Vzc2VkXG4gICAgICogdmlhIE1lZGlhUGxheWVyLmV2ZW50cy4gIHB1YmxpY18gaXMgdGhlIHByZWZpeCB0aGF0IHdlIHVzZSB0byBtb3ZlIGV2ZW50IG5hbWVzIHRvIE1lZGlhUGxheWVyRXZlbnRzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgSUQgZm9yIGV2ZW50cyBkZWxpdmVyZWQgd2hlbiB0aGUgcHJvdGVjdGlvbiBzZXQgcmVjZWl2ZXNcbiAgICAgICAgICogYSBrZXkgbWVzc2FnZSBmcm9tIHRoZSBDRE1cbiAgICAgICAgICpcbiAgICAgICAgICogQGlnbm9yZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5JTlRFUk5BTF9LRVlfTUVTU0FHRSA9ICdpbnRlcm5hbEtleU1lc3NhZ2UnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCBJRCBmb3IgZXZlbnRzIGRlbGl2ZXJlZCB3aGVuIGEga2V5IHN5c3RlbSBzZWxlY3Rpb24gcHJvY2VkdXJlXG4gICAgICAgICAqIGNvbXBsZXRlc1xuICAgICAgICAgKiBAaWdub3JlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLklOVEVSTkFMX0tFWV9TWVNURU1fU0VMRUNURUQgPSAnaW50ZXJuYWxLZXlTeXN0ZW1TZWxlY3RlZCc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IElEIGZvciBldmVudHMgZGVsaXZlcmVkIHdoZW4gdGhlIHN0YXR1cyBvZiBvbmUgZGVjcnlwdGlvbiBrZXlzIGhhcyBjaGFuZ2VkXG4gICAgICAgICAqIEBpZ25vcmVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuSU5URVJOQUxfS0VZX1NUQVRVU19DSEFOR0VEID0gJ2ludGVybmFsa2V5U3RhdHVzQ2hhbmdlZCc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IElEIGZvciBldmVudHMgZGVsaXZlcmVkIHdoZW4gYSBuZXcga2V5IGhhcyBiZWVuIGFkZGVkXG4gICAgICAgICAqXG4gICAgICAgICAqIEBjb25zdGFudFxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBUaGUgbGF0ZXN0IHZlcnNpb25zIG9mIHRoZSBFTUUgc3BlY2lmaWNhdGlvbiBubyBsb25nZXJcbiAgICAgICAgICogdXNlIHRoaXMgZXZlbnQuICB7QE1lZGlhUGxheWVyLm1vZGVscy5wcm90ZWN0aW9uTW9kZWwuZXZlbnRMaXN0LktFWV9TVEFUVVNFU19DSEFOR0VEfVxuICAgICAgICAgKiBpcyBwcmVmZXJyZWQuXG4gICAgICAgICAqIEBldmVudCBQcm90ZWN0aW9uRXZlbnRzI0tFWV9BRERFRFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5LRVlfQURERUQgPSAncHVibGljX2tleUFkZGVkJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IElEIGZvciBldmVudHMgZGVsaXZlcmVkIHdoZW4gYW4gZXJyb3IgaXMgZW5jb3VudGVyZWQgYnkgdGhlIENETVxuICAgICAgICAgKiB3aGlsZSBwcm9jZXNzaW5nIGEgbGljZW5zZSBzZXJ2ZXIgcmVzcG9uc2UgbWVzc2FnZVxuICAgICAgICAgKiBAZXZlbnQgUHJvdGVjdGlvbkV2ZW50cyNLRVlfRVJST1JcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuS0VZX0VSUk9SID0gJ3B1YmxpY19rZXlFcnJvcic7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IElEIGZvciBldmVudHMgZGVsaXZlcmVkIHdoZW4gdGhlIHByb3RlY3Rpb24gc2V0IHJlY2VpdmVzXG4gICAgICAgICAqIGEga2V5IG1lc3NhZ2UgZnJvbSB0aGUgQ0RNXG4gICAgICAgICAqIEBldmVudCBQcm90ZWN0aW9uRXZlbnRzI0tFWV9NRVNTQUdFXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLktFWV9NRVNTQUdFID0gJ3B1YmxpY19rZXlNZXNzYWdlJztcblxuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgSUQgZm9yIGV2ZW50cyBkZWxpdmVyZWQgd2hlbiBhIGtleSBzZXNzaW9uIGNsb3NlXG4gICAgICAgICAqIHByb2Nlc3MgaGFzIGNvbXBsZXRlZFxuICAgICAgICAgKiBAZXZlbnQgUHJvdGVjdGlvbkV2ZW50cyNLRVlfU0VTU0lPTl9DTE9TRURcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuS0VZX1NFU1NJT05fQ0xPU0VEID0gJ3B1YmxpY19rZXlTZXNzaW9uQ2xvc2VkJztcblxuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgSUQgZm9yIGV2ZW50cyBkZWxpdmVyZWQgd2hlbiBhIG5ldyBrZXkgc2Vzc2lvbnMgY3JlYXRpb25cbiAgICAgICAgICogcHJvY2VzcyBoYXMgY29tcGxldGVkXG4gICAgICAgICAqIEBldmVudCBQcm90ZWN0aW9uRXZlbnRzI0tFWV9TRVNTSU9OX0NSRUFURURcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuS0VZX1NFU1NJT05fQ1JFQVRFRCA9ICdwdWJsaWNfa2V5U2Vzc2lvbkNyZWF0ZWQnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCBJRCBmb3IgZXZlbnRzIGRlbGl2ZXJlZCB3aGVuIGEga2V5IHNlc3Npb24gcmVtb3ZhbFxuICAgICAgICAgKiBwcm9jZXNzIGhhcyBjb21wbGV0ZWRcbiAgICAgICAgICogQGV2ZW50IFByb3RlY3Rpb25FdmVudHMjS0VZX1NFU1NJT05fUkVNT1ZFRFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5LRVlfU0VTU0lPTl9SRU1PVkVEID0gJ3B1YmxpY19rZXlTZXNzaW9uUmVtb3ZlZCc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IElEIGZvciBldmVudHMgZGVsaXZlcmVkIHdoZW4gdGhlIHN0YXR1cyBvZiBvbmUgb3IgbW9yZVxuICAgICAgICAgKiBkZWNyeXB0aW9uIGtleXMgaGFzIGNoYW5nZWRcbiAgICAgICAgICogQGV2ZW50IFByb3RlY3Rpb25FdmVudHMjS0VZX1NUQVRVU0VTX0NIQU5HRURcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuS0VZX1NUQVRVU0VTX0NIQU5HRUQgPSAncHVibGljX2tleVN0YXR1c2VzQ2hhbmdlZCc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IElEIGZvciBldmVudHMgZGVsaXZlcmVkIHdoZW4gYSBrZXkgc3lzdGVtIGFjY2VzcyBwcm9jZWR1cmVcbiAgICAgICAgICogaGFzIGNvbXBsZXRlZFxuICAgICAgICAgKiBAaWdub3JlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLktFWV9TWVNURU1fQUNDRVNTX0NPTVBMRVRFID0gJ3B1YmxpY19rZXlTeXN0ZW1BY2Nlc3NDb21wbGV0ZSc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IElEIGZvciBldmVudHMgZGVsaXZlcmVkIHdoZW4gYSBrZXkgc3lzdGVtIHNlbGVjdGlvbiBwcm9jZWR1cmVcbiAgICAgICAgICogY29tcGxldGVzXG4gICAgICAgICAqIEBldmVudCBQcm90ZWN0aW9uRXZlbnRzI0tFWV9TWVNURU1fU0VMRUNURURcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuS0VZX1NZU1RFTV9TRUxFQ1RFRCA9ICdwdWJsaWNfa2V5U3lzdGVtU2VsZWN0ZWQnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCBJRCBmb3IgZXZlbnRzIGRlbGl2ZXJlZCB3aGVuIGEgbGljZW5zZSByZXF1ZXN0IHByb2NlZHVyZVxuICAgICAgICAgKiBoYXMgY29tcGxldGVkXG4gICAgICAgICAqIEBldmVudCBQcm90ZWN0aW9uRXZlbnRzI0xJQ0VOU0VfUkVRVUVTVF9DT01QTEVURVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5MSUNFTlNFX1JFUVVFU1RfQ09NUExFVEUgPSAncHVibGljX2xpY2Vuc2VSZXF1ZXN0Q29tcGxldGUnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCBJRCBmb3IgbmVlZGtleS9lbmNyeXB0ZWQgZXZlbnRzXG4gICAgICAgICAqIEBpZ25vcmVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuTkVFRF9LRVkgPSAnbmVlZGtleSc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IElEIGZvciBldmVudHMgZGVsaXZlcmVkIHdoZW4gdGhlIFByb3RlY3Rpb24gc3lzdGVtIGlzIGRldGVjdGVkIGFuZCBjcmVhdGVkLlxuICAgICAgICAgKiBAZXZlbnQgUHJvdGVjdGlvbkV2ZW50cyNQUk9URUNUSU9OX0NSRUFURURcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuUFJPVEVDVElPTl9DUkVBVEVEID0gJ3B1YmxpY19wcm90ZWN0aW9uY3JlYXRlZCc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IElEIGZvciBldmVudHMgZGVsaXZlcmVkIHdoZW4gdGhlIFByb3RlY3Rpb24gc3lzdGVtIGlzIGRlc3Ryb3llZC5cbiAgICAgICAgICogQGV2ZW50IFByb3RlY3Rpb25FdmVudHMjUFJPVEVDVElPTl9ERVNUUk9ZRURcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuUFJPVEVDVElPTl9ERVNUUk9ZRUQgPSAncHVibGljX3Byb3RlY3Rpb25kZXN0cm95ZWQnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCBJRCBmb3IgZXZlbnRzIGRlbGl2ZXJlZCB3aGVuIGEgbmV3IHNlcnZlciBjZXJ0aWZpY2F0ZSBoYXNcbiAgICAgICAgICogYmVlbiBkZWxpdmVyZWQgdG8gdGhlIENETVxuICAgICAgICAgKiBAaWdub3JlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLlNFUlZFUl9DRVJUSUZJQ0FURV9VUERBVEVEID0gJ3NlcnZlckNlcnRpZmljYXRlVXBkYXRlZCc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IElEIGZvciBldmVudHMgZGVsaXZlcmVkIHdoZW4gdGhlIHByb2Nlc3Mgb2Ygc2h1dHRpbmcgZG93blxuICAgICAgICAgKiBhIHByb3RlY3Rpb24gc2V0IGhhcyBjb21wbGV0ZWRcbiAgICAgICAgICogQGlnbm9yZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5URUFSRE9XTl9DT01QTEVURSA9ICAncHJvdGVjdGlvblRlYXJkb3duQ29tcGxldGUnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCBJRCBmb3IgZXZlbnRzIGRlbGl2ZXJlZCB3aGVuIGEgSFRNTE1lZGlhRWxlbWVudCBoYXMgYmVlblxuICAgICAgICAgKiBhc3NvY2lhdGVkIHdpdGggdGhlIHByb3RlY3Rpb24gc2V0XG4gICAgICAgICAqIEBpZ25vcmVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuVklERU9fRUxFTUVOVF9TRUxFQ1RFRCA9ICd2aWRlb0VsZW1lbnRTZWxlY3RlZCc7XG4gICAgfVxufVxuXG5sZXQgcHJvdGVjdGlvbkV2ZW50cyA9IG5ldyBQcm90ZWN0aW9uRXZlbnRzKCk7XG5leHBvcnQgZGVmYXVsdCBwcm90ZWN0aW9uRXZlbnRzO1xuIiwiLyoqXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuaW1wb3J0IENvbW1vbkVuY3J5cHRpb24gZnJvbSAnLi4vQ29tbW9uRW5jcnlwdGlvbic7XG5pbXBvcnQgTWVkaWFDYXBhYmlsaXR5IGZyb20gJy4uL3ZvL01lZGlhQ2FwYWJpbGl0eSc7XG5pbXBvcnQgS2V5U3lzdGVtQ29uZmlndXJhdGlvbiBmcm9tICcuLi92by9LZXlTeXN0ZW1Db25maWd1cmF0aW9uJztcbmltcG9ydCBQcm90ZWN0aW9uRXJyb3JzIGZyb20gJy4uL2Vycm9ycy9Qcm90ZWN0aW9uRXJyb3JzJztcbmltcG9ydCBEYXNoSlNFcnJvciBmcm9tICcuLi8uLi92by9EYXNoSlNFcnJvcic7XG5cbmNvbnN0IE5FRURLRVlfQkVGT1JFX0lOSVRJQUxJWkVfUkVUUklFUyA9IDU7XG5jb25zdCBORUVES0VZX0JFRk9SRV9JTklUSUFMSVpFX1RJTUVPVVQgPSA1MDA7XG5cbmNvbnN0IExJQ0VOU0VfU0VSVkVSX1JFUVVFU1RfUkVUUklFUyA9IDM7XG5jb25zdCBMSUNFTlNFX1NFUlZFUl9SRVFVRVNUX1JFVFJZX0lOVEVSVkFMID0gMTAwMDtcbmNvbnN0IExJQ0VOU0VfU0VSVkVSX1JFUVVFU1RfREVGQVVMVF9USU1FT1VUID0gODAwMDtcblxuLyoqXG4gKiBAbW9kdWxlIFByb3RlY3Rpb25Db250cm9sbGVyXG4gKiBAZGVzY3JpcHRpb24gUHJvdmlkZXMgYWNjZXNzIHRvIG1lZGlhIHByb3RlY3Rpb24gaW5mb3JtYXRpb24gYW5kIGZ1bmN0aW9uYWxpdHkuICBFYWNoXG4gKiBQcm90ZWN0aW9uQ29udHJvbGxlciBtYW5hZ2VzIGEgc2luZ2xlIHtAbGluayBNZWRpYVBsYXllci5tb2RlbHMuUHJvdGVjdGlvbk1vZGVsfVxuICogd2hpY2ggZW5jYXBzdWxhdGVzIGEgc2V0IG9mIHByb3RlY3Rpb24gaW5mb3JtYXRpb24gKEVNRSBBUElzLCBzZWxlY3RlZCBrZXkgc3lzdGVtLFxuICoga2V5IHNlc3Npb25zKS4gIFRoZSBBUElzIG9mIFByb3RlY3Rpb25Db250cm9sbGVyIG1vc3RseSBhbGlnbiB3aXRoIHRoZSBsYXRlc3QgRU1FXG4gKiBBUElzLiAgS2V5IHN5c3RlbSBzZWxlY3Rpb24gaXMgbW9zdGx5IGF1dG9tYXRlZCB3aGVuIGNvbWJpbmVkIHdpdGggYXBwLW92ZXJyaWRlYWJsZVxuICogZnVuY3Rpb25hbGl0eSBwcm92aWRlZCBpbiB7QGxpbmsgUHJvdGVjdGlvbktleUNvbnRyb2xsZXJ9LlxuICogQHRvZG8gUHJvdGVjdGlvbkNvbnRyb2xsZXIgZG9lcyBhbG1vc3QgYWxsIG9mIGl0cyB0YXNrcyBhdXRvbWF0aWNhbGx5IGFmdGVyIGluaXQoKSBpc1xuICogY2FsbGVkLiAgQXBwbGljYXRpb25zIG1pZ2h0IHdhbnQgbW9yZSBjb250cm9sIG92ZXIgdGhpcyBwcm9jZXNzIGFuZCB3YW50IHRvIGdvIHRocm91Z2hcbiAqIGVhY2ggc3RlcCBtYW51YWxseSAoa2V5IHN5c3RlbSBzZWxlY3Rpb24sIHNlc3Npb24gY3JlYXRpb24sIHNlc3Npb24gbWFpbnRlbmFuY2UpLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICovXG5cbmZ1bmN0aW9uIFByb3RlY3Rpb25Db250cm9sbGVyKGNvbmZpZykge1xuXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgIGNvbnN0IHByb3RlY3Rpb25LZXlDb250cm9sbGVyID0gY29uZmlnLnByb3RlY3Rpb25LZXlDb250cm9sbGVyO1xuICAgIGxldCBwcm90ZWN0aW9uTW9kZWwgPSBjb25maWcucHJvdGVjdGlvbk1vZGVsO1xuICAgIGNvbnN0IGV2ZW50QnVzID0gY29uZmlnLmV2ZW50QnVzO1xuICAgIGNvbnN0IGV2ZW50cyA9IGNvbmZpZy5ldmVudHM7XG4gICAgY29uc3QgZGVidWcgPSBjb25maWcuZGVidWc7XG4gICAgY29uc3QgQkFTRTY0ID0gY29uZmlnLkJBU0U2NDtcbiAgICBjb25zdCBjb25zdGFudHMgPSBjb25maWcuY29uc3RhbnRzO1xuICAgIGxldCBuZWVka2V5UmV0cmllcyA9IFtdO1xuXG4gICAgbGV0IGluc3RhbmNlLFxuICAgICAgICBsb2dnZXIsXG4gICAgICAgIHBlbmRpbmdOZWVkS2V5RGF0YSxcbiAgICAgICAgbWVkaWFJbmZvQXJyLFxuICAgICAgICBwcm90RGF0YVNldCxcbiAgICAgICAgc2Vzc2lvblR5cGUsXG4gICAgICAgIHJvYnVzdG5lc3NMZXZlbCxcbiAgICAgICAga2V5U3lzdGVtO1xuXG4gICAgZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgICAgIGxvZ2dlciA9IGRlYnVnLmdldExvZ2dlcihpbnN0YW5jZSk7XG4gICAgICAgIHBlbmRpbmdOZWVkS2V5RGF0YSA9IFtdO1xuICAgICAgICBtZWRpYUluZm9BcnIgPSBbXTtcbiAgICAgICAgc2Vzc2lvblR5cGUgPSAndGVtcG9yYXJ5JztcbiAgICAgICAgcm9idXN0bmVzc0xldmVsID0gJyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tDb25maWcoKSB7XG4gICAgICAgIGlmICghZXZlbnRCdXMgfHwgIWV2ZW50QnVzLmhhc093blByb3BlcnR5KCdvbicpIHx8ICFwcm90ZWN0aW9uS2V5Q29udHJvbGxlciB8fCAhcHJvdGVjdGlvbktleUNvbnRyb2xsZXIuaGFzT3duUHJvcGVydHkoJ2dldFN1cHBvcnRlZEtleVN5c3RlbXNGcm9tQ29udGVudFByb3RlY3Rpb24nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGNvbmZpZyBwYXJhbWV0ZXIocyknKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgdGhpcyBwcm90ZWN0aW9uIHN5c3RlbSB3aXRoIGEgZ2l2ZW4gYXVkaW9cbiAgICAgKiBvciB2aWRlbyBzdHJlYW0gaW5mb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmVhbUluZm99IFttZWRpYUluZm9dIE1lZGlhIGluZm9ybWF0aW9uXG4gICAgICogQG1lbWJlcm9mIG1vZHVsZTpQcm90ZWN0aW9uQ29udHJvbGxlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEB0b2RvIFRoaXMgQVBJIHdpbGwgY2hhbmdlIHdoZW4gd2UgaGF2ZSBiZXR0ZXIgc3VwcG9ydCBmb3IgYWxsb3dpbmcgYXBwbGljYXRpb25zXG4gICAgICogdG8gc2VsZWN0IGRpZmZlcmVudCBhZGFwdGF0aW9uIHNldHMgZm9yIHBsYXliYWNrLiAgUmlnaHQgbm93IGl0IGlzIGNsdW5reSBmb3JcbiAgICAgKiBhcHBsaWNhdGlvbnMgdG8gY3JlYXRlIHtAbGluayBTdHJlYW1JbmZvfSB3aXRoIHRoZSByaWdodCBpbmZvcm1hdGlvbixcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpbml0aWFsaXplRm9yTWVkaWEobWVkaWFJbmZvKSB7XG4gICAgICAgIC8vIE5vdCBjaGVja2luZyBoZXJlIGlmIGEgc2Vzc2lvbiBmb3Igc2ltaWxhciBLUy9LSUQgY29tYmluYXRpb24gaXMgYWxyZWFkeSBjcmVhdGVkXG4gICAgICAgIC8vIGJlY2F1c2Ugc3RpbGwgZG9uJ3Qga25vdyB3aGljaCBrZXlzeXN0ZW0gd2lsbCBiZSBzZWxlY3RlZC5cbiAgICAgICAgLy8gT25jZSBLZXlzeXN0ZW0gaXMgc2VsZWN0ZWQgYW5kIGJlZm9yZSBjcmVhdGluZyB0aGUgc2Vzc2lvbiwgd2Ugd2lsbCBkbyB0aGF0IGNoZWNrXG4gICAgICAgIC8vIHNvIHdlIGNyZWF0ZSB0aGUgc3RyaWN0bHkgbmVjZXNzYXJ5IERSTSBzZXNzaW9uc1xuICAgICAgICBpZiAoIW1lZGlhSW5mbykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtZWRpYUluZm8gY2FuIG5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hlY2tDb25maWcoKTtcblxuICAgICAgICBldmVudEJ1cy5vbihldmVudHMuSU5URVJOQUxfS0VZX01FU1NBR0UsIG9uS2V5TWVzc2FnZSwgdGhpcyk7XG4gICAgICAgIGV2ZW50QnVzLm9uKGV2ZW50cy5JTlRFUk5BTF9LRVlfU1RBVFVTX0NIQU5HRUQsIG9uS2V5U3RhdHVzQ2hhbmdlZCwgdGhpcyk7XG5cbiAgICAgICAgbWVkaWFJbmZvQXJyLnB1c2gobWVkaWFJbmZvKTtcblxuICAgICAgICAvLyBDb250ZW50UHJvdGVjdGlvbiBlbGVtZW50cyBhcmUgc3BlY2lmaWVkIGF0IHRoZSBBZGFwdGF0aW9uU2V0IGxldmVsLCBzbyB0aGUgQ1AgZm9yIGF1ZGlvXG4gICAgICAgIC8vIGFuZCB2aWRlbyB3aWxsIGJlIHRoZSBzYW1lLiAgSnVzdCB1c2Ugb25lIHZhbGlkIE1lZGlhSW5mbyBvYmplY3RcbiAgICAgICAgY29uc3Qgc3VwcG9ydGVkS1MgPSBwcm90ZWN0aW9uS2V5Q29udHJvbGxlci5nZXRTdXBwb3J0ZWRLZXlTeXN0ZW1zRnJvbUNvbnRlbnRQcm90ZWN0aW9uKG1lZGlhSW5mby5jb250ZW50UHJvdGVjdGlvbik7XG4gICAgICAgIGlmIChzdXBwb3J0ZWRLUyAmJiBzdXBwb3J0ZWRLUy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZWxlY3RLZXlTeXN0ZW0oc3VwcG9ydGVkS1MsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHNldCBvZiBzdXBwb3J0ZWQga2V5IHN5c3RlbXMgYW5kIENFTkMgaW5pdGlhbGl6YXRpb24gZGF0YVxuICAgICAqIGZyb20gdGhlIGdpdmVuIGFycmF5IG9mIENvbnRlbnRQcm90ZWN0aW9uIGVsZW1lbnRzLiAgT25seVxuICAgICAqIGtleSBzeXN0ZW1zIHRoYXQgYXJlIHN1cHBvcnRlZCBieSB0aGlzIHBsYXllciB3aWxsIGJlIHJldHVybmVkLlxuICAgICAqIEtleSBzeXN0ZW1zIGFyZSByZXR1cm5lZCBpbiBwcmlvcml0eSBvcmRlciAoaGlnaGVzdCBmaXJzdCkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5LjxPYmplY3Q+fSBjcHMgLSBhcnJheSBvZiBjb250ZW50IHByb3RlY3Rpb24gZWxlbWVudHMgcGFyc2VkXG4gICAgICogZnJvbSB0aGUgbWFuaWZlc3RcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPE9iamVjdD59IGFycmF5IG9mIG9iamVjdHMgaW5kaWNhdGluZyB3aGljaCBzdXBwb3J0ZWQga2V5XG4gICAgICogc3lzdGVtcyB3ZXJlIGZvdW5kLiAgRW1wdHkgYXJyYXkgaXMgcmV0dXJuZWQgaWYgbm9cbiAgICAgKiBzdXBwb3J0ZWQga2V5IHN5c3RlbXMgd2VyZSBmb3VuZFxuICAgICAqIEBtZW1iZXJvZiBtb2R1bGU6UHJvdGVjdGlvbktleUNvbnRyb2xsZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRTdXBwb3J0ZWRLZXlTeXN0ZW1zRnJvbUNvbnRlbnRQcm90ZWN0aW9uKGNwcykge1xuICAgICAgICByZXR1cm4gcHJvdGVjdGlvbktleUNvbnRyb2xsZXIuZ2V0U3VwcG9ydGVkS2V5U3lzdGVtc0Zyb21Db250ZW50UHJvdGVjdGlvbihjcHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBrZXkgc2Vzc2lvbiBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIGluaXRpYWxpemF0aW9uIGRhdGEgZnJvbVxuICAgICAqIHRoZSBNUEQgb3IgZnJvbSB0aGUgUFNTSCBib3ggaW4gdGhlIG1lZGlhXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBpbml0RGF0YSB0aGUgaW5pdGlhbGl6YXRpb24gZGF0YVxuICAgICAqIEBwYXJhbSB7VWludDhBcnJheX0gY2RtRGF0YSB0aGUgY3VzdG9tIGRhdGEgdG8gcHJvdmlkZSB0byBsaWNlbnNlclxuICAgICAqIEBtZW1iZXJvZiBtb2R1bGU6UHJvdGVjdGlvbkNvbnRyb2xsZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAZmlyZXMgUHJvdGVjdGlvbkNvbnRyb2xsZXIjS2V5U2Vzc2lvbkNyZWF0ZWRcbiAgICAgKiBAdG9kbyBJbiBvbGRlciB2ZXJzaW9ucyBvZiB0aGUgRU1FIHNwZWMsIHRoZXJlIHdhcyBhIG9uZS10by1vbmUgcmVsYXRpb25zaGlwIGJldHdlZW5cbiAgICAgKiBpbml0aWFsaXphdGlvbiBkYXRhIGFuZCBrZXkgc2Vzc2lvbnMuICBUaGF0IGlzIG5vIGxvbmdlciB0cnVlIGluIHRoZSBsYXRlc3QgQVBJcy4gIFRoaXNcbiAgICAgKiBBUEkgd2lsbCBuZWVkIHRvIG1vZGlmaWVkIChhbmQgYSBuZXcgXCJnZW5lcmF0ZVJlcXVlc3Qoa2V5U2Vzc2lvbiwgaW5pdERhdGEpXCIgQVBJIGNyZWF0ZWQpXG4gICAgICogdG8gY29tZSB1cCB0byBzcGVlZCB3aXRoIHRoZSBsYXRlc3QgRU1FIHN0YW5kYXJkXG4gICAgICovXG4gICAgZnVuY3Rpb24gY3JlYXRlS2V5U2Vzc2lvbihpbml0RGF0YSwgY2RtRGF0YSkge1xuICAgICAgICBjb25zdCBpbml0RGF0YUZvcktTID0gQ29tbW9uRW5jcnlwdGlvbi5nZXRQU1NIRm9yS2V5U3lzdGVtKGtleVN5c3RlbSwgaW5pdERhdGEpO1xuICAgICAgICBjb25zdCBwcm90RGF0YSA9IGdldFByb3REYXRhKGtleVN5c3RlbSk7XG4gICAgICAgIGlmIChpbml0RGF0YUZvcktTKSB7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBkdXBsaWNhdGUgaW5pdERhdGFcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbml0RGF0YSA9IHByb3RlY3Rpb25Nb2RlbC5nZXRBbGxJbml0RGF0YSgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50SW5pdERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvdGVjdGlvbktleUNvbnRyb2xsZXIuaW5pdERhdGFFcXVhbHMoaW5pdERhdGFGb3JLUywgY3VycmVudEluaXREYXRhW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIud2FybignRFJNOiBJZ25vcmluZyBpbml0RGF0YSBiZWNhdXNlIHdlIGhhdmUgYWxyZWFkeSBzZWVuIGl0IScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwcm90ZWN0aW9uTW9kZWwuY3JlYXRlS2V5U2Vzc2lvbihpbml0RGF0YUZvcktTLCBwcm90RGF0YSwgZ2V0U2Vzc2lvblR5cGUoa2V5U3lzdGVtKSwgY2RtRGF0YSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGV2ZW50QnVzLnRyaWdnZXIoZXZlbnRzLktFWV9TRVNTSU9OX0NSRUFURUQsIHtkYXRhOiBudWxsLCBlcnJvcjogbmV3IERhc2hKU0Vycm9yKFByb3RlY3Rpb25FcnJvcnMuS0VZX1NFU1NJT05fQ1JFQVRFRF9FUlJPUl9DT0RFLCBQcm90ZWN0aW9uRXJyb3JzLktFWV9TRVNTSU9OX0NSRUFURURfRVJST1JfTUVTU0FHRSArIGVycm9yLm1lc3NhZ2UpfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaW5pdERhdGEpIHtcbiAgICAgICAgICAgIHByb3RlY3Rpb25Nb2RlbC5jcmVhdGVLZXlTZXNzaW9uKGluaXREYXRhLCBwcm90RGF0YSwgZ2V0U2Vzc2lvblR5cGUoa2V5U3lzdGVtKSwgY2RtRGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldmVudEJ1cy50cmlnZ2VyKGV2ZW50cy5LRVlfU0VTU0lPTl9DUkVBVEVELCB7ZGF0YTogbnVsbCwgZXJyb3I6IG5ldyBEYXNoSlNFcnJvcihQcm90ZWN0aW9uRXJyb3JzLktFWV9TRVNTSU9OX0NSRUFURURfRVJST1JfQ09ERSwgUHJvdGVjdGlvbkVycm9ycy5LRVlfU0VTU0lPTl9DUkVBVEVEX0VSUk9SX01FU1NBR0UgKyAnU2VsZWN0ZWQga2V5IHN5c3RlbSBpcyAnICsga2V5U3lzdGVtLnN5c3RlbVN0cmluZyArICcuICBuZWVka2V5L2VuY3J5cHRlZCBldmVudCBjb250YWlucyBubyBpbml0RGF0YSBjb3JyZXNwb25kaW5nIHRvIHRoYXQga2V5IHN5c3RlbSEnKX0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZHMgYSBrZXkgc2Vzc2lvbiB3aXRoIHRoZSBnaXZlbiBzZXNzaW9uIElEIGZyb20gcGVyc2lzdGVudCBzdG9yYWdlLiAgVGhpc1xuICAgICAqIGVzc2VudGlhbGx5IGNyZWF0ZXMgYSBuZXcga2V5IHNlc3Npb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZXNzaW9uSURcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW5pdERhdGFcbiAgICAgKiBAbWVtYmVyb2YgbW9kdWxlOlByb3RlY3Rpb25Db250cm9sbGVyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFByb3RlY3Rpb25Db250cm9sbGVyI0tleVNlc3Npb25DcmVhdGVkXG4gICAgICovXG4gICAgZnVuY3Rpb24gbG9hZEtleVNlc3Npb24oc2Vzc2lvbklELCBpbml0RGF0YSkge1xuICAgICAgICBwcm90ZWN0aW9uTW9kZWwubG9hZEtleVNlc3Npb24oc2Vzc2lvbklELCBpbml0RGF0YSwgZ2V0U2Vzc2lvblR5cGUoa2V5U3lzdGVtKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgZ2l2ZW4ga2V5IHNlc3Npb24gZnJvbSBwZXJzaXN0ZW50IHN0b3JhZ2UgYW5kIGNsb3NlcyB0aGUgc2Vzc2lvblxuICAgICAqIGFzIGlmIHtAbGluayBQcm90ZWN0aW9uQ29udHJvbGxlciNjbG9zZUtleVNlc3Npb259XG4gICAgICogd2FzIGNhbGxlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtTZXNzaW9uVG9rZW59IHNlc3Npb25Ub2tlbiB0aGUgc2Vzc2lvblxuICAgICAqIHRva2VuXG4gICAgICogQG1lbWJlcm9mIG1vZHVsZTpQcm90ZWN0aW9uQ29udHJvbGxlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBmaXJlcyBQcm90ZWN0aW9uQ29udHJvbGxlciNLZXlTZXNzaW9uUmVtb3ZlZFxuICAgICAqIEBmaXJlcyBQcm90ZWN0aW9uQ29udHJvbGxlciNLZXlTZXNzaW9uQ2xvc2VkXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVtb3ZlS2V5U2Vzc2lvbihzZXNzaW9uVG9rZW4pIHtcbiAgICAgICAgcHJvdGVjdGlvbk1vZGVsLnJlbW92ZUtleVNlc3Npb24oc2Vzc2lvblRva2VuKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIGtleSBzZXNzaW9uIGFuZCByZWxlYXNlcyBhbGwgYXNzb2NpYXRlZCBkZWNyeXB0aW9uIGtleXMuICBUaGVzZVxuICAgICAqIGtleXMgd2lsbCBubyBsb25nZXIgYmUgYXZhaWxhYmxlIGZvciBkZWNyeXB0aW5nIG1lZGlhXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Nlc3Npb25Ub2tlbn0gc2Vzc2lvblRva2VuIHRoZSBzZXNzaW9uXG4gICAgICogdG9rZW5cbiAgICAgKiBAbWVtYmVyb2YgbW9kdWxlOlByb3RlY3Rpb25Db250cm9sbGVyXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQGZpcmVzIFByb3RlY3Rpb25Db250cm9sbGVyI0tleVNlc3Npb25DbG9zZWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjbG9zZUtleVNlc3Npb24oc2Vzc2lvblRva2VuKSB7XG4gICAgICAgIHByb3RlY3Rpb25Nb2RlbC5jbG9zZUtleVNlc3Npb24oc2Vzc2lvblRva2VuKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgc2VydmVyIGNlcnRpZmljYXRlIGZvciB1c2UgYnkgdGhlIENETSB3aGVuIHNpZ25pbmcga2V5IG1lc3NhZ2VzXG4gICAgICogaW50ZW5kZWQgZm9yIGEgcGFydGljdWxhciBsaWNlbnNlIHNlcnZlci4gIFRoaXMgd2lsbCBmaXJlXG4gICAgICogYW4gZXJyb3IgZXZlbnQgaWYgYSBrZXkgc3lzdGVtIGhhcyBub3QgeWV0IGJlZW4gc2VsZWN0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBzZXJ2ZXJDZXJ0aWZpY2F0ZSBhIENETS1zcGVjaWZpYyBsaWNlbnNlIHNlcnZlclxuICAgICAqIGNlcnRpZmljYXRlXG4gICAgICogQG1lbWJlcm9mIG1vZHVsZTpQcm90ZWN0aW9uQ29udHJvbGxlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBmaXJlcyBQcm90ZWN0aW9uQ29udHJvbGxlciNTZXJ2ZXJDZXJ0aWZpY2F0ZVVwZGF0ZWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRTZXJ2ZXJDZXJ0aWZpY2F0ZShzZXJ2ZXJDZXJ0aWZpY2F0ZSkge1xuICAgICAgICBwcm90ZWN0aW9uTW9kZWwuc2V0U2VydmVyQ2VydGlmaWNhdGUoc2VydmVyQ2VydGlmaWNhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFzc29jaWF0ZSB0aGlzIHByb3RlY3Rpb24gc3lzdGVtIHdpdGggdGhlIGdpdmVuIEhUTUxNZWRpYUVsZW1lbnQuICBUaGlzXG4gICAgICogY2F1c2VzIHRoZSBzeXN0ZW0gdG8gcmVnaXN0ZXIgZm9yIG5lZWRrZXkvZW5jcnlwdGVkIGV2ZW50cyBmcm9tIHRoZSBnaXZlblxuICAgICAqIGVsZW1lbnQgYW5kIHByb3ZpZGVzIGEgZGVzdGluYXRpb24gZm9yIHNldHRpbmcgb2YgTWVkaWFLZXlzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxNZWRpYUVsZW1lbnR9IGVsZW1lbnQgdGhlIG1lZGlhIGVsZW1lbnQgdG8gd2hpY2ggdGhlIHByb3RlY3Rpb25cbiAgICAgKiBzeXN0ZW0gc2hvdWxkIGJlIGFzc29jaWF0ZWRcbiAgICAgKiBAbWVtYmVyb2YgbW9kdWxlOlByb3RlY3Rpb25Db250cm9sbGVyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0TWVkaWFFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHByb3RlY3Rpb25Nb2RlbC5zZXRNZWRpYUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICBldmVudEJ1cy5vbihldmVudHMuTkVFRF9LRVksIG9uTmVlZEtleSwgdGhpcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcHJvdGVjdGlvbk1vZGVsLnNldE1lZGlhRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgIGV2ZW50QnVzLm9mZihldmVudHMuTkVFRF9LRVksIG9uTmVlZEtleSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzZXNzaW9uIHR5cGUgdG8gdXNlIHdoZW4gY3JlYXRpbmcga2V5IHNlc3Npb25zLiAgRWl0aGVyIFwidGVtcG9yYXJ5XCIgb3JcbiAgICAgKiBcInBlcnNpc3RlbnQtbGljZW5zZVwiLiAgRGVmYXVsdCBpcyBcInRlbXBvcmFyeVwiLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIHRoZSBzZXNzaW9uIHR5cGVcbiAgICAgKiBAbWVtYmVyb2YgbW9kdWxlOlByb3RlY3Rpb25Db250cm9sbGVyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0U2Vzc2lvblR5cGUodmFsdWUpIHtcbiAgICAgICAgc2Vzc2lvblR5cGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSByb2J1c3RuZXNzIGxldmVsIGZvciB2aWRlbyBhbmQgYXVkaW8gY2FwYWJpbGl0aWVzLiBPcHRpb25hbCB0byByZW1vdmUgQ2hyb21lIHdhcm5pbmdzLlxuICAgICAqIFBvc3NpYmxlIHZhbHVlcyBhcmUgU1dfU0VDVVJFX0NSWVBUTywgU1dfU0VDVVJFX0RFQ09ERSwgSFdfU0VDVVJFX0NSWVBUTywgSFdfU0VDVVJFX0NSWVBUTywgSFdfU0VDVVJFX0RFQ09ERSwgSFdfU0VDVVJFX0FMTC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsZXZlbCB0aGUgcm9idXN0bmVzcyBsZXZlbFxuICAgICAqIEBtZW1iZXJvZiBtb2R1bGU6UHJvdGVjdGlvbkNvbnRyb2xsZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRSb2J1c3RuZXNzTGV2ZWwobGV2ZWwpIHtcbiAgICAgICAgcm9idXN0bmVzc0xldmVsID0gbGV2ZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoIEtleVN5c3RlbS1zcGVjaWZpYyBkYXRhIHRvIHVzZSBmb3IgbGljZW5zZSBhY3F1aXNpdGlvbiB3aXRoIEVNRVxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgYW4gb2JqZWN0IGNvbnRhaW5pbmcgcHJvcGVydHkgbmFtZXMgY29ycmVzcG9uZGluZyB0b1xuICAgICAqIGtleSBzeXN0ZW0gbmFtZSBzdHJpbmdzIChlLmcuIFwib3JnLnczLmNsZWFya2V5XCIpIGFuZCBhc3NvY2lhdGVkIHZhbHVlc1xuICAgICAqIGJlaW5nIGluc3RhbmNlcyBvZiB7QGxpbmsgUHJvdGVjdGlvbkRhdGF9XG4gICAgICogQG1lbWJlcm9mIG1vZHVsZTpQcm90ZWN0aW9uQ29udHJvbGxlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldFByb3RlY3Rpb25EYXRhKGRhdGEpIHtcbiAgICAgICAgcHJvdERhdGFTZXQgPSBkYXRhO1xuICAgICAgICBwcm90ZWN0aW9uS2V5Q29udHJvbGxlci5zZXRQcm90ZWN0aW9uRGF0YShkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9wIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiBjdXJyZW50IHBsYXliYWNrIGlzIHN0b3BwZWQvcmVzZXR0ZWQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgbW9kdWxlOlByb3RlY3Rpb25Db250cm9sbGVyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgaWYgKHByb3RlY3Rpb25Nb2RlbCkge1xuICAgICAgICAgICAgcHJvdGVjdGlvbk1vZGVsLnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveXMgYWxsIHByb3RlY3Rpb24gZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhpcyBwcm90ZWN0aW9uIHNldC4gIFRoaXMgaW5jbHVkZXNcbiAgICAgKiBkZWxldGluZyBhbGwga2V5IHNlc3Npb25zLiBJbiB0aGUgY2FzZSBvZiBwZXJzaXN0ZW50IGtleSBzZXNzaW9ucywgdGhlIHNlc3Npb25zXG4gICAgICogd2lsbCBzaW1wbHkgYmUgdW5sb2FkZWQgYW5kIG5vdCBkZWxldGVkLiAgQWRkaXRpb25hbGx5LCBpZiB0aGlzIHByb3RlY3Rpb24gc2V0IGlzXG4gICAgICogYXNzb2NpYXRlZCB3aXRoIGEgSFRNTE1lZGlhRWxlbWVudCwgaXQgd2lsbCBiZSBkZXRhY2hlZCBmcm9tIHRoYXQgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBtb2R1bGU6UHJvdGVjdGlvbkNvbnRyb2xsZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZXNldCgpIHtcblxuICAgICAgICBldmVudEJ1cy5vZmYoZXZlbnRzLklOVEVSTkFMX0tFWV9NRVNTQUdFLCBvbktleU1lc3NhZ2UsIHRoaXMpO1xuICAgICAgICBldmVudEJ1cy5vZmYoZXZlbnRzLklOVEVSTkFMX0tFWV9TVEFUVVNfQ0hBTkdFRCwgb25LZXlTdGF0dXNDaGFuZ2VkLCB0aGlzKTtcblxuICAgICAgICBzZXRNZWRpYUVsZW1lbnQobnVsbCk7XG5cbiAgICAgICAga2V5U3lzdGVtID0gdW5kZWZpbmVkOy8vVE9ETy1SZWZhY3RvciBsb29rIGF0IHdoeSB1bmRlZmluZWQgaXMgbmVlZGVkIGZvciB0aGlzLiByZWZhY3RvclxuXG4gICAgICAgIGlmIChwcm90ZWN0aW9uTW9kZWwpIHtcbiAgICAgICAgICAgIHByb3RlY3Rpb25Nb2RlbC5yZXNldCgpO1xuICAgICAgICAgICAgcHJvdGVjdGlvbk1vZGVsID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5lZWRrZXlSZXRyaWVzLmZvckVhY2goIHJldHJ5VGltZW91dCA9PiBjbGVhclRpbWVvdXQocmV0cnlUaW1lb3V0KSk7XG4gICAgICAgIG5lZWRrZXlSZXRyaWVzID0gW107XG5cbiAgICAgICAgbWVkaWFJbmZvQXJyID0gW107XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUHJpdmF0ZVxuICAgIC8vLy8vLy8vLy8vLy8vL1xuXG4gICAgZnVuY3Rpb24gZ2V0UHJvdERhdGEoa2V5U3lzdGVtKSB7XG4gICAgICAgIGxldCBwcm90RGF0YSA9IG51bGw7XG4gICAgICAgIGlmIChrZXlTeXN0ZW0pIHtcbiAgICAgICAgICAgIGNvbnN0IGtleVN5c3RlbVN0cmluZyA9IGtleVN5c3RlbS5zeXN0ZW1TdHJpbmc7XG5cbiAgICAgICAgICAgIGlmIChwcm90RGF0YVNldCkge1xuICAgICAgICAgICAgICAgIHByb3REYXRhID0gKGtleVN5c3RlbVN0cmluZyBpbiBwcm90RGF0YVNldCkgPyBwcm90RGF0YVNldFtrZXlTeXN0ZW1TdHJpbmddIDogbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvdERhdGE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0S2V5U3lzdGVtQ29uZmlndXJhdGlvbihrZXlTeXN0ZW0pIHtcbiAgICAgICAgY29uc3QgcHJvdERhdGEgPSBnZXRQcm90RGF0YShrZXlTeXN0ZW0pO1xuICAgICAgICBjb25zdCBhdWRpb0NhcGFiaWxpdGllcyA9IFtdO1xuICAgICAgICBjb25zdCB2aWRlb0NhcGFiaWxpdGllcyA9IFtdO1xuICAgICAgICBjb25zdCBhdWRpb1JvYnVzdG5lc3MgPSAocHJvdERhdGEgJiYgcHJvdERhdGEuYXVkaW9Sb2J1c3RuZXNzICYmIHByb3REYXRhLmF1ZGlvUm9idXN0bmVzcy5sZW5ndGggPiAwKSA/IHByb3REYXRhLmF1ZGlvUm9idXN0bmVzcyA6IHJvYnVzdG5lc3NMZXZlbDtcbiAgICAgICAgY29uc3QgdmlkZW9Sb2J1c3RuZXNzID0gKHByb3REYXRhICYmIHByb3REYXRhLnZpZGVvUm9idXN0bmVzcyAmJiBwcm90RGF0YS52aWRlb1JvYnVzdG5lc3MubGVuZ3RoID4gMCkgPyBwcm90RGF0YS52aWRlb1JvYnVzdG5lc3MgOiByb2J1c3RuZXNzTGV2ZWw7XG4gICAgICAgIGNvbnN0IGtzU2Vzc2lvblR5cGUgPSBnZXRTZXNzaW9uVHlwZShrZXlTeXN0ZW0pO1xuICAgICAgICBjb25zdCBkaXN0aW5jdGl2ZUlkZW50aWZpZXIgPSAocHJvdERhdGEgJiYgcHJvdERhdGEuZGlzdGluY3RpdmVJZGVudGlmaWVyKSA/IHByb3REYXRhLmRpc3RpbmN0aXZlSWRlbnRpZmllciA6ICdvcHRpb25hbCc7XG4gICAgICAgIGNvbnN0IHBlcnNpc3RlbnRTdGF0ZSA9IChwcm90RGF0YSAmJiBwcm90RGF0YS5wZXJzaXN0ZW50U3RhdGUpID8gcHJvdERhdGEucGVyc2lzdGVudFN0YXRlIDogKGtzU2Vzc2lvblR5cGUgPT09ICd0ZW1wb3JhcnknKSA/ICdvcHRpb25hbCcgOiAncmVxdWlyZWQnO1xuXG4gICAgICAgIG1lZGlhSW5mb0Fyci5mb3JFYWNoKChtZWRpYSkgPT4ge1xuICAgICAgICAgICAgaWYgKG1lZGlhLnR5cGUgPT09IGNvbnN0YW50cy5BVURJTykge1xuICAgICAgICAgICAgICAgIGF1ZGlvQ2FwYWJpbGl0aWVzLnB1c2gobmV3IE1lZGlhQ2FwYWJpbGl0eShtZWRpYS5jb2RlYywgYXVkaW9Sb2J1c3RuZXNzKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lZGlhLnR5cGUgPT09IGNvbnN0YW50cy5WSURFTykge1xuICAgICAgICAgICAgICAgIHZpZGVvQ2FwYWJpbGl0aWVzLnB1c2gobmV3IE1lZGlhQ2FwYWJpbGl0eShtZWRpYS5jb2RlYywgdmlkZW9Sb2J1c3RuZXNzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXcgS2V5U3lzdGVtQ29uZmlndXJhdGlvbihcbiAgICAgICAgICAgIGF1ZGlvQ2FwYWJpbGl0aWVzLCB2aWRlb0NhcGFiaWxpdGllcywgZGlzdGluY3RpdmVJZGVudGlmaWVyLFxuICAgICAgICAgICAgcGVyc2lzdGVudFN0YXRlLFxuICAgICAgICAgICAgW2tzU2Vzc2lvblR5cGVdKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTZXNzaW9uVHlwZShrZXlTeXN0ZW0pIHtcbiAgICAgICAgY29uc3QgcHJvdERhdGEgPSBnZXRQcm90RGF0YShrZXlTeXN0ZW0pO1xuICAgICAgICBjb25zdCBrc1Nlc3Npb25UeXBlID0gKHByb3REYXRhICYmIHByb3REYXRhLnNlc3Npb25UeXBlKSA/IHByb3REYXRhLnNlc3Npb25UeXBlIDogc2Vzc2lvblR5cGU7XG4gICAgICAgIHJldHVybiBrc1Nlc3Npb25UeXBlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbGVjdEtleVN5c3RlbShzdXBwb3J0ZWRLUywgZnJvbU1hbmlmZXN0KSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCByZXF1ZXN0ZWRLZXlTeXN0ZW1zID0gW107XG5cbiAgICAgICAgbGV0IGtzSWR4O1xuICAgICAgICBpZiAoa2V5U3lzdGVtKSB7XG4gICAgICAgICAgICAvLyBXZSBoYXZlIGEga2V5IHN5c3RlbVxuICAgICAgICAgICAgZm9yIChrc0lkeCA9IDA7IGtzSWR4IDwgc3VwcG9ydGVkS1MubGVuZ3RoOyBrc0lkeCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleVN5c3RlbSA9PT0gc3VwcG9ydGVkS1Nba3NJZHhdLmtzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdGVkS2V5U3lzdGVtcy5wdXNoKHtrczogc3VwcG9ydGVkS1Nba3NJZHhdLmtzLCBjb25maWdzOiBbZ2V0S2V5U3lzdGVtQ29uZmlndXJhdGlvbihrZXlTeXN0ZW0pXX0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEVuc3VyZSB0aGF0IHdlIHdvdWxkIGJlIGdyYW50ZWQga2V5IHN5c3RlbSBhY2Nlc3MgdXNpbmcgdGhlIGtleVxuICAgICAgICAgICAgICAgICAgICAvLyBzeXN0ZW0gYW5kIGNvZGVjIGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9uS2V5U3lzdGVtQWNjZXNzQ29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50QnVzLm9mZihldmVudHMuS0VZX1NZU1RFTV9BQ0NFU1NfQ09NUExFVEUsIG9uS2V5U3lzdGVtQWNjZXNzQ29tcGxldGUsIHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmcm9tTWFuaWZlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuS0VZX1NZU1RFTV9TRUxFQ1RFRCwge2Vycm9yOiBuZXcgRGFzaEpTRXJyb3IoUHJvdGVjdGlvbkVycm9ycy5LRVlfU1lTVEVNX0FDQ0VTU19ERU5JRURfRVJST1JfQ09ERSwgUHJvdGVjdGlvbkVycm9ycy5LRVlfU1lTVEVNX0FDQ0VTU19ERU5JRURfRVJST1JfTUVTU0FHRSArIGV2ZW50LmVycm9yKX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ0RSTTogS2V5U3lzdGVtIEFjY2VzcyBHcmFudGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuS0VZX1NZU1RFTV9TRUxFQ1RFRCwge2RhdGE6IGV2ZW50LmRhdGF9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3VwcG9ydGVkS1Nba3NJZHhdLnNlc3Npb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIE1lZGlhS2V5U2Vzc2lvbiB3aXRoIHNlc3Npb25JZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkS2V5U2Vzc2lvbihzdXBwb3J0ZWRLU1trc0lkeF0uc2Vzc2lvbklkLCBzdXBwb3J0ZWRLU1trc0lkeF0uaW5pdERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydGVkS1Nba3NJZHhdLmluaXREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgTWVkaWFLZXlTZXNzaW9uIHdpdGggaW5pdERhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlS2V5U2Vzc2lvbihzdXBwb3J0ZWRLU1trc0lkeF0uaW5pdERhdGEsIHN1cHBvcnRlZEtTW2tzSWR4XS5jZG1EYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50QnVzLm9uKGV2ZW50cy5LRVlfU1lTVEVNX0FDQ0VTU19DT01QTEVURSwgb25LZXlTeXN0ZW1BY2Nlc3NDb21wbGV0ZSwgc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIHByb3RlY3Rpb25Nb2RlbC5yZXF1ZXN0S2V5U3lzdGVtQWNjZXNzKHJlcXVlc3RlZEtleVN5c3RlbXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5U3lzdGVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIEZpcnN0IHRpbWUgdGhyb3VnaCwgc28gd2UgbmVlZCB0byBzZWxlY3QgYSBrZXkgc3lzdGVtXG4gICAgICAgICAgICBrZXlTeXN0ZW0gPSBudWxsO1xuICAgICAgICAgICAgcGVuZGluZ05lZWRLZXlEYXRhLnB1c2goc3VwcG9ydGVkS1MpO1xuXG4gICAgICAgICAgICAvLyBBZGQgYWxsIGtleSBzeXN0ZW1zIHRvIG91ciByZXF1ZXN0IGxpc3Qgc2luY2Ugd2UgaGF2ZSB5ZXQgdG8gc2VsZWN0IGEga2V5IHN5c3RlbVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdXBwb3J0ZWRLUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RlZEtleVN5c3RlbXMucHVzaCh7a3M6IHN1cHBvcnRlZEtTW2ldLmtzLCBjb25maWdzOiBbZ2V0S2V5U3lzdGVtQ29uZmlndXJhdGlvbihzdXBwb3J0ZWRLU1tpXS5rcyldfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBrZXlTeXN0ZW1BY2Nlc3M7XG4gICAgICAgICAgICBjb25zdCBvbktleVN5c3RlbUFjY2Vzc0NvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnRCdXMub2ZmKGV2ZW50cy5LRVlfU1lTVEVNX0FDQ0VTU19DT01QTEVURSwgb25LZXlTeXN0ZW1BY2Nlc3NDb21wbGV0ZSwgc2VsZik7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleVN5c3RlbSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRCdXMub2ZmKGV2ZW50cy5JTlRFUk5BTF9LRVlfU1lTVEVNX1NFTEVDVEVELCBvbktleVN5c3RlbVNlbGVjdGVkLCBzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmcm9tTWFuaWZlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50QnVzLnRyaWdnZXIoZXZlbnRzLktFWV9TWVNURU1fU0VMRUNURUQsIHtkYXRhOiBudWxsLCBlcnJvcjogbmV3IERhc2hKU0Vycm9yKFByb3RlY3Rpb25FcnJvcnMuS0VZX1NZU1RFTV9BQ0NFU1NfREVOSUVEX0VSUk9SX0NPREUsIFByb3RlY3Rpb25FcnJvcnMuS0VZX1NZU1RFTV9BQ0NFU1NfREVOSUVEX0VSUk9SX01FU1NBR0UgKyBldmVudC5lcnJvcil9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGtleVN5c3RlbUFjY2VzcyA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdEUk06IEtleVN5c3RlbSBBY2Nlc3MgR3JhbnRlZCAoJyArIGtleVN5c3RlbUFjY2Vzcy5rZXlTeXN0ZW0uc3lzdGVtU3RyaW5nICsgJykhICBTZWxlY3Rpbmcga2V5IHN5c3RlbS4uLicpO1xuICAgICAgICAgICAgICAgICAgICBwcm90ZWN0aW9uTW9kZWwuc2VsZWN0S2V5U3lzdGVtKGtleVN5c3RlbUFjY2Vzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBvbktleVN5c3RlbVNlbGVjdGVkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnRCdXMub2ZmKGV2ZW50cy5JTlRFUk5BTF9LRVlfU1lTVEVNX1NFTEVDVEVELCBvbktleVN5c3RlbVNlbGVjdGVkLCBzZWxmKTtcbiAgICAgICAgICAgICAgICBldmVudEJ1cy5vZmYoZXZlbnRzLktFWV9TWVNURU1fQUNDRVNTX0NPTVBMRVRFLCBvbktleVN5c3RlbUFjY2Vzc0NvbXBsZXRlLCBzZWxmKTtcbiAgICAgICAgICAgICAgICBpZiAoIWV2ZW50LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcHJvdGVjdGlvbk1vZGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAga2V5U3lzdGVtID0gcHJvdGVjdGlvbk1vZGVsLmdldEtleVN5c3RlbSgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudEJ1cy50cmlnZ2VyKGV2ZW50cy5LRVlfU1lTVEVNX1NFTEVDVEVELCB7ZGF0YToga2V5U3lzdGVtQWNjZXNzfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBzZXJ2ZXIgY2VydGlmaWNhdGUgZnJvbSBwcm90RGF0YVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm90RGF0YSA9IGdldFByb3REYXRhKGtleVN5c3RlbSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm90RGF0YSAmJiBwcm90RGF0YS5zZXJ2ZXJDZXJ0aWZpY2F0ZSAmJiBwcm90RGF0YS5zZXJ2ZXJDZXJ0aWZpY2F0ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm90ZWN0aW9uTW9kZWwuc2V0U2VydmVyQ2VydGlmaWNhdGUoQkFTRTY0LmRlY29kZUFycmF5KHByb3REYXRhLnNlcnZlckNlcnRpZmljYXRlKS5idWZmZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGVuZGluZ05lZWRLZXlEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGtzSWR4ID0gMDsga3NJZHggPCBwZW5kaW5nTmVlZEtleURhdGFbaV0ubGVuZ3RoOyBrc0lkeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleVN5c3RlbSA9PT0gcGVuZGluZ05lZWRLZXlEYXRhW2ldW2tzSWR4XS5rcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGb3IgQ2xlYXJrZXk6IGlmIHBhcmFtZXRlcnMgZm9yIGdlbmVyYXRpbmcgaW5pdCBkYXRhIHdhcyBwcm92aWRlZCBieSB0aGUgdXNlciwgdXNlIHRoZW0gZm9yIGdlbmVyYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5pdERhdGEgYW5kIG92ZXJ3cml0ZSBwb3NzaWJsZSBpbml0RGF0YSBpbmRpY2F0ZWQgaW4gZW5jcnlwdGVkIGV2ZW50IChFTUUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm90ZWN0aW9uS2V5Q29udHJvbGxlci5pc0NsZWFyS2V5KGtleVN5c3RlbSkgJiYgcHJvdERhdGEgJiYgcHJvdERhdGEuaGFzT3duUHJvcGVydHkoJ2NsZWFya2V5cycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbml0RGF0YSA9IHsga2lkczogT2JqZWN0LmtleXMocHJvdERhdGEuY2xlYXJrZXlzKSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ05lZWRLZXlEYXRhW2ldW2tzSWR4XS5pbml0RGF0YSA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShKU09OLnN0cmluZ2lmeShpbml0RGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nTmVlZEtleURhdGFbaV1ba3NJZHhdLnNlc3Npb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTG9hZCBNZWRpYUtleVNlc3Npb24gd2l0aCBzZXNzaW9uSWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRLZXlTZXNzaW9uKHBlbmRpbmdOZWVkS2V5RGF0YVtpXVtrc0lkeF0uc2Vzc2lvbklkLCBwZW5kaW5nTmVlZEtleURhdGFbaV1ba3NJZHhdLmluaXREYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwZW5kaW5nTmVlZEtleURhdGFbaV1ba3NJZHhdLmluaXREYXRhICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IE1lZGlhS2V5U2Vzc2lvbiB3aXRoIGluaXREYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVLZXlTZXNzaW9uKHBlbmRpbmdOZWVkS2V5RGF0YVtpXVtrc0lkeF0uaW5pdERhdGEsIHBlbmRpbmdOZWVkS2V5RGF0YVtpXVtrc0lkeF0uY2RtRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAga2V5U3lzdGVtID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWZyb21NYW5pZmVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuS0VZX1NZU1RFTV9TRUxFQ1RFRCwge2RhdGE6IG51bGwsIGVycm9yOiBuZXcgRGFzaEpTRXJyb3IoUHJvdGVjdGlvbkVycm9ycy5LRVlfU1lTVEVNX0FDQ0VTU19ERU5JRURfRVJST1JfQ09ERSwgUHJvdGVjdGlvbkVycm9ycy5LRVlfU1lTVEVNX0FDQ0VTU19ERU5JRURfRVJST1JfTUVTU0FHRSArICdFcnJvciBzZWxlY3Rpbmcga2V5IHN5c3RlbSEgLS0gJyArIGV2ZW50LmVycm9yKX0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGV2ZW50QnVzLm9uKGV2ZW50cy5JTlRFUk5BTF9LRVlfU1lTVEVNX1NFTEVDVEVELCBvbktleVN5c3RlbVNlbGVjdGVkLCBzZWxmKTtcbiAgICAgICAgICAgIGV2ZW50QnVzLm9uKGV2ZW50cy5LRVlfU1lTVEVNX0FDQ0VTU19DT01QTEVURSwgb25LZXlTeXN0ZW1BY2Nlc3NDb21wbGV0ZSwgc2VsZik7XG4gICAgICAgICAgICBwcm90ZWN0aW9uTW9kZWwucmVxdWVzdEtleVN5c3RlbUFjY2VzcyhyZXF1ZXN0ZWRLZXlTeXN0ZW1zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdlIGFyZSBpbiB0aGUgcHJvY2VzcyBvZiBzZWxlY3RpbmcgYSBrZXkgc3lzdGVtLCBzbyBqdXN0IHNhdmUgdGhlIGRhdGFcbiAgICAgICAgICAgIHBlbmRpbmdOZWVkS2V5RGF0YS5wdXNoKHN1cHBvcnRlZEtTKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbmRMaWNlbnNlUmVxdWVzdENvbXBsZXRlRXZlbnQoZGF0YSwgZXJyb3IpIHtcbiAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuTElDRU5TRV9SRVFVRVNUX0NPTVBMRVRFLCB7ZGF0YTogZGF0YSwgZXJyb3I6IGVycm9yfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LZXlTdGF0dXNDaGFuZ2VkKGUpIHtcbiAgICAgICAgaWYgKGUuZXJyb3IpIHtcbiAgICAgICAgICAgIGV2ZW50QnVzLnRyaWdnZXIoZXZlbnRzLktFWV9TVEFUVVNFU19DSEFOR0VELCB7ZGF0YTogbnVsbCwgZXJyb3I6IGUuZXJyb3J9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnRFJNOiBrZXkgc3RhdHVzID0gJyArIGUuc3RhdHVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uS2V5TWVzc2FnZShlKSB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZygnRFJNOiBvbktleU1lc3NhZ2UnKTtcblxuICAgICAgICAvLyBEaXNwYXRjaCBldmVudCB0byBhcHBsaWNhdGlvbnMgaW5kaWNhdGluZyB3ZSByZWNlaXZlZCBhIGtleSBtZXNzYWdlXG4gICAgICAgIGNvbnN0IGtleU1lc3NhZ2UgPSBlLmRhdGE7XG4gICAgICAgIGV2ZW50QnVzLnRyaWdnZXIoZXZlbnRzLktFWV9NRVNTQUdFLCB7ZGF0YToga2V5TWVzc2FnZX0pO1xuICAgICAgICBjb25zdCBtZXNzYWdlVHlwZSA9IChrZXlNZXNzYWdlLm1lc3NhZ2VUeXBlKSA/IGtleU1lc3NhZ2UubWVzc2FnZVR5cGUgOiAnbGljZW5zZS1yZXF1ZXN0JztcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGtleU1lc3NhZ2UubWVzc2FnZTtcbiAgICAgICAgY29uc3Qgc2Vzc2lvblRva2VuID0ga2V5TWVzc2FnZS5zZXNzaW9uVG9rZW47XG4gICAgICAgIGNvbnN0IHByb3REYXRhID0gZ2V0UHJvdERhdGEoa2V5U3lzdGVtKTtcbiAgICAgICAgY29uc3Qga2V5U3lzdGVtU3RyaW5nID0ga2V5U3lzdGVtID8ga2V5U3lzdGVtLnN5c3RlbVN0cmluZyA6IG51bGw7XG4gICAgICAgIGNvbnN0IGxpY2Vuc2VTZXJ2ZXJEYXRhID0gcHJvdGVjdGlvbktleUNvbnRyb2xsZXIuZ2V0TGljZW5zZVNlcnZlcihrZXlTeXN0ZW0sIHByb3REYXRhLCBtZXNzYWdlVHlwZSk7XG4gICAgICAgIGNvbnN0IGV2ZW50RGF0YSA9IHsgc2Vzc2lvblRva2VuOiBzZXNzaW9uVG9rZW4sIG1lc3NhZ2VUeXBlOiBtZXNzYWdlVHlwZSB9O1xuXG4gICAgICAgIC8vIEVuc3VyZSBtZXNzYWdlIGZyb20gQ0RNIGlzIG5vdCBlbXB0eVxuICAgICAgICBpZiAoIW1lc3NhZ2UgfHwgbWVzc2FnZS5ieXRlTGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBzZW5kTGljZW5zZVJlcXVlc3RDb21wbGV0ZUV2ZW50KGV2ZW50RGF0YSwgbmV3IERhc2hKU0Vycm9yKFByb3RlY3Rpb25FcnJvcnMuTUVESUFfS0VZX01FU1NBR0VfTk9fQ0hBTExFTkdFX0VSUk9SX0NPREUsIFByb3RlY3Rpb25FcnJvcnMuTUVESUFfS0VZX01FU1NBR0VfTk9fQ0hBTExFTkdFX0VSUk9SX01FU1NBR0UpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1lc3NhZ2Ugbm90IGRlc3RpbmVkIGZvciBsaWNlbnNlIHNlcnZlclxuICAgICAgICBpZiAoIWxpY2Vuc2VTZXJ2ZXJEYXRhKSB7XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoJ0RSTTogTGljZW5zZSBzZXJ2ZXIgcmVxdWVzdCBub3QgcmVxdWlyZWQgZm9yIHRoaXMgbWVzc2FnZSAodHlwZSA9ICcgKyBlLmRhdGEubWVzc2FnZVR5cGUgKyAnKS4gIFNlc3Npb24gSUQgPSAnICsgc2Vzc2lvblRva2VuLmdldFNlc3Npb25JRCgpKTtcbiAgICAgICAgICAgIHNlbmRMaWNlbnNlUmVxdWVzdENvbXBsZXRlRXZlbnQoZXZlbnREYXRhKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBlcmZvcm0gYW55IHNwZWNpYWwgaGFuZGxpbmcgZm9yIENsZWFyS2V5XG4gICAgICAgIGlmIChwcm90ZWN0aW9uS2V5Q29udHJvbGxlci5pc0NsZWFyS2V5KGtleVN5c3RlbSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsZWFya2V5cyA9IHByb3RlY3Rpb25LZXlDb250cm9sbGVyLnByb2Nlc3NDbGVhcktleUxpY2Vuc2VSZXF1ZXN0KGtleVN5c3RlbSwgcHJvdERhdGEsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgaWYgKGNsZWFya2V5cykgIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ0RSTTogQ2xlYXJLZXkgbGljZW5zZSByZXF1ZXN0IGhhbmRsZWQgYnkgYXBwbGljYXRpb24hJyk7XG4gICAgICAgICAgICAgICAgc2VuZExpY2Vuc2VSZXF1ZXN0Q29tcGxldGVFdmVudChldmVudERhdGEpO1xuICAgICAgICAgICAgICAgIHByb3RlY3Rpb25Nb2RlbC51cGRhdGVLZXlTZXNzaW9uKHNlc3Npb25Ub2tlbiwgY2xlYXJrZXlzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGwgcmVtYWluaW5nIGtleSBzeXN0ZW0gc2NlbmFyaW9zIHJlcXVpcmUgYSByZXF1ZXN0IHRvIGEgcmVtb3RlIGxpY2Vuc2Ugc2VydmVyXG4gICAgICAgIC8vIERldGVybWluZSBsaWNlbnNlIHNlcnZlciBVUkxcbiAgICAgICAgbGV0IHVybCA9IG51bGw7XG4gICAgICAgIGlmIChwcm90RGF0YSAmJiBwcm90RGF0YS5zZXJ2ZXJVUkwpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlcnZlclVSTCA9IHByb3REYXRhLnNlcnZlclVSTDtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VydmVyVVJMID09PSAnc3RyaW5nJyAmJiBzZXJ2ZXJVUkwgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gc2VydmVyVVJMO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VydmVyVVJMID09PSAnb2JqZWN0JyAmJiBzZXJ2ZXJVUkwuaGFzT3duUHJvcGVydHkobWVzc2FnZVR5cGUpKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gc2VydmVyVVJMW21lc3NhZ2VUeXBlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwcm90RGF0YSAmJiBwcm90RGF0YS5sYVVSTCAmJiBwcm90RGF0YS5sYVVSTCAhPT0gJycpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IERlcHJlY2F0ZWQhXG4gICAgICAgICAgICB1cmwgPSBwcm90RGF0YS5sYVVSTDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVybCA9IGtleVN5c3RlbS5nZXRMaWNlbnNlU2VydmVyVVJMRnJvbUluaXREYXRhKENvbW1vbkVuY3J5cHRpb24uZ2V0UFNTSERhdGEoc2Vzc2lvblRva2VuLmluaXREYXRhKSk7XG4gICAgICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgICAgIHVybCA9IGUuZGF0YS5sYVVSTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBQb3NzaWJseSB1cGRhdGUgb3Igb3ZlcnJpZGUgdGhlIFVSTCBiYXNlZCBvbiB0aGUgbWVzc2FnZVxuICAgICAgICB1cmwgPSBsaWNlbnNlU2VydmVyRGF0YS5nZXRTZXJ2ZXJVUkxGcm9tTWVzc2FnZSh1cmwsIG1lc3NhZ2UsIG1lc3NhZ2VUeXBlKTtcblxuICAgICAgICAvLyBFbnN1cmUgdmFsaWQgbGljZW5zZSBzZXJ2ZXIgVVJMXG4gICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICBzZW5kTGljZW5zZVJlcXVlc3RDb21wbGV0ZUV2ZW50KGV2ZW50RGF0YSwgbmV3IERhc2hKU0Vycm9yKFByb3RlY3Rpb25FcnJvcnMuTUVESUFfS0VZX01FU1NBR0VfTk9fTElDRU5TRV9TRVJWRVJfVVJMX0VSUk9SX0NPREUsIFByb3RlY3Rpb25FcnJvcnMuTUVESUFfS0VZX01FU1NBR0VfTk9fTElDRU5TRV9TRVJWRVJfVVJMX0VSUk9SX01FU1NBR0UpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBvcHRpb25hbCBYTUxIdHRwUmVxdWVzdCBoZWFkZXJzIGZyb20gcHJvdGVjdGlvbiBkYXRhIGFuZCBtZXNzYWdlXG4gICAgICAgIGNvbnN0IHJlcUhlYWRlcnMgPSB7fTtcbiAgICAgICAgbGV0IHdpdGhDcmVkZW50aWFscyA9IGZhbHNlO1xuICAgICAgICBjb25zdCB1cGRhdGVIZWFkZXJzID0gZnVuY3Rpb24gKGhlYWRlcnMpIHtcbiAgICAgICAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gaGVhZGVycykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJ2F1dGhvcml6YXRpb24nID09PSBrZXkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXFIZWFkZXJzW2tleV0gPSBoZWFkZXJzW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAocHJvdERhdGEpIHtcbiAgICAgICAgICAgIHVwZGF0ZUhlYWRlcnMocHJvdERhdGEuaHR0cFJlcXVlc3RIZWFkZXJzKTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVIZWFkZXJzKGtleVN5c3RlbS5nZXRSZXF1ZXN0SGVhZGVyc0Zyb21NZXNzYWdlKG1lc3NhZ2UpKTtcblxuICAgICAgICAvLyBPdmVyd3JpdGUgd2l0aENyZWRlbnRpYWxzIHByb3BlcnR5IGZyb20gcHJvdERhdGEgaWYgcHJlc2VudFxuICAgICAgICBpZiAocHJvdERhdGEgJiYgdHlwZW9mIHByb3REYXRhLndpdGhDcmVkZW50aWFscyA9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFscyA9IHByb3REYXRhLndpdGhDcmVkZW50aWFscztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlcG9ydEVycm9yID0gZnVuY3Rpb24gKHhociwgZXZlbnREYXRhLCBrZXlTeXN0ZW1TdHJpbmcsIG1lc3NhZ2VUeXBlKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvck1zZyA9ICgoeGhyLnJlc3BvbnNlKSA/IGxpY2Vuc2VTZXJ2ZXJEYXRhLmdldEVycm9yUmVzcG9uc2UoeGhyLnJlc3BvbnNlLCBrZXlTeXN0ZW1TdHJpbmcsIG1lc3NhZ2VUeXBlKSA6ICdOT05FJyk7XG4gICAgICAgICAgICBzZW5kTGljZW5zZVJlcXVlc3RDb21wbGV0ZUV2ZW50KGV2ZW50RGF0YSwgbmV3IERhc2hKU0Vycm9yKFByb3RlY3Rpb25FcnJvcnMuTUVESUFfS0VZX01FU1NBR0VfTElDRU5TRVJfRVJST1JfQ09ERSxcbiAgICAgICAgICAgICAgICBQcm90ZWN0aW9uRXJyb3JzLk1FRElBX0tFWV9NRVNTQUdFX0xJQ0VOU0VSX0VSUk9SX01FU1NBR0UgKyBrZXlTeXN0ZW1TdHJpbmcgKyAnIHVwZGF0ZSwgWEhSIGNvbXBsZXRlLiBzdGF0dXMgaXMgXCInICtcbiAgICAgICAgICAgICAgICB4aHIuc3RhdHVzVGV4dCArICdcIiAoJyArIHhoci5zdGF0dXMgKyAnKSwgcmVhZHlTdGF0ZSBpcyAnICsgeGhyLnJlYWR5U3RhdGUgKyAnLiAgUmVzcG9uc2UgaXMgJyArIGVycm9yTXNnKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25Mb2FkID0gZnVuY3Rpb24gKHhocikge1xuICAgICAgICAgICAgaWYgKCFwcm90ZWN0aW9uTW9kZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaWNlbnNlTWVzc2FnZSA9IGxpY2Vuc2VTZXJ2ZXJEYXRhLmdldExpY2Vuc2VNZXNzYWdlKHhoci5yZXNwb25zZSwga2V5U3lzdGVtU3RyaW5nLCBtZXNzYWdlVHlwZSk7XG4gICAgICAgICAgICAgICAgaWYgKGxpY2Vuc2VNZXNzYWdlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRMaWNlbnNlUmVxdWVzdENvbXBsZXRlRXZlbnQoZXZlbnREYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvdGVjdGlvbk1vZGVsLnVwZGF0ZUtleVNlc3Npb24oc2Vzc2lvblRva2VuLCBsaWNlbnNlTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoeGhyLCBldmVudERhdGEsIGtleVN5c3RlbVN0cmluZywgbWVzc2FnZVR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoeGhyLCBldmVudERhdGEsIGtleVN5c3RlbVN0cmluZywgbWVzc2FnZVR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uQWJvcnQgPSBmdW5jdGlvbiAoeGhyKSB7XG4gICAgICAgICAgICBzZW5kTGljZW5zZVJlcXVlc3RDb21wbGV0ZUV2ZW50KGV2ZW50RGF0YSwgbmV3IERhc2hKU0Vycm9yKFByb3RlY3Rpb25FcnJvcnMuTUVESUFfS0VZX01FU1NBR0VfTElDRU5TRVJfRVJST1JfQ09ERSxcbiAgICAgICAgICAgICAgICBQcm90ZWN0aW9uRXJyb3JzLk1FRElBX0tFWV9NRVNTQUdFX0xJQ0VOU0VSX0VSUk9SX01FU1NBR0UgKyBrZXlTeXN0ZW1TdHJpbmcgKyAnIHVwZGF0ZSwgWEhSIGFib3J0ZWQuIHN0YXR1cyBpcyBcIicgK1xuICAgICAgICAgICAgICAgIHhoci5zdGF0dXNUZXh0ICsgJ1wiICgnICsgeGhyLnN0YXR1cyArICcpLCByZWFkeVN0YXRlIGlzICcgKyB4aHIucmVhZHlTdGF0ZSkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uRXJyb3IgPSBmdW5jdGlvbiAoeGhyKSB7XG4gICAgICAgICAgICBzZW5kTGljZW5zZVJlcXVlc3RDb21wbGV0ZUV2ZW50KGV2ZW50RGF0YSwgbmV3IERhc2hKU0Vycm9yKFByb3RlY3Rpb25FcnJvcnMuTUVESUFfS0VZX01FU1NBR0VfTElDRU5TRVJfRVJST1JfQ09ERSxcbiAgICAgICAgICAgICAgICBQcm90ZWN0aW9uRXJyb3JzLk1FRElBX0tFWV9NRVNTQUdFX0xJQ0VOU0VSX0VSUk9SX01FU1NBR0UgKyBrZXlTeXN0ZW1TdHJpbmcgKyAnIHVwZGF0ZSwgWEhSIGVycm9yLiBzdGF0dXMgaXMgXCInICtcbiAgICAgICAgICAgICAgICB4aHIuc3RhdHVzVGV4dCArICdcIiAoJyArIHhoci5zdGF0dXMgKyAnKSwgcmVhZHlTdGF0ZSBpcyAnICsgeGhyLnJlYWR5U3RhdGUpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXFQYXlsb2FkID0ga2V5U3lzdGVtLmdldExpY2Vuc2VSZXF1ZXN0RnJvbU1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IHJlcU1ldGhvZCA9IGxpY2Vuc2VTZXJ2ZXJEYXRhLmdldEhUVFBNZXRob2QobWVzc2FnZVR5cGUpO1xuICAgICAgICBjb25zdCByZXNwb25zZVR5cGUgPSBsaWNlbnNlU2VydmVyRGF0YS5nZXRSZXNwb25zZVR5cGUoa2V5U3lzdGVtU3RyaW5nLCBtZXNzYWdlVHlwZSk7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBwcm90RGF0YSAmJiAhaXNOYU4ocHJvdERhdGEuaHR0cFRpbWVvdXQpID8gcHJvdERhdGEuaHR0cFRpbWVvdXQgOiBMSUNFTlNFX1NFUlZFUl9SRVFVRVNUX0RFRkFVTFRfVElNRU9VVDtcblxuICAgICAgICBkb0xpY2Vuc2VSZXF1ZXN0KHVybCwgcmVxSGVhZGVycywgcmVxTWV0aG9kLCByZXNwb25zZVR5cGUsIHdpdGhDcmVkZW50aWFscywgcmVxUGF5bG9hZCxcbiAgICAgICAgICAgIExJQ0VOU0VfU0VSVkVSX1JFUVVFU1RfUkVUUklFUywgdGltZW91dCwgb25Mb2FkLCBvbkFib3J0LCBvbkVycm9yKTtcbiAgICB9XG5cbiAgICAvLyBJbXBsZW1lbnQgbGljZW5zZSByZXF1ZXN0cyB3aXRoIGEgcmV0cnkgbWVjaGFuaXNtIHRvIGF2b2lkIHRlbXBvcmFyeSBuZXR3b3JrIGlzc3VlcyB0byBhZmZlY3QgcGxheWJhY2sgZXhwZXJpZW5jZVxuICAgIGZ1bmN0aW9uIGRvTGljZW5zZVJlcXVlc3QodXJsLCBoZWFkZXJzLCBtZXRob2QsIHJlc3BvbnNlVHlwZSwgd2l0aENyZWRlbnRpYWxzLCBwYXlsb2FkLCByZXRyaWVzQ291bnQsIHRpbWVvdXQsIG9uTG9hZCwgb25BYm9ydCwgb25FcnJvcikge1xuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGU7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB3aXRoQ3JlZGVudGlhbHM7XG4gICAgICAgIGlmICh0aW1lb3V0ID4gMCkge1xuICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSB0aW1lb3V0O1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGhlYWRlcnMpIHtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgaGVhZGVyc1trZXldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJldHJ5UmVxdWVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGZhaWwgc2lsZW50bHkgYW5kIHJldHJ5XG4gICAgICAgICAgICByZXRyaWVzQ291bnQtLTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRvTGljZW5zZVJlcXVlc3QodXJsLCBoZWFkZXJzLCBtZXRob2QsIHJlc3BvbnNlVHlwZSwgd2l0aENyZWRlbnRpYWxzLCBwYXlsb2FkLFxuICAgICAgICAgICAgICAgICAgICByZXRyaWVzQ291bnQsIHRpbWVvdXQsIG9uTG9hZCwgb25BYm9ydCwgb25FcnJvcik7XG4gICAgICAgICAgICB9LCBMSUNFTlNFX1NFUlZFUl9SRVFVRVNUX1JFVFJZX0lOVEVSVkFMKTtcbiAgICAgICAgfTtcblxuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDAgfHwgcmV0cmllc0NvdW50IDw9IDApIHtcbiAgICAgICAgICAgICAgICBvbkxvYWQodGhpcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKCdMaWNlbnNlIHJlcXVlc3QgZmFpbGVkICgnICsgdGhpcy5zdGF0dXMgKyAnKS4gUmV0cnlpbmcgaXQuLi4gUGVuZGluZyByZXRyaWVzOiAnICsgcmV0cmllc0NvdW50KTtcbiAgICAgICAgICAgICAgICByZXRyeVJlcXVlc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB4aHIub250aW1lb3V0ID0geGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAocmV0cmllc0NvdW50IDw9IDApIHtcbiAgICAgICAgICAgICAgICBvbkVycm9yKHRoaXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIud2FybignTGljZW5zZSByZXF1ZXN0IG5ldHdvcmsgcmVxdWVzdCBmYWlsZWQgLiBSZXRyeWluZyBpdC4uLiBQZW5kaW5nIHJldHJpZXM6ICcgKyByZXRyaWVzQ291bnQpO1xuICAgICAgICAgICAgICAgIHJldHJ5UmVxdWVzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHhoci5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgb25BYm9ydCh0aGlzKTtcbiAgICAgICAgfTtcblxuICAgICAgICB4aHIuc2VuZChwYXlsb2FkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk5lZWRLZXkoZXZlbnQsIHJldHJ5KSB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZygnRFJNOiBvbk5lZWRLZXknKTtcbiAgICAgICAgLy8gSWdub3JlIG5vbi1jZW5jIGluaXREYXRhXG4gICAgICAgIGlmIChldmVudC5rZXkuaW5pdERhdGFUeXBlICE9PSAnY2VuYycpIHtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKCdEUk06ICBPbmx5IFxcJ2NlbmNcXCcgaW5pdERhdGEgaXMgc3VwcG9ydGVkISAgSWdub3JpbmcgaW5pdERhdGEgb2YgdHlwZTogJyArIGV2ZW50LmtleS5pbml0RGF0YVR5cGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lZGlhSW5mb0Fyci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKCdEUk06IG9uTmVlZEtleSBjYWxsZWQgYmVmb3JlIGluaXRpYWxpemVGb3JNZWRpYSwgd2FpdCB1bnRpbCBpbml0aWFsaXplZCcpO1xuICAgICAgICAgICAgcmV0cnkgPSB0eXBlb2YgcmV0cnkgPT09ICd1bmRlZmluZWQnID8gMSA6IHJldHJ5ICsgMTtcbiAgICAgICAgICAgIGlmIChyZXRyeSA8IE5FRURLRVlfQkVGT1JFX0lOSVRJQUxJWkVfUkVUUklFUykge1xuICAgICAgICAgICAgICAgIG5lZWRrZXlSZXRyaWVzLnB1c2goc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9uTmVlZEtleShldmVudCwgcmV0cnkpO1xuICAgICAgICAgICAgICAgIH0sIE5FRURLRVlfQkVGT1JFX0lOSVRJQUxJWkVfVElNRU9VVCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU29tZSBicm93c2VycyByZXR1cm4gaW5pdERhdGEgYXMgVWludDhBcnJheSAoSUUpLCBzb21lIGFzIEFycmF5QnVmZmVyIChDaHJvbWUpLlxuICAgICAgICAvLyBDb252ZXJ0IHRvIEFycmF5QnVmZmVyXG4gICAgICAgIGxldCBhYkluaXREYXRhID0gZXZlbnQua2V5LmluaXREYXRhO1xuICAgICAgICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGFiSW5pdERhdGEpKSB7XG4gICAgICAgICAgICBhYkluaXREYXRhID0gYWJJbml0RGF0YS5idWZmZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBrZXkgc3lzdGVtIGhhcyBhbHJlYWR5IGJlZW4gc2VsZWN0ZWQgYW5kIGluaXREYXRhIGFscmVhZHkgc2VlbiwgdGhlbiBkbyBub3RoaW5nXG4gICAgICAgIGlmIChrZXlTeXN0ZW0pIHtcbiAgICAgICAgICAgIGNvbnN0IGluaXREYXRhRm9yS1MgPSBDb21tb25FbmNyeXB0aW9uLmdldFBTU0hGb3JLZXlTeXN0ZW0oa2V5U3lzdGVtLCBhYkluaXREYXRhKTtcbiAgICAgICAgICAgIGlmIChpbml0RGF0YUZvcktTKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgZHVwbGljYXRlIGluaXREYXRhXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEluaXREYXRhID0gcHJvdGVjdGlvbk1vZGVsLmdldEFsbEluaXREYXRhKCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50SW5pdERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3RlY3Rpb25LZXlDb250cm9sbGVyLmluaXREYXRhRXF1YWxzKGluaXREYXRhRm9yS1MsIGN1cnJlbnRJbml0RGF0YVtpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKCdEUk06IElnbm9yaW5nIGluaXREYXRhIGJlY2F1c2Ugd2UgaGF2ZSBhbHJlYWR5IHNlZW4gaXQhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsb2dnZXIuZGVidWcoJ0RSTTogaW5pdERhdGE6JywgU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDhBcnJheShhYkluaXREYXRhKSkpO1xuXG4gICAgICAgIGNvbnN0IHN1cHBvcnRlZEtTID0gcHJvdGVjdGlvbktleUNvbnRyb2xsZXIuZ2V0U3VwcG9ydGVkS2V5U3lzdGVtcyhhYkluaXREYXRhLCBwcm90RGF0YVNldCk7XG4gICAgICAgIGlmIChzdXBwb3J0ZWRLUy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnRFJNOiBSZWNlaXZlZCBuZWVka2V5IGV2ZW50IHdpdGggaW5pdERhdGEsIGJ1dCB3ZSBkb25cXCd0IHN1cHBvcnQgYW55IG9mIHRoZSBrZXkgc3lzdGVtcyEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdEtleVN5c3RlbShzdXBwb3J0ZWRLUywgZmFsc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEtleVN5c3RlbXMoKSB7XG4gICAgICAgIHJldHVybiBwcm90ZWN0aW9uS2V5Q29udHJvbGxlciA/IHByb3RlY3Rpb25LZXlDb250cm9sbGVyLmdldEtleVN5c3RlbXMoKSA6IFtdO1xuICAgIH1cblxuICAgIGluc3RhbmNlID0ge1xuICAgICAgICBpbml0aWFsaXplRm9yTWVkaWE6IGluaXRpYWxpemVGb3JNZWRpYSxcbiAgICAgICAgY3JlYXRlS2V5U2Vzc2lvbjogY3JlYXRlS2V5U2Vzc2lvbixcbiAgICAgICAgbG9hZEtleVNlc3Npb246IGxvYWRLZXlTZXNzaW9uLFxuICAgICAgICByZW1vdmVLZXlTZXNzaW9uOiByZW1vdmVLZXlTZXNzaW9uLFxuICAgICAgICBjbG9zZUtleVNlc3Npb246IGNsb3NlS2V5U2Vzc2lvbixcbiAgICAgICAgc2V0U2VydmVyQ2VydGlmaWNhdGU6IHNldFNlcnZlckNlcnRpZmljYXRlLFxuICAgICAgICBzZXRNZWRpYUVsZW1lbnQ6IHNldE1lZGlhRWxlbWVudCxcbiAgICAgICAgc2V0U2Vzc2lvblR5cGU6IHNldFNlc3Npb25UeXBlLFxuICAgICAgICBzZXRSb2J1c3RuZXNzTGV2ZWw6IHNldFJvYnVzdG5lc3NMZXZlbCxcbiAgICAgICAgc2V0UHJvdGVjdGlvbkRhdGE6IHNldFByb3RlY3Rpb25EYXRhLFxuICAgICAgICBnZXRTdXBwb3J0ZWRLZXlTeXN0ZW1zRnJvbUNvbnRlbnRQcm90ZWN0aW9uOiBnZXRTdXBwb3J0ZWRLZXlTeXN0ZW1zRnJvbUNvbnRlbnRQcm90ZWN0aW9uLFxuICAgICAgICBnZXRLZXlTeXN0ZW1zOiBnZXRLZXlTeXN0ZW1zLFxuICAgICAgICBzdG9wOiBzdG9wLFxuICAgICAgICByZXNldDogcmVzZXRcbiAgICB9O1xuXG4gICAgc2V0dXAoKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cblByb3RlY3Rpb25Db250cm9sbGVyLl9fZGFzaGpzX2ZhY3RvcnlfbmFtZSA9ICdQcm90ZWN0aW9uQ29udHJvbGxlcic7XG5leHBvcnQgZGVmYXVsdCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldENsYXNzRmFjdG9yeShQcm90ZWN0aW9uQ29udHJvbGxlcik7IC8qIGpzaGludCBpZ25vcmU6bGluZSAqL1xuIiwiLyoqXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbmltcG9ydCBDb21tb25FbmNyeXB0aW9uIGZyb20gJy4vLi4vQ29tbW9uRW5jcnlwdGlvbic7XG5pbXBvcnQgS2V5U3lzdGVtQ2xlYXJLZXkgZnJvbSAnLi8uLi9kcm0vS2V5U3lzdGVtQ2xlYXJLZXknO1xuaW1wb3J0IEtleVN5c3RlbVczQ0NsZWFyS2V5IGZyb20gJy4vLi4vZHJtL0tleVN5c3RlbVczQ0NsZWFyS2V5JztcbmltcG9ydCBLZXlTeXN0ZW1XaWRldmluZSBmcm9tICcuLy4uL2RybS9LZXlTeXN0ZW1XaWRldmluZSc7XG5pbXBvcnQgS2V5U3lzdGVtUGxheVJlYWR5IGZyb20gJy4vLi4vZHJtL0tleVN5c3RlbVBsYXlSZWFkeSc7XG5pbXBvcnQgRFJNVG9kYXkgZnJvbSAnLi8uLi9zZXJ2ZXJzL0RSTVRvZGF5JztcbmltcG9ydCBQbGF5UmVhZHkgZnJvbSAnLi8uLi9zZXJ2ZXJzL1BsYXlSZWFkeSc7XG5pbXBvcnQgV2lkZXZpbmUgZnJvbSAnLi8uLi9zZXJ2ZXJzL1dpZGV2aW5lJztcbmltcG9ydCBDbGVhcktleSBmcm9tICcuLy4uL3NlcnZlcnMvQ2xlYXJLZXknO1xuaW1wb3J0IFByb3RlY3Rpb25Db25zdGFudHMgZnJvbSAnLi4vLi4vY29uc3RhbnRzL1Byb3RlY3Rpb25Db25zdGFudHMnO1xuXG4vKipcbiAqIEBtb2R1bGUgUHJvdGVjdGlvbktleUNvbnRyb2xsZXJcbiAqIEBkZXNjcmlwdGlvbiBNZWRpYSBwcm90ZWN0aW9uIGtleSBzeXN0ZW0gZnVuY3Rpb25hbGl0eSB0aGF0IGNhbiBiZSBtb2RpZmllZC9vdmVycmlkZGVuIGJ5IGFwcGxpY2F0aW9uc1xuICovXG5mdW5jdGlvbiBQcm90ZWN0aW9uS2V5Q29udHJvbGxlcigpIHtcblxuICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgbGV0IGluc3RhbmNlLFxuICAgICAgICBkZWJ1ZyxcbiAgICAgICAgbG9nZ2VyLFxuICAgICAgICBrZXlTeXN0ZW1zLFxuICAgICAgICBCQVNFNjQsXG4gICAgICAgIGNsZWFya2V5S2V5U3lzdGVtLFxuICAgICAgICBjbGVhcmtleVczQ0tleVN5c3RlbTtcblxuICAgIGZ1bmN0aW9uIHNldENvbmZpZyhjb25maWcpIHtcbiAgICAgICAgaWYgKCFjb25maWcpIHJldHVybjtcblxuICAgICAgICBpZiAoY29uZmlnLmRlYnVnKSB7XG4gICAgICAgICAgICBkZWJ1ZyA9IGNvbmZpZy5kZWJ1ZztcbiAgICAgICAgICAgIGxvZ2dlciA9IGRlYnVnLmdldExvZ2dlcihpbnN0YW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLkJBU0U2NCkge1xuICAgICAgICAgICAgQkFTRTY0ID0gY29uZmlnLkJBU0U2NDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGtleVN5c3RlbXMgPSBbXTtcblxuICAgICAgICBsZXQga2V5U3lzdGVtO1xuXG4gICAgICAgIC8vIFBsYXlSZWFkeVxuICAgICAgICBrZXlTeXN0ZW0gPSBLZXlTeXN0ZW1QbGF5UmVhZHkoY29udGV4dCkuZ2V0SW5zdGFuY2UoeyBCQVNFNjQ6IEJBU0U2NCB9KTtcbiAgICAgICAga2V5U3lzdGVtcy5wdXNoKGtleVN5c3RlbSk7XG5cbiAgICAgICAgLy8gV2lkZXZpbmVcbiAgICAgICAga2V5U3lzdGVtID0gS2V5U3lzdGVtV2lkZXZpbmUoY29udGV4dCkuZ2V0SW5zdGFuY2UoeyBCQVNFNjQ6IEJBU0U2NCB9KTtcbiAgICAgICAga2V5U3lzdGVtcy5wdXNoKGtleVN5c3RlbSk7XG5cbiAgICAgICAgLy8gQ2xlYXJLZXlcbiAgICAgICAga2V5U3lzdGVtID0gS2V5U3lzdGVtQ2xlYXJLZXkoY29udGV4dCkuZ2V0SW5zdGFuY2UoeyBCQVNFNjQ6IEJBU0U2NCB9KTtcbiAgICAgICAga2V5U3lzdGVtcy5wdXNoKGtleVN5c3RlbSk7XG4gICAgICAgIGNsZWFya2V5S2V5U3lzdGVtID0ga2V5U3lzdGVtO1xuXG4gICAgICAgIC8vIFczQyBDbGVhcktleVxuICAgICAgICBrZXlTeXN0ZW0gPSBLZXlTeXN0ZW1XM0NDbGVhcktleShjb250ZXh0KS5nZXRJbnN0YW5jZSh7IEJBU0U2NDogQkFTRTY0LCBkZWJ1ZzogZGVidWcgfSk7XG4gICAgICAgIGtleVN5c3RlbXMucHVzaChrZXlTeXN0ZW0pO1xuICAgICAgICBjbGVhcmtleVczQ0tleVN5c3RlbSA9IGtleVN5c3RlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJpb3JpdGl6ZWQgbGlzdCBvZiBrZXkgc3lzdGVtcyBzdXBwb3J0ZWRcbiAgICAgKiBieSB0aGlzIHBsYXllciAobm90IG5lY2Vzc2FyaWx5IHRob3NlIHN1cHBvcnRlZCBieSB0aGVcbiAgICAgKiB1c2VyIGFnZW50KVxuICAgICAqXG4gICAgICogQHJldHVybnMge0FycmF5LjxLZXlTeXN0ZW0+fSBhIHByaW9yaXRpemVkXG4gICAgICogbGlzdCBvZiBrZXkgc3lzdGVtc1xuICAgICAqIEBtZW1iZXJvZiBtb2R1bGU6UHJvdGVjdGlvbktleUNvbnRyb2xsZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRLZXlTeXN0ZW1zKCkge1xuICAgICAgICByZXR1cm4ga2V5U3lzdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBrZXkgc3lzdGVtIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4ga2V5IHN5c3RlbSBzdHJpbmdcbiAgICAgKiBuYW1lIChpLmUuICdvcmcudzMuY2xlYXJrZXknKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN5c3RlbVN0cmluZyB0aGUgc3lzdGVtIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIHtLZXlTeXN0ZW18bnVsbH0gdGhlIGtleSBzeXN0ZW1cbiAgICAgKiBvciBudWxsIGlmIG5vIHN1cHBvcnRlZCBrZXkgc3lzdGVtIGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4ga2V5XG4gICAgICogc3lzdGVtIHN0cmluZ1xuICAgICAqIEBtZW1iZXJvZiBtb2R1bGU6UHJvdGVjdGlvbktleUNvbnRyb2xsZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRLZXlTeXN0ZW1CeVN5c3RlbVN0cmluZyhzeXN0ZW1TdHJpbmcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlTeXN0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoa2V5U3lzdGVtc1tpXS5zeXN0ZW1TdHJpbmcgPT09IHN5c3RlbVN0cmluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXlTeXN0ZW1zW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4ga2V5IHN5c3RlbSBpcyBDbGVhcktleS4gIFRoaXMgaXNcbiAgICAgKiBuZWNlc3NhcnkgYmVjYXVzZSB0aGUgRU1FIHNwZWMgZGVmaW5lcyBDbGVhcktleSBhbmQgaXRzIG1ldGhvZFxuICAgICAqIGZvciBwcm92aWRpbmcga2V5cyB0byB0aGUga2V5IHNlc3Npb247IGFuZCB0aGlzIG1ldGhvZCBoYXMgY2hhbmdlZFxuICAgICAqIGJldHdlZW4gdGhlIHZhcmlvdXMgQVBJIHZlcnNpb25zLiAgT3VyIEVNRS1zcGVjaWZpYyBQcm90ZWN0aW9uTW9kZWxzXG4gICAgICogbXVzdCBrbm93IGlmIHRoZSBzeXN0ZW0gaXMgQ2xlYXJLZXkgc28gdGhhdCBpdCBjYW4gZm9ybWF0IHRoZSBrZXlzXG4gICAgICogYWNjb3JkaW5nIHRvIHRoZSBwYXJ0aWN1bGFyIHNwZWMgdmVyc2lvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBrZXlTeXN0ZW0gdGhlIGtleVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoaXMgaXMgdGhlIENsZWFyS2V5IGtleSBzeXN0ZW0sIGZhbHNlXG4gICAgICogb3RoZXJ3aXNlXG4gICAgICogQG1lbWJlcm9mIG1vZHVsZTpQcm90ZWN0aW9uS2V5Q29udHJvbGxlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzQ2xlYXJLZXkoa2V5U3lzdGVtKSB7XG4gICAgICAgIHJldHVybiAoa2V5U3lzdGVtID09PSBjbGVhcmtleUtleVN5c3RlbSB8fCBrZXlTeXN0ZW0gPT09IGNsZWFya2V5VzNDS2V5U3lzdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBlcXVhbGl0eSBvZiBpbml0RGF0YSBhcnJheSBidWZmZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gaW5pdERhdGExIC0gZmlyc3QgaW5pdERhdGFcbiAgICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBpbml0RGF0YTIgLSBzZWNvbmQgaW5pdERhdGFcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgaW5pdERhdGEgYXJyYXlzIGFyZSBlcXVhbCBpbiBzaXplIGFuZFxuICAgICAqIGNvbnRlbnRzLCBmYWxzZSBvdGhlcndpc2VcbiAgICAgKiBAbWVtYmVyb2YgbW9kdWxlOlByb3RlY3Rpb25LZXlDb250cm9sbGVyXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZnVuY3Rpb24gaW5pdERhdGFFcXVhbHMoaW5pdERhdGExLCBpbml0RGF0YTIpIHtcbiAgICAgICAgaWYgKGluaXREYXRhMS5ieXRlTGVuZ3RoID09PSBpbml0RGF0YTIuYnl0ZUxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGRhdGExID0gbmV3IFVpbnQ4QXJyYXkoaW5pdERhdGExKTtcbiAgICAgICAgICAgIGxldCBkYXRhMiA9IG5ldyBVaW50OEFycmF5KGluaXREYXRhMik7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF0YTEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YTFbal0gIT09IGRhdGEyW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHNldCBvZiBzdXBwb3J0ZWQga2V5IHN5c3RlbXMgYW5kIENFTkMgaW5pdGlhbGl6YXRpb24gZGF0YVxuICAgICAqIGZyb20gdGhlIGdpdmVuIGFycmF5IG9mIENvbnRlbnRQcm90ZWN0aW9uIGVsZW1lbnRzLiAgT25seVxuICAgICAqIGtleSBzeXN0ZW1zIHRoYXQgYXJlIHN1cHBvcnRlZCBieSB0aGlzIHBsYXllciB3aWxsIGJlIHJldHVybmVkLlxuICAgICAqIEtleSBzeXN0ZW1zIGFyZSByZXR1cm5lZCBpbiBwcmlvcml0eSBvcmRlciAoaGlnaGVzdCBmaXJzdCkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5LjxPYmplY3Q+fSBjcHMgLSBhcnJheSBvZiBjb250ZW50IHByb3RlY3Rpb24gZWxlbWVudHMgcGFyc2VkXG4gICAgICogZnJvbSB0aGUgbWFuaWZlc3RcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPE9iamVjdD59IGFycmF5IG9mIG9iamVjdHMgaW5kaWNhdGluZyB3aGljaCBzdXBwb3J0ZWQga2V5XG4gICAgICogc3lzdGVtcyB3ZXJlIGZvdW5kLiAgRW1wdHkgYXJyYXkgaXMgcmV0dXJuZWQgaWYgbm9cbiAgICAgKiBzdXBwb3J0ZWQga2V5IHN5c3RlbXMgd2VyZSBmb3VuZFxuICAgICAqIEBtZW1iZXJvZiBtb2R1bGU6UHJvdGVjdGlvbktleUNvbnRyb2xsZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRTdXBwb3J0ZWRLZXlTeXN0ZW1zRnJvbUNvbnRlbnRQcm90ZWN0aW9uKGNwcykge1xuICAgICAgICBsZXQgY3AsIGtzLCBrc0lkeCwgY3BJZHg7XG4gICAgICAgIGxldCBzdXBwb3J0ZWRLUyA9IFtdO1xuXG4gICAgICAgIGlmIChjcHMpIHtcbiAgICAgICAgICAgIGZvciAoa3NJZHggPSAwOyBrc0lkeCA8IGtleVN5c3RlbXMubGVuZ3RoOyArK2tzSWR4KSB7XG4gICAgICAgICAgICAgICAga3MgPSBrZXlTeXN0ZW1zW2tzSWR4XTtcbiAgICAgICAgICAgICAgICBmb3IgKGNwSWR4ID0gMDsgY3BJZHggPCBjcHMubGVuZ3RoOyArK2NwSWR4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNwID0gY3BzW2NwSWR4XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNwLnNjaGVtZUlkVXJpLnRvTG93ZXJDYXNlKCkgPT09IGtzLnNjaGVtZUlkVVJJKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMb29rIGZvciBEUk0tc3BlY2lmaWMgQ29udGVudFByb3RlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbml0RGF0YSA9IGtzLmdldEluaXREYXRhKGNwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWluaXREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkS1MucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtzOiBrZXlTeXN0ZW1zW2tzSWR4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdERhdGE6IGluaXREYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZG1EYXRhOiBrcy5nZXRDRE1EYXRhKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25JZDoga3MuZ2V0U2Vzc2lvbklkKGNwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQ2xlYXJLZXkoa3MpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkS1MucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtzOiBrcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdERhdGE6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwcG9ydGVkS1M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBrZXkgc3lzdGVtcyBzdXBwb3J0ZWQgYnkgdGhpcyBwbGF5ZXIgZm9yIHRoZSBnaXZlbiBQU1NIXG4gICAgICogaW5pdGlhbGl6YXRpb25EYXRhLiBPbmx5IGtleSBzeXN0ZW1zIHN1cHBvcnRlZCBieSB0aGlzIHBsYXllclxuICAgICAqIHRoYXQgaGF2ZSBwcm90ZWN0aW9uIGRhdGEgcHJlc2VudCB3aWxsIGJlIHJldHVybmVkLiAgS2V5IHN5c3RlbXMgYXJlIHJldHVybmVkIGluIHByaW9yaXR5IG9yZGVyXG4gICAgICogKGhpZ2hlc3QgcHJpb3JpdHkgZmlyc3QpXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBpbml0RGF0YSBDb25jYXRlbmF0ZWQgUFNTSCBkYXRhIGZvciBhbGwgRFJNc1xuICAgICAqIHN1cHBvcnRlZCBieSB0aGUgY29udGVudFxuICAgICAqIEBwYXJhbSB7UHJvdGVjdGlvbkRhdGF9IHByb3REYXRhU2V0IHVzZXIgc3BlY2lmaWVkIHByb3RlY3Rpb24gZGF0YSAtIGxpY2Vuc2Ugc2VydmVyIHVybCBldGNcbiAgICAgKiBzdXBwb3J0ZWQgYnkgdGhlIGNvbnRlbnRcbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPE9iamVjdD59IGFycmF5IG9mIG9iamVjdHMgaW5kaWNhdGluZyB3aGljaCBzdXBwb3J0ZWQga2V5XG4gICAgICogc3lzdGVtcyB3ZXJlIGZvdW5kLiAgRW1wdHkgYXJyYXkgaXMgcmV0dXJuZWQgaWYgbm9cbiAgICAgKiBzdXBwb3J0ZWQga2V5IHN5c3RlbXMgd2VyZSBmb3VuZFxuICAgICAqIEBtZW1iZXJvZiBtb2R1bGU6UHJvdGVjdGlvbktleUNvbnRyb2xsZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRTdXBwb3J0ZWRLZXlTeXN0ZW1zKGluaXREYXRhLCBwcm90RGF0YVNldCkge1xuICAgICAgICBsZXQgc3VwcG9ydGVkS1MgPSBbXTtcbiAgICAgICAgbGV0IHBzc2ggPSBDb21tb25FbmNyeXB0aW9uLnBhcnNlUFNTSExpc3QoaW5pdERhdGEpO1xuICAgICAgICBsZXQga3MsIGtleVN5c3RlbVN0cmluZywgc2hvdWxkTm90RmlsdGVyT3V0S2V5U3lzdGVtO1xuXG4gICAgICAgIGZvciAobGV0IGtzSWR4ID0gMDsga3NJZHggPCBrZXlTeXN0ZW1zLmxlbmd0aDsgKytrc0lkeCkge1xuICAgICAgICAgICAga3MgPSBrZXlTeXN0ZW1zW2tzSWR4XTtcbiAgICAgICAgICAgIGtleVN5c3RlbVN0cmluZyA9IGtzLnN5c3RlbVN0cmluZztcbiAgICAgICAgICAgIHNob3VsZE5vdEZpbHRlck91dEtleVN5c3RlbSA9IChwcm90RGF0YVNldCkgPyBrZXlTeXN0ZW1TdHJpbmcgaW4gcHJvdERhdGFTZXQgOiB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoa3MudXVpZCBpbiBwc3NoICYmIHNob3VsZE5vdEZpbHRlck91dEtleVN5c3RlbSkge1xuICAgICAgICAgICAgICAgIHN1cHBvcnRlZEtTLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBrczoga3MsXG4gICAgICAgICAgICAgICAgICAgIGluaXREYXRhOiBwc3NoW2tzLnV1aWRdLFxuICAgICAgICAgICAgICAgICAgICBjZG1EYXRhOiBrcy5nZXRDRE1EYXRhKCksXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25JZDoga3MuZ2V0U2Vzc2lvbklkKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwcG9ydGVkS1M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGljZW5zZSBzZXJ2ZXIgaW1wbGVtZW50YXRpb24gZGF0YSB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGlzIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0tleVN5c3RlbX0ga2V5U3lzdGVtIHRoZSBrZXkgc3lzdGVtXG4gICAgICogYXNzb2NpYXRlZCB3aXRoIHRoaXMgbGljZW5zZSByZXF1ZXN0XG4gICAgICogQHBhcmFtIHtQcm90ZWN0aW9uRGF0YX0gcHJvdERhdGEgcHJvdGVjdGlvbiBkYXRhIHRvIHVzZSBmb3IgdGhlXG4gICAgICogcmVxdWVzdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbWVzc2FnZVR5cGU9XCJsaWNlbnNlLXJlcXVlc3RcIl0gdGhlIG1lc3NhZ2UgdHlwZSBhc3NvY2lhdGVkIHdpdGggdGhpc1xuICAgICAqIHJlcXVlc3QuICBTdXBwb3J0ZWQgbWVzc2FnZSB0eXBlcyBjYW4gYmUgZm91bmRcbiAgICAgKiB7QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL2VuY3J5cHRlZC1tZWRpYS8jaWRsLWRlZi1NZWRpYUtleU1lc3NhZ2VUeXBlfGhlcmV9LlxuICAgICAqIEByZXR1cm5zIHtMaWNlbnNlU2VydmVyfG51bGx9IHRoZSBsaWNlbnNlIHNlcnZlclxuICAgICAqIGltcGxlbWVudGF0aW9uIHRoYXQgc2hvdWxkIGJlIHVzZWQgZm9yIHRoaXMgcmVxdWVzdCBvciBudWxsIGlmIHRoZSBwbGF5ZXIgc2hvdWxkIG5vdFxuICAgICAqIHBhc3MgbWVzc2FnZXMgb2YgdGhlIGdpdmVuIHR5cGUgdG8gYSBsaWNlbnNlIHNlcnZlclxuICAgICAqIEBtZW1iZXJvZiBtb2R1bGU6UHJvdGVjdGlvbktleUNvbnRyb2xsZXJcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldExpY2Vuc2VTZXJ2ZXIoa2V5U3lzdGVtLCBwcm90RGF0YSwgbWVzc2FnZVR5cGUpIHtcblxuICAgICAgICAvLyBPdXIgZGVmYXVsdCBzZXJ2ZXIgaW1wbGVtZW50YXRpb25zIGRvIG5vdCBkbyBhbnl0aGluZyB3aXRoIFwibGljZW5zZS1yZWxlYXNlXCIgb3JcbiAgICAgICAgLy8gXCJpbmRpdmlkdWFsaXphdGlvbi1yZXF1ZXN0XCIgbWVzc2FnZXMsIHNvIHdlIGp1c3Qgc2VuZCBhIHN1Y2Nlc3MgZXZlbnRcbiAgICAgICAgaWYgKG1lc3NhZ2VUeXBlID09PSAnbGljZW5zZS1yZWxlYXNlJyB8fCBtZXNzYWdlVHlwZSA9PT0gJ2luZGl2aWR1YWxpemF0aW9uLXJlcXVlc3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsaWNlbnNlU2VydmVyRGF0YSA9IG51bGw7XG4gICAgICAgIGlmIChwcm90RGF0YSAmJiBwcm90RGF0YS5oYXNPd25Qcm9wZXJ0eSgnZHJtdG9kYXknKSkge1xuICAgICAgICAgICAgbGljZW5zZVNlcnZlckRhdGEgPSBEUk1Ub2RheShjb250ZXh0KS5nZXRJbnN0YW5jZSh7IEJBU0U2NDogQkFTRTY0IH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGtleVN5c3RlbS5zeXN0ZW1TdHJpbmcgPT09IFByb3RlY3Rpb25Db25zdGFudHMuV0lERVZJTkVfS0VZU1RFTV9TVFJJTkcpIHtcbiAgICAgICAgICAgIGxpY2Vuc2VTZXJ2ZXJEYXRhID0gV2lkZXZpbmUoY29udGV4dCkuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXlTeXN0ZW0uc3lzdGVtU3RyaW5nID09PSBQcm90ZWN0aW9uQ29uc3RhbnRzLlBMQVlSRUFEWV9LRVlTVEVNX1NUUklORykge1xuICAgICAgICAgICAgbGljZW5zZVNlcnZlckRhdGEgPSBQbGF5UmVhZHkoY29udGV4dCkuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXlTeXN0ZW0uc3lzdGVtU3RyaW5nID09PSBQcm90ZWN0aW9uQ29uc3RhbnRzLkNMRUFSS0VZX0tFWVNURU1fU1RSSU5HKSB7XG4gICAgICAgICAgICBsaWNlbnNlU2VydmVyRGF0YSA9IENsZWFyS2V5KGNvbnRleHQpLmdldEluc3RhbmNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGljZW5zZVNlcnZlckRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxsb3dzIGFwcGxpY2F0aW9uLXNwZWNpZmljIHJldHJpZXZhbCBvZiBDbGVhcktleSBrZXlzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtLZXlTeXN0ZW19IGNsZWFya2V5S2V5U3lzdGVtIFRoZXkgZXhhY3QgQ2xlYXJLZXkgU3lzdGVtIHRvIGJlIHVzZWRcbiAgICAgKiBAcGFyYW0ge1Byb3RlY3Rpb25EYXRhfSBwcm90RGF0YSBwcm90ZWN0aW9uIGRhdGEgdG8gdXNlIGZvciB0aGVcbiAgICAgKiByZXF1ZXN0XG4gICAgICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gbWVzc2FnZSB0aGUga2V5IG1lc3NhZ2UgZnJvbSB0aGUgQ0RNXG4gICAgICogQHJldHVybiB7Q2xlYXJLZXlLZXlTZXR8bnVsbH0gdGhlIGNsZWFyIGtleXMgYXNzb2NpYXRlZCB3aXRoXG4gICAgICogdGhlIHJlcXVlc3Qgb3IgbnVsbCBpZiBubyBrZXlzIGNhbiBiZSByZXR1cm5lZCBieSB0aGlzIGZ1bmN0aW9uXG4gICAgICogQG1lbWJlcm9mIG1vZHVsZTpQcm90ZWN0aW9uS2V5Q29udHJvbGxlclxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHByb2Nlc3NDbGVhcktleUxpY2Vuc2VSZXF1ZXN0KGNsZWFya2V5S2V5U3lzdGVtLCBwcm90RGF0YSwgbWVzc2FnZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGNsZWFya2V5S2V5U3lzdGVtLmdldENsZWFyS2V5c0Zyb21Qcm90ZWN0aW9uRGF0YShwcm90RGF0YSwgbWVzc2FnZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoJ0ZhaWxlZCB0byByZXRyaWV2ZSBjbGVhcmtleXMgZnJvbSBQcm90ZWN0aW9uRGF0YScpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQcm90ZWN0aW9uRGF0YShwcm90ZWN0aW9uRGF0YVNldCkge1xuICAgICAgICB2YXIgZ2V0UHJvdGVjdGlvbkRhdGEgPSBmdW5jdGlvbiAoa2V5U3lzdGVtU3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgcHJvdERhdGEgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHByb3RlY3Rpb25EYXRhU2V0KSB7XG4gICAgICAgICAgICAgICAgcHJvdERhdGEgPSAoa2V5U3lzdGVtU3RyaW5nIGluIHByb3RlY3Rpb25EYXRhU2V0KSA/IHByb3RlY3Rpb25EYXRhU2V0W2tleVN5c3RlbVN0cmluZ10gOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByb3REYXRhO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5U3lzdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleVN5c3RlbSA9IGtleVN5c3RlbXNbaV07XG4gICAgICAgICAgICBpZiAoa2V5U3lzdGVtLmhhc093blByb3BlcnR5KCdpbml0JykpIHtcbiAgICAgICAgICAgICAgICBrZXlTeXN0ZW0uaW5pdChnZXRQcm90ZWN0aW9uRGF0YShrZXlTeXN0ZW0uc3lzdGVtU3RyaW5nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnN0YW5jZSA9IHtcbiAgICAgICAgaW5pdGlhbGl6ZTogaW5pdGlhbGl6ZSxcbiAgICAgICAgc2V0UHJvdGVjdGlvbkRhdGE6IHNldFByb3RlY3Rpb25EYXRhLFxuICAgICAgICBpc0NsZWFyS2V5OiBpc0NsZWFyS2V5LFxuICAgICAgICBpbml0RGF0YUVxdWFsczogaW5pdERhdGFFcXVhbHMsXG4gICAgICAgIGdldEtleVN5c3RlbXM6IGdldEtleVN5c3RlbXMsXG4gICAgICAgIGdldEtleVN5c3RlbUJ5U3lzdGVtU3RyaW5nOiBnZXRLZXlTeXN0ZW1CeVN5c3RlbVN0cmluZyxcbiAgICAgICAgZ2V0U3VwcG9ydGVkS2V5U3lzdGVtc0Zyb21Db250ZW50UHJvdGVjdGlvbjogZ2V0U3VwcG9ydGVkS2V5U3lzdGVtc0Zyb21Db250ZW50UHJvdGVjdGlvbixcbiAgICAgICAgZ2V0U3VwcG9ydGVkS2V5U3lzdGVtczogZ2V0U3VwcG9ydGVkS2V5U3lzdGVtcyxcbiAgICAgICAgZ2V0TGljZW5zZVNlcnZlcjogZ2V0TGljZW5zZVNlcnZlcixcbiAgICAgICAgcHJvY2Vzc0NsZWFyS2V5TGljZW5zZVJlcXVlc3Q6IHByb2Nlc3NDbGVhcktleUxpY2Vuc2VSZXF1ZXN0LFxuICAgICAgICBzZXRDb25maWc6IHNldENvbmZpZ1xuICAgIH07XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cblByb3RlY3Rpb25LZXlDb250cm9sbGVyLl9fZGFzaGpzX2ZhY3RvcnlfbmFtZSA9ICdQcm90ZWN0aW9uS2V5Q29udHJvbGxlcic7XG5leHBvcnQgZGVmYXVsdCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldFNpbmdsZXRvbkZhY3RvcnkoUHJvdGVjdGlvbktleUNvbnRyb2xsZXIpOyAvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi9cbiIsIi8qKlxuICogVGhlIGNvcHlyaWdodCBpbiB0aGlzIHNvZnR3YXJlIGlzIGJlaW5nIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBCU0QgTGljZW5zZSxcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiAqICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbiAqICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgQVMgSVMgQU5EIEFOWVxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXG4gKiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxuICogIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLFxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuICogIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbmltcG9ydCBLZXlQYWlyIGZyb20gJy4uL3ZvL0tleVBhaXInO1xuaW1wb3J0IENsZWFyS2V5S2V5U2V0IGZyb20gJy4uL3ZvL0NsZWFyS2V5S2V5U2V0JztcbmltcG9ydCBDb21tb25FbmNyeXB0aW9uIGZyb20gJy4uL0NvbW1vbkVuY3J5cHRpb24nO1xuaW1wb3J0IFByb3RlY3Rpb25Db25zdGFudHMgZnJvbSAnLi4vLi4vY29uc3RhbnRzL1Byb3RlY3Rpb25Db25zdGFudHMnO1xuXG5jb25zdCB1dWlkID0gJ2UyNzE5ZDU4LWE5ODUtYjNjOS03ODFhLWIwMzBhZjc4ZDMwZSc7XG5jb25zdCBzeXN0ZW1TdHJpbmcgPSBQcm90ZWN0aW9uQ29uc3RhbnRzLkNMRUFSS0VZX0tFWVNURU1fU1RSSU5HO1xuY29uc3Qgc2NoZW1lSWRVUkkgPSAndXJuOnV1aWQ6JyArIHV1aWQ7XG5cbmZ1bmN0aW9uIEtleVN5c3RlbUNsZWFyS2V5KGNvbmZpZykge1xuXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgIGxldCBpbnN0YW5jZTtcbiAgICBjb25zdCBCQVNFNjQgPSBjb25maWcuQkFTRTY0O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBkZXNpcmVkIGNsZWFya2V5cyAoYXMgc3BlY2lmaWVkIGluIHRoZSBDRE0gbWVzc2FnZSkgZnJvbSBwcm90ZWN0aW9uIGRhdGFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UHJvdGVjdGlvbkRhdGF9IHByb3RlY3Rpb25EYXRhIHRoZSBwcm90ZWN0aW9uIGRhdGFcbiAgICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBtZXNzYWdlIHRoZSBDbGVhcktleSBDRE0gbWVzc2FnZVxuICAgICAqIEByZXR1cm5zIHtDbGVhcktleUtleVNldH0gdGhlIGtleSBzZXQgb3IgbnVsbCBpZiBub25lIGZvdW5kXG4gICAgICogQHRocm93cyB7RXJyb3J9IGlmIGEga2V5SUQgc3BlY2lmaWVkIGluIHRoZSBDRE0gbWVzc2FnZSB3YXMgbm90IGZvdW5kIGluIHRoZVxuICAgICAqIHByb3RlY3Rpb24gZGF0YVxuICAgICAqIEBtZW1iZXJvZiBLZXlTeXN0ZW1DbGVhcktleVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldENsZWFyS2V5c0Zyb21Qcm90ZWN0aW9uRGF0YShwcm90ZWN0aW9uRGF0YSwgbWVzc2FnZSkge1xuICAgICAgICBsZXQgY2xlYXJrZXlTZXQgPSBudWxsO1xuICAgICAgICBpZiAocHJvdGVjdGlvbkRhdGEpIHtcbiAgICAgICAgICAgIC8vIENsZWFyS2V5IGlzIHRoZSBvbmx5IHN5c3RlbSB0aGF0IGRvZXMgbm90IHJlcXVpcmUgYSBsaWNlbnNlIHNlcnZlciBVUkwsIHNvIHdlXG4gICAgICAgICAgICAvLyBoYW5kbGUgaXQgaGVyZSB3aGVuIGtleXMgYXJlIHNwZWNpZmllZCBpbiBwcm90ZWN0aW9uIGRhdGFcbiAgICAgICAgICAgIGNvbnN0IGpzb25Nc2cgPSBKU09OLnBhcnNlKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQ4QXJyYXkobWVzc2FnZSkpKTtcbiAgICAgICAgICAgIGNvbnN0IGtleVBhaXJzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpzb25Nc2cua2lkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFya2V5SUQgPSBqc29uTXNnLmtpZHNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYXJrZXkgPSAocHJvdGVjdGlvbkRhdGEuY2xlYXJrZXlzICYmIHByb3RlY3Rpb25EYXRhLmNsZWFya2V5cy5oYXNPd25Qcm9wZXJ0eShjbGVhcmtleUlEKSkgPyBwcm90ZWN0aW9uRGF0YS5jbGVhcmtleXNbY2xlYXJrZXlJRF0gOiBudWxsO1xuICAgICAgICAgICAgICAgIGlmICghY2xlYXJrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEUk06IENsZWFyS2V5IGtleUlEICgnICsgY2xlYXJrZXlJRCArICcpIGlzIG5vdCBrbm93biEnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gS2V5SURzIGZyb20gQ0RNIGFyZSBub3QgYmFzZTY0IHBhZGRlZC4gIEtleXMgbWF5IG9yIG1heSBub3QgYmUgcGFkZGVkXG4gICAgICAgICAgICAgICAga2V5UGFpcnMucHVzaChuZXcgS2V5UGFpcihjbGVhcmtleUlELCBjbGVhcmtleSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xlYXJrZXlTZXQgPSBuZXcgQ2xlYXJLZXlLZXlTZXQoa2V5UGFpcnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGVhcmtleVNldDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJbml0RGF0YShjcCkge1xuICAgICAgICByZXR1cm4gQ29tbW9uRW5jcnlwdGlvbi5wYXJzZUluaXREYXRhRnJvbUNvbnRlbnRQcm90ZWN0aW9uKGNwLCBCQVNFNjQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlcXVlc3RIZWFkZXJzRnJvbU1lc3NhZ2UoLyptZXNzYWdlKi8pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TGljZW5zZVJlcXVlc3RGcm9tTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRMaWNlbnNlU2VydmVyVVJMRnJvbUluaXREYXRhKC8qaW5pdERhdGEqLykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDRE1EYXRhKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTZXNzaW9uSWQoLypjcCovKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGluc3RhbmNlID0ge1xuICAgICAgICB1dWlkOiB1dWlkLFxuICAgICAgICBzY2hlbWVJZFVSSTogc2NoZW1lSWRVUkksXG4gICAgICAgIHN5c3RlbVN0cmluZzogc3lzdGVtU3RyaW5nLFxuICAgICAgICBnZXRJbml0RGF0YTogZ2V0SW5pdERhdGEsXG4gICAgICAgIGdldFJlcXVlc3RIZWFkZXJzRnJvbU1lc3NhZ2U6IGdldFJlcXVlc3RIZWFkZXJzRnJvbU1lc3NhZ2UsXG4gICAgICAgIGdldExpY2Vuc2VSZXF1ZXN0RnJvbU1lc3NhZ2U6IGdldExpY2Vuc2VSZXF1ZXN0RnJvbU1lc3NhZ2UsXG4gICAgICAgIGdldExpY2Vuc2VTZXJ2ZXJVUkxGcm9tSW5pdERhdGE6IGdldExpY2Vuc2VTZXJ2ZXJVUkxGcm9tSW5pdERhdGEsXG4gICAgICAgIGdldENETURhdGE6IGdldENETURhdGEsXG4gICAgICAgIGdldFNlc3Npb25JZDogZ2V0U2Vzc2lvbklkLFxuICAgICAgICBnZXRDbGVhcktleXNGcm9tUHJvdGVjdGlvbkRhdGE6IGdldENsZWFyS2V5c0Zyb21Qcm90ZWN0aW9uRGF0YVxuICAgIH07XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbktleVN5c3RlbUNsZWFyS2V5Ll9fZGFzaGpzX2ZhY3RvcnlfbmFtZSA9ICdLZXlTeXN0ZW1DbGVhcktleSc7XG5leHBvcnQgZGVmYXVsdCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldFNpbmdsZXRvbkZhY3RvcnkoS2V5U3lzdGVtQ2xlYXJLZXkpOyAvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi9cbiIsIi8qKlxuICogVGhlIGNvcHlyaWdodCBpbiB0aGlzIHNvZnR3YXJlIGlzIGJlaW5nIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBCU0QgTGljZW5zZSxcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiAqICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbiAqICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgQVMgSVMgQU5EIEFOWVxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXG4gKiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxuICogIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLFxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuICogIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbi8qKlxuICogTWljcm9zb2Z0IFBsYXlSZWFkeSBEUk1cbiAqXG4gKiBAY2xhc3NcbiAqIEBpbXBsZW1lbnRzIEtleVN5c3RlbVxuICovXG5pbXBvcnQgQ29tbW9uRW5jcnlwdGlvbiBmcm9tICcuLi9Db21tb25FbmNyeXB0aW9uJztcbmltcG9ydCBQcm90ZWN0aW9uQ29uc3RhbnRzIGZyb20gJy4uLy4uL2NvbnN0YW50cy9Qcm90ZWN0aW9uQ29uc3RhbnRzJztcblxuY29uc3QgdXVpZCA9ICc5YTA0ZjA3OS05ODQwLTQyODYtYWI5Mi1lNjViZTA4ODVmOTUnO1xuY29uc3Qgc3lzdGVtU3RyaW5nID0gUHJvdGVjdGlvbkNvbnN0YW50cy5QTEFZUkVBRFlfS0VZU1RFTV9TVFJJTkc7XG5jb25zdCBzY2hlbWVJZFVSSSA9ICd1cm46dXVpZDonICsgdXVpZDtcbmNvbnN0IFBSQ0RNRGF0YSA9ICc8UGxheVJlYWR5Q0RNRGF0YSB0eXBlPVwiTGljZW5zZUFjcXVpc2l0aW9uXCI+PExpY2Vuc2VBY3F1aXNpdGlvbiB2ZXJzaW9uPVwiMS4wXCIgUHJvYWN0aXZlPVwiZmFsc2VcIj48Q3VzdG9tRGF0YSBlbmNvZGluZz1cImJhc2U2NGVuY29kZWRcIj4lQ1VTVE9NREFUQSU8L0N1c3RvbURhdGE+PC9MaWNlbnNlQWNxdWlzaXRpb24+PC9QbGF5UmVhZHlDRE1EYXRhPic7XG5sZXQgcHJvdERhdGE7XG5cbmZ1bmN0aW9uIEtleVN5c3RlbVBsYXlSZWFkeShjb25maWcpIHtcblxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICBsZXQgaW5zdGFuY2U7XG4gICAgbGV0IG1lc3NhZ2VGb3JtYXQgPSAndXRmMTYnO1xuICAgIGNvbnN0IEJBU0U2NCA9IGNvbmZpZy5CQVNFNjQ7XG5cbiAgICBmdW5jdGlvbiBjaGVja0NvbmZpZygpIHtcbiAgICAgICAgaWYgKCFCQVNFNjQgfHwgIUJBU0U2NC5oYXNPd25Qcm9wZXJ0eSgnZGVjb2RlQXJyYXknKSB8fCAhQkFTRTY0Lmhhc093blByb3BlcnR5KCdkZWNvZGVBcnJheScpICkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGNvbmZpZyBwYXJhbWV0ZXIocyknKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlcXVlc3RIZWFkZXJzRnJvbU1lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgICBsZXQgbXNnLFxuICAgICAgICAgICAgeG1sRG9jO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0ge307XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgY29uc3QgZGF0YXZpZXcgPSAobWVzc2FnZUZvcm1hdCA9PT0gJ3V0ZjE2JykgPyBuZXcgVWludDE2QXJyYXkobWVzc2FnZSkgOiBuZXcgVWludDhBcnJheShtZXNzYWdlKTtcblxuICAgICAgICBtc2cgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGRhdGF2aWV3KTtcbiAgICAgICAgeG1sRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhtc2csICdhcHBsaWNhdGlvbi94bWwnKTtcblxuICAgICAgICBjb25zdCBoZWFkZXJOYW1lTGlzdCA9IHhtbERvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbmFtZScpO1xuICAgICAgICBjb25zdCBoZWFkZXJWYWx1ZUxpc3QgPSB4bWxEb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3ZhbHVlJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVhZGVyTmFtZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGhlYWRlcnNbaGVhZGVyTmFtZUxpc3RbaV0uY2hpbGROb2Rlc1swXS5ub2RlVmFsdWVdID0gaGVhZGVyVmFsdWVMaXN0W2ldLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNvbWUgdmVyc2lvbnMgb2YgdGhlIFBsYXlSZWFkeSBDRE0gcmV0dXJuICdDb250ZW50JyBpbnN0ZWFkIG9mICdDb250ZW50LVR5cGUnLlxuICAgICAgICAvLyB0aGlzIGlzIE5PVCB3M2MgY29uZm9ybSBhbmQgbGljZW5zZSBzZXJ2ZXJzIG1heSByZWplY3QgdGhlIHJlcXVlc3QhXG4gICAgICAgIC8vIC0+IHJlbmFtZSBpdCB0byBwcm9wZXIgdzNjIGRlZmluaXRpb24hXG4gICAgICAgIGlmIChoZWFkZXJzLmhhc093blByb3BlcnR5KCdDb250ZW50JykpIHtcbiAgICAgICAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gaGVhZGVycy5Db250ZW50O1xuICAgICAgICAgICAgZGVsZXRlIGhlYWRlcnMuQ29udGVudDtcbiAgICAgICAgfVxuICAgICAgICAvLyBzb21lIGRldmljZXMgKEV4OiBMRyBTbWFydFRWcykgcmVxdWlyZSBjb250ZW50LXR5cGUgdG8gYmUgZGVmaW5lZFxuICAgICAgICBpZiAoIWhlYWRlcnMuaGFzT3duUHJvcGVydHkoJ0NvbnRlbnQtVHlwZScpKSB7XG4gICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICd0ZXh0L3htbDsgY2hhcnNldD0nICsgbWVzc2FnZUZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRMaWNlbnNlUmVxdWVzdEZyb21NZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgbGV0IGxpY2Vuc2VSZXF1ZXN0ID0gbnVsbDtcbiAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgICBjb25zdCBkYXRhdmlldyA9IChtZXNzYWdlRm9ybWF0ID09PSAndXRmMTYnKSA/IG5ldyBVaW50MTZBcnJheShtZXNzYWdlKSA6IG5ldyBVaW50OEFycmF5KG1lc3NhZ2UpO1xuXG4gICAgICAgIGNoZWNrQ29uZmlnKCk7XG4gICAgICAgIGNvbnN0IG1zZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgZGF0YXZpZXcpO1xuICAgICAgICBjb25zdCB4bWxEb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKG1zZywgJ2FwcGxpY2F0aW9uL3htbCcpO1xuXG4gICAgICAgIGlmICh4bWxEb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0NoYWxsZW5nZScpWzBdKSB7XG4gICAgICAgICAgICBjb25zdCBDaGFsbGVuZ2UgPSB4bWxEb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0NoYWxsZW5nZScpWzBdLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlO1xuICAgICAgICAgICAgaWYgKENoYWxsZW5nZSkge1xuICAgICAgICAgICAgICAgIGxpY2Vuc2VSZXF1ZXN0ID0gQkFTRTY0LmRlY29kZShDaGFsbGVuZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHhtbERvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgncGFyc2VyZXJyb3InKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIEluIGNhc2UgaXQgaXMgbm90IGFuIFhNTCBkb2MsIHJldHVybiB0aGUgbWVzc2FnZSBpdHNlbGZcbiAgICAgICAgICAgIC8vIFRoZXJlIGFyZSBDRE0gaW1wbGVtZW50YXRpb25zIG9mIHNvbWUgZGV2aWNlcyAoZXhhbXBsZTogc29tZSBzbWFydFRWcykgdGhhdFxuICAgICAgICAgICAgLy8gcmV0dXJuIGRpcmVjdGx5IHRoZSBjaGFsbGVuZ2Ugd2l0aG91dCB3cmFwcGluZyBpdCBpbiBhbiB4bWwgZG9jXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaWNlbnNlUmVxdWVzdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRMaWNlbnNlU2VydmVyVVJMRnJvbUluaXREYXRhKGluaXREYXRhKSB7XG4gICAgICAgIGlmIChpbml0RGF0YSkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBEYXRhVmlldyhpbml0RGF0YSk7XG4gICAgICAgICAgICBjb25zdCBudW1SZWNvcmRzID0gZGF0YS5nZXRVaW50MTYoNCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gNjtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1SZWNvcmRzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyBQYXJzZSB0aGUgUGxheVJlYWR5IFJlY29yZCBoZWFkZXJcbiAgICAgICAgICAgICAgICBjb25zdCByZWNvcmRUeXBlID0gZGF0YS5nZXRVaW50MTYob2Zmc2V0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gMjtcbiAgICAgICAgICAgICAgICBjb25zdCByZWNvcmRMZW5ndGggPSBkYXRhLmdldFVpbnQxNihvZmZzZXQsIHRydWUpO1xuICAgICAgICAgICAgICAgIG9mZnNldCArPSAyO1xuICAgICAgICAgICAgICAgIGlmIChyZWNvcmRUeXBlICE9PSAweDAwMDEpIHtcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ICs9IHJlY29yZExlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVjb3JkRGF0YSA9IGluaXREYXRhLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgcmVjb3JkTGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZWNvcmQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50MTZBcnJheShyZWNvcmREYXRhKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgeG1sRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhyZWNvcmQsICdhcHBsaWNhdGlvbi94bWwnKTtcblxuICAgICAgICAgICAgICAgIC8vIEZpcnN0IHRyeSA8TEFfVVJMPlxuICAgICAgICAgICAgICAgIGlmICh4bWxEb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0xBX1VSTCcpWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhdXJsID0geG1sRG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdMQV9VUkwnKVswXS5jaGlsZE5vZGVzWzBdLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhdXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGF1cmw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBPcHRpb25hbGx5LCB0cnkgPExVSV9VUkw+XG4gICAgICAgICAgICAgICAgaWYgKHhtbERvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnTFVJX1VSTCcpWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGx1aXVybCA9IHhtbERvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnTFVJX1VSTCcpWzBdLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobHVpdXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbHVpdXJsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW5pdERhdGEoY3BEYXRhKSB7XG4gICAgICAgIC8vICogZGVzY0AgZ2V0SW5pdERhdGFcbiAgICAgICAgLy8gKiAgIGdlbmVyYXRlIFBTU0ggZGF0YSBmcm9tIFBST0hlYWRlciBkZWZpbmVkIGluIE1QRCBmaWxlXG4gICAgICAgIC8vICogICBQU1NIIGZvcm1hdDpcbiAgICAgICAgLy8gKiAgIHNpemUgKDQpXG4gICAgICAgIC8vICogICBib3ggdHlwZShQU1NIKSAoOClcbiAgICAgICAgLy8gKiAgIFByb3RlY3Rpb24gU3lzdGVtSUQgKDE2KVxuICAgICAgICAvLyAqICAgcHJvdGVjdGlvbiBzeXN0ZW0gZGF0YSBzaXplICg0KSAtIGxlbmd0aCBvZiBkZWNvZGVkIFBST0hlYWRlclxuICAgICAgICAvLyAqICAgZGVjb2RlZCBQUk9IZWFkZXIgZGF0YSBmcm9tIE1QRCBmaWxlXG4gICAgICAgIGNvbnN0IFBTU0hCb3hUeXBlID0gbmV3IFVpbnQ4QXJyYXkoWzB4NzAsIDB4NzMsIDB4NzMsIDB4NjgsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDBdKTsgLy8nUFNTSCcgOCBieXRlc1xuICAgICAgICBjb25zdCBwbGF5cmVhZHlTeXN0ZW1JRCA9IG5ldyBVaW50OEFycmF5KFsweDlhLCAweDA0LCAweGYwLCAweDc5LCAweDk4LCAweDQwLCAweDQyLCAweDg2LCAweGFiLCAweDkyLCAweGU2LCAweDViLCAweGUwLCAweDg4LCAweDVmLCAweDk1XSk7XG5cbiAgICAgICAgbGV0IGJ5dGVDdXJzb3IgPSAwO1xuICAgICAgICBsZXQgdWludDhhcnJheWRlY29kZWRQUk9IZWFkZXIgPSBudWxsO1xuXG4gICAgICAgIGxldCBQUk9TaXplLFxuICAgICAgICAgICAgUFNTSFNpemUsXG4gICAgICAgICAgICBQU1NIQm94QnVmZmVyLFxuICAgICAgICAgICAgUFNTSEJveCxcbiAgICAgICAgICAgIFBTU0hEYXRhO1xuXG4gICAgICAgIGNoZWNrQ29uZmlnKCk7XG4gICAgICAgIC8vIEhhbmRsZSBjb21tb24gZW5jcnlwdGlvbiBQU1NIXG4gICAgICAgIGlmICgncHNzaCcgaW4gY3BEYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gQ29tbW9uRW5jcnlwdGlvbi5wYXJzZUluaXREYXRhRnJvbUNvbnRlbnRQcm90ZWN0aW9uKGNwRGF0YSwgQkFTRTY0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGUgbmF0aXZlIE1TIFBsYXlSZWFkeSBDb250ZW50UHJvdGVjdGlvbiBlbGVtZW50c1xuICAgICAgICBpZiAoJ3BybycgaW4gY3BEYXRhKSB7XG4gICAgICAgICAgICB1aW50OGFycmF5ZGVjb2RlZFBST0hlYWRlciA9IEJBU0U2NC5kZWNvZGVBcnJheShjcERhdGEucHJvLl9fdGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoJ3ByaGVhZGVyJyBpbiBjcERhdGEpIHtcbiAgICAgICAgICAgIHVpbnQ4YXJyYXlkZWNvZGVkUFJPSGVhZGVyID0gQkFTRTY0LmRlY29kZUFycmF5KGNwRGF0YS5wcmhlYWRlci5fX3RleHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBQUk9TaXplID0gdWludDhhcnJheWRlY29kZWRQUk9IZWFkZXIubGVuZ3RoO1xuICAgICAgICBQU1NIU2l6ZSA9IDB4NCArIFBTU0hCb3hUeXBlLmxlbmd0aCArIHBsYXlyZWFkeVN5c3RlbUlELmxlbmd0aCArIDB4NCArIFBST1NpemU7XG5cbiAgICAgICAgUFNTSEJveEJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihQU1NIU2l6ZSk7XG5cbiAgICAgICAgUFNTSEJveCA9IG5ldyBVaW50OEFycmF5KFBTU0hCb3hCdWZmZXIpO1xuICAgICAgICBQU1NIRGF0YSA9IG5ldyBEYXRhVmlldyhQU1NIQm94QnVmZmVyKTtcblxuICAgICAgICBQU1NIRGF0YS5zZXRVaW50MzIoYnl0ZUN1cnNvciwgUFNTSFNpemUpO1xuICAgICAgICBieXRlQ3Vyc29yICs9IDB4NDtcblxuICAgICAgICBQU1NIQm94LnNldChQU1NIQm94VHlwZSwgYnl0ZUN1cnNvcik7XG4gICAgICAgIGJ5dGVDdXJzb3IgKz0gUFNTSEJveFR5cGUubGVuZ3RoO1xuXG4gICAgICAgIFBTU0hCb3guc2V0KHBsYXlyZWFkeVN5c3RlbUlELCBieXRlQ3Vyc29yKTtcbiAgICAgICAgYnl0ZUN1cnNvciArPSBwbGF5cmVhZHlTeXN0ZW1JRC5sZW5ndGg7XG5cbiAgICAgICAgUFNTSERhdGEuc2V0VWludDMyKGJ5dGVDdXJzb3IsIFBST1NpemUpO1xuICAgICAgICBieXRlQ3Vyc29yICs9IDB4NDtcblxuICAgICAgICBQU1NIQm94LnNldCh1aW50OGFycmF5ZGVjb2RlZFBST0hlYWRlciwgYnl0ZUN1cnNvcik7XG4gICAgICAgIGJ5dGVDdXJzb3IgKz0gUFJPU2l6ZTtcblxuICAgICAgICByZXR1cm4gUFNTSEJveC5idWZmZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXQgc2VlbXMgdGhhdCBzb21lIFBsYXlSZWFkeSBpbXBsZW1lbnRhdGlvbnMgcmV0dXJuIHRoZWlyIFhNTC1iYXNlZCBDRE1cbiAgICAgKiBtZXNzYWdlcyB1c2luZyBVVEYxNiwgd2hpbGUgb3RoZXJzIHJldHVybiB0aGVtIGFzIFVURjguICBVc2UgdGhpcyBmdW5jdGlvblxuICAgICAqIHRvIG1vZGlmeSB0aGUgbWVzc2FnZSBmb3JtYXQgdG8gZXhwZWN0IHdoZW4gcGFyc2luZyBDRE0gbWVzc2FnZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0IHRoZSBleHBlY3RlZCBtZXNzYWdlIGZvcm1hdC4gIEVpdGhlciBcInV0ZjhcIiBvciBcInV0ZjE2XCIuXG4gICAgICogQHRocm93cyB7RXJyb3J9IFNwZWNpZmllZCBtZXNzYWdlIGZvcm1hdCBpcyBub3Qgb25lIG9mIFwidXRmOFwiIG9yIFwidXRmMTZcIlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldFBsYXlSZWFkeU1lc3NhZ2VGb3JtYXQoZm9ybWF0KSB7XG4gICAgICAgIGlmIChmb3JtYXQgIT09ICd1dGY4JyAmJiBmb3JtYXQgIT09ICd1dGYxNicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBQbGF5UmVhZHkgbWVzc2FnZSBmb3JtYXQhIC0tICcgKyBmb3JtYXQpO1xuICAgICAgICB9XG4gICAgICAgIG1lc3NhZ2VGb3JtYXQgPSBmb3JtYXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgS2V5IHN5c3RlbSB3aXRoIHByb3RlY3Rpb24gZGF0YVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm90ZWN0aW9uRGF0YSB0aGUgcHJvdGVjdGlvbiBkYXRhXG4gICAgICovXG4gICAgZnVuY3Rpb24gaW5pdChwcm90ZWN0aW9uRGF0YSkge1xuICAgICAgICBpZiAocHJvdGVjdGlvbkRhdGEpIHtcbiAgICAgICAgICAgIHByb3REYXRhID0gcHJvdGVjdGlvbkRhdGE7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEdldCBQbGF5cmVhZHkgQ3VzdG9tIGRhdGFcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRDRE1EYXRhKCkge1xuICAgICAgICBsZXQgY3VzdG9tRGF0YSxcbiAgICAgICAgICAgIGNkbURhdGEsXG4gICAgICAgICAgICBjZG1EYXRhQnl0ZXMsXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIGNoZWNrQ29uZmlnKCk7XG4gICAgICAgIGlmIChwcm90RGF0YSAmJiBwcm90RGF0YS5jZG1EYXRhKSB7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IGN1c3RvbSBkYXRhIGludG8gbXVsdGlieXRlIHN0cmluZ1xuICAgICAgICAgICAgY3VzdG9tRGF0YSA9IFtdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHByb3REYXRhLmNkbURhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjdXN0b21EYXRhLnB1c2gocHJvdERhdGEuY2RtRGF0YS5jaGFyQ29kZUF0KGkpKTtcbiAgICAgICAgICAgICAgICBjdXN0b21EYXRhLnB1c2goMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXN0b21EYXRhID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBjdXN0b21EYXRhKTtcblxuICAgICAgICAgICAgLy8gRW5jb2RlIGluIEJhc2UgNjQgdGhlIGN1c3RvbSBkYXRhIHN0cmluZ1xuICAgICAgICAgICAgY3VzdG9tRGF0YSA9IEJBU0U2NC5lbmNvZGUoY3VzdG9tRGF0YSk7XG5cbiAgICAgICAgICAgIC8vIEluaXRpYWxpemUgQ0RNIGRhdGEgd2l0aCBCYXNlIDY0IGVuY29kZWQgY3VzdG9tIGRhdGFcbiAgICAgICAgICAgIC8vIChzZWUgaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9kbjQ1NzM2MS5hc3B4KVxuICAgICAgICAgICAgY2RtRGF0YSA9IFBSQ0RNRGF0YS5yZXBsYWNlKCclQ1VTVE9NREFUQSUnLCBjdXN0b21EYXRhKTtcblxuICAgICAgICAgICAgLy8gQ29udmVydCBDRE0gZGF0YSBpbnRvIG11bHRpYnl0ZSBjaGFyYWN0ZXJzXG4gICAgICAgICAgICBjZG1EYXRhQnl0ZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjZG1EYXRhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgY2RtRGF0YUJ5dGVzLnB1c2goY2RtRGF0YS5jaGFyQ29kZUF0KGkpKTtcbiAgICAgICAgICAgICAgICBjZG1EYXRhQnl0ZXMucHVzaCgwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGNkbURhdGFCeXRlcykuYnVmZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2Vzc2lvbklkKGNwKSB7XG4gICAgICAgIC8vIEdldCBzZXNzaW9uSWQgZnJvbSBwcm90ZWN0aW9uRGF0YSBvciBmcm9tIG1hbmlmZXN0XG4gICAgICAgIGlmIChwcm90RGF0YSAmJiBwcm90RGF0YS5zZXNzaW9uSWQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm90RGF0YS5zZXNzaW9uSWQ7XG4gICAgICAgIH0gZWxzZSBpZiAoY3AgJiYgY3Auc2Vzc2lvbklkKSB7XG4gICAgICAgICAgICByZXR1cm4gY3Auc2Vzc2lvbklkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGluc3RhbmNlID0ge1xuICAgICAgICB1dWlkOiB1dWlkLFxuICAgICAgICBzY2hlbWVJZFVSSTogc2NoZW1lSWRVUkksXG4gICAgICAgIHN5c3RlbVN0cmluZzogc3lzdGVtU3RyaW5nLFxuICAgICAgICBnZXRJbml0RGF0YTogZ2V0SW5pdERhdGEsXG4gICAgICAgIGdldFJlcXVlc3RIZWFkZXJzRnJvbU1lc3NhZ2U6IGdldFJlcXVlc3RIZWFkZXJzRnJvbU1lc3NhZ2UsXG4gICAgICAgIGdldExpY2Vuc2VSZXF1ZXN0RnJvbU1lc3NhZ2U6IGdldExpY2Vuc2VSZXF1ZXN0RnJvbU1lc3NhZ2UsXG4gICAgICAgIGdldExpY2Vuc2VTZXJ2ZXJVUkxGcm9tSW5pdERhdGE6IGdldExpY2Vuc2VTZXJ2ZXJVUkxGcm9tSW5pdERhdGEsXG4gICAgICAgIGdldENETURhdGE6IGdldENETURhdGEsXG4gICAgICAgIGdldFNlc3Npb25JZDogZ2V0U2Vzc2lvbklkLFxuICAgICAgICBzZXRQbGF5UmVhZHlNZXNzYWdlRm9ybWF0OiBzZXRQbGF5UmVhZHlNZXNzYWdlRm9ybWF0LFxuICAgICAgICBpbml0OiBpbml0XG4gICAgfTtcblxuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuS2V5U3lzdGVtUGxheVJlYWR5Ll9fZGFzaGpzX2ZhY3RvcnlfbmFtZSA9ICdLZXlTeXN0ZW1QbGF5UmVhZHknO1xuZXhwb3J0IGRlZmF1bHQgZGFzaGpzLkZhY3RvcnlNYWtlci5nZXRTaW5nbGV0b25GYWN0b3J5KEtleVN5c3RlbVBsYXlSZWFkeSk7IC8qIGpzaGludCBpZ25vcmU6bGluZSAqLyIsIi8qKlxuICogVGhlIGNvcHlyaWdodCBpbiB0aGlzIHNvZnR3YXJlIGlzIGJlaW5nIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBCU0QgTGljZW5zZSxcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiAqICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbiAqICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgQVMgSVMgQU5EIEFOWVxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXG4gKiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxuICogIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLFxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuICogIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbmltcG9ydCBLZXlQYWlyIGZyb20gJy4uL3ZvL0tleVBhaXInO1xuaW1wb3J0IENsZWFyS2V5S2V5U2V0IGZyb20gJy4uL3ZvL0NsZWFyS2V5S2V5U2V0JztcbmltcG9ydCBDb21tb25FbmNyeXB0aW9uIGZyb20gJy4uL0NvbW1vbkVuY3J5cHRpb24nO1xuaW1wb3J0IFByb3RlY3Rpb25Db25zdGFudHMgZnJvbSAnLi4vLi4vY29uc3RhbnRzL1Byb3RlY3Rpb25Db25zdGFudHMnO1xuXG5jb25zdCB1dWlkID0gJzEwNzdlZmVjLWMwYjItNGQwMi1hY2UzLTNjMWU1MmUyZmI0Yic7XG5jb25zdCBzeXN0ZW1TdHJpbmcgPSBQcm90ZWN0aW9uQ29uc3RhbnRzLkNMRUFSS0VZX0tFWVNURU1fU1RSSU5HO1xuY29uc3Qgc2NoZW1lSWRVUkkgPSAndXJuOnV1aWQ6JyArIHV1aWQ7XG5cbmZ1bmN0aW9uIEtleVN5c3RlbVczQ0NsZWFyS2V5KGNvbmZpZykge1xuICAgIGxldCBpbnN0YW5jZTtcbiAgICBjb25zdCBCQVNFNjQgPSBjb25maWcuQkFTRTY0O1xuICAgIGNvbnN0IGxvZ2dlciA9IGNvbmZpZy5kZWJ1Zy5nZXRMb2dnZXIoaW5zdGFuY2UpO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgZGVzaXJlZCBjbGVhcmtleXMgKGFzIHNwZWNpZmllZCBpbiB0aGUgQ0RNIG1lc3NhZ2UpIGZyb20gcHJvdGVjdGlvbiBkYXRhXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Byb3RlY3Rpb25EYXRhfSBwcm90ZWN0aW9uRGF0YSB0aGUgcHJvdGVjdGlvbiBkYXRhXG4gICAgICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gbWVzc2FnZSB0aGUgQ2xlYXJLZXkgQ0RNIG1lc3NhZ2VcbiAgICAgKiBAcmV0dXJucyB7Q2xlYXJLZXlLZXlTZXR9IHRoZSBrZXkgc2V0IG9yIG51bGwgaWYgbm9uZSBmb3VuZFxuICAgICAqIEB0aHJvd3Mge0Vycm9yfSBpZiBhIGtleUlEIHNwZWNpZmllZCBpbiB0aGUgQ0RNIG1lc3NhZ2Ugd2FzIG5vdCBmb3VuZCBpbiB0aGVcbiAgICAgKiBwcm90ZWN0aW9uIGRhdGFcbiAgICAgKiBAbWVtYmVyb2YgS2V5U3lzdGVtQ2xlYXJLZXlcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRDbGVhcktleXNGcm9tUHJvdGVjdGlvbkRhdGEocHJvdGVjdGlvbkRhdGEsIG1lc3NhZ2UpIHtcbiAgICAgICAgbGV0IGNsZWFya2V5U2V0ID0gbnVsbDtcbiAgICAgICAgaWYgKHByb3RlY3Rpb25EYXRhKSB7XG4gICAgICAgICAgICAvLyBDbGVhcktleSBpcyB0aGUgb25seSBzeXN0ZW0gdGhhdCBkb2VzIG5vdCByZXF1aXJlIGEgbGljZW5zZSBzZXJ2ZXIgVVJMLCBzbyB3ZVxuICAgICAgICAgICAgLy8gaGFuZGxlIGl0IGhlcmUgd2hlbiBrZXlzIGFyZSBzcGVjaWZpZWQgaW4gcHJvdGVjdGlvbiBkYXRhXG4gICAgICAgICAgICBjb25zdCBqc29uTXNnID0gSlNPTi5wYXJzZShTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50OEFycmF5KG1lc3NhZ2UpKSk7XG4gICAgICAgICAgICBjb25zdCBrZXlQYWlycyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uTXNnLmtpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhcmtleUlEID0ganNvbk1zZy5raWRzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFya2V5ID0gKHByb3RlY3Rpb25EYXRhLmNsZWFya2V5cyAmJiBwcm90ZWN0aW9uRGF0YS5jbGVhcmtleXMuaGFzT3duUHJvcGVydHkoY2xlYXJrZXlJRCkpID8gcHJvdGVjdGlvbkRhdGEuY2xlYXJrZXlzW2NsZWFya2V5SURdIDogbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIWNsZWFya2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRFJNOiBDbGVhcktleSBrZXlJRCAoJyArIGNsZWFya2V5SUQgKyAnKSBpcyBub3Qga25vd24hJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEtleUlEcyBmcm9tIENETSBhcmUgbm90IGJhc2U2NCBwYWRkZWQuICBLZXlzIG1heSBvciBtYXkgbm90IGJlIHBhZGRlZFxuICAgICAgICAgICAgICAgIGtleVBhaXJzLnB1c2gobmV3IEtleVBhaXIoY2xlYXJrZXlJRCwgY2xlYXJrZXkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsZWFya2V5U2V0ID0gbmV3IENsZWFyS2V5S2V5U2V0KGtleVBhaXJzKTtcblxuICAgICAgICAgICAgbG9nZ2VyLndhcm4oJ0NsZWFyS2V5IHNjaGVtZUlkVVJJIGlzIHVzaW5nIFczQyBDb21tb24gUFNTSCBzeXN0ZW1JRCAoMTA3N2VmZWMtYzBiMi00ZDAyLWFjZTMtM2MxZTUyZTJmYjRiKSBpbiBDb250ZW50IFByb3RlY3Rpb24uIFNlZSBEQVNILUlGIElPUCB2NC4xIHNlY3Rpb24gNy42LjIuNCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGVhcmtleVNldDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJbml0RGF0YShjcCkge1xuICAgICAgICByZXR1cm4gQ29tbW9uRW5jcnlwdGlvbi5wYXJzZUluaXREYXRhRnJvbUNvbnRlbnRQcm90ZWN0aW9uKGNwLCBCQVNFNjQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlcXVlc3RIZWFkZXJzRnJvbU1lc3NhZ2UoLyptZXNzYWdlKi8pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TGljZW5zZVJlcXVlc3RGcm9tTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRMaWNlbnNlU2VydmVyVVJMRnJvbUluaXREYXRhKC8qaW5pdERhdGEqLykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDRE1EYXRhKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTZXNzaW9uSWQoLypjcCovKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGluc3RhbmNlID0ge1xuICAgICAgICB1dWlkOiB1dWlkLFxuICAgICAgICBzY2hlbWVJZFVSSTogc2NoZW1lSWRVUkksXG4gICAgICAgIHN5c3RlbVN0cmluZzogc3lzdGVtU3RyaW5nLFxuICAgICAgICBnZXRJbml0RGF0YTogZ2V0SW5pdERhdGEsXG4gICAgICAgIGdldFJlcXVlc3RIZWFkZXJzRnJvbU1lc3NhZ2U6IGdldFJlcXVlc3RIZWFkZXJzRnJvbU1lc3NhZ2UsXG4gICAgICAgIGdldExpY2Vuc2VSZXF1ZXN0RnJvbU1lc3NhZ2U6IGdldExpY2Vuc2VSZXF1ZXN0RnJvbU1lc3NhZ2UsXG4gICAgICAgIGdldExpY2Vuc2VTZXJ2ZXJVUkxGcm9tSW5pdERhdGE6IGdldExpY2Vuc2VTZXJ2ZXJVUkxGcm9tSW5pdERhdGEsXG4gICAgICAgIGdldENETURhdGE6IGdldENETURhdGEsXG4gICAgICAgIGdldFNlc3Npb25JZDogZ2V0U2Vzc2lvbklkLFxuICAgICAgICBnZXRDbGVhcktleXNGcm9tUHJvdGVjdGlvbkRhdGE6IGdldENsZWFyS2V5c0Zyb21Qcm90ZWN0aW9uRGF0YVxuICAgIH07XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbktleVN5c3RlbVczQ0NsZWFyS2V5Ll9fZGFzaGpzX2ZhY3RvcnlfbmFtZSA9ICdLZXlTeXN0ZW1XM0NDbGVhcktleSc7XG5leHBvcnQgZGVmYXVsdCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldFNpbmdsZXRvbkZhY3RvcnkoS2V5U3lzdGVtVzNDQ2xlYXJLZXkpOyAvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi9cblxuIiwiLyoqXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuLyoqXG4gKiBHb29nbGUgV2lkZXZpbmUgRFJNXG4gKlxuICogQGNsYXNzXG4gKiBAaW1wbGVtZW50cyBNZWRpYVBsYXllci5kZXBlbmRlbmNpZXMucHJvdGVjdGlvbi5LZXlTeXN0ZW1cbiAqL1xuXG5pbXBvcnQgQ29tbW9uRW5jcnlwdGlvbiBmcm9tICcuLi9Db21tb25FbmNyeXB0aW9uJztcbmltcG9ydCBQcm90ZWN0aW9uQ29uc3RhbnRzIGZyb20gJy4uLy4uL2NvbnN0YW50cy9Qcm90ZWN0aW9uQ29uc3RhbnRzJztcblxuY29uc3QgdXVpZCA9ICdlZGVmOGJhOS03OWQ2LTRhY2UtYTNjOC0yN2RjZDUxZDIxZWQnO1xuY29uc3Qgc3lzdGVtU3RyaW5nID0gUHJvdGVjdGlvbkNvbnN0YW50cy5XSURFVklORV9LRVlTVEVNX1NUUklORztcbmNvbnN0IHNjaGVtZUlkVVJJID0gJ3Vybjp1dWlkOicgKyB1dWlkO1xuXG5mdW5jdGlvbiBLZXlTeXN0ZW1XaWRldmluZShjb25maWcpIHtcblxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICBsZXQgaW5zdGFuY2U7XG4gICAgbGV0IHByb3REYXRhID0gbnVsbDtcbiAgICBjb25zdCBCQVNFNjQgPSBjb25maWcuQkFTRTY0O1xuXG4gICAgZnVuY3Rpb24gaW5pdChwcm90ZWN0aW9uRGF0YSkge1xuICAgICAgICBpZiAocHJvdGVjdGlvbkRhdGEpIHtcbiAgICAgICAgICAgIHByb3REYXRhID0gcHJvdGVjdGlvbkRhdGE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJbml0RGF0YShjcCkge1xuICAgICAgICByZXR1cm4gQ29tbW9uRW5jcnlwdGlvbi5wYXJzZUluaXREYXRhRnJvbUNvbnRlbnRQcm90ZWN0aW9uKGNwLCBCQVNFNjQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlcXVlc3RIZWFkZXJzRnJvbU1lc3NhZ2UoIC8qbWVzc2FnZSovICkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRMaWNlbnNlUmVxdWVzdEZyb21NZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldExpY2Vuc2VTZXJ2ZXJVUkxGcm9tSW5pdERhdGEoIC8qaW5pdERhdGEqLyApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q0RNRGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2Vzc2lvbklkKGNwKSB7XG4gICAgICAgIC8vIEdldCBzZXNzaW9uSWQgZnJvbSBwcm90ZWN0aW9uRGF0YSBvciBmcm9tIG1hbmlmZXN0XG4gICAgICAgIGlmIChwcm90RGF0YSAmJiBwcm90RGF0YS5zZXNzaW9uSWQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm90RGF0YS5zZXNzaW9uSWQ7XG4gICAgICAgIH0gZWxzZSBpZiAoY3AgJiYgY3Auc2Vzc2lvbklkKSB7XG4gICAgICAgICAgICByZXR1cm4gY3Auc2Vzc2lvbklkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGluc3RhbmNlID0ge1xuICAgICAgICB1dWlkOiB1dWlkLFxuICAgICAgICBzY2hlbWVJZFVSSTogc2NoZW1lSWRVUkksXG4gICAgICAgIHN5c3RlbVN0cmluZzogc3lzdGVtU3RyaW5nLFxuICAgICAgICBpbml0OiBpbml0LFxuICAgICAgICBnZXRJbml0RGF0YTogZ2V0SW5pdERhdGEsXG4gICAgICAgIGdldFJlcXVlc3RIZWFkZXJzRnJvbU1lc3NhZ2U6IGdldFJlcXVlc3RIZWFkZXJzRnJvbU1lc3NhZ2UsXG4gICAgICAgIGdldExpY2Vuc2VSZXF1ZXN0RnJvbU1lc3NhZ2U6IGdldExpY2Vuc2VSZXF1ZXN0RnJvbU1lc3NhZ2UsXG4gICAgICAgIGdldExpY2Vuc2VTZXJ2ZXJVUkxGcm9tSW5pdERhdGE6IGdldExpY2Vuc2VTZXJ2ZXJVUkxGcm9tSW5pdERhdGEsXG4gICAgICAgIGdldENETURhdGE6IGdldENETURhdGEsXG4gICAgICAgIGdldFNlc3Npb25JZDogZ2V0U2Vzc2lvbklkXG4gICAgfTtcblxuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuS2V5U3lzdGVtV2lkZXZpbmUuX19kYXNoanNfZmFjdG9yeV9uYW1lID0gJ0tleVN5c3RlbVdpZGV2aW5lJztcbmV4cG9ydCBkZWZhdWx0IGRhc2hqcy5GYWN0b3J5TWFrZXIuZ2V0U2luZ2xldG9uRmFjdG9yeShLZXlTeXN0ZW1XaWRldmluZSk7IC8qIGpzaGludCBpZ25vcmU6bGluZSAqL1xuIiwiLyoqXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbmltcG9ydCBFcnJvcnNCYXNlIGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL0Vycm9yc0Jhc2UnO1xuLyoqXG4gKiBAY2xhc3NcbiAqXG4gKi9cbmNsYXNzIFByb3RlY3Rpb25FcnJvcnMgZXh0ZW5kcyBFcnJvcnNCYXNlIHtcblx0Y29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgR2VuZXJpZCBrZXkgRXJyb3IgY29kZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5NRURJQV9LRVlFUlJfQ09ERSA9IDEwMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBFcnJvciBjb2RlIHJldHVybmVkIGJ5IGtleWVycm9yIGFwaSBmb3IgUHJvdGVjdGlvbk1vZGVsXzAxYlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5NRURJQV9LRVlFUlJfVU5LTk9XTl9DT0RFID0gMTAxO1xuICAgICAgICAvKipcbiAgICAgICAgICogIEVycm9yIGNvZGUgcmV0dXJuZWQgYnkga2V5ZXJyb3IgYXBpIGZvciBQcm90ZWN0aW9uTW9kZWxfMDFiXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLk1FRElBX0tFWUVSUl9DTElFTlRfQ09ERSA9IDEwMjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBFcnJvciBjb2RlIHJldHVybmVkIGJ5IGtleWVycm9yIGFwaSBmb3IgUHJvdGVjdGlvbk1vZGVsXzAxYlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5NRURJQV9LRVlFUlJfU0VSVklDRV9DT0RFID0gMTAzO1xuICAgICAgICAvKipcbiAgICAgICAgICogIEVycm9yIGNvZGUgcmV0dXJuZWQgYnkga2V5ZXJyb3IgYXBpIGZvciBQcm90ZWN0aW9uTW9kZWxfMDFiXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLk1FRElBX0tFWUVSUl9PVVRQVVRfQ09ERSA9IDEwNDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBFcnJvciBjb2RlIHJldHVybmVkIGJ5IGtleWVycm9yIGFwaSBmb3IgUHJvdGVjdGlvbk1vZGVsXzAxYlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5NRURJQV9LRVlFUlJfSEFSRFdBUkVDSEFOR0VfQ09ERSA9IDEwNTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBFcnJvciBjb2RlIHJldHVybmVkIGJ5IGtleWVycm9yIGFwaSBmb3IgUHJvdGVjdGlvbk1vZGVsXzAxYlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5NRURJQV9LRVlFUlJfRE9NQUlOX0NPREUgPSAxMDY7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICBFcnJvciBjb2RlIHJldHVybmVkIHdoZW4gYW4gZXJyb3Igb2NjdXJlZCBpbiBrZXltZXNzYWdlIGV2ZW50IGZvciBQcm90ZWN0aW9uTW9kZWxfMDFiXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLk1FRElBX0tFWV9NRVNTQUdFX0VSUk9SX0NPREUgPSAxMDc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgRXJyb3IgY29kZSByZXR1cm5lZCB3aGVuIGNoYWxsZW5nZSBpcyBpbnZhbGlkIGluIGtleW1lc3NhZ2UgZXZlbnQgKGV2ZW50IHRyaWdnZXJlZCBieSBDRE0pXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLk1FRElBX0tFWV9NRVNTQUdFX05PX0NIQUxMRU5HRV9FUlJPUl9DT0RFID0gMTA4O1xuICAgICAgICAvKipcbiAgICAgICAgICogIEVycm9yIGNvZGUgcmV0dXJuZWQgd2hlbiBMaWNlbnNlIHNlcnZlciBjZXJ0aWZpY2F0ZSBoYXMgbm90IGJlZW4gc3VjY2Vzc2Z1bGx5IHVwZGF0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuU0VSVkVSX0NFUlRJRklDQVRFX1VQREFURURfRVJST1JfQ09ERSA9IDEwOTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBFcnJvciBjb2RlIHJldHVybmVkIHdoZW4gbGljZW5zZSB2YWxpZGl0eSBoYXMgZXhwaXJlZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5LRVlfU1RBVFVTX0NIQU5HRURfRVhQSVJFRF9FUlJPUl9DT0RFID0gMTEwO1xuICAgICAgICAvKipcbiAgICAgICAgICogIEVycm9yIGNvZGUgcmV0dXJuZWQgd2hlbiBubyBsaWNlbnNlciB1cmwgaXMgZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5NRURJQV9LRVlfTUVTU0FHRV9OT19MSUNFTlNFX1NFUlZFUl9VUkxfRVJST1JfQ09ERSA9IDExMTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBFcnJvciBjb2RlIHJldHVybmVkIHdoZW4ga2V5IHN5c3RlbSBhY2Nlc3MgaXMgZGVuaWVkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLktFWV9TWVNURU1fQUNDRVNTX0RFTklFRF9FUlJPUl9DT0RFID0gMTEyO1xuICAgICAgICAvKipcbiAgICAgICAgICogIEVycm9yIGNvZGUgcmV0dXJuZWQgd2hlbiBrZXkgc2Vzc2lvbiBoYXMgbm90IGJlZW4gc3VjY2Vzc2Z1bGx5IGNyZWF0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuS0VZX1NFU1NJT05fQ1JFQVRFRF9FUlJPUl9DT0RFID0gMTEzO1xuICAgICAgICAvKipcbiAgICAgICAgICogIEVycm9yIGNvZGUgcmV0dXJuZWQgd2hlbiBsaWNlbnNlIHJlcXVlc3QgZmFpbGVkIGFmdGVyIGEga2V5bWVzc2FnZSBldmVudCBoYXMgYmVlbiB0cmlnZ2VyZWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuTUVESUFfS0VZX01FU1NBR0VfTElDRU5TRVJfRVJST1JfQ09ERSA9IDExNDtcblxuICAgICAgICB0aGlzLk1FRElBX0tFWUVSUl9VTktOT1dOX01FU1NBR0UgPSAnQW4gdW5zcGVjaWZpZWQgZXJyb3Igb2NjdXJyZWQuIFRoaXMgdmFsdWUgaXMgdXNlZCBmb3IgZXJyb3JzIHRoYXQgZG9uXFwndCBtYXRjaCBhbnkgb2YgdGhlIG90aGVyIGNvZGVzLic7XG4gICAgICAgIHRoaXMuTUVESUFfS0VZRVJSX0NMSUVOVF9NRVNTQUdFID0gJ1RoZSBLZXkgU3lzdGVtIGNvdWxkIG5vdCBiZSBpbnN0YWxsZWQgb3IgdXBkYXRlZC4nO1xuICAgICAgICB0aGlzLk1FRElBX0tFWUVSUl9TRVJWSUNFX01FU1NBR0UgPSAnVGhlIG1lc3NhZ2UgcGFzc2VkIGludG8gdXBkYXRlIGluZGljYXRlZCBhbiBlcnJvciBmcm9tIHRoZSBsaWNlbnNlIHNlcnZpY2UuJztcbiAgICAgICAgdGhpcy5NRURJQV9LRVlFUlJfT1VUUFVUX01FU1NBR0UgPSAnVGhlcmUgaXMgbm8gYXZhaWxhYmxlIG91dHB1dCBkZXZpY2Ugd2l0aCB0aGUgcmVxdWlyZWQgY2hhcmFjdGVyaXN0aWNzIGZvciB0aGUgY29udGVudCBwcm90ZWN0aW9uIHN5c3RlbS4nO1xuICAgICAgICB0aGlzLk1FRElBX0tFWUVSUl9IQVJEV0FSRUNIQU5HRV9NRVNTQUdFID0gJ0EgaGFyZHdhcmUgY29uZmlndXJhdGlvbiBjaGFuZ2UgY2F1c2VkIGEgY29udGVudCBwcm90ZWN0aW9uIGVycm9yLic7XG4gICAgICAgIHRoaXMuTUVESUFfS0VZRVJSX0RPTUFJTl9NRVNTQUdFID0gJ0FuIGVycm9yIG9jY3VycmVkIGluIGEgbXVsdGktZGV2aWNlIGRvbWFpbiBsaWNlbnNpbmcgY29uZmlndXJhdGlvbi4gVGhlIG1vc3QgY29tbW9uIGVycm9yIGlzIGEgZmFpbHVyZSB0byBqb2luIHRoZSBkb21haW4uJztcbiAgICAgICAgdGhpcy5NRURJQV9LRVlfTUVTU0FHRV9FUlJPUl9NRVNTQUdFID0gJ011bHRpcGxlIGtleSBzZXNzaW9ucyB3ZXJlIGNyZWF0ZXMgd2l0aCBhIHVzZXItYWdlbnQgdGhhdCBkb2VzIG5vdCBzdXBwb3J0IHNlc3Npb25JRHMhISBVbnByZWRpY3RhYmxlIGJlaGF2aW9yIGFoZWFkISc7XG4gICAgICAgIHRoaXMuTUVESUFfS0VZX01FU1NBR0VfTk9fQ0hBTExFTkdFX0VSUk9SX01FU1NBR0UgPSAnRFJNOiBFbXB0eSBrZXkgbWVzc2FnZSBmcm9tIENETSc7XG4gICAgICAgIHRoaXMuU0VSVkVSX0NFUlRJRklDQVRFX1VQREFURURfRVJST1JfTUVTU0FHRSA9ICdFcnJvciB1cGRhdGluZyBzZXJ2ZXIgY2VydGlmaWNhdGUgLS0gJztcbiAgICAgICAgdGhpcy5LRVlfU1RBVFVTX0NIQU5HRURfRVhQSVJFRF9FUlJPUl9NRVNTQUdFID0gJ0RSTTogS2V5U3RhdHVzQ2hhbmdlIGVycm9yISAtLSBMaWNlbnNlIGhhcyBleHBpcmVkJztcbiAgICAgICAgdGhpcy5NRURJQV9LRVlfTUVTU0FHRV9OT19MSUNFTlNFX1NFUlZFUl9VUkxfRVJST1JfTUVTU0FHRSA9ICdEUk06IE5vIGxpY2Vuc2Ugc2VydmVyIFVSTCBzcGVjaWZpZWQhJztcbiAgICAgICAgdGhpcy5LRVlfU1lTVEVNX0FDQ0VTU19ERU5JRURfRVJST1JfTUVTU0FHRSA9ICdEUk06IEtleVN5c3RlbSBBY2Nlc3MgRGVuaWVkISAtLSAnO1xuICAgICAgICB0aGlzLktFWV9TRVNTSU9OX0NSRUFURURfRVJST1JfTUVTU0FHRSA9ICdEUk06IHVuYWJsZSB0byBjcmVhdGUgc2Vzc2lvbiEgLS0nO1xuICAgICAgICB0aGlzLk1FRElBX0tFWV9NRVNTQUdFX0xJQ0VOU0VSX0VSUk9SX01FU1NBR0UgPSAnRFJNOiBsaWNlbnNlciBlcnJvciEgLS0nO1xuICAgIH1cbn1cblxubGV0IHByb3RlY3Rpb25FcnJvcnMgPSBuZXcgUHJvdGVjdGlvbkVycm9ycygpO1xuZXhwb3J0IGRlZmF1bHQgcHJvdGVjdGlvbkVycm9yczsiLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG4vKipcbiAqIEluaXRpYWwgaW1wbGVtZW50YXRpb24gb2YgRU1FXG4gKlxuICogSW1wbGVtZW50ZWQgYnkgR29vZ2xlIENocm9tZSBwcmlvciB0byB2MzZcbiAqXG4gKiBAaW1wbGVtZW50cyBQcm90ZWN0aW9uTW9kZWxcbiAqIEBjbGFzc1xuICovXG5pbXBvcnQgUHJvdGVjdGlvbktleUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvUHJvdGVjdGlvbktleUNvbnRyb2xsZXInO1xuaW1wb3J0IE5lZWRLZXkgZnJvbSAnLi4vdm8vTmVlZEtleSc7XG5pbXBvcnQgRGFzaEpTRXJyb3IgZnJvbSAnLi4vLi4vdm8vRGFzaEpTRXJyb3InO1xuaW1wb3J0IEtleU1lc3NhZ2UgZnJvbSAnLi4vdm8vS2V5TWVzc2FnZSc7XG5pbXBvcnQgS2V5U3lzdGVtQ29uZmlndXJhdGlvbiBmcm9tICcuLi92by9LZXlTeXN0ZW1Db25maWd1cmF0aW9uJztcbmltcG9ydCBLZXlTeXN0ZW1BY2Nlc3MgZnJvbSAnLi4vdm8vS2V5U3lzdGVtQWNjZXNzJztcbmltcG9ydCBQcm90ZWN0aW9uRXJyb3JzIGZyb20gJy4uL2Vycm9ycy9Qcm90ZWN0aW9uRXJyb3JzJztcblxuZnVuY3Rpb24gUHJvdGVjdGlvbk1vZGVsXzAxYihjb25maWcpIHtcblxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IGV2ZW50QnVzID0gY29uZmlnLmV2ZW50QnVzOy8vTmVlZCB0byBwYXNzIGluIGhlcmUgc28gd2UgY2FuIHVzZSBzYW1lIGluc3RhbmNlIHNpbmNlIHRoaXMgaXMgb3B0aW9uYWwgbW9kdWxlXG4gICAgY29uc3QgZXZlbnRzID0gY29uZmlnLmV2ZW50cztcbiAgICBjb25zdCBkZWJ1ZyA9IGNvbmZpZy5kZWJ1ZztcbiAgICBjb25zdCBhcGkgPSBjb25maWcuYXBpO1xuICAgIGNvbnN0IGVyckhhbmRsZXIgPSBjb25maWcuZXJySGFuZGxlcjtcblxuICAgIGxldCBpbnN0YW5jZSxcbiAgICAgICAgbG9nZ2VyLFxuICAgICAgICB2aWRlb0VsZW1lbnQsXG4gICAgICAgIGtleVN5c3RlbSxcbiAgICAgICAgcHJvdGVjdGlvbktleUNvbnRyb2xsZXIsXG5cbiAgICAgICAgLy8gV2l0aCB0aGlzIHZlcnNpb24gb2YgdGhlIEVNRSBBUElzLCBzZXNzaW9uSURzIGFyZSBub3QgYXNzaWduZWQgdG9cbiAgICAgICAgLy8gc2Vzc2lvbnMgdW50aWwgdGhlIGZpcnN0IGtleSBtZXNzYWdlIGlzIHJlY2VpdmVkLiAgV2UgYXJlIGFzc3VtaW5nXG4gICAgICAgIC8vIHRoYXQgaW4gdGhlIGNhc2Ugb2YgbXVsdGlwbGUgc2Vzc2lvbnMsIGtleSBtZXNzYWdlcyB3aWxsIGJlIHJlY2VpdmVkXG4gICAgICAgIC8vIGluIHRoZSBvcmRlciB0aGF0IGdlbmVyYXRlS2V5UmVxdWVzdCgpIGlzIGNhbGxlZC5cbiAgICAgICAgLy8gSG9sZGluZyBzcG90IGZvciBuZXdseS1jcmVhdGVkIHNlc3Npb25zIHVudGlsIHdlIGRldGVybWluZSB3aGV0aGVyIG9yXG4gICAgICAgIC8vIG5vdCB0aGUgQ0RNIHN1cHBvcnRzIHNlc3Npb25JRHNcbiAgICAgICAgcGVuZGluZ1Nlc3Npb25zLFxuXG4gICAgICAgIC8vIExpc3Qgb2Ygc2Vzc2lvbnMgdGhhdCBoYXZlIGJlZW4gaW5pdGlhbGl6ZWQuICBPbmx5IHRoZSBmaXJzdCBwb3NpdGlvbiB3aWxsXG4gICAgICAgIC8vIGJlIHVzZWQgaW4gdGhlIGNhc2UgdGhhdCB0aGUgQ0RNIGRvZXMgbm90IHN1cHBvcnQgc2Vzc2lvbklEc1xuICAgICAgICBzZXNzaW9ucyxcblxuICAgICAgICAvLyBOb3QgYWxsIENETXMgc3VwcG9ydCB0aGUgbm90aW9uIG9mIHNlc3Npb25JRHMuICBXaXRob3V0IHNlc3Npb25JRHNcbiAgICAgICAgLy8gdGhlcmUgaXMgbm8gd2F5IGZvciB1cyB0byBkaWZmZXJlbnRpYXRlIGJldHdlZW4gc2Vzc2lvbnMsIHRoZXJlZm9yZVxuICAgICAgICAvLyB3ZSBtdXN0IG9ubHkgYWxsb3cgYSBzaW5nbGUgc2Vzc2lvbi4gIE9uY2Ugd2UgcmVjZWl2ZSB0aGUgZmlyc3Qga2V5XG4gICAgICAgIC8vIG1lc3NhZ2Ugd2UgY2FuIHNldCB0aGlzIGZsYWcgdG8gZGV0ZXJtaW5lIGlmIG1vcmUgc2Vzc2lvbnMgYXJlIGFsbG93ZWRcbiAgICAgICAgbW9yZVNlc3Npb25zQWxsb3dlZCxcblxuICAgICAgICAvLyBUaGlzIGlzIG91ciBtYWluIGV2ZW50IGhhbmRsZXIgZm9yIGFsbCBkZXNpcmVkIEhUTUxNZWRpYUVsZW1lbnQgZXZlbnRzXG4gICAgICAgIC8vIHJlbGF0ZWQgdG8gRU1FLiAgVGhlc2UgZXZlbnRzIGFyZSB0cmFuc2xhdGVkIGludG8gb3VyIEFQSS1pbmRlcGVuZGVudFxuICAgICAgICAvLyB2ZXJzaW9ucyBvZiB0aGUgc2FtZSBldmVudHNcbiAgICAgICAgZXZlbnRIYW5kbGVyO1xuXG4gICAgZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgICAgIGxvZ2dlciA9IGRlYnVnLmdldExvZ2dlcihpbnN0YW5jZSk7XG4gICAgICAgIHZpZGVvRWxlbWVudCA9IG51bGw7XG4gICAgICAgIGtleVN5c3RlbSA9IG51bGw7XG4gICAgICAgIHBlbmRpbmdTZXNzaW9ucyA9IFtdO1xuICAgICAgICBzZXNzaW9ucyA9IFtdO1xuICAgICAgICBwcm90ZWN0aW9uS2V5Q29udHJvbGxlciA9IFByb3RlY3Rpb25LZXlDb250cm9sbGVyKGNvbnRleHQpLmdldEluc3RhbmNlKCk7XG4gICAgICAgIGV2ZW50SGFuZGxlciA9IGNyZWF0ZUV2ZW50SGFuZGxlcigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICBpZiAodmlkZW9FbGVtZW50KSB7XG4gICAgICAgICAgICByZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Vzc2lvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNsb3NlS2V5U2Vzc2lvbihzZXNzaW9uc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuVEVBUkRPV05fQ09NUExFVEUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEtleVN5c3RlbSgpIHtcbiAgICAgICAgcmV0dXJuIGtleVN5c3RlbTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRBbGxJbml0RGF0YSgpIHtcbiAgICAgICAgY29uc3QgcmV0VmFsID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGVuZGluZ1Nlc3Npb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXRWYWwucHVzaChwZW5kaW5nU2Vzc2lvbnNbaV0uaW5pdERhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Vzc2lvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJldFZhbC5wdXNoKHNlc3Npb25zW2ldLmluaXREYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0VmFsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcXVlc3RLZXlTeXN0ZW1BY2Nlc3Moa3NDb25maWd1cmF0aW9ucykge1xuICAgICAgICBsZXQgdmUgPSB2aWRlb0VsZW1lbnQ7XG4gICAgICAgIGlmICghdmUpIHsgLy8gTXVzdCBoYXZlIGEgdmlkZW8gZWxlbWVudCB0byBkbyB0aGlzIGNhcGFiaWxpdHkgdGVzdHNcbiAgICAgICAgICAgIHZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyeSBrZXkgc3lzdGVtcyBpbiBvcmRlciwgZmlyc3Qgb25lIHdpdGggc3VwcG9ydGVkIGtleSBzeXN0ZW0gY29uZmlndXJhdGlvblxuICAgICAgICAvLyBpcyB1c2VkXG4gICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBrc0lkeCA9IDA7IGtzSWR4IDwga3NDb25maWd1cmF0aW9ucy5sZW5ndGg7IGtzSWR4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN5c3RlbVN0cmluZyA9IGtzQ29uZmlndXJhdGlvbnNba3NJZHhdLmtzLnN5c3RlbVN0cmluZztcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZ3MgPSBrc0NvbmZpZ3VyYXRpb25zW2tzSWR4XS5jb25maWdzO1xuICAgICAgICAgICAgbGV0IHN1cHBvcnRlZEF1ZGlvID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBzdXBwb3J0ZWRWaWRlbyA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIFRyeSBrZXkgc3lzdGVtIGNvbmZpZ3MgaW4gb3JkZXIsIGZpcnN0IG9uZSB3aXRoIHN1cHBvcnRlZCBhdWRpby92aWRlb1xuICAgICAgICAgICAgLy8gaXMgdXNlZFxuICAgICAgICAgICAgZm9yIChsZXQgY29uZmlnSWR4ID0gMDsgY29uZmlnSWR4IDwgY29uZmlncy5sZW5ndGg7IGNvbmZpZ0lkeCsrKSB7XG4gICAgICAgICAgICAgICAgLy9sZXQgYXVkaW9zID0gY29uZmlnc1tjb25maWdJZHhdLmF1ZGlvQ2FwYWJpbGl0aWVzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvcyA9IGNvbmZpZ3NbY29uZmlnSWR4XS52aWRlb0NhcGFiaWxpdGllcztcbiAgICAgICAgICAgICAgICAvLyBMb29rIGZvciBzdXBwb3J0ZWQgdmlkZW8gY29udGFpbmVyL2NvZGVjc1xuICAgICAgICAgICAgICAgIGlmICh2aWRlb3MgJiYgdmlkZW9zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWRWaWRlbyA9IFtdOyAvLyBJbmRpY2F0ZXMgdGhhdCB3ZSBoYXZlIGEgcmVxdWVzdGVkIHZpZGVvIGNvbmZpZ1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB2aWRlb0lkeCA9IDA7IHZpZGVvSWR4IDwgdmlkZW9zLmxlbmd0aDsgdmlkZW9JZHgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZlLmNhblBsYXlUeXBlKHZpZGVvc1t2aWRlb0lkeF0uY29udGVudFR5cGUsIHN5c3RlbVN0cmluZykgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkVmlkZW8ucHVzaCh2aWRlb3NbdmlkZW9JZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE5vIHN1cHBvcnRlZCBhdWRpbyBvciB2aWRlbyBpbiB0aGlzIGNvbmZpZ3VyYXRpb24gT1Igd2UgaGF2ZVxuICAgICAgICAgICAgICAgIC8vIHJlcXVlc3RlZCBhdWRpbyBvciB2aWRlbyBjb25maWd1cmF0aW9uIHRoYXQgaXMgbm90IHN1cHBvcnRlZFxuICAgICAgICAgICAgICAgIGlmICgoIXN1cHBvcnRlZEF1ZGlvICYmICFzdXBwb3J0ZWRWaWRlbykgfHxcbiAgICAgICAgICAgICAgICAgICAgKHN1cHBvcnRlZEF1ZGlvICYmIHN1cHBvcnRlZEF1ZGlvLmxlbmd0aCA9PT0gMCkgfHxcbiAgICAgICAgICAgICAgICAgICAgKHN1cHBvcnRlZFZpZGVvICYmIHN1cHBvcnRlZFZpZGVvLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBjb25maWd1cmF0aW9uIGlzIHN1cHBvcnRlZFxuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBrc0NvbmZpZyA9IG5ldyBLZXlTeXN0ZW1Db25maWd1cmF0aW9uKHN1cHBvcnRlZEF1ZGlvLCBzdXBwb3J0ZWRWaWRlbyk7XG4gICAgICAgICAgICAgICAgY29uc3Qga3MgPSBwcm90ZWN0aW9uS2V5Q29udHJvbGxlci5nZXRLZXlTeXN0ZW1CeVN5c3RlbVN0cmluZyhzeXN0ZW1TdHJpbmcpO1xuICAgICAgICAgICAgICAgIGV2ZW50QnVzLnRyaWdnZXIoZXZlbnRzLktFWV9TWVNURU1fQUNDRVNTX0NPTVBMRVRFLCB7IGRhdGE6IG5ldyBLZXlTeXN0ZW1BY2Nlc3Moa3MsIGtzQ29uZmlnKSB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICBldmVudEJ1cy50cmlnZ2VyKGV2ZW50cy5LRVlfU1lTVEVNX0FDQ0VTU19DT01QTEVURSwge2Vycm9yOiAnS2V5IHN5c3RlbSBhY2Nlc3MgZGVuaWVkISAtLSBObyB2YWxpZCBhdWRpby92aWRlbyBjb250ZW50IGNvbmZpZ3VyYXRpb25zIGRldGVjdGVkISd9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbGVjdEtleVN5c3RlbShrZXlTeXN0ZW1BY2Nlc3MpIHtcbiAgICAgICAga2V5U3lzdGVtID0ga2V5U3lzdGVtQWNjZXNzLmtleVN5c3RlbTtcbiAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuSU5URVJOQUxfS0VZX1NZU1RFTV9TRUxFQ1RFRCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0TWVkaWFFbGVtZW50KG1lZGlhRWxlbWVudCkge1xuICAgICAgICBpZiAodmlkZW9FbGVtZW50ID09PSBtZWRpYUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlcGxhY2luZyB0aGUgcHJldmlvdXMgZWxlbWVudFxuICAgICAgICBpZiAodmlkZW9FbGVtZW50KSB7XG4gICAgICAgICAgICByZW1vdmVFdmVudExpc3RlbmVycygpO1xuXG4gICAgICAgICAgICAvLyBDbG9zZSBhbnkgb3BlbiBzZXNzaW9ucyAtIGF2b2lkcyBtZW1vcnkgbGVhayBvbiBMRyB3ZWJPUyAyMDE2LzIwMTcgVFZzXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlc3Npb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VLZXlTZXNzaW9uKHNlc3Npb25zW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlc3Npb25zID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB2aWRlb0VsZW1lbnQgPSBtZWRpYUVsZW1lbnQ7XG5cbiAgICAgICAgLy8gT25seSBpZiB3ZSBhcmUgbm90IGRldGFjaGluZyBmcm9tIHRoZSBleGlzdGluZyBlbGVtZW50XG4gICAgICAgIGlmICh2aWRlb0VsZW1lbnQpIHtcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGFwaS5rZXllcnJvciwgZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGFwaS5uZWVka2V5LCBldmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgdmlkZW9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoYXBpLmtleW1lc3NhZ2UsIGV2ZW50SGFuZGxlcik7XG4gICAgICAgICAgICB2aWRlb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihhcGkua2V5YWRkZWQsIGV2ZW50SGFuZGxlcik7XG4gICAgICAgICAgICBldmVudEJ1cy50cmlnZ2VyKGV2ZW50cy5WSURFT19FTEVNRU5UX1NFTEVDVEVEKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUtleVNlc3Npb24oaW5pdERhdGEgLyosIHByb3REYXRhLCBrZXlTeXN0ZW1UeXBlICovKSB7XG4gICAgICAgIGlmICgha2V5U3lzdGVtKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgY3JlYXRlIHNlc3Npb25zIHVudGlsIHlvdSBoYXZlIHNlbGVjdGVkIGEga2V5IHN5c3RlbScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIGNyZWF0aW5nIGEgbmV3IHNlc3Npb24gaXMgYWxsb3dlZFxuICAgICAgICBpZiAobW9yZVNlc3Npb25zQWxsb3dlZCB8fCBzZXNzaW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Nlc3Npb24gPSB7IC8vIEltcGxlbWVudHMgU2Vzc2lvblRva2VuXG4gICAgICAgICAgICAgICAgc2Vzc2lvbklEOiBudWxsLFxuICAgICAgICAgICAgICAgIGluaXREYXRhOiBpbml0RGF0YSxcbiAgICAgICAgICAgICAgICBnZXRTZXNzaW9uSUQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2Vzc2lvbklEO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBnZXRFeHBpcmF0aW9uVGltZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBnZXRTZXNzaW9uVHlwZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3RlbXBvcmFyeSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHBlbmRpbmdTZXNzaW9ucy5wdXNoKG5ld1Nlc3Npb24pO1xuXG4gICAgICAgICAgICAvLyBTZW5kIG91ciByZXF1ZXN0IHRvIHRoZSBDRE1cbiAgICAgICAgICAgIHZpZGVvRWxlbWVudFthcGkuZ2VuZXJhdGVLZXlSZXF1ZXN0XShrZXlTeXN0ZW0uc3lzdGVtU3RyaW5nLCBuZXcgVWludDhBcnJheShpbml0RGF0YSkpO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3U2Vzc2lvbjtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdWx0aXBsZSBzZXNzaW9ucyBub3QgYWxsb3dlZCEnKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlS2V5U2Vzc2lvbihzZXNzaW9uVG9rZW4sIG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbklEID0gc2Vzc2lvblRva2VuLnNlc3Npb25JRDtcbiAgICAgICAgaWYgKCFwcm90ZWN0aW9uS2V5Q29udHJvbGxlci5pc0NsZWFyS2V5KGtleVN5c3RlbSkpIHtcbiAgICAgICAgICAgIC8vIFNlbmQgb3VyIHJlcXVlc3QgdG8gdGhlIENETVxuICAgICAgICAgICAgdmlkZW9FbGVtZW50W2FwaS5hZGRLZXldKGtleVN5c3RlbS5zeXN0ZW1TdHJpbmcsXG4gICAgICAgICAgICAgICAgbmV3IFVpbnQ4QXJyYXkobWVzc2FnZSksIG5ldyBVaW50OEFycmF5KHNlc3Npb25Ub2tlbi5pbml0RGF0YSksIHNlc3Npb25JRCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBGb3IgY2xlYXJrZXksIG1lc3NhZ2UgaXMgYSBDbGVhcktleUtleVNldFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlLmtleVBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmlkZW9FbGVtZW50W2FwaS5hZGRLZXldKGtleVN5c3RlbS5zeXN0ZW1TdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uua2V5UGFpcnNbaV0ua2V5LCBtZXNzYWdlLmtleVBhaXJzW2ldLmtleUlELCBzZXNzaW9uSUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VLZXlTZXNzaW9uKHNlc3Npb25Ub2tlbikge1xuICAgICAgICAvLyBTZW5kIG91ciByZXF1ZXN0IHRvIHRoZSBDRE1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudFthcGkuY2FuY2VsS2V5UmVxdWVzdF0oa2V5U3lzdGVtLnN5c3RlbVN0cmluZywgc2Vzc2lvblRva2VuLnNlc3Npb25JRCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBldmVudEJ1cy50cmlnZ2VyKGV2ZW50cy5LRVlfU0VTU0lPTl9DTE9TRUQsIHtkYXRhOiBudWxsLCBlcnJvcjogJ0Vycm9yIGNsb3Npbmcgc2Vzc2lvbiAoJyArIHNlc3Npb25Ub2tlbi5zZXNzaW9uSUQgKyAnKSAnICsgZXJyb3IubWVzc2FnZX0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U2VydmVyQ2VydGlmaWNhdGUoLypzZXJ2ZXJDZXJ0aWZpY2F0ZSovKSB7IC8qIE5vdCBzdXBwb3J0ZWQgKi8gfVxuICAgIGZ1bmN0aW9uIGxvYWRLZXlTZXNzaW9uKC8qc2Vzc2lvbklEKi8pIHsgLyogTm90IHN1cHBvcnRlZCAqLyB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlS2V5U2Vzc2lvbigvKnNlc3Npb25Ub2tlbiovKSB7IC8qIE5vdCBzdXBwb3J0ZWQgKi8gfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRXZlbnRIYW5kbGVyKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGFuZGxlRXZlbnQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGxldCBzZXNzaW9uVG9rZW4gPSBudWxsO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGFwaS5uZWVka2V5OlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluaXREYXRhID0gQXJyYXlCdWZmZXIuaXNWaWV3KGV2ZW50LmluaXREYXRhKSA/IGV2ZW50LmluaXREYXRhLmJ1ZmZlciA6IGV2ZW50LmluaXREYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuTkVFRF9LRVksIHtrZXk6IG5ldyBOZWVkS2V5KGluaXREYXRhLCAnY2VuYycpfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIGFwaS5rZXllcnJvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25Ub2tlbiA9IGZpbmRTZXNzaW9uQnlJRChzZXNzaW9ucywgZXZlbnQuc2Vzc2lvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2Vzc2lvblRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblRva2VuID0gZmluZFNlc3Npb25CeUlEKHBlbmRpbmdTZXNzaW9ucywgZXZlbnQuc2Vzc2lvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlc3Npb25Ub2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2RlID0gUHJvdGVjdGlvbkVycm9ycy5NRURJQV9LRVlFUlJfQ09ERTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXNnID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChldmVudC5lcnJvckNvZGUuY29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlID0gUHJvdGVjdGlvbkVycm9ycy5NRURJQV9LRVlFUlJfVU5LTk9XTl9DT0RFO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnICs9ICdNRURJQV9LRVlFUlJfVU5LTk9XTiAtICcgKyBQcm90ZWN0aW9uRXJyb3JzLk1FRElBX0tFWUVSUl9VTktOT1dOX01FU1NBR0U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZSA9IFByb3RlY3Rpb25FcnJvcnMuTUVESUFfS0VZRVJSX0NMSUVOVF9DT0RFO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnICs9ICdNRURJQV9LRVlFUlJfQ0xJRU5UIC0gJyArIFByb3RlY3Rpb25FcnJvcnMuTUVESUFfS0VZRVJSX0NMSUVOVF9NRVNTQUdFO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGUgPSBQcm90ZWN0aW9uRXJyb3JzLk1FRElBX0tFWUVSUl9TRVJWSUNFX0NPREU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgKz0gJ01FRElBX0tFWUVSUl9TRVJWSUNFIC0gJyArIFByb3RlY3Rpb25FcnJvcnMuTUVESUFfS0VZRVJSX1NFUlZJQ0VfTUVTU0FHRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlID0gUHJvdGVjdGlvbkVycm9ycy5NRURJQV9LRVlFUlJfT1VUUFVUX0NPREU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgKz0gJ01FRElBX0tFWUVSUl9PVVRQVVQgLSAnICsgUHJvdGVjdGlvbkVycm9ycy5NRURJQV9LRVlFUlJfT1VUUFVUX01FU1NBR0U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZSA9IFByb3RlY3Rpb25FcnJvcnMuTUVESUFfS0VZRVJSX0hBUkRXQVJFQ0hBTkdFX0NPREU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgKz0gJ01FRElBX0tFWUVSUl9IQVJEV0FSRUNIQU5HRSAtICcgKyBQcm90ZWN0aW9uRXJyb3JzLk1FRElBX0tFWUVSUl9IQVJEV0FSRUNIQU5HRV9NRVNTQUdFO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGUgPSBQcm90ZWN0aW9uRXJyb3JzLk1FRElBX0tFWUVSUl9ET01BSU5fQ09ERTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyArPSAnTUVESUFfS0VZRVJSX0RPTUFJTiAtICcgKyBQcm90ZWN0aW9uRXJyb3JzLk1FRElBX0tFWUVSUl9ET01BSU5fTUVTU0FHRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgKz0gJyAgU3lzdGVtIENvZGUgPSAnICsgZXZlbnQuc3lzdGVtQ29kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBCdWlsZCBlcnJvciBzdHJpbmcgYmFzZWQgb24ga2V5IGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuS0VZX0VSUk9SLCB7ZGF0YTogbmV3IERhc2hKU0Vycm9yKGNvZGUsIG1zZywgc2Vzc2lvblRva2VuKX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoJ05vIHNlc3Npb24gdG9rZW4gZm91bmQgZm9yIGtleSBlcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBhcGkua2V5YWRkZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uVG9rZW4gPSBmaW5kU2Vzc2lvbkJ5SUQoc2Vzc2lvbnMsIGV2ZW50LnNlc3Npb25JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNlc3Npb25Ub2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25Ub2tlbiA9IGZpbmRTZXNzaW9uQnlJRChwZW5kaW5nU2Vzc2lvbnMsIGV2ZW50LnNlc3Npb25JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXNzaW9uVG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ0RSTTogS2V5IGFkZGVkLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50QnVzLnRyaWdnZXIoZXZlbnRzLktFWV9BRERFRCwge2RhdGE6IHNlc3Npb25Ub2tlbn0pOy8vVE9ETyBub3Qgc3VyZSBhbnl0aGluZyBpcyB1c2luZyBzZXNzaW9uVG9rZW4/IHdoeSB0aGVyZT9cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdObyBzZXNzaW9uIHRva2VuIGZvdW5kIGZvciBrZXkgYWRkZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgYXBpLmtleW1lc3NhZ2U6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIENETSBkb2VzIG5vdCBzdXBwb3J0IHNlc3Npb24gSURzLCB3ZSB3aWxsIGJlIGxpbWl0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgc2luZ2xlIHNlc3Npb25cbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcmVTZXNzaW9uc0FsbG93ZWQgPSAoZXZlbnQuc2Vzc2lvbklkICE9PSBudWxsKSAmJiAoZXZlbnQuc2Vzc2lvbklkICE9PSB1bmRlZmluZWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXNzaW9uSURzIHN1cHBvcnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vcmVTZXNzaW9uc0FsbG93ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBdHRlbXB0IHRvIGZpbmQgYW4gdW5pbml0aWFsaXplZCB0b2tlbiB3aXRoIHRoaXMgc2Vzc2lvbklEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblRva2VuID0gZmluZFNlc3Npb25CeUlEKHNlc3Npb25zLCBldmVudC5zZXNzaW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2Vzc2lvblRva2VuICYmIHBlbmRpbmdTZXNzaW9ucy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyB0aGUgZmlyc3QgbWVzc2FnZSBmb3Igb3VyIGxhdGVzdCBzZXNzaW9uLCBzbyBzZXQgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlc3Npb25JRCBhbmQgYWRkIGl0IHRvIG91ciBsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25Ub2tlbiA9IHBlbmRpbmdTZXNzaW9ucy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9ucy5wdXNoKHNlc3Npb25Ub2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25Ub2tlbi5zZXNzaW9uSUQgPSBldmVudC5zZXNzaW9uSWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuS0VZX1NFU1NJT05fQ1JFQVRFRCwge2RhdGE6IHNlc3Npb25Ub2tlbn0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGVuZGluZ1Nlc3Npb25zLmxlbmd0aCA+IDApIHsgLy8gU2Vzc2lvbklEcyBub3Qgc3VwcG9ydGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblRva2VuID0gcGVuZGluZ1Nlc3Npb25zLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbnMucHVzaChzZXNzaW9uVG9rZW4pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBlbmRpbmdTZXNzaW9ucy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJySGFuZGxlci5tZWRpYUtleU1lc3NhZ2VFcnJvcihQcm90ZWN0aW9uRXJyb3JzLk1FRElBX0tFWV9NRVNTQUdFX0VSUk9SX01FU1NBR0UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJIYW5kbGVyLmVycm9yKG5ldyBEYXNoSlNFcnJvcihQcm90ZWN0aW9uRXJyb3JzLk1FRElBX0tFWV9NRVNTQUdFX0VSUk9SX0NPREUsIFByb3RlY3Rpb25FcnJvcnMuTUVESUFfS0VZX01FU1NBR0VfRVJST1JfTUVTU0FHRSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlc3Npb25Ub2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gQXJyYXlCdWZmZXIuaXNWaWV3KGV2ZW50Lm1lc3NhZ2UpID8gZXZlbnQubWVzc2FnZS5idWZmZXIgOiBldmVudC5tZXNzYWdlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRm9yIENsZWFyS2V5LCB0aGUgc3BlYyBtYW5kYXRlcyB0aGF0IHlvdSBwYXNzIHRoaXMgbWVzc2FnZSB0byB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGRLZXkgbWV0aG9kLCBzbyB3ZSBhbHdheXMgc2F2ZSBpdCB0byB0aGUgdG9rZW4gc2luY2UgdGhlcmUgaXMgbm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3YXkgdG8gdGVsbCB3aGljaCBrZXkgc3lzdGVtIGlzIGluIHVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25Ub2tlbi5rZXlNZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEJ1cy50cmlnZ2VyKGV2ZW50cy5JTlRFUk5BTF9LRVlfTUVTU0FHRSwge2RhdGE6IG5ldyBLZXlNZXNzYWdlKHNlc3Npb25Ub2tlbiwgbWVzc2FnZSwgZXZlbnQuZGVmYXVsdFVSTCl9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIud2FybignTm8gc2Vzc2lvbiB0b2tlbiBmb3VuZCBmb3Iga2V5IG1lc3NhZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byByZXRyaWV2ZSB0aGUgc3RvcmVkIHNlc3Npb24gdG9rZW4gYmFzZWQgb24gYSBnaXZlblxuICAgICAqIHNlc3Npb25JRCB2YWx1ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gc2Vzc2lvbkFycmF5IC0gdGhlIGFycmF5IG9mIHNlc3Npb25zIHRvIHNlYXJjaFxuICAgICAqIEBwYXJhbSB7Kn0gc2Vzc2lvbklEIC0gdGhlIHNlc3Npb25JRCB0byBzZWFyY2ggZm9yXG4gICAgICogQHJldHVybnMgeyp9IHRoZSBzZXNzaW9uIHRva2VuIHdpdGggdGhlIGdpdmVuIHNlc3Npb25JRFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZpbmRTZXNzaW9uQnlJRChzZXNzaW9uQXJyYXksIHNlc3Npb25JRCkge1xuICAgICAgICBpZiAoIXNlc3Npb25JRCB8fCAhc2Vzc2lvbkFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IHNlc3Npb25BcnJheS5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlc3Npb25BcnJheVtpXS5zZXNzaW9uSUQgPT0gc2Vzc2lvbklEKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXNzaW9uQXJyYXlbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdmlkZW9FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoYXBpLmtleWVycm9yLCBldmVudEhhbmRsZXIpO1xuICAgICAgICB2aWRlb0VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihhcGkubmVlZGtleSwgZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgdmlkZW9FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoYXBpLmtleW1lc3NhZ2UsIGV2ZW50SGFuZGxlcik7XG4gICAgICAgIHZpZGVvRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGFwaS5rZXlhZGRlZCwgZXZlbnRIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZSA9IHtcbiAgICAgICAgZ2V0QWxsSW5pdERhdGE6IGdldEFsbEluaXREYXRhLFxuICAgICAgICByZXF1ZXN0S2V5U3lzdGVtQWNjZXNzOiByZXF1ZXN0S2V5U3lzdGVtQWNjZXNzLFxuICAgICAgICBnZXRLZXlTeXN0ZW06IGdldEtleVN5c3RlbSxcbiAgICAgICAgc2VsZWN0S2V5U3lzdGVtOiBzZWxlY3RLZXlTeXN0ZW0sXG4gICAgICAgIHNldE1lZGlhRWxlbWVudDogc2V0TWVkaWFFbGVtZW50LFxuICAgICAgICBjcmVhdGVLZXlTZXNzaW9uOiBjcmVhdGVLZXlTZXNzaW9uLFxuICAgICAgICB1cGRhdGVLZXlTZXNzaW9uOiB1cGRhdGVLZXlTZXNzaW9uLFxuICAgICAgICBjbG9zZUtleVNlc3Npb246IGNsb3NlS2V5U2Vzc2lvbixcbiAgICAgICAgc2V0U2VydmVyQ2VydGlmaWNhdGU6IHNldFNlcnZlckNlcnRpZmljYXRlLFxuICAgICAgICBsb2FkS2V5U2Vzc2lvbjogbG9hZEtleVNlc3Npb24sXG4gICAgICAgIHJlbW92ZUtleVNlc3Npb246IHJlbW92ZUtleVNlc3Npb24sXG4gICAgICAgIHN0b3A6IHJlc2V0LFxuICAgICAgICByZXNldDogcmVzZXRcbiAgICB9O1xuXG4gICAgc2V0dXAoKTtcblxuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuUHJvdGVjdGlvbk1vZGVsXzAxYi5fX2Rhc2hqc19mYWN0b3J5X25hbWUgPSAnUHJvdGVjdGlvbk1vZGVsXzAxYic7XG5leHBvcnQgZGVmYXVsdCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldENsYXNzRmFjdG9yeShQcm90ZWN0aW9uTW9kZWxfMDFiKTsgLyoganNoaW50IGlnbm9yZTpsaW5lICovXG4iLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG4vKipcbiAqIE1vc3QgcmVjZW50IEVNRSBpbXBsZW1lbnRhdGlvblxuICpcbiAqIEltcGxlbWVudGVkIGJ5IEdvb2dsZSBDaHJvbWUgdjM2KyAoV2luZG93cywgT1NYLCBMaW51eClcbiAqXG4gKiBAaW1wbGVtZW50cyBQcm90ZWN0aW9uTW9kZWxcbiAqIEBjbGFzc1xuICovXG5pbXBvcnQgUHJvdGVjdGlvbktleUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvUHJvdGVjdGlvbktleUNvbnRyb2xsZXInO1xuaW1wb3J0IE5lZWRLZXkgZnJvbSAnLi4vdm8vTmVlZEtleSc7XG5pbXBvcnQgUHJvdGVjdGlvbkVycm9ycyBmcm9tICcuLi9lcnJvcnMvUHJvdGVjdGlvbkVycm9ycyc7XG5pbXBvcnQgRGFzaEpTRXJyb3IgZnJvbSAnLi4vLi4vdm8vRGFzaEpTRXJyb3InO1xuaW1wb3J0IEtleU1lc3NhZ2UgZnJvbSAnLi4vdm8vS2V5TWVzc2FnZSc7XG5pbXBvcnQgS2V5U3lzdGVtQWNjZXNzIGZyb20gJy4uL3ZvL0tleVN5c3RlbUFjY2Vzcyc7XG5pbXBvcnQgUHJvdGVjdGlvbkNvbnN0YW50cyBmcm9tICcuLi8uLi9jb25zdGFudHMvUHJvdGVjdGlvbkNvbnN0YW50cyc7XG5cbmZ1bmN0aW9uIFByb3RlY3Rpb25Nb2RlbF8yMUphbjIwMTUoY29uZmlnKSB7XG5cbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCBldmVudEJ1cyA9IGNvbmZpZy5ldmVudEJ1czsvL05lZWQgdG8gcGFzcyBpbiBoZXJlIHNvIHdlIGNhbiB1c2Ugc2FtZSBpbnN0YW5jZSBzaW5jZSB0aGlzIGlzIG9wdGlvbmFsIG1vZHVsZVxuICAgIGNvbnN0IGV2ZW50cyA9IGNvbmZpZy5ldmVudHM7XG4gICAgY29uc3QgZGVidWcgPSBjb25maWcuZGVidWc7XG5cbiAgICBsZXQgaW5zdGFuY2UsXG4gICAgICAgIGxvZ2dlcixcbiAgICAgICAga2V5U3lzdGVtLFxuICAgICAgICB2aWRlb0VsZW1lbnQsXG4gICAgICAgIG1lZGlhS2V5cyxcbiAgICAgICAgc2Vzc2lvbnMsXG4gICAgICAgIGV2ZW50SGFuZGxlcixcbiAgICAgICAgcHJvdGVjdGlvbktleUNvbnRyb2xsZXI7XG5cbiAgICBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICAgICAgbG9nZ2VyID0gZGVidWcuZ2V0TG9nZ2VyKGluc3RhbmNlKTtcbiAgICAgICAga2V5U3lzdGVtID0gbnVsbDtcbiAgICAgICAgdmlkZW9FbGVtZW50ID0gbnVsbDtcbiAgICAgICAgbWVkaWFLZXlzID0gbnVsbDtcbiAgICAgICAgc2Vzc2lvbnMgPSBbXTtcbiAgICAgICAgcHJvdGVjdGlvbktleUNvbnRyb2xsZXIgPSBQcm90ZWN0aW9uS2V5Q29udHJvbGxlcihjb250ZXh0KS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBldmVudEhhbmRsZXIgPSBjcmVhdGVFdmVudEhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgY29uc3QgbnVtU2Vzc2lvbnMgPSBzZXNzaW9ucy5sZW5ndGg7XG4gICAgICAgIGxldCBzZXNzaW9uO1xuXG4gICAgICAgIGlmIChudW1TZXNzaW9ucyAhPT0gMCkge1xuICAgICAgICAgICAgLy8gQ2FsbGVkIHdoZW4gd2UgYXJlIGRvbmUgY2xvc2luZyBhIHNlc3Npb24uICBTdWNjZXNzIG9yIGZhaWxcbiAgICAgICAgICAgIGNvbnN0IGRvbmUgPSBmdW5jdGlvbiAoc2Vzc2lvbikge1xuICAgICAgICAgICAgICAgIHJlbW92ZVNlc3Npb24oc2Vzc2lvbik7XG4gICAgICAgICAgICAgICAgaWYgKHNlc3Npb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmlkZW9FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb0VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZW5jcnlwdGVkJywgZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvRWxlbWVudC5zZXRNZWRpYUtleXMobnVsbCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuVEVBUkRPV05fQ09NUExFVEUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudEJ1cy50cmlnZ2VyKGV2ZW50cy5URUFSRE9XTl9DT01QTEVURSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TZXNzaW9uczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2Vzc2lvbiA9IHNlc3Npb25zW2ldO1xuICAgICAgICAgICAgICAgIChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgICAgICAgICAvLyBPdmVycmlkZSBjbG9zZWQgcHJvbWlzZSByZXNvbHZlclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLnNlc3Npb24uY2xvc2VkLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZShzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIENsb3NlIHRoZSBzZXNzaW9uIGFuZCBoYW5kbGUgZXJyb3JzLCBvdGhlcndpc2UgcHJvbWlzZVxuICAgICAgICAgICAgICAgICAgICAvLyByZXNvbHZlciBhYm92ZSB3aWxsIGJlIGNhbGxlZFxuICAgICAgICAgICAgICAgICAgICBjbG9zZUtleVNlc3Npb25JbnRlcm5hbChzZXNzaW9uKS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lKHMpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH0pKHNlc3Npb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuVEVBUkRPV05fQ09NUExFVEUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgLy8gQ2xvc2UgYW5kIHJlbW92ZSBub3QgdXNhYmxlIHNlc3Npb25zXG4gICAgICAgIGxldCBzZXNzaW9uO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlc3Npb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzZXNzaW9uID0gc2Vzc2lvbnNbaV07XG4gICAgICAgICAgICBpZiAoIXNlc3Npb24uZ2V0VXNhYmxlKCkpIHtcbiAgICAgICAgICAgICAgICBjbG9zZUtleVNlc3Npb25JbnRlcm5hbChzZXNzaW9uKS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVNlc3Npb24oc2Vzc2lvbik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRLZXlTeXN0ZW0oKSB7XG4gICAgICAgIHJldHVybiBrZXlTeXN0ZW07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QWxsSW5pdERhdGEoKSB7XG4gICAgICAgIGNvbnN0IHJldFZhbCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlc3Npb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc2Vzc2lvbnNbaV0uaW5pdERhdGEpIHtcbiAgICAgICAgICAgICAgICByZXRWYWwucHVzaChzZXNzaW9uc1tpXS5pbml0RGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldFZhbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXF1ZXN0S2V5U3lzdGVtQWNjZXNzKGtzQ29uZmlndXJhdGlvbnMpIHtcbiAgICAgICAgcmVxdWVzdEtleVN5c3RlbUFjY2Vzc0ludGVybmFsKGtzQ29uZmlndXJhdGlvbnMsIDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbGVjdEtleVN5c3RlbShrZXlTeXN0ZW1BY2Nlc3MpIHtcbiAgICAgICAga2V5U3lzdGVtQWNjZXNzLm1rc2EuY3JlYXRlTWVkaWFLZXlzKCkudGhlbihmdW5jdGlvbiAobWtleXMpIHtcbiAgICAgICAgICAgIGtleVN5c3RlbSA9IGtleVN5c3RlbUFjY2Vzcy5rZXlTeXN0ZW07XG4gICAgICAgICAgICBtZWRpYUtleXMgPSBta2V5cztcbiAgICAgICAgICAgIGlmICh2aWRlb0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2aWRlb0VsZW1lbnQuc2V0TWVkaWFLZXlzKG1lZGlhS2V5cykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50QnVzLnRyaWdnZXIoZXZlbnRzLklOVEVSTkFMX0tFWV9TWVNURU1fU0VMRUNURUQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBldmVudEJ1cy50cmlnZ2VyKGV2ZW50cy5JTlRFUk5BTF9LRVlfU1lTVEVNX1NFTEVDVEVEKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBldmVudEJ1cy50cmlnZ2VyKGV2ZW50cy5JTlRFUk5BTF9LRVlfU1lTVEVNX1NFTEVDVEVELCB7ZXJyb3I6ICdFcnJvciBzZWxlY3Rpbmcga2V5cyBzeXN0ZW0gKCcgKyBrZXlTeXN0ZW1BY2Nlc3Mua2V5U3lzdGVtLnN5c3RlbVN0cmluZyArICcpISBDb3VsZCBub3QgY3JlYXRlIE1lZGlhS2V5cyAtLSBUT0RPJ30pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRNZWRpYUVsZW1lbnQobWVkaWFFbGVtZW50KSB7XG4gICAgICAgIGlmICh2aWRlb0VsZW1lbnQgPT09IG1lZGlhRWxlbWVudClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAvLyBSZXBsYWNpbmcgdGhlIHByZXZpb3VzIGVsZW1lbnRcbiAgICAgICAgaWYgKHZpZGVvRWxlbWVudCkge1xuICAgICAgICAgICAgdmlkZW9FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VuY3J5cHRlZCcsIGV2ZW50SGFuZGxlcik7XG4gICAgICAgICAgICBpZiAodmlkZW9FbGVtZW50LnNldE1lZGlhS2V5cykge1xuICAgICAgICAgICAgICAgIHZpZGVvRWxlbWVudC5zZXRNZWRpYUtleXMobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2aWRlb0VsZW1lbnQgPSBtZWRpYUVsZW1lbnQ7XG5cbiAgICAgICAgLy8gT25seSBpZiB3ZSBhcmUgbm90IGRldGFjaGluZyBmcm9tIHRoZSBleGlzdGluZyBlbGVtZW50XG4gICAgICAgIGlmICh2aWRlb0VsZW1lbnQpIHtcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdlbmNyeXB0ZWQnLCBldmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgaWYgKHZpZGVvRWxlbWVudC5zZXRNZWRpYUtleXMgJiYgbWVkaWFLZXlzKSB7XG4gICAgICAgICAgICAgICAgdmlkZW9FbGVtZW50LnNldE1lZGlhS2V5cyhtZWRpYUtleXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U2VydmVyQ2VydGlmaWNhdGUoc2VydmVyQ2VydGlmaWNhdGUpIHtcbiAgICAgICAgaWYgKCFrZXlTeXN0ZW0gfHwgIW1lZGlhS2V5cykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IHNldCBzZXJ2ZXIgY2VydGlmaWNhdGUgdW50aWwgeW91IGhhdmUgc2VsZWN0ZWQgYSBrZXkgc3lzdGVtJyk7XG4gICAgICAgIH1cbiAgICAgICAgbWVkaWFLZXlzLnNldFNlcnZlckNlcnRpZmljYXRlKHNlcnZlckNlcnRpZmljYXRlKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdEUk06IExpY2Vuc2Ugc2VydmVyIGNlcnRpZmljYXRlIHN1Y2Nlc3NmdWxseSB1cGRhdGVkLicpO1xuICAgICAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuU0VSVkVSX0NFUlRJRklDQVRFX1VQREFURUQpO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGV2ZW50QnVzLnRyaWdnZXIoZXZlbnRzLlNFUlZFUl9DRVJUSUZJQ0FURV9VUERBVEVELCB7ZXJyb3I6IG5ldyBEYXNoSlNFcnJvcihQcm90ZWN0aW9uRXJyb3JzLlNFUlZFUl9DRVJUSUZJQ0FURV9VUERBVEVEX0VSUk9SX0NPREUsIFByb3RlY3Rpb25FcnJvcnMuU0VSVkVSX0NFUlRJRklDQVRFX1VQREFURURfRVJST1JfTUVTU0FHRSArIGVycm9yLm5hbWUpfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUtleVNlc3Npb24oaW5pdERhdGEsIHByb3REYXRhLCBzZXNzaW9uVHlwZSkge1xuICAgICAgICBpZiAoIWtleVN5c3RlbSB8fCAhbWVkaWFLZXlzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgY3JlYXRlIHNlc3Npb25zIHVudGlsIHlvdSBoYXZlIHNlbGVjdGVkIGEga2V5IHN5c3RlbScpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IG1lZGlhS2V5cy5jcmVhdGVTZXNzaW9uKHNlc3Npb25UeXBlKTtcbiAgICAgICAgY29uc3Qgc2Vzc2lvblRva2VuID0gY3JlYXRlU2Vzc2lvblRva2VuKHNlc3Npb24sIGluaXREYXRhLCBzZXNzaW9uVHlwZSk7XG4gICAgICAgIGNvbnN0IGtzID0gdGhpcy5nZXRLZXlTeXN0ZW0oKTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBpbml0aWFsIGtleSByZXF1ZXN0LlxuICAgICAgICAvLyBrZXlpZHMgdHlwZSBpcyB1c2VkIGZvciBjbGVhcmtleSB3aGVuIGtleXMgYXJlIHByb3ZpZGVkIGRpcmVjdGx5IGluIHRoZSBwcm90ZWN0aW9uIGRhdGEgYW5kIHRoZW4gcmVxdWVzdCB0byBhIGxpY2Vuc2Ugc2VydmVyIGlzIG5vdCBuZWVkZWRcbiAgICAgICAgY29uc3QgZGF0YVR5cGUgPSBrcy5zeXN0ZW1TdHJpbmcgPT09IFByb3RlY3Rpb25Db25zdGFudHMuQ0xFQVJLRVlfS0VZU1RFTV9TVFJJTkcgJiYgcHJvdERhdGEgJiYgcHJvdERhdGEuY2xlYXJrZXlzID8gJ2tleWlkcycgOiAnY2VuYyc7XG4gICAgICAgIHNlc3Npb24uZ2VuZXJhdGVSZXF1ZXN0KGRhdGFUeXBlLCBpbml0RGF0YSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoJ0RSTTogU2Vzc2lvbiBjcmVhdGVkLiAgU2Vzc2lvbklEID0gJyArIHNlc3Npb25Ub2tlbi5nZXRTZXNzaW9uSUQoKSk7XG4gICAgICAgICAgICBldmVudEJ1cy50cmlnZ2VyKGV2ZW50cy5LRVlfU0VTU0lPTl9DUkVBVEVELCB7ZGF0YTogc2Vzc2lvblRva2VufSk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgLy8gVE9ETzogQmV0dGVyIGVycm9yIHN0cmluZ1xuICAgICAgICAgICAgcmVtb3ZlU2Vzc2lvbihzZXNzaW9uVG9rZW4pO1xuICAgICAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuS0VZX1NFU1NJT05fQ1JFQVRFRCwge2RhdGE6IG51bGwsIGVycm9yOiBuZXcgRGFzaEpTRXJyb3IoUHJvdGVjdGlvbkVycm9ycy5LRVlfU0VTU0lPTl9DUkVBVEVEX0VSUk9SX0NPREUsIFByb3RlY3Rpb25FcnJvcnMuS0VZX1NFU1NJT05fQ1JFQVRFRF9FUlJPUl9NRVNTQUdFICsgJ0Vycm9yIGdlbmVyYXRpbmcga2V5IHJlcXVlc3QgLS0gJyArIGVycm9yLm5hbWUpfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUtleVNlc3Npb24oc2Vzc2lvblRva2VuLCBtZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBzZXNzaW9uVG9rZW4uc2Vzc2lvbjtcblxuICAgICAgICAvLyBTZW5kIG91ciByZXF1ZXN0IHRvIHRoZSBrZXkgc2Vzc2lvblxuICAgICAgICBpZiAocHJvdGVjdGlvbktleUNvbnRyb2xsZXIuaXNDbGVhcktleShrZXlTeXN0ZW0pKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS50b0pXSygpO1xuICAgICAgICB9XG4gICAgICAgIHNlc3Npb24udXBkYXRlKG1lc3NhZ2UpLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuS0VZX0VSUk9SLCB7ZGF0YTogbmV3IERhc2hKU0Vycm9yKFByb3RlY3Rpb25FcnJvcnMuTUVESUFfS0VZRVJSX0NPREUsICdFcnJvciBzZW5kaW5nIHVwZGF0ZSgpIG1lc3NhZ2UhICcgKyBlcnJvci5uYW1lLCBzZXNzaW9uVG9rZW4pfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRLZXlTZXNzaW9uKHNlc3Npb25JRCwgaW5pdERhdGEsIHNlc3Npb25UeXBlKSB7XG4gICAgICAgIGlmICgha2V5U3lzdGVtIHx8ICFtZWRpYUtleXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBsb2FkIHNlc3Npb25zIHVudGlsIHlvdSBoYXZlIHNlbGVjdGVkIGEga2V5IHN5c3RlbScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgc2Vzc2lvbiBJZCBpcyBub3QgYWxyZWFkeSBsb2FkZWQgb3IgbG9hZGluZ1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlc3Npb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc2Vzc2lvbklEID09PSBzZXNzaW9uc1tpXS5zZXNzaW9uSWQpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIud2FybignRFJNOiBJZ25vcmluZyBzZXNzaW9uIElEIGJlY2F1c2Ugd2UgaGF2ZSBhbHJlYWR5IHNlZW4gaXQhJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IG1lZGlhS2V5cy5jcmVhdGVTZXNzaW9uKHNlc3Npb25UeXBlKTtcbiAgICAgICAgY29uc3Qgc2Vzc2lvblRva2VuID0gY3JlYXRlU2Vzc2lvblRva2VuKHNlc3Npb24sIGluaXREYXRhLCBzZXNzaW9uVHlwZSwgc2Vzc2lvbklEKTtcblxuICAgICAgICAvLyBMb2FkIHBlcnNpc3RlZCBzZXNzaW9uIGRhdGEgaW50byBvdXIgbmV3bHkgY3JlYXRlZCBzZXNzaW9uIG9iamVjdFxuICAgICAgICBzZXNzaW9uLmxvYWQoc2Vzc2lvbklEKS50aGVuKGZ1bmN0aW9uIChzdWNjZXNzKSB7XG4gICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnRFJNOiBTZXNzaW9uIGxvYWRlZC4gIFNlc3Npb25JRCA9ICcgKyBzZXNzaW9uVG9rZW4uZ2V0U2Vzc2lvbklEKCkpO1xuICAgICAgICAgICAgICAgIGV2ZW50QnVzLnRyaWdnZXIoZXZlbnRzLktFWV9TRVNTSU9OX0NSRUFURUQsIHtkYXRhOiBzZXNzaW9uVG9rZW59KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlU2Vzc2lvbihzZXNzaW9uVG9rZW4pO1xuICAgICAgICAgICAgICAgIGV2ZW50QnVzLnRyaWdnZXIoZXZlbnRzLktFWV9TRVNTSU9OX0NSRUFURUQsIHtkYXRhOiBudWxsLCBlcnJvcjogbmV3IERhc2hKU0Vycm9yKFByb3RlY3Rpb25FcnJvcnMuS0VZX1NFU1NJT05fQ1JFQVRFRF9FUlJPUl9DT0RFLCBQcm90ZWN0aW9uRXJyb3JzLktFWV9TRVNTSU9OX0NSRUFURURfRVJST1JfTUVTU0FHRSArICdDb3VsZCBub3QgbG9hZCBzZXNzaW9uISBJbnZhbGlkIFNlc3Npb24gSUQgKCcgKyBzZXNzaW9uSUQgKyAnKScpfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgcmVtb3ZlU2Vzc2lvbihzZXNzaW9uVG9rZW4pO1xuICAgICAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuS0VZX1NFU1NJT05fQ1JFQVRFRCwge2RhdGE6IG51bGwsIGVycm9yOiBuZXcgRGFzaEpTRXJyb3IoUHJvdGVjdGlvbkVycm9ycy5LRVlfU0VTU0lPTl9DUkVBVEVEX0VSUk9SX0NPREUsIFByb3RlY3Rpb25FcnJvcnMuS0VZX1NFU1NJT05fQ1JFQVRFRF9FUlJPUl9NRVNTQUdFICsgJ0NvdWxkIG5vdCBsb2FkIHNlc3Npb24gKCcgKyBzZXNzaW9uSUQgKyAnKSEgJyArIGVycm9yLm5hbWUpfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUtleVNlc3Npb24oc2Vzc2lvblRva2VuKSB7XG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBzZXNzaW9uVG9rZW4uc2Vzc2lvbjtcblxuICAgICAgICBzZXNzaW9uLnJlbW92ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdEUk06IFNlc3Npb24gcmVtb3ZlZC4gIFNlc3Npb25JRCA9ICcgKyBzZXNzaW9uVG9rZW4uZ2V0U2Vzc2lvbklEKCkpO1xuICAgICAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuS0VZX1NFU1NJT05fUkVNT1ZFRCwge2RhdGE6IHNlc3Npb25Ub2tlbi5nZXRTZXNzaW9uSUQoKX0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGV2ZW50QnVzLnRyaWdnZXIoZXZlbnRzLktFWV9TRVNTSU9OX1JFTU9WRUQsIHtkYXRhOiBudWxsLCBlcnJvcjogJ0Vycm9yIHJlbW92aW5nIHNlc3Npb24gKCcgKyBzZXNzaW9uVG9rZW4uZ2V0U2Vzc2lvbklEKCkgKyAnKS4gJyArIGVycm9yLm5hbWV9KTtcblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZUtleVNlc3Npb24oc2Vzc2lvblRva2VuKSB7XG4gICAgICAgIC8vIFNlbmQgb3VyIHJlcXVlc3QgdG8gdGhlIGtleSBzZXNzaW9uXG4gICAgICAgIGNsb3NlS2V5U2Vzc2lvbkludGVybmFsKHNlc3Npb25Ub2tlbikuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICByZW1vdmVTZXNzaW9uKHNlc3Npb25Ub2tlbik7XG4gICAgICAgICAgICBldmVudEJ1cy50cmlnZ2VyKGV2ZW50cy5LRVlfU0VTU0lPTl9DTE9TRUQsIHtkYXRhOiBudWxsLCBlcnJvcjogJ0Vycm9yIGNsb3Npbmcgc2Vzc2lvbiAoJyArIHNlc3Npb25Ub2tlbi5nZXRTZXNzaW9uSUQoKSArICcpICcgKyBlcnJvci5uYW1lfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcXVlc3RLZXlTeXN0ZW1BY2Nlc3NJbnRlcm5hbChrc0NvbmZpZ3VyYXRpb25zLCBpZHgpIHtcblxuICAgICAgICBpZiAobmF2aWdhdG9yLnJlcXVlc3RNZWRpYUtleVN5c3RlbUFjY2VzcyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICB0eXBlb2YgbmF2aWdhdG9yLnJlcXVlc3RNZWRpYUtleVN5c3RlbUFjY2VzcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuS0VZX1NZU1RFTV9BQ0NFU1NfQ09NUExFVEUsIHtlcnJvcjogJ0luc2VjdXJlIG9yaWdpbnMgYXJlIG5vdCBhbGxvd2VkJ30pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlTeXN0ZW0gPSBrc0NvbmZpZ3VyYXRpb25zW2ldLmtzO1xuICAgICAgICAgICAgY29uc3QgY29uZmlncyA9IGtzQ29uZmlndXJhdGlvbnNbaV0uY29uZmlncztcbiAgICAgICAgICAgIGxldCBzeXN0ZW1TdHJpbmcgPSBrZXlTeXN0ZW0uc3lzdGVtU3RyaW5nO1xuXG4gICAgICAgICAgICAvLyBQQVRDSCB0byBzdXBwb3J0IHBlcnNpc3RlbnQgbGljZW5zZXMgb24gRWRnZSBicm93c2VyIChzZWUgaXNzdWUgIzI2NTgpXG4gICAgICAgICAgICBpZiAoc3lzdGVtU3RyaW5nID09PSBQcm90ZWN0aW9uQ29uc3RhbnRzLlBMQVlSRUFEWV9LRVlTVEVNX1NUUklORyAmJiBjb25maWdzWzBdLnBlcnNpc3RlbnRTdGF0ZSA9PT0gJ3JlcXVpcmVkJykge1xuICAgICAgICAgICAgICAgIHN5c3RlbVN0cmluZyArPSAnLnJlY29tbWVuZGF0aW9uJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmF2aWdhdG9yLnJlcXVlc3RNZWRpYUtleVN5c3RlbUFjY2VzcyhzeXN0ZW1TdHJpbmcsIGNvbmZpZ3MpLnRoZW4oZnVuY3Rpb24gKG1lZGlhS2V5U3lzdGVtQWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hyb21lIDQwIGRvZXMgbm90IGN1cnJlbnRseSBpbXBsZW1lbnQgTWVkaWFLZXlTeXN0ZW1BY2Nlc3MuZ2V0Q29uZmlndXJhdGlvbigpXG4gICAgICAgICAgICAgICAgY29uc3QgY29uZmlndXJhdGlvbiA9ICh0eXBlb2YgbWVkaWFLZXlTeXN0ZW1BY2Nlc3MuZ2V0Q29uZmlndXJhdGlvbiA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWFLZXlTeXN0ZW1BY2Nlc3MuZ2V0Q29uZmlndXJhdGlvbigpIDogbnVsbDtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlTeXN0ZW1BY2Nlc3MgPSBuZXcgS2V5U3lzdGVtQWNjZXNzKGtleVN5c3RlbSwgY29uZmlndXJhdGlvbik7XG4gICAgICAgICAgICAgICAga2V5U3lzdGVtQWNjZXNzLm1rc2EgPSBtZWRpYUtleVN5c3RlbUFjY2VzcztcbiAgICAgICAgICAgICAgICBldmVudEJ1cy50cmlnZ2VyKGV2ZW50cy5LRVlfU1lTVEVNX0FDQ0VTU19DT01QTEVURSwge2RhdGE6IGtleVN5c3RlbUFjY2Vzc30pO1xuXG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoKytpIDwga3NDb25maWd1cmF0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEtleVN5c3RlbUFjY2Vzc0ludGVybmFsKGtzQ29uZmlndXJhdGlvbnMsIGkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50QnVzLnRyaWdnZXIoZXZlbnRzLktFWV9TWVNURU1fQUNDRVNTX0NPTVBMRVRFLCB7ZXJyb3I6ICdLZXkgc3lzdGVtIGFjY2VzcyBkZW5pZWQhICcgKyBlcnJvci5tZXNzYWdlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKGlkeCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VLZXlTZXNzaW9uSW50ZXJuYWwoc2Vzc2lvblRva2VuKSB7XG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBzZXNzaW9uVG9rZW4uc2Vzc2lvbjtcblxuICAgICAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgIHNlc3Npb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5c3RhdHVzZXNjaGFuZ2UnLCBzZXNzaW9uVG9rZW4pO1xuICAgICAgICBzZXNzaW9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBzZXNzaW9uVG9rZW4pO1xuXG4gICAgICAgIC8vIFNlbmQgb3VyIHJlcXVlc3QgdG8gdGhlIGtleSBzZXNzaW9uXG4gICAgICAgIHJldHVybiBzZXNzaW9uLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBpcyBvdXIgbWFpbiBldmVudCBoYW5kbGVyIGZvciBhbGwgZGVzaXJlZCBIVE1MTWVkaWFFbGVtZW50IGV2ZW50c1xuICAgIC8vIHJlbGF0ZWQgdG8gRU1FLiAgVGhlc2UgZXZlbnRzIGFyZSB0cmFuc2xhdGVkIGludG8gb3VyIEFQSS1pbmRlcGVuZGVudFxuICAgIC8vIHZlcnNpb25zIG9mIHRoZSBzYW1lIGV2ZW50c1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhhbmRsZUV2ZW50OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5jcnlwdGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5pbml0RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbml0RGF0YSA9IEFycmF5QnVmZmVyLmlzVmlldyhldmVudC5pbml0RGF0YSkgPyBldmVudC5pbml0RGF0YS5idWZmZXIgOiBldmVudC5pbml0RGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEJ1cy50cmlnZ2VyKGV2ZW50cy5ORUVEX0tFWSwge2tleTogbmV3IE5lZWRLZXkoaW5pdERhdGEsIGV2ZW50LmluaXREYXRhVHlwZSl9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVTZXNzaW9uKHRva2VuKSB7XG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIG91ciBzZXNzaW9uIGxpc3RcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXNzaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNlc3Npb25zW2ldID09PSB0b2tlbikge1xuICAgICAgICAgICAgICAgIHNlc3Npb25zLnNwbGljZShpLDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VLZXlTdGF0dXMoYXJncykge1xuICAgICAgICAvLyBFZGdlIGFuZCBDaHJvbWUgaW1wbGVtZW50IGRpZmZlcmVudCB2ZXJzaW9uIG9mIGtleXN0YXR1ZXMsIHBhcmFtIGFyZSBub3Qgb24gc2FtZSBvcmRlclxuICAgICAgICBsZXQgc3RhdHVzLCBrZXlJZDtcbiAgICAgICAgaWYgKGFyZ3MgJiYgYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoYXJnc1swXSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0gYXJnc1swXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBrZXlJZCA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYXJnc1sxXSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0gYXJnc1sxXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBrZXlJZCA9IGFyZ3NbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICAgIGtleUlkOiBrZXlJZFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBvdXIgc2Vzc2lvbiB0b2tlbiBvYmplY3RzIHdoaWNoIG1hbmFnZSB0aGUgRU1FXG4gICAgLy8gTWVkaWFLZXlTZXNzaW9uIGFuZCBzZXNzaW9uLXNwZWNpZmljIGV2ZW50IGhhbmRsZXJcbiAgICBmdW5jdGlvbiBjcmVhdGVTZXNzaW9uVG9rZW4oc2Vzc2lvbiwgaW5pdERhdGEsIHNlc3Npb25UeXBlLCBzZXNzaW9uSUQpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSB7IC8vIEltcGxlbWVudHMgU2Vzc2lvblRva2VuXG4gICAgICAgICAgICBzZXNzaW9uOiBzZXNzaW9uLFxuICAgICAgICAgICAgaW5pdERhdGE6IGluaXREYXRhLFxuICAgICAgICAgICAgc2Vzc2lvbklkOiBzZXNzaW9uSUQsXG5cbiAgICAgICAgICAgIC8vIFRoaXMgaXMgb3VyIG1haW4gZXZlbnQgaGFuZGxlciBmb3IgYWxsIGRlc2lyZWQgTWVkaWFLZXlTZXNzaW9uIGV2ZW50c1xuICAgICAgICAgICAgLy8gVGhlc2UgZXZlbnRzIGFyZSB0cmFuc2xhdGVkIGludG8gb3VyIEFQSS1pbmRlcGVuZGVudCB2ZXJzaW9ucyBvZiB0aGVcbiAgICAgICAgICAgIC8vIHNhbWUgZXZlbnRzXG4gICAgICAgICAgICBoYW5kbGVFdmVudDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2tleXN0YXR1c2VzY2hhbmdlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50QnVzLnRyaWdnZXIoZXZlbnRzLktFWV9TVEFUVVNFU19DSEFOR0VELCB7ZGF0YTogdGhpc30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmtleVN0YXR1c2VzLmZvckVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXlTdGF0dXMgPSBwYXJzZUtleVN0YXR1cyhhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5U3RhdHVzLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdleHBpcmVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50QnVzLnRyaWdnZXIoZXZlbnRzLklOVEVSTkFMX0tFWV9TVEFUVVNfQ0hBTkdFRCwge2Vycm9yOiBuZXcgRGFzaEpTRXJyb3IoUHJvdGVjdGlvbkVycm9ycy5LRVlfU1RBVFVTX0NIQU5HRURfRVhQSVJFRF9FUlJPUl9DT0RFLCBQcm90ZWN0aW9uRXJyb3JzLktFWV9TVEFUVVNfQ0hBTkdFRF9FWFBJUkVEX0VSUk9SX01FU1NBR0UpfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50QnVzLnRyaWdnZXIoZXZlbnRzLklOVEVSTkFMX0tFWV9TVEFUVVNfQ0hBTkdFRCwga2V5U3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWVzc2FnZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IEFycmF5QnVmZmVyLmlzVmlldyhldmVudC5tZXNzYWdlKSA/IGV2ZW50Lm1lc3NhZ2UuYnVmZmVyIDogZXZlbnQubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50QnVzLnRyaWdnZXIoZXZlbnRzLklOVEVSTkFMX0tFWV9NRVNTQUdFLCB7ZGF0YTogbmV3IEtleU1lc3NhZ2UodGhpcywgbWVzc2FnZSwgdW5kZWZpbmVkLCBldmVudC5tZXNzYWdlVHlwZSl9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdldFNlc3Npb25JRDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXNzaW9uLnNlc3Npb25JZDtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdldEV4cGlyYXRpb25UaW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlc3Npb24uZXhwaXJhdGlvbjtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdldEtleVN0YXR1c2VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlc3Npb24ua2V5U3RhdHVzZXM7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBnZXRVc2FibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdXNhYmxlICA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNlc3Npb24ua2V5U3RhdHVzZXMuZm9yRWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXlTdGF0dXMgPSBwYXJzZUtleVN0YXR1cyhhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5U3RhdHVzLnN0YXR1cyA9PT0gJ3VzYWJsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzYWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNhYmxlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZ2V0U2Vzc2lvblR5cGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Vzc2lvblR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQWRkIGFsbCBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgc2Vzc2lvbi5hZGRFdmVudExpc3RlbmVyKCdrZXlzdGF0dXNlc2NoYW5nZScsIHRva2VuKTtcbiAgICAgICAgc2Vzc2lvbi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdG9rZW4pO1xuXG4gICAgICAgIC8vIFJlZ2lzdGVyIGNhbGxiYWNrIGZvciBzZXNzaW9uIGNsb3NlZCBQcm9taXNlXG4gICAgICAgIHNlc3Npb24uY2xvc2VkLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVtb3ZlU2Vzc2lvbih0b2tlbik7XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoJ0RSTTogU2Vzc2lvbiBjbG9zZWQuICBTZXNzaW9uSUQgPSAnICsgdG9rZW4uZ2V0U2Vzc2lvbklEKCkpO1xuICAgICAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuS0VZX1NFU1NJT05fQ0xPU0VELCB7ZGF0YTogdG9rZW4uZ2V0U2Vzc2lvbklEKCl9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIHRvIG91ciBzZXNzaW9uIGxpc3RcbiAgICAgICAgc2Vzc2lvbnMucHVzaCh0b2tlbik7XG5cbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cblxuICAgIGluc3RhbmNlID0ge1xuICAgICAgICBnZXRBbGxJbml0RGF0YTogZ2V0QWxsSW5pdERhdGEsXG4gICAgICAgIHJlcXVlc3RLZXlTeXN0ZW1BY2Nlc3M6IHJlcXVlc3RLZXlTeXN0ZW1BY2Nlc3MsXG4gICAgICAgIGdldEtleVN5c3RlbTogZ2V0S2V5U3lzdGVtLFxuICAgICAgICBzZWxlY3RLZXlTeXN0ZW06IHNlbGVjdEtleVN5c3RlbSxcbiAgICAgICAgc2V0TWVkaWFFbGVtZW50OiBzZXRNZWRpYUVsZW1lbnQsXG4gICAgICAgIHNldFNlcnZlckNlcnRpZmljYXRlOiBzZXRTZXJ2ZXJDZXJ0aWZpY2F0ZSxcbiAgICAgICAgY3JlYXRlS2V5U2Vzc2lvbjogY3JlYXRlS2V5U2Vzc2lvbixcbiAgICAgICAgdXBkYXRlS2V5U2Vzc2lvbjogdXBkYXRlS2V5U2Vzc2lvbixcbiAgICAgICAgbG9hZEtleVNlc3Npb246IGxvYWRLZXlTZXNzaW9uLFxuICAgICAgICByZW1vdmVLZXlTZXNzaW9uOiByZW1vdmVLZXlTZXNzaW9uLFxuICAgICAgICBjbG9zZUtleVNlc3Npb246IGNsb3NlS2V5U2Vzc2lvbixcbiAgICAgICAgc3RvcDogc3RvcCxcbiAgICAgICAgcmVzZXQ6IHJlc2V0XG4gICAgfTtcblxuICAgIHNldHVwKCk7XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cblByb3RlY3Rpb25Nb2RlbF8yMUphbjIwMTUuX19kYXNoanNfZmFjdG9yeV9uYW1lID0gJ1Byb3RlY3Rpb25Nb2RlbF8yMUphbjIwMTUnO1xuZXhwb3J0IGRlZmF1bHQgZGFzaGpzLkZhY3RvcnlNYWtlci5nZXRDbGFzc0ZhY3RvcnkoUHJvdGVjdGlvbk1vZGVsXzIxSmFuMjAxNSk7IC8qIGpzaGludCBpZ25vcmU6bGluZSAqL1xuIiwiLyoqXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgRU1FIEFQSXMgYXMgb2YgdGhlIDMgRmViIDIwMTQgc3RhdGUgb2YgdGhlIHNwZWNpZmljYXRpb24uXG4gKlxuICogSW1wbGVtZW50ZWQgYnkgSW50ZXJuZXQgRXhwbG9yZXIgMTEgKFdpbmRvd3MgOC4xKVxuICpcbiAqIEBpbXBsZW1lbnRzIFByb3RlY3Rpb25Nb2RlbFxuICogQGNsYXNzXG4gKi9cblxuaW1wb3J0IFByb3RlY3Rpb25LZXlDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL1Byb3RlY3Rpb25LZXlDb250cm9sbGVyJztcbmltcG9ydCBOZWVkS2V5IGZyb20gJy4uL3ZvL05lZWRLZXknO1xuaW1wb3J0IERhc2hKU0Vycm9yIGZyb20gJy4uLy4uL3ZvL0Rhc2hKU0Vycm9yJztcbmltcG9ydCBQcm90ZWN0aW9uRXJyb3JzIGZyb20gJy4uL2Vycm9ycy9Qcm90ZWN0aW9uRXJyb3JzJztcbmltcG9ydCBLZXlNZXNzYWdlIGZyb20gJy4uL3ZvL0tleU1lc3NhZ2UnO1xuaW1wb3J0IEtleVN5c3RlbUNvbmZpZ3VyYXRpb24gZnJvbSAnLi4vdm8vS2V5U3lzdGVtQ29uZmlndXJhdGlvbic7XG5pbXBvcnQgS2V5U3lzdGVtQWNjZXNzIGZyb20gJy4uL3ZvL0tleVN5c3RlbUFjY2Vzcyc7XG5cbmZ1bmN0aW9uIFByb3RlY3Rpb25Nb2RlbF8zRmViMjAxNChjb25maWcpIHtcblxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IGV2ZW50QnVzID0gY29uZmlnLmV2ZW50QnVzOy8vTmVlZCB0byBwYXNzIGluIGhlcmUgc28gd2UgY2FuIHVzZSBzYW1lIGluc3RhbmNlIHNpbmNlIHRoaXMgaXMgb3B0aW9uYWwgbW9kdWxlXG4gICAgY29uc3QgZXZlbnRzID0gY29uZmlnLmV2ZW50cztcbiAgICBjb25zdCBkZWJ1ZyA9IGNvbmZpZy5kZWJ1ZztcbiAgICBjb25zdCBhcGkgPSBjb25maWcuYXBpO1xuXG4gICAgbGV0IGluc3RhbmNlLFxuICAgICAgICBsb2dnZXIsXG4gICAgICAgIHZpZGVvRWxlbWVudCxcbiAgICAgICAga2V5U3lzdGVtLFxuICAgICAgICBtZWRpYUtleXMsXG4gICAgICAgIGtleVN5c3RlbUFjY2VzcyxcbiAgICAgICAgc2Vzc2lvbnMsXG4gICAgICAgIGV2ZW50SGFuZGxlcixcbiAgICAgICAgcHJvdGVjdGlvbktleUNvbnRyb2xsZXI7XG5cbiAgICBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICAgICAgbG9nZ2VyID0gZGVidWcuZ2V0TG9nZ2VyKGluc3RhbmNlKTtcbiAgICAgICAgdmlkZW9FbGVtZW50ID0gbnVsbDtcbiAgICAgICAga2V5U3lzdGVtID0gbnVsbDtcbiAgICAgICAgbWVkaWFLZXlzID0gbnVsbDtcbiAgICAgICAga2V5U3lzdGVtQWNjZXNzID0gbnVsbDtcbiAgICAgICAgc2Vzc2lvbnMgPSBbXTtcbiAgICAgICAgcHJvdGVjdGlvbktleUNvbnRyb2xsZXIgPSBQcm90ZWN0aW9uS2V5Q29udHJvbGxlcihjb250ZXh0KS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBldmVudEhhbmRsZXIgPSBjcmVhdGVFdmVudEhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Vzc2lvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjbG9zZUtleVNlc3Npb24oc2Vzc2lvbnNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZpZGVvRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZpZGVvRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGFwaS5uZWVka2V5LCBldmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuVEVBUkRPV05fQ09NUExFVEUpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuVEVBUkRPV05fQ09NUExFVEUsIHsgZXJyb3I6ICdFcnJvciB0ZWFyaW5nIGRvd24ga2V5IHNlc3Npb25zIGFuZCBNZWRpYUtleXMhIC0tICcgKyBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0S2V5U3lzdGVtKCkge1xuICAgICAgICByZXR1cm4ga2V5U3lzdGVtO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEFsbEluaXREYXRhKCkge1xuICAgICAgICBjb25zdCByZXRWYWwgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXNzaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmV0VmFsLnB1c2goc2Vzc2lvbnNbaV0uaW5pdERhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXRWYWw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVxdWVzdEtleVN5c3RlbUFjY2Vzcyhrc0NvbmZpZ3VyYXRpb25zKSB7XG5cbiAgICAgICAgLy8gVHJ5IGtleSBzeXN0ZW1zIGluIG9yZGVyLCBmaXJzdCBvbmUgd2l0aCBzdXBwb3J0ZWQga2V5IHN5c3RlbSBjb25maWd1cmF0aW9uXG4gICAgICAgIC8vIGlzIHVzZWRcbiAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGtzSWR4ID0gMDsga3NJZHggPCBrc0NvbmZpZ3VyYXRpb25zLmxlbmd0aDsga3NJZHgrKykge1xuICAgICAgICAgICAgY29uc3Qgc3lzdGVtU3RyaW5nID0ga3NDb25maWd1cmF0aW9uc1trc0lkeF0ua3Muc3lzdGVtU3RyaW5nO1xuICAgICAgICAgICAgY29uc3QgY29uZmlncyA9IGtzQ29uZmlndXJhdGlvbnNba3NJZHhdLmNvbmZpZ3M7XG4gICAgICAgICAgICBsZXQgc3VwcG9ydGVkQXVkaW8gPSBudWxsO1xuICAgICAgICAgICAgbGV0IHN1cHBvcnRlZFZpZGVvID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gVHJ5IGtleSBzeXN0ZW0gY29uZmlncyBpbiBvcmRlciwgZmlyc3Qgb25lIHdpdGggc3VwcG9ydGVkIGF1ZGlvL3ZpZGVvXG4gICAgICAgICAgICAvLyBpcyB1c2VkXG4gICAgICAgICAgICBmb3IgKGxldCBjb25maWdJZHggPSAwOyBjb25maWdJZHggPCBjb25maWdzLmxlbmd0aDsgY29uZmlnSWR4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdWRpb3MgPSBjb25maWdzW2NvbmZpZ0lkeF0uYXVkaW9DYXBhYmlsaXRpZXM7XG4gICAgICAgICAgICAgICAgY29uc3QgdmlkZW9zID0gY29uZmlnc1tjb25maWdJZHhdLnZpZGVvQ2FwYWJpbGl0aWVzO1xuXG4gICAgICAgICAgICAgICAgLy8gTG9vayBmb3Igc3VwcG9ydGVkIGF1ZGlvIGNvbnRhaW5lci9jb2RlY3NcbiAgICAgICAgICAgICAgICBpZiAoYXVkaW9zICYmIGF1ZGlvcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkQXVkaW8gPSBbXTsgLy8gSW5kaWNhdGVzIHRoYXQgd2UgaGF2ZSBhIHJlcXVlc3RlZCBhdWRpbyBjb25maWdcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYXVkaW9JZHggPSAwOyBhdWRpb0lkeCA8IGF1ZGlvcy5sZW5ndGg7IGF1ZGlvSWR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3dbYXBpLk1lZGlhS2V5c10uaXNUeXBlU3VwcG9ydGVkKHN5c3RlbVN0cmluZywgYXVkaW9zW2F1ZGlvSWR4XS5jb250ZW50VHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWRBdWRpby5wdXNoKGF1ZGlvc1thdWRpb0lkeF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTG9vayBmb3Igc3VwcG9ydGVkIHZpZGVvIGNvbnRhaW5lci9jb2RlY3NcbiAgICAgICAgICAgICAgICBpZiAodmlkZW9zICYmIHZpZGVvcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkVmlkZW8gPSBbXTsgLy8gSW5kaWNhdGVzIHRoYXQgd2UgaGF2ZSBhIHJlcXVlc3RlZCB2aWRlbyBjb25maWdcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdmlkZW9JZHggPSAwOyB2aWRlb0lkeCA8IHZpZGVvcy5sZW5ndGg7IHZpZGVvSWR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3dbYXBpLk1lZGlhS2V5c10uaXNUeXBlU3VwcG9ydGVkKHN5c3RlbVN0cmluZywgdmlkZW9zW3ZpZGVvSWR4XS5jb250ZW50VHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWRWaWRlby5wdXNoKHZpZGVvc1t2aWRlb0lkeF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTm8gc3VwcG9ydGVkIGF1ZGlvIG9yIHZpZGVvIGluIHRoaXMgY29uZmlndXJhdGlvbiBPUiB3ZSBoYXZlXG4gICAgICAgICAgICAgICAgLy8gcmVxdWVzdGVkIGF1ZGlvIG9yIHZpZGVvIGNvbmZpZ3VyYXRpb24gdGhhdCBpcyBub3Qgc3VwcG9ydGVkXG4gICAgICAgICAgICAgICAgaWYgKCghc3VwcG9ydGVkQXVkaW8gJiYgIXN1cHBvcnRlZFZpZGVvKSB8fFxuICAgICAgICAgICAgICAgICAgICAoc3VwcG9ydGVkQXVkaW8gJiYgc3VwcG9ydGVkQXVkaW8ubGVuZ3RoID09PSAwKSB8fFxuICAgICAgICAgICAgICAgICAgICAoc3VwcG9ydGVkVmlkZW8gJiYgc3VwcG9ydGVkVmlkZW8ubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBUaGlzIGNvbmZpZ3VyYXRpb24gaXMgc3VwcG9ydGVkXG4gICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtzQ29uZmlnID0gbmV3IEtleVN5c3RlbUNvbmZpZ3VyYXRpb24oc3VwcG9ydGVkQXVkaW8sIHN1cHBvcnRlZFZpZGVvKTtcbiAgICAgICAgICAgICAgICBjb25zdCBrcyA9IHByb3RlY3Rpb25LZXlDb250cm9sbGVyLmdldEtleVN5c3RlbUJ5U3lzdGVtU3RyaW5nKHN5c3RlbVN0cmluZyk7XG4gICAgICAgICAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuS0VZX1NZU1RFTV9BQ0NFU1NfQ09NUExFVEUsIHsgZGF0YTogbmV3IEtleVN5c3RlbUFjY2Vzcyhrcywga3NDb25maWcpIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgIGV2ZW50QnVzLnRyaWdnZXIoZXZlbnRzLktFWV9TWVNURU1fQUNDRVNTX0NPTVBMRVRFLCB7IGVycm9yOiAnS2V5IHN5c3RlbSBhY2Nlc3MgZGVuaWVkISAtLSBObyB2YWxpZCBhdWRpby92aWRlbyBjb250ZW50IGNvbmZpZ3VyYXRpb25zIGRldGVjdGVkIScgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZWxlY3RLZXlTeXN0ZW0oa3NBY2Nlc3MpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG1lZGlhS2V5cyA9IGtzQWNjZXNzLm1lZGlhS2V5cyA9IG5ldyB3aW5kb3dbYXBpLk1lZGlhS2V5c10oa3NBY2Nlc3Mua2V5U3lzdGVtLnN5c3RlbVN0cmluZyk7XG4gICAgICAgICAgICBrZXlTeXN0ZW0gPSBrc0FjY2Vzcy5rZXlTeXN0ZW07XG4gICAgICAgICAgICBrZXlTeXN0ZW1BY2Nlc3MgPSBrc0FjY2VzcztcbiAgICAgICAgICAgIGlmICh2aWRlb0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBzZXRNZWRpYUtleXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50QnVzLnRyaWdnZXIoZXZlbnRzLklOVEVSTkFMX0tFWV9TWVNURU1fU0VMRUNURUQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuSU5URVJOQUxfS0VZX1NZU1RFTV9TRUxFQ1RFRCwgeyBlcnJvcjogJ0Vycm9yIHNlbGVjdGluZyBrZXlzIHN5c3RlbSAoJyArIGtleVN5c3RlbS5zeXN0ZW1TdHJpbmcgKyAnKSEgQ291bGQgbm90IGNyZWF0ZSBNZWRpYUtleXMgLS0gVE9ETycgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRNZWRpYUVsZW1lbnQobWVkaWFFbGVtZW50KSB7XG4gICAgICAgIGlmICh2aWRlb0VsZW1lbnQgPT09IG1lZGlhRWxlbWVudClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAvLyBSZXBsYWNpbmcgdGhlIHByZXZpb3VzIGVsZW1lbnRcbiAgICAgICAgaWYgKHZpZGVvRWxlbWVudCkge1xuICAgICAgICAgICAgdmlkZW9FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoYXBpLm5lZWRrZXksIGV2ZW50SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICB2aWRlb0VsZW1lbnQgPSBtZWRpYUVsZW1lbnQ7XG5cbiAgICAgICAgLy8gT25seSBpZiB3ZSBhcmUgbm90IGRldGFjaGluZyBmcm9tIHRoZSBleGlzdGluZyBlbGVtZW50XG4gICAgICAgIGlmICh2aWRlb0VsZW1lbnQpIHtcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGFwaS5uZWVka2V5LCBldmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgaWYgKG1lZGlhS2V5cykge1xuICAgICAgICAgICAgICAgIHNldE1lZGlhS2V5cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlS2V5U2Vzc2lvbihpbml0RGF0YSwgcHJvdERhdGEsIHNlc3Npb25UeXBlLCBjZG1EYXRhKSB7XG4gICAgICAgIGlmICgha2V5U3lzdGVtIHx8ICFtZWRpYUtleXMgfHwgIWtleVN5c3RlbUFjY2Vzcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGNyZWF0ZSBzZXNzaW9ucyB1bnRpbCB5b3UgaGF2ZSBzZWxlY3RlZCBhIGtleSBzeXN0ZW0nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVzZSB0aGUgZmlyc3QgdmlkZW8gY2FwYWJpbGl0eSBmb3IgdGhlIGNvbnRlbnRUeXBlLlxuICAgICAgICAvLyBUT0RPOiAgTm90IHN1cmUgaWYgdGhlcmUgaXMgYSB3YXkgdG8gY29uY2F0ZW5hdGUgYWxsIGNhcGFiaWxpdHkgZGF0YSBpbnRvIGEgUkZDNjM4Ni1jb21wYXRpYmxlIGZvcm1hdFxuXG4gICAgICAgIC8vIElmIHBsYXllciBpcyB0cnlpbmcgdG8gcGxheWJhY2sgQXVkaW8gb25seSBzdHJlYW0gLSBkb24ndCBlcnJvciBvdXQuXG4gICAgICAgIGxldCBjYXBhYmlsaXRpZXMgPSBudWxsO1xuXG4gICAgICAgIGlmIChrZXlTeXN0ZW1BY2Nlc3Mua3NDb25maWd1cmF0aW9uLnZpZGVvQ2FwYWJpbGl0aWVzICYmIGtleVN5c3RlbUFjY2Vzcy5rc0NvbmZpZ3VyYXRpb24udmlkZW9DYXBhYmlsaXRpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY2FwYWJpbGl0aWVzID0ga2V5U3lzdGVtQWNjZXNzLmtzQ29uZmlndXJhdGlvbi52aWRlb0NhcGFiaWxpdGllc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYXBhYmlsaXRpZXMgPT09IG51bGwgJiYga2V5U3lzdGVtQWNjZXNzLmtzQ29uZmlndXJhdGlvbi5hdWRpb0NhcGFiaWxpdGllcyAmJiBrZXlTeXN0ZW1BY2Nlc3Mua3NDb25maWd1cmF0aW9uLmF1ZGlvQ2FwYWJpbGl0aWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNhcGFiaWxpdGllcyA9IGtleVN5c3RlbUFjY2Vzcy5rc0NvbmZpZ3VyYXRpb24uYXVkaW9DYXBhYmlsaXRpZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FwYWJpbGl0aWVzID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgY3JlYXRlIHNlc3Npb25zIGZvciB1bmtub3duIGNvbnRlbnQgdHlwZXMuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IGNhcGFiaWxpdGllcy5jb250ZW50VHlwZTtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IG1lZGlhS2V5cy5jcmVhdGVTZXNzaW9uKGNvbnRlbnRUeXBlLCBuZXcgVWludDhBcnJheShpbml0RGF0YSksIGNkbURhdGEgPyBuZXcgVWludDhBcnJheShjZG1EYXRhKSA6IG51bGwpO1xuICAgICAgICBjb25zdCBzZXNzaW9uVG9rZW4gPSBjcmVhdGVTZXNzaW9uVG9rZW4oc2Vzc2lvbiwgaW5pdERhdGEpO1xuXG4gICAgICAgIC8vIEFkZCBhbGwgZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgIHNlc3Npb24uYWRkRXZlbnRMaXN0ZW5lcihhcGkuZXJyb3IsIHNlc3Npb25Ub2tlbik7XG4gICAgICAgIHNlc3Npb24uYWRkRXZlbnRMaXN0ZW5lcihhcGkubWVzc2FnZSwgc2Vzc2lvblRva2VuKTtcbiAgICAgICAgc2Vzc2lvbi5hZGRFdmVudExpc3RlbmVyKGFwaS5yZWFkeSwgc2Vzc2lvblRva2VuKTtcbiAgICAgICAgc2Vzc2lvbi5hZGRFdmVudExpc3RlbmVyKGFwaS5jbG9zZSwgc2Vzc2lvblRva2VuKTtcblxuICAgICAgICAvLyBBZGQgdG8gb3VyIHNlc3Npb24gbGlzdFxuICAgICAgICBzZXNzaW9ucy5wdXNoKHNlc3Npb25Ub2tlbik7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZygnRFJNOiBTZXNzaW9uIGNyZWF0ZWQuICBTZXNzaW9uSUQgPSAnICsgc2Vzc2lvblRva2VuLmdldFNlc3Npb25JRCgpKTtcbiAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuS0VZX1NFU1NJT05fQ1JFQVRFRCwgeyBkYXRhOiBzZXNzaW9uVG9rZW4gfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlS2V5U2Vzc2lvbihzZXNzaW9uVG9rZW4sIG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IHNlc3Npb25Ub2tlbi5zZXNzaW9uO1xuXG4gICAgICAgIGlmICghcHJvdGVjdGlvbktleUNvbnRyb2xsZXIuaXNDbGVhcktleShrZXlTeXN0ZW0pKSB7XG4gICAgICAgICAgICAvLyBTZW5kIG91ciByZXF1ZXN0IHRvIHRoZSBrZXkgc2Vzc2lvblxuICAgICAgICAgICAgc2Vzc2lvbi51cGRhdGUobmV3IFVpbnQ4QXJyYXkobWVzc2FnZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRm9yIGNsZWFya2V5LCBtZXNzYWdlIGlzIGEgQ2xlYXJLZXlLZXlTZXRcbiAgICAgICAgICAgIHNlc3Npb24udXBkYXRlKG5ldyBVaW50OEFycmF5KG1lc3NhZ2UudG9KV0soKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2UgdGhlIGdpdmVuIHNlc3Npb24gYW5kIHJlbGVhc2UgYWxsIGFzc29jaWF0ZWQga2V5cy4gIEZvbGxvd2luZ1xuICAgICAqIHRoaXMgY2FsbCwgdGhlIHNlc3Npb25Ub2tlbiBiZWNvbWVzIGludmFsaWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZXNzaW9uVG9rZW4gLSB0aGUgc2Vzc2lvbiB0b2tlblxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNsb3NlS2V5U2Vzc2lvbihzZXNzaW9uVG9rZW4pIHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IHNlc3Npb25Ub2tlbi5zZXNzaW9uO1xuXG4gICAgICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgc2Vzc2lvbi5yZW1vdmVFdmVudExpc3RlbmVyKGFwaS5lcnJvciwgc2Vzc2lvblRva2VuKTtcbiAgICAgICAgc2Vzc2lvbi5yZW1vdmVFdmVudExpc3RlbmVyKGFwaS5tZXNzYWdlLCBzZXNzaW9uVG9rZW4pO1xuICAgICAgICBzZXNzaW9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoYXBpLnJlYWR5LCBzZXNzaW9uVG9rZW4pO1xuICAgICAgICBzZXNzaW9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoYXBpLmNsb3NlLCBzZXNzaW9uVG9rZW4pO1xuXG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIG91ciBzZXNzaW9uIGxpc3RcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXNzaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNlc3Npb25zW2ldID09PSBzZXNzaW9uVG9rZW4pIHtcbiAgICAgICAgICAgICAgICBzZXNzaW9ucy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZW5kIG91ciByZXF1ZXN0IHRvIHRoZSBrZXkgc2Vzc2lvblxuICAgICAgICBzZXNzaW9uW2FwaS5yZWxlYXNlXSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFNlcnZlckNlcnRpZmljYXRlKC8qc2VydmVyQ2VydGlmaWNhdGUqLykgeyAvKiBOb3Qgc3VwcG9ydGVkICovIH1cbiAgICBmdW5jdGlvbiBsb2FkS2V5U2Vzc2lvbigvKnNlc3Npb25JRCovKSB7IC8qIE5vdCBzdXBwb3J0ZWQgKi8gfVxuICAgIGZ1bmN0aW9uIHJlbW92ZUtleVNlc3Npb24oLypzZXNzaW9uVG9rZW4qLykgeyAvKiBOb3Qgc3VwcG9ydGVkICovIH1cblxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRXZlbnRIYW5kbGVyKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGFuZGxlRXZlbnQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgYXBpLm5lZWRrZXk6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuaW5pdERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbml0RGF0YSA9IEFycmF5QnVmZmVyLmlzVmlldyhldmVudC5pbml0RGF0YSkgPyBldmVudC5pbml0RGF0YS5idWZmZXIgOiBldmVudC5pbml0RGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEJ1cy50cmlnZ2VyKGV2ZW50cy5ORUVEX0tFWSwgeyBrZXk6IG5ldyBOZWVkS2V5KGluaXREYXRhLCAnY2VuYycpIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgLy8gSUUxMSBkb2VzIG5vdCBsZXQgeW91IHNldCBNZWRpYUtleXMgdW50aWwgaXQgaGFzIGVudGVyZWQgYSBjZXJ0YWluXG4gICAgLy8gcmVhZHlTdGF0ZSwgc28gd2UgbmVlZCB0aGlzIGxvZ2ljIHRvIGVuc3VyZSB3ZSBkb24ndCBzZXQgdGhlIGtleXNcbiAgICAvLyB0b28gZWFybHlcbiAgICBmdW5jdGlvbiBzZXRNZWRpYUtleXMoKSB7XG4gICAgICAgIGxldCBib3VuZERvU2V0S2V5cyA9IG51bGw7XG4gICAgICAgIGNvbnN0IGRvU2V0S2V5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsIGJvdW5kRG9TZXRLZXlzKTtcbiAgICAgICAgICAgIHZpZGVvRWxlbWVudFthcGkuc2V0TWVkaWFLZXlzXShtZWRpYUtleXMpO1xuICAgICAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihldmVudHMuVklERU9fRUxFTUVOVF9TRUxFQ1RFRCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh2aWRlb0VsZW1lbnQucmVhZHlTdGF0ZSA+PSAxKSB7XG4gICAgICAgICAgICBkb1NldEtleXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvdW5kRG9TZXRLZXlzID0gZG9TZXRLZXlzLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB2aWRlb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkbWV0YWRhdGEnLCBib3VuZERvU2V0S2V5cyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBvdXIgc2Vzc2lvbiB0b2tlbiBvYmplY3RzIHdoaWNoIG1hbmFnZSB0aGUgRU1FXG4gICAgLy8gTWVkaWFLZXlTZXNzaW9uIGFuZCBzZXNzaW9uLXNwZWNpZmljIGV2ZW50IGhhbmRsZXJcbiAgICBmdW5jdGlvbiBjcmVhdGVTZXNzaW9uVG9rZW4oa2V5U2Vzc2lvbiwgaW5pdERhdGEpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIEltcGxlbWVudHMgU2Vzc2lvblRva2VuXG4gICAgICAgICAgICBzZXNzaW9uOiBrZXlTZXNzaW9uLFxuICAgICAgICAgICAgaW5pdERhdGE6IGluaXREYXRhLFxuXG4gICAgICAgICAgICBnZXRTZXNzaW9uSUQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXNzaW9uLnNlc3Npb25JZDtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdldEV4cGlyYXRpb25UaW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdldFNlc3Npb25UeXBlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd0ZW1wb3JhcnknO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgb3VyIG1haW4gZXZlbnQgaGFuZGxlciBmb3IgYWxsIGRlc2lyZWQgTWVkaWFLZXlTZXNzaW9uIGV2ZW50c1xuICAgICAgICAgICAgLy8gVGhlc2UgZXZlbnRzIGFyZSB0cmFuc2xhdGVkIGludG8gb3VyIEFQSS1pbmRlcGVuZGVudCB2ZXJzaW9ucyBvZiB0aGVcbiAgICAgICAgICAgIC8vIHNhbWUgZXZlbnRzXG4gICAgICAgICAgICBoYW5kbGVFdmVudDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgYXBpLmVycm9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9yU3RyID0gJ0tleUVycm9yJzsgLy8gVE9ETzogTWFrZSBiZXR0ZXIgc3RyaW5nIGZyb20gZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50QnVzLnRyaWdnZXIoZXZlbnRzLktFWV9FUlJPUiwgeyBkYXRhOiBuZXcgRGFzaEpTRXJyb3IoUHJvdGVjdGlvbkVycm9ycy5NRURJQV9LRVlFUlJfQ09ERSwgZXJyb3JTdHIsIHRoaXMpIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgYXBpLm1lc3NhZ2U6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IEFycmF5QnVmZmVyLmlzVmlldyhldmVudC5tZXNzYWdlKSA/IGV2ZW50Lm1lc3NhZ2UuYnVmZmVyIDogZXZlbnQubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50QnVzLnRyaWdnZXIoZXZlbnRzLklOVEVSTkFMX0tFWV9NRVNTQUdFLCB7IGRhdGE6IG5ldyBLZXlNZXNzYWdlKHRoaXMsIG1lc3NhZ2UsIGV2ZW50LmRlc3RpbmF0aW9uVVJMKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGFwaS5yZWFkeTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnRFJNOiBLZXkgYWRkZWQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudEJ1cy50cmlnZ2VyKGV2ZW50cy5LRVlfQURERUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBhcGkuY2xvc2U6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ0RSTTogU2Vzc2lvbiBjbG9zZWQuICBTZXNzaW9uSUQgPSAnICsgdGhpcy5nZXRTZXNzaW9uSUQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudEJ1cy50cmlnZ2VyKGV2ZW50cy5LRVlfU0VTU0lPTl9DTE9TRUQsIHsgZGF0YTogdGhpcy5nZXRTZXNzaW9uSUQoKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZSA9IHtcbiAgICAgICAgZ2V0QWxsSW5pdERhdGE6IGdldEFsbEluaXREYXRhLFxuICAgICAgICByZXF1ZXN0S2V5U3lzdGVtQWNjZXNzOiByZXF1ZXN0S2V5U3lzdGVtQWNjZXNzLFxuICAgICAgICBnZXRLZXlTeXN0ZW06IGdldEtleVN5c3RlbSxcbiAgICAgICAgc2VsZWN0S2V5U3lzdGVtOiBzZWxlY3RLZXlTeXN0ZW0sXG4gICAgICAgIHNldE1lZGlhRWxlbWVudDogc2V0TWVkaWFFbGVtZW50LFxuICAgICAgICBjcmVhdGVLZXlTZXNzaW9uOiBjcmVhdGVLZXlTZXNzaW9uLFxuICAgICAgICB1cGRhdGVLZXlTZXNzaW9uOiB1cGRhdGVLZXlTZXNzaW9uLFxuICAgICAgICBjbG9zZUtleVNlc3Npb246IGNsb3NlS2V5U2Vzc2lvbixcbiAgICAgICAgc2V0U2VydmVyQ2VydGlmaWNhdGU6IHNldFNlcnZlckNlcnRpZmljYXRlLFxuICAgICAgICBsb2FkS2V5U2Vzc2lvbjogbG9hZEtleVNlc3Npb24sXG4gICAgICAgIHJlbW92ZUtleVNlc3Npb246IHJlbW92ZUtleVNlc3Npb24sXG4gICAgICAgIHN0b3A6IHJlc2V0LFxuICAgICAgICByZXNldDogcmVzZXRcbiAgICB9O1xuXG4gICAgc2V0dXAoKTtcblxuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuUHJvdGVjdGlvbk1vZGVsXzNGZWIyMDE0Ll9fZGFzaGpzX2ZhY3RvcnlfbmFtZSA9ICdQcm90ZWN0aW9uTW9kZWxfM0ZlYjIwMTQnO1xuZXhwb3J0IGRlZmF1bHQgZGFzaGpzLkZhY3RvcnlNYWtlci5nZXRDbGFzc0ZhY3RvcnkoUHJvdGVjdGlvbk1vZGVsXzNGZWIyMDE0KTsgLyoganNoaW50IGlnbm9yZTpsaW5lICovXG4iLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG4vKipcbiAqIENhYmxlTGFicyBDbGVhcktleSBsaWNlbnNlIHNlcnZlciBpbXBsZW1lbnRhdGlvblxuICpcbiAqIEZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCBldmFsdWF0aW5nIHBvdGVudGlhbCB1c2VzIGZvciBDbGVhcktleSwgd2UgaGF2ZSBkZXZlbG9wZWRcbiAqIGEgZGlydC1zaW1wbGUgQVBJIGZvciByZXF1ZXN0aW5nIENsZWFyS2V5IGxpY2Vuc2VzIGZyb20gYSByZW1vdGUgc2VydmVyLlxuICpcbiAqIEBpbXBsZW1lbnRzIExpY2Vuc2VTZXJ2ZXJcbiAqIEBjbGFzc1xuICovXG5pbXBvcnQgS2V5UGFpciBmcm9tICcuLi92by9LZXlQYWlyJztcbmltcG9ydCBDbGVhcktleUtleVNldCBmcm9tICcuLi92by9DbGVhcktleUtleVNldCc7XG5cbmZ1bmN0aW9uIENsZWFyS2V5KCkge1xuXG4gICAgbGV0IGluc3RhbmNlO1xuXG4gICAgZnVuY3Rpb24gZ2V0U2VydmVyVVJMRnJvbU1lc3NhZ2UodXJsLCBtZXNzYWdlLyosIG1lc3NhZ2VUeXBlKi8pIHtcbiAgICAgICAgLy8gQnVpbGQgQ2xlYXJLZXkgc2VydmVyIHF1ZXJ5IHN0cmluZ1xuICAgICAgICBjb25zdCBqc29uTXNnID0gSlNPTi5wYXJzZShTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50OEFycmF5KG1lc3NhZ2UpKSk7XG4gICAgICAgIHVybCArPSAnLz8nO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpzb25Nc2cua2lkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdXJsICs9IGpzb25Nc2cua2lkc1tpXSArICcmJztcbiAgICAgICAgfVxuICAgICAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKDAsIHVybC5sZW5ndGggLSAxKTtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRIVFRQTWV0aG9kKC8qbWVzc2FnZVR5cGUqLykge1xuICAgICAgICByZXR1cm4gJ0dFVCc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmVzcG9uc2VUeXBlKC8qa2V5U3lzdGVtU3RyKi8pIHtcbiAgICAgICAgcmV0dXJuICdqc29uJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRMaWNlbnNlTWVzc2FnZShzZXJ2ZXJSZXNwb25zZS8qLCBrZXlTeXN0ZW1TdHIsIG1lc3NhZ2VUeXBlKi8pIHtcbiAgICAgICAgaWYgKCFzZXJ2ZXJSZXNwb25zZS5oYXNPd25Qcm9wZXJ0eSgna2V5cycpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBsZXQga2V5UGFpcnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXJ2ZXJSZXNwb25zZS5rZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQga2V5cGFpciA9IHNlcnZlclJlc3BvbnNlLmtleXNbaV07XG4gICAgICAgICAgICBsZXQga2V5aWQgPSBrZXlwYWlyLmtpZC5yZXBsYWNlKC89L2csICcnKTtcbiAgICAgICAgICAgIGxldCBrZXkgPSBrZXlwYWlyLmsucmVwbGFjZSgvPS9nLCAnJyk7XG5cbiAgICAgICAgICAgIGtleVBhaXJzLnB1c2gobmV3IEtleVBhaXIoa2V5aWQsIGtleSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQ2xlYXJLZXlLZXlTZXQoa2V5UGFpcnMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEVycm9yUmVzcG9uc2Uoc2VydmVyUmVzcG9uc2UvKiwga2V5U3lzdGVtU3RyLCBtZXNzYWdlVHlwZSovKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50OEFycmF5KHNlcnZlclJlc3BvbnNlKSk7XG4gICAgfVxuXG4gICAgaW5zdGFuY2UgPSB7XG4gICAgICAgIGdldFNlcnZlclVSTEZyb21NZXNzYWdlOiBnZXRTZXJ2ZXJVUkxGcm9tTWVzc2FnZSxcbiAgICAgICAgZ2V0SFRUUE1ldGhvZDogZ2V0SFRUUE1ldGhvZCxcbiAgICAgICAgZ2V0UmVzcG9uc2VUeXBlOiBnZXRSZXNwb25zZVR5cGUsXG4gICAgICAgIGdldExpY2Vuc2VNZXNzYWdlOiBnZXRMaWNlbnNlTWVzc2FnZSxcbiAgICAgICAgZ2V0RXJyb3JSZXNwb25zZTogZ2V0RXJyb3JSZXNwb25zZVxuICAgIH07XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbkNsZWFyS2V5Ll9fZGFzaGpzX2ZhY3RvcnlfbmFtZSA9ICdDbGVhcktleSc7XG5leHBvcnQgZGVmYXVsdCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldFNpbmdsZXRvbkZhY3RvcnkoQ2xlYXJLZXkpOyAvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi8iLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG4vKipcbiAqIENhc3RMYWJzIERSTVRvZGF5IExpY2Vuc2UgU2VydmVyIGltcGxlbWVudGF0aW9uXG4gKlxuICogQGltcGxlbWVudHMgTGljZW5zZVNlcnZlclxuICogQGNsYXNzXG4gKi9cblxuaW1wb3J0IFByb3RlY3Rpb25Db25zdGFudHMgZnJvbSAnLi4vLi4vY29uc3RhbnRzL1Byb3RlY3Rpb25Db25zdGFudHMnO1xuXG5mdW5jdGlvbiBEUk1Ub2RheShjb25maWcpIHtcblxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICBjb25zdCBCQVNFNjQgPSBjb25maWcuQkFTRTY0O1xuXG4gICAgY29uc3Qga2V5U3lzdGVtcyA9IHt9O1xuICAgIGtleVN5c3RlbXNbUHJvdGVjdGlvbkNvbnN0YW50cy5XSURFVklORV9LRVlTVEVNX1NUUklOR10gPSB7XG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgICAgICBnZXRMaWNlbnNlTWVzc2FnZTogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gQkFTRTY0LmRlY29kZUFycmF5KHJlc3BvbnNlLmxpY2Vuc2UpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRFcnJvclJlc3BvbnNlOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAga2V5U3lzdGVtc1tQcm90ZWN0aW9uQ29uc3RhbnRzLlBMQVlSRUFEWV9LRVlTVEVNX1NUUklOR10gPSB7XG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyxcbiAgICAgICAgZ2V0TGljZW5zZU1lc3NhZ2U6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9LFxuICAgICAgICBnZXRFcnJvclJlc3BvbnNlOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50OEFycmF5KHJlc3BvbnNlKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IGluc3RhbmNlO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tDb25maWcoKSB7XG4gICAgICAgIGlmICghQkFTRTY0IHx8ICFCQVNFNjQuaGFzT3duUHJvcGVydHkoJ2RlY29kZUFycmF5JykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBjb25maWcgcGFyYW1ldGVyKHMpJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTZXJ2ZXJVUkxGcm9tTWVzc2FnZSh1cmwgLyosIG1lc3NhZ2UsIG1lc3NhZ2VUeXBlKi8pIHtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRIVFRQTWV0aG9kKC8qbWVzc2FnZVR5cGUqLykge1xuICAgICAgICByZXR1cm4gJ1BPU1QnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlVHlwZShrZXlTeXN0ZW1TdHIvKiwgbWVzc2FnZVR5cGUqLykge1xuICAgICAgICByZXR1cm4ga2V5U3lzdGVtc1trZXlTeXN0ZW1TdHJdLnJlc3BvbnNlVHlwZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRMaWNlbnNlTWVzc2FnZShzZXJ2ZXJSZXNwb25zZSwga2V5U3lzdGVtU3RyLyosIG1lc3NhZ2VUeXBlKi8pIHtcbiAgICAgICAgY2hlY2tDb25maWcoKTtcbiAgICAgICAgcmV0dXJuIGtleVN5c3RlbXNba2V5U3lzdGVtU3RyXS5nZXRMaWNlbnNlTWVzc2FnZShzZXJ2ZXJSZXNwb25zZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RXJyb3JSZXNwb25zZShzZXJ2ZXJSZXNwb25zZSwga2V5U3lzdGVtU3RyLyosIG1lc3NhZ2VUeXBlKi8pIHtcbiAgICAgICAgcmV0dXJuIGtleVN5c3RlbXNba2V5U3lzdGVtU3RyXS5nZXRFcnJvclJlc3BvbnNlKHNlcnZlclJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZSA9IHtcbiAgICAgICAgZ2V0U2VydmVyVVJMRnJvbU1lc3NhZ2U6IGdldFNlcnZlclVSTEZyb21NZXNzYWdlLFxuICAgICAgICBnZXRIVFRQTWV0aG9kOiBnZXRIVFRQTWV0aG9kLFxuICAgICAgICBnZXRSZXNwb25zZVR5cGU6IGdldFJlc3BvbnNlVHlwZSxcbiAgICAgICAgZ2V0TGljZW5zZU1lc3NhZ2U6IGdldExpY2Vuc2VNZXNzYWdlLFxuICAgICAgICBnZXRFcnJvclJlc3BvbnNlOiBnZXRFcnJvclJlc3BvbnNlXG4gICAgfTtcblxuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuRFJNVG9kYXkuX19kYXNoanNfZmFjdG9yeV9uYW1lID0gJ0RSTVRvZGF5JztcbmV4cG9ydCBkZWZhdWx0IGRhc2hqcy5GYWN0b3J5TWFrZXIuZ2V0U2luZ2xldG9uRmFjdG9yeShEUk1Ub2RheSk7IC8qIGpzaGludCBpZ25vcmU6bGluZSAqLyIsIi8qKlxuICogVGhlIGNvcHlyaWdodCBpbiB0aGlzIHNvZnR3YXJlIGlzIGJlaW5nIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBCU0QgTGljZW5zZSxcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiAqICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbiAqICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgQVMgSVMgQU5EIEFOWVxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXG4gKiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxuICogIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLFxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuICogIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbi8qIGdsb2JhbCBlc2NhcGU6IHRydWUgKi9cblxuLyoqXG4gKiBNaWNyb3NvZnQgUGxheVJlYWR5IFRlc3QgTGljZW5zZSBTZXJ2ZXJcbiAqXG4gKiBGb3IgdGVzdGluZyBjb250ZW50IHRoYXQgdXNlcyB0aGUgUGxheVJlYWR5IHRlc3Qgc2VydmVyIGF0XG4gKlxuICogQGltcGxlbWVudHMgTGljZW5zZVNlcnZlclxuICogQGNsYXNzXG4gKi9cblxuZnVuY3Rpb24gUGxheVJlYWR5KCkge1xuXG4gICAgbGV0IGluc3RhbmNlO1xuXG4gICAgY29uc3Qgc29hcCA9ICdodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy9zb2FwL2VudmVsb3BlLyc7XG5cbiAgICBmdW5jdGlvbiB1aW50VG9TdHJpbmcoYXJyYXlCdWZmZXIpIHtcbiAgICAgICAgY29uc3QgZW5jb2RlZFN0cmluZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgICAgICAgY29uc3QgZGVjb2RlZFN0cmluZyA9IGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoZW5jb2RlZFN0cmluZykpO1xuICAgICAgICByZXR1cm4gZGVjb2RlZFN0cmluZztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZVNlcnZlclJlc3BvbnNlKHNlcnZlclJlc3BvbnNlKSB7XG4gICAgICAgIGlmICh3aW5kb3cuRE9NUGFyc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBzdHJpbmdSZXNwb25zZSA9IHVpbnRUb1N0cmluZyhzZXJ2ZXJSZXNwb25zZSk7XG4gICAgICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpO1xuICAgICAgICAgICAgY29uc3QgeG1sRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhzdHJpbmdSZXNwb25zZSwgJ3RleHQveG1sJyk7XG4gICAgICAgICAgICBjb25zdCBlbnZlbG9wZSA9IHhtbERvYyA/IHhtbERvYy5nZXRFbGVtZW50c0J5VGFnTmFtZU5TKHNvYXAsICdFbnZlbG9wZScpWzBdIDogbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBlbnZlbG9wZSA/IGVudmVsb3BlLmdldEVsZW1lbnRzQnlUYWdOYW1lTlMoc29hcCwgJ0JvZHknKVswXSA6IG51bGw7XG4gICAgICAgICAgICBjb25zdCBmYXVsdCA9IGJvZHkgPyBib2R5LmdldEVsZW1lbnRzQnlUYWdOYW1lTlMoc29hcCwgJ0ZhdWx0JylbMF0gOiBudWxsO1xuXG4gICAgICAgICAgICBpZiAoZmF1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VydmVyUmVzcG9uc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VFcnJvclJlc3BvbnNlKHNlcnZlclJlc3BvbnNlKSB7XG4gICAgICAgIGxldCBmYXVsdHN0cmluZyA9ICcnO1xuICAgICAgICBsZXQgc3RhdHVzQ29kZSA9ICcnO1xuICAgICAgICBsZXQgbWVzc2FnZSA9ICcnO1xuICAgICAgICBsZXQgaWRTdGFydCA9IC0xO1xuICAgICAgICBsZXQgaWRFbmQgPSAtMTtcblxuICAgICAgICBpZiAod2luZG93LkRPTVBhcnNlcikge1xuICAgICAgICAgICAgY29uc3Qgc3RyaW5nUmVzcG9uc2UgPSB1aW50VG9TdHJpbmcoc2VydmVyUmVzcG9uc2UpO1xuICAgICAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKTtcbiAgICAgICAgICAgIGNvbnN0IHhtbERvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3RyaW5nUmVzcG9uc2UsICd0ZXh0L3htbCcpO1xuICAgICAgICAgICAgY29uc3QgZW52ZWxvcGUgPSB4bWxEb2MgPyB4bWxEb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWVOUyhzb2FwLCAnRW52ZWxvcGUnKVswXSA6IG51bGw7XG4gICAgICAgICAgICBjb25zdCBib2R5ID0gZW52ZWxvcGUgPyBlbnZlbG9wZS5nZXRFbGVtZW50c0J5VGFnTmFtZU5TKHNvYXAsICdCb2R5JylbMF0gOiBudWxsO1xuICAgICAgICAgICAgY29uc3QgZmF1bHQgPSBib2R5ID8gYm9keS5nZXRFbGVtZW50c0J5VGFnTmFtZU5TKHNvYXAsICdGYXVsdCcpWzBdIDogbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IGRldGFpbCA9IGZhdWx0ID8gZmF1bHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2RldGFpbCcpWzBdIDogbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IGV4Y2VwdGlvbiA9IGRldGFpbCA/IGRldGFpbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnRXhjZXB0aW9uJylbMF0gOiBudWxsO1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoZmF1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nUmVzcG9uc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5vZGUgPSBmYXVsdC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZmF1bHRzdHJpbmcnKVswXS5maXJzdENoaWxkO1xuICAgICAgICAgICAgZmF1bHRzdHJpbmcgPSBub2RlID8gbm9kZS5ub2RlVmFsdWUgOiBudWxsO1xuXG4gICAgICAgICAgICBpZiAoZXhjZXB0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IGV4Y2VwdGlvbi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnU3RhdHVzQ29kZScpWzBdO1xuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGUgPSBub2RlID8gbm9kZS5maXJzdENoaWxkLm5vZGVWYWx1ZSA6IG51bGw7XG4gICAgICAgICAgICAgICAgbm9kZSA9IGV4Y2VwdGlvbi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnTWVzc2FnZScpWzBdO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBub2RlID8gbm9kZS5maXJzdENoaWxkLm5vZGVWYWx1ZSA6IG51bGw7XG4gICAgICAgICAgICAgICAgaWRTdGFydCA9IG1lc3NhZ2UgPyBtZXNzYWdlLmxhc3RJbmRleE9mKCdbJykgKyAxIDogLTE7XG4gICAgICAgICAgICAgICAgaWRFbmQgPSBtZXNzYWdlID8gbWVzc2FnZS5pbmRleE9mKCddJykgOiAtMTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZSA/IG1lc3NhZ2Uuc3Vic3RyaW5nKGlkU3RhcnQsIGlkRW5kKSA6ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGVycm9yU3RyaW5nID0gYGNvZGU6ICR7c3RhdHVzQ29kZX0sIG5hbWU6ICR7ZmF1bHRzdHJpbmd9YDtcbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGVycm9yU3RyaW5nICs9IGAsIG1lc3NhZ2U6ICR7bWVzc2FnZX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVycm9yU3RyaW5nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNlcnZlclVSTEZyb21NZXNzYWdlKHVybCAvKiwgbWVzc2FnZSwgbWVzc2FnZVR5cGUqLykge1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEhUVFBNZXRob2QoLyptZXNzYWdlVHlwZSovKSB7XG4gICAgICAgIHJldHVybiAnUE9TVCc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmVzcG9uc2VUeXBlKC8qa2V5U3lzdGVtU3RyLCBtZXNzYWdlVHlwZSovKSB7XG4gICAgICAgIHJldHVybiAnYXJyYXlidWZmZXInO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldExpY2Vuc2VNZXNzYWdlKHNlcnZlclJlc3BvbnNlLyosIGtleVN5c3RlbVN0ciwgbWVzc2FnZVR5cGUqLykge1xuICAgICAgICByZXR1cm4gcGFyc2VTZXJ2ZXJSZXNwb25zZS5jYWxsKHRoaXMsIHNlcnZlclJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFcnJvclJlc3BvbnNlKHNlcnZlclJlc3BvbnNlLyosIGtleVN5c3RlbVN0ciwgbWVzc2FnZVR5cGUqLykge1xuICAgICAgICByZXR1cm4gcGFyc2VFcnJvclJlc3BvbnNlLmNhbGwodGhpcywgc2VydmVyUmVzcG9uc2UpO1xuICAgIH1cblxuICAgIGluc3RhbmNlID0ge1xuICAgICAgICBnZXRTZXJ2ZXJVUkxGcm9tTWVzc2FnZTogZ2V0U2VydmVyVVJMRnJvbU1lc3NhZ2UsXG4gICAgICAgIGdldEhUVFBNZXRob2Q6IGdldEhUVFBNZXRob2QsXG4gICAgICAgIGdldFJlc3BvbnNlVHlwZTogZ2V0UmVzcG9uc2VUeXBlLFxuICAgICAgICBnZXRMaWNlbnNlTWVzc2FnZTogZ2V0TGljZW5zZU1lc3NhZ2UsXG4gICAgICAgIGdldEVycm9yUmVzcG9uc2U6IGdldEVycm9yUmVzcG9uc2VcbiAgICB9O1xuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG5QbGF5UmVhZHkuX19kYXNoanNfZmFjdG9yeV9uYW1lID0gJ1BsYXlSZWFkeSc7XG5leHBvcnQgZGVmYXVsdCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldFNpbmdsZXRvbkZhY3RvcnkoUGxheVJlYWR5KTsgLyoganNoaW50IGlnbm9yZTpsaW5lICovIiwiLyoqXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuZnVuY3Rpb24gV2lkZXZpbmUoKSB7XG5cbiAgICBsZXQgaW5zdGFuY2U7XG5cbiAgICBmdW5jdGlvbiBnZXRTZXJ2ZXJVUkxGcm9tTWVzc2FnZSh1cmwgLyosIG1lc3NhZ2UsIG1lc3NhZ2VUeXBlKi8pIHtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRIVFRQTWV0aG9kKC8qbWVzc2FnZVR5cGUqLykge1xuICAgICAgICByZXR1cm4gJ1BPU1QnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlVHlwZSgvKmtleVN5c3RlbVN0ciwgbWVzc2FnZVR5cGUqLykge1xuICAgICAgICByZXR1cm4gJ2FycmF5YnVmZmVyJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRMaWNlbnNlTWVzc2FnZShzZXJ2ZXJSZXNwb25zZS8qLCBrZXlTeXN0ZW1TdHIsIG1lc3NhZ2VUeXBlKi8pIHtcbiAgICAgICAgcmV0dXJuIHNlcnZlclJlc3BvbnNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEVycm9yUmVzcG9uc2Uoc2VydmVyUmVzcG9uc2UvKiwga2V5U3lzdGVtU3RyLCBtZXNzYWdlVHlwZSovKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50OEFycmF5KHNlcnZlclJlc3BvbnNlKSk7XG4gICAgfVxuXG4gICAgaW5zdGFuY2UgPSB7XG4gICAgICAgIGdldFNlcnZlclVSTEZyb21NZXNzYWdlOiBnZXRTZXJ2ZXJVUkxGcm9tTWVzc2FnZSxcbiAgICAgICAgZ2V0SFRUUE1ldGhvZDogZ2V0SFRUUE1ldGhvZCxcbiAgICAgICAgZ2V0UmVzcG9uc2VUeXBlOiBnZXRSZXNwb25zZVR5cGUsXG4gICAgICAgIGdldExpY2Vuc2VNZXNzYWdlOiBnZXRMaWNlbnNlTWVzc2FnZSxcbiAgICAgICAgZ2V0RXJyb3JSZXNwb25zZTogZ2V0RXJyb3JSZXNwb25zZVxuICAgIH07XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbldpZGV2aW5lLl9fZGFzaGpzX2ZhY3RvcnlfbmFtZSA9ICdXaWRldmluZSc7XG5leHBvcnQgZGVmYXVsdCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldFNpbmdsZXRvbkZhY3RvcnkoV2lkZXZpbmUpOyAvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi8iLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgQSBjb2xsZWN0aW9uIG9mIENsZWFyS2V5IGVuY3J5cHRpb24ga2V5cyB3aXRoIGFuIChvcHRpb25hbCkgYXNzb2NpYXRlZFxuICogIHR5cGVcbiAqIEBpZ25vcmVcbiAqL1xuY2xhc3MgQ2xlYXJLZXlLZXlTZXQge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7QXJyYXkuPEtleVBhaXI+fSBrZXlQYWlyc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIHRoZSB0eXBlIG9mIGtleXMgaW4gdGhpcyBzZXQuICBPbmUgb2YgZWl0aGVyICdwZXJzaXN0ZW50J1xuICAgICAqIG9yICd0ZW1wb3JhcnknLiAgQ2FuIGFsc28gYmUgbnVsbCBvciB1bmRlZmluZWQuXG4gICAgICogQGNsYXNzXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGtleVBhaXJzLCB0eXBlKSB7XG4gICAgICAgIGlmICh0eXBlICYmIHR5cGUgIT09ICdwZXJzaXN0ZW50JyAmJiB0eXBlICE9PSAndGVtcG9yYXJ5JylcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBDbGVhcktleSBrZXkgc2V0IHR5cGUhICBNdXN0IGJlIG9uZSBvZiBcXCdwZXJzaXN0ZW50XFwnIG9yIFxcJ3RlbXBvcmFyeVxcJycpO1xuICAgICAgICB0aGlzLmtleVBhaXJzID0ga2V5UGFpcnM7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCB0aGlzIGtleSBzZXQgdG8gaXRzIEpTT04gV2ViIEtleSAoSldLKSByZXByZXNlbnRhdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7QXJyYXlCdWZmZXJ9IEpXSyBvYmplY3QgVVRGLTggZW5jb2RlZCBhcyBBcnJheUJ1ZmZlclxuICAgICAqL1xuICAgIHRvSldLKCkge1xuICAgICAgICBsZXQgaTtcbiAgICAgICAgbGV0IG51bUtleXMgPSB0aGlzLmtleVBhaXJzLmxlbmd0aDtcbiAgICAgICAgbGV0IGp3ayA9IHtrZXlzOiBbXX07XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bUtleXM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGtleSA9IHtcbiAgICAgICAgICAgICAgICBrdHk6ICdvY3QnLFxuICAgICAgICAgICAgICAgIGFsZzogJ0ExMjhLVycsXG4gICAgICAgICAgICAgICAga2lkOiB0aGlzLmtleVBhaXJzW2ldLmtleUlELFxuICAgICAgICAgICAgICAgIGs6IHRoaXMua2V5UGFpcnNbaV0ua2V5XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgandrLmtleXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIGp3ay50eXBlID0gdGhpcy50eXBlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBqd2tTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqd2spO1xuICAgICAgICBjb25zdCBsZW4gPSBqd2tTdHJpbmcubGVuZ3RoO1xuXG4gICAgICAgIC8vIENvbnZlcnQgSlNPTiBzdHJpbmcgdG8gQXJyYXlCdWZmZXJcbiAgICAgICAgbGV0IGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcihsZW4pO1xuICAgICAgICBsZXQgYlZpZXcgPSBuZXcgVWludDhBcnJheShidWYpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICAgICAgICBiVmlld1tpXSA9IGp3a1N0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xlYXJLZXlLZXlTZXQ7XG4iLCIvKipcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuLyoqXG4gKiBAY2xhc3NkZXNjIEVNRS1pbmRlcGVuZGVudCBLZXlNZXNzYWdlXG4gKiBAaWdub3JlXG4gKi9cbmNsYXNzIEtleU1lc3NhZ2Uge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U2Vzc2lvblRva2VufSBzZXNzaW9uVG9rZW4gdGhlIHNlc3Npb25cbiAgICAgKiB0byB3aGljaCB0aGUga2V5IG1lc3NhZ2UgaXMgYXNzb2NpYXRlZFxuICAgICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IG1lc3NhZ2UgdGhlIGtleSBtZXNzYWdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRlZmF1bHRVUkwgbGljZW5zZSBhY3F1aXNpdGlvbiBVUkwgcHJvdmlkZWQgYnkgdGhlIENETVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlVHlwZSBTdXBwb3J0ZWQgbWVzc2FnZSB0eXBlcyBjYW4gYmUgZm91bmRcbiAgICAgKiB7QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL2VuY3J5cHRlZC1tZWRpYS8jaWRsLWRlZi1NZWRpYUtleU1lc3NhZ2VUeXBlfGhlcmV9LlxuICAgICAqIEBjbGFzc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNlc3Npb25Ub2tlbiwgbWVzc2FnZSwgZGVmYXVsdFVSTCwgbWVzc2FnZVR5cGUpIHtcbiAgICAgICAgdGhpcy5zZXNzaW9uVG9rZW4gPSBzZXNzaW9uVG9rZW47XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuZGVmYXVsdFVSTCA9IGRlZmF1bHRVUkw7XG4gICAgICAgIHRoaXMubWVzc2FnZVR5cGUgPSBtZXNzYWdlVHlwZSA/IG1lc3NhZ2VUeXBlIDogJ2xpY2Vuc2UtcmVxdWVzdCc7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXlNZXNzYWdlO1xuIiwiLyoqXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbi8qKlxuICogQGNsYXNzZGVzYyBSZXByZXNlbnRzIGEgMTI4LWJpdCBrZXlJRCBhbmQgMTI4LWJpdCBlbmNyeXB0aW9uIGtleVxuICogQGlnbm9yZVxuICovXG5jbGFzcyBLZXlQYWlyIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5SUQgMTI4LWJpdCBrZXkgSUQsIGJhc2U2NCBlbmNvZGVkLCB3aXRoIG5vIHBhZGRpbmdcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IDEyOC1iaXQgZW5jcnlwdGlvbiBrZXksIGJhc2U2NCBlbmNvZGVkLCB3aXRoIG5vIHBhZGRpbmdcbiAgICAgKiBAY2xhc3NcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioa2V5SUQsIGtleSkge1xuICAgICAgICB0aGlzLmtleUlEID0ga2V5SUQ7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5UGFpcjtcbiIsIi8qKlxuICogVGhlIGNvcHlyaWdodCBpbiB0aGlzIHNvZnR3YXJlIGlzIGJlaW5nIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBCU0QgTGljZW5zZSxcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiAqICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbiAqICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgQVMgSVMgQU5EIEFOWVxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXG4gKiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxuICogIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLFxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuICogIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG4vKipcbiAqIEBjbGFzc2Rlc2MgQ3JlYXRlcyBhIG5ldyBrZXkgc3lzdGVtIGFjY2VzcyB0b2tlbi4gIFJlcHJlc2VudHMgYSB2YWxpZCBrZXkgc3lzdGVtIGZvclxuICogZ2l2ZW4gcGllY2Ugb2YgY29udGVudCBhbmQga2V5IHN5c3RlbSByZXF1aXJlbWVudHMuICBVc2VkIHRvIGluaXRpYWxpemUgbGljZW5zZVxuICogYWNxdWlzaXRpb24gb3BlcmF0aW9ucy5cbiAqIEBpZ25vcmVcbiAqL1xuY2xhc3MgS2V5U3lzdGVtQWNjZXNzIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge01lZGlhUGxheWVyLmRlcGVuZGVuY2llcy5wcm90ZWN0aW9uLktleVN5c3RlbX0ga2V5U3lzdGVtIHRoZSBrZXkgc3lzdGVtXG4gICAgICogQHBhcmFtIHtLZXlTeXN0ZW1Db25maWd1cmF0aW9ufSBrc0NvbmZpZ3VyYXRpb24gdGhlXG4gICAgICogc3Vic2V0IG9mIGNvbmZpZ3VyYXRpb25zIHBhc3NlZCB0byB0aGUga2V5IHN5c3RlbSBhY2Nlc3MgcmVxdWVzdCB0aGF0IGFyZSBzdXBwb3J0ZWRcbiAgICAgKiBieSB0aGlzIHVzZXIgYWdlbnRcbiAgICAgKiBAY2xhc3NcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioa2V5U3lzdGVtLCBrc0NvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgdGhpcy5rZXlTeXN0ZW0gPSBrZXlTeXN0ZW07XG4gICAgICAgIHRoaXMua3NDb25maWd1cmF0aW9uID0ga3NDb25maWd1cmF0aW9uO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5U3lzdGVtQWNjZXNzO1xuIiwiLyoqXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cblxuLyoqXG4gKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBzZXQgb2YgY29uZmlndXJhdGlvbnMgdGhhdCBkZXNjcmliZSB0aGUgY2FwYWJpbGl0aWVzIGRlc2lyZWQgZm9yXG4gKiAgc3VwcG9ydCBieSBhIGdpdmVuIENETVxuICogQGlnbm9yZVxuICovXG5jbGFzcyBLZXlTeXN0ZW1Db25maWd1cmF0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0FycmF5LjxNZWRpYUNhcGFiaWxpdHk+fSBhdWRpb0NhcGFiaWxpdGllcyBhcnJheSBvZlxuICAgICAqIGRlc2lyZWQgYXVkaW8gY2FwYWJpbGl0aWVzLiAgSGlnaGVyIHByZWZlcmVuY2UgY2FwYWJpbGl0aWVzIHNob3VsZCBiZSBwbGFjZWQgZWFybGllclxuICAgICAqIGluIHRoZSBhcnJheS5cbiAgICAgKiBAcGFyYW0ge0FycmF5LjxNZWRpYUNhcGFiaWxpdHk+fSB2aWRlb0NhcGFiaWxpdGllcyBhcnJheSBvZlxuICAgICAqIGRlc2lyZWQgdmlkZW8gY2FwYWJpbGl0aWVzLiAgSGlnaGVyIHByZWZlcmVuY2UgY2FwYWJpbGl0aWVzIHNob3VsZCBiZSBwbGFjZWQgZWFybGllclxuICAgICAqIGluIHRoZSBhcnJheS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzdGluY3RpdmVJZGVudGlmaWVyIGRlc2lyZWQgdXNlIG9mIGRpc3RpbmN0aXZlIGlkZW50aWZpZXJzLlxuICAgICAqIE9uZSBvZiBcInJlcXVpcmVkXCIsIFwib3B0aW9uYWxcIiwgb3IgXCJub3QtYWxsb3dlZFwiXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBlcnNpc3RlbnRTdGF0ZSBkZXNpcmVkIHN1cHBvcnQgZm9yIHBlcnNpc3RlbnQgc3RvcmFnZSBvZlxuICAgICAqIGtleSBzeXN0ZW1zLiAgT25lIG9mIFwicmVxdWlyZWRcIiwgXCJvcHRpb25hbFwiLCBvciBcIm5vdC1hbGxvd2VkXCJcbiAgICAgKiBAcGFyYW0ge0FycmF5LjxzdHJpbmc+fSBzZXNzaW9uVHlwZXMgTGlzdCBvZiBzZXNzaW9uIHR5cGVzIHRoYXQgbXVzdFxuICAgICAqIGJlIHN1cHBvcnRlZCBieSB0aGUga2V5IHN5c3RlbVxuICAgICAqIEBjbGFzc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGF1ZGlvQ2FwYWJpbGl0aWVzLCB2aWRlb0NhcGFiaWxpdGllcywgZGlzdGluY3RpdmVJZGVudGlmaWVyLCBwZXJzaXN0ZW50U3RhdGUsIHNlc3Npb25UeXBlcykge1xuICAgICAgICB0aGlzLmluaXREYXRhVHlwZXMgPSBbICdjZW5jJyBdO1xuICAgICAgICBpZiAoYXVkaW9DYXBhYmlsaXRpZXMgJiYgYXVkaW9DYXBhYmlsaXRpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvQ2FwYWJpbGl0aWVzID0gYXVkaW9DYXBhYmlsaXRpZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZpZGVvQ2FwYWJpbGl0aWVzICYmIHZpZGVvQ2FwYWJpbGl0aWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy52aWRlb0NhcGFiaWxpdGllcyA9IHZpZGVvQ2FwYWJpbGl0aWVzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlzdGluY3RpdmVJZGVudGlmaWVyID0gZGlzdGluY3RpdmVJZGVudGlmaWVyO1xuICAgICAgICB0aGlzLnBlcnNpc3RlbnRTdGF0ZSA9IHBlcnNpc3RlbnRTdGF0ZTtcbiAgICAgICAgdGhpcy5zZXNzaW9uVHlwZXMgPSBzZXNzaW9uVHlwZXM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXlTeXN0ZW1Db25maWd1cmF0aW9uO1xuIiwiLyoqXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbi8qKlxuICogQGNsYXNzZGVzYyBBIG1lZGlhIGNhcGFiaWxpdHlcbiAqIEBpZ25vcmVcbiAqL1xuY2xhc3MgTWVkaWFDYXBhYmlsaXR5IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFR5cGUgTUlNRSB0eXBlIGFuZCBjb2RlY3MgKFJGQzYzODYpXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJvYnVzdG5lc3NcbiAgICAgKiBAY2xhc3NcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29udGVudFR5cGUsIHJvYnVzdG5lc3MpIHtcbiAgICAgICAgdGhpcy5jb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlO1xuICAgICAgICB0aGlzLnJvYnVzdG5lc3MgPSByb2J1c3RuZXNzO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVkaWFDYXBhYmlsaXR5O1xuIiwiLyoqXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbi8qKlxuICogQGNsYXNzZGVzYyBOZWVkS2V5XG4gKiBAaWdub3JlXG4gKi9cbmNsYXNzIE5lZWRLZXkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGluaXREYXRhIHRoZSBpbml0aWFsaXphdGlvbiBkYXRhXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGluaXREYXRhVHlwZSBpbml0aWFsaXphdGlvbiBkYXRhIHR5cGVcbiAgICAgKiBAY2xhc3NcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihpbml0RGF0YSwgaW5pdERhdGFUeXBlKSB7XG4gICAgICAgIHRoaXMuaW5pdERhdGEgPSBpbml0RGF0YTtcbiAgICAgICAgdGhpcy5pbml0RGF0YVR5cGUgPSBpbml0RGF0YVR5cGU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZWVkS2V5O1xuIiwiLyoqXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKi9cbi8qKlxuICogQGNsYXNzXG4gKiBAaWdub3JlXG4gKi9cbmNsYXNzIERhc2hKU0Vycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcihjb2RlLCBtZXNzYWdlLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGUgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCBudWxsO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhIHx8IG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoSlNFcnJvcjsiXX0=
