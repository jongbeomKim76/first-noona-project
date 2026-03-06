### GitHub & Git

1. GitHub 계정 생성
 - https://github.com/

2. git 설치
 - https://git-scm.com/install/windows

3. Git Bash  실행
 - git config --global user.name "your_name"
 - git config --global user.email "your_email"
 - git config --list

4. vs-code 터미널 > 뉴터미널 실행
 (로컬 소스 생성)
 - git init
 - git add .
 - git status
 - git commit -m "히스토리"

 (github 올리기)
 - git remote add origin git@github.com:jongbeomKim76/first-noona-project
 - git remote -v
 - git push origin master
 (수정 후 올리기)
 - git add .
 - git commit -m "수정내용"
 - git push origin master



(github 소스다운로드)
 - git clone  git@github.com:jongbeomKim76/first-noona-project
(소스 수정 후 올리기)
 - git add .
 - git commit -m "수정사항"
 - git checkout -b aaaa (브랜치 추가)
 - git push origin aaaa
 
 (사용자 변경)
  - git switch master
  - git pull origin master
  - git add .
  - git commit -m "수집"
  - git push origin master

(소스 합치기)
 - git merge 브랜치명  




(1) 프로젝트 Github에서 갖고오기
> git clone "리퍼지토리 URL" 

(2) "dev" 브랜치 생성
> git checkout -b "dev"

(3) 생성된 브랜치로 전환
> git switch -c "dev"

(4) 브랜치 생성 확인(목록 조회)
> git branch
※ "q"를 눌러 종료

(5) 브랜치 내, 개발 브랜치 생성
브랜치를 생성해서 로그인 기능을 구현하고 테스트를 하려고 합니다. "dev" 내에 "feature/login" 브랜치를 생성합니다
> git checkout -b feature/login

(6)"feature/login"로 브랜치 전환
> git switch -c feature/login

(7) "dev"와 "feature/login" 병합(merge)
> git checkout dev
> git switch dev
> git merge feature/login
 이때 작업은 추가적인 커밋 없이 fast-forward방식으로 진행됩니다.
※ fast-forward 란?
별도의 커밋을 생성하지 않고 현재 브랜치가 가리키는 브랜치와 바꾸는 작업
> Rebase vs Merge

(8) 작업 내용 Push 하기
브랜치는 Local(로컬)에서 작업이 진행됩니다.. 작업이 완료되면 "push"를 통해 GitHub에 최신을 올립니다.
> git push origin dev

(9) Pull Request
gitHub에 다른 팀원들에게 최신 된 코드를 알립니다. 팀장 또는 관리자가 이를 확인한 후, 문제가 없다고 판단되면 요청을 받아 최종적으로 최신화를 진행합니다.


브랜치 생성
- git branch [새로운 브랜치 이름]

브랜치 전환
 - git switch -c [새로운 브랜치 이름]
 - git checkout -b [새로운 브랜치 이름]
 
브랜치 목록 확인
 - git branch
 
브랜치 목록과 각 브랜치 최근 커밋 확인
 - git branch -v
 
브랜치 삭제
 - git branch -d [삭제할 브랜치 이름]
 
브랜치 강제 삭제
 - git branch -D
 
브랜치 병합
 - master 1 -> branch2로 병합할 때
 - git checkout master1
 - git merge branch2
 
로그에 모든 브랜치 그래프로 표현
 - git log --branches --graph --decorate
 
아직 commit 하지 않은 작업 스택에 임시 저장
 - git stash
 


usage: git  [-v | --version] 
            [-h | --help] 
            [-C <path>] 
            [-c <name>=<value>]
            [--exec-path[=<path>]] 
            [--html-path] 
            [--man-path] 
            [--info-path]
            [-p | --paginate | -P | --no-pager] 
            [--no-replace-objects] 
            [--no-lazy-fetch]
            [--no-optional-locks] 
            [--no-advice] 
            [--bare] 
            [--git-dir=<path>]
            [--work-tree=<path>] 
            [--namespace=<name>] 
            [--config-env=<name>=<envvar>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone      Clone a repository into a new directory
   init       Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add        Add file contents to the index
   mv         Move or rename a file, a directory, or a symlink
   restore    Restore working tree files
   rm         Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect     Use binary search to find the commit that introduced a bug
   diff       Show changes between commits, commit and working tree, etc
   grep       Print lines matching a pattern
   log        Show commit logs
   show       Show various types of objects
   status     Show the working tree status

grow, mark and tweak your common history
   backfill   Download missing objects in a partial clone
   branch     List, create, or delete branches
   commit     Record changes to the repository
   merge      Join two or more development histories together
   rebase     Reapply commits on top of another base tip
   reset      Set `HEAD` or the index to a known state
   switch     Switch branches
   tag        Create, list, delete or verify tags

collaborate (see also: git help workflows)
   fetch      Download objects and refs from another repository
   pull       Fetch from and integrate with another repository or a local branch
   push       Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
See 'git help git' for an overview of the system. 