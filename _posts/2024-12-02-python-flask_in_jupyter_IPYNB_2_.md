---
toc: True
comments: False
layout: post
title: BI 4.1 Internet - Web Server
description: Quick launch into Flask, sending and receiving data from a web server.
courses: {'csp': {'week': 14}}
type: ccc
---

## Introduction

Welcome to this journey into the world of web servers and the Flask framework! In the previous weeks, you've successfully set up a web server using GitHub Pages, converting Jupyter Notebooks into Markdown for a seamless online presentation. Today, we'll take that knowledge to the next level as we dive into creating your very own web server using Flask.

### Understanding Web Servers
What is a Web Server?

Traditionally, we had librarians at libraries that would help you find books or information. Today in the digital world, thousands upon thousands of home pages, search engines, and digital archives have been built using web servers.

### GitHub Pages vs. Flask

You've already experienced a form of web server through GitHub Pages. Think of GitHub Pages as a library that has established rules for publishing Markdown notes and Jupyter Notebooks neatly on a bookshelf.

Now, let's introduce Flask, your personal web server. Flask can create and manage any type of content, including customizing everything according to your preferences, and even serve additional information (like a database with APIs).

The Flask Framework
Flask is a micro web framework written in Python. It's designed to be minimal and easy to use, making it perfect for building web applications, APIs, and, yes, even your web server. Today, we will start with the basics of Flask and see how it empowers you to create and manage web content.

##  Our Goals for Today
Here's what we'll accomplish in this session:

- Create a minimal Flask server.
- Explore the Python/Flask process.
- Access data from our Flask server using Python.
- Access data from our Flask server using JavaScript.
- Learn how to stop the Python/Flask process gracefully.



### Install required libraries
These libraries are required to run and interact with the Python web server.


