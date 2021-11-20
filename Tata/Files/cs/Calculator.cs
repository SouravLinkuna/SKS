using TataShared;
using Terrasoft.Core.Factories;

namespace Tata.Files.cs
{
    [DefaultBinding (typeof(ICalculator))]
    public class Calculator : ICalculator
    {
        public int Add(int a, int b)
        {
            return a + b;
        }
        public int Sub(int a, int b)
        {
            return a - b;
        }
    }
}
