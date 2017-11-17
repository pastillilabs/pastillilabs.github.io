'use strict'
var log = null
var $manifest$style$font$lineHeight = 1.2
var $manifest$style$font$pixelSize = 16
var $manifest$style$font$family = "Arial"
/** @const @type {!CoreObject} */
var qml = (function() {/** @const */
var exports = {};
exports._get = function(name) { return exports[name] }
/** @const */
var _globals = exports
if (!_globals.core) /** @const */ _globals.core = {}
if (!_globals.video) /** @const */ _globals.video = {}
if (!_globals.video.html5) /** @const */ _globals.video.html5 = {}
if (!_globals.video.videojs) /** @const */ _globals.video.videojs = {}
if (!_globals.html5) /** @const */ _globals.html5 = {}
if (!_globals.controls) /** @const */ _globals.controls = {}
if (!_globals.controls.web) /** @const */ _globals.controls.web = {}
if (!_globals.controls.pure) /** @const */ _globals.controls.pure = {}
if (!_globals.src) /** @const */ _globals.src = {}
_globals.core.core = (function() {/** @const */
var exports = _globals;
exports._get = function(name) { return exports[name] }
//=====[import core.core]=====================

//WARNING: no log() function usage before init.js

exports.core.device = 0
exports.core.vendor = ""

exports.core.trace = { key: false, focus: false, listeners: false }
exports.core.__videoBackends = {}

if (typeof navigator !== 'undefined') {
	exports.core.os = navigator.platform
	exports.core.userAgent = navigator.userAgent
	exports.core.language = navigator.language
} else if ((typeof process !== 'undefined') && (process.release.name === 'node')) {
	exports.core.os = process.platform
	exports.core.userAgent = process.release.name
} else {
	exports.core.os = 'unknown'
	exports.core.userAgent = 'Unknown'
}

var _checkDevice = function(target, info) {
	if (exports.core.userAgent.indexOf(target) < 0)
		return

	exports.core.vendor = info.vendor
	exports.core.device = info.device
	exports.core.os = info.os
}

if (!exports.core.vendor) {
	_checkDevice('Blackberry', { 'vendor': 'blackberry', 'device': 2, 'os': 'blackberry' })
	_checkDevice('Android', { 'vendor': 'google', 'device': 2, 'os': 'android' })
	_checkDevice('iPhone', { 'vendor': 'apple', 'device': 2, 'os': 'iOS' })
	_checkDevice('iPad', { 'vendor': 'apple', 'device': 2, 'os': 'iOS' })
	_checkDevice('iPod', { 'vendor': 'apple', 'device': 2, 'os': 'iOS' })
}

if (exports.core.userAgent.indexOf('Chromium') >= 0)
	exports.core.browser = "Chromium"
else if (exports.core.userAgent.indexOf('Chrome') >= 0)
	exports.core.browser = "Chrome"
else if (exports.core.userAgent.indexOf('Opera') >= 0)
	exports.core.browser = "Opera"
else if (exports.core.userAgent.indexOf('Firefox') >= 0)
	exports.core.browser = "Firefox"
else if (exports.core.userAgent.indexOf('Safari') >= 0)
	exports.core.browser = "Safari"
else if (exports.core.userAgent.indexOf('MSIE') >= 0)
	exports.core.browser = "IE"
else if (exports.core.userAgent.indexOf('YaBrowser') >= 0)
	exports.core.browser = "Yandex"
else
	exports.core.browser = ''


_globals._backend = function() { return _globals.html5.html }
_globals.core.__videoBackends.html5 = function() { return _globals.video.html5.backend }
_globals.core.__videoBackends.videojs = function() { return _globals.video.videojs.backend }
exports.core.keyCodes = {
	13: 'Select',
	16: 'Shift',
	17: 'Ctrl',
	18: 'LeftAlt',
	27: 'Back',
	37: 'Left',
	32: 'Space',
	33: 'PageUp',
	34: 'PageDown',
	38: 'Up',
	39: 'Right',
	40: 'Down',
	48: '0',
	49: '1',
	50: '2',
	51: '3',
	52: '4',
	53: '5',
	54: '6',
	55: '7',
	56: '8',
	57: '9',
	65: 'A',
	66: 'B',
	67: 'C',
	68: 'D',
	69: 'E',
	70: 'F',
	71: 'G',
	72: 'H',
	73: 'I',
	74: 'J',
	75: 'K',
	76: 'L',
	77: 'M',
	78: 'N',
	79: 'O',
	80: 'P',
	81: 'Q',
	82: 'R',
	83: 'S',
	84: 'T',
	85: 'U',
	86: 'V',
	87: 'W',
	88: 'X',
	89: 'Y',
	90: 'Z',
	112: 'Red',
	113: 'Green',
	114: 'Yellow',
	115: 'Blue',
	230: 'RightAlt'
}


if (!Function.prototype.bind) {
	Function.prototype.bind = function(oThis) {
		if (typeof this !== 'function') {
			throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable')
		}

		var aArgs = Array.prototype.slice.call(arguments, 1),
			fToBind = this,
			fNOP    = function() {},
			fBound  = function() {
				return fToBind.apply(this instanceof fNOP && oThis
					? this
					: oThis,
					aArgs.concat(Array.prototype.slice.call(arguments)))
			}

			fNOP.prototype = this.prototype;
			fBound.prototype = new fNOP();

			return fBound;
	}

	if (log === null) {
		//old webkits with no bind don't allow binding console.log
		log = function() {
			var line = ''
			for(var i = 0; i < arguments.length; ++i) {
				line += arguments[i] + ' '
			}
			console.log(line)
		}
	}
}

if (log === null)
	log = console.log.bind(console)

/** @const */
/** @param {string} text @param {...} args */
_globals.qsTr = function(text, args) { return _globals._context.qsTr.apply(qml._context, arguments) }

var colorTable = {
	'maroon':	'800000',
	'red':		'ff0000',
	'orange':	'ffA500',
	'yellow':	'ffff00',
	'olive':	'808000',
	'purple':	'800080',
	'fuchsia':	'ff00ff',
	'white':	'ffffff',
	'lime':		'00ff00',
	'green':	'008000',
	'navy':		'000080',
	'blue':		'0000ff',
	'aqua':		'00ffff',
	'teal':		'008080',
	'black':	'000000',
	'silver':	'c0c0c0',
	'gray':		'080808',
	'transparent': '0000'
}

var safeCallImpl = function(callback, self, args, onError) {
	try { return callback.apply(self, args) } catch(ex) { onError(ex) }
}

exports.core.safeCall = function(self, args, onError) {
	return function(callback) { return safeCallImpl(callback, self, args, onError) }
}

/**
 * @constructor
 */
var CoreObjectComponent = exports.core.CoreObject = function(parent) {
	this._local = Object.create(parent? parent._local: null)
}

var CoreObjectComponentPrototype = CoreObjectComponent.prototype
CoreObjectComponentPrototype.componentName = 'core.CoreObject'
CoreObjectComponentPrototype.constructor = CoreObjectComponent

/** @private **/
CoreObjectComponentPrototype.__create = function() { }

/** @private **/
CoreObjectComponentPrototype.__setup = function() { }

///@private gets object by id
CoreObjectComponentPrototype._get = function(name, unsafe) {
	var result = this[name]
	if (result !== undefined)
		return result

	result = this._local[name]
	if (result !== undefined)
		return result

	if (unsafe)
		return null
	else
		throw new Error("invalid property requested: '" + name + "'")
}

/** @constructor */
var Color = exports.core.Color = function(value) {
	if (Array.isArray(value)) {
		this.r = value[0]
		this.g = value[1]
		this.b = value[2]
		this.a = value[3] !== undefined? value[3]: 255
		return
	}
	if (typeof value !== 'string')
	{
		this.r = this.b = this.a = 255
		this.g = 0
		log("invalid color specification: " + value, new Error().stack)
		return
	}
	var triplet
	if (value.substring(0, 4) == "rgba") {
		var b = value.indexOf('('), e = value.lastIndexOf(')')
		value = value.substring(b + 1, e).split(',')
		this.r = parseInt(value[0], 10)
		this.g = parseInt(value[1], 10)
		this.b = parseInt(value[2], 10)
		this.a = Math.floor(parseFloat(value[3]) * 255)
		return
	}
	else {
		var h = value[0]
		if (h != '#')
			triplet = colorTable[value]
		else
			triplet = value.substring(1)
	}

	if (!triplet) {
		this.r = 255
		this.g = 0
		this.b = 255
		log("invalid color specification: " + value)
		return
	}

	var len = triplet.length;
	if (len == 3 || len == 4) {
		var r = parseInt(triplet[0], 16)
		var g = parseInt(triplet[1], 16)
		var b = parseInt(triplet[2], 16)
		var a = (len == 4)? parseInt(triplet[3], 16): 15
		this.r = (r << 4) | r;
		this.g = (g << 4) | g;
		this.b = (b << 4) | b;
		this.a = (a << 4) | a;
	} else if (len == 6 || len == 8) {
		this.r = parseInt(triplet.substring(0, 2), 16)
		this.g = parseInt(triplet.substring(2, 4), 16)
		this.b = parseInt(triplet.substring(4, 6), 16)
		this.a = (len == 8)? parseInt(triplet.substring(6, 8), 16): 255
	} else
		throw new Error("invalid color specification: " + value)
}
var ColorPrototype = Color.prototype
ColorPrototype.constructor = exports.core.Color
/** @const */

ColorPrototype.rgba = function() {
	return "rgba(" + this.r + "," + this.g + "," + this.b + "," + (this.a / 255) + ")";
}

var hexByte = function(v) {
	return ('0' + (Number(v).toString(16))).slice(-2)
}

ColorPrototype.hex = function() {
	return '#' + hexByte(this.r) + hexByte(this.g) + hexByte(this.b) + hexByte(this.a)
}

exports.core.normalizeColor = function(spec) {
	return (new Color(spec)).rgba()
}

exports.core.mixColor = function(specA, specB, r) {
	var a = new Color(specA)
	var b = new Color(specB)
	var mix = function(a, b, r) { return Math.floor((b - a) * r + a) }
	return [mix(a.r, b.r, r), mix(a.g, b.g, r), mix(a.b, b.b, r), mix(a.a, b.a, r)]
}

exports.addLazyProperty = function(proto, name, creator) {
	var storageName = '__lazy_property_' + name
	var forwardName = '__forward_' + name

	var get = function(object) {
		var value = object[storageName]
		if (value !== undefined)
			return value
		else
			return (object[storageName] = creator(object))
	}

	Object.defineProperty(proto, name, {
		get: function() {
			return get(this)
		},

		set: function(newValue) {
			var forwardedTarget = this[forwardName]
			if (forwardedTarget !== undefined) {
				var target = get(this)
				if (target !== null && (target instanceof Object)) {
					//forward property update for mixins
					var forwardedValue = target[forwardedTarget]
					if (newValue !== forwardedValue) {
						target[forwardedTarget] = newValue
						this._update(name, newValue, forwardedValue)
					}
					return
				}
			}

			throw new Error('setting attempt on readonly lazy property ' + name + ' in ' + proto.componentName)
		},
		enumerable: true
	})
}

exports.addProperty = function(proto, type, name, defaultValue) {
	var convert
	switch(type) {
		case 'enum':
		case 'int':		convert = function(value) { return ~~value }; break
		case 'bool':	convert = function(value) { return value? true: false }; break
		case 'real':	convert = function(value) { return +value }; break
		case 'string':	convert = function(value) { return String(value) }; break
		default:		convert = function(value) { return value }; break
	}

	if (defaultValue !== undefined) {
		defaultValue = convert(defaultValue)
	} else {
		switch(type) {
			case 'enum': //fixme: add default value here
			case 'int':		defaultValue = 0; break
			case 'bool':	defaultValue = false; break
			case 'real':	defaultValue = 0.0; break
			case 'string':	defaultValue = ""; break
			case 'array':	defaultValue = []; break
			case 'Color':	defaultValue = '#0000'; break
			default:
				defaultValue = (type[0].toUpperCase() == type[0])? null: undefined
		}
	}

	var storageName = '__property_' + name
	var forwardName = '__forward_' + name

	Object.defineProperty(proto, name, {
		get: function() {
			var p = this[storageName]
			return p !== undefined?
				p.interpolatedValue !== undefined? p.interpolatedValue: p.value:
				defaultValue
		},

		set: function(newValue) {
			newValue = convert(newValue)
			var p = this[storageName]
			if (p === undefined) { //no storage
				if (newValue === defaultValue) //value == defaultValue, no storage allocation
					return

				p = this[storageName] = { value : defaultValue }
			}

			var animation = this.getAnimation(name)
			if (animation && p.value !== newValue) {
				var context = this._context
				var backend = context.backend
				if (p.frameRequest)
					backend.cancelAnimationFrame(p.frameRequest)

				p.started = Date.now()

				var src = p.interpolatedValue !== undefined? p.interpolatedValue: p.value
				var dst = newValue

				var self = this

				var complete = function() {
					backend.cancelAnimationFrame(p.frameRequest)
					p.frameRequest = undefined
					animation.complete = function() { }
					animation.running = false
					p.interpolatedValue = undefined
					p.started = undefined
					self._update(name, dst, src)
				}

				var duration = animation.duration

				var nextFrame = function() {
					var now = Date.now()
					var t = 1.0 * (now - p.started) / duration
					if (t >= 1 || !animation.active()) {
						complete()
					} else {
						p.interpolatedValue = convert(animation.interpolate(dst, src, t))
						self._update(name, p.interpolatedValue, src)
						p.frameRequest = backend.requestAnimationFrame(nextFrame)
					}
					context._processActions() //fixme: handle exception, create helper in core, e.g. wrapNativeCallback(), port existing html5 code
				}

				p.frameRequest = backend.requestAnimationFrame(nextFrame)

				animation.running = true
				animation.complete = complete
			}
			var oldValue = p.value
			if (oldValue !== newValue) {
				var forwardTarget = this[forwardName]
				if (forwardTarget !== undefined) {
					if (oldValue !== null && (oldValue instanceof Object)) {
						//forward property update for mixins
						var forwardedOldValue = oldValue[forwardTarget]
						if (newValue !== forwardedOldValue) {
							oldValue[forwardTarget] = newValue
							this._update(name, newValue, forwardedOldValue)
						}
						return
					} else if (newValue instanceof Object) {
						//first assignment of mixin
						this.connectOnChanged(newValue, forwardTarget, function(v, ov) { this._update(name, v, ov) }.bind(this))
					}
				}
				p.value = newValue
				if ((!animation || !animation.running) && newValue === defaultValue)
					delete this[storageName]
				if (!animation)
					this._update(name, newValue, oldValue)
			}
		},
		enumerable: true
	})
}

exports.addAliasProperty = function(self, name, getObject, srcProperty) {
	var target = getObject()
	self.connectOnChanged(target, srcProperty, function(value) { self._update(name, value) })

	Object.defineProperty(self, name, {
		get: function() { return target[srcProperty] },
		set: function(value) { target[srcProperty] = value },
		enumerable: true
	})
}

exports.core.createSignal = function(name) {
	return function() {
		this.emitWithArgs(name, arguments)
	}
}
exports.core.createSignalForwarder = function(object, name) {
	return (function() {
		object.emitWithArgs(name, arguments)
	})
}

/** @constructor */
exports.core.EventBinder = function(target) {
	this.target = target
	this.callbacks = {}
	this.enabled = false
}

exports.core.EventBinder.prototype.on = function(event, callback) {
	if (event in this.callbacks)
		throw new Error('double adding of event (' + event + ')')
	this.callbacks[event] = callback
	if (this.enabled)
		this.target.on(event, callback)
}

exports.core.EventBinder.prototype.constructor = exports.core.EventBinder

exports.core.EventBinder.prototype.enable = function(value) {
	if (value != this.enabled) {
		var target = this.target
		this.enabled = value
		if (value) {
			for(var event in this.callbacks)
				target.on(event, this.callbacks[event])
		} else {
			for(var event in this.callbacks)
				target.removeListener(event, this.callbacks[event])
		}
	}
}

var protoEvent = function(prefix, proto, name, callback) {
	var sname = '__' + prefix + '__' + name
	//if property was in base prototype, create shallow copy and put our handler there or we would add to base prototype's array
	var ownStorage = proto.hasOwnProperty(sname)
	var storage = proto[sname]
	if (storage != undefined) {
		if (ownStorage)
			storage.push(callback)
		else {
			var copy = storage.slice()
			copy.push(callback)
			proto[sname] = copy
		}
	} else
		proto[sname] = [callback]
}

exports.core._protoOn = function(proto, name, callback)
{ protoEvent('on', proto, name, callback) }

exports.core._protoOnChanged = function(proto, name, callback)
{ protoEvent('changed', proto, name, callback) }

exports.core._protoOnKey = function(proto, name, callback)
{ protoEvent('key', proto, name, callback) }

var ObjectEnumerator = function(callback) {
	this._callback = callback
	this._queue = []
	this.history = []
}

var ObjectEnumeratorPrototype = ObjectEnumerator.prototype
ObjectEnumeratorPrototype.constructor = ObjectEnumerator

ObjectEnumeratorPrototype.unshift = function() {
	var q = this._queue
	q.unshift.apply(q, arguments)
}

ObjectEnumeratorPrototype.push = function() {
	var q = this._queue
	q.push.apply(q, arguments)
}

ObjectEnumeratorPrototype.enumerate = function(root, arg) {
	var args = [this, arg]
	var queue = this._queue
	queue.unshift(root)
	while(queue.length) {
		var el = queue.shift()
		this.history.push(el)
		var r = this._callback.apply(el, args)
		if (r)
			break
	}
}

exports.forEach = function(root, callback, arg) {
	var oe = new ObjectEnumerator(callback)
	oe.enumerate(root, arg)
	return arg
}

return exports;
} )()
//========================================

/** @const @type {!CoreObject} */
var core = _globals.core.core


//=====[component core.EventEmitter]=====================

	var EventEmitterBaseComponent = _globals.core.CoreObject
	var EventEmitterBasePrototype = EventEmitterBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.CoreObject}
 */
	var EventEmitterComponent = _globals.core.EventEmitter = function(parent, _delegate) {
		EventEmitterBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._eventHandlers = {}
		this._onConnections = []
	}

	}
	var EventEmitterPrototype = EventEmitterComponent.prototype = Object.create(EventEmitterBasePrototype)

	EventEmitterPrototype.constructor = EventEmitterComponent

	EventEmitterPrototype.componentName = 'core.EventEmitter'
	EventEmitterPrototype.on = function(name,callback) {
		if (name === '')
			throw new Error('empty listener name')

		var storage = this._eventHandlers
		var handlers = storage[name]
		if (handlers !== undefined)
			handlers.push(callback)
		else {
			storage[name] = [callback]
		}
	}
	EventEmitterPrototype.discard = function() {
		for(var name in this._eventHandlers)
			this.removeAllListeners(name)
		this._onConnections.forEach(function(connection) {
			connection[0].removeListener(connection[1], connection[2])
		})
		this._onConnections = []
	}
	EventEmitterPrototype.emitWithArgs = function(name,args) {
		if (name === '')
			throw new Error('empty listener name')

		var proto_callback = this['__on__' + name]
		var handlers = this._eventHandlers[name]

		if (proto_callback === undefined && handlers === undefined)
			return

		var invoker = _globals.core.safeCall(
			this, args,
			function(ex) { log("event/signal " + name + " handler failed:", ex, ex.stack) }
		)

		if (proto_callback !== undefined)
			proto_callback.forEach(invoker)

		if (handlers !== undefined)
			handlers.forEach(invoker)
	}
	EventEmitterPrototype.connectOn = function(target,name,callback) {
		target.on(name, callback)
		this._onConnections.push([target, name, callback])
	}
	EventEmitterPrototype.removeListener = function(name,callback) {
		if (!(name in this._eventHandlers) || callback === undefined || callback === null || name === '') {
			if (_globals.core.trace.listeners)
				log('invalid removeListener(' + name + ', ' + callback + ') invocation', new Error().stack)
			return
		}

		var handlers = this._eventHandlers[name]
		var idx = handlers.indexOf(callback)
		if (idx >= 0)
			handlers.splice(idx, 1)
		else if (_globals.core.trace.listeners)
			log('failed to remove listener for', name, 'from', this)

		if (!handlers.length)
			this.removeAllListeners(name)
	}
	EventEmitterPrototype.emit = function(name) {
		if (name === '')
			throw new Error('empty listener name')

		var proto_callback = this['__on__' + name]
		var handlers = this._eventHandlers[name]

		if (proto_callback === undefined && handlers === undefined)
			return

		
		/* COPY_ARGS(args, 1) */
		var $n = arguments.length
		var args = new Array($n - 1)
		var $d = 0, $s = 1;
		while($s < $n) {
			args[$d++] = arguments[$s++]
		}


		var invoker = _globals.core.safeCall(
			this, args,
			function(ex) { log("event/signal " + name + " handler failed:", ex, ex.stack) }
		)

		if (proto_callback !== undefined)
			proto_callback.forEach(invoker)

		if (handlers !== undefined)
			handlers.forEach(invoker)
	}
	EventEmitterPrototype.removeAllListeners = function(name) {
		delete this._eventHandlers[name]
	}

//=====[component core.Object]=====================

	var ObjectBaseComponent = _globals.core.EventEmitter
	var ObjectBasePrototype = ObjectBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.EventEmitter}
 */
	var ObjectComponent = _globals.core.Object = function(parent, _delegate) {
		ObjectBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.parent = parent
		this.children = []

		this._context = parent? parent._context: null
		if (_delegate === true)
			this._local['_delegate'] = this
		this._changedHandlers = {}
		this._changedConnections = []
		this._pressedHandlers = {}
		this._animations = {}
		this._updaters = {}
	}

	}
	var ObjectPrototype = ObjectComponent.prototype = Object.create(ObjectBasePrototype)

	{
		ObjectPrototype._propertyToStyle = {
			width: 'width', height: 'height',
			x: 'left', y: 'top', viewX: 'left', viewY: 'top',
			opacity: 'opacity',
			border: 'border',
			radius: 'border-radius',
			rotate: 'transform',
			boxshadow: 'box-shadow',
			transform: 'transform',
			visible: 'visibility', visibleInView: 'visibility',
			background: 'background',
			color: 'color',
			backgroundImage: 'background-image',
			font: 'font'
		}
	}

	ObjectPrototype.constructor = ObjectComponent

	ObjectPrototype.componentName = 'core.Object'
	ObjectPrototype.addChild = function(child) {
		this.children.push(child);
	}
	ObjectPrototype.setAnimation = function(name,animation) {
	var content = this._get('content', true), context = this._get('context', true)

		if (typeof $manifest$animationDisabled !== 'undefined' && $manifest$animationDisabled)
			return

		var context = this._context
		var backend = context.backend
		if (name === 'contentX' || name === 'contentY')
			log('WARNING: you\'re trying to animate contentX/contentY property, this will always use animation frames, ignoring CSS transitions, please use content.x/content.y instead')

		var component = this
		animation._target = component
		animation._property = name
		context.scheduleAction(function() {
			component._animations[name] = animation
			if (backend.setAnimation(component, name, animation))
				animation._native = true
		}, 1)
	}
	ObjectPrototype.removeOnChanged = function(name,callback) {
		if (name in this._changedHandlers) {
			var handlers = this._changedHandlers[name];
			var idx = handlers.indexOf(callback)
			if (idx >= 0)
				handlers.splice(idx, 1)
			else if (_globals.core.trace.listeners)
				log('failed to remove changed listener for', name, 'from', this)
		}
	}
	ObjectPrototype.connectOnChanged = function(target,name,callback) {
		target.onChanged(name, callback)
		this._changedConnections.push([target, name, callback])
	}
	ObjectPrototype.onChanged = function(name,callback) {
		var storage = this._changedHandlers
		var handlers = storage[name]
		if (handlers !== undefined)
			handlers.push(callback);
		else
			storage[name] = [callback];
	}
	ObjectPrototype.discard = function() {
		this._changedConnections.forEach(function(connection) {
			connection[0].removeOnChanged(connection[1], connection[2])
		})
		this._changedConnections = []

		this.children.forEach(function(child) { child.discard() })
		this.children = []

		this.parent = null
		this._local = {}
		this._changedHandlers = {}
		this._pressedHandlers = {}
		this._animations = {}
		//for(var name in this._updaters) //fixme: it was added once, then removed, is it needed at all? it double-deletes callbacks
		//	this._replaceUpdater(name)
		this._updaters = {}

		_globals.core.EventEmitter.prototype.discard.apply(this)
	}
	ObjectPrototype._tryFocus = function() { return false }
	ObjectPrototype.onPressed = function(name,callback) {
		var wrapper
		if (name != 'Key')
			wrapper = function(key, event) { event.accepted = true; callback(key, event); return event.accepted }
		else
			wrapper = callback;

		if (name in this._pressedHandlers)
			this._pressedHandlers[name].push(wrapper);
		else
			this._pressedHandlers[name] = [wrapper];
	}
	ObjectPrototype._setId = function(name) {
		var p = this;
		while(p) {
			p._local[name] = this;
			p = p.parent;
		}
	}
	ObjectPrototype._setProperty = function(name,value) {
		var animation = this._animations[name]
		if (animation !== undefined)
			animation.disable()

		//cancel any running software animations
		var storageName = '__property_' + name
		var storage = this[storageName] || {}
		delete storage.interpolatedValue
		storage.value = value
		this[storageName] = storage

		if (animation !== undefined)
			animation.enable()
	}
	ObjectPrototype._update = function(name,value) {
		var protoCallbacks = this['__changed__' + name]
		var handlers = this._changedHandlers[name]

		var hasProtoCallbacks = protoCallbacks !== undefined
		var hasHandlers = handlers !== undefined

		if (!hasProtoCallbacks && !hasHandlers)
			return

		var invoker = _globals.core.safeCall(this, [value], function(ex) { log("on " + name + " changed callback failed: ", ex, ex.stack) })

		if (hasProtoCallbacks)
			protoCallbacks.forEach(invoker)

		if (hasHandlers)
			handlers.forEach(invoker)
	}
	ObjectPrototype.getAnimation = function(name,animation) {
		if (!this._context._completed)
			return null
		var a = this._animations[name]
		return (a !== undefined && a.enabled() && !a._native)? a:  null;
	}
	ObjectPrototype._replaceUpdater = function(name,newUpdaters) {
		var updaters = this._updaters
		var oldUpdaters = updaters[name]
		if (oldUpdaters !== undefined) {
			var callback = oldUpdaters[0]
			oldUpdaters[1].forEach(function(data) {
				var object = data[0]
				var name = data[1]
				object.removeOnChanged(name, callback)
			})
		}

		if (newUpdaters) {
			updaters[name] = newUpdaters
			var callback = newUpdaters[0]
			var parent = this
			newUpdaters[1].forEach(function(data) {
				var object = data[0]
				var name = data[1]
				parent.connectOnChanged(object, name, callback)
			})
			callback()
		} else
			delete updaters[name]
	}
	ObjectPrototype.updateAnimation = function(name,animation) {
		this._context.backend.setAnimation(this, name, animation)
	}

