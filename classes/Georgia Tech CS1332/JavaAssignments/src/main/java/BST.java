import java.util.NoSuchElementException;

public class BST<T extends Comparable<? super T>> {
    private BSTNode<T> root;
    private int size;

    public void add(T data) {
        if (data == null) {
            throw new IllegalArgumentException();
        }
        root = addValidData(root, data);
    }

    private BSTNode<T> addValidData(BSTNode<T> node, T data) {
        if (node == null) {
            size++;
            return new BSTNode<>(data);
        }
        if (newValueIsGreater(node.getData(), data)) {
            node.setRight(addValidData(node.getRight(), data));
        }
        if (newValueIsLesser(node.getData(), data)) {
            node.setLeft(addValidData(node.getLeft(), data));
        }
        return node;
    }

    private boolean newValueIsLesser(T newData, T data) {
        return data.compareTo(newData) < 0;
    }

    private boolean newValueIsGreater(T newData, T data) {
        return data.compareTo(newData) > 0;
    }

    public T remove(T data) {
        var dummyNode = new BSTNode<>((T) null);
        BSTNode<T> node = root;
        var difference = data.compareTo(node.getData());
        if (difference == 0) {
            BSTNode<T> nodeToReturn = null;
            if (node.getLeft() != null && node.getRight() == null) {
                nodeToReturn = node.getLeft();
            }
            if (node.getLeft() == null && node.getRight() != null) {
                nodeToReturn = node.getRight();
            }
            if (node.getLeft() != null && node.getRight() != null) {
                var dummyNode1 = new BSTNode<>((T) null);
                node.setRight(successor(node.getRight(), dummyNode1));
                node.setData(dummyNode1.getData());
                nodeToReturn = node;
            }
            node = nodeToReturn;
            dummyNode.setData(data);
            size--;
        }
        if (difference < 0) {
            node.setLeft(helper(node.getLeft(), data, dummyNode));
        }
        if (difference > 0) {
            node.setRight(helper(node.getRight(), data, dummyNode));
        }
        root = node;
        return dummyNode.getData();
    }

    private BSTNode<T> helper(BSTNode<T> node, T data, BSTNode<T> dummyNode) {
        if (node == null) {
            throw new NoSuchElementException();
        }
        var difference = data.compareTo(node.getData());
        if (difference == 0) {
            BSTNode<T> nodeToReturn = null;
            if (node.getLeft() != null && node.getRight() == null) {
                nodeToReturn = node.getLeft();
            }
            if (node.getLeft() == null && node.getRight() != null) {
                nodeToReturn = node.getRight();
            }
            if (node.getLeft() != null && node.getRight() != null) {
                var dummyNode1 = new BSTNode<>((T) null);
                node.setRight(successor(node.getRight(), dummyNode1));
                node.setData(dummyNode1.getData());
                nodeToReturn = node;
            }
            node = nodeToReturn;
            dummyNode.setData(data);
            size--;
        }
        if (difference < 0) {
            node.setLeft(helper(node.getLeft(), data, dummyNode));
        }
        if (difference > 0) {
            node.setRight(helper(node.getRight(), data, dummyNode));
        }
        return node;
    }


    private BSTNode<T> successor(BSTNode<T> node, BSTNode<T> dummyNode) {
        if (node.getLeft() == null) {
            dummyNode.setData(node.getData());
            return node.getRight();
        }
        node.setLeft(successor(node.getLeft(), dummyNode));
        return node;
    }

    public BSTNode<T> getRoot() {
        return root;
    }

    public int size() {
        return size;
    }
}