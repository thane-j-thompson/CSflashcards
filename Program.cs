namespace FlashcardApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //string filePath = "C:\\SF.Flashcards\\FlashcardApp\\q-and-a.txt";
            string filePath = "q-and-a.txt";
            string[] lines = File.ReadAllLines(filePath);

            if (lines.Length % 2 != 0)
            {
                Console.WriteLine("Invalid flashcard file. Each question should have an answer.");
                return;
            }

            int currentIndex = 0;
            int currentQuestion = 1;
            string input;

            while (currentIndex < lines.Length)
            {
                string question = lines[currentIndex];
                string answer = lines[currentIndex + 1];
                Console.Clear();
                Console.WriteLine("Interview Question Flashcard App");
                Console.WriteLine("8888888888888888888888888888888888888888888888888888888888888");
                Console.WriteLine("Provide two reponse sentences and an example if applicable for each");
                Console.WriteLine("8888888888888888888888888888888888888888888888888888888888888");
                Console.WriteLine("Question " + (currentQuestion) + " of " + lines.Length/2);
                Console.WriteLine(question);
                Console.Write("See the answer? (Y/N): ");
                input = Console.ReadLine();
                Console.WriteLine("------------");
                if (input.ToUpper() == "Y")
                {
                    //Console.WriteLine("Answer:");
                    Console.WriteLine(answer);
                    Console.WriteLine("------------");
                }
                Console.WriteLine("");
                Console.WriteLine("Press Enter to continue...");
                Console.ReadLine();
                currentIndex += 2;
                currentQuestion += 1;
            }
        }
    }
}