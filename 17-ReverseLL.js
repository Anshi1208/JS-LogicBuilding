function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
  }
  function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev; 
  }
  function printList(head) {
    let result = [];
    while (head !== null) {
      result.push(head.val);
      head = head.next;
    }
    console.log(result.join(" -> "));
  }
  let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
  console.log("Original Linked List:");
  printList(head);
  let reversedHead = reverseLinkedList(head);
  console.log("Reversed Linked List:");
  printList(reversedHead);
  