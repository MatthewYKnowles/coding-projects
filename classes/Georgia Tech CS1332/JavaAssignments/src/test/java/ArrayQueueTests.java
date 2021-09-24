import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.NoSuchElementException;

import static org.junit.jupiter.api.Assertions.*;

public class ArrayQueueTests {

    private ArrayQueue<Object> arrayQueue;

    @BeforeEach
    void setUp() {
        arrayQueue = new ArrayQueue<>();
    }

    @Test
    void enqueueToEmptyArray() {
        arrayQueue.enqueue(1);
        Integer[] expected = {1, null, null, null, null, null, null, null, null};
        assertArrayEquals(expected, arrayQueue.getBackingArray());
        assertEquals(1, arrayQueue.size());
    }

    @Test
    void enqueuePastFull() {
        for (var i = 0; i < 10; i++){
            arrayQueue.enqueue(i+2);
        }
        Integer[] expected = {2, 3, 4, 5, 6, 7, 8, 9, 10, 11, null, null, null, null, null, null, null, null};
        assertArrayEquals(expected, arrayQueue.getBackingArray());
        assertEquals(10, arrayQueue.size());
    }

    @Test
    void enqueueToFullFromAMiddleIndex() {
        arrayQueue.enqueue(5);
        arrayQueue.dequeue();
        for (var i = 0; i < 9; i++){
            arrayQueue.enqueue(i+2);
        }

        Integer[] expected2 = {10, 2, 3, 4, 5, 6, 7, 8, 9};
        assertArrayEquals(expected2, arrayQueue.getBackingArray());
        assertEquals(9, arrayQueue.size());
    }

    @Test
    void enqueuePastFullFromAMiddleIndex() {
        arrayQueue.enqueue(5);
        arrayQueue.dequeue();
        for (var i = 0; i < 10; i++){
            arrayQueue.enqueue(i+2);
        }

        Integer[] expected = {2, 3, 4, 5, 6, 7, 8, 9, 10, 11, null, null, null, null, null, null, null, null};
        assertArrayEquals(expected, arrayQueue.getBackingArray());
        assertEquals(10, arrayQueue.size());
    }

    @Test
    void dequeueFromArrayWithTwoValues() {
        arrayQueue.enqueue(5);
        arrayQueue.enqueue(7);
        assertEquals(5, arrayQueue.dequeue());
        Integer[] expected = {null, 7, null, null, null, null, null, null, null};
        assertArrayEquals(expected, arrayQueue.getBackingArray());
        assertEquals(1, arrayQueue.size());

        assertEquals(7, arrayQueue.dequeue());
        Integer[] expected2 = {null, null, null, null, null, null, null, null, null};
        assertArrayEquals(expected2, arrayQueue.getBackingArray());
        assertEquals(0, arrayQueue.size());
    }

    @Test
    void dequeueFromEndOfArrayAndHaveFrontWrapAround() {
        for (var i = 0; i < 9; i++){
            arrayQueue.enqueue(i+2);
        }
        for (var i = 0; i < 9; i++){
            arrayQueue.dequeue();
        }

        arrayQueue.enqueue(7);
        assertEquals(7, arrayQueue.dequeue());
        Integer[] expected = {null, null, null, null, null, null, null, null, null};
        assertArrayEquals(expected, arrayQueue.getBackingArray());
        assertEquals(0, arrayQueue.size());
    }

    @Test()
    void enqueueNull() {
        assertThrows(IllegalArgumentException.class, () -> arrayQueue.enqueue(null));
    }
    @Test
    void dequeueFromEmptyArray() {
        assertThrows(NoSuchElementException.class, () -> arrayQueue.dequeue());
    }
}
