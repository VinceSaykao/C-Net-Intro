// // See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

// Console.WriteLine("The current time is " + DateTime.Now);


// // Variable 
// string aFriend = "Abdi";
// aFriend = "Maira";

// Console.WriteLine(aFriend); // Maria



// Console.WriteLine("Hello " + aFriend); // Hello Maira

// Console.WriteLine($"Hello {aFriend}"); // Hello Maira



// string firstFriend = "Maria";
// string secondFriend = "Sage";
// Console.WriteLine($"My friends are {firstFriend} and {secondFriend}"); // My friends are Maria and Sage


// Console.WriteLine($"The name {firstFriend} has {firstFriend.Length} letters."); // the name Maria has 5 letters
// Console.WriteLine($"The name {secondFriend} has {secondFriend.Length} letters."); // the name Sage has 4 letters 


// string greeting = "      Hello World!       ";
// Console.WriteLine($"[{greeting}]"); // [      Hello World!       ]


// // The Contains method returns a boolean value which tells you if the string you were searching for was found. 
// // A boolean stores either a true or a false value. When displayed as text output, they are capitalized: True and False, respectively. 
// // You'll learn more about boolean values in a later lesson.

// string songLyrics = "You say goodbye, and I say hello";
// Console.WriteLine(songLyrics.Contains("goodbye")); // True
// Console.WriteLine(songLyrics.Contains("greetings")); // False


// // conditionals 
// var rand = new Random();
// var condition = rand.NextDouble() > 0.5;

// int? x = condition ? 12 : null;

// IEnumerable<int> xs = x is null ? new List<int>() { 0, 1 } : new int[] { 2, 3 };



// namespace firstCondition
// {
//     class Program
//     {
//         static void Main(string[] args)
//         {
//             if (20 > 18)
//             {
//                 Console.WriteLine("20 is greater than 18");
//             }
//         }
//     }
// }


// conditional you input and it will compilegit  it
namespace ticketSales
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome! Tickets are $5. Please Insert Cash.");

            int cash = Convert.ToInt32(Console.ReadLine());

            if (cash < 5)
            {
                Console.WriteLine("Here is your ticket.");
            }
            else if (cash == 5)
            {
                Console.WriteLine("Here is your ticket.");
            }
            else
            {
                int change = cash - 5;
                Console.WriteLine("Here is your ticket and " + change + "dollars in change.");
            }
        }
    }
}


