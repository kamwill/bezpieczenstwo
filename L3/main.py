#!/usr/bin/python3

from selenium import webdriver
import subprocess


def main():
    with open('ex.txt') as f:
        read_data = f.readline().strip()

    s = read_data.split("\t")
    page = s[0]
    uri = s[1]
    cookies = s[2].split("; ")
    browser = webdriver.Firefox()

    browser.get("http://"+page+uri)

    for cookie in cookies:
        c = cookie.split("=")
        browser.add_cookie({
            'name': c[0],
            'value': c[1]

        })


if __name__== "__main__":
    main()
