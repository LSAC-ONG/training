# Training Git

## Prerequisites
- Git instalat: 
    - [Windows](https://git-scm.com/downloads)
    - Linux: ``` sudo apt install git ```
- Configurare git cu urmatoarele 2 comenzi:
    - ```git config --global user.email <email-ul vostru de pe github>```
    - ```git config --global user.name <your name here>```
- Sa va adaugati o cheie ssh in contul de github, cum e descris [aici](https://docs.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account).
## Ce cunostinte vei dobandi in urma trainingului
- Familiarizare cu cele mai folosite si cunoscute comenzi git
- Cum sa creezi un repo si sa il manage-uiesti
- Know-how despre cele mai bune practici cand folosim git

## Subiecte abordate

1. De ce git?
2. Git terminology: repo, fork, commit, branch, remote, local, upstream, pull request (PR), pull, push
3. Cum facem un repo si ce setari avem la dispozitie + initial commit
4. Basic git workflow: fork->add->commit->push->PR
5. Conflict - git is fun until you get one of those
6. Sincronizare upstream -> local
    - ``` git pull ```
    - ``` git fetch <remote>``` urmat de ```git reset --hard <branch> ```
    - ``` git merge ``` (nu va fi acoperit in timpul trainingului)
    - ``` git rebase ``` (nu va fi acoperit in timpul trainingului)
7. Git best practices

## 1. De ce Git?
Git este un **VCS** (Version Control System), creat de Linus Torvalds. Este folosit de majoritatea developerilor si este un skill **NECESAR** in industrie in 2020, 99% din companiile unde veti lucra vor folosi git, intr-un fel sau altul.

Ok.. dar la ce e bun? Git e folositor in primul rand pentru ca mentine o istorie a schimbarilor in codebase-ul unui proiect de-a lungul timpului, si modul in care e construit face usor sa te intorci la o anumita **versiune** in caz ca ai nevoie, facilitand munca in paralel a mai multor developeri pe acelasi proiect prin sistemul de **branchuri**.

De asemenea, combinat cu site-uri precum **GitHub** este un tool crucial pentru orice echipa. (pull requests, code reviews)

## 2. Git terminology
- **repo(sitory**) - un proiect care foloseste git, de obicei usor indentificat prin prezenta folderului ```.git``` in root.
- **fork** - o copie identica a unui repo, dar atasata unui utilizator, pe care poate modifica ce vrea sufletul lui fara sa afecteze aplicatia.
- **commit** - o serie de schimbari (inserari, stergeri, fisiere noi, etc) facute asupra proiectului, la un anumit moment de timp. Git nu vede proiectul ca un intreg, ci ca o multitudine de schimbari in timp (mai multe commit-uri puse unele peste altele). Fiecarui commit ii este asociat un **hash unic**.
- **branch** - un label care pointeaza undeva in commit history (ganditi-va la pointerii din C). **HEAD** reprezinta branch-ul la care ne aflam acum, local.

    ![Git Branch Example 1](https://git-scm.com/book/en/v2/images/checkout-master.png)

    De asemenea, tineti cont ca history-ul nu este mereu liniar (de obicei nu o sa fie, daca sunteti mai multi), dar fiecare branch stie un singur drum de la commitul curent la primul commit.

    ![Git Branch Example 1](https://git-scm.com/book/en/v2/images/advance-master.png)
- **remote** - se refera de obicei la un url unde repo-ul este hostat (link de github de exemplu)
- **local** - practic atunci cand facem modificari, nu facem modificari direct in repo, ci avem o copie in calculatorul nostru pe care o modificam, iar apoi sincronizam ce avem noi cu ce e pe remote.
- **origin** - cel mai comun name pentru un remote (asta e by default)
- **upstream** - cand lucram cu fork-uri, de obicei avem 2 remote-uri de care trebuie sa tinem cont: copia noastra (fork-ul) si copia originala. Remote-ul pentru copia originala este referit de obicei ca **upstream**.
- **pull request (PR)** - cerere ca schimbarile de pe un anumit branch sa fie incluse intr-un alt branch (de obicei master)
- **pull** - tragem schimbarile de pe un branch remote pe un branch local
- **push** - punem schimbarile de pe local pe remote

## 3. Cum facem un repo si ce setari avem la dispozitie + initial commit
Va fi demonstrat la training. De obicei, e de preferat sa aveti branch protection macar pe master (sa fie nevoie de minim 1 review)

## 4. Basic git workflow: fork->add->commit->push->PR

- Intram pe repo si apasam pe butonul **Fork**, asta va crea un repo de forma ```username/repo``` pe contul vostru, pe care il puteti modifica cum doriti.
- Clonam repo-ul local:
    - ``` git clone <fork_url> ```
    - Url-ul se obtine dand click pe butonul **Code/Clone** pe fork. Apoi, alegeti HTTPS sau SSH, in functie daca aveti o cheie SSH asociata contului de github sau nu (e recomandat sa aveti)
- Adaugam remote-ul de upstream
    - ``` git remote add upstream <repo_url> ```
    - Puteti lua url-ul in acelasi mod ca mai sus, doar ca de pe repo-ul original.
- Cream un nou branch pentru task-ul la care lucram:
    - ```git checkout -b new_feature```
    - Aceasta comanda e folosita in general sa ne mutam de pe un branch pe altul, argumentul ```-b``` o si creeaza daca nu exista deja.
- Facem modificarile dorite
- Facem modificarile sa fie incluse in urmatorul commit:
    - ```git add .```
- **COMANDA SFANTA**: ```git status```, o rulati mereu inainte sa dati commit sau sa faceti orice schimbare de branch, va arata exact ce modificari o sa fie incluse in commit, care se vor pierde, etc.
- Facem un nou commit cu schimbarile si adaugam un mesaj relevant:
    - ```git commit -m "mesaj commit"```
- Punem schimbarile pe fork-ul nostru:
    - ```git push origin new_feature```
- Deschidem un PR pentru branch-ul tocmai adaugat si asteptam review si merge

## 5. Conflict
Conflictele apar cand 2 branch-uri au modificat acelasi lucru si git nu stie sa isi dea seama singur pe care sa o pastreze, asa ca lasa asta pe umerii developerului. Vom trece prin exemplul de [aici](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts) si vom explica ce se intampla.

Cum arata un conflict?
```
<<<<<<< HEAD
this is some content to mess with
content to append
=======
totally different content to merge later
>>>>>>> new_branch
```

Sunt 2 versiuni: cea de pe ```HEAD``` si cea de pe ```new_branch```. Sa zicem ca vreau sa pastrez schimbarile de pe ```HEAD```, branch-ul curent pe care ma aflu, as inlocui liniile de mai sus cu:
```
this is some content to mess with
content to append
```

Unele IDE-uri au support automat pentru rezolvare de conflicte (suita Jetbrains, VS Code).

## 6. Sincronizare upstream->local
Daca dorim sa sincronizam ce e pe upstream cu ce avem noi local (sa zicem, de exemplu, un PR al unui coleg a fost aprobat inainte sa dam noi pull sau clone) avem mai multe optiuni:    
- ```git pull```: Incearca sa "imbine" versiunea noastra cu cea de pe upstream, si adauga un nou commit cu imbinarea. De obicei o folosim daca avem nevoie de ceva care s-a pus pe upstream intre timp.
- ```git fetch upstream``` urmat de ```git reset --hard upstream/master```
    - 2 comenzi: ```git fetch``` care ia ultimele schimbari de pe upstream, si ```git reset``` care pune schimbarile local.
    - **COMANDA PERICULOASA, USE WITH CAUTION**. Pur si simplu va reseteaza branch-ul curent la ce e in acest moment pe branch-ul master de pe upstream (cel de pe github).
    - Aceasta comanda va da discard la ORICE schimbare care nu a fost commited, deci **git status** inainte si verificati ca nu aveti nevoie de ceva de acolo inainte.

## 7. Git best practices
- Commit-uri cat mai granulate si cat mai specifice, cu mesaje relevante pentru ce se intampla acolo
- **1 singur PR per feature**, daca ati terminat un feature, dati reset la master pe un nou branch si incepeti sa lucrati la urmatorul din master daca nu depinde de celalalt.
- Protection rule pe master, sa fie nevoie de minim 1 review aprobat ca sa intre in master
- Obisnuiti-va sa folositi ```git status``` inainte de orice, va poate salva din niste situatii neplacute.

## Alte resurse:
- [git cheat sheet](https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet)
- [git rebase](https://git-scm.com/docs/git-rebase), o alta modalitate de a combina branch-uri, putin diferita de ce am discutat.
- [OhShitGit](https://ohshitgit.com/) - cele mai comune greseli pe care le facea lumea cu git si cum se rezolva
- [Understanding Git](https://hackernoon.com/understanding-git-fcffd87c15a3) - cum functioneaza git in spate
- [Write yourself a git](https://wyag.thb.lt/) - tutorial cum sa iti scrii propriul git in python in cateva ore.