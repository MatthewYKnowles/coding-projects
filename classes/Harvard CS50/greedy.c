#include <stdio.h>
#include <cs50.h>

int main(void) {
    int levelsToJump = -1;
    while(levelsToJump < 0 || levelsToJump > 23){
    printf("Height:");
    levelsToJump = get_int();
    }
    for(int i = 0; i < levelsToJump; i++) {
        for(int k = 0; k < levelsToJump - 1 -i; k++){
            printf(" ");
        }
        for(int j = 0; j < i+2; j++) {
            printf("#");
        }
        printf("\n");
    }
    return 0;
}