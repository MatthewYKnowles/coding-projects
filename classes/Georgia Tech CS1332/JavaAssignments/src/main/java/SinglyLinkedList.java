import java.util.NoSuchElementException;

public class SinglyLinkedList<T> {
    private SinglyLinkedListNode<T> head;
    private SinglyLinkedListNode<T> tail;
    private int size;

    public void addToFront(T data) {
        checkDataValidity(data);
        if (size == 0) {
            SinglyLinkedListNode<T> node = new SinglyLinkedListNode<>(data, null);
            head = tail = node;
        } else {
            addToFrontOfPopulatedList(data);
        }
        size++;
    }

    public void addAtIndex(int index, T data) {
        if (size == 0) {
            SinglyLinkedListNode<T> node = new SinglyLinkedListNode<>(data, null);
            head = tail = node;
        }
        else if (index == 0) {
            var newNode = new SinglyLinkedListNode<T>(data);
            newNode.setNext(head);
            head = newNode;
        } else {
            SinglyLinkedListNode<T> previousNode = head;
            for (var i = 0; i < index-1; i++) {
                previousNode = previousNode.getNext();
            }
            var newNode = new SinglyLinkedListNode<T>(data);
            newNode.setNext(previousNode.getNext());
            previousNode.setNext(newNode);
            if (newNode.getNext() == null) {
                tail = newNode;
            }
        }
        size++;
    }

    public void addToBack(T data) {
        checkDataValidity(data);
        if (size == 0) {
            SinglyLinkedListNode<T> node = new SinglyLinkedListNode<>(data, null);
            head = tail = node;
        } else {
            var newNode = new SinglyLinkedListNode<>(data, null);
            tail.setNext(newNode);
            tail = newNode;
        }
        size++;
    }

    public T removeFromFront() {
        validatePopulatedList();
        var frontNode = head;
        if (head.getNext() == null) {
            return removeFromListWithOneNode();
        }
        head = frontNode.getNext();
        size--;
        return frontNode.getData();
    }

    public T removeFromBack() {
        validatePopulatedList();
        if (head.getNext() == null) {
            return removeFromListWithOneNode();
        }
        var oldBackNode = tail;
        var newBackNode = determineNewBackNode();
        newBackNode.setNext(null);
        tail = newBackNode;
        size--;
        return oldBackNode.getData();
    }

    private SinglyLinkedListNode<T> determineNewBackNode() {
        var currentNode = head;
        while (currentNode.getNext().getNext() != null) {
            currentNode = currentNode.getNext();
        }
        return currentNode;
    }

    public SinglyLinkedListNode<T> getHead() {
        // DO NOT MODIFY THIS METHOD!
        return head;
    }

    public SinglyLinkedListNode<T> getTail() {
        // DO NOT MODIFY THIS METHOD!
        return tail;
    }

    public int size() {
        // DO NOT MODIFY THIS METHOD!
        return size;
    }

    private void checkDataValidity(T data) {
        if (data == null) {
            throw new IllegalArgumentException();
        }
    }

    private void addToFrontOfPopulatedList(T data) {
        head = new SinglyLinkedListNode<>(data, head);
    }

    private void validatePopulatedList() {
        if (head == null) {
            throw new NoSuchElementException();
        }
    }

    private T removeFromListWithOneNode() {
        var node = tail;
        head = null;
        tail = null;
        size--;
        return node.getData();
    }
}


//[Executed at:Wed Sep 1 7:48:20PDT 2021]
//
//        ============================================================
//        SinglyLinkedList.java successfully compiled.
//        ============================================================
//        Tests Passed:15/17
//
//        [Test Failure:addToFront][-0.59]:Tail is not pointing to the correct node.
//        Expected:node containing 0a
//        Actual:node containing 0a
//        List structure(for reference):0a
//
//        [Test Failure:addToBack][-0.59]:Tail is not pointing to the correct node.
//        Expected:node containing 0a
//        Actual:node containing 0a
//        List structure(for reference):0a
//
//
//        Score:8.82/10.0
//        ============================================================