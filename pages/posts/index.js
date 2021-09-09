import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "my-coding-experience",
    title: "My coding journey",
    image: "my-coding-experience.jpg",
    excerpt: "know",
    date: "2020-02-10",
  },
  {
    slug: "is-running-healthy",
    title: "Is Running really healthy?",
    image: "is-running-healthy.jpg",
    excerpt: "know",
    date: "2020-02-10",
  },
  {
    slug: "my-way-to-elbrus",
    title: "My way to elbrus",
    image: "my-way-to-elbrus.jpg",
    excerpt: "what",
    date: "2020-02-10",
  },
  {
    slug: "my-way-to-elbrus",
    title: "My way to elbrus",
    image: "my-way-to-elbrus.jpg",
    excerpt: "what",
    date: "2020-02-10",
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
