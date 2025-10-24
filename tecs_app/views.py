from django.shortcuts import render

def home(request):
    return render(request, 'tecs_app/home.html')