import re
# PREFIX = '/Computer-Science-Notes/'


def non_breaking_space(markdown):
    return re.sub('[\u00A0\u1680\u180E\u2000-\u200B\u202F\u205F\u3000\uFEFF]', '&emsp;', markdown)


def update_heading(markdown):
    file_content = markdown.split('\n')
    markdown = ''
    code = False
    for line in file_content:
        if not code:
            if line.startswith('```'):
                code = True
            elif line.startswith('#') and line.count('#') <= 5:
                heading_number = line.count('#') + 1
                line = '#' * heading_number + ' ' + line.replace('#', '')
        elif line.startswith('```') and code:
            code = True
        markdown += line + '\n'
    return markdown


def strip_comments(markdown):
    file_content = markdown.split('\n')
    markdown = ''
    for line in file_content:
        if not re.search(r'%%(.*)%%', line) or not line.startswith('%%') or not line.endswith('%%'):
            markdown += line + '\n'
    markdown = re.sub(r'%%(.*)%%', '', markdown, flags=re.DOTALL)
    return markdown


def fix_tags(metadata):
    tags = metadata.get('tags', None) or metadata.get('tag', None)
    if tags and isinstance(tags, str):
        tags = tags.split('/')
        tags = [tag.strip() for tag in tags]
        metadata['tags'] = tags
    return metadata


def fix_excalidraw_link(markdown, site_url):
    pattern = re.compile(
        r'!\[(.*?)\]\((.*?\.excalidraw\.md)\s*"(.*?\.excalidraw)"\)')
    excalidraw_links = re.finditer(pattern, markdown)
    for link in excalidraw_links:
        groups = link.groups()
        new_dark_groups = tuple(group.replace(
            '.md', '.dark.svg') for group in groups)
        new_light_groups = tuple(group.replace(
            '.md', '.light.svg') for group in groups)
        new_dark_link = f'![Excalidraw]({site_url}{new_dark_groups[1]}#only-dark "Excalidraw dark")'
        new_light_link = f'![Excalidraw]({site_url}{new_light_groups[1]}#only-light "Excalidraw light")'
        # Remove the leading ../../.....
        new_dark_link = new_dark_link.replace('../', '')
        new_light_link = new_light_link.replace('../', '')
        markdown = markdown.replace(
            link.group(), new_dark_link + '\n' + new_light_link)
    return markdown


def on_page_markdown(markdown, files, page, config, **kwargs):
    # print(f"Page: {page}")
    # print(f"COnfig: {config}")
    # print(f"kWARGS: {kwargs}")
    # print(f"Files: {files}")
    if page.title.endswith('.excalidraw.md'):
        return None
    markdown = fix_excalidraw_link(markdown, config["site_url"])
    config_hooks = config['extra'].get(
        'hooks', {'strip_comments': True, 'fix_heading': False})
    if config_hooks['strip_comments']:
        markdown = strip_comments(markdown)
    if config_hooks['fix_heading']:
        markdown = update_heading(markdown)
    metadata = fix_tags(page.meta)
    page.meta = metadata
    markdown = non_breaking_space(markdown)
    return markdown

