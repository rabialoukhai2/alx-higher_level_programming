#!/usr/bin/python3
# Author - rabia Loukhai

for i in range(ord('z'), ord('a') - 1, -1):
    if i % 2 == 0:
        print(chr(i).upper(), end='')
    else:
        print(chr(i).lower(), end='')
