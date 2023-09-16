
from django.contrib import admin
from django.urls import path
from mainApp import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.homepage),
    path('add/',views.addpage),
    path('delete/<int:id>/',views.deleteRecord),
   
   
]
