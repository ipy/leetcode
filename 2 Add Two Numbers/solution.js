function printList (l) {
  if(!l) return;
  console.log(l.val);
  printList(l.next);
}

function NodeList() {
  if(!arguments.length) return null;
  var result = new ListNode(arguments[0]);
  var idx = result;
  for(var i = 1; i < arguments.length; i++){
    idx.next = new ListNode(arguments[i]);
    idx = idx.next; 
  }
  return result;
}

function ListNode (val) {
  this.val = val;
  this.next = null;
}

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
/**
 * @param {ListNode} l
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var result, node, prev;
  var v1, v2, sum, val, carry = 0;
  while(l1 || l2 || carry) {
    v1 = l1 ? l1.val : 0;
    v2 = l2 ? l2.val : 0;
    sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);
    val = sum % 10;
    node = new ListNode(val);
    if(prev) {
      prev.next = node;
    } else {
      result = node;
    }
    prev = node;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  return result;
};

printList(addTwoNumbers(new NodeList(5), new NodeList(5)));