using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;

namespace M101DotNet
{
    class student
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
            var db = client.GetDatabase("students");
            var col = db.GetCollection<BsonDocument>("grades");
            var list = await col.Find(new BsonDocument("type", "homework"))
                .Sort(Builders<BsonDocument>.Sort.Ascending("student_id").Descending("scores"))
                .ToListAsync();
            var lastStudentId = -1;
            foreach (var doc in list)
            {
                if (doc["student_id"] != lastStudentId)
                {
                    col.DeleteOne(doc);
                }
                lastStudentId = doc["student_id"].ToInt32();
            }
        }
    }
}