//=====[component core.System]=====================

	var SystemBaseComponent = _globals.core.Object
	var SystemBasePrototype = SystemBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var SystemComponent = _globals.core.System = function(parent, _delegate) {
		SystemBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.vendor = _globals.core.vendor
		this.device = _globals.core.device
		this.os = _globals.core.os

		this.browser = _globals.core.browser
		this.userAgent = _globals.core.userAgent
		this.language = _globals.core.language

		var ctx = this._context
		ctx.language = this.language.replace('-', '_')
		this.webkit = this.userAgent.toLowerCase().indexOf('webkit') >= 0

		this.support3dTransforms = ctx.backend.capabilities.csstransforms3d || false
		this.supportTransforms = ctx.backend.capabilities.csstransforms || false
		this.supportTransitions = ctx.backend.capabilities.csstransitions || false
	}

	}
	var SystemPrototype = SystemComponent.prototype = Object.create(SystemBasePrototype)

	SystemPrototype.constructor = SystemComponent

	SystemPrototype.componentName = 'core.System'
	SystemPrototype._updateLayoutType = function() {
		if (!this.contextWidth || !this.contextHeight)
			return
		var min = this.contextWidth;// < this.contextHeight ? this.contextWidth : this.contextHeight

		if (min <= 320)
			this.layoutType = this.MobileS
		else if (min <= 375)
			this.layoutType = this.MobileM
		else if (min <= 425)
			this.layoutType = this.MobileL
		else if (min <= 768)
			this.layoutType = this.Tablet
		else if (this.contextWidth <= 1024)
			this.layoutType = this.Laptop
		else if (this.contextWidth <= 1440)
			this.layoutType = this.LaptopL
		else
			this.layoutType = this.Laptop4K
	}
	core.addProperty(SystemPrototype, 'string', 'userAgent')
	core.addProperty(SystemPrototype, 'string', 'language')
	core.addProperty(SystemPrototype, 'string', 'browser')
	core.addProperty(SystemPrototype, 'string', 'vendor')
	core.addProperty(SystemPrototype, 'string', 'os')
	core.addProperty(SystemPrototype, 'bool', 'webkit')
	core.addProperty(SystemPrototype, 'bool', 'support3dTransforms')
	core.addProperty(SystemPrototype, 'bool', 'supportTransforms')
	core.addProperty(SystemPrototype, 'bool', 'supportTransitions')
	core.addProperty(SystemPrototype, 'bool', 'portrait')
	core.addProperty(SystemPrototype, 'bool', 'landscape')
	core.addProperty(SystemPrototype, 'bool', 'pageActive', (true))
	core.addProperty(SystemPrototype, 'int', 'screenWidth')
	core.addProperty(SystemPrototype, 'int', 'screenHeight')
	core.addProperty(SystemPrototype, 'int', 'contextWidth')
	core.addProperty(SystemPrototype, 'int', 'contextHeight')
/** @const @type {number} */
	SystemPrototype.Desktop = 0
/** @const @type {number} */
	SystemComponent.Desktop = 0
/** @const @type {number} */
	SystemPrototype.Tv = 1
/** @const @type {number} */
	SystemComponent.Tv = 1
/** @const @type {number} */
	SystemPrototype.Mobile = 2
/** @const @type {number} */
	SystemComponent.Mobile = 2
	core.addProperty(SystemPrototype, 'enum', 'device')
/** @const @type {number} */
	SystemPrototype.MobileS = 0
/** @const @type {number} */
	SystemComponent.MobileS = 0
/** @const @type {number} */
	SystemPrototype.MobileM = 1
/** @const @type {number} */
	SystemComponent.MobileM = 1
/** @const @type {number} */
	SystemPrototype.MobileL = 2
/** @const @type {number} */
	SystemComponent.MobileL = 2
/** @const @type {number} */
	SystemPrototype.Tablet = 3
/** @const @type {number} */
	SystemComponent.Tablet = 3
/** @const @type {number} */
	SystemPrototype.Laptop = 4
/** @const @type {number} */
	SystemComponent.Laptop = 4
/** @const @type {number} */
	SystemPrototype.LaptopL = 5
/** @const @type {number} */
	SystemComponent.LaptopL = 5
/** @const @type {number} */
	SystemPrototype.Laptop4K = 6
/** @const @type {number} */
	SystemComponent.Laptop4K = 6
	core.addProperty(SystemPrototype, 'enum', 'layoutType')
	_globals.core._protoOnChanged(SystemPrototype, 'contextHeight', (function(value) { this._updateLayoutType() } ))
	_globals.core._protoOnChanged(SystemPrototype, 'contextWidth', (function(value) { this._updateLayoutType() } ))

	SystemPrototype.__create = function(__closure) {
		var $this = this;
		SystemBasePrototype.__create.call(this, __closure.__base = { })

	}
	SystemPrototype.__setup = function(__closure) {
		var $this = this;
	SystemBasePrototype.__setup.call(this, __closure.__base); delete __closure.__base
//assigning portrait to (${parent.width} < ${parent.height})
			var update$_this$portrait = function() { $this.portrait = ($this._get('parent')._get('width') < $this._get('parent')._get('height')); }
			$this._replaceUpdater('portrait', [update$_this$portrait, [[$this._get('parent'), 'height'],[$this._get('parent'), 'width']]])
//assigning contextWidth to (${context.width})
			var update$_this$contextWidth = function() { $this.contextWidth = ($this._get('context')._get('width')); }
			$this._replaceUpdater('contextWidth', [update$_this$contextWidth, [[$this._get('context'), 'width']]])
//assigning landscape to (! ${portrait})
			var update$_this$landscape = function() { $this.landscape = (! $this._get('portrait')); }
			$this._replaceUpdater('landscape', [update$_this$landscape, [[$this, 'portrait']]])
//assigning contextHeight to (${context.height})
			var update$_this$contextHeight = function() { $this.contextHeight = ($this._get('context')._get('height')); }
			$this._replaceUpdater('contextHeight', [update$_this$contextHeight, [[$this._get('context'), 'height']]])
}


//=====[component core.Item]=====================

	var ItemBaseComponent = _globals.core.Object
	var ItemBasePrototype = ItemBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var ItemComponent = _globals.core.Item = function(parent, _delegate) {
		ItemBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._topPadding = 0
		if (parent) {
			if (this.element)
				throw new Error('double ctor call')

			this._createElement(this.getTag(), this.getClass())
		} //no parent == top level element, skip
	}

	}
	var ItemPrototype = ItemComponent.prototype = Object.create(ItemBasePrototype)

	ItemPrototype.constructor = ItemComponent

	ItemPrototype.componentName = 'core.Item'
	ItemPrototype.boxChanged = _globals.core.createSignal('boxChanged')
	ItemPrototype.registerStyle = function(style,tag) {
		var rules = 'position: absolute; visibility: inherit; border-style: solid; border-width: 0px; white-space: nowrap; border-radius: 0px; opacity: 1.0; transform: none; left: 0px; top: 0px; width: 0px; height: 0px; '
		rules += 'font-family: ' + $manifest$style$font$family + '; line-height: ' + $manifest$style$font$lineHeight + '; '
		if ($manifest$style$font$pixelSize)
			rules += 'font-size: ' + $manifest$style$font$pixelSize + 'px; '
		else if ($manifest$style$font$pointSize)
			rules += 'font-size: ' + $manifest$style$font$pointSize + 'pt; '
		style.addRule(tag, rules)
	}
	ItemPrototype._updateVisibilityForChild = function(child,value) {
		child.recursiveVisible = value && child.visible && child.visibleInView
	}
	ItemPrototype.invokeKeyHandlers = function(key,event,handlers,invoker) {
		for(var i = handlers.length - 1; i >= 0; --i) {
			var callback = handlers[i]
			if (invoker(callback)) {
				if (_globals.core.trace.key)
					log("key " + key + " handled in " + (performance.now() - event.timeStamp).toFixed(3) + " ms by", this, new Error().stack)
				return true;
			}
		}
		return false;
	}
	ItemPrototype._focusTree = function(active) {
		this.activeFocus = active;
		if (this.focusedChild)
			this.focusedChild._focusTree(active);
	}
	ItemPrototype.getTag = function() { return 'div' }
	ItemPrototype.forceActiveFocus = function() {
		var item = this;
		while(item.parent) {
			item.parent._focusChild(item);
			item = item.parent;
		}
	}
	ItemPrototype._tryFocus = function() {
		if (!this.visible)
			return false

		if (this.focusedChild && this.focusedChild._tryFocus())
			return true

		var children = this.children
		for(var i = 0; i < children.length; ++i) {
			var child = children[i]
			if (child._tryFocus()) {
				this._focusChild(child)
				return true
			}
		}
		return this.focus
	}
	ItemPrototype._focusChild = function(child) {
		if (child.parent !== this)
			throw new Error('invalid object passed as child')
		if (this.focusedChild === child)
			return
		if (this.focusedChild) {
			this.focusedChild._focusTree(false)
			this.focusedChild.focused = false
		}
		this.focusedChild = child
		if (this.focusedChild) {
			this.focusedChild._focusTree(this.hasActiveFocus())
			this.focusedChild.focused = true
		}
	}
	ItemPrototype.getClass = function() { return '' }
	ItemPrototype.toScreen = function() {
		var item = this
		var x = 0, y = 0
		var w = this.width, h = this.height
		while(item) {
			x += item.x
			y += item.y
			if ('view' in item) {
				x += item.viewX + item.view.content.x
				y += item.viewY + item.view.content.y
			}
			item = item.parent
		}
		return [x, y, x + w, y + h, x + w / 2, y + h / 2];
	}
	ItemPrototype._updateVisibility = function() {
		var visible = this.visible && this.visibleInView

		if (this.element) {
			this.style('visibility', visible? 'inherit': 'hidden')
		}

		this.recursiveVisible = visible && (this.parent !== null? this.parent.recursiveVisible: true)
	}
	ItemPrototype.focusChild = function(child) {
		this._propagateFocusToParents()
		this._focusChild(child)
	}
	ItemPrototype.hasActiveFocus = function() {
		var item = this
		while(item.parent) {
			if (item.parent.focusedChild != item)
				return false

			item = item.parent
		}
		return true
	}
	ItemPrototype.style = function(name,style) {
		var element = this.element
		if (element)
			return element.style(name, style)
		else
			log('WARNING: style skipped:', name, style)
	}
	ItemPrototype._updateStyle = function() {
		var element = this.element
		if (element)
			element.updateStyle()
	}
	ItemPrototype.addChild = function(child) {
		_globals.core.Object.prototype.addChild.apply(this, arguments)
		if (child._tryFocus())
			child._propagateFocusToParents()
	}
	ItemPrototype._propagateFocusToParents = function() {
		var item = this;
		while(item.parent && (!item.parent.focusedChild || !item.parent.focusedChild.visible)) {
			item.parent._focusChild(item)
			item = item.parent
		}
	}
	ItemPrototype.setFocus = function() { this.forceActiveFocus() }
	ItemPrototype.discard = function() {
		_globals.core.Object.prototype.discard.apply(this)
		this.focusedChild = null
		if (this.element)
			this.element.discard()
	}
	ItemPrototype._processKey = function(event) {
		var key = _globals.core.keyCodes[event.which || event.keyCode];
		var eventTime = event.timeStamp

		if (key) {
			if (this.keyProcessDelay) {
				if (eventTime !== this._lastEvent && eventTime - this.keyProcessDelay < this._lastEvent)
					return true

				if (this._lastEvent !== eventTime)
					this._lastEvent = eventTime
			}

			//fixme: create invoker only if any of handlers exist
			var invoker = _globals.core.safeCall(this, [key, event], function (ex) { log("on " + key + " handler failed:", ex, ex.stack) })
			var proto_callback = this['__key__' + key]

			if (key in this._pressedHandlers)
				return this.invokeKeyHandlers(key, event, this._pressedHandlers[key], invoker)

			if (proto_callback)
				return this.invokeKeyHandlers(key, event, proto_callback, invoker)

			var proto_callback = this['__key__Key']
			if ('Key' in this._pressedHandlers)
				return this.invokeKeyHandlers(key, event, this._pressedHandlers['Key'], invoker)

			if (proto_callback)
				return this.invokeKeyHandlers(key, event, proto_callback, invoker)
		} else {
			log("unknown key", event.which)
		}
		return false
	}
	ItemPrototype._enqueueNextChildInFocusChain = function(queue,handlers) {
		this._tryFocus() //soft-restore focus for invisible components
		var focusedChild = this.focusedChild
		if (focusedChild && focusedChild.visible) {
			queue.unshift(focusedChild)
			handlers.unshift(focusedChild)
		}
	}
	ItemPrototype._createElement = function(tag,cls) {
	var context = this._get('context', true)

		var context = this._context
		if (context === null)
			context = this

		this.element = context.createElement(tag, cls)
		this.element._item = this
		context.registerStyle(this, tag, cls)
		this.parent.element.append(this.element)
	}
	core.addProperty(ItemPrototype, 'int', 'x')
	core.addProperty(ItemPrototype, 'int', 'y')
	core.addProperty(ItemPrototype, 'int', 'z')
	core.addProperty(ItemPrototype, 'int', 'width')
	core.addProperty(ItemPrototype, 'int', 'height')
	core.addProperty(ItemPrototype, 'bool', 'clip')
	core.addProperty(ItemPrototype, 'real', 'radius')
	core.addProperty(ItemPrototype, 'bool', 'focus')
	core.addProperty(ItemPrototype, 'bool', 'focused')
	core.addProperty(ItemPrototype, 'bool', 'activeFocus')
	core.addProperty(ItemPrototype, 'Item', 'focusedChild')
	core.addProperty(ItemPrototype, 'bool', 'visible', (true))
	core.addProperty(ItemPrototype, 'bool', 'visibleInView', (true))
	core.addProperty(ItemPrototype, 'bool', 'recursiveVisible', (false))
	core.addProperty(ItemPrototype, 'real', 'opacity', (1))
	core.addLazyProperty(ItemPrototype, 'anchors', (function(__parent) {
		var lazy$anchors = new _globals.core.Anchors(__parent, true)
		var __closure = { lazy$anchors : lazy$anchors }

//creating component Anchors
			lazy$anchors.__create(__closure.__closure_lazy$anchors = { })


//setting up component Anchors
			var lazy$anchors = __closure.lazy$anchors
			lazy$anchors.__setup(__closure.__closure_lazy$anchors)
			delete __closure.__closure_lazy$anchors



		return lazy$anchors
}))
	core.addLazyProperty(ItemPrototype, 'effects', (function(__parent) {
		var lazy$effects = new _globals.core.Effects(__parent, true)
		var __closure = { lazy$effects : lazy$effects }

//creating component Effects
			lazy$effects.__create(__closure.__closure_lazy$effects = { })


//setting up component Effects
			var lazy$effects = __closure.lazy$effects
			lazy$effects.__setup(__closure.__closure_lazy$effects)
			delete __closure.__closure_lazy$effects



		return lazy$effects
}))
	core.addLazyProperty(ItemPrototype, 'transform', (function(__parent) {
		var lazy$transform = new _globals.core.Transform(__parent, true)
		var __closure = { lazy$transform : lazy$transform }

//creating component Transform
			lazy$transform.__create(__closure.__closure_lazy$transform = { })


//setting up component Transform
			var lazy$transform = __closure.lazy$transform
			lazy$transform.__setup(__closure.__closure_lazy$transform)
			delete __closure.__closure_lazy$transform



		return lazy$transform
}))
	core.addProperty(ItemPrototype, 'bool', 'cssTranslatePositioning')
	core.addLazyProperty(ItemPrototype, 'left', (function(__parent) {
		var lazy$left = new _globals.core.AnchorLine(__parent, true)
		var __closure = { lazy$left : lazy$left }

//creating component AnchorLine
			lazy$left.__create(__closure.__closure_lazy$left = { })


//setting up component AnchorLine
			var lazy$left = __closure.lazy$left
			lazy$left.__setup(__closure.__closure_lazy$left)
			delete __closure.__closure_lazy$left

//assigning boxIndex to (0)
			lazy$left._replaceUpdater('boxIndex'); lazy$left.boxIndex = (0);


		return lazy$left
}))
	core.addLazyProperty(ItemPrototype, 'top', (function(__parent) {
		var lazy$top = new _globals.core.AnchorLine(__parent, true)
		var __closure = { lazy$top : lazy$top }

//creating component AnchorLine
			lazy$top.__create(__closure.__closure_lazy$top = { })


//setting up component AnchorLine
			var lazy$top = __closure.lazy$top
			lazy$top.__setup(__closure.__closure_lazy$top)
			delete __closure.__closure_lazy$top

//assigning boxIndex to (1)
			lazy$top._replaceUpdater('boxIndex'); lazy$top.boxIndex = (1);


		return lazy$top
}))
	core.addLazyProperty(ItemPrototype, 'right', (function(__parent) {
		var lazy$right = new _globals.core.AnchorLine(__parent, true)
		var __closure = { lazy$right : lazy$right }

//creating component AnchorLine
			lazy$right.__create(__closure.__closure_lazy$right = { })


//setting up component AnchorLine
			var lazy$right = __closure.lazy$right
			lazy$right.__setup(__closure.__closure_lazy$right)
			delete __closure.__closure_lazy$right

//assigning boxIndex to (2)
			lazy$right._replaceUpdater('boxIndex'); lazy$right.boxIndex = (2);


		return lazy$right
}))
	core.addLazyProperty(ItemPrototype, 'bottom', (function(__parent) {
		var lazy$bottom = new _globals.core.AnchorLine(__parent, true)
		var __closure = { lazy$bottom : lazy$bottom }

//creating component AnchorLine
			lazy$bottom.__create(__closure.__closure_lazy$bottom = { })


//setting up component AnchorLine
			var lazy$bottom = __closure.lazy$bottom
			lazy$bottom.__setup(__closure.__closure_lazy$bottom)
			delete __closure.__closure_lazy$bottom

//assigning boxIndex to (3)
			lazy$bottom._replaceUpdater('boxIndex'); lazy$bottom.boxIndex = (3);


		return lazy$bottom
}))
	core.addLazyProperty(ItemPrototype, 'horizontalCenter', (function(__parent) {
		var lazy$horizontalCenter = new _globals.core.AnchorLine(__parent, true)
		var __closure = { lazy$horizontalCenter : lazy$horizontalCenter }

//creating component AnchorLine
			lazy$horizontalCenter.__create(__closure.__closure_lazy$horizontalCenter = { })


//setting up component AnchorLine
			var lazy$horizontalCenter = __closure.lazy$horizontalCenter
			lazy$horizontalCenter.__setup(__closure.__closure_lazy$horizontalCenter)
			delete __closure.__closure_lazy$horizontalCenter

//assigning boxIndex to (4)
			lazy$horizontalCenter._replaceUpdater('boxIndex'); lazy$horizontalCenter.boxIndex = (4);


		return lazy$horizontalCenter
}))
	core.addLazyProperty(ItemPrototype, 'verticalCenter', (function(__parent) {
		var lazy$verticalCenter = new _globals.core.AnchorLine(__parent, true)
		var __closure = { lazy$verticalCenter : lazy$verticalCenter }

//creating component AnchorLine
			lazy$verticalCenter.__create(__closure.__closure_lazy$verticalCenter = { })


//setting up component AnchorLine
			var lazy$verticalCenter = __closure.lazy$verticalCenter
			lazy$verticalCenter.__setup(__closure.__closure_lazy$verticalCenter)
			delete __closure.__closure_lazy$verticalCenter

//assigning boxIndex to (5)
			lazy$verticalCenter._replaceUpdater('boxIndex'); lazy$verticalCenter.boxIndex = (5);


		return lazy$verticalCenter
}))
	core.addProperty(ItemPrototype, 'int', 'viewX')
	core.addProperty(ItemPrototype, 'int', 'viewY')
	core.addProperty(ItemPrototype, 'int', 'keyProcessDelay')
	_globals.core._protoOnChanged(ItemPrototype, 'width', (function(value) { this.style('width', value); this.boxChanged() } ))
	_globals.core._protoOnChanged(ItemPrototype, 'z', (function(value) { this.style('z-index', value) } ))
	_globals.core._protoOnChanged(ItemPrototype, 'opacity', (function(value) { if (this.element) this.style('opacity', value); } ))
	_globals.core._protoOnChanged(ItemPrototype, 'height', (function(value) { this.style('height', value - this._topPadding); this.boxChanged() } ))
	_globals.core._protoOnChanged(ItemPrototype, 'radius', (function(value) { this.style('border-radius', value) } ))
	_globals.core._protoOnChanged(ItemPrototype, 'x', (function(value) {
		var x = this.x + this.viewX
		if (this.cssTranslatePositioning)
			this.style('transform', 'translateX(' + x + 'px)')
		else
			this.style('left', x)
		this.boxChanged()
	} ))
	_globals.core._protoOnChanged(ItemPrototype, 'y', (function(value) {
		var y = this.y + this.viewY
		if (this.cssTranslatePositioning)
			this.style('transform', 'translateY(' + y + 'px)')
		else
			this.style('top', y)
		this.boxChanged()
	} ))
	_globals.core._protoOnChanged(ItemPrototype, 'viewY', (function(value) {
		var y = this.y + this.viewY
		if (this.cssTranslatePositioning)
			this.style('transform', 'translateY(' + y + 'px)')
		else
			this.style('top', y)
		this.boxChanged()
	} ))
	_globals.core._protoOnChanged(ItemPrototype, 'recursiveVisible', (function(value) {
		var children = this.children
		for(var i = 0, n = children.length; i < n; ++i) {
			var child = children[i]
			this._updateVisibilityForChild(child, value)
		}

		if (!value)
			this.parent._tryFocus()
	} ))
	_globals.core._protoOnChanged(ItemPrototype, 'viewX', (function(value) {
		var x = this.x + this.viewX
		if (this.cssTranslatePositioning)
			this.style('transform', 'translateX(' + x + 'px)')
		else
			this.style('left', x)
		this.boxChanged()
	} ))
	_globals.core._protoOnChanged(ItemPrototype, 'visible', (function(value) { this._updateVisibility() } ))
	_globals.core._protoOnChanged(ItemPrototype, 'clip', (function(value) { this.style('overflow', value? 'hidden': 'visible') } ))
	_globals.core._protoOnChanged(ItemPrototype, 'visibleInView', (function(value) { this._updateVisibility() } ))

