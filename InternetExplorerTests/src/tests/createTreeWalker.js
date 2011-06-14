var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
var nodeList = [];
while(treeWalker.nextNode()) nodeList.push(treeWalker.currentNode);
