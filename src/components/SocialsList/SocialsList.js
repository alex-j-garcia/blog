export default function SocialsList() {
  return (
    <ul>
      {LINKS.map((link, index) => (
        <li key={index}>
          <a href={link.url} target='_blank' rel='noreferrer'>{link.name}</a>
        </li>
      ))}
    </ul>
  );
}

const LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/alex-j-garcia'
  },
  {
    name: `Oku (books I've read)`,
    url: 'https://oku.club/user/losingsleep/'
  },
  {
    name: 'Codewars (coding challenges)',
    url: 'https://www.codewars.com/users/losingsleep'
  },
  {
    name: 'Email',
    url: 'mailto:alexdominguez@fastmail.com'
  },
]
