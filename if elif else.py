a={1,2,3,4,5}
b=(4,5,6,7,8)
a.add(b)
print(a)
a.add("'sagar','pratap'")
print(a)
c={1,2,3,4}
d={3,4,7,8}
print(c.isdisjoint(d))
c={1,2,3,4}
d={1,2,3,4,5,6}
print(c.union(b))
print(c.intersection(d))
print(d.issuperset(c))
print(c.issuperset(d))
print(a.remove(b))

user=input("Enter right go to Buxar and left go to Satna: ")
if user=="Buxar":
    print("I am going to Buxar")
    print("I stay one night in Buxar")
elif user=="Satna":
    print("I am going to Satna")
    print("I meet some friends in Satna")    
elif user=="Varanasi":
     print("I am going to Varanasi")
     print("I walking some historical place in Varanasi")
else:
     print("I am going to union bank")
     print("I will take credit card on union bank")     


        
   