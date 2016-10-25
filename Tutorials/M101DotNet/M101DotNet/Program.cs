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
            MainAsync(args).Wait();
            Console.WriteLine("Press Enter");
            Console.ReadLine();
        }

        static async Task MainAsync(string[] args)
        {
            var client = new MongoClient();
            var db = client.GetDatabase("test");
            var col = db.GetCollection<BsonDocument>("people");
            var builder = Builders<BsonDocument>.Filter;
            var filter = builder.Lt("Age", 30);
            var list = await col.Find(new BsonDocument())
                .Sort(Builders<BsonDocument>.Sort.Ascending("Age").Descending("Name"))
                .Project("{Name: 1, _id: 0}")
                .ToListAsync();
            //var list = await col.Find(filter).ToListAsync();

            //var filter = new BsonDocument("Name", "Smith");
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

            //await col.Find(new BsonDocument()).ForEachAsync(doc => Console.WriteLine(doc));
            //var list = await col.Find("{ Name: 'Smith'}").ToListAsync();
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
