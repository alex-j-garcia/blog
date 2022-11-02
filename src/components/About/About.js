import SocialsList from './components/SocialsList';
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
        <SocialsList />
      </section>
      <section className='recent-articles'>
        <h2>Recent Articles</h2>
      </section>
    </>
  );
}
