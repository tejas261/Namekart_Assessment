import React, { useState } from "react";
// import linkedin from "./assets/linkedin-icon.png";
import twitter from "./assets/twitter-icon.png";
import fb from "./assets/facebook-icon.png";
import insta from "./assets/instagram-icon.png";
import axios from "axios";
import { RevolvingDot } from "react-loader-spinner";

interface FbData {
  url: string;
  name: string;
  followers: string;
  following: string;
}
interface InstaData {
  url: string;
  name: string;
  posts: string;
  username: string;
  followers: string;
  following: string;
}
const App: React.FC = () => {
  const [loadingFb, setLoadingFb] = useState(false);
  const [loadingInsta, setLoadingInsta] = useState(false);
  const [loadingTwitter, setLoadingTwitter] = useState(false);

  const [fburl, setFbUrl] = useState("");
  const [fbdata, setFbData] = useState<FbData>({
    url: "",
    name: "",
    followers: "",
    following: "",
  });

  const [instaurl, setInstaUrl] = useState("");
  const [instaData, setInstaData] = useState<InstaData>({
    url: "",
    name: "",
    posts: "",
    username: "",
    followers: "",
    following: "",
  });

  const [twitterurl, setTwitterUrl] = useState("");
  const [twitterData, setTwitterData] = useState<InstaData>({
    url: "",
    name: "",
    posts: "",
    username: "",
    followers: "",
    following: "",
  });

  // const [linkedinurl, setLinkedinUrl] = useState("");
  // const [linkedinData,setLinkedinData] = useState({})

  async function sendFbUrl(e: { preventDefault: () => void }) {
    e.preventDefault();
    setLoadingFb(true);
    const res = await axios.post("https://namekart-assessment.onrender.com/fb", { fburl });
    const data = await res.data;
    setFbData(data.data);
    console.log(fbdata);
    setLoadingFb(false);
  }

  async function sendTwitterUrl(e: { preventDefault: () => void }) {
    e.preventDefault();
    setLoadingTwitter(true);
    const res = await axios.post("https://namekart-assessment.onrender.com/twitter", {
      twitterurl,
    });
    const data = await res.data;
    setTwitterData(data.data);
    console.log(twitterData);
    setLoadingTwitter(false);
  }

  async function sendInstaUrl(e: { preventDefault: () => void }) {
    e.preventDefault();
    setLoadingInsta(true);
    const res = await axios.post("https://namekart-assessment.onrender.com/insta", {
      instaurl,
    });
    const data = await res.data;
    setInstaData(data.data);
    console.log(data.data);
    setLoadingInsta(false);
  }

  return (
    <>
      <h1 className="text-center font-bold my-8 text-3xl">SocioScraper</h1>
      <p className="text-center font-semibold">
        Get useful insights of your favourite social media influncer
      </p>
      <div className="grid grid-cols-3 xs:max-sm:grid-cols-1 sm:max-lg:grid-cols-2 place-items-center">
        <div className="m-10 h-[28rem] w-[21rem] xs:max-sm:w-[15rem] sm:max-lg:w-[20rem] sm:max-lg:h-[30rem] border-solid-black shadow-xl rounded-xl">
          <div className="flex my-3 justify-center">
            <img width={30} src={fb} alt="" />
          </div>

          <form className="m-5 flex flex-col" action="">
            <input
              type="text"
              onChange={(e) => setFbUrl(e.target.value)}
              placeholder="Enter username"
            />
            <button
              className="text-white w-24 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              type="submit"
              onClick={sendFbUrl}
            >
              Submit
            </button>
          </form>

          {loadingFb ? (
            <RevolvingDot
              wrapperStyle={{ marginLeft: "5rem" }}
              color="#2a7fce"
            />
          ) : fbdata ? (
            <>
              <div className="flex flex-col">
                <img
                  className="rounded-[50%] mx-auto"
                  width={100}
                  src={fbdata.url}
                  alt="profile_pic"
                />
                <div>
                  <h1 className="text-center font-bold">{fbdata.name}</h1>
                </div>
              </div>

              <div className="grid grid-cols-2 my-16">
                <div>
                  <h1 className="text-center font-bold">{fbdata.followers}</h1>
                </div>
                <div>
                  <h1 className="text-center font-bold">{fbdata.following}</h1>
                </div>
              </div>
            </>
          ) : (
            <h1>Please enter valid username</h1>
          )}
        </div>

        <div className="m-10 h-[28rem] w-[21rem] xs:max-sm:w-[15rem] sm:max-lg:w-[20rem] sm:max-lg:h-[30rem] border-solid-black shadow-xl rounded-xl">
          <div className="flex my-3 justify-center">
            <img width={30} src={twitter} />
          </div>
          <form className="m-5 flex flex-col" action="">
            <input
              type="text"
              onChange={(e) => setTwitterUrl(e.target.value)}
              placeholder="Enter username"
            />
            <button
              className="text-white w-24 bg-black font-medium rounded-lg text-sm px-5 py-2.5 my-4 focus:outline-none"
              onClick={sendTwitterUrl}
              type="submit"
            >
              Submit
            </button>
          </form>

          {loadingTwitter ? (
            <RevolvingDot wrapperStyle={{ marginLeft: "5rem" }} color="#000" />
          ) : twitterData ? (
            <>
              <div className="flex flex-col">
                <img
                  className="rounded-[50%] mx-auto"
                  width={100}
                  src={twitterData.url}
                  alt="profile_pic"
                />
                <div>
                  <h1 className="text-center font-bold">
                    {twitterData.username}
                  </h1>
                </div>
                <div>
                  <h1 className="text-center font-bold">{twitterData.name}</h1>
                </div>
              </div>

              <div className="grid grid-cols-3 my-5">
                <div>
                  <h1 className="text-center font-bold">{twitterData.posts}</h1>
                </div>
                <div>
                  <h1 className="text-center font-bold">
                    {twitterData.followers}
                  </h1>
                </div>
                <div>
                  <h1 className="text-center font-bold">
                    {twitterData.following}
                  </h1>
                </div>
              </div>
            </>
          ) : (
            <h1>Please enter valid username</h1>
          )}
        </div>

        <div className="m-10 h-[28rem] w-[21rem] xs:max-sm:w-[15rem] sm:max-lg:w-[20rem] sm:max-lg:h-[30rem] border-solid-black shadow-xl rounded-xl">
          <div className="flex my-3 justify-center">
            <img width={30} src={insta} />
          </div>
          <form className="m-5 flex flex-col " action="">
            <input
              type="text"
              onChange={(e) => setInstaUrl(e.target.value)}
              placeholder="Enter username"
            />
            <button
              className="text-white w-24 bg-gradient-to-r from-yellow-400 via-red-600 to-pink-500 font-medium rounded-lg text-sm px-5 py-2.5 my-4 focus:outline-none"
              onClick={sendInstaUrl}
              type="submit"
            >
              Submit
            </button>
          </form>

          {loadingInsta ? (
            <RevolvingDot
              wrapperStyle={{ marginLeft: "5rem" }}
              color="#c13584"
            />
          ) : instaData ? (
            <>
              <div className="flex flex-col">
                <img
                  crossOrigin="anonymous"
                  className="rounded-[50%] mx-auto"
                  width={100}
                  src={instaData.url}
                  alt="profile_pic"
                />
                <div>
                  <h1 className="text-center font-bold">
                    {instaData.username}
                  </h1>
                </div>
                <div>
                  <h1 className="text-center font-bold">{instaData.name}</h1>
                </div>
              </div>

              <div className="grid grid-cols-3 my-8">
                <div>
                  <h1 className="text-center font-bold">{instaData.posts}</h1>
                </div>
                <div>
                  <h1 className="text-center font-bold">
                    {instaData.followers}
                  </h1>
                </div>
                <div>
                  <h1 className="text-center font-bold">
                    {instaData.following}
                  </h1>
                </div>
              </div>
            </>
          ) : (
            <h1>Please enter valid username</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
