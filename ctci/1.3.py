def URLify(sentence, length):

	'''
	O(n) because it goes through the entire string and makes changes once. 
	'''

	e = len(sentence) - 1
	for o in reversed(range(length)):
		print(sentence, o, e)
		if sentence[o] == ' ':
			sentence[e] = '0'
			e -= 1
			sentence[e] = '2'
			e -= 1
			sentence[e] = '%'
			e -= 1
		else:
			sentence[e] = sentence[o]
			e -= 1

def main():
	test_cases = [[list('aurora'), 6, list('aurora')],
				  [list(), 0, list()],
				  [list('   '), 1, list('%20')],
				  [list('Mr John Smith    '), 13, list('Mr%20John%20Smith')]]
	n_correct = 0
	for sentence, length, correct_answer in test_cases:
		URLify(sentence, length) 
		if sentence != correct_answer:
			print("Failed: (%s  %i) instead of %s" 
				  % (sentence, length, correct_answer))
		else:
			n_correct += 1
	print("Passed %i / %i test cases" % (n_correct, len(test_cases)))

main()