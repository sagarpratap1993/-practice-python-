sagar= input("lets go for toss :")

if sagar=="head":
    print("going to varanasi")
    print("waking in a kashi vishwanath temple")
elif sagar=="tail":
    print("i am going to shimpla")
    print("i waking some hill area ")
elif sagar=="kashmir":
    print("i am going to kashmir")    
else:
    print("going to goa")    


option=input("Enter a option :")
print("""2 is greater then what
         a=3
         b=4
         c=6
         d=1""")    
if option=="a":
    print("option a is wrong answer:")
elif option=="b":
    print("option b is wrong answer:")
elif option=="c":
    print("option c is wrong answer:")
elif option=="d":
    print("option d is right answer: ")
else:
    print("invalid option choosen:")     


     
num1=int(input("Enter a number :"))
num2=int(input("Enter a number :"))
oper=input("Enter a oper +,-,*,/:")

if oper=="+":
    print(num1+num2)
elif oper=="-":
     num1,num2=num2,num1 #by using swaping
     print(num1-num2)
elif oper=="*":
      print(num1*num2)
elif oper=="/":
      num1,num2=num2,num1  # by using swaping
      print(num1/num2)    
else:
     print("invalid sytex")      
                    