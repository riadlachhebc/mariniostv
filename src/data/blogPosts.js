import postsData from './blogPosts.json';

export const blogPosts = postsData;

export const getAllPosts = () => {
  return [...blogPosts].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
};

export const getPostBySlug = (slug) => {
  return blogPosts.find((post) => post.slug === slug) || null;
};

export const getRecentPosts = (limit = 3) => {
  return getAllPosts().slice(0, limit);
};
