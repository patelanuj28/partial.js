exports.init = function init(framework) {

	/*
		ADD TO TEST
	*/

	// @name {String} :: name of test
	// @url {String}
	// @callback {Function} :: function params @error {Error}, @data {String}, @name {String}, @statusCode {Number}, @headers {Object}
	// @method {String} :: optional default GET
	// @data {String} :: optional default empty string
	// @headers {Object} :: optional custom headers

	// framework.assert(name, url, callback, [method], [data], [headers])

	framework.assert('Test URL 1', '/1/', function response (error, data, name, code, headers) {
		assert.ok(code === 200 && data === '1', name);
		console.log('1');
	});
	
	/*
		RUN TEST

		@stop {Boolean} :: stop server?
		@callback {Function}
	*/
	framework.test(true);
};