# def Theme():
#     pass
# def Locale():
#     pass
# def _IpAddressValue():
#     pass
# m = {
#     'config_file_path': '/Users/benjitusk/Documents/Obsidian Vault-Computer Science/Computer Science/mkdocs.yml',
#     'site_name': "Benji Tusk's CS Notes",
#     'nav': None, 'pages': None, 'exclude_docs': None, 'not_in_nav': None,
#     'site_url': 'http://127.0.0.1:8000/Computer-Science-Notes/',
#     'site_description':
#     'A cool description of your site', 'site_author': 'Benji Tusk',
#     'theme': Theme(name='material',
#                    dirs=['/Users/benjitusk/Documents/Obsidian Vault-Computer Science/Computer Science/docs',
#                          '/Users/benjitusk/Documents/Obsidian Vault-Computer Science/Computer Science/venv/lib/python3.10/site-packages/material',
#                          '/Users/benjitusk/Documents/Obsidian Vault-Computer Science/Computer Science/venv/lib/python3.10/site-packages/mkdocs/templates'],
#                    static_templates={'sitemap.xml', '404.html'},
#                    name='material', locale=Locale('en', territory='US'), language='en', direction=None,
#                    features=['content.action.edit',
#                     'navigation.indexes',
#                     'navigation.top',
#                     'navigation.tabs',
#                     'navigation.tabs.sticky',
#                     'navigation.footer',
#                     'navigation.expand',
#                     'search.suggest',
#                     'search.highlight'],
#                    font={'text': 'Segoe UI', 'code': 'Roboto Mono'},
#                    icon=None, favicon='assets/meta/favicons.png',
#                    logo='assets/meta/favicons.png',
#                    highlightjs=True,
#                    palette=[{'media': '(prefers-color-scheme: light)', 'scheme': 'default', 'primary': 'blue', 'accent': 'purple', 'toggle': {'icon': 'material/brightness-7', 'name': 'Switch to dark mode'}}, {'media': '(prefers-color-scheme: dark)', 'scheme': 'slate', 'primary': 'deep purple', 'accent': 'light blue', 'toggle': {'icon': 'material/brightness-4', 'name': 'Switch to light mode'}}]
#                 ),
#     'docs_dir': '/Users/benjitusk/Documents/Obsidian Vault-Computer Science/Computer Science/docs',
#     'site_dir': '/var/folders/ns/r8pwh4qn3tbc73tgy9p_79lr0000gn/T/mkdocs_cldmznzr',
#     'copyright': '© Benji Tusk 2023. All rights reserved.',
#     'google_analytics': None,
#     'dev_addr': _IpAddressValue(host='127.0.0.1', port=8000),
#     'use_directory_urls': True,
#     'repo_url': 'https://github.com/benjitusk/Computer-Science-Notes',
#     'repo_name': 'GitHub',
#     'edit_uri_template': None,
#     'edit_uri': 'edit/main/docs/',
#     'extra_css': ['https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css', 'https://cdn.jsdelivr.net/gh/ObsidianPublisher/assets@main/dist/styles.css', 'assets/css/admonition.css', 'assets/css/custom_attributes.css', 'assets/css/customization.css'], 'extra_javascript': ['javascripts/mathjax.js', 'https://polyfill.io/v3/polyfill.min.js?features=es6', 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js', 'https://cdn.jsdelivr.net/gh/ObsidianPublisher/assets@main/dist/javascript.js'], 'extra_templates': [], 'markdown_extensions': ['toc', 'tables', 'fenced_code', 'footnotes', 'nl2br', 'attr_list', 'sane_lists', 'meta', 'smarty', 'mdx_breakless_lists', 'def_list', 'mdx_math', 'pymdownx.arithmatex', 'pymdownx.details', 'pymdownx.magiclink', 'pymdownx.critic', 'pymdownx.caret', 'pymdownx.keys', 'pymdownx.mark', 'pymdownx.tilde', 'pymdownx.highlight', 'pymdownx.tasklist', 'pymdownx.emoji', 'admonition', 'pymdownx.inlinehilite', 'pymdownx.snippets', 'pymdownx.superfences'], 'mdx_configs': {'mdx_math': {'enable_dollar_delimiter': True}, 'pymdownx.arithmatex': {'generic': True}, 'pymdownx.highlight': {'use_pygments': True, 'anchor_linenums': True, 'auto_title': True, 'linenums': True}, 'pymdownx.tasklist': {'custom_checkbox': True}, 'pymdownx.emoji': {'emoji_index': < function twemoji at 0x10f94c3a0 > , 'emoji_generator': < function to_svg at 0x10f94c550 > }, 'toc': {'permalink': True}, 'pymdownx.superfences': {'custom_fences': [{'name': 'mermaid', 'class': 'mermaid', 'format': < function fence_code_format at 0x10f94c940 > }]}}, 'strict': False, 'remote_branch': 'gh-pages', 'remote_name': 'origin', 'extra': {'SEO': 'assets/meta/SEO.png', 'comments': False, 'generate_graph': False, 'attachments': 'assets/img', 'no-auto-h1': False, 'blog_list': {'pagination': True, 'pagination_message': True, 'pagination_translation': 'posts in', 'no_page_found': 'No pages found!'}, 'hooks': {'strip_comments': True, 'fix_heading': True}}, 'plugins': {'material/search': < material.plugins.search.plugin.SearchPlugin object at 0x10fa4ece0 > , 'meta-descriptions': < mkdocs_meta_descriptions_plugin.plugin.MetaDescription object at 0x10fa4f640 > , 'git-revision-date-localized': < mkdocs_git_revision_date_localized_plugin.plugin.GitRevisionDateLocalizedPlugin object at 0x10fa4f340 > , 'ezlinks': < mkdocs_ezlinks_plugin.plugin.EzLinksPlugin object at 0x1107f0cd0 > , 'awesome-pages': < mkdocs_awesome_pages_plugin.plugin.AwesomePagesPlugin object at 0x1107f3220 > , 'embed_file': < mkdocs_embed_file_plugins.plugin.EmbedFile object at 0x110939990 > , 'custom-attributes': < custom_attributes.plugin.TagsAttributePlugins object at 0x110b67010 > , 'encryptcontent': < encryptcontent.plugin.encryptContentPlugin object at 0x110b67250 > , 'callouts': < mkdocs_callouts.plugin.CalloutsPlugin object at 0x111363f40 > , 'glightbox': < mkdocs_glightbox.plugin.LightboxPlugin object at 0x111363fd0 > , 'overrides/hooks/on_page_markdown.py': < module 'overrides/hooks/on_page_markdown.py' from '/Users/benjitusk/Documents/Obsidian Vault-Computer Science/Computer Science/overrides/hooks/on_page_markdown.py' > , 'overrides/hooks/on_env.py': < module 'overrides/hooks/on_env.py' from '/Users/benjitusk/Documents/Obsidian Vault-Computer Science/Computer Science/overrides/hooks/on_env.py' > , 'overrides/hooks/on_files.py': < module 'overrides/hooks/on_files.py' from '/Users/benjitusk/Documents/Obsidian Vault-Computer Science/Computer Science/overrides/hooks/on_files.py' > }, 'hooks': {'overrides/hooks/on_page_markdown.py': < module 'overrides/hooks/on_page_markdown.py' from '/Users/benjitusk/Documents/Obsidian Vault-Computer Science/Computer Science/overrides/hooks/on_page_markdown.py' > , 'overrides/hooks/on_env.py': < module 'overrides/hooks/on_env.py' from '/Users/benjitusk/Documents/Obsidian Vault-Computer Science/Computer Science/overrides/hooks/on_env.py' > , 'overrides/hooks/on_files.py': < module 'overrides/hooks/on_files.py' from '/Users/benjitusk/Documents/Obsidian Vault-Computer Science/Computer Science/overrides/hooks/on_files.py' > }, 'watch': [], 'validation': {'nav': {'omitted_files': 20, 'not_found': 30, 'absolute_links': 20}, 'links': {'not_found': 30, 'absolute_links': 20, 'unrecognized_links': 20}}}
