from django.shortcuts import render



def homepage(Request):
    return render(Request,"index.html")