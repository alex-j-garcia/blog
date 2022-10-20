import './About.css';

export default function About() {
  return (
    <section className='about'>
      <h1>Hi, I'm Alex</h1>
      <p>
        I'm a QA Engineer based out of the Southeastern United States. This
        site is used to chronicle my journey as a budding front end developer.
        I use JavaScript to build tools that are useful in my day to day.
      </p>
      <p>I don't have many socials, but you can keep up with me in limited capacity here:</p>
      <ul>
        <li>
          <a
            href='https://github.com/alex-j-garcia'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href='https://oku.club/user/losingsleep/'
            target='_blank'
            rel='noreferrer'
          >
            Oku (books I've read)
          </a>
        </li>
        <li>
          <a
            href='https://www.codewars.com/users/losingsleep'
            target='_blank'
            rel='noreferrer'
          >
            Codewars (coding challenges)
          </a>
        </li>
        <li>
          <a
            href='mailto:alexdominguez@fastmail.com'
            target='_blank'
            rel='noreferrer'
          >
            Email
          </a>
        </li>
      </ul>
    </section>
  );
}
