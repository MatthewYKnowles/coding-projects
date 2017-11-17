#include <stdio.h>
#include <cs50.h>

int main(void) {
    printf("Input Shower Minutes:");
    int minutes = get_int();
    printf("Minutes: %i\n", minutes);
    printf("Bottles: %i\n", minutes * 12);
}