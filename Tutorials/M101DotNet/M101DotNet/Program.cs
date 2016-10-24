using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;

namespace M101DotNet
{
    class Program
    {
        static void Main(string[] args)
        {
            MainAsync(args).GetAwaiter().GetResult();
            Console.WriteLine();
            Console.WriteLine("Press Enter");
            Console.ReadLine();
        }

        static async Task MainAsync(string[] arg)
        {
            var connectionString = "mongodb://localhose:27017";
            var client = new MongoClient(connectionString);
            var db = client.GetDatabase("test");
            var col = db.GetCollection<BsonDocument>("people");
            //var doc = new Person
            //{
            //    Name = "Jones",
            //    Age = 24,
            //    Profession = "Hacker"
            //};
            //Console.WriteLine(doc.Id);
            //await col.InsertOneAsync(doc);
            //Console.WriteLine(doc.Id);

            //using (var cursor = await col.Find(new BsonDocument()).ToCursorAsync())
            //{
            //    while (await cursor.MoveNextAsync())
            //    {
            //        foreach (var doc in cursor.Current)
            //        {
            //         Console.WriteLine(doc);   
            //        }
            //    }

            var list = await col.Find(new BsonDocument()).ToListAsync();
            foreach (var doc in list)
            {
                Console.WriteLine(doc);
            }
        }
    }

    class Person
    {
        public ObjectId Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Profession { get; set; }
    }
}
