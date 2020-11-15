#SUMMER OF '69: Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 9 (every 6 will be followed by at least one 9). Return 0 for no numbers.
#summer_69([1, 3, 5]) --> 9
#summer_69([4, 5, 6, 7, 8, 9]) --> 9
#summer_69([2, 1, 6, 9, 11]) --> 14
def summer_69(arr):
    indx1 = [i for  i, x in enumerate(arr) if x == 6 ]
    indx2 = [x for x, j in enumerate(arr) if j == 9]
    if(len(indx1) != 0 and len(indx2) != 0):
        if(arr[indx2[0]] != arr[-1]):
            return sum(arr[0:indx1[0]],arr[indx2[0]+1])
        else:
            return sum(arr[0:indx1[0]])     
    else:
        return sum(arr)