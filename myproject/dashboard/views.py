# dashboard/views.py

from django.http import HttpResponse

def index(request):
    return HttpResponse("Bem-vindo ao Dashboard!")
