import java.util.HashMap;
import java.util.List;

public class OpticalCharacterReader {
    NumbersToOCR numbersToOCR;
    private final int NUMBER_OF_ROWS_IN_AN_OCR_NUMBER = 4;
    private final int NUMBER_OF_COLUMNS_IN_AN_OCR_NUMBER = 3;

    public OpticalCharacterReader() {
        numbersToOCR = new NumbersToOCR();
    }

    public String parse(List<String> ocrStream) {
        guardAgainstIllegalInput(ocrStream);
        return translateOcrStream(ocrStream);
    }

    private String translateOcrStream(List<String> ocrStream) {
        String translatedRows = "";
        int rowsOfOcrNumbers = ocrStream.size() / NUMBER_OF_ROWS_IN_AN_OCR_NUMBER;
        for (int currentRow = 0; currentRow < rowsOfOcrNumbers; currentRow++) {
            translatedRows = translateRowWithCommas(ocrStream, currentRow);
        }
        return translatedRows;
    }

    private String translateRowWithCommas(List<String> ocrStream, int currentRow) {
        int currentOcrRowStartingIndex = currentRow * NUMBER_OF_ROWS_IN_AN_OCR_NUMBER;
        String row = "";
        if (currentRow > 0) {
            row += ",";
        }
        row += translateOneOcrRow(ocrStream.subList(currentOcrRowStartingIndex, currentOcrRowStartingIndex + NUMBER_OF_ROWS_IN_AN_OCR_NUMBER));
        return row;
    }

    private String translateOneOcrRow(List<String> ocrRows) {
        String translatedStream = "";
        int numbersInOcrStream = ocrRows.get(0).length() / NUMBER_OF_COLUMNS_IN_AN_OCR_NUMBER;
        for (int ocrStreamIndex = 0; ocrStreamIndex < numbersInOcrStream; ocrStreamIndex++) {
            String ocrNumber = extractOneOcrNumber(ocrRows, ocrStreamIndex);
            translatedStream += translateOcrNumberToInteger(ocrNumber);
        }
        return translatedStream;
    }

    private String extractOneOcrNumber(List<String> ocrRows, int ocrStreamIndex) {
        int ocrNumberStartingIndex = ocrStreamIndex * NUMBER_OF_COLUMNS_IN_AN_OCR_NUMBER;
        String ocrNumber = "";
        for (int i = 0; i < NUMBER_OF_ROWS_IN_AN_OCR_NUMBER; i++) {
            ocrNumber += ocrRows.get(i).substring(ocrNumberStartingIndex, ocrNumberStartingIndex + NUMBER_OF_COLUMNS_IN_AN_OCR_NUMBER);
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
        if (illegalOcrNumberHeight(ocrRows)) {
            throw new IllegalArgumentException(
                    String.format("Number of input rows must be a positive multiple of %s", NUMBER_OF_ROWS_IN_AN_OCR_NUMBER));
        }
    }

    private void checkForIllegalRowLength(List<String> ocrRows) {
        for (String ocrRow : ocrRows) {
            if (illegalOcrNumberWidth(ocrRow)) {
                throw new IllegalArgumentException(
                        String.format("Number of input columns must be a positive multiple of %s", NUMBER_OF_COLUMNS_IN_AN_OCR_NUMBER));
            }
        }
    }

    private boolean illegalOcrNumberHeight(List<String> ocrRows) {
        return ocrRows.size() % NUMBER_OF_ROWS_IN_AN_OCR_NUMBER != 0;
    }

    private boolean illegalOcrNumberWidth(String ocrRow) {
        return ocrRow.length() % NUMBER_OF_COLUMNS_IN_AN_OCR_NUMBER != 0;
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