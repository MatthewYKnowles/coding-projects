// Runtime 100 ms, Memory 40.8 MB
public class Solution1 {
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
        var firstNumberAsStack = new Queue<int>();
        var secondNumberAsStack = new Queue<int>();
        var currentNode = l1;
        while (currentNode != null) {
            firstNumberAsStack.Enqueue(currentNode.val);
            currentNode = currentNode.next;
        }
        currentNode = l2;
        while (currentNode != null) {
            secondNumberAsStack.Enqueue(currentNode.val);
            currentNode = currentNode.next;
        }
        
        var stackSizeDifference = firstNumberAsStack.Count() - secondNumberAsStack.Count();
        var largerStack = stackSizeDifference >= 0 ? firstNumberAsStack : secondNumberAsStack;
        var smallerStack = stackSizeDifference >= 0 ? secondNumberAsStack : firstNumberAsStack;
        
        var answerStack = new Stack<int>();
        var carryOver = 0;
        while (smallerStack.Count() > 0) {
            var firstNumber = largerStack.Dequeue();
            var secondNumber = smallerStack.Dequeue();
            var sumation = firstNumber + secondNumber + carryOver;
            answerStack.Push(sumation % 10);
            carryOver = sumation > 9 ? 1 : 0;
        }
        
        while (largerStack.Count() > 0) {
            var number = largerStack.Dequeue();
            var sumation = number + carryOver;
            answerStack.Push(sumation % 10);
            carryOver = sumation > 9 ? 1 : 0;
        }
        if (carryOver == 1) {
            answerStack.Push(1);
        }
        
        ListNode listNode = null;
        
        while (answerStack.Count() > 0) {
            listNode = new ListNode(answerStack.Pop(), listNode);
        }
        return listNode;
    }
}

// Runtime 108 ms, Memory 41.3 MB

public class Solution2 {
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
        var currentFirstListNode = l1;
        var currentSecondListNode = l2;
        
        ListNode dummyHead = new ListNode(0);
        ListNode summationListNode = dummyHead;
        var remainder = 0;
        
        
        while(currentFirstListNode != null || currentSecondListNode != null) {
            var firstListNumber = currentFirstListNode?.val ?? 0;
            var secondListNumber = currentSecondListNode?.val ?? 0;
            var summation = firstListNumber + secondListNumber + remainder;
            summationListNode.next = new ListNode(summation % 10, null);
            summationListNode = summationListNode.next;
            remainder = summation > 9 ? 1 : 0;
            currentFirstListNode = currentFirstListNode?.next;
            currentSecondListNode = currentSecondListNode?.next;
        }
        if (remainder == 1) {
            summationListNode.next = new ListNode(remainder, null);
            summationListNode = summationListNode.next;
        }
        
        return dummyHead.next;
    }
}