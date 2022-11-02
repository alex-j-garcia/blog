export default function ExternalLink({ link }) {
  return (
    <a 
      href={link.urlOrPath} 
      rel='noreferrer'
      target='_blank'
    >
      {link.title}
    </a>
  );
}
