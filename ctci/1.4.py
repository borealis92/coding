def construct_palindrome(word):
	word = word.lower()
	count_letters = {}

	for letter in word:
		if letter in count_letters:
			count_letters[letter] += 1
		else:
			count_letters[letter] = 1

	have_u_seen_an_odd = False
	for key in count_letters:
		if count_letters[key] % 2 != 0:
			if have_u_seen_an_odd == False:
				have_u_seen_an_odd = True
			else:
				return False
	return True


def main():
	test_cases = [['radar', True],
				  ['boob', True],
				  ['booob', True],
				  ['wwweee', False],
				  ['Frank', False],
				  ['FranF', False],
				  ['fhskjdnfdd', False],
				  ['Boob', True],
				 ]
	n_correct = 0
	for word, correct_answer in test_cases:
		guess = construct_palindrome(word) 
		if guess != correct_answer:
			print("Failed on [%s] guessed [%s] instead of [%s]" 
				  % (word, guess, correct_answer))
		else:
			n_correct += 1
	print("Passed %i / %i test cases" % (n_correct, len(test_cases)))

main()



