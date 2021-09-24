import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.NoSuchElementException;

import static org.junit.jupiter.api.Assertions.*;

public class ArrayListTests {

    private ArrayList<Integer> arrayList;

    @BeforeEach
    void setUp() {
        arrayList = new ArrayList<>(){};
    }

    @Test
    void addToFront() {
        arrayList.addToFront(1);
        Integer[] expected = {1, null, null, null, null, null, null, null, null};
        assertArrayEquals(expected, arrayList.getBackingArray());
    }

    @Test
    void addToFrontTwoNumbers() {
        arrayList.addToFront(1);
        arrayList.addToFront(3);
        Integer[] expected = {3, 1, null, null, null, null, null, null, null};
        assertArrayEquals(expected, arrayList.getBackingArray());
    }
    @Test
    void addToFrontThreeNumbers() {
        arrayList.addToFront(1);
        arrayList.addToFront(3);
        arrayList.addToFront(-1);
        Integer[] expected = {-1, 3, 1, null, null, null, null, null, null};
        assertArrayEquals(expected, arrayList.getBackingArray());
        assertEquals(3, arrayList.size());
    }
    @Test
    void addToFrontUntilFull() {
        for (int i = 0; i < 9; i++) {
            arrayList.addToFront(i+4);
        }
        Integer[] expected = {12, 11, 10, 9, 8, 7, 6, 5, 4};
        assertArrayEquals(expected, arrayList.getBackingArray());
    }
    @Test
    void addToFrontOfFullArray() {
        for (int i = 0; i < 10; i++) {
            arrayList.addToFront(i+4);
        }
        Integer[] expected = {13, 12, 11, 10, 9, 8, 7, 6, 5, 4, null, null, null, null, null, null, null, null};
        assertArrayEquals(expected, arrayList.getBackingArray());
    }
    @Test()
    void addNullToFront() {
        assertThrows(IllegalArgumentException.class, () -> arrayList.addToFront(null));
    }
    @Test
    void addToBack() {
        arrayList.addToBack(2);
        Integer[] expected = {2, null, null, null, null, null, null, null, null};
        assertArrayEquals(expected, arrayList.getBackingArray());
    }
    @Test
    void addToBackTwoNumbers() {
        arrayList.addToBack(2);
        arrayList.addToBack(6);
        Integer[] expected = {2, 6, null, null, null, null, null, null, null};
        assertArrayEquals(expected, arrayList.getBackingArray());
    }
    @Test
    void addToBackUntilFull() {
        for (int i = 0; i < 9; i++) {
            arrayList.addToBack(i+4);
        }
        Integer[] expected = {4, 5, 6, 7, 8, 9, 10, 11, 12};
        assertArrayEquals(expected, arrayList.getBackingArray());
    }
    @Test
    void addToBackFullArray() {
        for (int i = 0; i < 10; i++) {
            arrayList.addToBack(i+4);
        }
        Integer[] expected = {4, 5, 6, 7, 8, 9, 10, 11, 12, 13, null, null, null, null, null, null, null, null};
        assertArrayEquals(expected, arrayList.getBackingArray());
    }
    @Test()
    void addNullToBack() {
        assertThrows(IllegalArgumentException.class, () -> arrayList.addToBack(null));
    }
    @Test
    void removeFromFront() {
        arrayList.addToFront(2);
        assertEquals(2, arrayList.removeFromFront());
        assertEquals(0, arrayList.size());
        Integer[] expected = {null, null, null, null, null, null, null, null, null};
        assertArrayEquals(expected, arrayList.getBackingArray());
    }
    @Test
    void removeFromFrontTwice() {
        arrayList.addToFront(2);
        arrayList.addToFront(5);
        Integer first = arrayList.removeFromFront();
        Integer second = arrayList.removeFromFront();
        assertEquals(5, first);
        assertEquals(2, second);
        assertEquals(0, arrayList.size());
    }

    @Test
    void removeFromFrontOfEmptyArray() {
        assertThrows(NoSuchElementException.class, () -> arrayList.removeFromFront());
    }
    @Test
    void removeFromFrontOfFullArray() {
        for (int i = 0; i < 9; i++) {
            arrayList.addToFront(i+4);
        }
        assertEquals(12, arrayList.removeFromFront());
    }
    @Test
    void removeFromBack() {
        arrayList.addToFront(2);
        arrayList.addToFront(1);
        Integer first = arrayList.removeFromBack();
        Integer second = arrayList.removeFromBack();
        assertEquals(2, first);
        assertEquals(1, second);
        assertEquals(0, arrayList.size());
        Integer[] expected = {null, null, null, null, null, null, null, null, null};
        assertArrayEquals(expected, arrayList.getBackingArray());
    }
    @Test
    void removeFromBackOfEmptyArray() {
        assertThrows(NoSuchElementException.class, () -> arrayList.removeFromBack());
    }

    @Test
    void addAtIndexZero() {
        arrayList.addAtIndex(0, 5);
        Integer[] expected = {5, null, null, null, null, null, null, null, null};
        assertArrayEquals(expected, arrayList.getBackingArray());
        assertEquals(1, arrayList.size());
    }
    @Test
    void addAtIndexZeroWithItemsInList() {
        arrayList.addAtIndex(0, 5);
        arrayList.addAtIndex(0, 9);
        Integer[] expected = {9, 5, null, null, null, null, null, null, null};
        assertArrayEquals(expected, arrayList.getBackingArray());
        assertEquals(2, arrayList.size());
    }

    @Test
    void addAtIndexOneWithItemsInList() {
        arrayList.addAtIndex(0, 5);
        arrayList.addAtIndex(0, 9);
        arrayList.addAtIndex(1, 11);
        Integer[] expected = {9, 11, 5, null, null, null, null, null, null};
        assertArrayEquals(expected, arrayList.getBackingArray());
        assertEquals(3, arrayList.size());
    }

    @Test
    void addAtIndexFiveAtCapacity() {
        arrayList.addAtIndex(0, 5);
        arrayList.addAtIndex(0, 9);
        arrayList.addAtIndex(1, 11);
        arrayList.addAtIndex(3, 14);
        arrayList.addAtIndex(3, 89);
        arrayList.addAtIndex(3, 42);
        Integer[] expected = {9, 11, 5, 42, 89, 14, null, null, null};
        assertArrayEquals(expected, arrayList.getBackingArray());
        assertEquals(6, arrayList.size());
    }
}