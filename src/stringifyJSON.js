// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // base cases
  if (obj === null)
	  return "null";
  else if (obj === undefined)
	return "undefined";
  else if(typeof(obj) === 'boolean')
  {
    return obj === true ? 'true' : 'false';
  }
  else if (typeof(obj) === 'string')
	  return '"' + obj + '"';
  // end of base cases
  // recursitory functions
  else if (Array.isArray(obj))
  {
      var str = '';
      // iterate through array object's objects
    for (var i = 0; i < obj.length; i++)
      {
          str += stringifyJSON(obj[i]) + ',';
      }

      return `[${str.slice(0, str.length-1)}]`;
  }
  else if (typeof(obj) === 'object')
  {
    var str = '';
    // if it is an object, iterate through each of object's properties recursively
    for (var key in obj) 
    {
      if (obj[key] !== undefined && typeof(obj[key]) !== "function") 
      {
        str += stringifyJSON(key) + ':'+ stringifyJSON(obj[key]) + ',';
      }
    }

    return `{${str.slice(0, str.length-1)}}`;
  }
  else 
  {
	  return obj.toString();
  }
};
