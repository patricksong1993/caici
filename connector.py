#!/usr/bin/python
#coding:utf-8

import psycopg2
import sys
import pprint

conn_string = "host='ec2-46-137-73-65.eu-west-1.compute.amazonaws.com' dbname='dpttjv36re0je' user='rjtgggoxlcbowc' password='b2haSYPENgaSp6axo5biq2l9jC'"
conn = psycopg2.connect(conn_string)
cursor = conn.cursor()


def get_all_cato():
    cursor.execute("SELECT category FROM game")
    records = cursor.fetchall()
    catos = []
    for r in records:
        catos.append(r[0])
    return catos

def get_items(cato):
    cursor.execute("SELECT items FROM game WHERE id="+str(cato))
    records = cursor.fetchall()
    return records[0][0]