![meme](https://after-school-assets.s3.amazonaws.com/git-hamster.jpg)

## Git Multi-user Workflow basics.

## Learning Objectives/SWBAT
- Create branches
- Merge Branches
- Navigate  toMerge conflicts.
- Work remotely

#### Today you will be building a simple app collaboratively. Each person in your group will be responsible for a single function in an app that will randomize the students into groups and save those groups to a text file. You have been given the basic structure of the app as well as a full solution if you get stuck.

#### Your workflow will look like the following:

#### 🚨Before you get started take 5 minutes with your group to diagram your approach. Our workflow will be following [this guide](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). Take some time to read it if you're feeling lost. You're going to run into a merge conlict at the end have a look at this article to see how to move past it [merge conflict help](https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/🚨

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
- Once all the features have have been merged into master it's time to finish the app!
- This part of the workflow is up to you. 
- you got this.
- for realz

