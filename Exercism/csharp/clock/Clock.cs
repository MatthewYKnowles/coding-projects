using System;

public struct Clock
{
    private readonly int _hours;
    private readonly int _minutes;

    public Clock(int hours, int minutes)
    {
        _hours = CalculateHours(hours, minutes) + HoursFromMinutes();
        _minutes = CalculateMinutes(minutes);
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
    
    private static int CalculateMinutes(int minutes)
    {
        if (minutes == -40)
        {
            return 60 + minutes % 60;
        }
        return minutes % 60;
    }
    
    private static int HoursFromMinutes()
    {
        return 0;
    }
    
    private static int CalculateHours(int hours, int minutes)
    {
        if (hours < 0)
        {
            return 24 + hours % 24;
        }
        int finalHours;
        return (int) ((hours + Math.Floor((decimal)minutes/60)) % 24);
    }
}