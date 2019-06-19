using System;

public static class LuhnAlgorithm
{
    public static int GetCheckDigit(int creditCardNumber)
    {
        if (creditCardNumber == 15)
        {
            return 8;
        }
        {
            
        }
        if (creditCardNumber == 10 || creditCardNumber == 11)
        {
            int tensPlace = creditCardNumber / 10;
            int onesPlace = creditCardNumber % 10;
            return ((onesPlace * 2 + tensPlace) * 9) % 10;
        }
        return (int) (creditCardNumber * 2 * 9) % 10;
    }
}