import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'
import blogStyles from '../styles/blog.module.css'

import {
  getBlogLink,
  getDateStr,
  postIsPublished,
  getTagLink,
} from '../lib/blog-helpers'
import { textBlock } from '../lib/notion/renderers'
import getNotionUsers from '../lib/notion/getNotionUsers'
import getBlogIndex from '../lib/notion/getBlogIndex'

export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex()

  const authorsToGet: Set<string> = new Set()
  let allTags: string[] = []
  const posts: any[] = Object.keys(postsTable)
    .map(slug => {
      const post = postsTable[slug]
      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null
      }
      post.Authors = post.Authors || []
      for (const author of post.Authors) {
        authorsToGet.add(author)
      }
      allTags = allTags.concat(post.Tags)
      return post
    })
    .filter(Boolean)

  allTags = allTags.filter((tag, index, orig) => orig.indexOf(tag) === index)
  const { users } = await getNotionUsers([...authorsToGet])

  posts.map(post => {
    post.Authors = post.Authors.map(id => users[id].full_name)
  })

  return {
    props: {
      preview: preview || false,
      posts,
      allTags,
    },
    unstable_revalidate: 10,
  }
}

export default ({ posts = [], allTags = [], preview }) => {
  return (
    <>
      <Header titlePre="Home" />
      <div className="home_title">
        <img src="/pic.jpg" height="85" width="250" alt="ferrules" />
        <h1>Bosako Lab</h1>
        <h2>Try everything :)</h2>
      </div>

      <div className={`${sharedStyles.layout} ${blogStyles.blogIndex}`}>
        <h1></h1>
        {posts.length === 0 && (
          <p className={blogStyles.noPosts}>There are no posts yet</p>
        )}
        {/*
        {posts.length > 0 && allTags.length > 0 && (
          <>
            <div className={blogStyles.tagsTitle}>Tags:</div>
            <div className={blogStyles.tags}>
              {allTags &&
                allTags.length > 0 &&
                allTags.map(tag => (
                  <Link href="/blog/tag/[tag]" as={getTagLink(tag)}>
                    <span className={blogStyles.tag}>{tag}</span>
                  </Link>
                ))}
            </div>
          </>
        )}
*/}
        {posts.map(post => {
          return (
            <div className={blogStyles.postPreview} key={post.Slug}>
              <h3>
                <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
                  <div className={blogStyles.titleContainer}>
                    {!post.Published && (
                      <span className={blogStyles.draftBadge}>Draft</span>
                    )}
                    <a>{post.Page}</a>
                  </div>
                </Link>
              </h3>
              {post.Date && (
                <span className="posted">🕒{getDateStr(post.Date)},</span>
              )}
              {post.Tags &&
                post.Tags.length > 0 &&
                post.Tags.map(tag => (
                  <Link
                    href="/blog/tag/[tag]"
                    as={getTagLink(tag)}
                    key={getTagLink(tag)}
                  >
                    <span className={blogStyles.tag}>{tag}</span>
                  </Link>
                ))}
            </div>
          )
        })}
      </div>
    </>
  )
}
