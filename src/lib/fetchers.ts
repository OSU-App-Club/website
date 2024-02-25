import { getCollection } from "astro:content";

export async function getCategories() {
  const posts = await getCollection("blog");

  const categories = posts
    .filter((post) => !post.data.draft)
    .map((post) => post.data.category)
    .filter((category, index, self) => self.indexOf(category) === index);

  return categories;
}

export async function getPosts() {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return posts.filter((post) => !post.data.draft);
}

export async function getPostsByCategory(category: string) {
  const posts = (await getCollection("blog"))
    .filter((post) => post.data.category === category)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return posts.filter((post) => !post.data.draft);
}

export async function getGuides() {
  const guides = (await getCollection("guides"))
    .filter((guide) => guide.data.published)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return guides;
}
