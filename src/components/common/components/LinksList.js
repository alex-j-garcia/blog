import ExternalLink from './ExternalLink';
import InternalLink from './InternalLink';

export default function LinksList({ list, isExternal = false }) {
  return (
    <ul>
      {list.map((link, index) => (
        <li key={index}>
          {isExternal ? 
            <ExternalLink link={link} /> :
            <InternalLink link={link} />
          }
        </li>
      ))}
    </ul>
  );
}
