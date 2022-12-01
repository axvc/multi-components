import Link from 'next/link';
import Image from 'next/image';
import MainHead from 'components/main-head';
import { FC } from 'react';
import RatingImage from 'assets/main/images/rating.png';
import TipImage from 'assets/main/images/tip.png';
import AdviceImage from 'assets/main/images/advice.png';
import SiteIcon from 'assets/main/icons/planet.svg';
import LinkedInIcon from 'assets/main/icons/linked-in.svg';
import GithubIcon from 'assets/main/icons/github.svg';
import { Links } from 'constants/main/Links';
import { Routes } from '../constants/main/Routes';

const username = '/axvc';
const usernameLink = '@axvc';

enum Components {
  RATING_WINDOW = 'Rating Window',
  TIP_CALCULATOR = 'Tip Calculator',
  ADVICE_GENERATOR = 'Advice Generator',
}

const Home: FC = () => {
  return (
    <div className="main-bg w-screen h-screen">
      <MainHead
        title={'Multi Components'}
        description={
          'Collection of three applications with different functionality and technologies'
        }
      />
      <header className="flex justify-center items-center flex-col text-4xl h-200px">
        <h1 className="text-3xl font-extrabold mt-10">MULTI COMPONENTS</h1>
        <div className="flex gap-10 mt-6">
          <a href={Links.NOTION}>
            <div className="site-button flex justify-center items-center px-1.5 py-2 leading-3 font-semibold text-sm rounded-xl">
              <SiteIcon />
              <span className="ml-1">{username}</span>
            </div>
          </a>
          <a href={Links.LINKED_IN}>
            <div className="linked-in-button flex justify-center items-center px-1.5 py-2 leading-3 font-semibold text-sm rounded-xl">
              <LinkedInIcon />
              <span className="ml-1">{username}</span>
            </div>
          </a>
          <a href={Links.GITHUB}>
            <div className="github-button flex justify-center items-center px-1.5 py-2 leading-3 font-semibold text-sm rounded-xl">
              <GithubIcon />
              <span className="ml-1">{username}</span>
            </div>
          </a>
        </div>
      </header>
      <div className="flex flex-col items-center p-24 outer-apps-block">
        <div className="w-full flex justify-around mt-10 gap-10 z-10 inner-apps-block">
          <div className="w-1/3 flex flex-col gap-5 app-block">
            <h2 className="text-2xl font-bold">{Components.RATING_WINDOW}</h2>
            <Link href={Routes.RATING}>
              <div className="bg-ratingBg rounded-md h-72 app-card">
                <div className="bg-ratingBg flex justify-center items-center h-52 rounded-t-lg overflow-hidden">
                  <Image
                    src={RatingImage}
                    alt={Components.RATING_WINDOW}
                    className="rounded-t-lg"
                  />
                </div>
                <div className="flex flex-wrap p-4 gap-3 h-24 items-center font-semibold">
                  <span className="bg-sky-700 px-2 py-1 rounded-lg h-fit">
                    NEXT
                  </span>
                  <span className="bg-indigo-700 px-2 py-1 rounded-lg h-fit">
                    Styled components
                  </span>
                  <span className="bg-green-800 px-2 py-1 rounded-lg h-fit">
                    SVG
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-1/3 flex flex-col gap-5 app-block">
            <h2 className="text-2xl font-bold">{Components.TIP_CALCULATOR}</h2>
            <Link href={Routes.TIP_CALCULATOR}>
              <div className="bg-tipBg rounded-md h-72 app-card">
                <div className="bg-tipBg flex justify-center items-center h-52 rounded-t-lg overflow-hidden">
                  <Image
                    src={TipImage}
                    alt={Components.TIP_CALCULATOR}
                    className="rounded-t-lg mb-10"
                  />
                </div>
                <div className="flex flex-wrap p-4 gap-3 h-24 items-center font-semibold">
                  <span className="bg-sky-700 px-2 py-1 rounded-lg h-fit">
                    NEXT
                  </span>
                  <span className="bg-indigo-700 px-2 py-1 rounded-lg h-fit">
                    Styled components
                  </span>
                  <span className="bg-red-700 px-2 py-1 rounded-lg h-fit">
                    Formik
                  </span>
                  <span className="bg-amber-700 px-2 py-1 rounded-lg h-fit">
                    Yup
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-1/3 flex flex-col gap-5 app-block">
            <h2 className="text-2xl font-bold">
              {Components.ADVICE_GENERATOR}
            </h2>
            <Link href={Routes.ADVICE_GENERATOR}>
              <div className="bg-adviceBg rounded-md h-72 app-card">
                <div className="bg-adviceBg flex justify-center items-center h-52 rounded-t-lg overflow-hidden">
                  <Image
                    src={AdviceImage}
                    alt={Components.ADVICE_GENERATOR}
                    className="rounded-t-lg"
                  />
                </div>
                <div className="flex flex-wrap p-4 gap-3 h-24 items-center font-semibold">
                  <span className="bg-sky-700 px-2 py-1 rounded-lg h-fit">
                    NEXT
                  </span>
                  <span className="bg-indigo-700 px-2 py-1 rounded-lg h-fit">
                    Styled components
                  </span>
                  <span className="bg-lime-700 px-2 py-1 rounded-lg h-fit">
                    API
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-24 text-gray-400 font-semibold">
        <div className="h-px w-4/5 bg-gray-600"> </div>
        <p className="mt-3">
          Challenges by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
        </p>
        <p className="mt-3 mb-3">
          Coded by <a href="https://github.com/axvc">{usernameLink}</a>
        </p>
      </div>
    </div>
  );
};

export default Home;
