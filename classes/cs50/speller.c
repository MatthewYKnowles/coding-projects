// Implements a dictionary's functionality

#include <stdbool.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>
#include "dictionary.h"

typedef struct node {
    char word[LENGTH+1];
    struct node *next;
}
node;

node *hashtable[20];

// Returns true if word is in dictionary else false
bool check(const char *word)
{
    char newWord[LENGTH+1];

    for (int i = 0; i < strlen(word); i++){
        newWord[i] = tolower(word[i]);
    }
    newWord[strlen(word)] = '\0';

    int hash = 0;
    for (int i = 0; i < sizeof(newWord); i++) {
        if (newWord[i] == '\0') {
            break;
        }
        hash += newWord[i];
    }
    int moddedHash = hash % 20;
    if (hashtable[moddedHash] != NULL) {
        if (strcmp(hashtable[moddedHash]->word, newWord) == 0) {
            printf("word match was: %s\n", newWord);
            return true;
        }
    }
    return false;
}

// Loads dictionary into memory, returning true if successful else false
bool load(const char *dictionary)
{
    FILE *file = fopen(dictionary, "r");
    char currentWord[LENGTH+1];
    while (fscanf(file, "%s", currentWord) != EOF) {

        node *new_node = malloc(sizeof(node));
        if (new_node == NULL) {
            return false;
        }

        strcpy(new_node->word, currentWord);

        int hash = 0;
        for (int i = 0; i < sizeof(currentWord); i++) {
            if (currentWord[i] == '\0') {
                break;
            }
            hash += currentWord[i];
            printf("char %c\n", currentWord[i]);
        }
        int moddedHash = hash % 20;
        hashtable[moddedHash] = new_node;
    }
    //int hash1 = 0;
    //char *word1 = "cat";
        //for (int i = 0; i < sizeof(word1); i++) {
          //  hash1 += word1[i];
      //  }
    //int moddedHash1 = hash1 % 20;
    //printf("word1:%s\n", hashtable[moddedHash1]->word);
    //printf("hash1:%i\n", moddedHash1);

    //int hash2 = 0;
    //char *word2 = "caterpillar";
      //  for (int i = 0; i < sizeof(word2); i++) {
    //        hash2 += word2[i];
      //  }
    //int moddedHash = hash2 % 20;
    //printf("word2:%s\n", hashtable[moddedHash]->word);
    //printf("hash2:%i\n", moddedHash);
    return true;
}

// Returns number of words in dictionary if loaded else 0 if not yet loaded
unsigned int size(void)
{
    // TODO
    return 0;
}

// Unloads dictionary from memory, returning true if successful else false
bool unload(void)
{
    // TODO
    return false;
}