//=====[component core.BaseLayout]=====================

	var BaseLayoutBaseComponent = _globals.core.Item
	var BaseLayoutBasePrototype = BaseLayoutBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Item}
 */
	var BaseLayoutComponent = _globals.core.BaseLayout = function(parent, _delegate) {
		BaseLayoutBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.count = 0
	}

	}
	var BaseLayoutPrototype = BaseLayoutComponent.prototype = Object.create(BaseLayoutBasePrototype)

	BaseLayoutPrototype.constructor = BaseLayoutComponent

	BaseLayoutPrototype.componentName = 'core.BaseLayout'
	BaseLayoutPrototype._scheduleLayout = function() {
		this._context.delayedAction('layout', this, this._doLayout)
	}
	BaseLayoutPrototype._doLayout = function() {
		this._processUpdates()
		this._layout()
	}
	BaseLayoutPrototype._processUpdates = function() { }
	core.addProperty(BaseLayoutPrototype, 'int', 'count')
	core.addProperty(BaseLayoutPrototype, 'bool', 'trace')
	core.addProperty(BaseLayoutPrototype, 'int', 'spacing')
	core.addProperty(BaseLayoutPrototype, 'int', 'currentIndex')
	core.addProperty(BaseLayoutPrototype, 'int', 'contentWidth')
	core.addProperty(BaseLayoutPrototype, 'int', 'contentHeight')
	core.addProperty(BaseLayoutPrototype, 'bool', 'keyNavigationWraps')
	core.addProperty(BaseLayoutPrototype, 'bool', 'handleNavigationKeys')
	_globals.core._protoOnChanged(BaseLayoutPrototype, 'recursiveVisible', (function(value) {
		if (this.recursiveVisible)
			this._scheduleLayout()
	} ))
	_globals.core._protoOnChanged(BaseLayoutPrototype, 'spacing', (function(value) {
		if (this.recursiveVisible)
			this._scheduleLayout()
	} ))

//=====[component core.Layout]=====================

	var LayoutBaseComponent = _globals.core.BaseLayout
	var LayoutBasePrototype = LayoutBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.BaseLayout}
 */
	var LayoutComponent = _globals.core.Layout = function(parent, _delegate) {
		LayoutBaseComponent.apply(this, arguments)

	}
	var LayoutPrototype = LayoutComponent.prototype = Object.create(LayoutBasePrototype)

	LayoutPrototype.constructor = LayoutComponent

	LayoutPrototype.componentName = 'core.Layout'
	LayoutPrototype.focusPrevChild = function() {
		var idx = 0;
		var children = this.children
		if (this.focusedChild)
			idx = children.indexOf(this.focusedChild)

		for (var i = idx - 1; i >= 0; --i) {
			if (children[i]._tryFocus()) {
				this.currentIndex = i
				this.focusChild(this.children[i])
				return true
			}
		}

		if (!this.keyNavigationWraps)
			return false

		var last = children.length - 1
		for (var i = last; i >= idx; --i) {
			if (children[i]._tryFocus()) {
				this.currentIndex = i
				this.focusChild(this.children[i])
				return true
			}
		}

		return false

	}
	LayoutPrototype.focusNextChild = function() {
		var idx = 0;
		var children = this.children
		if (this.focusedChild)
			idx = children.indexOf(this.focusedChild)

		for (var i = idx + 1; i < children.length; ++i) {
			if (children[i]._tryFocus()) {
				this.currentIndex = i
				this.focusChild(this.children[i])
				return true
			}
		}

		if (!this.keyNavigationWraps)
			return false

		for (var i = 0; i <= idx; ++i) {
			if (children[i]._tryFocus()) {
				this.currentIndex = i
				this.focusChild(this.children[i])
				return true
			}
		}

		return false
	}
	_globals.core._protoOnChanged(LayoutPrototype, 'currentIndex', (function(value) {
		if (value >= 0 && value < this.children.length)
			this.focusChild(this.children[value])
	} ))

	LayoutPrototype.__create = function(__closure) {
		var $this = this;
		LayoutBasePrototype.__create.call(this, __closure.__base = { })

	}
	LayoutPrototype.__setup = function(__closure) {
		var $this = this;
	LayoutBasePrototype.__setup.call(this, __closure.__base); delete __closure.__base
//assigning keyNavigationWraps to (true)
			$this._replaceUpdater('keyNavigationWraps'); $this.keyNavigationWraps = (true);
//assigning width to (${contentWidth})
			var update$_this$width = function() { $this.width = ($this._get('contentWidth')); }
			$this._replaceUpdater('width', [update$_this$width, [[$this, 'contentWidth']]])
//assigning handleNavigationKeys to (true)
			$this._replaceUpdater('handleNavigationKeys'); $this.handleNavigationKeys = (true);
//assigning height to (${contentHeight})
			var update$_this$height = function() { $this.height = ($this._get('contentHeight')); }
			$this._replaceUpdater('height', [update$_this$height, [[$this, 'contentHeight']]])
			$this._context._onCompleted((function() { this._scheduleLayout() } ).bind($this))
}


//=====[component core.Shadow]=====================

	var ShadowBaseComponent = _globals.core.Object
	var ShadowBasePrototype = ShadowBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var ShadowComponent = _globals.core.Shadow = function(parent, _delegate) {
		ShadowBaseComponent.apply(this, arguments)

	}
	var ShadowPrototype = ShadowComponent.prototype = Object.create(ShadowBasePrototype)

	ShadowPrototype.constructor = ShadowComponent

	ShadowPrototype.componentName = 'core.Shadow'
	ShadowPrototype._getFilterStyle = function() {
		var style = this.x + "px " + this.y + "px " + this.blur + "px "
		if (this.spread > 0)
			style += this.spread + "px "
		style += _globals.core.normalizeColor(this.color)
		return style
	}
	ShadowPrototype._empty = function() {
		return !this.x && !this.y && !this.blur && !this.spread;
	}
	core.addProperty(ShadowPrototype, 'real', 'x')
	core.addProperty(ShadowPrototype, 'real', 'y')
	core.addProperty(ShadowPrototype, 'Color', 'color', ("black"))
	core.addProperty(ShadowPrototype, 'real', 'blur')
	core.addProperty(ShadowPrototype, 'real', 'spread')
	_globals.core._protoOnChanged(ShadowPrototype, 'x', (function(value) {
		this.parent._updateStyle(true)
	} ))
	_globals.core._protoOnChanged(ShadowPrototype, 'spread', (function(value) {
		this.parent._updateStyle(true)
	} ))
	_globals.core._protoOnChanged(ShadowPrototype, 'y', (function(value) {
		this.parent._updateStyle(true)
	} ))
	_globals.core._protoOnChanged(ShadowPrototype, 'blur', (function(value) {
		this.parent._updateStyle(true)
	} ))
	_globals.core._protoOnChanged(ShadowPrototype, 'color', (function(value) {
		this.parent._updateStyle(true)
	} ))

//=====[component core.Row]=====================

	var RowBaseComponent = _globals.core.Layout
	var RowBasePrototype = RowBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Layout}
 */
	var RowComponent = _globals.core.Row = function(parent, _delegate) {
		RowBaseComponent.apply(this, arguments)

	}
	var RowPrototype = RowComponent.prototype = Object.create(RowBasePrototype)

	RowPrototype.constructor = RowComponent

	RowPrototype.componentName = 'core.Row'
	RowPrototype.addChild = function(child) {
		_globals.core.Item.prototype.addChild.apply(this, arguments)
		child.onChanged('recursiveVisible', this._scheduleLayout.bind(this))
		child.onChanged('width', this._scheduleLayout.bind(this))
		child.onChanged('height', this._scheduleLayout.bind(this))
	}
	RowPrototype._layout = function() {
		if (!this.recursiveVisible)
			return

		var children = this.children;
		var p = 0
		var h = 0
		this.count = children.length
		for(var i = 0; i < children.length; ++i) {
			var c = children[i]
			if (!('height' in c))
				continue
			var b = c.y + c.height
			if (b > h)
				h = b
			c.viewX = p
			if (c.recursiveVisible)
				p += c.width + this.spacing
		}
		if (p > 0)
			p -= this.spacing
		this.contentWidth = p
		this.contentHeight = h
	}
	_globals.core._protoOnKey(RowPrototype, 'Key', (function(key, event) {
		if (!this.handleNavigationKeys)
			return false;

		switch(key) {
			case 'Left':	return this.focusPrevChild()
			case 'Right':	return this.focusNextChild()
		}
	} ))

//=====[component src.UiIndex]=====================

	var UiIndexBaseComponent = _globals.core.Item
	var UiIndexBasePrototype = UiIndexBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Item}
 */
	var UiIndexComponent = _globals.src.UiIndex = function(parent, _delegate) {
		UiIndexBaseComponent.apply(this, arguments)

	}
	var UiIndexPrototype = UiIndexComponent.prototype = Object.create(UiIndexBasePrototype)

	UiIndexPrototype.constructor = UiIndexComponent

	UiIndexPrototype.componentName = 'src.UiIndex'
	core.addProperty(UiIndexPrototype, 'bool', 'mobile')
	core.addProperty(UiIndexPrototype, 'Object', 'state')
	_globals.core._protoOnChanged(UiIndexPrototype, 'state', (function(value) {
		if(value) {
			if(value.page && value.page !== "") {
				pages.pageName = value.page;
            }
			else {
				pages.pageName = 'main';
            }
            
			window.scrollTo(0, 0);
		}
	} ))

	UiIndexPrototype.__create = function(__closure) {
		var $this = this;
		UiIndexBasePrototype.__create.call(this, __closure.__base = { })
var _this$child0 = new _globals.src.Background($this)
		__closure._this$child0 = _this$child0

//creating component Background
		_this$child0.__create(__closure.__closure__this$child0 = { })

		$this.addChild(_this$child0)
		var _this$child1 = new _globals.core.PageStack($this)
		__closure._this$child1 = _this$child1

//creating component PageStack
		_this$child1.__create(__closure.__closure__this$child1 = { })
	core.addProperty(_this$child1, 'string', 'pageName')
		var _this_child1$child0 = new _globals.src.PageMain(_this$child1)
		__closure._this_child1$child0 = _this_child1$child0

//creating component PageMain
		_this_child1$child0.__create(__closure.__closure__this_child1$child0 = { })

		_this$child1.addChild(_this_child1$child0)
		var _this_child1$child1 = new _globals.src.PageHelp(_this$child1)
		__closure._this_child1$child1 = _this_child1$child1

//creating component PageHelp
		_this_child1$child1.__create(__closure.__closure__this_child1$child1 = { })

		_this$child1.addChild(_this_child1$child1)
		$this.addChild(_this$child1)
		$this._setId('root')
	}
	UiIndexPrototype.__setup = function(__closure) {
		var $this = this;
	UiIndexBasePrototype.__setup.call(this, __closure.__base); delete __closure.__base
//assigning mobile to (${context.system.device} == _globals.core.System.prototype.Mobile)
			var update$_this$mobile = function() { $this.mobile = ($this._get('context')._get('system')._get('device') == _globals.core.System.prototype.Mobile); }
			$this._replaceUpdater('mobile', [update$_this$mobile, [[$this._get('context')._get('system'), 'device']]])
//assigning state to (${context.location.state})
			var update$_this$state = function() { $this.state = ($this._get('context')._get('location')._get('state')); }
			$this._replaceUpdater('state', [update$_this$state, [[$this._get('context')._get('location'), 'state']]])
//assigning anchors.fill to (${context})
			var update$_this$anchors_fill = function() { $this._get('anchors').fill = ($this._get('context')); }
			$this._get('anchors')._replaceUpdater('fill', [update$_this$anchors_fill, [[$this, 'context']]])
			$this._context._onCompleted((function() {
		if(!window.location.hostname) {
			return;
        }

		var path = window.location.pathname.split("/");
		var state = {};
		if(path[1]) {
			state.page = path[1];
        }
		if(path[2]) {
			state.section = path[2];
        }
		if(path[3]) {
			state.element = path[3];
        }

		this._context.location.pushState(state, window.location.pathname, window.location.pathname);
	} ).bind($this))

//setting up component Background
			var _this$child0 = __closure._this$child0
			_this$child0.__setup(__closure.__closure__this$child0)
			delete __closure.__closure__this$child0

//assigning anchors.fill to (${parent})
			var update$_this_child0$anchors_fill = function() { _this$child0._get('anchors').fill = (_this$child0._get('parent')); }
			_this$child0._get('anchors')._replaceUpdater('fill', [update$_this_child0$anchors_fill, [[_this$child0, 'parent']]])


//setting up component PageStack
			var _this$child1 = __closure._this$child1
			_this$child1.__setup(__closure.__closure__this$child1)
			delete __closure.__closure__this$child1

//assigning anchors.fill to (${parent})
			var update$_this_child1$anchors_fill = function() { _this$child1._get('anchors').fill = (_this$child1._get('parent')); }
			_this$child1._get('anchors')._replaceUpdater('fill', [update$_this_child1$anchors_fill, [[_this$child1, 'parent']]])
			_this$child1._context._onCompleted((function() {
            this.pageName = "";
        } ).bind(_this$child1))
			_this$child1.onChanged('pageName', (function(value) {
			var children = this.children;
			for(var i in children) {
				if(children[i].url == value) {
					this.currentIndex = i;
					return;
				}
			}
		} ).bind(_this$child1))

//setting up component PageMain
			var _this_child1$child0 = __closure._this_child1$child0
			_this_child1$child0.__setup(__closure.__closure__this_child1$child0)
			delete __closure.__closure__this_child1$child0



//setting up component PageHelp
			var _this_child1$child1 = __closure._this_child1$child1
			_this_child1$child1.__setup(__closure.__closure__this_child1$child1)
			delete __closure.__closure__this_child1$child1
}


//=====[component src.PageHelp]=====================

	var PageHelpBaseComponent = _globals.core.Item
	var PageHelpBasePrototype = PageHelpBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Item}
 */
	var PageHelpComponent = _globals.src.PageHelp = function(parent, _delegate) {
		PageHelpBaseComponent.apply(this, arguments)

	}
	var PageHelpPrototype = PageHelpComponent.prototype = Object.create(PageHelpBasePrototype)

	PageHelpPrototype.constructor = PageHelpComponent

	PageHelpPrototype.componentName = 'src.PageHelp'
	core.addProperty(PageHelpPrototype, 'bool', 'mobile')
	core.addProperty(PageHelpPrototype, 'string', 'url', ("help"))

	PageHelpPrototype.__create = function(__closure) {
		var $this = this;
		PageHelpBasePrototype.__create.call(this, __closure.__base = { })
$this._setId('root')
	}
	PageHelpPrototype.__setup = function(__closure) {
		var $this = this;
	PageHelpBasePrototype.__setup.call(this, __closure.__base); delete __closure.__base
//assigning mobile to (${context.system.device} == _globals.core.System.prototype.Mobile)
			var update$_this$mobile = function() { $this.mobile = ($this._get('context')._get('system')._get('device') == _globals.core.System.prototype.Mobile); }
			$this._replaceUpdater('mobile', [update$_this$mobile, [[$this._get('context')._get('system'), 'device']]])
//assigning anchors.fill to (${parent})
			var update$_this$anchors_fill = function() { $this._get('anchors').fill = ($this._get('parent')); }
			$this._get('anchors')._replaceUpdater('fill', [update$_this$anchors_fill, [[$this, 'parent']]])
}


//=====[component controls.web.HoverClickMixin]=====================

	var HoverClickMixinBaseComponent = _globals.core.Object
	var HoverClickMixinBasePrototype = HoverClickMixinBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var HoverClickMixinComponent = _globals.controls.web.HoverClickMixin = function(parent, _delegate) {
		HoverClickMixinBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.element = this.parent.element;
		this.parent.style('cursor', this.cursor)
		this._bindClick(this.clickable)
		this._bindHover(this.enabled)
		this._bindActiveHover(this.activeHoverEnabled)
	}

	}
	var HoverClickMixinPrototype = HoverClickMixinComponent.prototype = Object.create(HoverClickMixinBasePrototype)

	HoverClickMixinPrototype.constructor = HoverClickMixinComponent

	HoverClickMixinPrototype.componentName = 'controls.web.HoverClickMixin'
	HoverClickMixinPrototype._bindActiveHover = function(value) {
		if (value && !this._hmActiveHoverBinder) {
			this._hmActiveHoverBinder = new _globals.core.EventBinder(this.parent.element)
			this._hmActiveHoverBinder.on('mouseover', function() { this.activeHover = true }.bind(this))
			this._hmActiveHoverBinder.on('mouseout', function() { this.activeHover = false }.bind(this))
		}
		if (this._hmActiveHoverBinder)
		{
			this._hmActiveHoverBinder.enable(value)
		}
	}
	HoverClickMixinPrototype._bindClick = function(value) {
		if (value && !this._hmClickBinder) {
			this._hmClickBinder = new _globals.core.EventBinder(this.element)
			this._hmClickBinder.on('click', _globals.core.createSignalForwarder(this.parent, 'clicked').bind(this))
		}
		if (this._hmClickBinder)
			this._hmClickBinder.enable(value)
	}
	HoverClickMixinPrototype._bindHover = function(value) {
		if (value && !this._hmHoverBinder) {
			this._hmHoverBinder = new _globals.core.EventBinder(this.parent.element)
			this._hmHoverBinder.on('mouseenter', function() { this.value = true }.bind(this))
			this._hmHoverBinder.on('mouseleave', function() { this.value = false }.bind(this))
		}
		if (this._hmHoverBinder)
			this._hmHoverBinder.enable(value)
	}
	core.addProperty(HoverClickMixinPrototype, 'bool', 'enabled', (true))
	core.addProperty(HoverClickMixinPrototype, 'bool', 'clickable', (true))
	core.addProperty(HoverClickMixinPrototype, 'bool', 'activeHoverEnabled', (false))
	core.addProperty(HoverClickMixinPrototype, 'bool', 'value')
	core.addProperty(HoverClickMixinPrototype, 'bool', 'activeHover', (false))
	core.addProperty(HoverClickMixinPrototype, 'string', 'cursor')
	_globals.core._protoOnChanged(HoverClickMixinPrototype, 'clickable', (function(value) { this._bindClick(value) } ))
	_globals.core._protoOnChanged(HoverClickMixinPrototype, 'cursor', (function(value) {
		this.parent.style('cursor', value)
	} ))
	_globals.core._protoOnChanged(HoverClickMixinPrototype, 'activeHoverEnabled', (function(value) { this._bindActiveHover(value) } ))
	_globals.core._protoOnChanged(HoverClickMixinPrototype, 'enabled', (function(value) { this._bindHover(value) } ))

//=====[component core.Column]=====================

	var ColumnBaseComponent = _globals.core.Layout
	var ColumnBasePrototype = ColumnBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Layout}
 */
	var ColumnComponent = _globals.core.Column = function(parent, _delegate) {
		ColumnBaseComponent.apply(this, arguments)

	}
	var ColumnPrototype = ColumnComponent.prototype = Object.create(ColumnBasePrototype)

	ColumnPrototype.constructor = ColumnComponent

	ColumnPrototype.componentName = 'core.Column'
	ColumnPrototype.addChild = function(child) {
		_globals.core.Item.prototype.addChild.apply(this, arguments)

		if (!('height' in child))
			return

		child.onChanged('height', this._scheduleLayout.bind(this))
		child.onChanged('recursiveVisible', this._scheduleLayout.bind(this))
		child.anchors.on('marginsUpdated', this._scheduleLayout.bind(this))
	}
	ColumnPrototype._layout = function() {
		if (!this.recursiveVisible)
			return

		var children = this.children;
		var p = 0
		var w = 0
		this.count = children.length
		for(var i = 0; i < children.length; ++i) {
			var c = children[i]
			if (!('height' in c))
				continue

			var tm = c.anchors.topMargin || c.anchors.margins
			var bm = c.anchors.bottomMargin || c.anchors.margins

			var r = c.x + c.width
			if (r > w)
				w = r
			c.viewY = p + tm
			if (c.recursiveVisible)
				p += c.height + tm + bm + this.spacing
		}
		if (p > 0)
			p -= this.spacing
		this.contentWidth = w
		this.contentHeight = p
	}
	_globals.core._protoOnKey(ColumnPrototype, 'Key', (function(key, event) {
		if (!this.handleNavigationKeys)
			return false;

		switch (key) {
			case 'Up':		return this.focusPrevChild()
			case 'Down':	return this.focusNextChild()
		}
	} ))

//=====[component core.Font]=====================

	var FontBaseComponent = _globals.core.Object
	var FontBasePrototype = FontBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var FontComponent = _globals.core.Font = function(parent, _delegate) {
		FontBaseComponent.apply(this, arguments)

	}
	var FontPrototype = FontComponent.prototype = Object.create(FontBasePrototype)

	FontPrototype.constructor = FontComponent

	FontPrototype.componentName = 'core.Font'
	core.addProperty(FontPrototype, 'string', 'family', ($manifest$style$font$family))
	core.addProperty(FontPrototype, 'bool', 'italic')
	core.addProperty(FontPrototype, 'bool', 'bold')
	core.addProperty(FontPrototype, 'bool', 'underline')
	core.addProperty(FontPrototype, 'bool', 'strike')
	core.addProperty(FontPrototype, 'real', 'letterSpacing')
	core.addProperty(FontPrototype, 'int', 'pixelSize', ($manifest$style$font$pixelSize))
	core.addProperty(FontPrototype, 'int', 'pointSize')
	core.addProperty(FontPrototype, 'real', 'lineHeight', ($manifest$style$font$lineHeight))
	core.addProperty(FontPrototype, 'int', 'weight')
	_globals.core._protoOnChanged(FontPrototype, 'italic', (function(value) { this.parent.style('font-style', value? 'italic': 'normal'); this.parent._updateSize() } ))
	_globals.core._protoOnChanged(FontPrototype, 'pixelSize', (function(value) { if (value > 0) this.pointSize = 0; this.parent.style('font-size', value > 0? value + 'px': ''); this.parent._updateSize() } ))
	_globals.core._protoOnChanged(FontPrototype, 'family', (function(value) { this.parent.style('font-family', value); this.parent._updateSize() } ))
	_globals.core._protoOnChanged(FontPrototype, 'lineHeight', (function(value) { this.parent.style('line-height', value); this.parent._updateSize() } ))
	_globals.core._protoOnChanged(FontPrototype, 'strike', (function(value) { this.parent.style('text-decoration', value? 'line-through': ''); this.parent._updateSize() } ))
	_globals.core._protoOnChanged(FontPrototype, 'weight', (function(value) { this.parent.style('font-weight', value); this.parent._updateSize() } ))
	_globals.core._protoOnChanged(FontPrototype, 'bold', (function(value) { this.parent.style('font-weight', value? 'bold': 'normal'); this.parent._updateSize() } ))
	_globals.core._protoOnChanged(FontPrototype, 'pointSize', (function(value) { if (value > 0) this.pixelSize = 0; this.parent.style('font-size', value > 0? value + 'pt': ''); this.parent._updateSize() } ))
	_globals.core._protoOnChanged(FontPrototype, 'letterSpacing', (function(value) { this.parent.style('letter-spacing', value + "px"); this.parent._updateSize() } ))
	_globals.core._protoOnChanged(FontPrototype, 'underline', (function(value) { this.parent.style('text-decoration', value? 'underline': ''); this.parent._updateSize() } ))

//=====[component core.Border]=====================

	var BorderBaseComponent = _globals.core.Object
	var BorderBasePrototype = BorderBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var BorderComponent = _globals.core.Border = function(parent, _delegate) {
		BorderBaseComponent.apply(this, arguments)

	}
	var BorderPrototype = BorderComponent.prototype = Object.create(BorderBasePrototype)

	BorderPrototype.constructor = BorderComponent

	BorderPrototype.componentName = 'core.Border'
	core.addProperty(BorderPrototype, 'int', 'width')
	core.addProperty(BorderPrototype, 'color', 'color')
	core.addProperty(BorderPrototype, 'string', 'style')
	core.addLazyProperty(BorderPrototype, 'left', (function(__parent) {
		var lazy$left = new _globals.core.BorderSide(__parent, true)
		var __closure = { lazy$left : lazy$left }

//creating component BorderSide
			lazy$left.__create(__closure.__closure_lazy$left = { })


//setting up component BorderSide
			var lazy$left = __closure.lazy$left
			lazy$left.__setup(__closure.__closure_lazy$left)
			delete __closure.__closure_lazy$left

//assigning name to ("left")
			lazy$left._replaceUpdater('name'); lazy$left.name = ("left");


		return lazy$left
}))
	core.addLazyProperty(BorderPrototype, 'right', (function(__parent) {
		var lazy$right = new _globals.core.BorderSide(__parent, true)
		var __closure = { lazy$right : lazy$right }

//creating component BorderSide
			lazy$right.__create(__closure.__closure_lazy$right = { })


//setting up component BorderSide
			var lazy$right = __closure.lazy$right
			lazy$right.__setup(__closure.__closure_lazy$right)
			delete __closure.__closure_lazy$right

//assigning name to ("right")
			lazy$right._replaceUpdater('name'); lazy$right.name = ("right");


		return lazy$right
}))
	core.addLazyProperty(BorderPrototype, 'top', (function(__parent) {
		var lazy$top = new _globals.core.BorderSide(__parent, true)
		var __closure = { lazy$top : lazy$top }

//creating component BorderSide
			lazy$top.__create(__closure.__closure_lazy$top = { })


//setting up component BorderSide
			var lazy$top = __closure.lazy$top
			lazy$top.__setup(__closure.__closure_lazy$top)
			delete __closure.__closure_lazy$top

//assigning name to ("top")
			lazy$top._replaceUpdater('name'); lazy$top.name = ("top");


		return lazy$top
}))
	core.addLazyProperty(BorderPrototype, 'bottom', (function(__parent) {
		var lazy$bottom = new _globals.core.BorderSide(__parent, true)
		var __closure = { lazy$bottom : lazy$bottom }

//creating component BorderSide
			lazy$bottom.__create(__closure.__closure_lazy$bottom = { })


//setting up component BorderSide
			var lazy$bottom = __closure.lazy$bottom
			lazy$bottom.__setup(__closure.__closure_lazy$bottom)
			delete __closure.__closure_lazy$bottom

//assigning name to ("bottom")
			lazy$bottom._replaceUpdater('name'); lazy$bottom.name = ("bottom");


		return lazy$bottom
}))
	_globals.core._protoOnChanged(BorderPrototype, 'width', (function(value) { this.parent.style({'border-width': value, 'margin-left': -value, 'margin-top': -value}) } ))
	_globals.core._protoOnChanged(BorderPrototype, 'color', (function(value) { this.parent.style('border-color', _globals.core.normalizeColor(value)) } ))
	_globals.core._protoOnChanged(BorderPrototype, 'style', (function(value) { this.parent.style('border-style', value) } ))

