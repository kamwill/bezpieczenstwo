#!/usr/bin/python3

import re

def decode(cipher_org, cipher_xor, word, key):
    f = [(a.span()) for a in list(re.finditer(word, cipher_xor))]


def check_word(message, word):
    return word in message


def get_message(cipher, d):
    s = ""

    for letter in cipher:
        s += d.get(letter, " ")

    return s

def create_dict(letter_counter, frequency):
    d={}
    for i in range(len(frequency)):
        if max(letter_counter) > 0:
            m = letter_counter.index(max(letter_counter))
            d.update({m:frequency[i]})
            letter_counter[m] = 0
        else:
            return d
    return d


def get_text(s):
    r = ""
    for i in range(len(s)):
        if s[i] is not None:
            r += chr(s[i])
        else :
            r += " "
    return r


def get_int(s):
    s = s[::-1]
    result = 0
    for i in range(len(s)):
        result += pow(2, i)*int(s[i])

    return int(result)


def xor_string(s1,s2):
    r=""
    for i in range(len(s1)):
       r += chr(ord(s1[i]) ^ ord(s2[i]))
    return r


def add_to_set(sets, values):
    r =[]
    for i in range(len(sets)):
        if values[0] in sets[i] or values[1] in sets[i]:
            sets[i].union(set(values))
            r=sets
            return r
    sets.append(set(values))
    r = sets
    return r


def xor_ciphers(c1, c2, k, l, same_letter, letter, letter_counter):
    s = [k,l]
    for i in range(min(len(c1), len(c2))):      #dlugosc krotszego z szyfrogramow
        xor = c1[i] ^ c2[i]
        if xor == 0:
            same_letter[i] = add_to_set(same_letter[i], s)
        elif 65 <= xor <= 90:
            v = xor + 32
            letter[k][i] = v
            letter[l][i] = v
            letter_counter[v] += 1
        elif 97 <= xor <= 122:
            v = xor - 32
            letter[k][i] = v
            letter[l][i] = v
            letter_counter[v+32] += 1



def main():
    n = 20
    maks = 0
    frequency = ["a", "i", "o", "e", "z", "n", "r", "w", "s", "t", "c", "y", "k", "d", "p", "m", "u", "j", "l"]
    with open('file.txt') as f:
        read_data = f.read()

    read_data = re.sub(r"kryptogram nr [0-9]+:\n", '', read_data)
    read_data = re.sub(r"\(zad 1\).*\:", '', read_data)
    ciphers = [line for line in read_data.split('\n') if line.strip() != '']

    for i in range(len(ciphers)):
        ciphers[i] = ciphers[i].split(" ")
        l = len(ciphers[i])
        if l > maks:
            maks = l
        for j in range(l):
            ciphers[i][j] = get_int(ciphers[i][j])

    key = [0 for _ in range(maks)]
    same_letter = [[] for _ in range(maks)]
    letter = [[None for _ in range(maks)] for _ in range(n)]
    letter_counter = [0 for _ in range(150)]



    for i in range(n):
        for j in range(n):
            if i != j:
                xor_ciphers(ciphers[i], ciphers[j], i, j, same_letter, letter, letter_counter)

    for i in range(n):
        print(i, ": ", letter[i])

    for i in range(maks):
        print(i, ": ", same_letter[i])


    print(letter_counter[97])
    d = create_dict(letter_counter, frequency)
    print(len(frequency), len(d), d)

    #print(get_message(letter[19], d))

    get_text(letter[1])
    mess = ''.join(letter[1])
    print(mess,mess.find("ale"))


if __name__== "__main__":
    main()