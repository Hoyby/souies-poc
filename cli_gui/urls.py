from django.views.generic import TemplateView
from django.urls import path
from .views import test_view

urlpatterns = [
    path('test/', test_view),
]