//=====[component core.Rectangle]=====================

	var RectangleBaseComponent = _globals.core.Item
	var RectangleBasePrototype = RectangleBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Item}
 */
	var RectangleComponent = _globals.core.Rectangle = function(parent, _delegate) {
		RectangleBaseComponent.apply(this, arguments)

	}
	var RectanglePrototype = RectangleComponent.prototype = Object.create(RectangleBasePrototype)

	{
		var styleMap = RectanglePrototype._propertyToStyle = Object.create(RectangleBasePrototype._propertyToStyle)
		styleMap['color'] = 'background-color'
	}

	RectanglePrototype.constructor = RectangleComponent

	RectanglePrototype.componentName = 'core.Rectangle'
	core.addProperty(RectanglePrototype, 'color', 'color', ("#0000"))
	core.addLazyProperty(RectanglePrototype, 'border', (function(__parent) {
		var lazy$border = new _globals.core.Border(__parent, true)
		var __closure = { lazy$border : lazy$border }

//creating component Border
			lazy$border.__create(__closure.__closure_lazy$border = { })


//setting up component Border
			var lazy$border = __closure.lazy$border
			lazy$border.__setup(__closure.__closure_lazy$border)
			delete __closure.__closure_lazy$border



		return lazy$border
}))
	core.addProperty(RectanglePrototype, 'Gradient', 'gradient')
	_globals.core._protoOnChanged(RectanglePrototype, 'color', (function(value) {
		this.style('background-color', _globals.core.normalizeColor(value))
	} ))

//=====[component controls.web.WebItem]=====================

	var WebItemBaseComponent = _globals.core.Rectangle
	var WebItemBasePrototype = WebItemBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Rectangle}
 */
	var WebItemComponent = _globals.controls.web.WebItem = function(parent, _delegate) {
		WebItemBaseComponent.apply(this, arguments)

	}
	var WebItemPrototype = WebItemComponent.prototype = Object.create(WebItemBasePrototype)

	WebItemPrototype.constructor = WebItemComponent

	WebItemPrototype.componentName = 'controls.web.WebItem'
	core.addProperty(WebItemPrototype, 'Mixin', 'hoverMixin')
	core.addProperty(WebItemPrototype, 'string', 'position')
	core.addProperty(WebItemPrototype, 'string', 'title')
	_globals.core._protoOnChanged(WebItemPrototype, 'position', (function(value) { this.style('position', value); } ))
	_globals.core._protoOnChanged(WebItemPrototype, 'title', (function(value) { this.element.dom.setAttribute('title', value); } ))

	WebItemPrototype.__create = function(__closure) {
		var $this = this;
		WebItemBasePrototype.__create.call(this, __closure.__base = { })
//creating component controls.web.<anonymous>
		var _this$hoverMixin = new _globals.controls.web.HoverClickMixin($this)
		__closure._this$hoverMixin = _this$hoverMixin

//creating component HoverClickMixin
		_this$hoverMixin.__create(__closure.__closure__this$hoverMixin = { })

		$this.hoverMixin = _this$hoverMixin
		core.addAliasProperty($this, 'hover', function() { return $this._get('hoverMixin') }, 'value')
		core.addAliasProperty($this, 'activeHoverEnabled', function() { return $this._get('hoverMixin') }, 'activeHoverEnabled')
		core.addAliasProperty($this, 'activeHover', function() { return $this._get('hoverMixin') }, 'activeHover')
		core.addAliasProperty($this, 'cursor', function() { return $this._get('hoverMixin') }, 'cursor')
		core.addAliasProperty($this, 'clickable', function() { return $this._get('hoverMixin') }, 'clickable')
		core.addAliasProperty($this, 'hoverable', function() { return $this._get('hoverMixin') }, 'enabled')
	}
	WebItemPrototype.__setup = function(__closure) {
		var $this = this;
	WebItemBasePrototype.__setup.call(this, __closure.__base); delete __closure.__base
//assigning color to ("transparent")
			$this._replaceUpdater('color'); $this.color = ("transparent");

//setting up component HoverClickMixin
			var _this$hoverMixin = __closure._this$hoverMixin
			_this$hoverMixin.__setup(__closure.__closure__this$hoverMixin)
			delete __closure.__closure__this$hoverMixin


//assigning hoverMixin.cursor to ("pointer")
			$this._get('hoverMixin')._replaceUpdater('cursor'); $this._get('hoverMixin').cursor = ("pointer");
}


//=====[component controls.web.WebLink]=====================

	var WebLinkBaseComponent = _globals.controls.web.WebItem
	var WebLinkBasePrototype = WebLinkBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.controls.web.WebItem}
 */
	var WebLinkComponent = _globals.controls.web.WebLink = function(parent, _delegate) {
		WebLinkBaseComponent.apply(this, arguments)

	}
	var WebLinkPrototype = WebLinkComponent.prototype = Object.create(WebLinkBasePrototype)

	WebLinkPrototype.constructor = WebLinkComponent

	WebLinkPrototype.componentName = 'controls.web.WebLink'
	WebLinkPrototype.registerStyle = function(style,tag) {
		style.addRule(tag, "text-decoration: none; position: absolute; visibility: inherit; border-style: solid; border-width: 0px; white-space: nowrap; border-radius: 0px; opacity: 1.0; transform: none; left: 0px; top: 0px; width: 0px; height: 0px;")
	}
	WebLinkPrototype.getTag = function() { return 'a' }
	core.addProperty(WebLinkPrototype, 'string', 'href')
	core.addProperty(WebLinkPrototype, 'string', 'target')
	_globals.core._protoOnChanged(WebLinkPrototype, 'href', (function(value) { this.element.dom.setAttribute('href', value); } ))
	_globals.core._protoOnChanged(WebLinkPrototype, 'target', (function(value) { this.element.dom.setAttribute('target', value); } ))

//=====[component src.RoundButton]=====================

	var RoundButtonBaseComponent = _globals.controls.web.WebLink
	var RoundButtonBasePrototype = RoundButtonBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.controls.web.WebLink}
 */
	var RoundButtonComponent = _globals.src.RoundButton = function(parent, _delegate) {
		RoundButtonBaseComponent.apply(this, arguments)

	}
	var RoundButtonPrototype = RoundButtonComponent.prototype = Object.create(RoundButtonBasePrototype)

	RoundButtonPrototype.constructor = RoundButtonComponent

	RoundButtonPrototype.componentName = 'src.RoundButton'

	RoundButtonPrototype.__create = function(__closure) {
		var $this = this;
		RoundButtonBasePrototype.__create.call(this, __closure.__base = { })
var _this$child0 = new _globals.core.Rectangle($this)
		__closure._this$child0 = _this$child0

//creating component Rectangle
		_this$child0.__create(__closure.__closure__this$child0 = { })

		$this.addChild(_this$child0)
		var _this$child1 = new _globals.core.Image($this)
		__closure._this$child1 = _this$child1

//creating component Image
		_this$child1.__create(__closure.__closure__this$child1 = { })
		_this$child1._setId('image')
		$this.addChild(_this$child1)
		$this._setId('root')
		core.addAliasProperty($this, 'source', function() { return $this._get('image') }, 'source')
	}
	RoundButtonPrototype.__setup = function(__closure) {
		var $this = this;
	RoundButtonBasePrototype.__setup.call(this, __closure.__base); delete __closure.__base
//assigning width to (${context.system.device} == _globals.core.System.prototype.Mobile ? 40 : 50)
			var update$_this$width = function() { $this.width = ($this._get('context')._get('system')._get('device') == _globals.core.System.prototype.Mobile ? 40 : 50); }
			$this._replaceUpdater('width', [update$_this$width, [[$this._get('context')._get('system'), 'device']]])
//assigning height to (${context.system.device} == _globals.core.System.prototype.Mobile ? 40 : 50)
			var update$_this$height = function() { $this.height = ($this._get('context')._get('system')._get('device') == _globals.core.System.prototype.Mobile ? 40 : 50); }
			$this._replaceUpdater('height', [update$_this$height, [[$this._get('context')._get('system'), 'device']]])

//setting up component Rectangle
			var _this$child0 = __closure._this$child0
			_this$child0.__setup(__closure.__closure__this$child0)
			delete __closure.__closure__this$child0

//assigning opacity to (0.6)
			_this$child0._replaceUpdater('opacity'); _this$child0.opacity = (0.6);
//assigning border.color to (${root.hover} ? "white" : "transparent")
			var update$_this_child0$border_color = function() { _this$child0._get('border').color = (_this$child0._get('root')._get('hover') ? "white" : "transparent"); }
			_this$child0._get('border')._replaceUpdater('color', [update$_this_child0$border_color, [[_this$child0._get('root'), 'hover']]])
//assigning color to ("#203040")
			_this$child0._replaceUpdater('color'); _this$child0.color = ("#203040");
//assigning radius to (Math.min((${width}),(${height})) / 2)
			var update$_this_child0$radius = function() { _this$child0.radius = (Math.min((_this$child0._get('width')),(_this$child0._get('height'))) / 2); }
			_this$child0._replaceUpdater('radius', [update$_this_child0$radius, [[_this$child0, 'height'],[_this$child0, 'width']]])
//assigning border.width to (${root.hover} ? 2 : 0)
			var update$_this_child0$border_width = function() { _this$child0._get('border').width = (_this$child0._get('root')._get('hover') ? 2 : 0); }
			_this$child0._get('border')._replaceUpdater('width', [update$_this_child0$border_width, [[_this$child0._get('root'), 'hover']]])
//assigning anchors.fill to (${parent})
			var update$_this_child0$anchors_fill = function() { _this$child0._get('anchors').fill = (_this$child0._get('parent')); }
			_this$child0._get('anchors')._replaceUpdater('fill', [update$_this_child0$anchors_fill, [[_this$child0, 'parent']]])


//setting up component Image
			var _this$child1 = __closure._this$child1
			_this$child1.__setup(__closure.__closure__this$child1)
			delete __closure.__closure__this$child1

//assigning anchors.margins to (10)
			_this$child1._get('anchors')._replaceUpdater('margins'); _this$child1._get('anchors').margins = (10);
//assigning anchors.fill to (${parent})
			var update$_this_child1$anchors_fill = function() { _this$child1._get('anchors').fill = (_this$child1._get('parent')); }
			_this$child1._get('anchors')._replaceUpdater('fill', [update$_this_child1$anchors_fill, [[_this$child1, 'parent']]])
}


//=====[component core.Effects]=====================

	var EffectsBaseComponent = _globals.core.Object
	var EffectsBasePrototype = EffectsBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var EffectsComponent = _globals.core.Effects = function(parent, _delegate) {
		EffectsBaseComponent.apply(this, arguments)

	}
	var EffectsPrototype = EffectsComponent.prototype = Object.create(EffectsBasePrototype)

	EffectsPrototype.constructor = EffectsComponent

	EffectsPrototype.componentName = 'core.Effects'
	EffectsPrototype._getFilterStyle = function() {
		var style = []
		this._addStyle(style, 'blur', 'blur', 'px')
		this._addStyle(style, 'grayscale')
		this._addStyle(style, 'sepia')
		this._addStyle(style, 'brightness')
		this._addStyle(style, 'contrast')
		this._addStyle(style, 'hueRotate', 'hue-rotate', 'deg')
		this._addStyle(style, 'invert')
		this._addStyle(style, 'saturate')
		return style
	}
	EffectsPrototype._addStyle = function(array,property,style,units) {
		var value = this[property]
		if (value)
			array.push((style || property) + '(' + value + (units || '') + ') ')
	}
	EffectsPrototype._updateStyle = function(updateShadow) {
		var filterStyle = this._getFilterStyle().join('')
		var parent = this.parent

		var style = {}
		var updateStyle = false

		if (filterStyle.length > 0) {
			//chromium bug
			//https://github.com/Modernizr/Modernizr/issues/981
			style['-webkit-filter'] = filterStyle
			style['filter'] = filterStyle
			updateStyle = true
		}

		if (this.shadow && (!this.shadow._empty() || updateShadow)) {
			style['box-shadow'] = this.shadow._getFilterStyle()
			updateStyle = true
		}

		if (updateStyle) {
			//log(style)
			parent.style(style)
		}
	}
	core.addProperty(EffectsPrototype, 'real', 'blur')
	core.addProperty(EffectsPrototype, 'real', 'grayscale')
	core.addProperty(EffectsPrototype, 'real', 'sepia')
	core.addProperty(EffectsPrototype, 'real', 'brightness')
	core.addProperty(EffectsPrototype, 'real', 'contrast')
	core.addProperty(EffectsPrototype, 'real', 'hueRotate')
	core.addProperty(EffectsPrototype, 'real', 'invert')
	core.addProperty(EffectsPrototype, 'real', 'saturate')
	core.addLazyProperty(EffectsPrototype, 'shadow', (function(__parent) {
		var lazy$shadow = new _globals.core.Shadow(__parent, true)
		var __closure = { lazy$shadow : lazy$shadow }

//creating component Shadow
			lazy$shadow.__create(__closure.__closure_lazy$shadow = { })


//setting up component Shadow
			var lazy$shadow = __closure.lazy$shadow
			lazy$shadow.__setup(__closure.__closure_lazy$shadow)
			delete __closure.__closure_lazy$shadow



		return lazy$shadow
}))
	_globals.core._protoOnChanged(EffectsPrototype, 'saturate', (function(value) { this._updateStyle() } ))
	_globals.core._protoOnChanged(EffectsPrototype, 'brightness', (function(value) { this._updateStyle() } ))
	_globals.core._protoOnChanged(EffectsPrototype, 'grayscale', (function(value) { this._updateStyle() } ))
	_globals.core._protoOnChanged(EffectsPrototype, 'sepia', (function(value) { this._updateStyle() } ))
	_globals.core._protoOnChanged(EffectsPrototype, 'invert', (function(value) { this._updateStyle() } ))
	_globals.core._protoOnChanged(EffectsPrototype, 'hueRotate', (function(value) { this._updateStyle() } ))
	_globals.core._protoOnChanged(EffectsPrototype, 'contrast', (function(value) { this._updateStyle() } ))
	_globals.core._protoOnChanged(EffectsPrototype, 'blur', (function(value) { this._updateStyle() } ))

//=====[component core.PageStack]=====================

	var PageStackBaseComponent = _globals.core.Layout
	var PageStackBasePrototype = PageStackBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Layout}
 */
	var PageStackComponent = _globals.core.PageStack = function(parent, _delegate) {
		PageStackBaseComponent.apply(this, arguments)

	}
	var PageStackPrototype = PageStackComponent.prototype = Object.create(PageStackBasePrototype)

	PageStackPrototype.constructor = PageStackComponent

	PageStackPrototype.componentName = 'core.PageStack'
	PageStackPrototype.addChild = function(child) {
		_globals.core.Layout.prototype.addChild.apply(this, arguments)
		child.onChanged('height', this._scheduleLayout.bind(this))
		child.onChanged('recursiveVisible', this._scheduleLayout.bind(this))
	}
	PageStackPrototype._layout = function() {
		this.count = this.children.length;
		if (this.trace)
			log('laying out ' + this.count + ' children in ' + this.width + 'x' + this.height)

		for (var i = 0; i < this.count; ++i)
			this.children[i].visibleInView = (i == this.currentIndex);

		var c = this.children[this.currentIndex];
		if (!c)
			return

		this.contentHeight = c.height;
		this.contentWidth = c.width;
	}
	core.addProperty(PageStackPrototype, 'int', 'currentIndex', (0))
	core.addProperty(PageStackPrototype, 'int', 'count', (0))
	_globals.core._protoOnChanged(PageStackPrototype, 'activeFocus', (function(value) {
		if (value && this.count)
			this.children[this.currentIndex].setFocus()
	} ))
	_globals.core._protoOnChanged(PageStackPrototype, 'currentIndex', (function(value) {
		if (this.currentIndex < 0)
			this.currentIndex = 0;
		else if (this.children.length > 0 && this.currentIndex >= this.children.length)
			this.currentIndex = this.children.length - 1;

		this._scheduleLayout()
	} ))

	PageStackPrototype.__create = function(__closure) {
		var $this = this;
		PageStackBasePrototype.__create.call(this, __closure.__base = { })

	}
	PageStackPrototype.__setup = function(__closure) {
		var $this = this;
	PageStackBasePrototype.__setup.call(this, __closure.__base); delete __closure.__base
//assigning clip to (true)
			$this._replaceUpdater('clip'); $this.clip = (true);
}


//=====[component core.MouseArea]=====================

	var MouseAreaBaseComponent = _globals.core.Item
	var MouseAreaBasePrototype = MouseAreaBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Item}
 */
	var MouseAreaComponent = _globals.core.MouseArea = function(parent, _delegate) {
		MouseAreaBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._bindClick(this.clickable)
		this._bindWheel(this.wheelEnabled)
		this._bindPressable(this.pressable)
		this._bindHover(this.hoverEnabled)
		this._bindTouch(this.touchEnabled)
	}

	}
	var MouseAreaPrototype = MouseAreaComponent.prototype = Object.create(MouseAreaBasePrototype)

	MouseAreaPrototype.constructor = MouseAreaComponent

	MouseAreaPrototype.componentName = 'core.MouseArea'
	MouseAreaPrototype.clicked = _globals.core.createSignal('clicked')
	MouseAreaPrototype.touchStart = _globals.core.createSignal('touchStart')
	MouseAreaPrototype.verticalSwiped = _globals.core.createSignal('verticalSwiped')
	MouseAreaPrototype.horizontalSwiped = _globals.core.createSignal('horizontalSwiped')
	MouseAreaPrototype.mouseMove = _globals.core.createSignal('mouseMove')
	MouseAreaPrototype.canceled = _globals.core.createSignal('canceled')
	MouseAreaPrototype.touchMove = _globals.core.createSignal('touchMove')
	MouseAreaPrototype.wheelEvent = _globals.core.createSignal('wheelEvent')
	MouseAreaPrototype.touchEnd = _globals.core.createSignal('touchEnd')
	MouseAreaPrototype.entered = _globals.core.createSignal('entered')
	MouseAreaPrototype.exited = _globals.core.createSignal('exited')
	MouseAreaPrototype._bindTouch = function(value) {
		if (value && !this._touchBinder) {
			this._touchBinder = new _globals.core.EventBinder(this.element)

			var touchStart = function(event) { this.touchStart(event) }.bind(this)
			var touchEnd = function(event) { this.touchEnd(event) }.bind(this)
			var touchMove = (function(event) { this.touchMove(event) }).bind(this)

			this._touchBinder.on('touchstart', touchStart)
			this._touchBinder.on('touchend', touchEnd)
			this._touchBinder.on('touchmove', touchMove)
		}
		if (this._touchBinder)
			this._touchBinder.enable(value)
	}
	MouseAreaPrototype._bindClick = function(value) {
		if (value && !this._clickBinder) {
			this._clickBinder = new _globals.core.EventBinder(this.element)
			this._clickBinder.on('click', this.clicked.bind(this))
		}
		if (this._clickBinder)
			this._clickBinder.enable(value)
	}
	MouseAreaPrototype._bindPressable = function(value) {
		if (value && !this._pressableBinder) {
			this._pressableBinder = new _globals.core.EventBinder(this.element)
			this._pressableBinder.on('mousedown', function()	{ this.pressed = true }.bind(this))
			this._pressableBinder.on('mouseup', function()		{ this.pressed = false }.bind(this))
		}
		if (this._pressableBinder)
			this._pressableBinder.enable(value)
	}
	MouseAreaPrototype._bindWheel = function(value) {
		if (value && !this._wheelBinder) {
			this._clickBinder = new _globals.core.EventBinder(this.element)
			this._clickBinder.on('mousewheel', function(event) { this.wheelEvent(event.wheelDelta / 120) }.bind(this))
		}
		if (this._clickBinder)
			this._clickBinder.enable(value)
	}
	MouseAreaPrototype._bindHover = function(value) {
		if (value && !this._hoverBinder) {
			this._hoverBinder = new _globals.core.EventBinder(this.element)
			this._hoverBinder.on('mouseenter', function() { this.hover = true }.bind(this))
			this._hoverBinder.on('mouseleave', function() { this.hover = false }.bind(this))
			this._hoverBinder.on('mousemove', function(event) { if (this.updatePosition(event)) event.preventDefault() }.bind(this))
		}
		if (this._hoverBinder)
			this._hoverBinder.enable(value)
	}
	MouseAreaPrototype.updatePosition = function(event) {
		if (!this.recursiveVisible)
			return false

		var x = event.offsetX
		var y = event.offsetY

		if (x >= 0 && y >= 0 && x < this.width && y < this.height) {
			this.mouseX = x
			this.mouseY = y
			this.mouseMove()
			return true
		}
		else
			return false
	}
	core.addProperty(MouseAreaPrototype, 'real', 'mouseX')
	core.addProperty(MouseAreaPrototype, 'real', 'mouseY')
	core.addProperty(MouseAreaPrototype, 'string', 'cursor')
	core.addProperty(MouseAreaPrototype, 'bool', 'pressed')
	core.addProperty(MouseAreaPrototype, 'bool', 'containsMouse')
	core.addProperty(MouseAreaPrototype, 'bool', 'clickable', (true))
	core.addProperty(MouseAreaPrototype, 'bool', 'pressable', (true))
	core.addProperty(MouseAreaPrototype, 'bool', 'touchEnabled', (true))
	core.addProperty(MouseAreaPrototype, 'bool', 'hoverEnabled', (true))
	core.addProperty(MouseAreaPrototype, 'bool', 'wheelEnabled', (true))
	_globals.core._protoOnChanged(MouseAreaPrototype, 'wheelEnabled', (function(value) {
		this._bindWheel(value)
	} ))
	_globals.core._protoOnChanged(MouseAreaPrototype, 'hoverEnabled', (function(value) {
		this._bindHover(value)
	} ))
	_globals.core._protoOnChanged(MouseAreaPrototype, 'touchEnabled', (function(value) {
		this._bindTouch(value)
	} ))
	_globals.core._protoOnChanged(MouseAreaPrototype, 'recursiveVisible', (function(value) {
		if (!value)
			this.containsMouse = false
	} ))
	_globals.core._protoOnChanged(MouseAreaPrototype, 'clickable', (function(value) {
		this._bindClick(value)
	} ))
	_globals.core._protoOnChanged(MouseAreaPrototype, 'cursor', (function(value) { this.style('cursor', value) } ))
	_globals.core._protoOnChanged(MouseAreaPrototype, 'pressable', (function(value) {
		this._bindPressable(value)
	} ))
	_globals.core._protoOnChanged(MouseAreaPrototype, 'containsMouse', (function(value) {
		if (this.containsMouse) {
			this.entered()
		} else if (!this.containsMouse && this.pressable && this.pressed) {
			this.pressed = false
			this.canceled()
		} else {
			this.exited()
		}
	} ))
	_globals.core._protoOn(MouseAreaPrototype, 'touchMove', (function(event) {
		var box = this.toScreen()
		var e = event.touches[0]
		var x = e.pageX - box[0]
		var y = e.pageY - box[1]
		var dx = x - this._startX
		var dy = y - this._startY
		var adx = Math.abs(dx)
		var ady = Math.abs(dy)
		var motion = adx > 5 || ady > 5
		if (!motion)
			return

		if (!this._orientation)
			this._orientation = adx > ady ? 'horizontal' : 'vertical'

		// for delegated events, the target may change over time
		// this ensures we notify the right target and simulates the mouseleave behavior
		while (event.target && event.target !== this._startTarget)
			event.target = event.target.parentNode;
		if (event.target !== this._startTarget) {
			event.target = this._startTarget;
			return;
		}

		if (this._orientation == 'horizontal')
			this.horizontalSwiped(event)
		else
			this.verticalSwiped(event)
	} ))
	_globals.core._protoOn(MouseAreaPrototype, 'touchStart', (function(event) {
		var box = this.toScreen()
		var e = event.touches[0]
		var x = e.pageX - box[0]
		var y = e.pageY - box[1]
		this._startX = x
		this._startY = y
		this._orientation = null;
		this._startTarget = event.target;
	} ))

	MouseAreaPrototype.__create = function(__closure) {
		var $this = this;
		MouseAreaBasePrototype.__create.call(this, __closure.__base = { })
core.addAliasProperty($this, 'hover', function() { return $this }, 'containsMouse')
		core.addAliasProperty($this, 'hoverable', function() { return $this }, 'hoverEnabled')
	}
	MouseAreaPrototype.__setup = function(__closure) {
		var $this = this;
	MouseAreaBasePrototype.__setup.call(this, __closure.__base); delete __closure.__base

}


