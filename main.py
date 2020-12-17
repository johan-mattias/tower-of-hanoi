tower1: List[number] = []
tower2: List[number] = []
tower3: List[number] = []

tower1 = [4, 3, 2, 1]
tower2 = []
tower3 = []

print(tower1)
print(tower2)
print(tower3)

def solve(n, source:[], target:[], helper:[]):
    if n > 0:
        # move tower of size n - 1 to helper:
        solve(n - 1, source, helper, target)
        # move disk from source peg to target peg
        if source:
            target.append(source.pop())
        # move tower of size n-1 from helper to target
        solve(n - 1, helper, target, source)

solve(len(tower1), tower1, tower3, tower2)

print('done')
print(tower1)
print(tower2)
print(tower3)