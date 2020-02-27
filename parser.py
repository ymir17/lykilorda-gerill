import csv

def main():
    f = open('IS_WN/core-isl.txt', 'r')
    w = open('ord.csv', 'w')
    s = f.readlines()
    # for i in s:
    #     i = i.strip()
    #     print(i)
    lst = []
    for l in s:
        l1 = l.strip()
        l2 = l1.split(' ', 3)
        l2.pop(1)
        l2.pop(-1)
        l2[-1].strip()
        # l2[1] = l2[1].strip('[')
        # l2[1] = l2[1].strip(']')
        # for i in range(len(l2)):
        #     l2[i] = l2[i].strip('[')
        #     l2[i] = l2[i].strip(']')
        # print(l2)
        lst.append(l2)
    for l in lst:
        print(l)
    with w:
        writer = csv.writer(w)
        writer.writerows(lst)
    f.close()

main()