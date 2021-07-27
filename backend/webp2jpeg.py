from PIL import Image

image_number = 31

for image in range(image_number):
    im = Image.open(f"./uploads/room_photos/{image + 1}.webp")
    #im.save(f"./uploads/room_photos/{image + 1}.webp", "jpeg")
    print(im)