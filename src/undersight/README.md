input = [] enemy team picks
output = [] top 3 counters, top for each category, 2 counters for each character,


top 3 counter algorithm
for each enemy picks as pick:


# 2 counters for each character

sortedCountersByCharacter = for each character
    find counters for that character
    sort by score
sortedCountersByCharacter


# top 3 v1

input: array from previous algorithm, showing good counters
output: array of 4 best counter characters

create new array
iterate through input array, keeping count in the new array
sort the new array, take the corresponding characters from the indexes of the 4 greatest values in new array

# top 3 v2

scores = heros.map(() => 0)
for each hero:
    scores[hero] = sum(picks.map(pick => counters[pick-hero].score))
return 3 of sort(scores)
