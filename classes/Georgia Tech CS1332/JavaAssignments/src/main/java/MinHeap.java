import java.util.NoSuchElementException;

public class MinHeap<T extends Comparable<? super T>> {
    public static final int INITIAL_CAPACITY = 13;
    private T[] backingArray;
    private int size;

    public MinHeap() {
        backingArray = (T[]) new Comparable[INITIAL_CAPACITY];
    }

    public void add(T data) {
        checkDataValidity(data);
        doubleCapacityIfNecessary();
        backingArray[size + 1] = data;
        size++;
        if (size == 1) {
            return;
        }
        int parentPosition = size / 2;
        int currentPosition = size;
        while (backingArray[currentPosition].compareTo(backingArray[parentPosition]) < 0) {
            var temp = backingArray[parentPosition];
            backingArray[parentPosition] = backingArray[currentPosition];
            backingArray[currentPosition] = temp;
            if (parentPosition > 1) {
                currentPosition = currentPosition / 2;
                parentPosition = parentPosition / 2;
            }
        }
    }

    public T remove() {
        validateCanRemove();
        T returnValue = backingArray[1];
        backingArray[1] = backingArray[size];
        backingArray[size] = null;
        size--;
        int parentPosition = 1;
        int leftChildPosition = parentPosition * 2;

        while (backingArray.length >= leftChildPosition && backingArray[leftChildPosition] != null && backingArray[leftChildPosition + 1] != null) {
            var smallerChild = backingArray[leftChildPosition].compareTo(backingArray[leftChildPosition+1]);
            if (smallerChild < 0) {
                if (backingArray[leftChildPosition].compareTo(backingArray[parentPosition]) > 0) {
                    break;
                }
                var temp = backingArray[parentPosition];
                backingArray[parentPosition] = backingArray[leftChildPosition];
                backingArray[leftChildPosition] = temp;
                parentPosition = parentPosition * 2;
                leftChildPosition = leftChildPosition * 2;
            }
            if (smallerChild > 0) {
                if (backingArray[leftChildPosition + 1].compareTo(backingArray[parentPosition]) > 0) {
                    break;
                }
                var temp = backingArray[parentPosition];
                backingArray[parentPosition] = backingArray[leftChildPosition + 1];
                backingArray[leftChildPosition + 1] = temp;
                parentPosition = leftChildPosition + 1;
                leftChildPosition = parentPosition * 2;
            }
        }
        if (backingArray.length >= leftChildPosition && backingArray[leftChildPosition] != null && backingArray[parentPosition].compareTo(backingArray[leftChildPosition]) > 0) {
            var temp = backingArray[parentPosition];
            backingArray[parentPosition] = backingArray[leftChildPosition];
            backingArray[leftChildPosition] = temp;
        }
        return returnValue;
    }

    private void validateCanRemove() {
        if (size == 0) {
            throw new NoSuchElementException();
        }
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

    private void doubleCapacityIfNecessary() {
        if (size == backingArray.length - 1) {
            int newCapacity = backingArray.length * 2;
            T[] newArray = (T[]) new Comparable[newCapacity];
            for (int i = 0; i < size + 1; i++) {
                newArray[i] = backingArray[i];
            }
            backingArray = newArray;
        }
    }
}
//
//[Executed at: Mon Oct 11 3:50:36 PDT 2021]
//
//        ============================================================
//        MinHeap.java successfully compiled.
//        ============================================================
//        Tests Passed: 21 / 29
//
//        [Test Failure: remove] [-0.34] : Unexpected content after removing 0 (the minimum element) from the MinHeap.
//        Before : [null, 0, 7, 14, 42, 28, 35, 21, null, null, null, null, null]
//        Expected : [null, 7, 21, 14, 42, 28, 35, null, null, null, null, null, null]
//        Actual : [null, 7, 28, 14, 42, 21, 35, null, null, null, null, null, null]
//
//        [Test Failure: remove] [-0.34] : This remove test was inconclusive due to: java.lang.ArrayIndexOutOfBoundsException: Index 14 out of bounds for length 13
//        Here is the stack trace to help identify the error in your code:
//        at MinHeap.remove, line number: 41
//
//        [Test Failure: remove] [-0.34] : This remove test was inconclusive due to: java.lang.ArrayIndexOutOfBoundsException: Index 14 out of bounds for length 13
//        Here is the stack trace to help identify the error in your code:
//        at MinHeap.remove, line number: 41
//
//        [Test Failure: remove] [-0.34] : This remove test was inconclusive due to: java.lang.ArrayIndexOutOfBoundsException: Index 18 out of bounds for length 13
//        Here is the stack trace to help identify the error in your code:
//        at MinHeap.remove, line number: 41
//
//        [Test Failure: remove] [-0.34] : Unexpected content after removing 0 (the minimum element) from the MinHeap.
//        Before : [null, 0, 7, 14, 35, 28, 42, 21, null, null, null, null, null]
//        Expected : [null, 7, 21, 14, 35, 28, 42, null, null, null, null, null, null]
//        Actual : [null, 7, 28, 14, 35, 21, 42, null, null, null, null, null, null]
//
//        [Test Failure: validSize] [-0.34] : Size variable could not be validated for the following method(s) due to early test failure(s): remove.
//
//        [Test Failure: validData] [-0.34] : Returned data could not be validated for the following method(s) due to early test failure(s): remove.
//
//        [Test Failure: compareTo] [-0.34] : Correct compareTo() usage could not be validated for the following method(s) due to early test failure(s): remove.
//
//
//        Score: 7.24 / 10.0
//        ============================================================