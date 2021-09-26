# hello-p5
First p5 experiments

## Learning outcomes

- setting up p5.js on a local MacOS environment
- encountering git and GitHub errors with conflicting merge histories. This happened by working locally first, then starting a GitHub repo, then attempting to merge the two (error `fatal: refusing to merge unrelated histories`). Solved this by running `git reset --hard origin/main`
- additional problems encountered with accidentially initializing the git repository one parent directory too high (/p5/hello-p5, instead of simply within the directory hello-p5). Fixed this by `mv git hello-p5`, `cd hello-p5`, then proceeding to add, stage, and commit the changes.
- and now I can begin making the art with p5.js (this proves the utility of the p5 Web Editor 😂)