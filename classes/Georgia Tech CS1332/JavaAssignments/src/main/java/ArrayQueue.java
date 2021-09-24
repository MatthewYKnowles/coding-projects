import java.util.NoSuchElementException;

public class ArrayQueue<T> {
    public static final int INITIAL_CAPACITY = 9;
    private T[] backingArray;
    private int front;
    private int size;

    public ArrayQueue() {
        backingArray = (T[]) new Object[INITIAL_CAPACITY];
    }

    public void enqueue(T data) {
        checkDataValidity(data);
        if (size == backingArray.length) {
            var newArray = (T[]) new Object[backingArray.length * 2];
            for (int i = 0; i < size; i++) {
                newArray[i] = backingArray[(front+size+i) % backingArray.length];
            }
            backingArray = newArray;
            front = 0;
        }
        backingArray[(front+size) % backingArray.length] = data;
        size++;
    }

    public T dequeue() {
        validateArray();
        T value = backingArray[front];
        backingArray[front] = null;
        front = (front + 1) % backingArray.length;
        size--;
        return value;
    }

    public T[] getBackingArray() {
        return backingArray;
    }

    public int size() {
        return size;
    }

    private void checkDataValidity(T data) {
        if (data == null) {
            throw new IllegalArgumentException();
        }
    }

    private void validateArray() {
        if (size == 0) {
            throw new NoSuchElementException();
        }
    }

}

//
//[Executed at: Mon Sep 6 19:17:51 PDT 2021]
//
//        ============================================================
//        ArrayQueue.java successfully compiled.
//        ============================================================
//        Tests Passed: 20 / 21
//
//        [Test Failure: validFront] [-0.48] : Front variable did not update correctly when testing the following method(s): dequeue.
//
//
//        Score: 9.52 / 10.0
//        ============================================================