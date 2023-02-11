#operators
#arthmetic operators= +,-,*,/,//,**,%
#assingnment operators = =,+=,-=,/=,//=,*=,**=,&=,!=,<<=,>>=,^=
#comparision operator = ==,!=,>,<,>=,<=
#logical operator and,or,not
#identity operators= is,is not,= is means x is y and is not means x is not y
#membership operators = in,not in= x in y and not in meanx not in y
#bitwise operators = and,or,^,<<,>>

#ARTHEMATIC OPERATORS
a=2
b=5
print(a+b)
print(a*b)
print(a-b)
print(b-a)
print(a/b)
print(b/a)
print(a//b)   # it remove all decimal place value
print(b//a)
print(b%a)  # it gives reminder value
print(a%b)    # it gives reminder value
c=50
c*=2
print(c)
print(c)
c*=2
print(c)
c*=2
print(c)
e=[1,2,3,4]
f=[1,2,9]
g=e
h=1
i=["apple","mango","water"]
print(e is f)  # gives false
print(f is e)  # gives false
print(e is g)   # gives true because id is same
print(e is h)    # gives false because it id are different
print(id(e),id(h))  # id different
print(id(e),id(g))   # id same
print("water" in e) # gives false
print("water" in i)  # gives true
print("water" not in i) # gives false
print(e is not g)  # false
c=2
d=5
e=3
f=4
print(c>d and e>f) # false
print(c<d and e<f)  # true
print(c<d and e>f) # false
print(c>d or e<f)   # true
print(c<d or e<f) # true
print(c>d or e>f) # false

#Assignment operators
a=5
a+=10
print(a)  # gives 15
a+=5  
print(a)  # gives 20
a-=5
print(a) # gives 15
a*=5
print(a)  # gives 75
a/=5
print(a) # gives 15.0 because calculate after decimal value
a//=5
print(a) # gives 3.0 because it divide the value of 15.0
b=15
b//=5
print(b) # gives 3
b%=2
print(b) # gives 1 because it gives reminder value 
c=3
d=2
x=c**d
print(x) # by using power value gives 9
x**2
print(x**2) # gives 81
e=10.2
f=11.2
print(e+f)
print(x*f)  # gives 100.8
e*=10.2
print(e)
g=20
h=10
print(g/h)
print(g//h)
print(g**h)
g**=2
print(g)
print(1 is 1)
print(1 is not 1)
print(1 is not 2)
print("banana" is "apple")
print("banana" is "banana") 
print("banana" is not "apple")
print(2>=2) # gives true
print(2>=1) # gives true
print(3<=2) # gives false
print(4>=6) # gives false
g=2
h=5
i=5
j=6
print(h==i or g==j) # gives true in case of or operator
print(h==i and g==j) # gives false in case of and operator
print(h!=i or g!=j) # gives true
print(h!=i and g!=j) # gives false

k="this is python"
print("this" in k) # gives true
print("python" in k)  # gives true
print("Python" in k) # gives true because in python p is capital 
print(not(h!=i and g!=j)) # gives true because we use in not 
print(~12) # gives -13

print(12 & 13 ) # gives 12 because it convert binary conversion 
print(bin(12))  # gives 0b1100
print(bin(13)) # gives  0b1101
print(12 | 13) # gives 13 because it convert binary form
print(12<<2)  # gives 48 
print(12>>2)





































