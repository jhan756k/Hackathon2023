from urllib import parse

print(parse.quote("2020두37536대법원"))

t = "\n 나는 \n happy \n"

tlist = " ".join(x for x in t.split(" ") if x != "\n")
print(tlist)
