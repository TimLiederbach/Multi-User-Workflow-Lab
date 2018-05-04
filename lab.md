![meme](https://after-school-assets.s3.amazonaws.com/git-hamster.jpg)

## Git Multi-user Workflow basics.

## Learning Objectives/SWBAT
- Create branches
- Merge Branches
- Navigate  toMerge conflicts.
- Work remotely

#### Today you will be building a simple app collaboratively. Each person in your group will be responsible for a single function in an app that will randomize the students into groups and save those groups to a text file. You have been given the basic structure of the app as well as a full solution if you get stuck.

#### Your workflow will look like the following:

#### **PART 1**
- One team member will clone down this repo, create a new repo on github, and push this repo up.
- The other team members will clone this repo localy.
- Each team member will pick a function to work on and check out a branch named for that function.
- Each team memeber will write the function that they have been assigned on their own branch and commit their work.
- The first team member to complete their function will push their branch up master. Once their branch is on github they will make a pull request to master, accept the request and merge their branch with master.
- At this point the other team members will add and commit whatever they have in their branch and checkout master. Once on master they will pull down from github.
- Once master is synched with the remote repo the team members will go to their feature branch and rebase to master.
- repeat these steps until all the features have been merged into master.

#### **PART 2**
- From master checkout a new branch called yourname-shuffle.
- Here each of you will write the final function which is not in the starter code. The first person to get it working will alert the rest of the team and push to master. They will then checkout master and and pull down from github.
- Once each team member has finished with the function they will try to push up to master.
- It's not gonna work
- In your editor...
