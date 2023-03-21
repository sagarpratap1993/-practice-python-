try:
    a=10
    b=0
    print(a/b)
except:
    print("this is zero division error")  

print("hello")
    



try:
   a=10
   b=0
   print(a/b)   
except ZeroDivisionError : #because it is zero type error
       print("num is divisible")

try:
     a="shiv"
     b=0
     print(a/b)
except ZeroDivisionError:  # it gives a error because it is type error 
     print("it is error")   
except TypeError:
     print("it is type error")    

try:
     a=int("sagar")
     b=0
     print(a/b)
except ZeroDivisionError:
     print("it is zero type error")
except TypeError:
     print("it is type error") 
except ValueError:   
     print("it is value error")     

try:
     a="sagar" 
     b="0"
     print(a/b)
except ValueError:
     print("value type error")
except ZeroDivisionError:
     print("it is zero type error")
except Exception:
     print("out of service")   #gives out of service because it is type error that is not mention       


try:
     a="sagar"
     b=10
     print(a/b)
except ZeroDivisionError:
     print("it is zero division error")
except TypeError:
     print("it is type error")
except ValueError:
     print("it is value error")
except Exception:
     print("out of service")
finally:
     print("thankyou banking with us")     



try:
     a="sagar"
     b=10
     print(a/b)
except ZeroDivisionError:
     print("it is zero division error")
except ValueError:
     print("it is value error")
except Exception:
     print("out of service")
finally:
     print("thankyou banking with us") 

try:
     print("welcome to admin pages")
     a=input("enter you login password :")
     if a!="sagar08":
        raise Exception ("login password is not match")
except TypeError as e:
     print("it is type error",e) 
except ZeroDivisionError as e:
     print("it is zero division error",e)
except Exception:
     print("out of service")
finally:
     print("thankyou banking with us") 

try:
     a=int("sagar")
     b=10
     print(a/b)
except ValueError as e:
     print("this is value type error")
except ValueError as e:
     print("this is value error")    
except ZeroDivisionError as e:
     print("this is zero division error")      
except Exception:
     print("out of service")     

      
          


           





