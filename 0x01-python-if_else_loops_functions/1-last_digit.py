#!/usr/bin/python3
import random
number = random.randint(-10000,10000)

str_number = str(number)
last_number = int(str_number[-1])

if last_number > 5:
    print(f"Last digit of {str_number} is {last_number} and is greather than 5")
elif last_number < 6 and last_number != 0:
    print(f"Last digit of {str_number} is {last_number} and is less than 6 and not 0")
else:
    print(f"Last digit of {str_number} is {last_number} and is 0")
