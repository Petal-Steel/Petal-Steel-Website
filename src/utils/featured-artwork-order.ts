const featuredArtworkOrder = ['a-new-dance', 'big-iron', 'loot', 'big-dreams'];

const orderIndex = new Map(featuredArtworkOrder.map((slug, index) => [slug, index]));

export function orderFeaturedArtworks<T extends { id: string; data: { slug: string } }>(artworks: T[]): T[] {
  return [...artworks].sort((a, b) => {
    const aIndex = orderIndex.get(a.data.slug) ?? Number.MAX_SAFE_INTEGER;
    const bIndex = orderIndex.get(b.data.slug) ?? Number.MAX_SAFE_INTEGER;
    return aIndex === bIndex ? a.id.localeCompare(b.id) : aIndex - bIndex;
  });
}
