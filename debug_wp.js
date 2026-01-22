
const url = 'https://public-api.wordpress.com/wp/v2/sites/dependablejellyfish.wordpress.com/posts?_embed&per_page=20';

async function fetchPosts() {
  try {
    console.log('Fetching from:', url);
    const res = await fetch(url);
    if (!res.ok) {
        console.error('Failed to fetch', res.status, res.statusText);
        return;
    }
    const posts = await res.json();
    console.log('Number of posts found:', posts.length);
    posts.forEach((post, index) => {
        console.log(`[${index}] Title:`, post.title.rendered);
        console.log(`    Date:`, post.date);
        console.log(`    Slug:`, post.slug);
        const hasFeaturedMedia = post._embedded && post._embedded['wp:featuredmedia'];
        console.log(`    Has Featured Media (embedded):`, !!hasFeaturedMedia);
        if (hasFeaturedMedia && post._embedded['wp:featuredmedia'].length > 0) {
             console.log(`    Media Source URL:`, post._embedded['wp:featuredmedia'][0].source_url);
        } else {
             console.log(`    Media: No featured media embedded`);
             console.log(`    featured_media ID:`, post.featured_media);
        }
    });

  } catch (err) {
    console.error('Error:', err);
  }
}

fetchPosts();
