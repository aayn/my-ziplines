f = open("words.txt").readlines()
for i in f:
    print('"' + i.strip() + '",', end=" "),
