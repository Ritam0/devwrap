#include<bits/stdc++.h>
using namespace std;

class Customer{
    int Account_Number,ID_Number,Age,Balence;
    string Name,Gender;

    public:
    Customer(int Account_Number,int Balence,int ID_Number,int Age,string Name,string Gender){
        this->Name=Name;
        this->Account_Number=Account_Number;
        this->Age=Age;
        this->ID_Number=ID_Number;
        this->Balence=Balence;
        this->Gender=Gender;
    }
    Customer(int amount){

    }
    void display(){
        cout<<"\nName : "<<Name<<"\nAccount Number : "<<Account_Number<<"\nBalence : "<<Balence<<"\nAge : "<<Age<<endl;
    }
    void Deposit(int amount){
        this->Balence=this->Balence+amount;
        cout<<"Rs. "<<amount<<" deposited sucesfully total available balence is : "<<Balence<<endl;
    }
    void Withdraw(int amount){
        if(this->Balence<amount){
            cout<<"Your account was not have enough money to withdraw";
        }
        else{
            this->Balence=this->Balence-amount;
            cout<<"Rs. "<<amount<<" withdrawl sucesfull total available balence is : "<<Balence<<endl;
        }
        
    }
};

void deposit(Customer &C){
    cout<<"Enter the amount You want to deposit : ";
    int amount;
    cin>>amount;
    C.Deposit(amount);
    cout<<"Thank You for Banking with us \n";
}
void withdraw(Customer &C){
    cout<<"Enter the amount You want to withdraw : ";
    int amount;
    cin>>amount;
    C.Withdraw(amount);
    cout<<"Thank You for Banking with us \n";
}
void veiwDetails(Customer C){
    C.display();
}

int main(){
    unordered_map<int,Customer>Customer_list;
    cout<<"Enter: 1 for Create Account"<<endl<<"2 for Withdraw"<<endl<<"3 for Deposit"<<endl<<"4 for Account details"<<endl;
    int num;
    cin>>num;
    Customer C1(123456,5000,26900321,21,"Ritam","Male");
    switch(num){
        case 1:{
            Customer C1(123456,5000,26900321,21,"Ritam","Male");
            break;
        }
        case 2:{
            withdraw(C1);
            break;
        }
        case 3:{
            deposit(C1);
            break;
        }
        case 4:{
            veiwDetails(C1);
            break;
        }

        default: cout<<"Invalid Input";
        break;
    }
    
    
}