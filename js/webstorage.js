/**
 * webStorage - a wrapper for localStorage api
 *
 *
 * The MIT License
 * Copyright (c) 2016 Jasy Dong
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */


/**
 * webStorage - a wrapper for localStorage api
 */
var webStorage = (function () {

	'use strict';

	var webStorage = { };

	/**
	 * Add or update the specified key/value pair in the localStorage
	 */
	webStorage.set = function (key, value) {
		if (localStorage) {
			try { 
				localStorage.setItem(key, JSON.stringify(value)); 
			} catch (e) {
				return false;
			}
			return true;
		}

		return false;
	};

    /**
	 * Get the specified key from the localStorage
	 */
	webStorage.get = function (key) {
		if (localStorage) {
			try {
				var value = localStorage.getItem(key);
				return value && JSON.parse(value);
			} catch (e) {
				return null;
			}
		}

		return null;
	};

    /**
	 * Remove the given key in the localStorage
	 */
    webStorage.remove = function (key) {
		if (localStorage) {
			return localStorage.removeItem(key);
		}

		return false;
	}

    /**
	 * Remove all keys in the localStorage
	 */
    webStorage.clear = function () {
		if (localStorage) {
			return localStorage.clear();
		}

		return false;
	}

	/**
	 * Check if the given key exists in the localStorage
	 */
	webStorage.has = function (key) {
		return null !== webStorage.get(key);
	};

	/**
	 * Return the key of the given index in the localStorage
	 */
	webStorage.key = function (index) {
		if (localStorage) {
			return localStorage.key(index);
		}

		return null;
	};

    /**
	 * Return the number of items stored in the localStorage
	 */
	webStorage.length = function () {
		if (localStorage) {
			return localStorage.length;
		}

		return 0;
	}

	return webStorage;
})();
