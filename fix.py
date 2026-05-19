with open('script.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

parts = js_content.split('<script>')
html_part = parts[0]
actual_js = parts[1] if len(parts) > 1 else ''

new_index_html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RiseIT Consulting - Learn. Fail. Rise.</title>
    <meta name="description" content="RiseIT Consulting is the first student-led IT consulting sandbox that bridges the gap between classroom learning and real industry practice.">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
{html_part}
<script src="script.js"></script>
</body>
</html>'''

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_index_html)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(actual_js)