//=====[component core.Context]=====================

	var ContextBaseComponent = _globals.core.Item
	var ContextBasePrototype = ContextBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Item}
 */
	var ContextComponent = _globals.core.Context = function(parent, _delegate) {
		ContextBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.options = arguments[2]
		this.l10n = this.options.l10n || {}

		this._local['context'] = this
		this._prefix = this.options.prefix
		this._context = this
		this._started = false
		this._completed = false
		this._processingActions = false
		this._delayedActions = [[], []]
		this._stylesRegistered = {}
		this._asyncInvoker = _globals.core.safeCall(this, [], function (ex) { log("async action failed:", ex, ex.stack) })

		this.backend = _globals._backend()

		this._init()
	}

	}
	var ContextPrototype = ContextComponent.prototype = Object.create(ContextBasePrototype)

	ContextPrototype.constructor = ContextComponent

	ContextPrototype.componentName = 'core.Context'
	ContextPrototype.mangleClass = function(name) {
		return this._prefix + name
	}
	ContextPrototype.start = function(instance) {
		var closure = {}
		this.children.push(instance)
		instance.__create(closure)
		instance.__setup(closure)
		closure = undefined
		log('Context: created instance')
		// log('Context: calling on completed')
		return instance;
	}
	ContextPrototype.createElement = function(tag,cls) {
		if (cls === undefined)
			cls = ''
		var el = this.backend.createElement(this, tag, cls)
		if (cls || this._prefix) {
			el.addClass(this.mangleClass(cls))
		}
		if (cls && this._prefix)
			el.addClass(this.mangleClass('')) //base item style, fixme: pass array here?
		return el
	}
	ContextPrototype.scheduleAction = function(action,priority) {
		this._delayedActions[priority !== undefined? priority: 0].push(action)
	}
	ContextPrototype.init = function() {
		this.backend.initSystem(this.system)
	}
	ContextPrototype._onCompleted = function(callback) {
		this.scheduleAction(callback)
	}
	ContextPrototype._init = function() {
		log('Context: initializing...')
		new this.backend.init(this)
	}
	ContextPrototype.delayedAction = function(prefix,self,method) {
		var name = '__delayed_' + prefix
		if (self[name] === true)
			return

		self[name] = true
		this.scheduleAction(function() {
			self[name] = false
			method.call(self)
		})
	}
	ContextPrototype.qsTr = function(text) {
		var args = arguments
		var lang = this.language
		var messages = this.l10n[lang] || {}
		var contexts = messages[text] || {}
		for(var name in contexts) {
			text = contexts[name] //fixme: add context handling here
			break
		}
		return text.replace(/%(\d+)/, function(text, index) { return args[index] })
	}
	ContextPrototype.run = function() {
		this.backend.run(this, this._run.bind(this))
	}
	ContextPrototype.registerStyle = function(item,tag,cls) {
		cls = this.mangleClass(cls)
		var selector = cls? tag + '.' + cls: tag
		if (!(selector in this._stylesRegistered)) {
			item.registerStyle(this.stylesheet, selector)
			this._stylesRegistered[selector] = true
		}
	}
	ContextPrototype._run = function() {
		log('Context: signalling layout')
		this.visibleInView = true
		this.boxChanged()
		log('Context: calling completed()')
		this._started = true
		this._complete()
		this._completed = true
	}
	ContextPrototype._complete = function() {
		this._processActions()
	}
	ContextPrototype._processActions = function() {
		if (!this._started || this._processingActions)
			return

		this._processingActions = true

		var invoker = this._asyncInvoker
		var delayedActions = this._delayedActions
		var empty = false
		var maxLevels = delayedActions.length //must not have changed

		while(!empty) {
			for(var level = 0; level < maxLevels; ++level) {
				var levelActions = delayedActions[level]
				while (levelActions.length) {
					//log('actions', level, levelActions.length)
					var actions = levelActions.splice(0, levelActions.length)
					for(var i = 0, n = actions.length; i < n; ++i)
						invoker(actions[i])
				}
			}

			empty = true
			for(var level = 0; level < maxLevels; ++level) {
				var levelActions = delayedActions[level]
				if (levelActions.length !== 0)
					empty = false
			}
		}

		this._processingActions = false
		this.backend.tick(this)
	}
	core.addProperty(ContextPrototype, 'int', 'scrollY')
	core.addProperty(ContextPrototype, 'int', 'keyProcessDelay')
	core.addProperty(ContextPrototype, 'bool', 'fullscreen')
	core.addProperty(ContextPrototype, 'string', 'language')
	core.addProperty(ContextPrototype, 'System', 'system')
	core.addProperty(ContextPrototype, 'Location', 'location')
	core.addProperty(ContextPrototype, 'Stylesheet', 'stylesheet')
	core.addProperty(ContextPrototype, 'Orientation', 'orientation')
	core.addProperty(ContextPrototype, 'string', 'buildIdentifier', "Powered by PureQML No-Partnership Edition Engine")
	_globals.core._protoOnChanged(ContextPrototype, 'fullscreen', (function(value) { if (value) this.backend.enterFullscreenMode(this.element); else this.backend.exitFullscreenMode(); } ))

	ContextPrototype.__create = function(__closure) {
		var $this = this;
		ContextBasePrototype.__create.call(this, __closure.__base = { })
//creating component core.<anonymous>
		var _this$orientation = new _globals.html5.Orientation($this)
		__closure._this$orientation = _this$orientation

//creating component Orientation
		_this$orientation.__create(__closure.__closure__this$orientation = { })

		$this.orientation = _this$orientation
//creating component core.<anonymous>
		var _this$stylesheet = new _globals.html5.Stylesheet($this)
		__closure._this$stylesheet = _this$stylesheet

//creating component Stylesheet
		_this$stylesheet.__create(__closure.__closure__this$stylesheet = { })

		$this.stylesheet = _this$stylesheet
//creating component core.<anonymous>
		var _this$system = new _globals.core.System($this)
		__closure._this$system = _this$system

//creating component System
		_this$system.__create(__closure.__closure__this$system = { })

		$this.system = _this$system
//creating component core.<anonymous>
		var _this$location = new _globals.html5.Location($this)
		__closure._this$location = _this$location

//creating component Location
		_this$location.__create(__closure.__closure__this$location = { })

		$this.location = _this$location
	}
	ContextPrototype.__setup = function(__closure) {
		var $this = this;
	ContextBasePrototype.__setup.call(this, __closure.__base); delete __closure.__base
//setting up component Orientation
			var _this$orientation = __closure._this$orientation
			_this$orientation.__setup(__closure.__closure__this$orientation)
			delete __closure.__closure__this$orientation



//setting up component Stylesheet
			var _this$stylesheet = __closure._this$stylesheet
			_this$stylesheet.__setup(__closure.__closure__this$stylesheet)
			delete __closure.__closure__this$stylesheet



//setting up component System
			var _this$system = __closure._this$system
			_this$system.__setup(__closure.__closure__this$system)
			delete __closure.__closure__this$system


//assigning visibleInView to (false)
			$this._replaceUpdater('visibleInView'); $this.visibleInView = (false);

//setting up component Location
			var _this$location = __closure._this$location
			_this$location.__setup(__closure.__closure__this$location)
			delete __closure.__closure__this$location
}


//=====[component core.Text]=====================

	var TextBaseComponent = _globals.core.Item
	var TextBasePrototype = TextBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Item}
 */
	var TextComponent = _globals.core.Text = function(parent, _delegate) {
		TextBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._context.backend.initText(this)
		if (this.text.length > 0)
			this._setText(this.text)
	}

	}
	var TextPrototype = TextComponent.prototype = Object.create(TextBasePrototype)

	TextPrototype.constructor = TextComponent

	TextPrototype.componentName = 'core.Text'
	TextPrototype.on = function(name,callback) {
		if (!this._updateSizeNeeded) {
			if (name == 'boxChanged')
				this._enableSizeUpdate()
		}
		_globals.core.Object.prototype.on.apply(this, arguments)
	}
	TextPrototype.onChanged = function(name,callback) {
		if (!this._updateSizeNeeded) {
			switch(name) {
				case "right":
				case "width":
				case "bottom":
				case "height":
				case "verticalCenter":
				case "horizontalCenter":
					this._enableSizeUpdate()
			}
		}
		_globals.core.Object.prototype.onChanged.apply(this, arguments);
	}
	TextPrototype.registerStyle = function(style,tag) {
		style.addRule(tag, 'width: auto; height: auto;')
	}
	TextPrototype._scheduleUpdateSize = function() {
		this._context.delayedAction('text:update-size', this, this._updateSizeImpl)
	}
	TextPrototype._setText = function(html) {
		this._context.backend.setText(this, html)
	}
	TextPrototype.getClass = function() { return 'core-text' }
	TextPrototype._updateSize = function() {
		if (this.recursiveVisible && (this._updateSizeNeeded || this.clip))
			this._scheduleUpdateSize()
	}
	TextPrototype._updateSizeImpl = function() {
		if (this.text.length === 0) {
			this.paintedWidth = 0
			this.paintedHeight = 0
			return
		}

		this._context.backend.layoutText(this)
	}
	TextPrototype._updateStyle = function() {
		if (this.shadow && !this.shadow._empty())
			this.style('text-shadow', this.shadow._getFilterStyle())
		else
			this.style('text-shadow', '')
		_globals.core.Item.prototype._updateStyle.apply(this, arguments)
	}
	TextPrototype._enableSizeUpdate = function() {
		this._updateSizeNeeded = true
		this._updateSize()
	}
	core.addProperty(TextPrototype, 'string', 'text')
	core.addProperty(TextPrototype, 'color', 'color')
	core.addLazyProperty(TextPrototype, 'shadow', (function(__parent) {
		var lazy$shadow = new _globals.core.Shadow(__parent, true)
		var __closure = { lazy$shadow : lazy$shadow }

//creating component Shadow
			lazy$shadow.__create(__closure.__closure_lazy$shadow = { })


//setting up component Shadow
			var lazy$shadow = __closure.lazy$shadow
			lazy$shadow.__setup(__closure.__closure_lazy$shadow)
			delete __closure.__closure_lazy$shadow



		return lazy$shadow
}))
	core.addLazyProperty(TextPrototype, 'font', (function(__parent) {
		var lazy$font = new _globals.core.Font(__parent, true)
		var __closure = { lazy$font : lazy$font }

//creating component Font
			lazy$font.__create(__closure.__closure_lazy$font = { })


//setting up component Font
			var lazy$font = __closure.lazy$font
			lazy$font.__setup(__closure.__closure_lazy$font)
			delete __closure.__closure_lazy$font



		return lazy$font
}))
	core.addProperty(TextPrototype, 'int', 'paintedWidth')
	core.addProperty(TextPrototype, 'int', 'paintedHeight')
/** @const @type {number} */
	TextPrototype.AlignTop = 0
/** @const @type {number} */
	TextComponent.AlignTop = 0
/** @const @type {number} */
	TextPrototype.AlignBottom = 1
/** @const @type {number} */
	TextComponent.AlignBottom = 1
/** @const @type {number} */
	TextPrototype.AlignVCenter = 2
/** @const @type {number} */
	TextComponent.AlignVCenter = 2
	core.addProperty(TextPrototype, 'enum', 'verticalAlignment')
/** @const @type {number} */
	TextPrototype.AlignLeft = 0
/** @const @type {number} */
	TextComponent.AlignLeft = 0
/** @const @type {number} */
	TextPrototype.AlignRight = 1
/** @const @type {number} */
	TextComponent.AlignRight = 1
/** @const @type {number} */
	TextPrototype.AlignHCenter = 2
/** @const @type {number} */
	TextComponent.AlignHCenter = 2
/** @const @type {number} */
	TextPrototype.AlignJustify = 3
/** @const @type {number} */
	TextComponent.AlignJustify = 3
	core.addProperty(TextPrototype, 'enum', 'horizontalAlignment')
/** @const @type {number} */
	TextPrototype.NoWrap = 0
/** @const @type {number} */
	TextComponent.NoWrap = 0
/** @const @type {number} */
	TextPrototype.WordWrap = 1
/** @const @type {number} */
	TextComponent.WordWrap = 1
/** @const @type {number} */
	TextPrototype.WrapAnywhere = 2
/** @const @type {number} */
	TextComponent.WrapAnywhere = 2
/** @const @type {number} */
	TextPrototype.Wrap = 3
/** @const @type {number} */
	TextComponent.Wrap = 3
	core.addProperty(TextPrototype, 'enum', 'wrapMode')
	_globals.core._protoOnChanged(TextPrototype, 'wrapMode', (function(value) {
		switch(value) {
		case this.NoWrap:
			this.style({'white-space': 'nowrap', 'word-break': '' })
			break
		case this.Wrap:
		case this.WordWrap:
			this.style({'white-space': 'normal', 'word-break': '' })
			break
		case this.WrapAnywhere:
			this.style({ 'white-space': 'normal', 'word-break': 'break-all' })
			break
		}
		this._updateSize();
	} ))
	_globals.core._protoOnChanged(TextPrototype, 'verticalAlignment', (function(value) {
		this.verticalAlignment = value;
		this._enableSizeUpdate()
	} ))
	_globals.core._protoOnChanged(TextPrototype, 'horizontalAlignment', (function(value) {
		switch(value) {
		case this.AlignLeft:	this.style('text-align', 'left'); break
		case this.AlignRight:	this.style('text-align', 'right'); break
		case this.AlignHCenter:	this.style('text-align', 'center'); break
		case this.AlignJustify:	this.style('text-align', 'justify'); break
		}
	} ))
	_globals.core._protoOnChanged(TextPrototype, 'recursiveVisible', (function(value) {
		if (value)
			this._updateSize()
	} ))
	_globals.core._protoOnChanged(TextPrototype, 'width', (function(value) { this._updateSize() } ))
	_globals.core._protoOnChanged(TextPrototype, 'text', (function(value) { this._setText(value); this._updateSize() } ))
	_globals.core._protoOnChanged(TextPrototype, 'color', (function(value) { this.style('color', _globals.core.normalizeColor(value)) } ))

	TextPrototype.__create = function(__closure) {
		var $this = this;
		TextBasePrototype.__create.call(this, __closure.__base = { })

	}
	TextPrototype.__setup = function(__closure) {
		var $this = this;
	TextBasePrototype.__setup.call(this, __closure.__base); delete __closure.__base
//assigning width to (${paintedWidth})
			var update$_this$width = function() { $this.width = ($this._get('paintedWidth')); }
			$this._replaceUpdater('width', [update$_this$width, [[$this, 'paintedWidth']]])
//assigning height to (${paintedHeight})
			var update$_this$height = function() { $this.height = ($this._get('paintedHeight')); }
			$this._replaceUpdater('height', [update$_this$height, [[$this, 'paintedHeight']]])
}


//=====[component core.Transform]=====================

	var TransformBaseComponent = _globals.core.Object
	var TransformBasePrototype = TransformBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var TransformComponent = _globals.core.Transform = function(parent, _delegate) {
		TransformBaseComponent.apply(this, arguments)
	//custom constructor:
	{ this._transforms = {} }

	}
	var TransformPrototype = TransformComponent.prototype = Object.create(TransformBasePrototype)

	TransformPrototype.constructor = TransformComponent

	TransformPrototype.componentName = 'core.Transform'
	TransformPrototype._update = function(name,value) {
		switch(name) {
			case 'perspective':	this._transforms['perspective'] = value + 'px'; break;
			case 'translateX':	this._transforms['translateX'] = value + 'px'; break;
			case 'translateY':	this._transforms['translateY'] = value + 'px'; break;
			case 'translateZ':	this._transforms['translateZ'] = value + 'px'; break;
			case 'rotateX':	this._transforms['rotateX'] = value + 'deg'; break
			case 'rotateY':	this._transforms['rotateY'] = value + 'deg'; break
			case 'rotateZ':	this._transforms['rotateZ'] = value + 'deg'; break
			case 'rotate':	this._transforms['rotate'] = value + 'deg'; break
			case 'scaleX':	this._transforms['scaleX'] = value; break
			case 'scaleY':	this._transforms['scaleY'] = value; break
			case 'skewX':	this._transforms['skewX'] = value + 'deg'; break
			case 'skewY':	this._transforms['skewY'] = value + 'deg'; break
		}

		var str = ""
		for (var i in this._transforms) {
			str += i
			str += "(" + this._transforms[i] + ") "
		}
		this.parent.style('transform', str)
		_globals.core.Object.prototype._update.apply(this, arguments)
	}
	core.addProperty(TransformPrototype, 'int', 'perspective')
	core.addProperty(TransformPrototype, 'int', 'translateX')
	core.addProperty(TransformPrototype, 'int', 'translateY')
	core.addProperty(TransformPrototype, 'int', 'translateZ')
	core.addProperty(TransformPrototype, 'real', 'rotateX')
	core.addProperty(TransformPrototype, 'real', 'rotateY')
	core.addProperty(TransformPrototype, 'real', 'rotateZ')
	core.addProperty(TransformPrototype, 'real', 'rotate')
	core.addProperty(TransformPrototype, 'real', 'scaleX')
	core.addProperty(TransformPrototype, 'real', 'scaleY')
	core.addProperty(TransformPrototype, 'real', 'skewX')
	core.addProperty(TransformPrototype, 'real', 'skewY')

