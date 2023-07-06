//uniary = Require only one oprand
//binary = require only two oprands
//ternary = require three oprands

/*arthematic operators
    +  Addition 
    -  Substraction
    *  Multiplication 
    /  Division (quotient)
    %  Division(Reminder)
    **  power   */

    //precedence L to R

   /* var a= 10*3%20*5/25*50%70/10*7%30+45%55/9*5*(5*2**5)%20*3
    console.log(a)

    console.log(15+6)
    console.log(15+"6")
    console.log(15+"hello world")

    console.log(15-"6")  // gives 9
    console.log(15-"hello world")  // it  gives nan(not a number)

    
    console.log(15/6)
    console.log(15/"6")
   // console.log(15/"hello world")

    console.log(15/"6")  // gives 9
    console.log(15/"hello world")  // it  gives nan(not a number)

    console.log(15*6)
    console.log(15*"6")
    console.log(15*"helloworld")

    console.log(15**6)
    console.log(15**"6")
    console.log(15**"hello world")


    // Assignment operators(=);
    // used to assign value of rhs operand to lhs operand
    //eg sum=a+b;  valid
    //eg a+b=sum;  invalid
    //eg a=b=c;     valid

    //catogary : Binary 
    //precedence: R to l

    /* short hand oprator/composite/compound

    a+=b
    a-=b
    a*=b
    a/=b
    a%=b
    a**=b


    relational opretor

    <  less than
    <= less than equal
    >  greater than
    >= greater then equal
    != not equal    (value)
    !== not identical  (value and datatype)
    == equal         (',,,,,,,,)
    === identical*/


   /* console.log(10>=2)
    console.log(10>2)
    console.log(10<=2)

    console.log(10!=10)
    console.log(10==10)
    console.log(10==="10")
    console.log("10"==="10")
    console.log("10"!=="10")
    console.log(10!=10)
    console.log(20!=20)
    console.log(20==20)*/
    
    // logical operator
    //AND OPRATOR
    //(0,NULL,UNDEFINE,"") THESE ARE GIVE FALSE
    
    // AND OPERATOR

    //console.log(10 && 20)   true
    //console.log (10 && 0)    false
    //console.log(0 && 20)     false
    //console.log(0 && 0)      false
    //console.log(10 && "")     false
    //console.log(0 && "")       false

    // OR OPERATOR
    
    //console.log(10 || 20)   true
    //console.log (10 || 0)    true
    //console.log(0 || 20)     true
    //console.log(0 || 0)      false
    //console.log(10 || "")     true
    //console.log(0 || "")       false


    /*a  b  a&b  a||b  a^b(a|b - a&b)
    0  0   0     0    0  
    0  1   0     1    1
    1  0   0     1    1
    1  1   1     1    0*/

   /* var a =  35
    var b =  73
    var c = a&b
    var d = a|b
    var e = a^b
    console.log(c,d,e)*/
   /* a= 35 : 0  1  0  0  0  1  1
    b= 73 :   1  0  0  1  0  0  1

    c= a&b:   0  0  0  0  0  0  1
              64 32 16 8  4  2  1  
    -------------------------------
               0  0  0  0  0  0  1= 1ans

    d=a|b  :  1  1  0  1  0  1  1
              64 32 16 8  4  2  1
        --------------------------
              64+32+0+8+0+2+1 = 107   
              
    e=a^b :   1  1  0  1  0  1  0
              64 32 16 8  4  2  1
          ------------------------
              64+32+0+8+0+2+0= 106  */            
  

    //BITWISE OPERATOR  
                 
          /*     (-x-1)
           +ve 20                -ve  -30

           
           -ve -1                +ve   30
           -1   -1               -1    -11
           -------------------------------
           -21                      29
           
           
           +ve 20                   -ve -30


           -ve -20                   +ve  30
         ----------------------------------------
           -20                         30*/

          /*
          CONDITIONAL OPERATOR OR TERNARY OPERATOR
          used when we have to execute a statement out of two statement 
          according to condition syntex:

          condition?statement1:statement2;
                      true         false


                increament(++)    i.e x=x+1
            pre-increament           post-increament
             (++oprand)                (operand++)
            -----------------       --------------------
             first increament          first Assigment
             then Assignment            then Increament

          math.pow()  :  used to get power any no
                          eg math.pow(2,3)  i.e 8
          math.sqrt()  :   used to get aqrt any no
                            eg math.sqrt(25)   i.e 5
                            eg.math.sqrt(10)  i.e 3.33*/

          /*num=Number(prompt("enter a num"))       
          n=parseInt(Math.sqrt(num))
          n*n==num?document.write(`${num} number is perfect square`):document.write(`${num}is not perfect square root`)*/           

          //CHEAK TWO NO ARE EQUAL OR NOT

          //a=Number(prompt("Enter a first no. :"))
          //b=Number(prompt("enter a second no :"))
          //a^b?document.write("both are equal"):document.write("both are not equal")

          // CHEAK NO ARE EVEN OR ODD
          //num=Number(prompt("enter a number :"))
          //num&1?document.write(`${num}no is odd`):document.write(`${num} no. is even`)
                
          /*var a=10
          var b=a++  //b=10 a=11
          var c=++a  // c=12  a=12
          var d=--a // a=11  d=11
          var e=a--  // e=11 a=10
          --a          //9
          a--          //8

          console.log(a,b,c,d,e)

          var a=10
          var b= a++ + ++a
          console.log(a,b)

          var a =10   
          var b= a-- - a--
          var c= a-- + --a -  b++ - ++b
          console.log(a,b,c)*/

         /*var a= 10
         var b= ++a-a-a--
         var c= a++ - ++a - a - b++ -b-- +b
         var d= a-- - b++ +c--
         console.log(a,b,c,d)*/

             

    
    
    
    
           /*var a = Number(prompt("Enter the Number : "))
    a%2==0?document.write(`${a} is even`):document.write(`${a}is odd`) */      
        //console.log("sagar prat")
        //console.log("rahul sagar")

        //NUM IS PERFECT SQURE NUMBER OR NOT

       //var num = Number(prompt("enter a number:"))
        //var n = parseInt(Math.sqrt(num))
        //n*n==num?document.write(`${num} is perfect squre no:` ):document.write(`${num}is not perfect no:`)
     

        /*num=Number(prompt("enter a number :"))
        if(num%2==0)
        document.write(`${num}num is even`)
        else
        document.write(`${num}is  a odd number`)*/

        // nested if else case 

        a=Number(prompt("enter a no"))
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
            document.write(`${c} is smallest`)


           



     
  




























           
                  




     

    




