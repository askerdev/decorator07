import os

file_paths = []

for root, dirs, files in os.walk(input()):
    for dir in files:
        print(f"\"/images/assortment{os.path.join(root, dir)[1:]}\",")