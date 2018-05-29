def counting(arr):
	if arr == []:
		return 0
	return 1+counting(arr[1:])

print(counting([1,2,3,4,5,6,7,8,9,10]))


def countering(arr):
	return len(arr)
print(countering([1,2,3,4,5,6,7,8,9,10]))


class butthole:
	def __init__(self, arr):
		print("puckering", arr)
		self.arr = arr
		self.__arr = arr

	def len(self):
		return 5

	def __len__(self):
		return len(self.arr)

	def __str__(self):
		return "butthole(%s)" % self.__arr

	def __add__(self, other):
		return butthole(self.arr + "<3" + other.arr)

a = butthole("aurora")
k = butthole("karol")

print(a == k)
print(a+k)
print(a.__add__(k))
print(butthole.__add__(a, k))