from django.shortcuts import render,HttpResponseRedirect
from .models import Employee


def homepage(Request):
    data = Employee.objects.all()
    return render(Request,"index.html",{"data":data})

def addpage(Request):
    if(Request.method=="POST"):
      e = Employee()
      e.name = Request.POST.get("name")
      e.phone = Request.POST.get("phone")
      e.dsg = Request.POST.get("dgs")
      e.salary = Request.POST.get("salary")
      e.email = Request.POST.get("email")
      e.state = Request.POST.get("state")
      e.city = Request.POST.get("city")
      e.save()
      return HttpResponseRedirect("/")
    return render(Request,"add.html")

def deleteRecord(Request,id):
    try:
      data=Employee.objects.get(id=id)
   
      data.delete()
    except:
      pass  
    return HttpResponseRedirect("/")