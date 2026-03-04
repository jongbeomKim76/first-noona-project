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
 - git checkout -b aaaa
 - git push origin aaaa
 

 