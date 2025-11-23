# Jekyll GitHub Pages Website

A complete, modern Jekyll website with multi-level navigation, ready to deploy on GitHub Pages.

## 🚀 Features

✅ **Responsive Navigation** - Multi-level dropdown menus with mobile toggle  
✅ **Modern Design** - Clean, professional layout with gradient hero section  
✅ **SEO Optimized** - Meta tags and structured data  
✅ **Blog Functionality** - Full blog with categories and pagination support  
✅ **Pure HTML/CSS/JS** - No SCSS compilation needed  
✅ **GitHub Pages Ready** - Works out of the box with GitHub Pages  

## 📁 Project Structure

```
.
├── _config.yml              # Site configuration
├── _data/
│   └── navigation.yml       # Navigation menu structure
├── _includes/
│   ├── nav.html            # Navigation component
│   └── footer.html         # Footer component
├── _layouts/
│   ├── default.html        # Base layout
│   ├── page.html           # Page layout
│   └── post.html           # Blog post layout
├── _posts/
│   └── 2025-11-24-welcome.md  # Sample blog post
├── assets/
│   ├── css/
│   │   └── main.css        # Main stylesheet
│   └── js/
│       └── main.js         # JavaScript for navigation
├── index.html              # Homepage
├── Gemfile                 # Ruby dependencies
└── README.md              # This file
```

## 🛠️ Setup Instructions

### Option 1: GitHub Pages (Recommended)

1. **Fork or create a new repository** on GitHub
2. **Upload all files** to the repository
3. Go to **Settings → Pages**
4. Select **Source**: Deploy from a branch
5. Select **Branch**: main (or master)
6. Click **Save**
7. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Local Development

1. **Install Ruby** (version 2.7 or higher)
2. **Install Bundler**: `gem install bundler`
3. **Clone the repository**
4. **Install dependencies**: `bundle install`
5. **Run locally**: `bundle exec jekyll serve`
6. Visit `http://localhost:4000`

## ✏️ Customization

### Update Site Information

Edit `_config.yml`:

```yaml
title: "Your Name"
description: "Your site description"
url: "https://yourusername.github.io"
baseurl: "/repository-name"  # If not using custom domain
```

### Add Blog Posts

Create new markdown files in `_posts/` with the format:

```
YYYY-MM-DD-title.md
```

Example post:

```markdown
---
layout: post
title: "My Post Title"
date: 2025-11-24 10:00:00 +0545
categories: blog research
---

Your content here...
```

### Modify Navigation

Edit `_data/navigation.yml` to add, remove, or modify menu items:

```yaml
main:
  - title: "New Section"
    url: /new-section/
    children:
      - title: "Subsection"
        url: /new-section/subsection/
```

### Customize Styling

Edit `assets/css/main.css` to change colors, fonts, and layout:

```css
/* Change primary color */
.btn-primary {
  background: #your-color;
}
```

## 📄 Creating Pages

Create new pages in the root directory or in folders:

```markdown
---
layout: page
title: "About"
---

Your page content here...
```

## 🌐 Navigation Structure

The site includes these main sections:

- **Study Abroad** - Services, guides, scholarships, packages
- **Publications** - Journal articles, conference papers, reports, books
- **Talks** - Workshops, guest lectures, media appearances
- **Teaching** - Courses, syllabi, supervision
- **Portfolio** - Business development, environment solutions, consulting, writing
- **Blog Posts** - Career, research, sustainability topics
- **CV** - Curriculum vitae
- **Projects** - Active, completed, and funded research

## 🔧 Troubleshooting

### Site not building?
- Check `_config.yml` for syntax errors
- Ensure all front matter is properly formatted with `---`
- Check GitHub Pages build status in repository settings

### Navigation not working on mobile?
- Clear browser cache
- Check that `assets/js/main.js` is loading correctly

### Styling issues?
- Verify `assets/css/main.css` path is correct
- Check for CSS syntax errors

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork, modify, and use this template for your own projects!

## 📞 Support

For issues or questions, please open an issue in the GitHub repository.

---

Built with ❤️ using Jekyll and GitHub Pages