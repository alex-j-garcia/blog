import Code from '../../common/components/Code';

export default function SnippetsList() {
  return (
    <div>
      {SNIPPETS.map(({ heading, description, code }, index) => (
        <div key={index}>
          <h2>{heading}</h2>
          <p>{description}</p>
          <Code code={code} language='javascript' />
        </div>
      ))}
    </div>
  );
}

const SNIPPETS = [
  {
    heading: 'replace',
    description: `I rarely perform string manipulation and work with regular expressions even less. I find both APIs clunky. Here's a reminder that a function can be passed to the replace method, which will be invoked on every match and whose return value will be used as a replacement value in the original string.`,
    code: `
      const regex = /[-_][a-z]/gi;
      const string = 'camel-case-me';

      // 'camelCaseMe'
      console.log(string.replace(
        regex,
        match => match.slice(1).toUpperCase()
      ));
    `,
  },
];
