import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TraversalsTests {
    private Traversals<Integer> traversals;

    @BeforeEach
    void setUp() {
        traversals = new Traversals<Integer>();
    }

    @Test
    void shouldPreorderTraverseNodeOfOne() {
        var treeNode = new TreeNode<>(5);

        var result = traversals.preorder(treeNode);

        assertEquals(1, result.size());
        assertEquals(5, result.get(0));
    }

    @Test
    void shouldPreorderTraverseNodeOfTwoValues() {
        var treeNode = new TreeNode<>(5);
        var treeNode2 = new TreeNode<Integer>(3);
        treeNode.setLeft(treeNode2);

        var result = traversals.preorder(treeNode);

        assertEquals(2, result.size());
        assertEquals(5, result.get(0));
        assertEquals(3, result.get(1));
    }

    @Test
    void shouldPreorderTraverseNodeOfThreeValuesInLeft() {
        var treeNode1 = new TreeNode<>(5);
        var treeNode2 = new TreeNode<>(3);
        var treeNode3 = new TreeNode<>(1);
        treeNode1.setLeft(treeNode2);
        treeNode2.setLeft(treeNode3);

        var result = traversals.preorder(treeNode1);

        assertEquals(3, result.size());
        assertEquals(5, result.get(0));
        assertEquals(3, result.get(1));
        assertEquals(1, result.get(2));
    }

    @Test
    void shouldPreorderTraverseNodeOfThreeValuesInRight() {
        var treeNode1 = new TreeNode<>(5);
        var treeNode2 = new TreeNode<>(3);
        var treeNode3 = new TreeNode<>(1);
        treeNode1.setRight(treeNode2);
        treeNode2.setRight(treeNode3);

        var result = traversals.preorder(treeNode1);

        assertEquals(3, result.size());
        assertEquals(5, result.get(0));
        assertEquals(3, result.get(1));
        assertEquals(1, result.get(2));
    }

    @Test
    void shouldPreorderTraverseComplicatedTree() {
        var treeNode1 = new TreeNode<>(5);
        var treeNode2 = new TreeNode<>(3);
        var treeNode3 = new TreeNode<>(1);
        var treeNode4 = new TreeNode<>(8);
        var treeNode5 = new TreeNode<>(10);
        var treeNode6 = new TreeNode<>(112);
        treeNode1.setLeft(treeNode2);
        treeNode1.setRight(treeNode3);
        treeNode2.setLeft(treeNode4);
        treeNode2.setRight(treeNode5);
        treeNode4.setLeft(treeNode6);

        var result = traversals.preorder(treeNode1);

        assertEquals(6, result.size());
        assertEquals(5, result.get(0));
        assertEquals(3, result.get(1));
        assertEquals(8, result.get(2));
        assertEquals(112, result.get(3));
        assertEquals(10, result.get(4));
        assertEquals(1, result.get(5));
    }

    @Test
    void shouldHandlePreorderOfNull() {
        var result = traversals.preorder(null);

        assertEquals(0, result.size());
    }
    @Test
    void shouldHandleInorderOfNull() {
        var result = traversals.inorder(null);

        assertEquals(0, result.size());
    }
    @Test
    void shouldHandlePostorderOfNull() {
        var result = traversals.postorder(null);

        assertEquals(0, result.size());
    }


    @Test
    void shouldInorderTraverseComplicatedTree() {
        var treeNode1 = new TreeNode<>(5);
        var treeNode2 = new TreeNode<>(3);
        var treeNode3 = new TreeNode<>(1);
        var treeNode4 = new TreeNode<>(8);
        var treeNode5 = new TreeNode<>(10);
        var treeNode6 = new TreeNode<>(112);
        treeNode1.setLeft(treeNode2);
        treeNode1.setRight(treeNode3);
        treeNode2.setLeft(treeNode4);
        treeNode2.setRight(treeNode5);
        treeNode4.setLeft(treeNode6);

        var result = traversals.inorder(treeNode1);

        assertEquals(6, result.size());
        assertEquals(112, result.get(0));
        assertEquals(8, result.get(1));
        assertEquals(3, result.get(2));
        assertEquals(10, result.get(3));
        assertEquals(5, result.get(4));
        assertEquals(1, result.get(5));
    }


    @Test
    void shouldPostorderTraverseComplicatedTree() {
        var treeNode1 = new TreeNode<>(5);
        var treeNode2 = new TreeNode<>(3);
        var treeNode3 = new TreeNode<>(1);
        var treeNode4 = new TreeNode<>(8);
        var treeNode5 = new TreeNode<>(10);
        var treeNode6 = new TreeNode<>(112);
        treeNode1.setLeft(treeNode2);
        treeNode1.setRight(treeNode3);
        treeNode2.setLeft(treeNode4);
        treeNode2.setRight(treeNode5);
        treeNode4.setLeft(treeNode6);

        var result = traversals.postorder(treeNode1);

        assertEquals(6, result.size());
        assertEquals(112, result.get(0));
        assertEquals(8, result.get(1));
        assertEquals(10, result.get(2));
        assertEquals(3, result.get(3));
        assertEquals(1, result.get(4));
        assertEquals(5, result.get(5));
    }
}
