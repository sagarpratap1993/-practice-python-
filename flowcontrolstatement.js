        /*num=Number(prompt("enter a number :"))
        if(num%2==0)
        document.write(`${num}num is even`)
        else
        document.write(`${num}is  a odd number`)*/

        // nested if else case 

       /* a=Number(prompt("enter a no"))
        b=Number(prompt("enter a no"))
        c=Number(prompt("enter a no"))

        if(a<b){
           if(a<c)
           document.write(`${a} is smallest`)
           else
           document.write(`${c} is smallest `)
           
        }
        else
            if (b<c)
            document.write(`${b} is smallest`)
            else
            document.write(`${c} is smallest`)*/

    
            
        /*year = Number(prompt("enter a year :"))    
        if(year%4==0)
           document.write(`${year} is a leap year`)
        else
           document.write(`${year} is not a leap year`) */ 
           
           
       /* a= Number(prompt("enter a number :"))  
        b= Number(prompt("enter a number :"))  
        c= Number(prompt("enter a number :"))  
        d= Number(prompt("enter a number :"))   
        e= Number(prompt("enter a number :"))  

        if(a>=b && a>=c && a>=c && a>=d && a>=e)
        document.write(`${a} is greatest`)
        else if (b>=c && b>=d && b>=e)
        document.write(`${b} is greastest`)
        else if (c>=d && c>=e)
        document.write(`${c} is greastest`)
        else if (d>=e)
        document.write(`${d} is greatest`)
        else
        document.write(`${e} is greatest`)*/ 

        /*num=Number(prompt("enter a no. :"))
        if(num==1)
        document.write(`${num} has a 31 days`)
        else if(num==2)
        document.write(`${num} has a 28 days`)
        else if(num==3)
        document.write(`${num} has a 31 days`)
        else if (num==4)
        document.write(`${num} has a 30 days`)
        else if(num==5)
        document.write(`${num} has a 31 days`)
        else if(num==6)
        document.write(`${num} has a 30 days`)
        else if(num==7)
        document.write(`${num} has a 31 days`)
        else if(num==8)
        document.write(`${num} has a 31 days`)
        else if(num==9)
        document.write(`${num} has a 30 days`)
        else if(num==10)
        document.write(`${num} has a 31 days`)
        else if(num==11)
        document.write(`${num} has a 30 days`)
        else if(num==12)
        document.write(`${num} has a 31 days`)*/


        /*var ch= prompt("enter a character :")
        if(ch.length!=1)
        document.write(`${ch} is not a valid no.`)
        else{
          if(ch>='a' && ch<='z') {
               if(ch=='a' || ch=='e' || ch=='i'  || ch=='o' || ch=='u')
                document.write(`${ch} is a lower case vowel`)
               else
               document.write(`${ch} is a lower case consonant`)    }
         else
             if(ch>='A' && ch<='Z'){
                 if(ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U')
                 document.write(`${ch} is upper case vowel`)
                 else
                 document.write(`${ch} is upper case consonant`)
             }
         else
           if(ch>='1' && ch<='9')  
           document.write(`${ch} is a digit`)    
         else
           if(ch==' ')
           document.write(`space`)*/
            


   // SWITCH CASE USED...
     
  /* var Num=Number(prompt("enter a number :"))
   switch (Num) {
               case 1:
                 document.write("monday")
                 break
               case 2:
                 document.write("tuesday") 
                 break
               case 3:
                  document.write("wednesday")
                  break
               case 4:
                  document.write("thusday") 
                  break 
               case 5:
                  document.write("friday") 
                  break 
               case 6:
                  document.write("saturday") 
                  break
               case 7:
                  document.write("sunday")  
                  break
               default:
                  document.write("invalid")    

   }*/


// MAKE CALCULATOR USING SWITCH MATHOD..

