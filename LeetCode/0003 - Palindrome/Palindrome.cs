public class Solution {
    public bool IsPalindrome(int maybePalindrome) {
        if (maybePalindrome < 0) {
            return false;
        }
        var maybePalindromeAsString = maybePalindrome.ToString();
        var lengthOfString = maybePalindromeAsString.Length;
        for (var i = 0; i < Math.Floor((double) lengthOfString/2); i++) {
            if (maybePalindromeAsString[i] != maybePalindromeAsString[lengthOfString-i-1]) {
                return false;
            }
        }
        return true;
    }
}