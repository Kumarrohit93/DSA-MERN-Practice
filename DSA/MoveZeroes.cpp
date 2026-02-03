#include <iostream>
using namespace std;

int main()
{
    int size = 10;
    int arr[] = {1, 2, 3, 0, 0, 5, 4, 0, 8, 10};
    int pos = 0;

    for(int i = 0; i < size; i++) {
        if(arr[i] != 0) {
            arr[pos] = arr[i];
            pos++;
        }
    }

    while(pos < size) {
        arr[pos] = 0;
        pos++;
    }
    
    cout<<"Moves zeroes: "<<endl;
    for(int i = 0; i < size; i++) {
        cout<<arr[i]<<" ";
    }
}