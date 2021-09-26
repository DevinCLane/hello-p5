# hello-p5
First p5 experiments

## Learning outcomes

- Setting up p5.js on a local MacOS environment

- Encountering git and GitHub errors with conflicting merge histories. This happened by working locally first, then starting a GitHub repo, then attempting to merge the two (error `fatal: refusing to merge unrelated histories`). Solved this by running `git reset --hard origin/main`

- Additional problems encountered with accidentially initializing the git repository one parent directory too high (/p5/hello-p5, instead of simply within the directory hello-p5). Fixed this by `mv git hello-p5`, `cd hello-p5`, then proceeding to add, stage, and commit the changes.

- Reflecting on how these issues related to working locally prove the utility of the p5 Web Editor 😂.

- Using Cartesian coordinates to draw shapes. Thinking of shapes in terms of coordinates, thinking of colors in terms of numbers. 

- Composition and design thinking: rule of thirds, balancing 