// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var resultsArr = []; // resultant array
  
  var traverse = function(element) {
	  
	  // does elem contain classList and className?
	  if(element.classList && element.classList.contains(className)) {
		resultsArr.push(element);
	  }

		element.childNodes.forEach((x) => traverse(x));
  }
  
  traverse(document.body);
  return resultsArr;
};
