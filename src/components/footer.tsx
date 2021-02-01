import ExtLink from './ext-link'
import styles from '../styles/footer.module.css'

export default () => (
  <>
    <footer>
      <hr />
      <div className="footer_text">
        <p className="footer_logo">Bosako Lab.</p>
        <p>
          このブログは
          <a href="https://github.com/ijjk/notion-blog">Notion Blog</a>
          をカスタマイズしています。
        </p>
        <p></p>
      </div>
    </footer>
  </>
)
