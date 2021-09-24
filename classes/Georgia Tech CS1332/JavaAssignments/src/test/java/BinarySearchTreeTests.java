import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.NoSuchElementException;

import static org.junit.jupiter.api.Assertions.*;

public class BinarySearchTreeTests {
    private BST<Integer> bst;

    @BeforeEach
    void setUp() {
        bst = new BST<>();
    }

    @Test
    void AddingFirstNumber() {
        bst.add(6);
        assertEquals(6, bst.getRoot().getData());
        assertEquals(1, bst.size());
    }
    @Test
    void AddingLowerNumber() {
        bst.add(6);
        bst.add(5);
        assertEquals(6, bst.getRoot().getData());
        assertEquals(5, bst.getRoot().getLeft().getData());
        assertEquals(2, bst.size());
    }
    @Test
    void AddingTwoLowerNumbers() {
        bst.add(6);
        bst.add(5);
        bst.add(4);
        assertEquals(6, bst.getRoot().getData());
        assertEquals(5, bst.getRoot().getLeft().getData());
        assertEquals(4, bst.getRoot().getLeft().getLeft().getData());
        assertEquals(3, bst.size());
    }
    @Test
    void AddingTwoHigherNumbers() {
        bst.add(6);
        bst.add(7);
        bst.add(8);
        assertEquals(6, bst.getRoot().getData());
        assertEquals(7, bst.getRoot().getRight().getData());
        assertEquals(8, bst.getRoot().getRight().getRight().getData());
        assertEquals(3, bst.size());
    }
    @Test
    void DoNotAddDuplicate() {
        bst.add(6);
        bst.add(6);
        assertEquals(6, bst.getRoot().getData());
        assertEquals(1, bst.size());
    }
    @Test
    void shouldWorkWithString() {
        var stringBst = new BST<String>();
        stringBst.add("ab");
        stringBst.add("bc");
        assertEquals("ab", stringBst.getRoot().getData());
        assertEquals("bc", stringBst.getRoot().getRight().getData());
        assertEquals(2, stringBst.size());
    }
    @Test
    void AddingNullData() {
        assertThrows(IllegalArgumentException.class, () -> bst.add(null));
    }
    @Test
    void RemoveRootNode() {
        bst.add(6);
        var removed = bst.remove(6);
        assertEquals(6, removed);
        assertEquals(0, bst.size());
        assertNull(bst.getRoot());
    }
    @Test
    void RemoveLeftNode() {
        bst.add(6);
        bst.add(4);
        var removed = bst.remove(4);
        assertEquals(4, removed);
        assertEquals(1, bst.size());
        assertNull(bst.getRoot().getLeft());
    }
    @Test
    void RemoveRightNode() {
        bst.add(6);
        bst.add(8);
        var removed = bst.remove(8);
        assertEquals(8, removed);
        assertEquals(1, bst.size());
        assertNull(bst.getRoot().getRight());
    }
    @Test
    void RemoveDeepLeftNode() {
        bst.add(6);
        bst.add(4);
        bst.add(1);
        var removed = bst.remove(1);
        assertEquals(1, removed);
        assertEquals(2, bst.size());
        assertNull(bst.getRoot().getLeft().getLeft());
    }
    @Test
    void RemoveThirdOfFourLeftNodes() {
        bst.add(6);
        bst.add(4);
        bst.add(3);
        bst.add(1);
        var removed = bst.remove(3);
        assertEquals(3, removed);
        assertEquals(3, bst.size());
        assertEquals(6, bst.getRoot().getData());
        assertEquals(4, bst.getRoot().getLeft().getData());
        assertEquals(1, bst.getRoot().getLeft().getLeft().getData());
        assertNull(bst.getRoot().getLeft().getLeft().getLeft());
    }
    @Test
    void RemoveThirdOfFourRightNodes() {
        bst.add(6);
        bst.add(7);
        bst.add(8);
        bst.add(9);
        var removed = bst.remove(8);
        assertEquals(8, removed);
        assertEquals(3, bst.size());
        assertEquals(6, bst.getRoot().getData());
        assertEquals(7, bst.getRoot().getRight().getData());
        assertEquals(9, bst.getRoot().getRight().getRight().getData());
        assertNull(bst.getRoot().getRight().getRight().getRight());
    }

    @Test
    void RemoveNavigatingLeftAndRight() {
        bst.add(5);
        bst.add(1);
        bst.add(4);
        bst.add(3);
        bst.add(2);
        var removed = bst.remove(4);
        assertEquals(4, removed);
        assertEquals(4, bst.size());
        assertEquals(5, bst.getRoot().getData());
        assertEquals(1, bst.getRoot().getLeft().getData());
        assertEquals(3, bst.getRoot().getLeft().getRight().getData());
        assertEquals(2, bst.getRoot().getLeft().getRight().getLeft().getData());
    }
    @Test
    void RemoveFromLeftWithALeftoverRightNode() {
        bst.add(5);
        bst.add(4);
        bst.add(1);
        bst.add(3);
        var removed = bst.remove(1);
        assertEquals(1, removed);
        assertEquals(3, bst.size());
        assertEquals(5, bst.getRoot().getData());
        assertEquals(4, bst.getRoot().getLeft().getData());
        assertEquals(3, bst.getRoot().getLeft().getLeft().getData());
    }
    @Test
    void RemoveRootWithTwoChildren() {
        bst.add(50);
        bst.add(60);
        bst.add(25);
        var removed = bst.remove(50);
        assertEquals(50, removed);
        assertEquals(2, bst.size());
        assertEquals(60, bst.getRoot().getData());
        assertEquals(25, bst.getRoot().getLeft().getData());
    }

    @Test
    void RemoveNodeWithTwoChildrenUsingSuccessor() {
        bst.add(50);
        bst.add(60);
        bst.add(25);
        bst.add(35);
        bst.add(12);
        bst.add(5);
        bst.add(20);
        bst.add(18);
        bst.add(22);
        bst.add(21);
        var removed = bst.remove(12);
        assertEquals(12, removed);
        assertEquals(9, bst.size());
        assertEquals(50, bst.getRoot().getData());
        assertEquals(25, bst.getRoot().getLeft().getData());
        assertEquals(18, bst.getRoot().getLeft().getLeft().getData());
        assertEquals(5, bst.getRoot().getLeft().getLeft().getLeft().getData());
        assertEquals(20, bst.getRoot().getLeft().getLeft().getRight().getData());
        assertEquals(22, bst.getRoot().getLeft().getLeft().getRight().getRight().getData());
    }
    @Test
    void shouldRemoveWithString() {
        var stringBst = new BST<String>();
        stringBst.add("bc");
        stringBst.add("ab");
        stringBst.add("cd");
        var removed = stringBst.remove("bc");
        assertEquals("bc", removed);
        assertEquals("cd", stringBst.getRoot().getData());
        assertEquals("ab", stringBst.getRoot().getLeft().getData());
        assertEquals(2, stringBst.size());
    }

    @Test
    void ShouldThrowIfDataIsNull() {
        bst.add(6);
        bst.add(4);
        bst.add(1);
        assertThrows(IllegalArgumentException.class, () -> bst.remove(null));
    }
    @Test
    void ShouldThrowIfNumberNotInTree() {
        bst.add(6);
        bst.add(4);
        bst.add(2);
        assertThrows(NoSuchElementException.class, () -> bst.remove(1));
    }
}
