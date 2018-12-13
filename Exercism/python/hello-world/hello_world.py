levelsToJump = -1
while levelsToJump < 0 or levelsToJump > 23:
    levelsToJump = int(input('enter levels: '))
print(levelsToJump)
for level in range(levelsToJump):
    print(" " * level, end="")
    print("#" * (levelsToJump - level))