import java.util.NoSuchElementException;

public class BST<T extends Comparable<? super T>> {
    private BSTNode<T> root;
    private int size;

    public void add(T data) {
        checkDataValidity(data);
        root = addValidData(root, data);
    }

    private BSTNode<T> addValidData(BSTNode<T> node, T data) {
        if (node == null) {
            size++;
            return new BSTNode<>(data);
        }
        if (newValueIsGreater(node, data)) {
            node.setRight(addValidData(node.getRight(), data));
        }
        if (newValueIsLesser(node, data)) {
            node.setLeft(addValidData(node.getLeft(), data));
        }
        return node;
    }

    private boolean newValueIsLesser(BSTNode<T> node, T data) {
        return data.compareTo(node.getData()) < 0;
    }

    private boolean newValueIsGreater(BSTNode<T> node, T data) {
        return data.compareTo(node.getData()) > 0;
    }

    private void checkDataValidity(T data) {
        if (data == null) {
            throw new IllegalArgumentException();
        }
    }

    /**
     * Removes and returns the data from the tree matching the given parameter.
     * <p>
     * This must be done recursively.
     * <p>
     * There are 3 cases to consider:
     * 1: The node containing the data is a leaf (no children). In this case,
     * simply remove it.
     * 2: The node containing the data has one child. In this case, simply
     * replace it with its child.
     * 3: The node containing the data has 2 children. Use the SUCCESSOR to
     * replace the data. You should use recursion to find and remove the
     * successor (you will likely need an additional helper method to
     * handle this case efficiently).
     * <p>
     * Do NOT return the same data that was passed in. Return the data that
     * was stored in the tree.
     * <p>
     * Hint: Should you use value equality or reference equality?
     * <p>
     * Must be O(log n) for best and average cases and O(n) for worst case.
     *
     * @param data The data to remove.
     * @return The data that was removed.
     * @throws java.lang.IllegalArgumentException If data is null.
     * @throws java.util.NoSuchElementException   If the data is not in the tree.
     */
    public T remove(T data) {
        checkDataValidity(data);
        var dummyNode = new BSTNode<>(data);
        root = helper(root, data, dummyNode);
        return dummyNode.getData();
    }

    private BSTNode<T> helper(BSTNode<T> node, T data, BSTNode<T> dummyNode) {
        verifyElementExists(node);
        var difference = data.compareTo(node.getData());
        if (difference == 0) {
            if (node.getLeft() == null && node.getRight() == null) {
                dummyNode.setData(data);
                size--;
                return null;
            }
            if (node.getLeft() != null && node.getRight() == null) {
                dummyNode.setData(data);
                size--;
                return node.getLeft();
            }
            if (node.getLeft() == null && node.getRight() != null) {
                dummyNode.setData(data);
                size--;
                return node.getRight();
            }

            dummyNode.setData(data);
            size--;
            return null;
        }
        if (difference < 0) {
            node.setLeft(helper(node.getLeft(), data, dummyNode));
        }
        if (difference > 0) {
            node.setRight(helper(node.getRight(), data, dummyNode));
        }
        return node;
    }

    private T removeNode(BSTNode<T> node, T data) {
        var difference = data.compareTo(node.getData());
        if (difference < 0) {
            var currentNode = node.getLeft();
            verifyElementExists(currentNode);
            var currentData = currentNode.getData();
            if (currentData == data) {
                if (currentNode.getLeft() == null) {
                    node.setLeft(currentNode.getRight());
                } else {
                    node.setLeft(currentNode.getLeft());
                }
                size--;
                return currentData;
            }
            return removeNode(currentNode, data);
        }
        if (difference > 0) {
            var currentNode = node.getRight();
            verifyElementExists(currentNode);
            var currentData = currentNode.getData();
            if (currentData == data) {
                if (currentNode.getRight() == null) {
                    node.setRight(currentNode.getLeft());
                } else {
                    node.setRight(currentNode.getRight());
                }
                size--;
                return currentData;
            }
            return removeNode(currentNode, data);
        }
        return null;
    }

    private void verifyElementExists(BSTNode<T> node) {
        if (node == null) {
            throw new NoSuchElementException();
        }
    }

    public BSTNode<T> getRoot() {
        return root;
    }

    public int size() {
        return size;
    }
}