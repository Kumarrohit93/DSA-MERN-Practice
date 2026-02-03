#include<iostream>
using namespace std;

int main() {
    int size;
    cout<<"Enter size: "<<endl;
    cin>>size;
    
    int arr1[size];    
    int arr2[size];    

    cout<<"Enter elements of 1st array: "<<endl;
    for(int i = 0; i < size; i++) {
        cin>>arr1[i];
    }

    cout<<"Enter elements of 2nd array: "<<endl;
    for(int i = 0; i < size; i++) {
        cin>>arr2[i];
    }

    bool equal = true;

    for(int i = 0; i < size; i++) {
        if(arr1[i] != arr2[i]) {
            equal = false;
            break;
        }
    }

    if(equal) {
        cout<<"Arrays are equal\n";
    } else{
        cout<<"Arrays are not equal\n";
    }
}