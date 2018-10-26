

def is_unique1(word):
	"""
	O(n^2) no extra variable
	"""
	for letter_pos in range(len(word)):
		for prev_pos in range(letter_pos):
			if word[letter_pos] == word[prev_pos]:
				return False
	return True


def is_unique2(word):
	"""
	O(n) Go through each letter in the word but to check the map is O(1)
	"""
	existing = {}
	for letter in word:
		if letter in existing:
			return False
		existing[letter] = True
	return True


def is_unique3(word):
	"""
	O(n^2) Go through each letter in the word but to check the list is O(n)
	"""
	existing = []
	for letter in word:
		if letter in existing:
			return False
		existing.append(letter)
	return True

def is_unique4(word):
	"""
	O(n) for the for loop. O(nlogn) for the word sorting. 
	If the word was sorted in place this would not need extra space. 
	"""
	sorted_word = ''.join(sorted(word))

	for i, letter in enumerate(sorted_word[:-1]):
		if letter == sorted_word[i+1]:
			return False
	return True

def main():
	test_cases = [['aurora', False],
				  ['Aurora', False],
				  ['', True],
				  ['Frank', True],
				  ['lilly', False],
				  ['zevia is so damn delicious', False],
				  ['springer', False],
				  ['abcdefghijklmnopqrstuvwxyz1234567890', True]]
	n_correct = 0
	for word, correct_answer in test_cases:
		guess = is_unique4(word) 
		if guess != correct_answer:
			print("Failed on [%s] guessed [%s] instead of [%s]" 
				  % (word, guess, correct_answer))
		else:
			n_correct += 1
	print("Passed %i / %i test cases" % (n_correct, len(test_cases)))

main()