public class Solution {
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