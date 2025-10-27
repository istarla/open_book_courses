// File: intro_to_flask_django.js

const quiz = [
  {
    question: "What is the purpose of a web framework in Python?",
    options: [
      "To simplify building web applications by providing structure, tools, and abstractions",
      "To handle only database operations",
      "To run Python scripts faster",
      "To generate HTML automatically without Python code"
    ],
    answer: "To simplify building web applications by providing structure, tools, and abstractions"
  },
  {
    question: "What is the main philosophical difference between Flask and Django?",
    options: [
      "Flask is a microframework with a simple core; Django is batteries-included with built-in tools",
      "Flask uses SQL databases only; Django uses NoSQL only",
      "Flask requires no Python knowledge; Django requires advanced Python",
      "Flask is for frontend; Django is for backend"
    ],
    answer: "Flask is a microframework with a simple core; Django is batteries-included with built-in tools"
  },
  {
    question: "In Flask, what does the '@app.route('/path')' decorator typically do?",
    options: [
      "Maps the URL path to a Python function (view function)",
      "Executes the function immediately",
      "Defines a new database model",
      "Sets the HTTP headers automatically"
    ],
    answer: "Maps the URL path to a Python function (view function)"
  },
  {
    question: "In Django, what is the typical function of 'views.py'?",
    options: [
      "Contains database schema definitions",
      "Handles incoming web requests and returns HTTP responses",
      "Stores static files like images and CSS",
      "Configures project settings"
    ],
    answer: "Handles incoming web requests and returns HTTP responses"
  },
  {
    question: "What command-line tool is used to start a new Django project?",
    options: [
      "django-create startproject project_name",
      "django-admin startproject project_name",
      "flask-admin startproject project_name",
      "python manage.py newproject project_name"
    ],
    answer: "django-admin startproject project_name"
  }
];


export default quiz;

