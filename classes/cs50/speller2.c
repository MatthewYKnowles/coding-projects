// Implements a dictionary's functionality

#include <stdbool.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>
#include "dictionary.h"

typedef struct node
{
    char word[LENGTH + 1];
    struct node *next;
} node;

node *hashtable[20];

// Returns true if word is in dictionary else false
bool check(const char *word)
{
    char newWord[LENGTH + 1];

    for (int i = 0; i < strlen(word); i++)
    {
        newWord[i] = tolower(word[i]);
    }
    newWord[strlen(word)] = '\0';

    int hash = 0;
    for (int i = 0; i < sizeof(newWord); i++)
    {
        if (newWord[i] == '\0')
        {
            break;
        }
        hash += newWord[i];
    }
    int moddedHash = hash % 20;
    node *temporaryNode = hashtable[moddedHash];
    while (temporaryNode != NULL)
    {
        printf("current word is: %s\n", newWord);
        if (strcmp(temporaryNode->word, newWord) == 0)
        {
            printf("word match was: %s\n", newWord);
            return true;
        }
        temporaryNode = temporaryNode->next;
    }
    return false;
}

// Loads dictionary into memory, returning true if successful else false
bool load(const char *dictionary)
{
    // Start Hashtable values at NULL
    for (int i = 0; i < 20; i++)
    {
        hashtable[i] = NULL;
    }

    FILE *file = fopen(dictionary, "r");
    char currentWord[LENGTH + 1];
    while (fscanf(file, "%s", currentWord) != EOF)
    {

        // create new node and make sure there is enough memory
        node *new_node = malloc(sizeof(node));
        if (new_node == NULL)
        {
            unload();
            return false;
        }

        // Setup new node
        strcpy(new_node->word, currentWord);
        new_node->next = NULL;

        // Get hash for the word
        int hash = 0;
        for (int i = 0; i < sizeof(currentWord); i++)
        {
            if (currentWord[i] == '\0')
            {
                break;
            }
            hash += currentWord[i];
        }
        int moddedHash = hash % 20;
        printf("currentWord: %s hash:%i\n", currentWord, moddedHash);
        // put new node in hashtable
        if (hashtable[moddedHash] == NULL)
        {
            hashtable[moddedHash] = new_node;
            printf("word: %s added at hash: %i\n", hashtable[moddedHash]->word, moddedHash);
        }
        else
        {
            node *temp_node = malloc(sizeof(node));
            if (temp_node == NULL)
            {
                unload();
                return false;
            }
            temp_node = hashtable[moddedHash];
            while (temp_node->next != NULL)
            {
                temp_node = temp_node->next;
            }
            temp_node->next = new_node;
            printf("first word: %s not first word in hash: %s added at hash: %i\n", hashtable[moddedHash]->word, hashtable[moddedHash]->next->word, moddedHash);
            free(temp_node);
        }
    }
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
    node *temp_node = malloc(sizeof(node));
    if (temp_node == NULL)
    {
        unload();
        return false;
    }
    for (int i = 0; i < 20; i++)
    {
        temp_node = hashtable[i];
        while (temp_node != NULL)
        {
            printf("word in hashtable: %s\n", temp_node->word);
            temp_node = temp_node->next;
        }
    }
    return true;
}