/*var a=Number(prompt("enter a number :"))
var b=Number(prompt("enter a number 2 :"))
var ch=prompt("enter a operator")
switch(ch){
   case '+':
   document.write(`${num1} + ${num2} = ${num1+num2}`)
   break
   case '-':
   document.write(`${a} - ${b} = ${a-b}`) 
   break  
   case '*':
   document.write(`${a} * ${b} = ${a*b}`)  
   break
   case '%':
   document.write(`${a} % ${b} = ${a%b}`)
   break


}*/

// FOR LOOP STATEMENT IN JS 

//for(i=1;i<=10;i++)
//console.log(`helloworld ${i}`)

//for(i=1;i<=10;i++)
//console.log(`har har mahadev ${i}`)

// print table using loop

/*var num=Number(prompt("enter a number :"))
for(let i=1;i<=10;i++){
  document.write(`${num} * ${i} = ${num*i}<br>`)
}*/

/*for(let i=1;i<=50;i+=2){  // print odd no
   document.write(`${i}<br>`)
}*/
/*for (let i=0;i<=50;i+=2){
   document.write(`${i}<br>`)
}*/

/*var start=Number(prompt("enter a no. :"))
var end=Number(prompt("enter a no:"))
sum=0
for(let i=1;i<=50;i++){
     sum=sum+i
}
     document.write(`${sum}`)*/
     

/*var num=Number(prompt("enter a no"))
var sum=0
for(let i=1;i<=num/2;i++){
   if(num%i==0)
   sum=sum+i
   }
if(sum==num)
document.write(`${num} is a perfect number`)
else
document.write(`${num} is a not perfect no`)*/


/*var num=Number(prompt("enter a number"))
var flag=false
for(let i=2;i<=num**0.5;i++){
   if(num%i==0){
     flag=true
     break
   }
}
if(flag==false && num>=2)
document.write(`${num} no is prime`)
else
document.write(`${num} is not a prime no`)*/

/*var num = Number(prompt("enter a number"))
var sum = a+b
document.write(`${a} ${b}`)
while(sum<=num){
   document.write(`${sum}`)
   a=b
   b=sum
   sum=a+b

}*/

// SUM OF TOTAL NO 

/*var num = Number(prompt("Enter a number"))
var sum = 0
while(num!=0){              //12345    1234    123      12         1
     let r = num%10         //5        4       3         2         1
     sum = sum+r            //0+5=5    5+4=9    9+3=12   12+2=14    14=15
     num = parseInt(num/10) //1234     123      12       1           0
      }
      document.write(`sum = ${sum}`)*/
      

    //REVERSE OF ALL DIGIT NO

      /*var num = Number(prompt("Enter a number"))
var rev = 0
while(num!=0){            //124       12        1
  let r = num%10          //4         2         1
  rev = rev*10+r          //0*10+4=4  4*10+2=42 42*10+1=421    
  num = parseInt(num/10)  //12         1
}   
document.write(`rev = ${rev}`)*/

/*var n = Number(prompt("enter a num :"))  //9
var num = n * n   //81
var sum = 0      //81
while(num != 0) {  // 81           8       0
     let r = num % 10   //1            8
     sum= sum + r   //0+1=1       1+8=9
     num=parseInt(num/10) // 8   0
}
if(n==sum)
document.write(`${n} is neon no `)
else
document.write(`${n} is not a neon no`)*/

/*var num=Number(prompt("Enter a number"))
var sum = 0
var n = num
while(num!=0){
   let r = num%10
   sum = sum+r**3
   num = parseInt(num/10)

}
if(n==sum)
document.write(`${n} is Armsrong no`)
else
document.write(`${n} is not Amstrong no`)*/

