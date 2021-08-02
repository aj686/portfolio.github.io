# portfolio.github.io

NOTED !!!
I have a error during push to origin master. 
The problem is I don't default branh name for local and remote in GitHub.
Local DEFAULT branch is 'master' while remote DEFAULT branch is 'main'.
Before I puhs file to remote. I already created repo in GitHub and create README file (initial commit)

Solved !!!
1. Need to type git pull --rebase origin main      --> git file in remote repo then replace in local repo and rebased & update the branch master 
2. git log --> check the rebase status. CAN SEE BELOW HERE
3.$ git log
commit 9b2d2f6b061d91f2d93898cea3429f2faf60b0bc (HEAD -> master)
Author: Ajwad <ajwadaqhari1@gmail.com>
Date:   Mon Aug 2 08:13:59 2021 +0800

    xx   (Wrote in local with command git commit im 'message')

commit 672eb71c611ebb3f7f8188abdeeb1ef906d5a22a (origin/main)
Author: aj686 <58493813+aj686@users.noreply.github.com>
Date:   Mon Aug 2 07:27:02 2021 +0800

    Initial commit     (In remote repo)
4. Send the contain in local repo to remote repo by command git push -u origin master
5. In GitHUB, I get requested from master branh to merge it

references link
https://github.com/rtyley/bfg-repo-cleaner/issues/29
https://www.youtube.com/watch?v=IeL7iq7Lb90
https://www.reddit.com/r/git/comments/krp2iy/couldnt_find_remote_ref_master/gib9rfo/
https://www.programmersought.com/article/65473734514/

