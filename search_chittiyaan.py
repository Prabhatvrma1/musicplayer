import os

all_audio = os.listdir("assets/audio")
print(f"Total audio files: {len(all_audio)}")

matches = []
for f in all_audio:
    if any(k in f.lower() for k in ["chitt", "kalai", "roy", "meet bros", "kanika"]):
        matches.append(f)

print("Matches in assets/audio:")
for m in matches:
    print(" ", m)

# Also check root or whole workspace for chittiyaan
for root, dirs, files in os.walk("."):
    if ".git" in root: continue
    for f in files:
        if "chitt" in f.lower() or "kalai" in f.lower():
            print("Found in workspace:", os.path.join(root, f))
