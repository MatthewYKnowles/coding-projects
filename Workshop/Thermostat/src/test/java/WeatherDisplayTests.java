import org.junit.Test;
import org.w3c.dom.css.CSS2Properties;

import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class WeatherDisplayTests {
    @Test
    public void name() throws Exception {
        TemperatureSensor temperatureSensor = mock(TemperatureSensor.class);
        when(temperatureSensor.getTemperature()).thenReturn(60);
        WeatherDisplay weatherDisplay = new WeatherDisplay(temperatureSensor);
        assertThat(weatherDisplay.getDisplay(), is("It is warm outside"));
    }
}
