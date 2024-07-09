# Given two crystal balls that will break if dropped from high enough
# distance, determine the exact spot in which it will break in the most
# optimized way

# That's the one of very few algorithms with O(sqrt(N))
import math

def two_crystal_balls(breaks: list[bool]) -> int:
    jump_amount = math.floor(math.sqrt(len(breaks)))

    last_no_break = 0
    for i in range(jump_amount, len(breaks), jump_amount):
        if breaks[i]:
            last_no_break = i - jump_amount
            break
        last_no_break = i
    
    for _ in range (jump_amount + 1):
        if breaks[last_no_break]:
            return last_no_break
        if last_no_break > len(breaks):
            break
        last_no_break += 1

    return -1

