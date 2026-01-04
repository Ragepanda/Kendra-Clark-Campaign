import cityBackgroundImage from "../assets/city-background.png";
import homeImage1 from "../assets/home-photo-2.jpg";
import kendraHeadshot from "../assets/kendra-transparent.png";
import campaignLogoMini from "../assets/campaign-logo-mini.png";
import GeorgiaHouse165Map from "../components/GeorgiaHouse165Map";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      {/* Banner Area */}
      <section
        style={{ backgroundImage: `url(${cityBackgroundImage})` }}
        className={`bg-cover bg-center bg-brand-blue/25 bg-blend-overlay w-full flex justify-center items-end flex-wrap h-auto md:h-auto md:aspect-5/2 lg:aspect-3/1`}
      >
        <img
          className="w-120 max-h-full md:max-w-6/12 lg:w-auto"
          src={kendraHeadshot}
        />
        <div className="w-120 md:w-3/12 max-h-10/12 min-w-64 flex flex-col pb-4 self-center">
          <h3 className="rounded-lg border-2 border-white backdrop-blur-lg p-4 text-3xl lg:text-4xl xl:text-5xl text-gray-200 font-bold">
            Creating a Georgia that Works for the Many, Not the Few.
          </h3>
          <div className="w-full min-h-15 max-h-15 flex justify-around md:justify-between lg:justify-around pt-2">
            <a
              href="https://secure.actblue.com/donate/votekendraclark"
              className="w-5/12"
            >
              <button className="rounded-lg bg-brand-white text-brand-green hover:bg-brand-green hover:text-brand-white w-full min-w-30 h-full font-bold">
                Donate
              </button>
            </a>
            <a
              href="https://docs.google.com/forms/d/1tkkknR45prWpMQyrkJEw6T0HNxIPWzDgMXAcMVNW1Wk/edit"
              className="w-5/12"
            >
              <button className="rounded-lg bg-brand-green text-brand-white hover:bg-brand-white hover:text-brand-green w-full min-w-30 h-full font-bold">
                Volunteer
              </button>
            </a>
          </div>
        </div>
      </section>
      {/*Info Cards */}
      <section className="flex flex-col gap-4 py-16 pb-32 px-4 lg:flex-row w-full justify-center align-middle">
        <img
          src={homeImage1}
          className="w-full lg:w-11/24 lg:max-w-11/24 h-auto max-h-200  object-cover object-[75%_50%] rounded-2xl grow"
        ></img>
        <div className="w-full lg:w-3/4 p-4 px-8 pb-0 bg-brand-white flex flex-col justify-center border-4 border-brand-blue max-w-200 relative self-center">
          <div className="w-1/2 bg-brand-orange text-white absolute -bottom-15 -left-3 md:-left-10 text-sm sm:text-base lg:text-xl p-4">
            <p className="text-center font-bold">
              Join the fight to create a Georgia that works for the many, not
              just the few!
            </p>
          </div>
          <img className="h-24 self-center" src={campaignLogoMini} />
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue pb-6 flex justify-center gap-4">
            <span className="text-brand-orange">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                height="40"
                width="40"
                className="text-4xl fill-current"
              >
                <polygon points="50 5 61 38 95 38 67 58 78 91 50 70 22 91 33 58 5 38 39 38" />
              </svg>
            </span>
            <span className="font-extrabold">I WILL FIGHT FOR</span>
            <span className="text-brand-orange">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                height="40"
                width="40"
                className="text-4xl fill-current"
              >
                <polygon points="50 5 61 38 95 38 67 58 78 91 50 70 22 91 33 58 5 38 39 38" />
              </svg>
            </span>
          </h2>
          <div className="flex justify-center">
            <div className="flex flex-col gap-8 w-1/2 justify-between pb-24">
              <div className="flex">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    height="32"
                    width="32"
                  >
                    <circle
                      cx="128"
                      cy="128"
                      r="96"
                      fill="none"
                      stroke="#66BB6A"
                      stroke-width="18"
                    />

                    <path
                      d="M78 132 C90 150, 104 168, 118 184 C140 150, 170 104, 198 72"
                      fill="none"
                      stroke="#FF7043"
                      stroke-width="20"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-brand-green text-xl md:text-2xl font-extrabold pl-2">
                  {"  "}
                  Lower Rent Costs
                </span>
              </div>

              <div className="flex">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    height="32"
                    width="32"
                  >
                    <circle
                      cx="128"
                      cy="128"
                      r="96"
                      fill="none"
                      stroke="#66BB6A"
                      stroke-width="18"
                    />

                    <path
                      d="M78 132 C90 150, 104 168, 118 184 C140 150, 170 104, 198 72"
                      fill="none"
                      stroke="#FF7043"
                      stroke-width="20"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-brand-green text-xl md:text-2xl font-extrabold pl-2">
                  {"  "}
                  Fully Funded Schools
                </span>
              </div>

              <div className="flex">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    height="32"
                    width="32"
                  >
                    <circle
                      cx="128"
                      cy="128"
                      r="96"
                      fill="none"
                      stroke="#66BB6A"
                      stroke-width="18"
                    />

                    <path
                      d="M78 132 C90 150, 104 168, 118 184 C140 150, 170 104, 198 72"
                      fill="none"
                      stroke="#FF7043"
                      stroke-width="20"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-brand-green text-xl md:text-2xl font-extrabold pl-2">
                  {"  "}
                  No Cost Childcare
                </span>
              </div>

              <div className="flex">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    height="32"
                    width="32"
                  >
                    <circle
                      cx="128"
                      cy="128"
                      r="96"
                      fill="none"
                      stroke="#66BB6A"
                      stroke-width="18"
                    />

                    <path
                      d="M78 132 C90 150, 104 168, 118 184 C140 150, 170 104, 198 72"
                      fill="none"
                      stroke="#FF7043"
                      stroke-width="20"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-brand-green text-xl md:text-2xl font-extrabold pl-2">
                  {"  "}
                  Raising the Minimum Wage
                </span>
              </div>
            </div>
            <div className="flex flex-col w-1/2 gap-8 justify-between">
              <div className="flex">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    height="32"
                    width="32"
                  >
                    <circle
                      cx="128"
                      cy="128"
                      r="96"
                      fill="none"
                      stroke="#66BB6A"
                      stroke-width="18"
                    />

                    <path
                      d="M78 132 C90 150, 104 168, 118 184 C140 150, 170 104, 198 72"
                      fill="none"
                      stroke="#FF7043"
                      stroke-width="20"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-brand-green text-xl md:text-2xl font-extrabold pl-2">
                  {"  "}
                  Expanding Access to Quality, Affordable Healthcare
                </span>
              </div>

              <div className="flex">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    height="32"
                    width="32"
                  >
                    <circle
                      cx="128"
                      cy="128"
                      r="96"
                      fill="none"
                      stroke="#66BB6A"
                      stroke-width="18"
                    />

                    <path
                      d="M78 132 C90 150, 104 168, 118 184 C140 150, 170 104, 198 72"
                      fill="none"
                      stroke="#FF7043"
                      stroke-width="20"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-brand-green text-xl md:text-2xl font-extrabold pl-2">
                  {"  "}
                  Ensuring Homes are Owned By Families, Not Corporations
                </span>
              </div>
              <img src={kendraHeadshot} />
            </div>
          </div>
        </div>
        {/* <div className="bg-amber-200 w-full md:w-4/10 md:min-w-4/10"></div>
        <img
          src={stockImage2}
          className="w-full md:w-4/10 md:min-w-4/10 rounded-2xl"
        ></img> */}
      </section>
      <section
        style={{ backgroundImage: `url(${cityBackgroundImage})` }}
        className={`bg-cover bg-center w-full flex justify-center items-center gap-8 h-auto p-16 md:h-120 md:aspect-5/2 lg:aspect-3/1 lg:min-h-112`}
      >
        <div className="bg-brand-white max-w-full rounded-3xl p-8 flex flex-col gap-4">
          <h2 className="text-brand-green text-3xl font-extrabold">Donate</h2>
          <p className="text-xl">
            Donate today and join the movement to create a Georgia that works
            for all!
          </p>
          <div className="flex gap-2 flex-wrap justify-center align-middle text-xl">
            <a
              className="w-5/12 h-15"
              href="https://secure.actblue.com/donate/votekendraclark?amount=25"
            >
              <button className="bg-brand-blue text-brand-white hover:bg-brand-white hover:text-brand-blue rounded-3xl w-full h-full hover:border-4 hover:border-brand-blue">
                $25
              </button>
            </a>
            <a
              className="w-5/12 h-15"
              href="https://secure.actblue.com/donate/votekendraclark?amount=50"
            >
              <button className="bg-brand-blue text-brand-white hover:bg-brand-white hover:text-brand-blue rounded-3xl w-full h-full hover:border-4 hover:border-brand-blue">
                $50
              </button>
            </a>
            <a
              className="w-5/12 h-15"
              href="https://secure.actblue.com/donate/votekendraclark?amount=100"
            >
              <button className="bg-brand-blue text-brand-white hover:bg-brand-white hover:text-brand-blue rounded-3xl w-full h-full hover:border-4 hover:border-brand-blue">
                $100
              </button>
            </a>
            <a
              className="w-5/12 h-15"
              href="https://secure.actblue.com/donate/votekendraclark?amount=250"
            >
              <button className="bg-brand-blue text-brand-white hover:bg-brand-white hover:text-brand-blue rounded-3xl w-full h-full hover:border-4 hover:border-brand-blue">
                $250
              </button>
            </a>
            <a
              className="w-10/12 h-15"
              href="https://secure.actblue.com/donate/votekendraclark"
            >
              <button className="bg-brand-white text-brand-blue hover:bg-brand-blue hover:text-brand-white px-1 w-full h-full rounded-3xl border-4 border-brand-blue">
                Other Amount
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center p-8 w-full h-auto">
        <div className="w-11/12 min-h-50 md:h-100 bg-brand-liteblue rounded-t-2xl md:rounded-l-2xl md:rounded-t-none p-8 text-brand-white flex flex-col justify-center">
          <h2 className="font-bold text-4xl">The Fight for District 165</h2>
          <p className="pt-4 text-xl">
            <span className="font-bold">Are you in District 165?</span> Our
            district includes the Skidaway, Truman Parkway, Dutch Island, Carver
            Heights, West Savannah and Isle of Hope neighborhoods.
          </p>
        </div>
        <div className="w-11/12 min-h-100 h-100 rounded-2xl z-0">
          <GeorgiaHouse165Map />
        </div>
      </section>
    </div>
  );
}

export default Home;
