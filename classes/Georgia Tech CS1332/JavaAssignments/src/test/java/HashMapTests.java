import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;

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
}
