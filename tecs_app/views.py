from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'tecs_app/home.html')