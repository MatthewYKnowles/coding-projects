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
        while (backingArray[leftChildPosition] != null && backingArray[leftChildPosition + 1] != null) {
            var smallerChild = backingArray[leftChildPosition].compareTo(backingArray[leftChildPosition+1]);
            if (smallerChild < 0) {
                var temp = backingArray[parentPosition];
                backingArray[parentPosition] = backingArray[leftChildPosition];
                backingArray[leftChildPosition] = temp;
                parentPosition = parentPosition * 2;
                leftChildPosition = leftChildPosition * 2;
            }
            if (smallerChild > 0) {
                var temp = backingArray[parentPosition];
                backingArray[parentPosition] = backingArray[leftChildPosition + 1];
                backingArray[leftChildPosition + 1] = temp;
                parentPosition = leftChildPosition + 1;
                leftChildPosition = parentPosition * 2;
            }
        }
        if (backingArray[leftChildPosition] != null && backingArray[parentPosition].compareTo(backingArray[leftChildPosition]) > 0) {
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