import './About.css';

export default function About() {
  return (
    <>
      <section className='about'>
        <h1>Hi, I'm Alex</h1>
        <p>
          I'm a QA Engineer based out of the Southeastern United States. This
          site is used to chronicle my journey as a budding front end developer.
          I use JavaScript to build tools that are useful in my day to day.
        </p>
        <p>I don't have many socials, but you can keep up with me in limited capacity here:</p>
        <ul>
          {LINKS.map((link, index) => (
            <li key={index}>
              <a href={link.url} target='_blank' rel='noreferrer'>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className='recent-articles'>
        <h2>Recent Articles</h2>
      </section>
    </>
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
