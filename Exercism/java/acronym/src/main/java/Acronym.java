class Acronym {

    private String phrase;

    public Acronym(String phrase) {
        this.phrase = phrase;
    }

    String get() {
        String[] phraseWords = getWordsSeperatedBySpacesOrHyphens();
        String acronym = "";
        for (String word : phraseWords) {
            acronym += word.substring(0, 1);
        }
        return acronym.toUpperCase();
    }

    private String[] getWordsSeperatedBySpacesOrHyphens() {
        return phrase.split(" |-");
    }

}
