from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Registerkrapin
# Create your views here.
class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Registerkrapin.objects.all()