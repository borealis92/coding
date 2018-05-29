def maximum(arr):
	max = 0
	for i in arr:
		if i > max:
			max = i
	return max

print(maximum([1,2,3,4,5,50,7,8,9,10]))
