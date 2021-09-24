/**
 * Your implementation of an ArrayList.
 */
public class ArrayList<T> {

    public static final int INITIAL_CAPACITY = 9;

    private T[] backingArray;
    private int size;

    public ArrayList() {
        backingArray = (T[]) new Object[INITIAL_CAPACITY];
    }

    /**
     * Adds the data to the specified index.
     *
     * Must be O(1) for index size and O(n) for all other cases.
     *
     * ASSUMPTIONS:
     * - You may assume that the backingArray will not need to be resized.
     * - You may assume that the index is valid [0, size].
     * - You may assume that the data will never be null.
     *
     * @param index the index at which to add the new data
     * @param data  the data to add at the specified index
     */
    public void addAtIndex(int index, T data) {
        var itemsToMove = size - index;
        for (var i = 1; i <= itemsToMove; i++) {
            backingArray[size] = backingArray[size-i];
        }
        backingArray[index] = data;
    }

    public T[] getBackingArray() {
        // DO NOT MODIFY THIS METHOD!
        return backingArray;
    }

    /**
     * Returns the size of the list.
     *
     * For grading purposes only. You shouldn't need to use this method since
     * you have direct access to the variable.
     *
     * @return the size of the list
     */
    public int size() {
        // DO NOT MODIFY THIS METHOD!
        return size;
    }
}