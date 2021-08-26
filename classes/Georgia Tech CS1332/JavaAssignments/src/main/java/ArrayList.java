import java.util.NoSuchElementException;

public class ArrayList<T> {
    public static final int INITIAL_CAPACITY = 9;
    private T[] backingArray;
    private int size;

    public ArrayList() {
        backingArray = (T[]) new Object[INITIAL_CAPACITY];
    }

    public void addToFront(T data) {
        checkDataValidity(data);
        doubleCapacityIfNecessary();
        for (int i = size; i > 0; i--) {
            backingArray[i] = backingArray[i - 1];
        }
        backingArray[0] = data;
        size++;
    }

    public void addToBack(T data) {
        checkDataValidity(data);
        doubleCapacityIfNecessary();
        backingArray[size] = data;
        size++;
    }

    public T removeFromFront() {
        validateArray();
        T front = backingArray[0];
        for (int i = 0; i < size-1; i++) {
            backingArray[i] = backingArray[i + 1];
        }
        backingArray[size - 1] = null;
        size--;
        return front;
    }

    public T removeFromBack() {
        validateArray();
        T back = backingArray[size - 1];
        backingArray[size - 1] = null;
        size--;
        return back;
    }

    public T[] getBackingArray() {
        return backingArray;
    }

    public int size() {
        return size;
    }

    private void validateArray() {
        if (size == 0) {
            throw new NoSuchElementException();
        }
    }

    private void checkDataValidity(T data) {
        if (data == null) {
            throw new IllegalArgumentException();
        }
    }

    private void doubleCapacityIfNecessary() {
        if (size == backingArray.length) {
            int newCapacity = backingArray.length * 2;
            T[] newArray = (T[]) new Object[newCapacity];
            for (int i = 0; i < size; i++) {
                newArray[i] = backingArray[i];
            }
            backingArray = newArray;
        }
    }
}