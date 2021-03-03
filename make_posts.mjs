import faker from "faker";
import fs from "fs";

faker.seed(1);

const posts = [];

for (let i = 1; i <= 10; i++) {
  posts.push({
    id: i,
    title: faker.name.title(),
    body: faker.lorem.paragraphs(),
  });
}

fs.writeFileSync("./lib/posts.json", JSON.stringify(posts, null, 2));
