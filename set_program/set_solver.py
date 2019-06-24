import random
import matplotlib.pyplot as plt

class Card:
	def __init__(self, color, shape, number, shading):
		self.color = color
		self.shape = shape
		self.number = number
		self.shading = shading
	
	def __repr__(self):
		return self.color + self.shape + self.number + self.shading

def is_set(card0, card1, card2):
	color_all_same = card0.color == card1.color and card2.color == card0.color
	color_all_diff = card0.color != card1.color and card2.color != card0.color and card1.color != card2.color
	if not (color_all_same or color_all_diff):
		return False
	shape_all_same = card0.shape == card1.shape and card2.shape == card0.shape
	shape_all_diff = card0.shape != card1.shape and card2.shape != card0.shape and card1.shape != card2.shape
	if not (shape_all_same or shape_all_diff):
		return False
	number_all_same = card0.number == card1.number and card2.number == card0.number
	number_all_diff = card0.number != card1.number and card2.number != card0.number and card1.number != card2.number
	if not (number_all_same or number_all_diff):
		return False
	shading_all_same = card0.shading == card1.shading and card2.shading == card0.shading
	shading_all_diff = card0.shading != card1.shading and card2.shading != card0.shading and card1.shading != card2.shading
	if not (shading_all_same or shading_all_diff):
		return False
	return True

class Game:
	def __init__(self):
		self.deck = []
		for color in 'RPG':
			for shape in 'ODF':
				for number in '123':
					for shading in 'NSF':
						card = Card(color, shape, number, shading)
						self.deck.append(card)
		random.shuffle(self.deck)
		self.board = []
		for i in range(12):
			self.board.append(self.deck.pop(0))		

	def print_board(self):
		print(" ".join([repr(x) for x in self.board[:4]]))
		print(" ".join([repr(x) for x in self.board[4:8]]))
		print(" ".join([repr(x) for x in self.board[8:]]))

	def find_sets(self):
		counter = 0
		for i in range(len(self.board)):
			for j in range(i + 1, len(self.board)):
				for k in range(j + 1, len(self.board)):
					if is_set(self.board[i], self.board[j], self.board[k]):
						counter += 1
		return counter


def main():
	c0 = Card('R', 'O', '2', 'N')
	c1 = Card('P', 'D', '1', 'F')
	c2 = Card('G', 'F', '3', 'S')
	c3 = Card('G', 'F', '2', 'S')
	print("Is set? ", is_set(c0,c1,c2))
	print("Is set? ", is_set(c0,c1,c3))

	n_games = 100000
	sets = []
	sum_sets = 0
	for i in range(n_games):
		game = Game()
		sets.append(game.find_sets())
	print("Avg:", sum(sets) / n_games)
	for i in range(min(sets), max(sets) + 1):
		print("%i\t%6.3f%%" % (i, 100 * sets.count(i) / n_games))

	plt.hist(sets, bins=10)
	plt.xlabel('Size of initial set')
	plt.ylabel('Number of games with set')
	plt.show()

if __name__ == "__main__":
	main()