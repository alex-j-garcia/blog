import { Link } from 'react-router-dom';

export default function LinksList({ list, isExternal = false }) {
  return (
    <ul>
      {list.map(({ title, urlOrPath }, index) => (
        <li key={index}>
          {isExternal ? 
            <a href={urlOrPath} target='_blank' rel='noreferrer'>{title}</a> :
            <Link to={urlOrPath}>{title}</Link>
          }
        </li>
      ))}
    </ul>
  );
}
