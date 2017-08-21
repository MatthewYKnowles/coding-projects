using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Moq;
using NUnit.Framework;

namespace Weather_Data_Mocking
{
    [TestFixture]
    public class WeatherStationTests
    {
        //Fake Tests
        [Test]
        public void ShouldUseHighTemperatureFake()
        {
            var temperatureSensor = new Mock<ITemperatureSensor>();
            temperatureSensor.Setup(x => x.GetTemperature()).Returns(80);
            IHumiditySensor humiditySensor = new FakeHighHumiditySensor();
            WeatherDisplay weatherDisplay = new WeatherDisplay(temperatureSensor.Object, humiditySensor);
            Assert.That(weatherDisplay.GetDisplayedText(), Is.EqualTo("Can't get accurate reading"));
        }

        //Stub Tests
        [Test]
        public void ShouldMakeTemperatureHot()
        {
            var temperatureSensor = new Mock<ITemperatureSensor>();
            IHumiditySensor humiditySensor = new FakeLowHumiditySensor();
            temperatureSensor.Setup(x => x.GetTemperature()).Returns(80);
            WeatherDisplay weatherDisplay = new WeatherDisplay(temperatureSensor.Object, humiditySensor);
            Assert.That(weatherDisplay.GetDisplayedText(), Is.EqualTo("It is hot outside"));
        }
        [Test]
        public void ShouldMakeTemperatureWarm()
        {
            var temperatureSensor = new Mock<ITemperatureSensor>();
            temperatureSensor.Setup(x => x.GetTemperature()).Returns(70);
            IHumiditySensor humiditySensor = new FakeLowHumiditySensor();
            WeatherDisplay weatherDisplay = new WeatherDisplay(temperatureSensor.Object, humiditySensor);
            Assert.That(weatherDisplay.GetDisplayedText(), Is.EqualTo("It is warm outside"));
        }

        [Test]
        public void ShouldMakeTemperatureCold()
        {
            var temperatureSensor = new Mock<ITemperatureSensor>();
            temperatureSensor.Setup(x => x.GetTemperature()).Returns(50);
            IHumiditySensor humiditySensor = new FakeLowHumiditySensor();
            WeatherDisplay weatherDisplay = new WeatherDisplay(temperatureSensor.Object, humiditySensor);
            Assert.That(weatherDisplay.GetDisplayedText(), Is.EqualTo("It is cold outside"));
        }

        //Spy Test
        [Test]
        public void ShouldCheckHumidty()
        {
            var temperatureSensor = new Mock<ITemperatureSensor>();
            var humiditySensor = new Mock<IHumiditySensor>();
            WeatherDisplay weatherDisplay = new WeatherDisplay(temperatureSensor.Object, humiditySensor.Object);
            weatherDisplay.GetDisplayedText();
            humiditySensor.Verify(x => x.IsHumidityTooHigh());
        }

        [Test]
        public void Mock()
        {
            var temperatureSensor = new Mock<ITemperatureSensor>(MockBehavior.Strict);
            temperatureSensor.Setup(x => x.GetTemperature()).Returns(0);
            var humiditySensor = new FakeHighHumiditySensor();
            WeatherDisplay weatherDisplay = new WeatherDisplay(temperatureSensor.Object, humiditySensor);
            weatherDisplay.GetDisplayedText();

            temperatureSensor.VerifyAll();
        }
    }

    public interface IHumiditySensor
    {
        bool IsHumidityTooHigh();
    }

    public class FakeLowHumiditySensor : IHumiditySensor
    {
        public bool IsHumidityTooHigh()
        {
            return false;
        }
    }

    public class FakeHighHumiditySensor : IHumiditySensor
    {
        public bool IsHumidityTooHigh()
        {
            return true;
        }
    }

    public interface ITemperatureSensor
    {
        int GetTemperature();
    }

    public class WeatherDisplay
    {
        private readonly ITemperatureSensor _temperatureSensor;
        private readonly IHumiditySensor _humiditySensor;

        public WeatherDisplay(ITemperatureSensor temperatureSensor, IHumiditySensor humiditySensor)
        {
            _temperatureSensor = temperatureSensor;
            _humiditySensor = humiditySensor;
        }

        public string GetDisplayedText()
        {
            if (_humiditySensor.IsHumidityTooHigh())
            {
                return "Can't get accurate reading";
            }
            if (_temperatureSensor.GetTemperature() > 75)
            {
                return "It is hot outside";
            }
            if (_temperatureSensor.GetTemperature() < 60)
            {
                return "It is cold outside";
            }
            return "It is warm outside";
        }
    }

    public class TemperatureSensor : ITemperatureSensor
    {
        public int GetTemperature()
        {
            throw new NotImplementedException();
        }
    }
}
