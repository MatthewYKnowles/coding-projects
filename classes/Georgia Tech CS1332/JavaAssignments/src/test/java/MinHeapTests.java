import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.NoSuchElementException;

import static org.junit.jupiter.api.Assertions.*;

public class MinHeapTests {
    private MinHeap<Integer> minheap;
    private Comparable[] emptyBackingArray;

    @BeforeEach
    void setUp() {
        minheap = new MinHeap<>();
        emptyBackingArray = new Comparable[]{null, null, null, null, null, null, null, null, null, null, null, null, null};
    }

    @Test
    void shouldAddOneValueAndSkipIndexZero() {
        minheap.add(1);

        var expected = emptyBackingArray;
        expected[1] = 1;
        assertArrayEquals(expected, minheap.getBackingArray());
        assertEquals(1, minheap.size());
    }
    @Test
    void shouldAddTwoValuesInIncreasingOrder() {
        minheap.add(1);
        minheap.add(2);

        var expected = emptyBackingArray;
        expected[1] = 1;
        expected[2] = 2;
        assertArrayEquals(expected, minheap.getBackingArray());
        assertEquals(2, minheap.size());
    }
    @Test
    void shouldAddTwoValuesInDecreasingOrder() {
        minheap.add(2);
        minheap.add(1);

        var expected = emptyBackingArray;
        expected[1] = 1;
        expected[2] = 2;
        assertArrayEquals(expected, minheap.getBackingArray());
        assertEquals(2, minheap.size());
    }
    @Test
    void shouldAddThreeValuesInDecreasingOrder() {
        minheap.add(3);
        minheap.add(2);
        minheap.add(1);

        var expected = emptyBackingArray;
        expected[1] = 1;
        expected[2] = 3;
        expected[3] = 2;
        assertArrayEquals(expected, minheap.getBackingArray());
        assertEquals(3, minheap.size());
    }
    @Test
    void shouldAddFourValuesInDecreasingOrder() {
        minheap.add(4);
        minheap.add(3);
        minheap.add(2);
        minheap.add(1);

        var expected = emptyBackingArray;
        expected[1] = 1;
        expected[2] = 2;
        expected[3] = 3;
        expected[4] = 4;
        assertArrayEquals(expected, minheap.getBackingArray());
        assertEquals(4, minheap.size());
    }
    @Test
    void shouldAddFiveValuesInDecreasingOrder() {
        minheap.add(5);
        minheap.add(4);
        minheap.add(3);
        minheap.add(2);
        minheap.add(1);

        var expected = emptyBackingArray;
        expected[1] = 1;
        expected[2] = 2;
        expected[3] = 4;
        expected[4] = 5;
        expected[5] = 3;
        assertArrayEquals(expected, minheap.getBackingArray());
        assertEquals(5, minheap.size());
    }
    @Test
    void shouldAddPastCapacity() {
        minheap.add(13);
        minheap.add(12);
        minheap.add(11);
        minheap.add(10);
        minheap.add(9);
        minheap.add(8);
        minheap.add(7);
        minheap.add(6);
        minheap.add(5);
        minheap.add(4);
        minheap.add(3);
        minheap.add(2);
        minheap.add(1);

        var expected = new Comparable[]{null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null};
        expected[1] = 1;
        expected[2] = 4;
        expected[3] = 2;
        expected[4] = 7;
        expected[5] = 5;
        expected[6] = 3;
        expected[7] = 9;
        expected[8] = 13;
        expected[9] = 10;
        expected[10] = 11;
        expected[11] = 6;
        expected[12] = 12;
        expected[13] = 8;
        assertArrayEquals(expected, minheap.getBackingArray());
        assertEquals(13, minheap.size());
    }
    @Test()
    void ShouldThrowWhenAddingNull() {
        assertThrows(IllegalArgumentException.class, () -> minheap.add(null));
    }
    @Test
    void shouldRemoveOnlyElement() {
        minheap.add(1);

        var result = minheap.remove();

        assertEquals(1, result);
        assertArrayEquals(emptyBackingArray, minheap.getBackingArray());
        assertEquals(0, minheap.size());
    }
    @Test
    void shouldRemoveOneOfTwoElements() {
        minheap.add(3);
        minheap.add(2);

        var result = minheap.remove();

        assertEquals(2, result);
        var expected = emptyBackingArray;
        expected[1] = 3;
        assertArrayEquals(expected, minheap.getBackingArray());
        assertEquals(1, minheap.size());
    }
    @Test
    void shouldRemoveAndForceResort() {
        minheap.add(1);
        minheap.add(2);
        minheap.add(3);

        var result = minheap.remove();

        assertEquals(1, result);
        var expected = emptyBackingArray;
        expected[1] = 2;
        expected[2] = 3;
        assertArrayEquals(expected, minheap.getBackingArray());
        assertEquals(2, minheap.size());
    }
    @Test
    void shouldSwapMultipleTimes() {
        minheap.add(2);
        minheap.add(3);
        minheap.add(5);
        minheap.add(7);
        minheap.add(10);

        var result = minheap.remove();

        assertEquals(2, result);
        var expected = emptyBackingArray;
        expected[1] = 3;
        expected[2] = 7;
        expected[3] = 5;
        expected[4] = 10;
        assertArrayEquals(expected, minheap.getBackingArray());
        assertEquals(4, minheap.size());
    }
    @Test
    void shouldSwapToRightChild() {
        minheap.add(2);
        minheap.add(5);
        minheap.add(3);
        minheap.add(7);
        minheap.add(10);

        var result = minheap.remove();

        assertEquals(2, result);
        var expected = emptyBackingArray;
        expected[1] = 3;
        expected[2] = 5;
        expected[3] = 10;
        expected[4] = 7;
        assertArrayEquals(expected, minheap.getBackingArray());
        assertEquals(4, minheap.size());
    }
    @Test
    void shouldSwapToRightAndThenLeft() {
        minheap.add(2);
        minheap.add(5);
        minheap.add(3);
        minheap.add(7);
        minheap.add(8);
        minheap.add(6);
        minheap.add(10);

        var result = minheap.remove();

        assertEquals(2, result);
        var expected = emptyBackingArray;
        expected[1] = 3;
        expected[2] = 5;
        expected[3] = 6;
        expected[4] = 7;
        expected[5] = 8;
        expected[6] = 10;
        assertArrayEquals(expected, minheap.getBackingArray());
        assertEquals(6, minheap.size());
    }
    @Test
    void shouldStopIfNoChildrenAreSmaller() {
        minheap.add(0);
        minheap.add(7);
        minheap.add(14);
        minheap.add(42);
        minheap.add(28);
        minheap.add(35);
        minheap.add(21);

        var result = minheap.remove();

        assertEquals(0, result);
        var expected = emptyBackingArray;
        expected[1] = 7;
        expected[2] = 21;
        expected[3] = 14;
        expected[4] = 42;
        expected[5] = 28;
        expected[6] = 35;
        assertArrayEquals(expected, minheap.getBackingArray());
        assertEquals(6, minheap.size());
    }
    @Test
    void shouldRemoveFromFullArray() {
        minheap.add(1);
        minheap.add(2);
        minheap.add(3);
        minheap.add(4);
        minheap.add(5);
        minheap.add(6);
        minheap.add(7);
        minheap.add(8);
        minheap.add(9);
        minheap.add(10);
        minheap.add(11);
        minheap.add(12);

        var result = minheap.remove();

        assertEquals(1, result);
        var expected = emptyBackingArray;
        expected[1] = 2;
        expected[2] = 4;
        expected[3] = 3;
        expected[4] = 8;
        expected[5] = 5;
        expected[6] = 6;
        expected[7] = 7;
        expected[8] = 12;
        expected[9] = 9;
        expected[10] = 10;
        expected[11] = 11;
        assertArrayEquals(expected, minheap.getBackingArray());
        assertEquals(11, minheap.size());
    }
    @Test()
    void ShouldThrowWhenRemovingFromEmptyHear() {
        minheap.add(5);
        minheap.remove();
        assertThrows(NoSuchElementException.class, () -> minheap.remove());
    }
}
