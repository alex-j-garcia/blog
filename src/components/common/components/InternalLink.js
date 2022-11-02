import { Link } from 'react-router-dom';

export default function InternalLink({ link }) {
  return <Link to={link.urlOrPath}>{link.title}</Link>;
}
