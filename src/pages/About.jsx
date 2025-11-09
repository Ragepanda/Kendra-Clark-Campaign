import topImg from "../assets/about-top.jpg";
import about1 from "../assets/about-1.jpg";
import about2 from "../assets/about-2.jpg";
import about3 from "../assets/about-3.jpg";
import about4 from "../assets/about-4.jpg";
import about5 from "../assets/about-5.jpg";

function About() {
  return (
    <div className="w-full h-full min-h-200 min-w-screen">
      <div
        className="w-full min-h-100 max-md:flex max-md:justify-center max-md:content-end lg:min-h-150 bg-cover bg-top 2xl:min-h-200"
        style={{ backgroundImage: `url(${topImg})` }}
      >
        <span className="font-extrabold text-5xl text-brand-blue self-start max-md:mt-10 md:relative md:left-10 md:top-40 lg:text-7xl xl:left-20 2xl:top-80 2xl:left-50 ">
          Meet Kendra
        </span>
      </div>
      <div className="bg-white rounded-3xl w-full h-auto text-xl 2xl:text-2xl 2xl:px-50">
        <div className="p-10 min-h-100 flex justify-around gap-20 items-center max-md:flex max-md:flex-col-reverse">
          <p className="m-auto">
            I am someone who has always been engaged in the community. From a
            young age, I have been driven by the idea that we each have a
            responsibility to build a better, more just world. I wrote my first
            letter to an elected official in the third grade to save our P.E.
            program and ran to be Third Grade Representative. Whether it was
            through Girl Scouts or helping at the library, my childhood was
            about learning that service to your community isn’t just a choice;
            it’s a responsibility.
          </p>
          <img className="max-lg:max-h-125 min-lg:max-h-150" src={about1}></img>
        </div>

        <div className="p-10 min-h-100 flex justify-around gap-20 max-lg:flex max-lg:flex-col items-center">
          <img className="" src={about2}></img>
          <div className="flex flex-col justify-center gap-20">
            <p>
              That sense of duty led me to social work, where I planned to help
              people one-on-one. I had an opportunity to work with foster kids,
              survivors of sexual assault, and individuals returning to our
              communities on probation and parole. But my time working within
              those systems opened my eyes to a harder truth. I saw that our
              institutions are designed to punish people for being poor, sick,
              or down on their luck.
            </p>
            <p>
              I’ll never forget the impossible choice of watching someone beg
              for rehab while being told there were no beds they could afford. I
              realized that helping individuals wasn&#39;t enough; we have to
              change the entire system. So in 2019, I quit my job with the state
              and began advocating for change from the outside. It’s also when I
              first began considering running for office.
            </p>
          </div>
        </div>

        <div className="p-10 min-h-100 flex justify-around items-center gap-20 max-md:flex max-md:flex-col-reverse">
          <div className="flex flex-col justify-center gap-20">
            <p>
              Since then, my commitment has been action. As co-chair of the
              Savannah Democratic Socialist of America, I am engaged in the
              ongoing work of building community power and mutual aid. We
              provide support to our local unions, help protect our local
              migrant communities from ICE, and stand up for our unhoused
              neighbors.
            </p>
            <p>
              I’ve fought for reproductive justice with Planned Parenthood,
              founded SheNetworks to empower women in our community, and
              organized to get out the vote. I have consistently taken to the
              streets to stand for my values: marching for Black lives, for the
              closure of the Folkston ICE Detention Center, for reproductive
              justice, and for the rights of our LGBTQ+ and trans neighbors.
              After Hurricane Helene, I founded Hostess City Mutual Aid to help
              coordinate community support.
            </p>
          </div>
          <img className="max-h-200" src={about3}></img>
        </div>

        <div className="p-10 min-h-100 flex justify-around gap-20 items-center max-md:flex max-md:flex-col">
          <img className="max-h-150" src={about4}></img>
          <p className="m-auto">
            This is the fight I am prepared to bring to the state capitol. While
            our fundamental rights are under attack from the highest levels, we
            have the power to build a state government that fights back. I am
            running to be your champion in that fight, to ensure Georgia becomes
            a shield against injustice and a leader in building a future that
            works for all of us.
          </p>
        </div>

        <div className="p-10 min-h-100 flex justify-around items-center gap-20 max-lg:flex max-lg:flex-col-reverse">
          <p className="m-auto">
            This vision is personal. I know the struggle of working multiple
            jobs to make ends meet, and I have seen how our system fails those
            who need help the most. That is why I believe so deeply in our
            collective power to create a system where no one goes bankrupt from
            medical bills, is locked up for being poor, or has to work three
            jobs just to survive. I am running to fight for a future built on
            compassion, justice, and dignity for all.
          </p>
          <img className="max-h-100" src={about5}></img>
        </div>
      </div>
    </div>
  );
}
export default About;
