a=1
b=2
c=3
d=4
x=[a,b,c,d]  # it is know as packing
print(x)

a,b,c,d,e=[4,5,6,8,9]
print(b)  # it gives b=5
print(d)  #  it gives d=8 it is called unpacking

# use of astrick(*)
a,*b,c = [1,2,3,5,6,8,9]
print(a)  # print(a)gives value = 1
print(b)  # print(b) gives value = 2,3,5,6,8 it is use of astrick
print(c)  # print(c) gives value = 9   

y=[4,5,6,8,9]
u,v,w,k,j=y
print(u)  # it also called unpacking
print(w)

m=2
n=6
o=8
p=9
q=9
r={m,n,o,p}  # it is packing with set value
print(r)
r={m,n,o,p,q} # it is packing with duplicate set value
print(r)
s={1,2,3,2,2,2}
i,j,k,=s
print(i)  # it is a unpacking using set value 
print(j)  # it does not support duplicate value to give any other variable
print(k)

s,*u,j={1,2,3,2,2,2,5,6,9,9,9,9,9}
print(u)
print(j)
print(u)
print(j)
