// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, parent) {
  // your code here
  var memo = [];

  //recursive finder function that uses memoization
  var innerFinder = function (node) {
    node = node || document.body;

    //base case
    if (node.classList && node.classList.contains(className)) {
      memo.push(node);
    }

    //find descendants with className
    for (var i = 0; i < node.children.length; i++) {
      innerFinder (node.children[i]);
    }
  };

  //invocation of recursive finder
  innerFinder(parent);

  return memo;

};
