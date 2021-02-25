import ExtLink from './ext-link'
import styles from '../styles/footer.module.css'

export default () => (
  <>
    <footer>
      <div className="footer_text">
        <p className="footer_logo">Bosako Lab.</p>
        <p>
          このブログは
          <a href="https://github.com/ijjk/notion-blog">Notion Blog</a>
          をカスタマイズしています
        </p>
        <p>
          -Source Code-{' '}
          <a href="https://github.com/ijjk/notion-blog">
            oshin-bosako/notion-blog-customized
          </a>
        </p>
      </div>
    </footer>
  </>
)
