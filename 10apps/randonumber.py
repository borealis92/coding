import random

print('--------------------------------------------')
print('     Random Number Generator and Comparision')
print('--------------------------------------------')
print()


the_number = random.randint(0, 100)
guess = -1

while guess != the_number:
    guess_answer = input('please place your guess, 0 to 100: ')
    guess = int(guess_answer)

    if guess < the_number:
        print('Guess Higher')
    elif guess > the_number:
        print('Guess Lower')
    else:
        print('You win')

print('done')
