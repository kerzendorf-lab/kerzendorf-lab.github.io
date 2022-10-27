from jinja2 import Environment, FileSystemLoader

environment = Environment(loader=FileSystemLoader("templates/"))
students =["Sona", "Vicente", "Andrew", "Jack", "Josh", "Wolfgang"]


template = environment.get_template("group_member.html.j2")

for student in students:
    filename = f"group_member.html"
    content = template.render(students=students)
    with open(filename, mode="w", encoding="utf-8") as message:
        message.write(content)
        print(f"... wrote {filename}")
        