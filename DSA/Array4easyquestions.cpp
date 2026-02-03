#include<iostream>
using namespace std;

int main() {
    int arr[] = {2, 45, 21, 67, 54, 90, 25, 96, 54, 24, 12};
    int size = 11, sum = 0;

    cout<<"All elements are: \n";
    for(int i = 0; i < size; i++) {
        cout<<arr[i]<<endl;
        sum+=arr[i];
    }

    cout<<"Sum of all elements is: "<<sum<<endl;
}