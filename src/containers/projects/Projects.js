import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import { openSource, socialMediaLinks } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

// Lazy load the GitHub repository card component
const GithubRepoCard = lazy(() =>
  import("../../components/githubRepoCard/GithubRepoCard")
);

const FailedLoading = () => null;
const renderLoader = () => <Loading />;

export default function Projects() {
  const [repo, setRepo] = useState([]);
  const { isDark } = useContext(StyleContext);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const username = "Atul-Keshari"; // Your GitHub username
        const apiUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`GitHub API Error: ${response.statusText}`);

        const repos = await response.json();

        // Filter repositories with at least 1 star
        const filteredRepos = repos
          .filter(repo => repo.stargazers_count > 1);

        // Sort repositories in decreasing order based on stars
        const sortedRepos = filteredRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);

        // Map through sorted repositories and extract relevant data
        const repoData = sortedRepos.map(repo => ({
          node: {
            id: repo.id.toString(),
            name: repo.name,
            description: repo.description || "No description",
            forkCount: repo.forks_count,
            stargazers: {
              totalCount: repo.stargazers_count,
            },
            url: repo.html_url,
            diskUsage: repo.size,
            primaryLanguage: {
              name: repo.language || "Not specified",
              color: getLanguageColor(repo.language),
            },
          },
        }));

        setRepo(repoData); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos(); // Call the function to fetch repos
  }, []);

  // Optional function to get color for primary language
  const getLanguageColor = (language) => {
    const languageColors = {
      JavaScript: "#f1e05a",
      TypeScript: "#2b7489",
      Dart: "#00B4AB",
    };

    return languageColors[language] || "#000000"; // Default to black if language not found
  };

  if (repo.length > 0 && openSource.display) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className={isDark ? "dark-mode heading" : "heading"}>Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => (
              <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
            ))}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
