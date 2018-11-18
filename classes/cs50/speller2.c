// Implements a dictionary's functionality

#include <stdbool.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>
#include "dictionary.h"

typedef struct node {
    char word[LENGTH + 1];
    struct node *next;
}
        node;

node *hashtable[20];

// Returns true if word is in dictionary else false
bool check(const char *word) {
    // create new version of word and lower case it
    char newWord[LENGTH + 1];
    for (int i = 0; i < strlen(word); i++) {
        newWord[i] = tolower(word[i]);
    }
    newWord[strlen(word)] = '\0';
    printf("current word is: %s\n", newWord);

    int hash = 0;
    for (int i = 0; i < sizeof(newWord); i++) {
        if (newWord[i] == '\0') {
            break;
        }
        hash += newWord[i];
    }
    int moddedHash = hash % 20;
    printf("current word is: %s and its hash is:%i \n", newWord, moddedHash);

    // create temporary node
    node *temp_node = malloc(sizeof(node));
    if (temp_node == NULL) {
        unload();
        return false;
    }
    temp_node = hashtable[moddedHash];
    while (temp_node != NULL) {
        printf("inside while loop node word is: %s and its hash is:%i \n", temp_node->word, moddedHash);
        if (strcmp(temp_node->word, newWord) == 0) {
            return true;
        }
        temp_node = temp_node->next;
    }
    return false;
}

// Loads dictionary into memory, returning true if successful else false
bool load(const char *dictionary) {
    // Start Hashtable values at NULL
    for (int i = 0; i < 20; i++) {
        hashtable[i] = NULL;
    }

    FILE *file = fopen(dictionary, "r");
    char currentWord[LENGTH + 1];
    while (fscanf(file, "%s", currentWord) != EOF) {
        // create new node and make sure there is enough memory
        node *new_node = malloc(sizeof(node));
        if (new_node == NULL) {
            unload();
            return false;
        }

        // Setup new node
        strcpy(new_node->word, currentWord);
        new_node->next = NULL;

        // Get hash for the word
        int hash = 0;
        for (int i = 0; i < sizeof(currentWord); i++) {
            if (currentWord[i] == '\0') {
                break;
            }
            hash += currentWord[i];
        }
        int moddedHash = hash % 20;
        printf("currentWord: %s hash:%i\n", currentWord, moddedHash);
        // put new node in hashtable
        if (hashtable[moddedHash] == NULL) {
            hashtable[moddedHash] = new_node;
            printf("word: %s added at hash: %i\n", hashtable[moddedHash]->word, moddedHash);
        } else {
            printf("||||||in else block\n");
            node *temp_node = malloc(sizeof(node));
            if (temp_node == NULL) {
                unload();
                return false;
            }
            temp_node = hashtable[moddedHash];
            new_node->next = temp_node;
            hashtable[moddedHash] = new_node;
        }
    }

    node *temp_node2 = malloc(sizeof(node));
    if (temp_node2 == NULL) {
        unload();
        return false;
    }
    for (int i = 0; i < 20; i++) {
        temp_node2 = hashtable[i];
        while (temp_node2 != NULL) {
            printf("word in hashtable: %s and its hash is:%i\n", temp_node2->word, i);
            temp_node2 = temp_node2->next;
        }
    }
    return true;
}

// Returns number of words in dictionary if loaded else 0 if not yet loaded
unsigned int size(void) {
    unsigned int total = 0;
    node *temp_node = malloc(sizeof(node));
    if (temp_node == NULL) {
        unload();
        return false;
    }
    for (int i = 0; i < 20; i++) {
        temp_node = hashtable[i];
        while (temp_node != NULL) {
            total++;
            printf("After delete - word in hashtable: %s and its hash is:%i\n", temp_node->word, i);
            temp_node = temp_node->next;
        }
    }
    return total;
}

// Unloads dictionary from memory, returning true if successful else false
bool unload(void) {
    node *temp_node = malloc(sizeof(node));
    if (temp_node == NULL) {
        unload();
        return false;
    }
    node *next_node = malloc(sizeof(node));
    if (next_node == NULL) {
        unload();
        return false;
    }

    for (int i = 0; i < 20; i++) {
        temp_node = hashtable[i];
        if (temp_node == NULL) {
            free(temp_node);
        }
        while (temp_node != NULL) {
            next_node = temp_node->next;
            free(temp_node);
            temp_node = next_node;
        }
        free(temp_node);
    }
    free(next_node);
    return true;
}
