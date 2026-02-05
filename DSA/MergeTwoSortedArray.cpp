#include <iostream>
using namespace std;

int main()
{
    int n = 3, m = 3;
    int arr1[] = {1, 3, 5};
    int arr2[] = {2, 4, 6};
    int resultedArr[6];
    int i = 0, j = 0, k = 0;
    while (i < n && j < m)
    {
        if (arr1[i] < arr2[j])
        {
            resultedArr[k++] = arr1[i++];
        }
        else
        {
            resultedArr[k++] = arr2[j++];
        }
    }

    while (i < n)
    {
        resultedArr[k++] = arr1[i++];
    }

    while (j < m)
    {
        resultedArr[k++] = arr2[j++];
    }

    for (int x = 0; x < 6; x++)
    {
        cout << resultedArr[x] << endl;
    }
}