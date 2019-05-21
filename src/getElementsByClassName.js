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

// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

  var results = [];

  var searchDom = function(element){

    //check to see if current element has a classList, and if so, see if it contains the className
    if(element.classList && element.classList.contains(className)){
        results.push(element);
      }

    //check the rest of it's children and then through the rest of the DOM
    for(var i = 0; i < element.childNodes.length; i++){
      searchDom(element.childNodes[i]);
    }
  }

   searchDom(document.body);
   return results;
};
*/