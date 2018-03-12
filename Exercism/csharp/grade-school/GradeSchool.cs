using System;
using System.Collections.Generic;
using System.Linq;

public class School
{
    private List<Student> students = new List<Student>();
    public void Add(string student, int grade)
    {
        students.Add(new Student(){Name = student, Grade = grade});
    }

    public IEnumerable<string> Roster()
    {
        return students.OrderBy(x => x.Grade).ThenBy(x => x.Name).Select(x => x.Name);
    }

    public IEnumerable<string> Grade(int grade)
    {
        return students.Where(x => x.Grade == grade).OrderBy(x => x.Name).Select(x => x.Name);
    }
}

class Student
{
    public string Name { get; set; }
    public int Grade { get; set; }
}