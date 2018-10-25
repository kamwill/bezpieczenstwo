#!/bin/bash

sudo timeout 15s tshark -Y http.cookie -T fields -e http.host -e http.request.uri -e http.cookie > ex.txt
 ./main.py

