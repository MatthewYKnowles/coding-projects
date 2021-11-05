import java.util.NoSuchElementException;

import static java.lang.Math.abs;

public class ExternalChainingHashMap<K, V> {
    public static final int INITIAL_CAPACITY = 13;
    public static final double MAX_LOAD_FACTOR = 0.67;
    private ExternalChainingMapEntry<K, V>[] table;
    private int size;

    public ExternalChainingHashMap() {
        table = (ExternalChainingMapEntry<K, V>[]) new ExternalChainingMapEntry[INITIAL_CAPACITY];
    }

    public V put(K key, V value) {
        if (key == null || value == null) {
            throw new IllegalArgumentException();
        }
        double potentialLoad =  ((double)(size + 1) / table.length);
        if (potentialLoad > MAX_LOAD_FACTOR) {
            resizeBackingTable(table.length * 2 + 1);
        }
        var entry = new ExternalChainingMapEntry<>(key, value);
        var index = getTableIndex(table.length, entry.getKey().hashCode());
        var currentEntryAtIndex = table[index];
        if (hasCollision(currentEntryAtIndex)) {
            ExternalChainingMapEntry<K, V> previousEntryInChain = null;
            var currentEntryInChain = currentEntryAtIndex;
            while(currentEntryInChain != null){
                if(currentEntryInChain.getKey() == entry.getKey()) {
                    if (currentEntryAtIndex == currentEntryInChain) {
                        table[index] = entry;
                    }
                    entry.setNext(currentEntryInChain.getNext());
                    if (previousEntryInChain != null) {
                        previousEntryInChain.setNext(entry);
                    }
                    return currentEntryInChain.getValue();
                }
                previousEntryInChain = currentEntryInChain;
                currentEntryInChain = currentEntryInChain.getNext();
            }
            entry.setNext(currentEntryAtIndex);
        }
        table[index] = entry;
        size++;
        return null;
    }

    public V remove(K key) {
        if (key == null) {
            throw new IllegalArgumentException();
        }
        var index = getTableIndex(table.length, key.hashCode());
        var externalChainOfEntryToRemove = table[index];
        ExternalChainingMapEntry previousEntry = null;
        var currentEntry = externalChainOfEntryToRemove;
        while (currentEntry != null){
            if (currentEntry.getKey() == key) {
                if (previousEntry == null) {
                    table[index] = currentEntry.getNext();
                } else {
                    previousEntry.setNext(currentEntry.getNext());
                }
                size--;
                return currentEntry.getValue();
            }
            previousEntry = currentEntry;
            currentEntry = currentEntry.getNext();
        }
        throw new NoSuchElementException();
    }

    private void resizeBackingTable(int length) {
        var newTable = (ExternalChainingMapEntry<K, V>[]) new ExternalChainingMapEntry[length];
        for (int i = 0; i < table.length; i++) {
            var oldEntry = table[i];
            while (oldEntry != null) {
                var newEntry = new ExternalChainingMapEntry<>(oldEntry.getKey(), oldEntry.getValue());
                int newTableIndex = getTableIndex(newTable.length, newEntry.getKey().hashCode());
                var currentEntryAtIndex = newTable[newTableIndex];
                if (hasCollision(currentEntryAtIndex)) {
                    newEntry.setNext(currentEntryAtIndex);
                }
                newTable[newTableIndex] = newEntry;
                oldEntry = oldEntry.getNext();
            }
        }
        table = newTable;
    }

    private boolean hasCollision(ExternalChainingMapEntry<K, V> entry) {
        return entry != null;
    }

    private int getTableIndex(int length, int hashCode) {
        return abs(hashCode % length);
    }

    public ExternalChainingMapEntry<K, V>[] getTable() {
        return table;
    }

    public int size() {
        return size;
    }
}