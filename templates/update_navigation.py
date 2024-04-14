import os

# Define the desired navigation order
navigation_order = ['Home', 'About', 'Portfolio', 'Web Development', 'Music', 'Video Games', 'Contact']

# Read the template HTML file with the desired navigation order
with open('template.html', 'r') as f:
    template_content = f.read()

# Define the directory containing HTML files
directory = 'templates'

# Iterate through each directory and subdirectory
for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.html'):
            # Construct the full path of the HTML file
            file_path = os.path.join(root, file)

            # Read the content of the HTML file
            with open(file_path, 'r') as f:
                html_content = f.read()

            # Find the start and end index of the navigation section
            start_index = html_content.find('<nav>')
            end_index = html_content.find('</nav>') + len('</nav>')

            # Replace the existing navigation section with the template navigation
            modified_content = html_content[:start_index] + template_content + html_content[end_index:]

            # Write the modified content back to the HTML file
            with open(file_path, 'w') as f:
                f.write(modified_content)