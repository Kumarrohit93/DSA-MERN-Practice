#include <iostream>
using namespace std;

int partition(int arr[], int s, int e) {
    int paviot = arcr[s];
}

void quickSort(int arr[], int e, int s){
    if(s>=e) return;
    int p = partition(arr, s, e);
    quickSort(arr, s, p-1);
    quickSort(arr, p+1, e);
}

int main()
{
    int n;
    cout << "Enter the value of n: \n";
    cin >> n;
    int arr[] = {};

    cout << "Enter the elements: \n";
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
}