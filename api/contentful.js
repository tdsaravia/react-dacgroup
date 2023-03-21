import { createClient } from 'contentful';

const useContentful = () => {
  const client = createClient({
    space: 'oowvels4urqz',
    accessToken: '2XUwTDdtuzckBBQsDn-JvLonl85Kj5YJL5WBUNNuW50',
    hostL: 'preview.contentful.com',
  });

  const getCarousel = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'carousel',
        select: 'fields',
      });

      const sanitizedEntries = entries.items.map((item) => {
        const image = item.fields.image.fields;

        return {
          ...item.fields,
          image,
        };
      });

      return sanitizedEntries;
    } catch (e) {
      console.log(`Error fetching carousel: ${e}`);
    }
  };
  return { getCarousel };
};

export default useContentful;
