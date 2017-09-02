import java.util.HashMap;
import java.util.List;

public class OpticalCharacterReader {
    NumbersToOCR numbersToOCR;

    public OpticalCharacterReader() {
        numbersToOCR = new NumbersToOCR();
    }

    public String parse(List<String> ocrStream) {
        guardAgainstIllegalInput(ocrStream);
        return translateOcrStream(ocrStream);
    }

    private String translateOcrStream(List<String> ocrStream) {
        String translatedRows = "";
        int rowsOfOcrNumbers = ocrStream.size() / 4;
        for (int i = 0; i < rowsOfOcrNumbers; i++) {
            int currentOcrRowStartingIndex = i * 4;
            if (i > 0) {
                translatedRows += ",";
            }
            translatedRows += translateOneOcrRow(ocrStream.subList(currentOcrRowStartingIndex, currentOcrRowStartingIndex + 4));
        }
        return translatedRows;
    }

    private String translateOneOcrRow(List<String> ocrRows) {
        String translatedStream = "";
        int numbersInOcrStream = ocrRows.get(0).length() / 3;
        for (int ocrStreamIndex = 0; ocrStreamIndex < numbersInOcrStream; ocrStreamIndex++) {
            String ocrNumber = extractOneOcrNumber(ocrRows, ocrStreamIndex);
            translatedStream += translateOcrNumberToInteger(ocrNumber);
        }
        return translatedStream;
    }

    private String extractOneOcrNumber(List<String> ocrRows, int ocrStreamIndex) {
        int ocrNumberStartingIndex = ocrStreamIndex * 3;
        int numberOfRowsInAnOcrNumber = 4;
        String ocrNumber = "";
        for (int i = 0; i < numberOfRowsInAnOcrNumber; i++) {
            ocrNumber += ocrRows.get(i).substring(ocrNumberStartingIndex, ocrNumberStartingIndex + 3);
        }
        return ocrNumber;
    }

    private String translateOcrNumberToInteger(String ocrNumber) {
        return numbersToOCR.getNumberFromOCR(ocrNumber);
    }

    private void guardAgainstIllegalInput(List<String> strings) {
        checkForIllegalNumberOfRows(strings);
        checkForIllegalRowLength(strings);
    }

    private void checkForIllegalNumberOfRows(List<String> ocrRows) {
        if (correctOcrNumberHeight(ocrRows)) {
            throw new IllegalArgumentException("Number of input rows must be a positive multiple of 4");
        }
    }

    private void checkForIllegalRowLength(List<String> ocrRows) {
        for (String ocrRow : ocrRows) {
            if (correctOcrNumberWidth(ocrRow)) {
                throw new IllegalArgumentException("Number of input columns must be a positive multiple of 3");
            }
        }
    }

    private boolean correctOcrNumberHeight(List<String> ocrRows) {
        return ocrRows.size() % 4 != 0;
    }

    private boolean correctOcrNumberWidth(String ocrRow) {
        return ocrRow.length() % 3 != 0;
    }

    private class NumbersToOCR {
        HashMap<String, String> numbersToOCR = new HashMap<String, String>();

        public NumbersToOCR() {
            numbersToOCR.put(
                    " _ " +
                    "| |" +
                    "|_|" +
                    "   ", "0");
            numbersToOCR.put(
                    "   " +
                    "  |" +
                    "  |" +
                    "   ", "1");
            numbersToOCR.put(
                    " _ " +
                    " _|" +
                    "|_ " +
                    "   ", "2");
            numbersToOCR.put(
                    " _ " +
                    " _|" +
                    " _|" +
                    "   ", "3");
            numbersToOCR.put(
                    "   " +
                    "|_|" +
                    "  |" +
                    "   ", "4");
            numbersToOCR.put(
                    " _ " +
                    "|_ " +
                    " _|" +
                    "   ", "5");
            numbersToOCR.put(
                    " _ " +
                    "|_ " +
                    "|_|" +
                    "   ", "6");
            numbersToOCR.put(
                    " _ " +
                    "  |" +
                    "  |" +
                    "   ", "7");
            numbersToOCR.put(
                    " _ " +
                    "|_|" +
                    "|_|" +
                    "   ", "8");
            numbersToOCR.put(
                    " _ " +
                    "|_|" +
                    " _|" +
                    "   ", "9");
        }

        String getNumberFromOCR(String ocrAsAString) {
            String ocrNumber = numbersToOCR.get(ocrAsAString);
            return ocrNumber != null ? ocrNumber : "?";
        }
    }
}