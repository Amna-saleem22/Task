import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function GithubProfile() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);

  const fetchGithubData = async () => {
    try {
      const profileRes = await fetch(`https://api.github.com/users/${username}`);
      const profileData = await profileRes.json();
      setProfile(profileData);

      const reposRes = await fetch(`https://api.github.com/users/${username}/repos`);
      const reposData = await reposRes.json();
      setRepos(reposData);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    }
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">My Projects</h2>
        <p className="text-muted">Enter your GitHub username to view profile and projects.</p>
      </div>

      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control w-50 me-2"
          placeholder="GitHub username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="btn btn-primary" onClick={fetchGithubData}>
          Fetch Profile
        </button>
      </div>

      {profile && (
        <div className="card mx-auto mb-5" style={{ maxWidth: '400px' }}>
          <div className="card-body text-center">
            <img
              src={profile.avatar_url}
              alt="avatar"
              className="rounded-circle mb-3"
              width="100"
              height="100"
            />
            <h5 className="card-title">{profile.name}</h5>
            <p className="card-text">{profile.bio || "No bio available."}</p>
            <a
              href={profile.html_url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      )}

      {repos.length > 0 && (
        <div>
          <h4 className="text-center mb-4">Public Repositories</h4>
          <div className="row">
            {repos.map((repo) => (
              <div key={repo.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{repo.name}</h5>
                    <p className="card-text">{repo.description || "No description."}</p>
                  </div>
                  <div className="card-footer bg-transparent">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary btn-sm"
                    >
                      View Repo
                    </a>
                    <span className="badge bg-secondary float-end">
                      ⭐ {repo.stargazers_count}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
