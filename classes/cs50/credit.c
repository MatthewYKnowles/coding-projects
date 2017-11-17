#include <stdio.h>
#include <cs50.h>
#include <math.h>

int digitsInLongLong(long long number);

int main(void) {
    long long creditCardNumber = -1;
    while(creditCardNumber < 0 || creditCardNumber > 9999999999999999){
        printf("Number: ");
            creditCardNumber = get_long_long();
    }
    int creditCardLength = digitsInLongLong(creditCardNumber);
    int numberToCheck = 0;
    for (int i = 0; i < creditCardLength; i+=2){
        numberToCheck += 
    }
        printf("CC number length %i", digitsInLongLong(creditCardNumber));
    return 0;
}

int digitsInLongLong(long long number) {
    if (number == 0) return 1;
    return floor (log10 (llabs (number))) + 1;
}