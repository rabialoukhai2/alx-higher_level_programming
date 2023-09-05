#!/usr/bin/python3
for c in range(ord('a'), ord('z') + 1):
    if c != chr('e') and c != chr('q'):
        print("{:c}".format(c), end="")
