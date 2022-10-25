import './Snippets.css';

export default function Snippets() {
  return (
    <>
      <h1>Snippets</h1>
      <p>
        I use this page like a notebook, a place where I collect pieces of code that stand out to me.
      </p>
      <section className='snippets'>
        {SNIPPETS.map(({ heading, description, code }) => (
          <div>
            <h2>{heading}</h2>
            <p>{description}</p>
            <pre>
              <code>{code}</code>
            </pre>
          </div>
        ))}
      </section>
    </>
  );
}

const SNIPPETS = [
  {
    heading: 'replace',
    description: `I rarely perform string manipulation and I work with regular expressions even less. I find both APIs clunky. Here's a reminder that a function can be passed to the replace method, which will be invoked on every match and whose return value will be used as a replacement value in the original string.`,
    code: `
      const regex = /[-_][a-z]/gi;
      const string = 'camel-case-me';

      console.log(string.replace(
        regex,
        match => match.slice(1).toUpperCase()
      )) // 'camelCaseMe'
    `,
  },
];
