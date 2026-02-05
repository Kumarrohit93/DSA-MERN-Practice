#include <iostream>
using namespace std;

int main()
{
    int n = 5, m = 6;
    int a[] = {1, 2, 3, 2, 1};
    int b[] = {3, 2, 2, 3, 3, 2};
    int uniqueIndex = 0;
    int unionArr[11] = {};

    for(int i = 0; i < n; i++) {
        if(a[i] != a[uniqueIndex]) {
            uniqueIndex++;
            unionArr[uniqueIndex] = a[i];
        }
    }

    cout<<"Union of 1st Array: "<<endl;
    for(int i = 0; i <= uniqueIndex; i++) {
        cout<<unionArr[i]<<endl;
    }
}