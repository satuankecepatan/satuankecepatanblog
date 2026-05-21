import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import markedKatex from 'marked-katex-extension';

marked.use(markedKatex({
  throwOnError: false,
  nonStandard: true,
}));

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostData {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  coverImage?: string;
  contentHtml?: string;
}

export function getSortedPostsData(): PostData[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title || '',
        date: matterResult.data.date || '',
        excerpt: matterResult.data.excerpt || '',
        category: matterResult.data.category || 'General',
        coverImage: matterResult.data.coverImage || '',
      } as PostData;
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else if (a.date > b.date) {
      return -1;
    } else {
      return 0;
    }
  });
}

export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`);
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  
  // Use marked to parse the markdown body synchronously or asynchronously
  const contentHtml = await marked.parse(matterResult.content);

  return {
    slug,
    contentHtml,
    title: matterResult.data.title || '',
    date: matterResult.data.date || '',
    excerpt: matterResult.data.excerpt || '',
    category: matterResult.data.category || 'General',
    coverImage: matterResult.data.coverImage || '',
  } as PostData;
}
