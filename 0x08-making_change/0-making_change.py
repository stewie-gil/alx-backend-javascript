#!/usr/bin/python3
"""Making change module"""


def makeChange(coins, total):
    a = 0
    new_total = total
    array = sorted(coins, reverse=True)
    total_coins = 0

    if total <= 0:
        return 0
    try:
        while(new_total != 0):
            # check how much largest coin fits in total
            remain = new_total % array[a]

            # check for coins
            to_divide = new_total - remain
            no_coins = to_divide / array[a]

            new_total = remain
            a = a + 1
            total_coins = total_coins + no_coins

        return total_coins
    except(IndexError):
        return -1
