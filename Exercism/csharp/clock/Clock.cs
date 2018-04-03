using System;

public struct Clock
{
    private readonly int _hours;
    private readonly int _minutes;

    public Clock(int hours, int minutes)
    {
        _hours = calculateHours(hours, minutes);
        _minutes = minutes % 60;
    }

    public int Hours
    {
        get
        {
            throw new NotImplementedException("You need to implement this function.");
        }
    }

    public int Minutes
    {
        get
        {
            throw new NotImplementedException("You need to implement this function.");
        }
    }

    public Clock Add(int minutesToAdd)
    {
        throw new NotImplementedException("You need to implement this function.");
    }

    public Clock Subtract(int minutesToSubtract)
    {
        throw new NotImplementedException("You need to implement this function.");
    }

    public override string ToString()
    {
        string hours = _hours.ToString();
        string minutes;
        if (_hours < 10)
        {
            hours = "0" + _hours;
        }

        if (_minutes < 10)
        {
            minutes = "0" + _minutes;
        }
        else
        {
            minutes = _minutes.ToString();
        }
        return $"{hours}:{minutes}";
    }
    
    private static int calculateHours(int hours, int minutes)
    {
        int finalHours
        return (int) ((hours + Math.Floor((decimal)minutes/60)) % 24);
    }
}