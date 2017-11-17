#include <stdio.h>
#include <cs50.h>
#include <math.h>

int main(void) {
    float changeOwed = -1;
    while(changeOwed < 0){
        printf("O hai! How much change is owed?\n");
        changeOwed = get_float();
    }
    changeOwed *=100;
    changeOwed = round(changeOwed);
    int coinsReturned = 0;
    while (changeOwed >= 25){
        coinsReturned++;
        changeOwed -= 25;
    }
    while (changeOwed >= 10){
        coinsReturned++;
        changeOwed -= 10;
    }
    while (changeOwed >= 5){
        coinsReturned++;
        changeOwed -= 5;
    }
    while (changeOwed >= 1){
        coinsReturned++;
        changeOwed -= 1;
    }
    printf("%i\n", coinsReturned);
    return 0;
}