//=====[component src.PageMain]=====================

	var PageMainBaseComponent = _globals.core.Item
	var PageMainBasePrototype = PageMainBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Item}
 */
	var PageMainComponent = _globals.src.PageMain = function(parent, _delegate) {
		PageMainBaseComponent.apply(this, arguments)

	}
	var PageMainPrototype = PageMainComponent.prototype = Object.create(PageMainBasePrototype)

	PageMainPrototype.constructor = PageMainComponent

	PageMainPrototype.componentName = 'src.PageMain'
	core.addProperty(PageMainPrototype, 'bool', 'mobile')
	core.addProperty(PageMainPrototype, 'string', 'url', ("main"))

	PageMainPrototype.__create = function(__closure) {
		var $this = this;
		PageMainBasePrototype.__create.call(this, __closure.__base = { })
var _this$child0 = new _globals.core.Item($this)
		__closure._this$child0 = _this$child0

//creating component Item
		_this$child0.__create(__closure.__closure__this$child0 = { })
		var _this_child0$child0 = new _globals.core.Rectangle(_this$child0)
		__closure._this_child0$child0 = _this_child0$child0

//creating component Rectangle
		_this_child0$child0.__create(__closure.__closure__this_child0$child0 = { })

		_this$child0.addChild(_this_child0$child0)
		var _this_child0$child1 = new _globals.core.Column(_this$child0)
		__closure._this_child0$child1 = _this_child0$child1

//creating component Column
		_this_child0$child1.__create(__closure.__closure__this_child0$child1 = { })
		var _this_child0_child1$child0 = new _globals.core.Text(_this_child0$child1)
		__closure._this_child0_child1$child0 = _this_child0_child1$child0

//creating component Text
		_this_child0_child1$child0.__create(__closure.__closure__this_child0_child1$child0 = { })
		var _this_child0_child1_child0$child0 = new _globals.core.MouseArea(_this_child0_child1$child0)
		__closure._this_child0_child1_child0$child0 = _this_child0_child1_child0$child0

//creating component MouseArea
		_this_child0_child1_child0$child0.__create(__closure.__closure__this_child0_child1_child0$child0 = { })

		_this_child0_child1$child0.addChild(_this_child0_child1_child0$child0)
		_this_child0$child1.addChild(_this_child0_child1$child0)
		var _this_child0_child1$child1 = new _globals.src.ImageButton(_this_child0$child1)
		__closure._this_child0_child1$child1 = _this_child0_child1$child1

//creating component ImageButton
		_this_child0_child1$child1.__create(__closure.__closure__this_child0_child1$child1 = { })

		_this_child0$child1.addChild(_this_child0_child1$child1)
		_this_child0$child1._setId('content')
		_this$child0.addChild(_this_child0$child1)
		$this.addChild(_this$child0)
		var _this$child1 = new _globals.core.Row($this)
		__closure._this$child1 = _this$child1

//creating component Row
		_this$child1.__create(__closure.__closure__this$child1 = { })
		var _this_child1$child0 = new _globals.src.RoundButton(_this$child1)
		__closure._this_child1$child0 = _this_child1$child0

//creating component RoundButton
		_this_child1$child0.__create(__closure.__closure__this_child1$child0 = { })

		_this$child1.addChild(_this_child1$child0)
		var _this_child1$child1 = new _globals.src.RoundButton(_this$child1)
		__closure._this_child1$child1 = _this_child1$child1

//creating component RoundButton
		_this_child1$child1.__create(__closure.__closure__this_child1$child1 = { })

		_this$child1.addChild(_this_child1$child1)
		var _this_child1$child2 = new _globals.src.RoundButton(_this$child1)
		__closure._this_child1$child2 = _this_child1$child2

//creating component RoundButton
		_this_child1$child2.__create(__closure.__closure__this_child1$child2 = { })

		_this$child1.addChild(_this_child1$child2)
		$this.addChild(_this$child1)
		$this._setId('root')
	}
	PageMainPrototype.__setup = function(__closure) {
		var $this = this;
	PageMainBasePrototype.__setup.call(this, __closure.__base); delete __closure.__base
//assigning mobile to (${context.system.device} == _globals.core.System.prototype.Mobile)
			var update$_this$mobile = function() { $this.mobile = ($this._get('context')._get('system')._get('device') == _globals.core.System.prototype.Mobile); }
			$this._replaceUpdater('mobile', [update$_this$mobile, [[$this._get('context')._get('system'), 'device']]])
//assigning anchors.fill to (${parent})
			var update$_this$anchors_fill = function() { $this._get('anchors').fill = ($this._get('parent')); }
			$this._get('anchors')._replaceUpdater('fill', [update$_this$anchors_fill, [[$this, 'parent']]])

//setting up component Item
			var _this$child0 = __closure._this$child0
			_this$child0.__setup(__closure.__closure__this$child0)
			delete __closure.__closure__this$child0

//assigning anchors.right to (${parent.right})
			var update$_this_child0$anchors_right = function() { _this$child0._get('anchors').right = (_this$child0._get('parent')._get('right')); }
			_this$child0._get('anchors')._replaceUpdater('right', [update$_this_child0$anchors_right, [[_this$child0._get('parent'), 'right']]])
//assigning anchors.verticalCenter to (${parent.verticalCenter})
			var update$_this_child0$anchors_verticalCenter = function() { _this$child0._get('anchors').verticalCenter = (_this$child0._get('parent')._get('verticalCenter')); }
			_this$child0._get('anchors')._replaceUpdater('verticalCenter', [update$_this_child0$anchors_verticalCenter, [[_this$child0._get('parent'), 'verticalCenter']]])
//assigning anchors.left to (${parent.left})
			var update$_this_child0$anchors_left = function() { _this$child0._get('anchors').left = (_this$child0._get('parent')._get('left')); }
			_this$child0._get('anchors')._replaceUpdater('left', [update$_this_child0$anchors_left, [[_this$child0._get('parent'), 'left']]])
//assigning height to (${content.height} + (${root.mobile} ? 80 : 100))
			var update$_this_child0$height = function() { _this$child0.height = (_this$child0._get('content')._get('height') + (_this$child0._get('root')._get('mobile') ? 80 : 100)); }
			_this$child0._replaceUpdater('height', [update$_this_child0$height, [[_this$child0._get('content'), 'height'],[_this$child0._get('root'), 'mobile']]])

//setting up component Rectangle
			var _this_child0$child0 = __closure._this_child0$child0
			_this_child0$child0.__setup(__closure.__closure__this_child0$child0)
			delete __closure.__closure__this_child0$child0

//assigning border.width to (1)
			_this_child0$child0._get('border')._replaceUpdater('width'); _this_child0$child0._get('border').width = (1);
//assigning border.color to ("black")
			_this_child0$child0._get('border')._replaceUpdater('color'); _this_child0$child0._get('border').color = ("black");
//assigning opacity to (0.6)
			_this_child0$child0._replaceUpdater('opacity'); _this_child0$child0.opacity = (0.6);
//assigning color to ("#203040")
			_this_child0$child0._replaceUpdater('color'); _this_child0$child0.color = ("#203040");
//assigning anchors.fill to (${parent})
			var update$_this_child0_child0$anchors_fill = function() { _this_child0$child0._get('anchors').fill = (_this_child0$child0._get('parent')); }
			_this_child0$child0._get('anchors')._replaceUpdater('fill', [update$_this_child0_child0$anchors_fill, [[_this_child0$child0, 'parent']]])


//setting up component Column
			var _this_child0$child1 = __closure._this_child0$child1
			_this_child0$child1.__setup(__closure.__closure__this_child0$child1)
			delete __closure.__closure__this_child0$child1

//assigning anchors.margins to (${parent.width} * 0.1)
			var update$_this_child0_child1$anchors_margins = function() { _this_child0$child1._get('anchors').margins = (_this_child0$child1._get('parent')._get('width') * 0.1); }
			_this_child0$child1._get('anchors')._replaceUpdater('margins', [update$_this_child0_child1$anchors_margins, [[_this_child0$child1._get('parent'), 'width']]])
//assigning anchors.verticalCenter to (${parent.verticalCenter})
			var update$_this_child0_child1$anchors_verticalCenter = function() { _this_child0$child1._get('anchors').verticalCenter = (_this_child0$child1._get('parent')._get('verticalCenter')); }
			_this_child0$child1._get('anchors')._replaceUpdater('verticalCenter', [update$_this_child0_child1$anchors_verticalCenter, [[_this_child0$child1._get('parent'), 'verticalCenter']]])
//assigning spacing to (${root.mobile} ? 20 : 40)
			var update$_this_child0_child1$spacing = function() { _this_child0$child1.spacing = (_this_child0$child1._get('root')._get('mobile') ? 20 : 40); }
			_this_child0$child1._replaceUpdater('spacing', [update$_this_child0_child1$spacing, [[_this_child0$child1._get('root'), 'mobile']]])
//assigning anchors.right to (${parent.right})
			var update$_this_child0_child1$anchors_right = function() { _this_child0$child1._get('anchors').right = (_this_child0$child1._get('parent')._get('right')); }
			_this_child0$child1._get('anchors')._replaceUpdater('right', [update$_this_child0_child1$anchors_right, [[_this_child0$child1._get('parent'), 'right']]])
//assigning anchors.left to (${parent.left})
			var update$_this_child0_child1$anchors_left = function() { _this_child0$child1._get('anchors').left = (_this_child0$child1._get('parent')._get('left')); }
			_this_child0$child1._get('anchors')._replaceUpdater('left', [update$_this_child0_child1$anchors_left, [[_this_child0$child1._get('parent'), 'left']]])

//setting up component Text
			var _this_child0_child1$child0 = __closure._this_child0_child1$child0
			_this_child0_child1$child0.__setup(__closure.__closure__this_child0_child1$child0)
			delete __closure.__closure__this_child0_child1$child0

//assigning color to ("white")
			_this_child0_child1$child0._replaceUpdater('color'); _this_child0_child1$child0.color = ("white");
//assigning text to (_globals.qsTr(("Put the smart on your smartphone!")))
			var update$_this_child0_child1_child0$text = function() { _this_child0_child1$child0.text = (_globals.qsTr(("Put the smart on your smartphone!"))); }
			_this_child0_child1$child0._replaceUpdater('text', [update$_this_child0_child1_child0$text, [[_this_child0_child1$child0._context, 'language']]])
//assigning anchors.right to (${parent.right})
			var update$_this_child0_child1_child0$anchors_right = function() { _this_child0_child1$child0._get('anchors').right = (_this_child0_child1$child0._get('parent')._get('right')); }
			_this_child0_child1$child0._get('anchors')._replaceUpdater('right', [update$_this_child0_child1_child0$anchors_right, [[_this_child0_child1$child0._get('parent'), 'right']]])
//assigning horizontalAlignment to (_globals.core.Text.prototype.AlignHCenter)
			_this_child0_child1$child0._replaceUpdater('horizontalAlignment'); _this_child0_child1$child0.horizontalAlignment = (_globals.core.Text.prototype.AlignHCenter);
//assigning wrapMode to (_globals.core.Text.prototype.Wrap)
			_this_child0_child1$child0._replaceUpdater('wrapMode'); _this_child0_child1$child0.wrapMode = (_globals.core.Text.prototype.Wrap);
//assigning font.pixelSize to (${root.mobile} ? 30 : 40)
			var update$_this_child0_child1_child0$font_pixelSize = function() { _this_child0_child1$child0._get('font').pixelSize = (_this_child0_child1$child0._get('root')._get('mobile') ? 30 : 40); }
			_this_child0_child1$child0._get('font')._replaceUpdater('pixelSize', [update$_this_child0_child1_child0$font_pixelSize, [[_this_child0_child1$child0._get('root'), 'mobile']]])
//assigning verticalAlignment to (_globals.core.Text.prototype.AlignVCenter)
			_this_child0_child1$child0._replaceUpdater('verticalAlignment'); _this_child0_child1$child0.verticalAlignment = (_globals.core.Text.prototype.AlignVCenter);
//assigning anchors.left to (${parent.left})
			var update$_this_child0_child1_child0$anchors_left = function() { _this_child0_child1$child0._get('anchors').left = (_this_child0_child1$child0._get('parent')._get('left')); }
			_this_child0_child1$child0._get('anchors')._replaceUpdater('left', [update$_this_child0_child1_child0$anchors_left, [[_this_child0_child1$child0._get('parent'), 'left']]])

//setting up component MouseArea
			var _this_child0_child1_child0$child0 = __closure._this_child0_child1_child0$child0
			_this_child0_child1_child0$child0.__setup(__closure.__closure__this_child0_child1_child0$child0)
			delete __closure.__closure__this_child0_child1_child0$child0




//setting up component ImageButton
			var _this_child0_child1$child1 = __closure._this_child0_child1$child1
			_this_child0_child1$child1.__setup(__closure.__closure__this_child0_child1$child1)
			delete __closure.__closure__this_child0_child1$child1

//assigning anchors.horizontalCenter to (${parent.horizontalCenter})
			var update$_this_child0_child1_child1$anchors_horizontalCenter = function() { _this_child0_child1$child1._get('anchors').horizontalCenter = (_this_child0_child1$child1._get('parent')._get('horizontalCenter')); }
			_this_child0_child1$child1._get('anchors')._replaceUpdater('horizontalCenter', [update$_this_child0_child1_child1$anchors_horizontalCenter, [[_this_child0_child1$child1._get('parent'), 'horizontalCenter']]])
//assigning target to (${href})
			var update$_this_child0_child1_child1$target = function() { _this_child0_child1$child1.target = (_this_child0_child1$child1._get('href')); }
			_this_child0_child1$child1._replaceUpdater('target', [update$_this_child0_child1_child1$target, [[_this_child0_child1$child1, 'href']]])
//assigning source to ("img/en-play-badge.png")
			_this_child0_child1$child1._replaceUpdater('source'); _this_child0_child1$child1.source = ("img/en-play-badge.png");
//assigning height to (60)
			_this_child0_child1$child1._replaceUpdater('height'); _this_child0_child1$child1.height = (60);
//assigning width to (202)
			_this_child0_child1$child1._replaceUpdater('width'); _this_child0_child1$child1.width = (202);
//assigning href to ("https://play.google.com/store/apps/details?id=com.pastillilabs.situations2")
			_this_child0_child1$child1._replaceUpdater('href'); _this_child0_child1$child1.href = ("https://play.google.com/store/apps/details?id=com.pastillilabs.situations2");




//setting up component Row
			var _this$child1 = __closure._this$child1
			_this$child1.__setup(__closure.__closure__this$child1)
			delete __closure.__closure__this$child1

//assigning anchors.margins to (10)
			_this$child1._get('anchors')._replaceUpdater('margins'); _this$child1._get('anchors').margins = (10);
//assigning anchors.right to (${parent.right})
			var update$_this_child1$anchors_right = function() { _this$child1._get('anchors').right = (_this$child1._get('parent')._get('right')); }
			_this$child1._get('anchors')._replaceUpdater('right', [update$_this_child1$anchors_right, [[_this$child1._get('parent'), 'right']]])
//assigning spacing to (20)
			_this$child1._replaceUpdater('spacing'); _this$child1.spacing = (20);
//assigning anchors.bottom to (${parent.bottom})
			var update$_this_child1$anchors_bottom = function() { _this$child1._get('anchors').bottom = (_this$child1._get('parent')._get('bottom')); }
			_this$child1._get('anchors')._replaceUpdater('bottom', [update$_this_child1$anchors_bottom, [[_this$child1._get('parent'), 'bottom']]])

//setting up component RoundButton
			var _this_child1$child0 = __closure._this_child1$child0
			_this_child1$child0.__setup(__closure.__closure__this_child1$child0)
			delete __closure.__closure__this_child1$child0

//assigning source to ("img/mono/twitter.png")
			_this_child1$child0._replaceUpdater('source'); _this_child1$child0.source = ("img/mono/twitter.png");
//assigning href to ("https://www.twitter.com/situationsapp")
			_this_child1$child0._replaceUpdater('href'); _this_child1$child0.href = ("https://www.twitter.com/situationsapp");
//assigning target to (${href})
			var update$_this_child1_child0$target = function() { _this_child1$child0.target = (_this_child1$child0._get('href')); }
			_this_child1$child0._replaceUpdater('target', [update$_this_child1_child0$target, [[_this_child1$child0, 'href']]])


//setting up component RoundButton
			var _this_child1$child1 = __closure._this_child1$child1
			_this_child1$child1.__setup(__closure.__closure__this_child1$child1)
			delete __closure.__closure__this_child1$child1

//assigning source to ("img/mono/facebook.png")
			_this_child1$child1._replaceUpdater('source'); _this_child1$child1.source = ("img/mono/facebook.png");
//assigning href to ("https://www.facebook.com/situationsapp")
			_this_child1$child1._replaceUpdater('href'); _this_child1$child1.href = ("https://www.facebook.com/situationsapp");
//assigning target to (${href})
			var update$_this_child1_child1$target = function() { _this_child1$child1.target = (_this_child1$child1._get('href')); }
			_this_child1$child1._replaceUpdater('target', [update$_this_child1_child1$target, [[_this_child1$child1, 'href']]])


//setting up component RoundButton
			var _this_child1$child2 = __closure._this_child1$child2
			_this_child1$child2.__setup(__closure.__closure__this_child1$child2)
			delete __closure.__closure__this_child1$child2

//assigning source to ("img/mono/mail.png")
			_this_child1$child2._replaceUpdater('source'); _this_child1$child2.source = ("img/mono/mail.png");
//assigning href to ("mailto:support@pastillilabs.com")
			_this_child1$child2._replaceUpdater('href'); _this_child1$child2.href = ("mailto:support@pastillilabs.com");
//assigning target to (${href})
			var update$_this_child1_child2$target = function() { _this_child1$child2.target = (_this_child1$child2._get('href')); }
			_this_child1$child2._replaceUpdater('target', [update$_this_child1_child2$target, [[_this_child1$child2, 'href']]])
}


//=====[component core.BorderSide]=====================

	var BorderSideBaseComponent = _globals.core.Object
	var BorderSideBasePrototype = BorderSideBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var BorderSideComponent = _globals.core.BorderSide = function(parent, _delegate) {
		BorderSideBaseComponent.apply(this, arguments)

	}
	var BorderSidePrototype = BorderSideComponent.prototype = Object.create(BorderSideBasePrototype)

	BorderSidePrototype.constructor = BorderSideComponent

	BorderSidePrototype.componentName = 'core.BorderSide'
	BorderSidePrototype._updateStyle = function() {
		if (this.parent && this.parent.parent) {
			var pp = this.parent.parent
			if (pp) {
				var cssname = 'border-' + this.name
				if (this.width) {
					pp.style(cssname, this.width + "px solid " + _globals.core.normalizeColor(this.color))
				} else
					pp.style(cssname, '')
			}
		}
	}
	core.addProperty(BorderSidePrototype, 'string', 'name')
	core.addProperty(BorderSidePrototype, 'int', 'width')
	core.addProperty(BorderSidePrototype, 'color', 'color')
	_globals.core._protoOnChanged(BorderSidePrototype, 'width', (function(value) { this._updateStyle() } ))
	_globals.core._protoOnChanged(BorderSidePrototype, 'color', (function(value) { this._updateStyle() } ))

//=====[component core.Image]=====================

	var ImageBaseComponent = _globals.core.Item
	var ImageBasePrototype = ImageBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Item}
 */
	var ImageComponent = _globals.core.Image = function(parent, _delegate) {
		ImageBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._context.backend.initImage(this)
		this.load()
	}

	}
	var ImagePrototype = ImageComponent.prototype = Object.create(ImageBasePrototype)

	ImagePrototype.constructor = ImageComponent

	ImagePrototype.componentName = 'core.Image'
	ImagePrototype._load = function() {
		this._context.backend.loadImage(this)
	}
	ImagePrototype.load = function() {
		this.status = (this.source.length === 0) ? _globals.core.Image.prototype.Null: _globals.core.Image.prototype.Loading
		this._scheduleLoad()
	}
	ImagePrototype._scheduleLoad = function() {
	var image = this._get('image', true)

		this._context.delayedAction('image.load', this, this._load)
	}
	ImagePrototype._onError = function() {
		this.status = this.Error;
	}
	core.addProperty(ImagePrototype, 'int', 'paintedWidth')
	core.addProperty(ImagePrototype, 'int', 'paintedHeight')
	core.addProperty(ImagePrototype, 'int', 'sourceWidth')
	core.addProperty(ImagePrototype, 'int', 'sourceHeight')
	core.addProperty(ImagePrototype, 'string', 'source')
/** @const @type {number} */
	ImagePrototype.Null = 0
/** @const @type {number} */
	ImageComponent.Null = 0
/** @const @type {number} */
	ImagePrototype.Ready = 1
/** @const @type {number} */
	ImageComponent.Ready = 1
/** @const @type {number} */
	ImagePrototype.Loading = 2
/** @const @type {number} */
	ImageComponent.Loading = 2
/** @const @type {number} */
	ImagePrototype.Error = 3
/** @const @type {number} */
	ImageComponent.Error = 3
	core.addProperty(ImagePrototype, 'enum', 'status')
/** @const @type {number} */
	ImagePrototype.Stretch = 0
/** @const @type {number} */
	ImageComponent.Stretch = 0
/** @const @type {number} */
	ImagePrototype.PreserveAspectFit = 1
/** @const @type {number} */
	ImageComponent.PreserveAspectFit = 1
/** @const @type {number} */
	ImagePrototype.PreserveAspectCrop = 2
/** @const @type {number} */
	ImageComponent.PreserveAspectCrop = 2
/** @const @type {number} */
	ImagePrototype.Tile = 3
/** @const @type {number} */
	ImageComponent.Tile = 3
/** @const @type {number} */
	ImagePrototype.TileVertically = 4
/** @const @type {number} */
	ImageComponent.TileVertically = 4
/** @const @type {number} */
	ImagePrototype.TileHorizontally = 5
/** @const @type {number} */
	ImageComponent.TileHorizontally = 5
/** @const @type {number} */
	ImagePrototype.Pad = 6
/** @const @type {number} */
	ImageComponent.Pad = 6
	core.addProperty(ImagePrototype, 'enum', 'fillMode')
	_globals.core._protoOnChanged(ImagePrototype, 'source', (function(value) { this.load() } ))
	_globals.core._protoOnChanged(ImagePrototype, 'width', (function(value) { this.load() } ))
	_globals.core._protoOnChanged(ImagePrototype, 'fillMode', (function(value) { this.load() } ))
	_globals.core._protoOnChanged(ImagePrototype, 'height', (function(value) { this.load() } ))

//=====[component core.Anchors]=====================

	var AnchorsBaseComponent = _globals.core.Object
	var AnchorsBasePrototype = AnchorsBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var AnchorsComponent = _globals.core.Anchors = function(parent, _delegate) {
		AnchorsBaseComponent.apply(this, arguments)

	}
	var AnchorsPrototype = AnchorsComponent.prototype = Object.create(AnchorsBasePrototype)

	AnchorsPrototype.constructor = AnchorsComponent

	AnchorsPrototype.componentName = 'core.Anchors'
	AnchorsPrototype.marginsUpdated = _globals.core.createSignal('marginsUpdated')
	AnchorsPrototype._updateBottom = function() {
		var anchors = this
		var self = anchors.parent
		var parent = self.parent

		var parent_box = parent.toScreen()
		var bottom = anchors.bottom.toScreen()

		var tm = anchors.topMargin || anchors.margins
		var bm = anchors.bottomMargin || anchors.margins
		if (anchors.top) {
			var top = anchors.top.toScreen()
			self.height = bottom - top - bm - tm
		}
		self.y = bottom - parent_box[1] - bm - self.height - self.viewY
	}
	AnchorsPrototype._updateTop = function() {
		var anchors = this
		var self = anchors.parent
		var parent = self.parent

		var parent_box = parent.toScreen()
		var top = anchors.top.toScreen()

		var tm = anchors.topMargin || anchors.margins
		var bm = anchors.bottomMargin || anchors.margins
		self.y = top + tm - parent_box[1] - self.viewY
		if (anchors.bottom) {
			var bottom = anchors.bottom.toScreen()
			self.height = bottom - top - bm - tm
		}
	}
	AnchorsPrototype._updateRight = function() {
		var anchors = this
		var self = anchors.parent
		var parent = self.parent

		var parent_box = parent.toScreen()
		var right = anchors.right.toScreen()

		var lm = anchors.leftMargin || anchors.margins
		var rm = anchors.rightMargin || anchors.margins
		if (anchors.left) {
			var left = anchors.left.toScreen()
			self.width = right - left - rm - lm
		}
		self.x = right - parent_box[0] - rm - self.width - self.viewX
	}
	AnchorsPrototype._updateVCenter = function() {
		var anchors = this
		var self = anchors.parent
		var parent = self.parent

		var parent_box = parent.toScreen();
		var vcenter = anchors.verticalCenter.toScreen();
		var tm = anchors.topMargin || anchors.margins;
		var bm = anchors.bottomMargin || anchors.margins;
		self.y = vcenter - self.height / 2 - parent_box[1] + tm - bm - self.viewY;
	}
	AnchorsPrototype._updateLeft = function() {
		var anchors = this
		var self = anchors.parent
		var parent = self.parent

		var parent_box = parent.toScreen()
		var left = anchors.left.toScreen()

		var lm = anchors.leftMargin || anchors.margins
		self.x = left + lm - parent_box[0] - self.viewX
		if (anchors.right) {
			var right = anchors.right.toScreen()
			var rm = anchors.rightMargin || anchors.margins
			self.width = right - left - rm - lm
		}
	}
	AnchorsPrototype._updateHCenter = function() {
		var anchors = this
		var self = anchors.parent
		var parent = self.parent

		var parent_box = parent.toScreen();
		var hcenter = anchors.horizontalCenter.toScreen();
		var lm = anchors.leftMargin || anchors.margins;
		var rm = anchors.rightMargin || anchors.margins;
		self.x = hcenter - self.width / 2 - parent_box[0] + lm - rm - self.viewX;
	}
	core.addProperty(AnchorsPrototype, 'AnchorLine', 'bottom')
	core.addProperty(AnchorsPrototype, 'AnchorLine', 'verticalCenter')
	core.addProperty(AnchorsPrototype, 'AnchorLine', 'top')
	core.addProperty(AnchorsPrototype, 'AnchorLine', 'left')
	core.addProperty(AnchorsPrototype, 'AnchorLine', 'horizontalCenter')
	core.addProperty(AnchorsPrototype, 'AnchorLine', 'right')
	core.addProperty(AnchorsPrototype, 'Item', 'fill')
	core.addProperty(AnchorsPrototype, 'Item', 'centerIn')
	core.addProperty(AnchorsPrototype, 'int', 'margins')
	core.addProperty(AnchorsPrototype, 'int', 'bottomMargin')
	core.addProperty(AnchorsPrototype, 'int', 'topMargin')
	core.addProperty(AnchorsPrototype, 'int', 'leftMargin')
	core.addProperty(AnchorsPrototype, 'int', 'rightMargin')
	_globals.core._protoOnChanged(AnchorsPrototype, 'bottom', (function(value) {
		var self = this.parent
		var anchors = this
		self._replaceUpdater('y')
		if (anchors.top)
			self._replaceUpdater('height')
		var update_bottom = anchors._updateBottom.bind(this)
		update_bottom()
		self.onChanged('height', update_bottom)
		self.connectOn(anchors.bottom.parent, 'boxChanged', update_bottom)
		anchors.onChanged('bottomMargin', update_bottom)
	} ))
	_globals.core._protoOnChanged(AnchorsPrototype, 'bottomMargin', (function(value) { this.marginsUpdated(); } ))
	_globals.core._protoOnChanged(AnchorsPrototype, 'leftMargin', (function(value) { this.marginsUpdated(); } ))
	_globals.core._protoOnChanged(AnchorsPrototype, 'left', (function(value) {
		var self = this.parent
		var anchors = this
		self._replaceUpdater('x')
		if (anchors.right)
			self._replaceUpdater('width')
		var update_left = anchors._updateLeft.bind(this)
		update_left()
		self.connectOn(anchors.left.parent, 'boxChanged', update_left)
		anchors.onChanged('leftMargin', update_left)
	} ))
	_globals.core._protoOnChanged(AnchorsPrototype, 'topMargin', (function(value) { this.marginsUpdated(); } ))
	_globals.core._protoOnChanged(AnchorsPrototype, 'rightMargin', (function(value) { this.marginsUpdated(); } ))
	_globals.core._protoOnChanged(AnchorsPrototype, 'centerIn', (function(value) {
		this.horizontalCenter = value.horizontalCenter
		this.verticalCenter = value.verticalCenter
	} ))
	_globals.core._protoOnChanged(AnchorsPrototype, 'verticalCenter', (function(value) {
		var self = this.parent
		var anchors = this
		var update_v_center = anchors._updateVCenter.bind(this)
		self._replaceUpdater('y')
		update_v_center()
		self.onChanged('height', update_v_center)
		anchors.onChanged('topMargin', update_v_center)
		anchors.onChanged('bottomMargin', update_v_center)
		self.connectOn(anchors.verticalCenter.parent, 'boxChanged', update_v_center)
	} ))
	_globals.core._protoOnChanged(AnchorsPrototype, 'top', (function(value) {
		var self = this.parent
		var anchors = this
		self._replaceUpdater('y')
		if (anchors.bottom)
			self._replaceUpdater('height')
		var update_top = anchors._updateTop.bind(this)
		update_top()
		self.connectOn(anchors.top.parent, 'boxChanged', update_top)
		anchors.onChanged('topMargin', update_top)
	} ))
	_globals.core._protoOnChanged(AnchorsPrototype, 'fill', (function(value) {
		var fill = value
		this.left = fill.left
		this.right = fill.right
		this.top = fill.top
		this.bottom = fill.bottom
	} ))
	_globals.core._protoOnChanged(AnchorsPrototype, 'horizontalCenter', (function(value) {
		var self = this.parent
		var anchors = this
		self._replaceUpdater('x')
		var update_h_center = anchors._updateHCenter.bind(this)
		update_h_center()
		self.onChanged('width', update_h_center)
		anchors.onChanged('leftMargin', update_h_center)
		anchors.onChanged('rightMargin', update_h_center)
		self.connectOn(anchors.horizontalCenter.parent, 'boxChanged', update_h_center)
	} ))
	_globals.core._protoOnChanged(AnchorsPrototype, 'right', (function(value) {
		var self = this.parent
		var anchors = this
		self._replaceUpdater('x')
		if (anchors.left)
			anchors._replaceUpdater('width')
		var update_right = anchors._updateRight.bind(anchors)
		update_right()
		self.onChanged('width', update_right)
		self.connectOn(anchors.right.parent, 'boxChanged', update_right)
		anchors.onChanged('rightMargin', update_right)
	} ))
	_globals.core._protoOnChanged(AnchorsPrototype, 'margin', (function(value) { this.marginsUpdated(); } ))

//=====[component core.AnchorLine]=====================

	var AnchorLineBaseComponent = _globals.core.Object
	var AnchorLineBasePrototype = AnchorLineBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var AnchorLineComponent = _globals.core.AnchorLine = function(parent, _delegate) {
		AnchorLineBaseComponent.apply(this, arguments)

	}
	var AnchorLinePrototype = AnchorLineComponent.prototype = Object.create(AnchorLineBasePrototype)

	AnchorLinePrototype.constructor = AnchorLineComponent

	AnchorLinePrototype.componentName = 'core.AnchorLine'
	AnchorLinePrototype.toScreen = function() {
		return this.parent.toScreen()[this.boxIndex]
	}
	core.addProperty(AnchorLinePrototype, 'int', 'boxIndex')

