import ExtLink from './ext-link'
import styles from '../styles/footer.module.css'

export default () => (
  <>
    <footer>
      <hr />
      <div className="footer_text">
        <p className="footer_logo">Bosako Lab.</p>
        <p>このブログはNotion Blogをカスタマイズしています。</p>
        <p>
          オリジナルは
          <a href="https://github.com/ijjk/notion-blog">ijjk/notion-blog</a>です
        </p>
      </div>
    </footer>
  </>
)
