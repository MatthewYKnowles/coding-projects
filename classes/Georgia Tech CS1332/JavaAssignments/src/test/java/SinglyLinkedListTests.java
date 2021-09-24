import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import java.util.NoSuchElementException;
import static org.junit.jupiter.api.Assertions.*;

public class SinglyLinkedListTests {
    private SinglyLinkedList<Integer> singlyLinkedList;

    @BeforeEach
    void setUp() {
        singlyLinkedList = new SinglyLinkedList<>();
    }

    @Test
    void addToFront() {
        int value = 3;
        singlyLinkedList.addToFront(value);
        assertEquals(1, singlyLinkedList.size());
        assertEquals(value, singlyLinkedList.getHead().getData());
        assertEquals(3, singlyLinkedList.getTail().getData());
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

    @Test
    void addToNullFront() {
        assertThrows(IllegalArgumentException.class, () -> singlyLinkedList.addToFront(null));
    }

    @Test
    void addThreeToBack() {
        singlyLinkedList.addToBack(3);
        singlyLinkedList.addToBack(5);
        singlyLinkedList.addToBack(7);
        assertEquals(3, singlyLinkedList.size());
        assertEquals(3, singlyLinkedList.getHead().getData());
        assertEquals(7, singlyLinkedList.getTail().getData());
    }

    @Test
    void addToNullBack() {
        assertThrows(IllegalArgumentException.class, () -> singlyLinkedList.addToBack(null));
    }

    @Test
    void removeFromFrontOfEmptyList() {
        assertThrows(NoSuchElementException.class, () -> singlyLinkedList.removeFromFront());
    }

    @Test
    void removeFromFrontOfListOfOneElement() {
        singlyLinkedList.addToFront(3);
        assertEquals(3, singlyLinkedList.removeFromFront());
        assertEquals(0, singlyLinkedList.size());
    }

    @Test
    void removeFromFrontOfListOfTwoElements() {
        singlyLinkedList.addToFront(3);
        singlyLinkedList.addToFront(9);
        assertEquals(9, singlyLinkedList.removeFromFront());
        assertEquals(1, singlyLinkedList.size());
        assertEquals(3, singlyLinkedList.removeFromFront());
        assertEquals(0, singlyLinkedList.size());
        assertNull(singlyLinkedList.getHead());
        assertNull(singlyLinkedList.getTail());

    }

    @Test
    void removeFromBackOfEmptyList() {
        assertThrows(NoSuchElementException.class, () -> singlyLinkedList.removeFromBack());
    }

    @Test
    void removeFromBackOfListOfOneElement() {
        singlyLinkedList.addToFront(3);
        assertEquals(3, singlyLinkedList.removeFromBack());
        assertEquals(0, singlyLinkedList.size());
    }

    @Test
    void removeFromBackOfListOfTwoElements() {
        singlyLinkedList.addToFront(3);
        singlyLinkedList.addToFront(9);
        assertEquals(3, singlyLinkedList.removeFromBack());
        assertEquals(1, singlyLinkedList.size());
        assertEquals(9, singlyLinkedList.removeFromBack());
        assertEquals(0, singlyLinkedList.size());
        assertNull(singlyLinkedList.getHead());
        assertNull(singlyLinkedList.getTail());
    }

    @Test
    void removeFromBackOfListOfFourElements() {
        singlyLinkedList.addToFront(3);
        singlyLinkedList.addToFront(9);
        singlyLinkedList.addToFront(15);
        singlyLinkedList.addToFront(21);
        assertEquals(3, singlyLinkedList.removeFromBack());
        assertEquals(3, singlyLinkedList.size());
        assertEquals(21, singlyLinkedList.getHead().getData());
        assertEquals(9, singlyLinkedList.getTail().getData());
    }

    @Test
    void tailAndHeadShouldPointToSameObject() {
        var stringList = new SinglyLinkedList<String>();
        stringList.addToFront("1a");
        var head = stringList.getHead();
        var tail = stringList.getTail();
        assertSame(tail, head);
    }

    @Test
    void addAtIndexZero() {
        singlyLinkedList.addAtIndex(0, 5);
        assertEquals(1, singlyLinkedList.size());
        assertEquals(5, singlyLinkedList.getHead().getData());
        assertEquals(5, singlyLinkedList.getTail().getData());
    }

    @Test
    void addAtIndexZeroWithOneItemInList() {
        singlyLinkedList.addAtIndex(0, 5);
        singlyLinkedList.addAtIndex(0, 8);
        assertEquals(2, singlyLinkedList.size());
        assertEquals(8, singlyLinkedList.getHead().getData());
        assertEquals(5, singlyLinkedList.getTail().getData());
    }


    @Test
    void addAtIndexTwoWithItemsInList() {
        singlyLinkedList.addAtIndex(0, 5);
        singlyLinkedList.addAtIndex(0, 8);
        singlyLinkedList.addAtIndex(0, 12);
        singlyLinkedList.addAtIndex(0, 43);
        singlyLinkedList.addAtIndex(2, 99);
        assertEquals(5, singlyLinkedList.size());
        assertEquals(43, singlyLinkedList.getHead().getData());
        assertEquals(12, singlyLinkedList.getHead().getNext().getData());
        assertEquals(99, singlyLinkedList.getHead().getNext().getNext().getData());
        assertEquals(8, singlyLinkedList.getHead().getNext().getNext().getNext().getData());
        assertEquals(5, singlyLinkedList.getHead().getNext().getNext().getNext().getNext().getData());
        assertEquals(5, singlyLinkedList.getTail().getData());
    }

    @Test
    void addAtLastIndexWithItemsInList() {
        singlyLinkedList.addAtIndex(0, 5);
        singlyLinkedList.addAtIndex(0, 8);
        singlyLinkedList.addAtIndex(0, 12);
        singlyLinkedList.addAtIndex(0, 43);
        singlyLinkedList.addAtIndex(4, 99);
        assertEquals(5, singlyLinkedList.size());
        assertEquals(43, singlyLinkedList.getHead().getData());
        assertEquals(12, singlyLinkedList.getHead().getNext().getData());
        assertEquals(8, singlyLinkedList.getHead().getNext().getNext().getData());
        assertEquals(5, singlyLinkedList.getHead().getNext().getNext().getNext().getData());
        assertEquals(99, singlyLinkedList.getHead().getNext().getNext().getNext().getNext().getData());
        assertEquals(99, singlyLinkedList.getTail().getData());
    }
}
