
def same_letters(word1, word2):
	"""
	O(1) if the lengths are not the same because that means that they 
	can't have the same numbe rof characters.

	otherwise,

	O(nlogn) because of sorting. 
	
	"""
	if len(word1) != len(word2):
		return False

	sorted_word1 = ''.join(sorted(word1))
	sorted_word2 = ''.join(sorted(word2))

	
	if sorted_word1 != sorted_word2:
		return False

	else:
		return True

def main():
	test_cases = [['aurora', 'auror',False],
				  ['Aurora', 'aurora', False],
				  ['', '', True],
				  ['Frank', 'knarF', True],
				  ['lilly', 'ylliil', False],
				  ['zevia is so damn delicious','zevia is so damn d', False],
				  ['springer', 'springhter', False],
				  ['abcdefghijklmnopqrstuvwxyz1234567890', 'abcdefghijklmnopqrstuvwxyz1234567890', True]]
	n_correct = 0
	for word, word2, correct_answer in test_cases:
		guess = same_letters(word, word2) 
		if guess != correct_answer:
			print("Failed on [%s] guessed [%s] instead of [%s]" 
				  % (word, word2, guess, correct_answer))
		else:
			n_correct += 1
	print("Passed %i / %i test cases" % (n_correct, len(test_cases)))

main()
