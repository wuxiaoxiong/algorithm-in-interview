function printListFromTailToHead(head) {
  if (head.next) {
    printListFromTailToHead(head.next);
  }

  console.log(head.val);
}
