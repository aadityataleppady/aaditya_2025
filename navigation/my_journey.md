---
layout: page
title: My Journey
permalink: /my_journey/
---

In my journey, I had many ups and downs. There were steps that were easy and hard.

Easy Steps:

- Installing WSL

    - I opened a Powershell window as an administrator and typed: `wsl --install -d Ubuntu-24.04`
    - When the prompt showed up, I entered my username and password.
    - Then, after changing my prompt to WSL, I typed `wsl --set-default Ubuntu-24.04` to set Ubuntu 24.04 as the default WSL distribution.

- Installing VS Code

    - I already has VSCode installed on my computer, which was easy to install. I installed VSCode from the VSCode website, and installed "Remote Development extension pack" as an extension.

- Git Identification

    - I ran these two commands to set my email address and username: 
    - `git config --global user.email youremail@gmail.com`
    - `git config --global user.name yourGHID` 
    - Finally, I verified my configurations by running: `git config --global --list`
 
- Opening a Project and "Make"

    - After creating my git username and email, I entered my student directory, and activated the virtual environment by running: `source venv/bin/activate`
    - Then, I opened VSCode by running: `code .`
    - After openeing VSCode, I could view all my files and edit all the markdown files to edit my website.
    - I opened a VSCode terminal and ran: `make` to create a local server. I ran this command every time I made changes and wanted to view them on my website.

Difficult Steps:

- Installing Developer Tools

    - In order to install my developer tools, I had to run all these commands (Note: I did this before some of the steps above):
    - `cd`
    - `mkdir nighthawk`
    - `cd nighthawk` 
    - `git clone https://github.com/nighthawkcoders/portfolio_2025.git`
    - Then, I ran these commands in WSL to install the tools.
    - `cd`
    - `cd nighthawk/portfolio_2025/scripts`
    - `./activate_ubuntu.sh`
    - This step was difficult because I had to delete and re-download everything in order for it to work properly. Also, the installation process took around 5-10 minutes to finish.

- Starting a Project

    - In order to start my project, I had to run these commands in order to setup a directory for my project and prepare the project

        - `cd`
        - `mkdir -p nighthawk`
        - `cd nighthawk`
        - `git clone https://github.com/nighthawkcoders/student_2025.git`
        - `cd student_2025`
        - `scripts/venv.sh`
        - `source venv/bin/activate`
        - `pip install -r requirements.txt`
        - `jupyter kernelspec list`
        - `bundle install`
        - `code .`

    - Then, I had to authenticate with GitHub.
    - This step was difficult because it took many attempts to install bundle and the `pip install -r requirements.txt` command didn't work for me the first time.


In the end, I was able to install all the tools and get the GitHub working and synced to my website and VSCode!
