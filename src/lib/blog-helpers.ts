export const getBlogLink = (slug: string) => {
  return `/blog/${slug}`
}

export const getTagLink = (tag: string) => {
  return `/blog/tag/${tag}`
}

export const getTagName = (tag: string) => {
  var tagName: string = `${tag}`
  switch (tag) {
    case 'notionBlog':
      tagName = '📒NotionBlog'
      break
    case 'python':
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
    case 'raspi-post':
      tagName = '📣ラズパイから発信しよう'
      break
    case 'emailnotification':
      tagName = '📬Eメール通知プログラム'
      break
    case 'minecraft':
      tagName = '🗺️Minecraft'
      break
    case 'parenting':
      tagName = '✍️子育て'
  }
  return tagName
}

export const getDateStr = (date) => {
  return new Date(date).toLocaleString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

export const getUpdateStr = (date) => {
  return new Date(date).toLocaleString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

export const postIsPublished = (post: any) => {
  return post.Published === 'Yes'
}

export const normalizeSlug = (slug) => {
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
