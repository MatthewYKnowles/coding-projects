class PangramChecker {

    boolean isPangram(String sentence) {
        String formattedSentence = removeSpecialCharactersAndMakeLowerCase(sentence);
        return lettersOfAlphabetNotUsedBySentence(formattedSentence).length() == 0;
    }

    private String removeSpecialCharactersAndMakeLowerCase(String input) {
        return input.replaceAll("[^A-Za-z]", "").toLowerCase();
    }

    private String lettersOfAlphabetNotUsedBySentence(String sentence) {
        String lettersInAlphabet = "abcdefghijklmnopqrstuvwxyz";
        while (sentenceOrAlphabetStillHaveLetters(sentence, lettersInAlphabet)) {
            String currentLetter = String.valueOf(sentence.charAt(0));
            lettersInAlphabet = lettersInAlphabet.replace(currentLetter, "");
            sentence = sentence.replace(currentLetter, "");
        }
        return lettersInAlphabet;
    }

    private boolean sentenceOrAlphabetStillHaveLetters(String sentenceRemaining, String alphabetRemaining) {
        return alphabetRemaining.length() > 0 && sentenceRemaining.length() > 0;
    }
}