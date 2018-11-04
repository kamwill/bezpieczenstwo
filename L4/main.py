#!/usr/bin/python3
import operator
import re
from collections import Counter
import sys


def find_word(cipher_xor, word):
    return [(a.span()) for a in list(re.finditer(word, cipher_xor, re.IGNORECASE))]


def get_message(ciphers, key, key_tuple, znaki):
    messages = []
    for i in range(len(ciphers)):
        m = decode(ciphers[i], key)
        messages.append(m)
        errors = check_message(m, znaki)

        if len(errors) > 0:
            key = fix_key(key, key_tuple, errors)
            for j in range(i+1):
                messages[j] = decode(ciphers[j], key)

    return messages


def check_message(m, znaki):
    errors = []
    for i in range(len(m)):
        z = set(m[i])
        if z.issubset(znaki):
            errors.append(i)

    return errors


def decode(cipher, key):
    result = ""
    for i in range(len(cipher)):
        if key[i] != "*":
            x = cipher[i] ^ key[i]
            result += chr(cipher[i] ^ key[i])
        else:
            result += "*"

    return result


def find_key(cipher_org, cipher_xor, word, key):
    f = find_word(cipher_xor, word) #indeksy znalezionego słowa
    n = len(f)
    if n > 0:
        for i in range(n):
            for j in range(f[i][0], f[i][1]):
                key[j].append(ord(cipher_xor[j]) ^ cipher_org[j])


def resolve_key(key, key_tuple):
    for i in range(len(key)):
        l = Counter(key[i])
        key_tuple.append(l)
        if len(l) > 0:
            r = max(l.items(), key=operator.itemgetter(1))[0]
            key[i] = r
        else:
            key[i] = "*"


def fix_key(key, key_tuple, errors):
    for error in errors:
        del key_tuple[error][key[error]]
        if len(key_tuple[error]) > 0:
            key[error] = max(key_tuple[error].items(), key=operator.itemgetter(1))[0]
        else:
            key[error] = "*"

    return key


def get_text(s):
    r = ""
    for i in range(len(s)):
        if s[i] is not None:
            r += chr(s[i])
        else:
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


def main(argv):

    maks = 0
    n = int(argv[2])
    with open(argv[1]) as f:
        read_data = f.read()

    with open('slo.txt') as slownik:
        words = slownik.read()

    with open('znaki.txt') as z:
        znaki = z.read()

    words = words.replace("\n", " ")
    words = words.split(" ")
    words = list(set(words))

    znaki = znaki.split(" ")

    #parsowanie pliku wejsciowego
    read_data = re.sub(r"kryptogram nr [0-9]+:\n", '', read_data)
    read_data = re.sub(r"\(zad 1\).*\:", '', read_data)
    ciphers = [line for line in read_data.split('\n') if line.strip() != '']

    #zamiana wartosci binarnych na int
    for i in range(len(ciphers)):
        ciphers[i] = ciphers[i].split(" ")
        l = len(ciphers[i])
        if l > maks:
            maks = l
        for j in range(l):
            ciphers[i][j] = get_int(ciphers[i][j])

    #zmienne pomocnicze
    key = [[] for _ in range(maks)]
    same_letter = [[] for _ in range(maks)]
    letter = [[None for _ in range(maks)] for _ in range(n)]
    letter_counter = [0 for _ in range(150)]


    #xor szyfrogramów każdy z każdym
    for i in range(n):
        for j in range(n):
            if i != j:
                xor_ciphers(ciphers[i], ciphers[j], i, j, same_letter, letter, letter_counter)

    #zamień wartości int liter na pełen tekst
    messages = []
    for cipher in letter:
        text = get_text(cipher)
        messages.append(text)

    #szukanie popularnych słów
    #words=[" i "]
    for i in range(n):
        for word in words:
            find_key(ciphers[i], messages[i], word, key)

    key_tuple =[]
    resolve_key(key, key_tuple)

    #for i in range(len(key_tuple)):
    #    if len(key_tuple[i]) > 1:
    #        print(i, ": ", key_tuple[i])

    licznik = 0
    for i in range(maks):
        if key[i] != "*":
            licznik += 1

    get_message(ciphers, key, key_tuple, znaki)


    for cipher in ciphers:
        print(decode(cipher, key))


if __name__== "__main__":
    main(sys.argv)