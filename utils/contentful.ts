import { createClient } from 'contentful';
import { ContentfulEntry } from '../interfaces/contentful';

const apiSpace = process.env.API_CONTENTFUL_SPACE;
const apiAccessToken = process.env.API_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: apiSpace!,
  accessToken: apiAccessToken!,
});

export async function fetchEntries(content_type: string) {
  const entries = await client.getEntries<ContentfulEntry>({
    content_type,
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${content_type}.`);
  return [];
}
