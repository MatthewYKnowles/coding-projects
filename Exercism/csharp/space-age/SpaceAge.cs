using System;
using System.Collections.Generic;

public class SpaceAge
{
    private readonly long _seconds;
    private readonly Dictionary<string, double> _planetOrbitInSeconds;

    public SpaceAge(long seconds)
    {
        _seconds = seconds;
        _planetOrbitInSeconds = new Dictionary<string, double>()
        {
            {"Mercury", 7600525.80},
            {"Venus", 19411026.17},
            {"Earth", 31557600.00},
            {"Mars", 59359776.78},
            {"Jupiter", 374222565.14},
            {"Saturn", 928792569.65},
            {"Uranus", 2652994591.73},
            {"Neptune", 5196280668.35}
        };
    }

    public double OnMercury()
    {
        return AgeOfObjectOnPlanetWithTwoDigits("Mercury");
    }

    public double OnVenus()
    {
        return AgeOfObjectOnPlanetWithTwoDigits("Venus");
    }

    public double OnEarth()
    {
        return AgeOfObjectOnPlanetWithTwoDigits("Earth");
    }

    public double OnMars()
    {
        return AgeOfObjectOnPlanetWithTwoDigits("Mars");
    }

    public double OnJupiter()
    {
        return AgeOfObjectOnPlanetWithTwoDigits("Jupiter");
    }

    public double OnSaturn()
    {
        return AgeOfObjectOnPlanetWithTwoDigits("Saturn");
    }

    public double OnUranus()
    {
        return AgeOfObjectOnPlanetWithTwoDigits("Uranus");
    }

    public double OnNeptune()
    {
        return AgeOfObjectOnPlanetWithTwoDigits("Neptune");
    }


    private double AgeOfObjectOnPlanetWithTwoDigits(string planet)
    {
        return Math.Round(AgeOfObjectOnPlanet(planet) * 100) / 100;
    }

    private double AgeOfObjectOnPlanet(string planet)
    {
        return _seconds / _planetOrbitInSeconds[planet];
    }
}