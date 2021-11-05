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

    private void checkDataValidity(T data) {
        if (data == null) {
            throw new IllegalArgumentException();
        }
    }

    public T remove(T data) {
        checkDataValidity(data);
        var dummyNode = new BSTNode<>((T) null);
        root = helper(root, data, dummyNode);
        return dummyNode.getData();
    }

    private BSTNode<T> helper(BSTNode<T> node, T data, BSTNode<T> dummyNode) {
        verifyElementExists(node);
        var difference = data.compareTo(node.getData());
        if (difference == 0) {
            node = HandleFoundData(node);
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

    private BSTNode<T> HandleFoundData(BSTNode<T> node) {
        BSTNode<T> nodeToReturn = null;
        if (node.getLeft() != null && node.getRight() == null) {
            nodeToReturn = node.getLeft();
        }
        if (node.getLeft() == null && node.getRight() != null) {
            nodeToReturn = node.getRight();
        }
        if (node.getLeft() != null && node.getRight() != null) {
            var dummyNode = new BSTNode<>((T) null);
            node.setRight(successor(node.getRight(), dummyNode));
            node.setData(dummyNode.getData());
            nodeToReturn = node;
        }
        return nodeToReturn;
    }

    public boolean contains(T data) {
        return containsHelper(root, data);
    }
    private boolean containsHelper(BSTNode<T> node, T data) {
        if (node == null){
            return false;
        }
        int difference = data.compareTo(node.getData());
        if (difference > 0) {
            return containsHelper(node.getRight(), data);
        }
        if (difference < 0) {
            return containsHelper(node.getLeft(), data);
        }
        return true;
    }


    private BSTNode<T> successor(BSTNode<T> node, BSTNode<T> dummyNode) {
        if (node.getLeft() == null) {
            dummyNode.setData(node.getData());
            return node.getRight();
        }
        node.setLeft(successor(node.getLeft(), dummyNode));
        return node;
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