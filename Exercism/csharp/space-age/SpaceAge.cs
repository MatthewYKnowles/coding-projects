using System;

public class SpaceAge
{
    private readonly long _seconds;

    public SpaceAge(long seconds)
    {
        _seconds = seconds;
    }

    public double OnMercury()
    {
        return GetSpaceAge("Mercury");
    }

    public double OnVenus()
    {
        return GetSpaceAge("Venus");
    }

    public double OnEarth()
    {
        return GetSpaceAge("Earth");
    }

    public double OnMars()
    {
        return GetSpaceAge("Mars");
    }

    public double OnJupiter()
    {
        return GetSpaceAge("Jupiter");
    }

    public double OnSaturn()
    {
        return GetSpaceAge("Saturn");
    }

    public double OnUranus()
    {
        return GetSpaceAge("Uranus");
    }

    public double OnNeptune()
    {
        return GetSpaceAge("Neptune");
    }

    private double GetSpaceAge(string planetName)
    {
        double ageOfObjectOnPlanet = PlanetFactory.GetPlanet(planetName)
            .CalculateAgeOfObject(_seconds);
        return RoundToTwoDigits(ageOfObjectOnPlanet);
    }

    public double RoundToTwoDigits(double number)
    {
        return Math.Round(number * 100) / 100;
    }
}

public abstract class Planet
{
    protected double OrbitInSeconds;

    public double CalculateAgeOfObject(long seconds)
    {
        return seconds / OrbitInSeconds;
    }
}

public class Mercury : Planet
{
    public Mercury()
    {
        OrbitInSeconds = 7600525;
    }
}

public class Venus : Planet
{
    public Venus()
    {
        OrbitInSeconds = 19411026;
    }
}

public class Earth : Planet
{
    public Earth()
    {
        OrbitInSeconds = 31557600;
    }
}

public class Mars : Planet
{
    public Mars()
    {
        OrbitInSeconds = 59359776;
    }
}

public class Jupiter : Planet
{
    public Jupiter()
    {
        OrbitInSeconds = 374222565;
    }
}

public class Saturn : Planet
{
    public Saturn()
    {
        OrbitInSeconds = 928792569;
    }
}

public class Uranus : Planet
{
    public Uranus()
    {
        OrbitInSeconds = 2652994591;
    }
}

public class Neptune : Planet
{
    public Neptune()
    {
        OrbitInSeconds = 5196280668;
    }
}

public static class PlanetFactory
{
    public static Planet GetPlanet(string planetName)
    {
        if (planetName == "Mercury")
        {
            return new Mercury();
        }
        if (planetName == "Venus")
        {
            return new Venus();
        }
        if (planetName == "Earth")
        {
            return new Earth();
        }
        if (planetName == "Mars")
        {
            return new Mars();
        }
        if (planetName == "Jupiter")
        {
            return new Jupiter();
        }
        if (planetName == "Saturn")
        {
            return new Saturn();
        }
        if (planetName == "Uranus")
        {
            return new Uranus();
        }
        if (planetName == "Neptune")
        {
            return new Neptune();
        }
        return null;
    }
}