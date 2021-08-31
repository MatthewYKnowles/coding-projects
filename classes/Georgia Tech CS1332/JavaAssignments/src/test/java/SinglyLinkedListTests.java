import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class SinglyLinkedListTests {

    private SinglyLinkedList<Integer> singlyLinkedList;

    @BeforeEach
    void setUp() {
        singlyLinkedList = new SinglyLinkedList<>(){};
    }

    @Test
    void addToFront() {
        int value = 3;
        singlyLinkedList.addToFront(value);
        assertEquals(1, singlyLinkedList.size());
        assertEquals(value, singlyLinkedList.getHead().getData());
        assertEquals(value, singlyLinkedList.getTail().getData());
    }

    @Test
    void addTwoToFront() {
        singlyLinkedList.addToFront(3);
        singlyLinkedList.addToFront(5);
        assertEquals(2, singlyLinkedList.size());
        assertEquals(5, singlyLinkedList.getHead().getData());
        assertEquals(3, singlyLinkedList.getTail().getData());
    }

    @Test
    void addThreeToFront() {
        singlyLinkedList.addToFront(3);
        singlyLinkedList.addToFront(5);
        singlyLinkedList.addToFront(7);
        assertEquals(3, singlyLinkedList.size());
        assertEquals(7, singlyLinkedList.getHead().getData());
        assertEquals(3, singlyLinkedList.getTail().getData());
    }
}