/*var num=Number(prompt("Enter a number :"))
var sum = 0
var rev = 0
var n = num
while(num!=0){       // 1729        172       17        1         0
let r = num%10       // 9            2         7        1
    sum = sum + r     // 0+9=9       9+2=11    11+7=18  18+1=19
    num = parseInt(num/10)  // 172   17        1         0      
}

num=sum                 //19             1
while(num!=0){//                19       1             0 
   let r = num%10           //  9         1
       rev = rev*10+r       //   0*10+9   9*10+9=91
       num = parseInt(num/10)   // 1       0
}
if(sum*rev==n) 
document.write(`${n} is magical no`)   */


//DO WHILE LOOP STATEMENT

/*var i=1
do{
   console.log(`hello world ${i}`)
   i++
}
while(i<=10)*/

/*do{
   let a=Number(prompt("enter a number :"))
   let b=Number(prompt("enter a number :"))
   var ch=prompt("enter a operator :")

   switch(ch){
      case "+":
         console.log(`${a} + ${b} = ${a+b}`)
         break

      case "-":
        console.log(`${a} - ${b} = ${a-b}`)
        break 

      case "*":
         console.log(`${a} * ${b} = ${a*b}`)
         break
         
      case "**":
         console.log(`${a} ** ${b})= ${a**b}`)   
      break

      case "/":
         console.log(`${a} / ${b})= ${a/b}`)   
         break

      case "%":
            console.log(`${a} % ${b})= ${a%b}`)  
            break 
            
      
         default:
         console.log("invalid option")   

   }
   ch =  prompt("press n to exit\npress any other key for continuos")
 }while(ch!='n')*/

 // NEXTED LOOPS 
 // LOOP IN LOOPS

 /*for(let num=1; num<=20;num++){
   console.log(`table of ${num} is`)
   for(let i=1;i<=10;i++){
      console.log(`${num} * ${i} = ${num*i}`)
   }
      
 }*/


  /*for(let num=1;num<=10000;num++){
   let sum= 0
   for(let i=1;i<=num/2;i++){
      if(num%i==0)
      sum = sum+i
   }
   if(sum==num){
      console.log(num)
   }
 }*/

// CALCULATE TOTAL PRIME NUMBER IN BETWEEN TWO NUMBER LIKE (1-100)

 /*var start = Number(prompt("enter a number :"))
 var end = Number(prompt("enter a number :"))
 var count = 0
 for(num=start;num<=end;num++){
   let flag = false
    for(i=num;i<=num**0.5;i++){
      if(num%i==0){
         flag==true
         break
      }
    }
    if(flag== false && num>=2){
      document.write(`${num}`)
      count++

    }

 }
 document.write(`<br>total prime no = ${count}`)*/

 // PATTERN CASE

 /*for(let i=1;i<=5;i++){
   for(let j=1;j<=5;j++){
      document.write("*")
 }
 document.write("<br>")
 }*/
 

 /*for(i=1;i<=5;i++){
    for(j=1;j<=5;j++){
    document.write(`${j}`)
    }
    document.write("<br>")
 }*/

 /*for(i=1;i<=5;i++){
   for(j=1;j<=5;j++){
   document.write(`${i}`)
   }
   document.write("<br>")
}*/

/*for(i=1;i<=5;i++){
   for(j=1;j<=5;j++){
   console.log(i)
   }
   console.log(`\n`)
}*/

/*for(i=1;i<=5;i++){
   for(j=i;j<=4+i;j++){
   document.write(`${j}`)
   }
   document.write("<br>")
}*/

/*for(i=9;i>=5;i--){
   for(j=i;j>=i-4;j--){
   document.write(`${j}`)
   }
   document.write("<br>")
}*/

/*for(i=1;i<=5;i++){
  for (j=1;j<=i;j++){
   document.write(`*`)
  }
  document.write("<br>")
}*/

/*for(i=1;i<=5;i++){
   for(j=1;j<=i;j++){
   document.write(`${j}`)
   }
   document.write("<br>")
}*/

for(i=1;i<=5;i++){
   for(j=i;j<=2*i-1;j++){
   document.write(`${j}`)
   }
   document.write("<br>")
}






 
  

















   


   











         
         



        







