import React, { useState, useEffect, lazy, Suspense } from "react";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  const [prof, setProf] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const dummyProfileData = {
        id: "1",
        name: "Atul Keshari",
        login: "Atul-Keshari",
        bio: "Software Developer | React Native & ML Enthusiast",
        avatarUrl: "https://avatars.githubusercontent.com/u/12345678?v=4",
        url: "https://github.com/Atul-Keshari",
        repositories: {
          totalCount: 30,
        },
        followers: {
          totalCount: 150,
        },
        following: {
          totalCount: 50,
        },
        location: "India",
        company: "NIT Kurukshetra",
      };

      setTimeout(() => {
        setProf(dummyProfileData);
        setLoading(false);
      }, 1000); // Simulate API delay
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loading />; // Show loader while data is being fetched
  }

  return openSource.display ? (
    <Suspense fallback={renderLoader()}>
      {prof ? <GithubProfileCard prof={prof} key={prof.id} /> : <div />}
    </Suspense>
  ) : (
    <Contact />
  );
}
