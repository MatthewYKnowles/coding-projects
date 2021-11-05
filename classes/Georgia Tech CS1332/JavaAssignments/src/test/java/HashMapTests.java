import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.NoSuchElementException;

import static org.junit.jupiter.api.Assertions.*;

public class HashMapTests {
    private ExternalChainingHashMap<Integer, Integer> hashMap;
    private ExternalChainingMapEntry[] table;

    @BeforeEach
    void setUp() {
        hashMap = new ExternalChainingHashMap<>();
        table = new ExternalChainingMapEntry[]{null, null, null, null, null, null, null, null, null, null, null, null, null};
    }

    @Test
    void shouldAddAtIndex() {
        hashMap.put(1, 1);
        table[1] = new ExternalChainingMapEntry<>(1, 1);
        assertArrayEquals(table, hashMap.getTable());
        assertEquals(1, hashMap.size());
    }

    @Test
    void shouldAddAtModdedIndex() {
        hashMap.put(15, 15);
        table[2] = new ExternalChainingMapEntry<>(15, 15);
        assertArrayEquals(table, hashMap.getTable());
        assertEquals(1, hashMap.size());
    }

    @Test
    void shouldChainIfCollision() {
        hashMap.put(3, 3);
        hashMap.put(16, 16);
        var table = hashMap.getTable();
        var tailNode = new ExternalChainingMapEntry<>(3, 3);
        var headNode = new ExternalChainingMapEntry<>(16, 16, tailNode);
        assertEquals(headNode, table[3]);
        assertEquals(tailNode, table[3].getNext());
        assertEquals(2, hashMap.size());
    }

    @Test
    void shouldChainMultipleLevelsIfCollision() {
        hashMap.put(4, 4);
        hashMap.put(17, 17);
        hashMap.put(30, 30);
        var table = hashMap.getTable();
        var tailNode = new ExternalChainingMapEntry<>(4, 4);
        var secondNode = new ExternalChainingMapEntry<>(17, 17, tailNode);
        var headNode = new ExternalChainingMapEntry<>(30, 30, secondNode);
        assertEquals(headNode, table[4]);
        assertEquals(secondNode, table[4].getNext());
        assertEquals(tailNode, table[4].getNext().getNext());
        assertEquals(3, hashMap.size());
    }

    @Test
    void shouldReplaceValueWhenSameKey() {
        var oldValue1 = hashMap.put(5, 5);
        var oldValue2 = hashMap.put(5, 17);
        var table = hashMap.getTable();
        var entry = new ExternalChainingMapEntry<>(5, 17);
        assertEquals(entry, table[5]);
        assertNull(oldValue1);
        assertEquals(5, oldValue2);
        assertEquals(1, hashMap.size());
    }

    @Test
    void shouldReplaceValueWhenSameKeyInChain() {
        hashMap.put(4, 4);
        hashMap.put(17, 17);
        hashMap.put(30, 30);
        var oldValue = hashMap.put(17, 45);
        var table = hashMap.getTable();
        var tailNode = new ExternalChainingMapEntry<>(4, 4);
        var secondNode = new ExternalChainingMapEntry<>(17, 45, tailNode);
        var headNode = new ExternalChainingMapEntry<>(30, 30, secondNode);
        assertEquals(headNode, table[4]);
        assertEquals(secondNode, table[4].getNext());
        assertEquals(tailNode, table[4].getNext().getNext());
        assertEquals(17, oldValue);
        assertEquals(3, hashMap.size());
    }

    @Test
    void shouldResizeWhenPastMaxLoadFactor() {
        hashMap.put(1, 1);
        hashMap.put(2, 2);
        hashMap.put(3, 3);
        hashMap.put(4, 4);
        hashMap.put(5, 5);
        hashMap.put(6, 6);
        hashMap.put(7, 7);
        hashMap.put(8, 8);
        hashMap.put(14, 14);
        var table = hashMap.getTable();
        var entry = new ExternalChainingMapEntry<>(14, 14);
        assertEquals(entry, table[14]);
        assertEquals(27, table.length);
        assertEquals(9, hashMap.size());
    }

    @Test
    void shouldGetExternalChainWhenResizing() {
        hashMap.put(1, 1);
        hashMap.put(2, 2);
        hashMap.put(3, 3);
        hashMap.put(4, 4);
        hashMap.put(17, 17);
        hashMap.put(30, 30);
        hashMap.put(43, 43);
        hashMap.put(26, 26);
        hashMap.put(53, 53);
        var table = hashMap.getTable();
        var entry = new ExternalChainingMapEntry<>(52, 52);
        var entry2 = new ExternalChainingMapEntry<>(26, 26);
        entry.setNext(entry2);
        assertEquals(entry2, table[26].getNext());
        assertEquals(27, table.length);
        assertEquals(9, hashMap.size());
    }

    @Test
    void shouldThrowWhenKeyIsNull() {
        assertThrows(IllegalArgumentException.class, () -> hashMap.put(null, 5));
    }

    @Test
    void shouldThrowWhenValueIsNull() {
        assertThrows(IllegalArgumentException.class, () -> hashMap.put(5, null));
    }

    @Test
    void shouldRemoveMatchingKey() {
        hashMap.put(2, 5);
        var value = hashMap.remove(2);

        assertEquals(5, value);
        assertArrayEquals(table, hashMap.getTable());
        assertEquals(0, hashMap.size());
    }

    @Test
    void shouldRemoveMatchingKeyAtBeginningOfExternalChain () {
        hashMap.put(2, 5);
        hashMap.put(15, 10);

        var value = hashMap.remove(15);

        assertEquals(10, value);
        table[2] = new ExternalChainingMapEntry<>(2, 5);
        assertArrayEquals(table, hashMap.getTable());
        assertEquals(1, hashMap.size());
    }

    @Test
    void shouldRemoveMatchingKeyAtMiddleOfExternalChain () {
        hashMap.put(2, 5);
        hashMap.put(15, 10);
        hashMap.put(28, 15);

        var value = hashMap.remove(15);

        assertEquals(10, value);
        var tail = new ExternalChainingMapEntry<>(2, 5);
        var head = new ExternalChainingMapEntry<>(28, 15);
        head.setNext(tail);
        var table = hashMap.getTable();
        assertEquals(head, table[2]);
        assertEquals(tail, table[2].getNext());
        assertEquals(2, hashMap.size());
    }

    @Test
    void shouldRemoveMatchingKeyAtEndOfExternalChain () {
        hashMap.put(2, 5);
        hashMap.put(15, 10);
        hashMap.put(28, 15);

        var value = hashMap.remove(2);

        assertEquals(5, value);
        var tail = new ExternalChainingMapEntry<>(15, 10);
        var head = new ExternalChainingMapEntry<>(28, 15);
        head.setNext(tail);
        var table = hashMap.getTable();
        assertEquals(head, table[2]);
        assertEquals(tail, table[2].getNext());
        assertNull(table[2].getNext().getNext());
        assertEquals(2, hashMap.size());
    }

    @Test
    void shouldThrowIllegalArgumentWhenValueIsNull() {
        assertThrows(IllegalArgumentException.class, () -> hashMap.remove(null));
    }
    @Test
    void shouldThrowNoSuchElementExceptionIfKeyIsMissing () {
        hashMap.put(2, 5);
        hashMap.put(15, 10);
        hashMap.put(28, 15);

        assertThrows(NoSuchElementException.class, () -> hashMap.remove(10));
    }
}
