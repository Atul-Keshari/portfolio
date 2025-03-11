import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import Achievement from "./achievement/Achievement";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import SplashScreen from "./splashScreen/SplashScreen";
import { splashScreen } from "../portfolio";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "./Main.scss";
import Contact from "./contact/Contact";
import CodingProfileCard from "../components/codingProfile/CodingProfileCard";
import PositionOfResponsibility from "./por/PositionOfResponsibility";

const profiles = [
  {
    platform: "LeetCode",
    url: "https://leetcode.com/AtulKeshari/",
    logo: require("./lclogo.png"), // Update with the correct logo path
    title: "Guardian",
    rating: 2314,
    solved: 900
  },
  {
    platform: "Codeforces",
    url: "https://codeforces.com/profile/404_Found_Noob",
    logo: require("./cflogo.png"), // Update with the correct logo path
    title: "Expert",
    rating: 1633,
    solved: 250
  },
  {
    platform: "CodeChef",
    url: "https://www.codechef.com/users/found_noob",
    logo: require("./cclogo.png"), // Update with the correct logo path
    title: "5★ Coder",
    rating: 2006,
    solved: 100
  },
  {
    platform: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/user/atulkesh1fue/",
    logo: require("./gfglogo.jpg"), // Update with the correct logo path
    title: "N/A",
    rating: "N/A",
    solved: 100
  }
];




const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Skills />
            <StackProgress />
            <Education />
            <WorkExperience />
            <Projects />
            <Achievement />
            <div className="experience-container" id="codingProfile">
              <h1 className="coding-profile-heading">Coding Profiles</h1>
              <div className="coding-profile-cards-container">
                {profiles.map((profile, index) => (
                  <CodingProfileCard
                    key={index}
                    profile={profile}
                    isDark={isDark}
                  />
                ))}
              </div>
            </div>
            <PositionOfResponsibility/>
            <Contact />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
