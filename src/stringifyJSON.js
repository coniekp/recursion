// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  //wrap strings
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  //wrap arrays
  if (Array.isArray(obj)) {
    return '[' + obj.map (stringifyJSON) + ']';
  }

  //wrap Objects
  if (typeof obj === 'object' && obj) {
    var properties = [];
    for (var key in obj) {
      var hasValue = obj[key] !== undefined;
      var isNotFunction = typeof obj[key] !== 'function';

      if (hasValue && isNotFunction) {
        properties.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + properties.join() + '}';
  }

  //wrap all other primitive valuess
  return '' + obj;
};