//=====[component core.RAIIEventEmitter]=====================

	var RAIIEventEmitterBaseComponent = _globals.core.EventEmitter
	var RAIIEventEmitterBasePrototype = RAIIEventEmitterBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.EventEmitter}
 */
	var RAIIEventEmitterComponent = _globals.core.RAIIEventEmitter = function(parent, _delegate) {
		RAIIEventEmitterBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._onFirstListener = {}
		this._onLastListener = {}
	}

	}
	var RAIIEventEmitterPrototype = RAIIEventEmitterComponent.prototype = Object.create(RAIIEventEmitterBasePrototype)

	RAIIEventEmitterPrototype.constructor = RAIIEventEmitterComponent

	RAIIEventEmitterPrototype.componentName = 'core.RAIIEventEmitter'
	RAIIEventEmitterPrototype.discard = function() {
		_globals.core.EventEmitter.prototype.discard.apply(this)
	}
	RAIIEventEmitterPrototype.on = function(name,callback) {
		if (!(name in this._eventHandlers)) {
			if (name in this._onFirstListener) {
				//log('first listener to', name)
				this._onFirstListener[name](name)
			} else if ('' in this._onFirstListener) {
				//log('first listener to', name)
				this._onFirstListener[''](name)
			}
			if (this._eventHandlers[name])
				throw new Error('listener callback added event handler')
		}
		_globals.core.EventEmitter.prototype.on.call(this, name, callback)
	}
	RAIIEventEmitterPrototype.onListener = function(name,first,last) {
		this._onFirstListener[name] = first
		this._onLastListener[name] = last
	}
	RAIIEventEmitterPrototype.removeAllListeners = function(name) {
		_globals.core.EventEmitter.prototype.removeAllListeners.call(this, name)
		if (name in this._onLastListener)
			this._onLastListener[name](name)
		else if ('' in this._onLastListener) {
			//log('first listener to', name)
			this._onLastListener[''](name)
		}
	}

//=====[component src.ImageButton]=====================

	var ImageButtonBaseComponent = _globals.controls.web.WebLink
	var ImageButtonBasePrototype = ImageButtonBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.controls.web.WebLink}
 */
	var ImageButtonComponent = _globals.src.ImageButton = function(parent, _delegate) {
		ImageButtonBaseComponent.apply(this, arguments)

	}
	var ImageButtonPrototype = ImageButtonComponent.prototype = Object.create(ImageButtonBasePrototype)

	ImageButtonPrototype.constructor = ImageButtonComponent

	ImageButtonPrototype.componentName = 'src.ImageButton'

	ImageButtonPrototype.__create = function(__closure) {
		var $this = this;
		ImageButtonBasePrototype.__create.call(this, __closure.__base = { })
var _this$child0 = new _globals.core.Image($this)
		__closure._this$child0 = _this$child0

//creating component Image
		_this$child0.__create(__closure.__closure__this$child0 = { })
		_this$child0._setId('image')
		$this.addChild(_this$child0)
		core.addAliasProperty($this, 'source', function() { return $this._get('image') }, 'source')
	}
	ImageButtonPrototype.__setup = function(__closure) {
		var $this = this;
	ImageButtonBasePrototype.__setup.call(this, __closure.__base); delete __closure.__base
//setting up component Image
			var _this$child0 = __closure._this$child0
			_this$child0.__setup(__closure.__closure__this$child0)
			delete __closure.__closure__this$child0

//assigning anchors.fill to (${parent})
			var update$_this_child0$anchors_fill = function() { _this$child0._get('anchors').fill = (_this$child0._get('parent')); }
			_this$child0._get('anchors')._replaceUpdater('fill', [update$_this_child0$anchors_fill, [[_this$child0, 'parent']]])
}


//=====[component html5.Stylesheet]=====================

	var StylesheetBaseComponent = _globals.core.Object
	var StylesheetBasePrototype = StylesheetBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var StylesheetComponent = _globals.html5.Stylesheet = function(parent, _delegate) {
		StylesheetBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		var context = this._context
		var options = context.options

		var style = this.style = context.createElement('style')
		style.dom.type = 'text/css'

		this.prefix = options.prefix
		var divId = options.id

		var div = document.getElementById(context, divId)
		var topLevel = div === null

		var userSelect = window.Modernizr.prefixedCSS('user-select') + ": none; "
		style.setHtml(
			"div#" + divId + " { position: absolute; visibility: hidden; left: 0px; top: 0px; }" +
			(_globals.core.os == "webOS" ? this.mangleRule('div', "{ " + userSelect + " }") : "") +
			(_globals.core.os == "android" ? this.mangleRule('div', "{ -webkit-tap-highlight-color: rgba(255, 255, 255, 0); -webkit-focus-ring-color: rgba(255, 255, 255, 0); outline: none; }") : "") +
			(topLevel? "body { padding: 0; margin: 0; border: 0px; overflow: hidden; }": "") + //fixme: do we need style here in non-top-level mode?
			this.mangleRule('video', "{ position: absolute; }") + //fixme: do we need position rule if it's item?
			this.mangleRule('img', "{ position: absolute; -webkit-touch-callout: none; " + userSelect + " }")
		)
		var head = _globals.html5.html.getElement(context, 'head')
		head.append(style)
		head.updateStyle()

		this._addRule = _globals.html5.html.createAddRule(style.dom).bind(this)
		this._lastId = 0
	}

	}
	var StylesheetPrototype = StylesheetComponent.prototype = Object.create(StylesheetBasePrototype)

	StylesheetPrototype.constructor = StylesheetComponent

	StylesheetPrototype.componentName = 'html5.Stylesheet'
	StylesheetPrototype.allocateClass = function(prefix) {
		var globalPrefix = this.prefix
		return (globalPrefix? globalPrefix: '') + prefix + '-' + this._lastId++
	}
	StylesheetPrototype.addRule = function(selector,rule) {
		this._addRule(selector, rule)
	}
	StylesheetPrototype.mangleRule = function(selector,rule) {
		return this.mangleSelector(selector) + ' ' + rule + ' '
	}
	StylesheetPrototype.mangleSelector = function(selector) {
		var prefix = this.prefix
		if (prefix)
			return selector + '.' + prefix + 'core-item'
		else
			return selector
	}

//=====[component src.Background]=====================

	var BackgroundBaseComponent = _globals.core.Rectangle
	var BackgroundBasePrototype = BackgroundBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Rectangle}
 */
	var BackgroundComponent = _globals.src.Background = function(parent, _delegate) {
		BackgroundBaseComponent.apply(this, arguments)

	}
	var BackgroundPrototype = BackgroundComponent.prototype = Object.create(BackgroundBasePrototype)

	BackgroundPrototype.constructor = BackgroundComponent

	BackgroundPrototype.componentName = 'src.Background'

	BackgroundPrototype.__create = function(__closure) {
		var $this = this;
		BackgroundBasePrototype.__create.call(this, __closure.__base = { })
var _this$child0 = new _globals.core.Image($this)
		__closure._this$child0 = _this$child0

//creating component Image
		_this$child0.__create(__closure.__closure__this$child0 = { })

		$this.addChild(_this$child0)
		var _this$child1 = new _globals.core.Item($this)
		__closure._this$child1 = _this$child1

//creating component Item
		_this$child1.__create(__closure.__closure__this$child1 = { })
		var _this_child1$child0 = new _globals.core.Image(_this$child1)
		__closure._this_child1$child0 = _this_child1$child0

//creating component Image
		_this_child1$child0.__create(__closure.__closure__this_child1$child0 = { })

		_this$child1.addChild(_this_child1$child0)
		$this.addChild(_this$child1)
		$this._setId('root')
	}
	BackgroundPrototype.__setup = function(__closure) {
		var $this = this;
	BackgroundBasePrototype.__setup.call(this, __closure.__base); delete __closure.__base
//assigning color to ("#6080a0")
			$this._replaceUpdater('color'); $this.color = ("#6080a0");

//setting up component Image
			var _this$child0 = __closure._this$child0
			_this$child0.__setup(__closure.__closure__this$child0)
			delete __closure.__closure__this$child0

//assigning source to ("img/background.jpg")
			_this$child0._replaceUpdater('source'); _this$child0.source = ("img/background.jpg");
//assigning fillMode to (_globals.core.Image.prototype.PreserveAspectCrop)
			_this$child0._replaceUpdater('fillMode'); _this$child0.fillMode = (_globals.core.Image.prototype.PreserveAspectCrop);
//assigning anchors.fill to (${parent})
			var update$_this_child0$anchors_fill = function() { _this$child0._get('anchors').fill = (_this$child0._get('parent')); }
			_this$child0._get('anchors')._replaceUpdater('fill', [update$_this_child0$anchors_fill, [[_this$child0, 'parent']]])


//setting up component Item
			var _this$child1 = __closure._this$child1
			_this$child1.__setup(__closure.__closure__this$child1)
			delete __closure.__closure__this$child1

//assigning width to (100)
			_this$child1._replaceUpdater('width'); _this$child1.width = (100);
//assigning anchors.top to (${parent.top})
			var update$_this_child1$anchors_top = function() { _this$child1._get('anchors').top = (_this$child1._get('parent')._get('top')); }
			_this$child1._get('anchors')._replaceUpdater('top', [update$_this_child1$anchors_top, [[_this$child1._get('parent'), 'top']]])
//assigning anchors.left to (${parent.left})
			var update$_this_child1$anchors_left = function() { _this$child1._get('anchors').left = (_this$child1._get('parent')._get('left')); }
			_this$child1._get('anchors')._replaceUpdater('left', [update$_this_child1$anchors_left, [[_this$child1._get('parent'), 'left']]])
//assigning height to (100)
			_this$child1._replaceUpdater('height'); _this$child1.height = (100);

//setting up component Image
			var _this_child1$child0 = __closure._this_child1$child0
			_this_child1$child0.__setup(__closure.__closure__this_child1$child0)
			delete __closure.__closure__this_child1$child0

//assigning source to ("img/situations_shadow.png")
			_this_child1$child0._replaceUpdater('source'); _this_child1$child0.source = ("img/situations_shadow.png");
//assigning anchors.centerIn to (${parent})
			var update$_this_child1_child0$anchors_centerIn = function() { _this_child1$child0._get('anchors').centerIn = (_this_child1$child0._get('parent')); }
			_this_child1$child0._get('anchors')._replaceUpdater('centerIn', [update$_this_child1_child0$anchors_centerIn, [[_this_child1$child0, 'parent']]])
}


//=====[component html5.Location]=====================

	var LocationBaseComponent = _globals.core.Object
	var LocationBasePrototype = LocationBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var LocationComponent = _globals.html5.Location = function(parent, _delegate) {
		LocationBaseComponent.apply(this, arguments)

	}
	var LocationPrototype = LocationComponent.prototype = Object.create(LocationBasePrototype)

	LocationPrototype.constructor = LocationComponent

	LocationPrototype.componentName = 'html5.Location'
	LocationPrototype.updateActualValues = function() {
		this.hash = window.location.hash
		this.href = window.location.href
		this.port = window.location.port
		this.host = window.location.host
		this.origin = window.location.origin
		this.hostname = window.location.hostname
		this.pathname = window.location.pathname
		this.protocol = window.location.protocol
		this.search = window.location.search
		this.state = window.history.state
	}
	LocationPrototype.changeHref = function(href) {
		window.location.href = href
		this.updateActualValues()
	}
	LocationPrototype.pushState = function(state,title,url) {
		if (window.location.hostname) {
			window.history.pushState(state, title, url)
			this.updateActualValues()
		} else {
			document.title = title
			this.state = state
		}
	}
	core.addProperty(LocationPrototype, 'string', 'hash')
	core.addProperty(LocationPrototype, 'string', 'host')
	core.addProperty(LocationPrototype, 'string', 'href')
	core.addProperty(LocationPrototype, 'string', 'port')
	core.addProperty(LocationPrototype, 'string', 'origin')
	core.addProperty(LocationPrototype, 'string', 'hostname')
	core.addProperty(LocationPrototype, 'string', 'pathname')
	core.addProperty(LocationPrototype, 'string', 'protocol')
	core.addProperty(LocationPrototype, 'string', 'search')
	core.addProperty(LocationPrototype, 'Object', 'state')

	LocationPrototype.__create = function(__closure) {
		var $this = this;
		LocationBasePrototype.__create.call(this, __closure.__base = { })

	}
	LocationPrototype.__setup = function(__closure) {
		var $this = this;
	LocationBasePrototype.__setup.call(this, __closure.__base); delete __closure.__base
$this._context._onCompleted((function() {
		var location = window.location
		this.updateActualValues()
		var self = this
		window.onhashchange = function() { self.hash = location.hash }
		window.onpopstate = function() { self.updateActualValues() }
	} ).bind($this))
}


//=====[component html5.Orientation]=====================

	var OrientationBaseComponent = _globals.core.Object
	var OrientationBasePrototype = OrientationBaseComponent.prototype

/**
 * @constructor
 * @extends {_globals.core.Object}
 */
	var OrientationComponent = _globals.html5.Orientation = function(parent, _delegate) {
		OrientationBaseComponent.apply(this, arguments)

	}
	var OrientationPrototype = OrientationComponent.prototype = Object.create(OrientationBasePrototype)

	OrientationPrototype.constructor = OrientationComponent

	OrientationPrototype.componentName = 'html5.Orientation'
	OrientationPrototype.onChanged = function(name,callback) {
		if (!this._orientationEnabled) {
			var self = this
			window.ondeviceorientation = function(e) {
				self.absolute = e.absolute
				self.alpha = e.alpha
				self.beta = e.beta
				self.gamma = e.gamma
			}
			this._orientationEnabled = true;
		}

		_globals.core.Object.prototype.onChanged.apply(this, arguments);
	}
	core.addProperty(OrientationPrototype, 'real', 'alpha')
	core.addProperty(OrientationPrototype, 'real', 'beta')
	core.addProperty(OrientationPrototype, 'real', 'gamma')
	core.addProperty(OrientationPrototype, 'bool', 'absolute')
