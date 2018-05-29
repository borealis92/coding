# link to assignment: http://rosettacode.org/wiki/A%2BB
def AplusB(A, B):
	if A <= -1000 or A >= 1000 or B <= -1000 or B >= 1000:
		print("Number is out of range")
		return None
	else:
	 	return A + B

for A in [-1000, 1, 1000]:
	for B in [-1000, 1, 1000]:
		print(AplusB(A, B), A, B)