import SnippetsList from '../SnippetsList/SnippetsList';
import './Snippets.css';

export default function Snippets() {
  return (
    <section className='snippets'>
      <h1>Snippets</h1>
      <p>
        I use this page like a notebook, a place where I collect pieces of code
        that stand out to me.
      </p>
      <SnippetsList />
    </section>
  );
}
