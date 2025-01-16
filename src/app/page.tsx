import { NextPage } from "next";

import ChallengesHeader from './components/ChallengesHeader';
import ChallengesTable from "./components/ChallengesTable";


const Home: NextPage = () => {
  return (
    <main className="min-h-screen bg-navy-950">
      <div className="container mx-auto px-8 py-6 max-w-[1440px]">
        <ChallengesHeader />
        <ChallengesTable />
      </div>
    </main>
  );
};

export default Home;


