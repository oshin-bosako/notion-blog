export const getBlogLink = (slug: string) => {
  return `/blog/${slug}`
}

export const getTagLink = (tag: string) => {
  return `/blog/tag/${tag}`
}

export const getTagName = (tag: string) => {
  var tagName: string = `/blog/tag/${tag}`
  switch (tag) {
    case 'notionBlog':
      tagName = '📒Notion'
      break
    case 'Python':
      tagName = '🐍Python'
      break
    case 'profile':
      tagName = '👩🏻Profile'
      break
    case 'controlPanel':
      tagName = '🔧制御盤'
      break
    case 'raspberryPi':
      tagName = '🍓Raspberry Pi'
      break
    case 'work':
      tagName = '⛑️仕事の話'
      break
  }
  return tagName
}

export const getDateStr = date => {
  return new Date(date).toLocaleString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

export const postIsPublished = (post: any) => {
  return post.Published === 'Yes'
}

export const normalizeSlug = slug => {
  if (typeof slug !== 'string') return slug

  let startingSlash = slug.startsWith('/')
  let endingSlash = slug.endsWith('/')

  if (startingSlash) {
    slug = slug.substr(1)
  }
  if (endingSlash) {
    slug = slug.substr(0, slug.length - 1)
  }
  return startingSlash || endingSlash ? normalizeSlug(slug) : slug
}
