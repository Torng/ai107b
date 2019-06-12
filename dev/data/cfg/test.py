import os
import random

f = open('test.txt','w')
for i in range(78,100):
    s = str(i)
    f.write('/Users/HawkTorng/darknet/dev/data/'+s+'.jpg')
    f.write('\n')
    f.write('/Users/HawkTorng/darknet/dev/data/0'+s+'.jpg')
    f.write('\n')
