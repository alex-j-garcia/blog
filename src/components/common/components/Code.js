import { useEffect } from 'react';

export default function Code({ code, language }) {
  useEffect(() => {
    if (window.Prism) {
      window.Prism.highlightAll();
    }
  }, []);

  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
