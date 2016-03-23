using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace HFDP_Chapter_1
{
    public abstract class Duck
    {
        IFlyBehavior flyBehavior;
        IQuackBehavior quackBehavior;
        public abstract string performQuack();
        public abstract string performFly();
        public abstract string display();
        public abstract string swim();
    }

    public class MallardDuck : Duck
    {
        public override string performQuack()
        {
            throw new NotImplementedException();
        }

        public override string performFly()
        {
            throw new NotImplementedException();
        }

        public override string display()
        {
            Console.WriteLine("Mallard Duck");
        }

        public override string swim()
        {
            throw new NotImplementedException();
        }
    }

    internal interface IQuackBehavior
    {
    }

    internal interface IFlyBehavior
    {
        void fly();
    }

    public class FlyWithWings : IFlyBehavior
    {
        public void fly()
        {
            Console.WriteLine("I can fly");
        }
    }

    public class FlyNoWay : IFlyBehavior
    {
        public void fly()
        {
            Console.WriteLine("I can't fly");
        }
    }
}
