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
            var db = client.GetDatabase("school");
            var col = db.GetCollection<BsonDocument>("students");
            Console.WriteLine(col);
            var list = await col.Find(new BsonDocument()).ToListAsync();

            //var collection = db.GetCollection<Person>("people");
            //var filter = new BsonDocument("username", "bodrum");
            //var update = Builders<Person>.Update.PullFilter("followerList",
            //    Builders<Follower>.Filter.Eq("follower", "fethiye"));
            //var result = collection.FindOneAndUpdateAsync(filter, update).Result;
            foreach (var doc in list)
            {
                var homeworkOneScore = doc["scores"][2];
                var homeworkTwoScore = doc["scores"][3];
                var lowHomework = homeworkOneScore <= homeworkTwoScore ? homeworkOneScore : homeworkTwoScore;

                var update = Builders<BsonDocument>.Update.PullFilter("scores",
                    Builders<BsonDocument>.Filter.Eq("score", lowHomework["score"]));

                var result = await col.FindOneAndUpdateAsync(doc, update);
                Console.WriteLine(result);
            }
        }
    }
}