_globals.core.model = (function() {/** @const */
var exports = {};
exports._get = function(name) { return exports[name] }
//=====[import core.model]=====================

var ModelUpdateNothing = 0
var ModelUpdateInsert = 1
var ModelUpdateUpdate = 2

var ModelUpdateRange = function(type, length) {
	this.type = type
	this.length = length
}

exports.ModelUpdate = function() {
	this.count = 0
	this._reset()
}
exports.ModelUpdate.prototype.constructor = exports.ModelUpdate

exports.ModelUpdate.prototype._reset = function() {
	this._ranges = [new ModelUpdateRange(ModelUpdateNothing, this.count)]
	this._updateIndex = this.count
}

exports.ModelUpdate.prototype._setUpdateIndex = function(begin) {
	if (begin < this._updateIndex)
		this._updateIndex = begin
}

exports.ModelUpdate.prototype._find = function(index) {
	var ranges = this._ranges
	var i
	for(i = 0; i < ranges.length; ++i) {
		var range = ranges[i]
		if (index < range.length)
			return { index: i, offset: index }
		if (range.length > 0)
			index -= range.length
	}
	if (index != 0)
		throw new Error('invalid index ' + index)

	return { index: i - 1, offset: range.length }
}

exports.ModelUpdate.prototype.reset = function(model) {
	this.update(model, 0, Math.min(model.count, this.count))
	if (this.count < model.count) {
		this.insert(model, this.count, model.count)
	} else {
		this.remove(model, model.count, this.count)
	}
}

exports.ModelUpdate.prototype._merge = function() {
	var ranges = this._ranges
	for(var index = 1; index < ranges.length; ) {
		var range = ranges[index - 1]
		var nextRange = ranges[index]
		if (range.type === nextRange.type) {
			if (range.type === ModelUpdateInsert && range.length < 0 && nextRange.length > 0) {
				//removed + inserted rows reappers as updated
				var updated = Math.min(-range.length, nextRange.length)
				range.type = ModelUpdateUpdate
				nextRange.length += range.length
				range.length = updated
				if (index > 1)
					--index
			} else {
				range.length += nextRange.length
				ranges.splice(index, 1)
			}
		} else if (range.type == ModelUpdateInsert && range.length === 0) {
			ranges.splice(index, 1)
		} else
			++index
	}
}

exports.ModelUpdate.prototype._split = function(index, offset, type, length) {
	var ranges = this._ranges
	if (offset == 0) {
		ranges.splice(index, 0, new ModelUpdateRange(type, length))
		return index + 1
	} else {
		var range = ranges[index]
		var right = range.length - offset
		range.length = offset
		if (right != 0) {
			ranges.splice(index + 1, 0,
				new ModelUpdateRange(type, length),
				new ModelUpdateRange(range.type, right))
			return index + 2
		} else {
			ranges.splice(index + 1, 0,
				new ModelUpdateRange(type, length))
			return index + 2
		}
	}
}

exports.ModelUpdate.prototype.insert = function(model, begin, end) {
	if (begin >= end)
		return

	this._setUpdateIndex(begin)
	var ranges = this._ranges
	var d = end - begin
	this.count += d
	if (this.count != model.count)
		throw new Error('unbalanced insert ' + this.count + ' + [' + begin + '-' + end + '], model reported ' + model.count)

	var res = this._find(begin)
	var range = ranges[res.index]
	if (range.length == 0) { //first insert
		range.type = ModelUpdateInsert
		range.length += d
	} else {
		if (res.offset >= 0)
			this._split(res.index, res.offset, ModelUpdateInsert, d)
		else
			this._split(res.index + 1, 0, ModelUpdateInsert, d)
	}
	this._merge()
}

exports.ModelUpdate.prototype.remove = function(model, begin, end) {
	if (begin >= end)
		return

	this._setUpdateIndex(begin)
	var ranges = this._ranges
	var d = end - begin
	this.count -= d
	if (this.count != model.count)
		throw new Error('unbalanced remove ' + this.count + ' + [' + begin + '-' + end + '], model reported ' + model.count)

	var res = this._find(begin)
	var range = ranges[res.index]

	if (range.type == ModelUpdateInsert) {
		range.length -= d
	} else {
		var index = this._split(res.index, res.offset, ModelUpdateInsert, -d)
		while(d > 0) {
			var range = ranges[index]
			if (range.length <= d) {
				ranges.splice(index, 1)
				d -= range.length
			} else {
				range.length -= d
				d = 0
			}
		}
	}
	this._merge()
}

exports.ModelUpdate.prototype.update = function(model, begin, end) {
	if (begin >= end)
		return

	var ranges = this._ranges
	var n = end - begin
	var res = this._find(begin)
	var index = res.index

	var range = ranges[index]
	if (res.offset > 0) {
		ranges.splice(index + 1, 0, new ModelUpdateRange(range.type, range.length - res.offset))
		range.length = res.offset
		++index
		if (range.length == 0)
			throw new Error('invalid offset')
	}

	while(n > 0) {
		var range = ranges[index]
		var length = range.length
		switch(range.type) {
			case ModelUpdateNothing:
				if (length > n) {
					//range larger than needed
					range.length -= n
					ranges.splice(index, 0, new ModelUpdateRange(ModelUpdateUpdate, n))
					n -= length
				} else { //length <= n
					range.type = ModelUpdateUpdate
					n -= length
				}
				break
			case ModelUpdateInsert:
				if (length > 0)
					n -= length
				++index
				break
			case ModelUpdateUpdate:
				n -= length
				++index
				break
		}
	}
	this._merge()
}

exports.ModelUpdate.prototype.apply = function(view, skipCheck) {
	var index = 0
	this._ranges.forEach(
		function(range) {
			var n = range.length
			switch(range.type) {
				case ModelUpdateInsert:
					if (n > 0) {
						view._insertItems(index, index + n)
						index += n
					} else if (n < 0) {
						view._removeItems(index, index - n)
					}
					break
				case ModelUpdateUpdate:
					view._updateItems(index, index + n)
					index += n
					break
				default:
					index += range.length
			}
		}
	)
	if (!skipCheck && view._items.length != this.count)
		throw new Error('unbalanced items update, view: ' + view._items.length + ', update:' + this.count)

	for(var i = this._updateIndex; i < this.count; ++i)
		view._updateDelegateIndex(i)
	this._reset()
}

return exports;
} )()
_globals.html5.html = (function() {/** @const */
var exports = {};
exports._get = function(name) { return exports[name] }
//=====[import html5.html]=====================

/*** @using { core.RAIIEventEmitter } **/

exports.autoClassify = false
var populateStyleThreshold = 2

exports.createAddRule = function(style) {
	if(! (style.sheet || {}).insertRule) {
		var sheet = (style.styleSheet || style.sheet)
		return function(name, rules) {
			try {
				sheet.addRule(name, rules)
			} catch(e) {
				log("InsertRule failed:", e)
			}
		}
	}
	else {
		var sheet = style.sheet
		return function(name, rules) {
			try {
				sheet.insertRule(name + '{' + rules + '}', sheet.cssRules.length)
			} catch(e) {
				log("InsertRule failed:", e)
			}
		}
	}
}

var StyleCache = function() {
	this._cache = {}
}

var StyleCachePrototype = StyleCache.prototype
StyleCachePrototype.constructor = StyleCache

StyleCachePrototype.update = function(element, name) {
	//log('update', element._uniqueId, name)
	var cache = this._cache
	var id = element._uniqueId
	var entry = cache[id]
	if (entry !== undefined) {
		if (!entry.data[name]) {
			entry.data[name] = true
			++entry.size
		}
	} else {
		var data = {}
		data[name] = true
		cache[id] = {data: data, element: element, size: 1}
	}
}

StyleCachePrototype.pop = function(element) {
	var id = element._uniqueId
	var data = this._cache[id]
	if (data === undefined)
		return

	delete this._cache[id]
	return data
}

StyleCachePrototype.apply = function() {
	var cache = this._cache
	this._cache = {}

	for(var id in cache) {
		var entry = cache[id]
		entry.element.updateStyle(entry)
	}
}

var StyleClassifier = function (prefix) {
	var style = document.createElement('style')
	style.type = 'text/css'
	document.head.appendChild(style)

	this.prefix = prefix + 'C-'
	this.style = style
	this.total = 0
	this.stats = {}
	this.classes = {}
	this.classes_total = 0
	this._addRule = exports.createAddRule(style)
}

var StyleClassifierPrototype = StyleClassifier.prototype
StyleClassifierPrototype.constructor = StyleClassifier

StyleClassifierPrototype.add = function(rule) {
	this.stats[rule] = (this.stats[rule] || 0) + 1
	++this.total
}

StyleClassifierPrototype.register = function(rules) {
	var rule = rules.join(';')
	var classes = this.classes
	var cls = classes[rule]
	if (cls !== undefined)
		return cls

	var cls = classes[rule] = this.prefix + this.classes_total++
	this._addRule('.' + cls, rule)
	return cls
}

StyleClassifierPrototype.classify = function(rules) {
	var total = this.total
	if (total < 10) //fixme: initial population threshold
		return ''

	rules.sort() //mind vendor prefixes!
	var classified = []
	var hot = []
	var stats = this.stats
	rules.forEach(function(rule, idx) {
		var hits = stats[rule]
		var usage = hits / total
		if (usage > 0.05) { //fixme: usage threshold
			classified.push(rule)
			hot.push(idx)
		}
	})
	if (hot.length < 2)
		return ''
	hot.forEach(function(offset, idx) {
		rules.splice(offset - idx, 1)
	})
	return this.register(classified)
}

var _modernizrCache = {}
if (_globals.core.userAgent.toLowerCase().indexOf('webkit') >= 0)
	_modernizrCache['appearance'] = '-webkit-appearance'

var getPrefixedName = function(name) {
	var prefixedName = _modernizrCache[name]
	if (prefixedName === undefined)
		_modernizrCache[name] = prefixedName = window.Modernizr.prefixedCSS(name)
	return prefixedName
}

exports.getPrefixedName = getPrefixedName

var registerGenericListener = function(target) {
	var prefix = '_domEventHandler_'
	target.onListener('',
		function(name) {
			var context = target._context
			//log('registering generic event', name)
			var pname = prefix + name
			var callback = target[pname] = function() {
				try { target.emitWithArgs(name, arguments) }
				catch(ex) {
					context._processActions()
					throw ex
				}
				context._processActions()
			}
			target.dom.addEventListener(name, callback)
		},
		function(name) {
			//log('removing generic event', name)
			var pname = prefix + name
			target.dom.removeEventListener(name, target[pname])
		}
	)
}

var _loadedStylesheets = {}

exports.loadExternalStylesheet = function(url) {
	if (!_loadedStylesheets[url]) {
		var link = document.createElement('link')
		link.setAttribute('rel', "stylesheet")
		link.setAttribute('href', url)
		document.head.appendChild(link)
		_loadedStylesheets[url] = true
	}
}

var lastId = 0

var nodesCache = {};

/**
 * @constructor
 */

exports.Element = function(context, tag) {
	if (typeof tag === 'string') {
		if (!nodesCache[tag]) {
			nodesCache[tag] = document.createElement(tag);
		}
		this.dom = nodesCache[tag].cloneNode(false);
	}
	else
		this.dom = tag

	if (exports.autoClassify) {
		if (!context._styleClassifier)
			context._styleClassifier = new StyleClassifier(context._prefix)
	} else
		context._styleClassifier = null

	_globals.core.RAIIEventEmitter.apply(this)
	this._context = context
	this._styles = {}
	this._class = ''
	this._widthAdjust = 0
	this._uniqueId = String(++lastId)
	this._firstChildIndex = 0

	registerGenericListener(this)
}

var ElementPrototype = exports.Element.prototype = Object.create(_globals.core.RAIIEventEmitter.prototype)
ElementPrototype.constructor = exports.Element

ElementPrototype.addClass = function(cls) {
	this.dom.classList.add(cls)
}

ElementPrototype.appendChildren = function(children) {
	if (children.length > 0) {
		var fragment = document.createDocumentFragment()
		children.forEach(function(child) {
			fragment.appendChild(child)
		})
		this.dom.appendChild(fragment)
	}
}

ElementPrototype.removeChildren = function(ui) {
	var removedChildren = []

	var dom = this.dom
	ui.children.forEach(function(child) {
		var element = child.element
		if (element !== undefined) {
			var childNode = element.dom
			if (childNode.parentNode === dom) {
				dom.removeChild(childNode)
				removedChildren.push(childNode)
			}
		}
	})
	return removedChildren
}


ElementPrototype.setHtml = function(html, component) {
	this._widthAdjust = 0 //reset any text related rounding corrections
	var dom = this.dom
	var children
	if (component !== undefined)
		children = this.removeChildren(component)
	else
		children = []
	dom.innerHTML = html
	this.appendChildren(children)
}

ElementPrototype.width = function() {
	this.updateStyle()
	return this.dom.clientWidth - this._widthAdjust
}

ElementPrototype.height = function() {
	this.updateStyle()
	return this.dom.clientHeight
}

ElementPrototype.fullWidth = function() {
	this.updateStyle()
	return this.dom.scrollWidth - this._widthAdjust
}

ElementPrototype.fullHeight = function() {
	this.updateStyle()
	return this.dom.scrollHeight
}

ElementPrototype.style = function(name, style) {
	var cache = this._context._styleCache
	if (style !== undefined) {
		if (style !== '') //fixme: replace it with explicit 'undefined' syntax
			this._styles[name] = style
		else
			delete this._styles[name]
		cache.update(this, name)
	} else if (typeof name === 'object') { //style({ }) assignment
		for(var k in name) {
			var value = name[k]
			if (value !== '') //fixme: replace it with explicit 'undefined' syntax
				this._styles[k] = value
			else
				delete this._styles[k]
			cache.update(this, k)
		}
	}
	else
		return this._styles[name]
}

ElementPrototype.setAttribute = function(name, value) {
	this.dom.setAttribute(name, value)
}

/** @const */
var cssUnits = {
	'left': 'px',
	'top': 'px',
	'width': 'px',
	'height': 'px',

	'border-radius': 'px',
	'border-width': 'px',

	'margin-left': 'px',
	'margin-top': 'px',
	'margin-right': 'px',
	'margin-bottom': 'px',

	'padding-left': 'px',
	'padding-top': 'px',
	'padding-right': 'px',
	'padding-bottom': 'px',
	'padding': 'px'
}

ElementPrototype.forceLayout = function() {
	this.updateStyle()
	return this.dom.offsetWidth | this.dom.offsetHeight
}

ElementPrototype.updateStyle = function(updated) {
	var element = this.dom
	if (!element)
		return

	var populate = false

	if (updated === undefined) {
		updated = this._context._styleCache.pop(this)
		if (updated === undefined) //no update at all
			return
	}
	//log('styles updated:', updated.size, ', threshold', populateStyleThreshold)
	if (updated.size <= populateStyleThreshold) {
		updated = updated.data
	} else {
		//fallback to old setAttribute('style') strategy
		updated = this._styles
		populate = true
	}

	var cache = this._context._styleClassifier
	var rules = []
	for(var name in updated) {
		var value = this._styles[name]

		var prefixedName = getPrefixedName(name)
		var ruleName = prefixedName !== false? prefixedName: name
		if (Array.isArray(value))
			value = value.join(',')

		var unit = ''
		if (typeof value === 'number') {
			if (name in cssUnits)
				unit = cssUnits[name]
			if (name === 'width')
				value += this._widthAdjust
		}
		value += unit

		if (populate) {
			//fixme: revive classifier here
			//var prefixedValue = window.Modernizr.prefixedCSSValue(name, value)
			//var prefixedValue = value
			var rule = ruleName + ':' + value //+ (prefixedValue !== false? prefixedValue: value)
			if (cache)
				cache.add(rule)
			rules.push(rule)
		} else {
			element.style[ruleName] = value
		}
	}
	var cls = cache? cache.classify(rules): ''
	if (cls !== this._class) {
		var classList = element.classList
		if (this._class !== '')
			classList.remove(this._class)
		this._class = cls
		if (cls !== '')
			classList.add(cls)
	}

	//set style attribute
	if (populate)
		element.setAttribute('style', rules.join(';'))
}

ElementPrototype.append = function(el) {
	this.dom.appendChild((el instanceof exports.Element)? el.dom: el)
}

ElementPrototype.discard = function() {
	_globals.core.RAIIEventEmitter.prototype.discard.apply(this)
	this.remove()
}

ElementPrototype.remove = function() {
	var dom = this.dom
	if (dom.parentNode)
		dom.parentNode.removeChild(dom)
}

exports.Window = function(context, dom) {
	_globals.core.RAIIEventEmitter.apply(this)
	this._context = context
	this.dom = dom

	registerGenericListener(this)
}

var WindowPrototype = exports.Window.prototype = Object.create(_globals.core.RAIIEventEmitter.prototype)
WindowPrototype.constructor = exports.Window

WindowPrototype.width = function() {
	return this.dom.innerWidth
}

WindowPrototype.height = function() {
	return this.dom.innerHeight
}

WindowPrototype.scrollY = function() {
	return this.dom.scrollY
}

exports.getElement = function(ctx, tag) {
	var tags = document.getElementsByTagName(tag)
	if (tags.length != 1)
		throw new Error('no tag ' + tag + '/multiple tags')
	return new exports.Element(ctx, tags[0])
}

exports.init = function(ctx) {
	ctx._styleCache = new StyleCache()
	var options = ctx.options
	var prefix = ctx._prefix
	var divId = options.id
	var tag = options.tag || 'div'

	if (prefix) {
		prefix += '-'
		log('Context: using prefix', prefix)
	}

	var win = new _globals.html5.html.Window(ctx, window)
	ctx.window = win
	var w, h

	var html = exports
	var div = document.getElementById(divId)
	var topLevel = div === null
	if (!topLevel) {
		div = new html.Element(ctx, div)
		w = div.width()
		h = div.height()
		log('Context: found element by id, size: ' + w + 'x' + h)
		win.on('resize', function() { ctx.width = div.width(); ctx.height = div.height(); });
	} else {
		w = win.width();
		h = win.height();
		log("Context: window size: " + w + "x" + h);
		div = html.createElement(ctx, tag)
		div.dom.id = divId
		win.on('resize', function() { ctx.width = win.width(); ctx.height = win.height(); });
		var body = html.getElement(ctx, 'body')
		body.append(div);
	}

	ctx._textCanvas = html.createElement(ctx, 'canvas')
	ctx._textCanvas.style('width', 0)
	ctx._textCanvas.style('height', 0)
	div.append(ctx._textCanvas)
	ctx._textCanvasContext = ('getContext' in ctx._textCanvas.dom)? ctx._textCanvas.dom.getContext('2d'): null

	ctx.element = div
	ctx.width = w
	ctx.height = h

	win.on('scroll', function(event) { ctx.scrollY = win.scrollY(); });

	var onFullscreenChanged = function(e) {
		var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
		ctx.fullscreen = state
	}

	new Array('webkitfullscreenchange', 'mozfullscreenchange', 'fullscreenchange').forEach(function(name) {
		div.on(name, onFullscreenChanged)
	})

	win.on('keydown', function(event) {
		var handlers = core.forEach(ctx, _globals.core.Item.prototype._enqueueNextChildInFocusChain, [])
		var n = handlers.length
		for(var i = 0; i < n; ++i) {
			var handler = handlers[i]
			if (handler._processKey(event)) {
				event.preventDefault();
				break
			}
		}
	}) //fixme: add html.Document instead
}


//fixme: this is sorta hack, generalize that across other backends
exports.initSystem = function(system) {
	var win = system._context.window

	win.on('focus', function() { system.pageActive = true })
	win.on('blur', function() { system.pageActive = false })

	system.screenWidth = window.screen.width
	system.screenHeight = window.screen.height
}

exports.createElement = function(ctx, tag) {
	return new exports.Element(ctx, tag)
}

exports.initImage = function(image) {
	var tmp = new Image()
	image._image = tmp
	image._image.onerror = image._onError.bind(image)

	image._image.onload = function() {
		image.sourceWidth = tmp.naturalWidth
		image.sourceHeight = tmp.naturalHeight
		var natW = tmp.naturalWidth, natH = tmp.naturalHeight

		if (!image.width)
			image.width = natW
		if (!image.height)
			image.height = natH

		if (image.fillMode !== image.PreserveAspectFit) {
			image.paintedWidth = image.width
			image.paintedHeight = image.height
		}

		var style = {'background-image': 'url("' + image.source + '")'}
		switch(image.fillMode) {
			case image.Stretch:
				style['background-repeat'] = 'no-repeat'
				style['background-size'] = '100% 100%'
				break;
			case image.TileVertically:
				style['background-repeat'] = 'repeat-y'
				style['background-size'] = '100% ' + natH + 'px'
				break;
			case image.TileHorizontally:
				style['background-repeat'] = 'repeat-x'
				style['background-size'] = natW + 'px 100%'
				break;
			case image.Tile:
				style['background-repeat'] = 'repeat-y repeat-x'
				style['background-size'] = 'auto'
				break;
			case image.PreserveAspectCrop:
				style['background-repeat'] = 'no-repeat'
				style['background-position'] = 'center'
				style['background-size'] = 'cover'
				break;
			case image.Pad:
				style['background-repeat'] = 'no-repeat'
				style['background-position'] = '0% 0%'
				style['background-size'] = 'auto'
				break;
			case image.PreserveAspectFit:
				style['background-repeat'] = 'no-repeat'
				style['background-position'] = 'center'
				style['background-size'] = 'contain'
				var w = image.width, h = image.height
				var targetRatio = 0, srcRatio = natW / natH

				if (w && h)
					targetRatio = w / h

				if (srcRatio > targetRatio && w) { // img width aligned with target width
					image.paintedWidth = w;
					image.paintedHeight = w / srcRatio;
				} else {
					image.paintedHeight = h;
					image.paintedWidth = h * srcRatio;
				}
				break;
		}
		image.style(style)

		image.status = image.Ready
		image._context._processActions()
	}
}

exports.loadImage = function(image) {
	image._image.src = image.source
}

exports.initText = function(text) {
}

var layoutTextSetStyle = function(text, style) {
	switch(text.verticalAlignment) {
		case text.AlignTop:		text._topPadding = 0; break
		case text.AlignBottom:	text._topPadding = text.height - text.paintedHeight; break
		case text.AlignVCenter:	text._topPadding = (text.height - text.paintedHeight) / 2; break
	}
	style['padding-top'] = text._topPadding
	style['height'] = text.height - text._topPadding
	text.style(style)
}

exports.setText = function(text, html) {
	text.element.setHtml(html, text)
}

exports.layoutText = function(text) {
	var ctx = text._context
	var textCanvasContext = ctx._textCanvasContext
	var wrap = text.wrapMode !== _globals.core.Text.NoWrap
	var element = text.element

	var dom = element.dom

	var isHtml = text.text.search(/[\<\&]/) >= 0 //dubious check
/*
	uncomment me
	if (!wrap && textCanvasContext !== null && !isHtml) {
		var font = text.font
		var fontSize
		if (font.pointSize)
			fontSize = Math.round(font.pointSize * 96 / 72)
		else
			fontSize = font.pixelSize
		//log('fontSize = ', fontSize)

		textCanvasContext.font = fontSize + 'px ' + font.family

		//log('font from canvas:', textCanvasContext.font, font.family, font.pixelSize, font.pointSize, fontSize)
		var metrics = textCanvasContext.measureText(text.text)
		text.paintedWidth = metrics.width
		text.paintedHeight = fontSize * font.lineHeight
		//log('layoutText', text.text, text.paintedWidth, text.paintedHeight)
		layoutTextSetStyle(text, {})
		return
	}
*/
	var removedChildren = element.removeChildren(text)

	if (!wrap)
		text.style({ width: 'auto', height: 'auto', 'padding-top': 0 }) //no need to reset it to width, it's already there
	else
		text.style({ 'height': 'auto', 'padding-top': 0})

	//this is the source of rounding error. For instance you have 186.3px wide text, this sets width to 186px and causes wrapping
	text.paintedWidth = element.fullWidth()
	text.paintedHeight = element.fullHeight()

	//this makes style to adjust width (by adding this value), and return back _widthAdjust less
	element._widthAdjust = 1

	var style
	if (!wrap)
		style = { width: text.width, height: text.height } //restore original width value (see 'if' above)
	else
		style = {'height': text.height }

	layoutTextSetStyle(text, style)
	element.appendChildren(removedChildren)
}

exports.run = function(ctx, onloadCallback) {
	ctx.window.on('load', function() {
		onloadCallback()
	})
}

exports.tick = function(ctx) {
	//log('tick')
	ctx._styleCache.apply()
}

///@private
var setTransition = function(component, name, animation) {
	var html5 = exports
	var transition = {
		property: html5.getPrefixedName('transition-property'),
		delay: html5.getPrefixedName('transition-delay'),
		duration: html5.getPrefixedName('transition-duration'),
		timing: html5.getPrefixedName('transition-timing-function')
	}
	component.element.forceLayout() //flush styles before setting transition

	name = html5.getPrefixedName(name) || name //replace transform: <prefix>rotate hack

	var property = component.style(transition.property) || []
	var duration = component.style(transition.duration) || []
	var timing = component.style(transition.timing) || []
	var delay = component.style(transition.delay) || []

	var idx = property.indexOf(name)
	if (idx === -1) { //if property not set
		if (animation) {
			property.push(name)
			duration.push(animation.duration + 'ms')
			timing.push(animation.easing)
			delay.push(animation.delay + 'ms')
		}
	} else { //property already set, adjust the params
		if (animation && animation.active()) {
			duration[idx] = animation.duration + 'ms'
			timing[idx] = animation.easing
			delay[idx] = animation.delay + 'ms'
		} else {
			property.splice(idx, 1)
			duration.splice(idx, 1)
			timing.splice(idx, 1)
			delay.splice(idx, 1)
		}
	}

	var style = {}
	style[transition.property] = property
	style[transition.duration] = duration
	style[transition.timing] = timing
	style[transition.delay] = delay

	//FIXME: smarttv 2003 animation is not working without this shit =(
	if (component._context.system.os === 'smartTV' || component._context.system.os === 'netcast') {
		style["transition-property"] = property
		style["transition-duration"] = duration
		style["transition-delay"] = delay
		style["transition-timing-function"] = timing
	}
	component.style(style)
	return true
}

var cssMappings = {
	width: 'width', height: 'height',
	x: 'left', y: 'top', viewX: 'left', viewY: 'top',
	opacity: 'opacity',
	border: 'border',
	radius: 'border-radius',
	rotate: 'transform',
	boxshadow: 'box-shadow',
	transform: 'transform',
	visible: 'visibility', visibleInView: 'visibility',
	background: 'background',
	color: 'color',
	backgroundImage: 'background-image',
	font: 'font'
}

///@private tries to set animation on name using css transitions, returns true on success
exports.setAnimation = function (component, name, animation) {
	if (!exports.capabilities.csstransitions || (animation && !animation.cssTransition))
		return false

	var css = cssMappings[name]
	return css !== undefined? setTransition(component, css, animation): false
}

var Modernizr = window.Modernizr

exports.capabilities = {
	csstransforms3d: Modernizr.csstransforms3d,
	csstransforms: Modernizr.csstransforms,
	csstransitions: Modernizr.csstransitions
}

exports.requestAnimationFrame = Modernizr.prefixed('requestAnimationFrame', window)	|| function(callback) { return setTimeout(callback, 0) }
exports.cancelAnimationFrame = Modernizr.prefixed('cancelAnimationFrame', window)	|| function(id) { return clearTimeout(id) }

exports.enterFullscreenMode = function(el) { return Modernizr.prefixed('requestFullscreen', el.dom)() }
exports.exitFullscreenMode = function() { return window.Modernizr.prefixed('exitFullscreen', document)() }
exports.inFullscreenMode = function () { return !!window.Modernizr.prefixed('fullscreenElement', document) }

return exports;
} )()
_globals.video.html5.backend = (function() {/** @const */
var exports = {};
exports._get = function(name) { return exports[name] }
//=====[import video.html5.backend]=====================

var Player = function(ui) {
	var player = ui._context.createElement('video')
	player.dom.preload = "metadata"

	var dom = player.dom
	player.on('play', function() { ui.waiting = false; ui.paused = dom.paused }.bind(ui))
	player.on('pause', function() { ui.paused = dom.paused }.bind(ui))
	player.on('ended', function() { ui.finished() }.bind(ui))
	player.on('seeked', function() { log("seeked"); ui.seeking = false; ui.waiting = false }.bind(ui))
	player.on('canplay', function() { log("canplay", dom.readyState); ui.ready = dom.readyState }.bind(ui))
	player.on('seeking', function() { log("seeking"); ui.seeking = true; ui.waiting = true }.bind(ui))
	player.on('waiting', function() { log("waiting"); ui.waiting = true }.bind(ui))
	player.on('stalled', function() { log("Was stalled", dom.networkState); }.bind(ui))
	player.on('emptied', function() { log("Was emptied", dom.networkState); }.bind(ui))
	player.on('volumechange', function() { ui.muted = dom.muted }.bind(ui))
	player.on('canplaythrough', function() { log("ready to play"); }.bind(ui))

	player.on('error', function() {
		log("Player error occured", dom.error, "src", ui.source)

		if (!dom.error || !ui.source)
			return

		ui.error(dom.error)

		log("player.error", dom.error)
		switch (dom.error.code) {
		case 1:
			log("MEDIA_ERR_ABORTED error occured")
			break;
		case 2:
			log("MEDIA_ERR_NETWORK error occured")
			break;
		case 3:
			log("MEDIA_ERR_DECODE error occured")
			break;
		case 4:
			log("MEDIA_ERR_SRC_NOT_SUPPORTED error occured")
			break;
		default:
			log("UNDEFINED error occured")
			break;
		}
	}.bind(ui))

	player.on('timeupdate', function() {
		ui.waiting = false
		if (!ui.seeking)
			ui.progress = dom.currentTime
	}.bind(ui))

	player.on('durationchange', function() {
		var d = dom.duration
		log("Duration", d)
		ui.duration = isFinite(d) ? d : 0
	}.bind(ui))

	player.on('progress', function() {
		var last = dom.buffered.length - 1
		ui.waiting = false
		if (last >= 0)
			ui.buffered = dom.buffered.end(last) - dom.buffered.start(last)
	}.bind(ui))

	this.element = player
	this.ui = ui

	ui.element.remove()
	ui.element = player
	ui.parent.element.append(ui.element)
}

Player.prototype.setSource = function(url) {
	this.ui.ready = false
	this.element.dom.src = url
}

Player.prototype.play = function() {
	this.element.dom.play()
}

Player.prototype.pause = function() {
	this.element.dom.pause()
}

Player.prototype.seek = function(delta) {
	this.element.dom.currentTime += delta
}

Player.prototype.seekTo = function(tp) {
	this.element.dom.currentTime = tp
}

Player.prototype.setVolume = function(volume) {
	this.element.dom.volume = volume
}

Player.prototype.setMute = function(muted) {
	this.element.dom.muted = muted
}

Player.prototype.setLoop = function(loop) {
	this.element.dom.loop = loop
}

Player.prototype.setRect = function(l, t, r, b) {
	//not needed in this port
}

Player.prototype.setVisibility = function(visible) {
	log('VISIBILITY LOGIC MISSING HERE, visible:', visible)
}

Player.prototype.setBackgroundColor = function(color) {
	var Color = _globals.core.Color
	this.element.dom.style.backgroundColor = new Color(color).rgba()
}


exports.createPlayer = function(ui) {
	return new Player(ui)
}

exports.probeUrl = function(url) {
	return 50
}

exports.Player = Player

return exports;
} )()
_globals.video.videojs.backend = (function() {/** @const */
var exports = {};
exports._get = function(name) { return exports[name] }
//=====[import video.videojs.backend]=====================

var Player = function(ui) {
	var player = ui._context.createElement('video')
	player.dom.preload = "metadata"

	if (ui.autoplay)
		player.setAttribute('autoplay')
	player.setAttribute('preload', 'auto')
	player.setAttribute('data-setup', '{}')
	player.setAttribute('class', 'video-js')

	var dom = player.dom
	player.on('play', function() { ui.waiting = false; ui.paused = dom.paused }.bind(ui))
	player.on('pause', function() { ui.paused = dom.paused }.bind(ui))
	player.on('ended', function() { ui.finished() }.bind(ui))
	player.on('seeked', function() { log("seeked"); ui.seeking = false; ui.waiting = false }.bind(ui))
	player.on('canplay', function() { log("canplay", dom.readyState); ui.ready = dom.readyState }.bind(ui))
	player.on('seeking', function() { log("seeking"); ui.seeking = true; ui.waiting = true }.bind(ui))
	player.on('waiting', function() { log("waiting"); ui.waiting = true }.bind(ui))
	player.on('stalled', function() { log("Was stalled", dom.networkState); }.bind(ui))
	player.on('emptied', function() { log("Was emptied", dom.networkState); dom.play() }.bind(ui))
	player.on('volumechange', function() { ui.muted = dom.muted }.bind(ui))
	player.on('canplaythrough', function() { log("ready to play"); dom.play() }.bind(ui))

	player.on('error', function() {
		log("Player error occured")
		ui.error(dom.error)

		if (!dom.error)
			return

		log("player.error", dom.error)
		switch (dom.error.code) {
		case 1:
			log("MEDIA_ERR_ABORTED error occured")
			break;
		case 2:
			log("MEDIA_ERR_NETWORK error occured")
			break;
		case 3:
			log("MEDIA_ERR_DECODE error occured")
			break;
		case 4:
			log("MEDIA_ERR_SRC_NOT_SUPPORTED error occured")
			break;
		default:
			log("UNDEFINED error occured")
			break;
		}
	}.bind(ui))


	player.on('timeupdate', function() {
		ui.waiting = false
		if (!ui.seeking)
			ui.progress = dom.currentTime
	}.bind(ui))

	player.on('durationchange', function() {
		var d = dom.duration
		ui.ready = false
		ui.duration = isFinite(d) ? d : 0
	}.bind(ui))

	player.on('progress', function() {
		var last = dom.buffered.length - 1
		ui.waiting = false
		if (last >= 0)
			ui.buffered = dom.buffered.end(last) - dom.buffered.start(last)
	}.bind(ui))

	this.element = player
	var uniqueId = 'videojs' + this.element._uniqueId
	player.setAttribute('id', uniqueId)

	ui.element.remove()
	ui.element = player
	ui.parent.element.append(ui.element)

	this.videojs = window.videojs(uniqueId)
	this.videojs.width = 'auto'
	this.videojs.height = 'auto'

	var errorDisplay = document.getElementsByClassName("vjs-error-display")
	if (errorDisplay && errorDisplay.length)
		errorDisplay[0].style.display = 'none'

	var videojsSpinner = document.getElementsByClassName("vjs-loading-spinner")
	if (videojsSpinner && videojsSpinner.length)
		videojsSpinner[0].style.display = 'none'

	this.videojsContaner = document.getElementById(uniqueId)
	this.videojsContaner.style.zindex = -1
}

Player.prototype = Object.create(_globals.video.html5.backend.Player.prototype)

Player.prototype.setSource = function(url) {
	var media = { 'src': url }
	if (url) {
		var urlLower = url.toLowerCase()
		var extIndex = urlLower.lastIndexOf(".");
		var extension = urlLower.substring(extIndex, urlLower.length - 1)
		if (extension == ".m3u8" || extension == ".m3u")
			media.type = 'application/x-mpegURL'
	}
	this.videojs.src(media, { html5: { hls: { withCredentials: true } }, fluid: true, preload: 'none', techOrder: ["html5"] })
}

Player.prototype.setRect = function(l, t, r, b) {
	this.videojsContaner.style.width = (r - l) + "px"
	this.videojsContaner.style.height = (b - t) + "px"
}

exports.createPlayer = function(ui) {
	return new Player(ui)
}

exports.probeUrl = function(url) {
	return window.videojs ? 60 : 0
}

return exports;
} )()
_globals.controls.pure.format = (function() {/** @const */
var exports = {};
exports._get = function(name) { return exports[name] }
//=====[import controls.pure.format]=====================

exports.currency = function(v, n, x) {
	var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
	return v.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
}

exports.format = function() {
	var args = [].slice.call(arguments);
	var initial = args.shift();

	function replacer (text, replacement) {
		return text.replace('%s', replacement);
	}
	return args.reduce(replacer, initial);
}
return exports;
} )()


return exports;
} )();
try {
	var l10n = {}

	var context = qml._context = new qml.core.Context(null, false, {id: 'qml-context-index', prefix: 'qml', l10n: l10n})
	var closure = {}

	context.__create(closure)
	context.__setup(closure)
	closure = undefined
	context.init()
	context.start(new qml.src.UiIndex(context))
	context.run()
} catch(ex) { log("qml initialization failed: ", ex, ex.stack) }
