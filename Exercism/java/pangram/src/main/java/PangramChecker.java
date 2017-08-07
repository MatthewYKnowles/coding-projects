class PangramChecker {

    boolean isPangram(String sentence) {
        String formattedSentence = removeSpecialCharactersAndMakeLowerCase(sentence);
        Alphabet pangramData = new Alphabet();
        return pangramData.LettersOfAlphabetNotUsedBySentence(formattedSentence).length() == 0;
    }

    private String removeSpecialCharactersAndMakeLowerCase(String input) {
        return input.replaceAll("[^A-Za-z]", "").toLowerCase();
    }
}

class Alphabet {

    private String lettersInAlphabet = "abcdefghijklmnopqrstuvwxyz";

    String LettersOfAlphabetNotUsedBySentence(String sentence) {
        while (sentenceOrAlphabetStillHaveLetters(sentence)) {
            String currentLetter = String.valueOf(sentence.charAt(0));
            lettersInAlphabet = lettersInAlphabet.replace(currentLetter, "");
            sentence = sentence.replace(currentLetter, "");
        }
        return lettersInAlphabet;
    }

    private boolean sentenceOrAlphabetStillHaveLetters(String formattedSentence) {
        return lettersInAlphabet.length() > 0 && formattedSentence.length() > 0;
    }
}
