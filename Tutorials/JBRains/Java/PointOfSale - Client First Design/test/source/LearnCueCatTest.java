import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class LearnCueCatTest {
    public static void main(String[] args) throws IOException {
        try (BufferedReader stdinLineReader
                     = new BufferedReader(new InputStreamReader(System.in))) {

            stdinLineReader.lines().forEach(
                    (line) -> System.out.println(line)
            );
        }
    }
}
