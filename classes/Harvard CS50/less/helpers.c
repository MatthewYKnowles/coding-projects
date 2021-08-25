#include <stdio.h>
#include <cs50.h>
#include <math.h>
#include "helpers.h"

bool search(int value, int values[], int n)
{
    if (n <= 0) {
        return false;
    }
    int middlePoint = floor(n / 2);
    while (true){
        if (value == values[middlePoint]) {
            return true;
        }
        if (middlePoint == 0) {
            return false;
        }
        if (middlePoint == n-1){
            return false;
        }
        if (value < values[middlePoint]){
            middlePoint = floor(middlePoint/2);
        } else {
            middlePoint = middlePoint + ceil((n-middlePoint)/2);
        }
    }
    return false;
}

void sort(int values[], int n)
{
    for (int i = 0; i < n - 2; i++){
        int lowestNumberPosition = i;
        for (int j = i+1; j < n; j++){
            if (values[j] < values[lowestNumberPosition]){
                lowestNumberPosition = j;
            }
        }
        if (lowestNumberPosition != i) {
        int temp = values[i];
            values[i] = values[lowestNumberPosition];
            values[lowestNumberPosition] = temp;
        }
    }
    return;
}