```python
!pip install flask flask-cors requests
```

    Collecting flask
      Downloading flask-3.1.0-py3-none-any.whl (102 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m103.0/103.0 KB[0m [31m3.3 MB/s[0m eta [36m0:00:00[0m
    [?25hCollecting flask-cors
      Using cached Flask_Cors-5.0.0-py2.py3-none-any.whl (14 kB)
    Requirement already satisfied: requests in /home/aadityat/nighthawk/aaditya_2025/venv/lib/python3.10/site-packages (2.32.3)
    Requirement already satisfied: Jinja2>=3.1.2 in /home/aadityat/nighthawk/aaditya_2025/venv/lib/python3.10/site-packages (from flask) (3.1.4)
    Requirement already satisfied: click>=8.1.3 in /home/aadityat/nighthawk/aaditya_2025/venv/lib/python3.10/site-packages (from flask) (8.1.7)
    Collecting blinker>=1.9
      Downloading blinker-1.9.0-py3-none-any.whl (8.5 kB)
    Collecting itsdangerous>=2.2
      Using cached itsdangerous-2.2.0-py3-none-any.whl (16 kB)
    Collecting Werkzeug>=3.1
      Downloading werkzeug-3.1.3-py3-none-any.whl (224 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m224.5/224.5 KB[0m [31m8.2 MB/s[0m eta [36m0:00:00[0m
    [?25hRequirement already satisfied: charset-normalizer<4,>=2 in /home/aadityat/nighthawk/aaditya_2025/venv/lib/python3.10/site-packages (from requests) (3.3.2)
    Requirement already satisfied: urllib3<3,>=1.21.1 in /home/aadityat/nighthawk/aaditya_2025/venv/lib/python3.10/site-packages (from requests) (2.2.2)
    Requirement already satisfied: certifi>=2017.4.17 in /home/aadityat/nighthawk/aaditya_2025/venv/lib/python3.10/site-packages (from requests) (2024.7.4)
    Requirement already satisfied: idna<4,>=2.5 in /home/aadityat/nighthawk/aaditya_2025/venv/lib/python3.10/site-packages (from requests) (3.8)
    Requirement already satisfied: MarkupSafe>=2.0 in /home/aadityat/nighthawk/aaditya_2025/venv/lib/python3.10/site-packages (from Jinja2>=3.1.2->flask) (2.1.5)
    Installing collected packages: Werkzeug, itsdangerous, blinker, flask, flask-cors
    Successfully installed Werkzeug-3.1.3 blinker-1.9.0 flask-3.1.0 flask-cors-5.0.0 itsdangerous-2.2.0


### Start Web Server
This Python code provides a simple server with an accessible API.

Note: Jupyter magic commmand `%%python --bg` that follows runs the server in background.  This enables us to continue interacting with the subsequent Notebook cells.


```python
%%python --bg

from flask import Flask, jsonify
from flask_cors import CORS

# initialize a flask application (app)
app = Flask(__name__)
CORS(app, supports_credentials=True, origins='*')  # Allow all origins (*)

# ... your existing Flask

# add an api endpoint to flask app
@app.route('/api/data')
def get_data():
    # start a list, to be used like a information database
    InfoDb = []

    # add a row to list, an Info record
    InfoDb.append({
        "FirstName": "John",
        "LastName": "Mortensen",
        "DOB": "October 21",
        "Residence": "San Diego",
        "Email": "jmortensen@powayusd.com",
        "Owns_Cars": ["2015-Fusion", "2011-Ranger", "2003-Excursion", "1997-F350", "1969-Cadillac"]
    })

    # add a row to list, an Info record
    InfoDb.append({
        "FirstName": "Shane",
        "LastName": "Lopez",
        "DOB": "February 27",
        "Residence": "San Diego",
        "Email": "slopez@powayusd.com",
        "Owns_Cars": ["2021-Insight"]
    })
    
    return jsonify(InfoDb)

# add an HTML endpoint to flask app
@app.route('/')
def say_hello():
    html_content = """
    <html>
    <head>
        <title>Hellox</title>
    </head>
    <body>
        <h2>Hello, World!</h2>
    </body>
    </html>
    """
    return html_content

if __name__ == '__main__':
    # starts flask server on default port, http://127.0.0.1:5001
    app.run(port=5001)
```

### Explore the Python/Flask process with Linux
This script discovers the running flask process on your machine using Linux commands.

1. lsof - list open files
2. `lsof` and `awk` return the process id, so `ps` can list details, the vericle bar is called a `pipe`.  A pipe flows output from one command to the next.
3. `curl` is a Linux utiltity that is easiest way to test if web server is responding


```python
%%script bash

# After app.run(), see the the Python open files on port 5001
echo "Python open files on port 5001" 
lsof -i :5001
# see the the Python process 
echo
echo "Python process"
lsof -i :5001 | awk '/Python/ {print $2}' | xargs ps
# show ontent of the Python server using curl
echo
echo "Content of the Python root endpoint (aka /), using curl",  
curl http://localhost:5001/


```

    Python open files on port 5001
    COMMAND    PID     USER   FD   TYPE  DEVICE SIZE/OFF NODE NAME
    python  196499 aadityat    3u  IPv4 3323324      0t0  TCP localhost:5001 (LISTEN)
    
    Python process


    your 131072x1 screen size is bogus. expect trouble


        PID TTY          TIME CMD
     180062 pts/2    00:00:00 sh
     180063 pts/2    00:00:00 sh
     180068 pts/2    00:00:00 sh
     180072 pts/2    00:00:52 node
     180119 pts/2    00:00:06 node
     180133 pts/2    00:01:24 node
     180195 pts/2    00:00:06 node
     180269 pts/2    00:00:16 sourcery
     180282 pts/2    00:00:06 pet
     180284 pts/2    00:00:03 node
     180540 pts/2    00:00:08 node
     180601 pts/2    00:00:00 node
     180607 pts/2    00:00:22 node
     183229 pts/2    00:01:09 node
     183253 pts/2    00:00:07 node
     183340 pts/2    00:00:04 pet
     183612 pts/2    00:00:00 node
     183793 pts/2    00:00:19 node
     183880 pts/2    00:00:08 sourcery
     183881 pts/2    00:00:11 node
     183927 pts/2    00:00:00 node
     183976 pts/2    00:00:00 node
     184591 pts/2    00:00:03 node
     184613 pts/2    00:00:55 node
     184735 pts/2    00:00:02 pet
     185106 pts/2    00:00:15 node
     185122 pts/2    00:00:00 node
     185144 pts/2    00:00:05 sourcery
     185145 pts/2    00:00:05 node
     185168 pts/2    00:00:00 node
     185681 pts/2    00:00:00 node
     186530 pts/2    00:00:02 node
     189348 pts/2    00:00:00 python
     196499 pts/2    00:00:00 python
     196647 pts/2    00:00:00 bash
     196652 pts/2    00:00:00 xargs
     196653 pts/2    00:00:00 ps
    
    Content of the Python root endpoint (aka /), using curl,
    
        <html>
        <head>
            <title>Hellox</title>
        </head>
        <body>
            <h2>Hello, World!</h2>
        </body>
        </html>


      % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                     Dload  Upload   Total   Spent    Left  Speed
    100   135  100   135    0     0  23140      0 --:--:-- --:--:-- --:--:-- 33750


        

### Access data from our Flask server using Python
The code block below shows alternate ways to access the Web Server.
1. Import requests and use it to obtain response from endpoints
2. The response is a Python object that contains status codes and data
3. The data can be in different forms, we will be focussed on JSON responses in Full-Stack.


```python
import requests
from IPython.display import HTML, display

# call api root endpoint (aka '/'), often called home page
response = requests.get('http://127.0.0.1:5001/')
# output response in different forms
print("Print Status Message:", response)
print("\nPrint Raw HTML:\n", response.text)
display(HTML(response.text))

# call unknown api endpoint
response = requests.get('http://127.0.0.1:5001/unknown-page')
print("Print Status Message:", response)
```

    Print Status Message: <Response [200]>
    
    Print Raw HTML:
     
        <html>
        <head>
            <title>Hellox</title>
        </head>
        <body>
            <h2>Hello, World!</h2>
        </body>
        </html>
        




<html>
<head>
    <title>Hellox</title>
</head>
<body>
    <h2>Hello, World!</h2>
</body>
</html>



    Print Status Message: <Response [404]>



```python
import requests
# an api endpoint most commonly returns JSON data
response = requests.get('http://127.0.0.1:5001/api/data')
response.json()
```




    [{'DOB': 'October 21',
      'Email': 'jmortensen@powayusd.com',
      'FirstName': 'John',
      'LastName': 'Mortensen',
      'Owns_Cars': ['2015-Fusion',
       '2011-Ranger',
       '2003-Excursion',
       '1997-F350',
       '1969-Cadillac'],
      'Residence': 'San Diego'},
     {'DOB': 'February 27',
      'Email': 'slopez@powayusd.com',
      'FirstName': 'Shane',
      'LastName': 'Lopez',
      'Owns_Cars': ['2021-Insight'],
      'Residence': 'San Diego'}]



### Access data from our Flask server using JavaScript
This sample is very similar to Full-Stack as the JavaScript is running through Jupyter and the Web server is a Python Process running on our machine (local server).

1. HTML is used to setup basics of a table
2. The script block, has javascript fetch that passes endpoint (url) and options.  The options are critical to communicating request requirements.
3. Similar to python examples, data is extracted and that data is written to the document, which is what is viewable to the user as the page is rendered.  Headings are static in the document, but rows are dynamically extracted according to the information contained in the server.


```python
%%html

<h1>Access data from our Flask server using JavaScript</h1>

<p>This code extracts data "live" from a local Web Server with JavaScript fetch.  Additionally, it formats the data into a table.</p>

<!-- Head contains information to Support the Document -->


<!-- HTML table fragment for page -->
<table id="demo" class="table">
  <thead>
      <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Residence</th>
      </tr>
  </thead>
  <tbody id="result">
    <!-- javascript generated data -->
  </tbody>
</table>

<script>
  // prepare HTML result container for new output
  let resultContainer = document.getElementById("result");
  
  // prepare URL
  url = "http://127.0.0.1:5001/api/data";

  // set options for cross origin header request
  let options = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // fetch the API
  fetch(url, options)
    // response is a RESTful "promise" on any successful fetch
    .then(response => {
      // check for response errors and display
      if (response.status !== 200) {
          console.error(response.status);
          return;
      }
      // valid response will contain json data
      response.json().then(data => {
          console.log(data);
          for (const row of data) {
            // tr and td build out for each row
            const tr = document.createElement("tr");
            const firstname = document.createElement("td");
            const lastname = document.createElement("td");
            const residence = document.createElement("td");
            // data is specific to the API
            firstname.innerHTML = row.FirstName; 
            lastname.innerHTML = row.LastName; 
            residence.innerHTML = row.Residence; 
            // this builds each td into tr
            tr.appendChild(firstname);
            tr.appendChild(lastname);
            tr.appendChild(residence);
            // add HTML to container
            resultContainer.appendChild(tr);
          }
      })
  })
  
</script>


```



<h1>Access data from our Flask server using JavaScript</h1>

<p>This code extracts data "live" from a local Web Server with JavaScript fetch.  Additionally, it formats the data into a table.</p>

<!-- Head contains information to Support the Document -->


<!-- HTML table fragment for page -->
<table id="demo" class="table">
  <thead>
      <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Residence</th>
      </tr>
  </thead>
  <tbody id="result">
    <!-- javascript generated data -->
  </tbody>
</table>

<script>
  // prepare HTML result container for new output
  let resultContainer = document.getElementById("result");

  // prepare URL
  url = "http://127.0.0.1:5001/api/data";

  // set options for cross origin header request
  let options = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // fetch the API
  fetch(url, options)
    // response is a RESTful "promise" on any successful fetch
    .then(response => {
      // check for response errors and display
      if (response.status !== 200) {
          console.error(response.status);
          return;
      }
      // valid response will contain json data
      response.json().then(data => {
          console.log(data);
          for (const row of data) {
            // tr and td build out for each row
            const tr = document.createElement("tr");
            const firstname = document.createElement("td");
            const lastname = document.createElement("td");
            const residence = document.createElement("td");
            // data is specific to the API
            firstname.innerHTML = row.FirstName; 
            lastname.innerHTML = row.LastName; 
            residence.innerHTML = row.Residence; 
            // this builds each td into tr
            tr.appendChild(firstname);
            tr.appendChild(lastname);
            tr.appendChild(residence);
            // add HTML to container
            resultContainer.appendChild(tr);
          }
      })
  })

</script>




### Stop the Python/Flask process
This script ends Python/Flask process using pipes to obtain the python process.  Then echo the python process to `kill -9`.  


```python
%%script bash

python_ps=$(lsof -i :5001 | awk '/python/ {print $2}')
echo "Killing python process with PID: $python_ps"
echo $python_ps | xargs kill -9
```

    Killing python process with PID: 


    
    Usage:
     kill [options] <pid> [...]
    
    Options:
     <pid> [...]            send signal to every <pid> listed
     -<signal>, -s, --signal <signal>
                            specify the <signal> to be sent
     -q, --queue <value>    integer value to be sent with the signal
     -l, --list=[<signal>]  list all signal names, or convert one to a name
     -L, --table            list all signal names in a nice table
    
     -h, --help     display this help and exit
     -V, --version  output version information and exit
    
    For more details see kill(1).



    ---------------------------------------------------------------------------

    CalledProcessError                        Traceback (most recent call last)

    Cell In[13], line 1
    ----> 1 get_ipython().run_cell_magic('script', 'bash', '\npython_ps=$(lsof -i :5001 | awk \'/Python/ {print $2}\')\necho "Killing python process with PID: $python_ps"\necho $python_ps | xargs kill -9\n')


    File ~/nighthawk/aaditya_2025/venv/lib/python3.10/site-packages/IPython/core/interactiveshell.py:2541, in InteractiveShell.run_cell_magic(self, magic_name, line, cell)
       2539 with self.builtin_trap:
       2540     args = (magic_arg_s, cell)
    -> 2541     result = fn(*args, **kwargs)
       2543 # The code below prevents the output from being displayed
       2544 # when using magics with decorator @output_can_be_silenced
       2545 # when the last Python token in the expression is a ';'.
       2546 if getattr(fn, magic.MAGIC_OUTPUT_CAN_BE_SILENCED, False):


    File ~/nighthawk/aaditya_2025/venv/lib/python3.10/site-packages/IPython/core/magics/script.py:315, in ScriptMagics.shebang(self, line, cell)
        310 if args.raise_error and p.returncode != 0:
        311     # If we get here and p.returncode is still None, we must have
        312     # killed it but not yet seen its return code. We don't wait for it,
        313     # in case it's stuck in uninterruptible sleep. -9 = SIGKILL
        314     rc = p.returncode or -9
    --> 315     raise CalledProcessError(rc, cell)


    CalledProcessError: Command 'b'\npython_ps=$(lsof -i :5001 | awk \'/Python/ {print $2}\')\necho "Killing python process with PID: $python_ps"\necho $python_ps | xargs kill -9\n'' returned non-zero exit status 123.


## Hacks
Edit, stop and start the web server.
- Add to the Home Page
- Add your own information to the Web API
- Use from Template to start your own Team Flask project https://github.com/nighthawkcoders/flocker_backend
